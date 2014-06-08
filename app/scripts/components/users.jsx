/** @jsx React.DOM */
'use strict';

var CONFIG = require('../config');

var Users = React.createClass({


  routeEditUser: function(e) {

    e.preventDefault();
    var id = $(e.target).closest("tr").attr("id");
    console.log(id);
    //this.props.setWebsite(id);
    this.props.setPos("users/edit/" + id, "Edit User");

  },

  routeUserProfile: function(e) {

    e.preventDefault();
    var id = $(e.target).closest("tr").attr("id");
    console.log(id);
    //this.props.setWebsite(id);
    this.props.setPos("users/profile/" + id, "User Profile");

  },

  render: function() {

    var self = this;

    var moreCustomAttributes = function(user) {

      if(_.chain(user.customAttributes).keys().size().value() === 0) {
        return(<span>-</span>);
      }

      if(_.chain(user.customAttributes).keys().size().value() > 2) {
        return(<span>...</span>);
      }

    };

    var users = _.chain(this.props.websites).where({'id' : this.props.activeWebsite}).pluck('contacts').flatten().sortBy(function(user) { return -user.userLastSeen;}).map(function(user) {

      return(
             <tr id={user.userId} key={user.userId}>
             <td>{user.userId}</td>
             <td>{user.userName}</td>
             <td>{user.userEmail}</td>
             <td>{moment(user.userSignupDate).fromNow()}</td>
             <td>{moment(user.userLastSeen).fromNow()}</td>
             <td>{_.chain(user.customAttributes).keys().first(2).map(function(key) {
              return (<span>{key}<br /></span>);
            })}

             {moreCustomAttributes(user)}

             </td>
             <td>
             <button onClick={self.routeUserProfile} className="button radius">Profile</button>
             <br />
             <button onClick={self.routeEditUser} className="button radius">Edit</button>
             </td>
             </tr>

             );


    });

    console.log(users);



    return (
            <div>
            <h2>Users</h2>

            <table width="100%">
            <thead>
            <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Signup Date</th>
            <th>Last Seen ▾</th>
            <th>Custom Attributes</th>
            <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {users}
            </tbody>
            </table>

            <hr />
            Users are automatically added to the above list when you have the tracking API installed.

            </div>
            );

  }

});

var UserProfile = React.createClass({

  getInitialState: function() {

    return {user: undefined};

  },

  componentDidMount: function() {


    // Ensure current path references a website that the user owns
    var id = Backbone.history.fragment.replace("users/profile/", "");

    var users = _.chain(this.props.websites).where({'id' : this.props.activeWebsite}).pluck('contacts').flatten().value();

    var match = _.find(users, {"userId" : parseInt(id)});


    // Redirect if id is non numeric
    if (!/^\d+$/.test(id)) {

      match = undefined;

    }


    if(_.isUndefined(match)) {

      // Path id is an invalid user
      this.props.setPos("users", "Users");

    } else {
      this.setState({user: match});
    }

  },

  routeUsers: function(e) {

    e.preventDefault();
    this.props.setPos("users", "Users");

  },

  render: function() {


    var self = this;

    var events = function() {
      if(!_.isEmpty(self.state.user.events)) {




        var rows = _.chain(self.state.user.events).sortBy(function(event) { return -event.createdAt;}).map(function(event) {

          var customAttrs = _.chain(event.customAttributes).keys().first(2).map(function(key) {

            return (<span>{key} = {event.customAttributes[key].value}<br /></span>);
          });

          var moreCustomAttributes = function() {

            if(_.chain(event.customAttributes).keys().size() === 0) {
              return(<span>-</span>);
            }

            if(_.chain(event.customAttributes).keys().size() > 2) {
              return(<span>...</span>);
            }

          };

          return(
                 <tr id={event.id} key={event.id}>
                 <td>{event.eventName}</td>
                 <td>
                 {customAttrs}
                 {moreCustomAttributes()}
                 </td>

                 <td>{moment(event.createdAt).fromNow()}</td>
                 </tr>

                 );

        });


        return (
                <div>
                
                <table width="100%">
                <thead>
                <tr>
                <th>Event Name</th>
                <th>Event Data</th>
                <th>Event Timestamp ▾</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
                </table>


                </div>

                );

      } else {

        return (
                <div>
                User has no events
                </div>

                );


      }
    };

    if(!_.isUndefined(this.state.user)) {

      return (
              <div>
              <strong>User ID: </strong>{this.state.user.userId}
              <br />
              <strong>User Name: </strong>{this.state.user.userName}
              <br />
              <strong>User Email: </strong>{this.state.user.userEmail}
              <br />
              <strong>Signed Up: </strong>{moment(this.state.user.userSignupDate).fromNow()}
              <br />
              <strong>Last Seen: </strong>{moment(this.state.user.userLastSeen).fromNow()}

              <hr />
              {events()}

              </div>

              );

    } else {

      return (<div>No User</div>);


    }
  }

});


var EditUser = React.createClass({

  getInitialState: function() {

    return {user: undefined};

  },

  saveUser: function(e) {

    e.preventDefault();
    var self = this;

    console.log("saving...");

    var websiteId = this.state.user.websiteId;
    var userId = this.state.user.userId;
    var userName = $('#userName').val();
    var userEmail = $('#userEmail').val();
    var userSignupDate = $('#userSignupDate').val();

    var customAttributes = {};

    var requiredFields = {
      'websiteId': websiteId,
      'userId': userId,
      'userName': userName,
      'userEmail': userEmail,
      'userSignupDate': userSignupDate
    };

    var customAttrKeys = [];
    var customAttrValues = [];

    $('.custom-attribute').each(function(index, el){

      if(!_.isEmpty($(this).find('.custom-attribute-key').val())) {

        customAttrKeys.push($(this).find('.custom-attribute-key').val());
        customAttrValues.push($(this).find('.custom-attribute-value').val());
      }

    });

    customAttributes = _.zipObject(customAttrKeys, customAttrValues);

    console.log(customAttributes);

    var cookie = JSON.parse($.cookie("application"));
    var token = cookie.sessionId;


    superagent
    .get(CONFIG.URLS.saveUser)
    .set('X-API-Key', token)
    .query(customAttributes)
    .query(requiredFields)
    .set('Accept', 'application/json')
    .end(function(error, res){

      console.log(res);

      if(res.ok) {

        self.props.setPos("users", "Users");
        self.props.setAlert(userName + " has been updated!", "success");

      } else {

        // a validation error occurred
        if(JSON.parse(res.text).response) {
          var errors = JSON.parse(res.text).response.error;

          self.props.setPos("users", "Users");
          self.props.setAlert("Unable to update " + userName + ". The following errors occurred: " + JSON.stringify(errors), "alert");

        }


      }

    });


  },

  componentDidMount: function() {


    // Ensure current path references a website that the user owns
    var id = Backbone.history.fragment.replace("users/edit/", "");

    var users = _.chain(this.props.websites).where({'id' : this.props.activeWebsite}).pluck('contacts').flatten().value();

    var match = _.find(users, {"userId" : parseInt(id)});


    // Redirect if id is non numeric
    if (!/^\d+$/.test(id)) {

      match = undefined;

    }


    if(_.isUndefined(match)) {

      // Path id is an invalid user
      this.props.setPos("users", "Users");

    } else {
      this.setState({user: match});
    }

  },

  routeUsers: function(e) {

    e.preventDefault();
    this.props.setPos("users", "Users");

  },

  deleteUser: function(e) {

    e.preventDefault();
    console.log("deleting..");

    var cookie = JSON.parse($.cookie("application"));
    var self = this;
    var token = cookie.sessionId;


    superagent
    .post(CONFIG.URLS.deleteUser)
    .set('X-API-Key', token)
    .query({userId: this.state.user.userId})
    .query({websiteId: this.state.user.websiteId})
    .set('Accept', 'application/json')
    .end(function(error, res){

      console.log(res);

      if(res.ok) {

        self.props.setPos("users", "Users");
        self.props.setAlert("User has been deleted!", "success");

      }

    });

  },

  render: function() {

    var self = this;

    if(!_.isUndefined(this.state.user)) {

      var customAttributes = _.map(self.state.user.customAttributes, function(attribute, key) {

        var index = _.chain(self.state.user.customAttributes).keys().value().indexOf(key) + 1;

        return (
                <div id={"custom-attribute-" + index} key={index} className="row custom-attribute">
                <div className="small-6 columns">
                <input className="custom-attribute-key" type="text" placeholder="Value" defaultValue={key} readOnly />
                </div>
                <div className="small-6 columns">
                <input className="custom-attribute-value" type="text" placeholder="Value" defaultValue={attribute.value} />
                </div>
                </div>

                );


      });

      var additionalCustomAttributes = function() {

        var index = _.size(self.state.user.customAttributes);

        return (
                <div>

                <div id={"custom-attribute-".concat(index + 1)} className="row custom-attribute">
                <div className="small-6 columns">
                <input className="custom-attribute-key" type="text" placeholder="Key" />
                </div>
                <div className="small-6 columns">
                <input className="custom-attribute-value" type="text" placeholder="Value" />
                </div>
                </div>

                <div id={"custom-attribute-".concat(index + 2)} className="row custom-attribute">
                <div className="small-6 columns">
                <input className="custom-attribute-key" type="text" placeholder="Key" />
                </div>
                <div className="small-6 columns">
                <input className="custom-attribute-value" type="text" placeholder="Value" />
                </div>
                </div>

                <div id={"custom-attribute-".concat(index + 3)} className="row custom-attribute">
                <div className="small-6 columns">
                <input className="custom-attribute-key" type="text" placeholder="Key" />
                </div>
                <div className="small-6 columns">
                <input className="custom-attribute-value" type="text" placeholder="Value" />
                </div>
                </div>

                </div>


                );


};


return(

       <div className="text-center">
       <ul className="breadcrumbs">
       <li><a onClick={this.routeUsers}>Users</a></li>
       <li className="current">Edit User</li>
       <li className="current">{this.state.user.userName}</li>
       </ul>

       <h2>Editing {this.state.user.userName}</h2>



       <div className="row">
       <form>
       <fieldset>
       <legend>Required Fields</legend>
       <label>Name
       <input id="userName" type="text" placeholder="Name" defaultValue={this.state.user.userName} />
       </label>

       <label>Email Address
       <input id="userEmail" type="text" placeholder="Email Address" defaultValue={this.state.user.userEmail} />
       </label>

       <label>Signup Date
       <input id="userSignupDate" type="text" placeholder="Signup Date" defaultValue={this.state.user.userSignupDate} />
       </label>

       </fieldset>

       <fieldset>
       <legend>Custom Attributes</legend>
       <div className="callout panel text-center">To remove an attribute, set it's value to null</div>

       {customAttributes}
       {additionalCustomAttributes()}

       </fieldset>


       <button onClick={this.saveUser} className="button radius expand">Update</button>
       </form>

       <hr />
       <h3>Permenantly Delete User</h3>

       <p>Click the button below to <strong>permenantly remove {this.state.user.userName} and all of their data</strong> from the system.</p>
       <button onClick={this.deleteUser} className="button radius alert expand">Delete</button>


       </div>

       </div>
       );

} else {
  return (
          <div>
          No user
          </div>

          );
}

}


});

exports.Users = Users;
exports.EditUser = EditUser;
exports.UserProfile = UserProfile;