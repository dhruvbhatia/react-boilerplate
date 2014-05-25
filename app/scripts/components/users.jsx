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

  render: function() {

    var self = this;

    var moreCustomAttributes = function(user) {

      if(_.chain(user.custom_attributes).keys().size() == 0) {
        return(<span>-</span>);
      }

      if(_.chain(user.custom_attributes).keys().size() > 2) {
        return(<span>...</span>);
      }

    };

    var users = _.chain(this.props.websites).where({'id' : this.props.activeWebsite}).pluck('contacts').flatten().map(function(user) {

      return(
             <tr id={user.user_id} key={user.user_id}>
             <td>{user.user_id}</td>
             <td>{user.user_name}</td>
             <td>{user.user_email}</td>
             <td>{moment(user.user_signup_date).fromNow()}</td>
             <td>{moment(user.user_last_seen).fromNow()}</td>
             <td>{_.chain(user.custom_attributes).keys().first(2).map(function(key) {
              return (<span>{key}<br /></span>);
            })}

             {moreCustomAttributes(user)}

             </td>
             <td><button onClick={self.routeEditUser} className="button radius">Edit</button></td>
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
            <th>Last Seen</th>
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

var EditUser = React.createClass({

  getInitialState: function() {

    return {user: undefined};

  },

  saveUser: function(e) {

    e.preventDefault();
    var self = this;

    console.log("saving...");

    var website_id = this.state.user.website_id;
    var user_id = this.state.user.user_id;
    var user_name = $('#userName').val();
    var user_email = $('#userEmail').val();
    var user_signup_date = $('#userSignupDate').val();

    var custom_attributes = {};

    var requiredFields = {
      'website_id': website_id,
      'user_id': user_id,
      'user_name': user_name,
      'user_email': user_email,
      'user_signup_date': user_signup_date
    };

    var customAttrKeys = [];
    var customAttrValues = [];

    $('.custom-attribute').each(function(index, el){

      if(!_.isEmpty($(this).find('.custom-attribute-key').val())) {

        customAttrKeys.push($(this).find('.custom-attribute-key').val());
        customAttrValues.push($(this).find('.custom-attribute-value').val());
      }

    });

    custom_attributes = _.zipObject(customAttrKeys, customAttrValues);

    console.log(custom_attributes);

    var cookie = JSON.parse($.cookie("application"));
    var token = cookie.sessionId;


    superagent
    .get(CONFIG.URLS.saveUser)
    .set('X-API-Key', token)
    .query(custom_attributes)
    .query(requiredFields)
    .set('Accept', 'application/json')
    .end(function(error, res){

      console.log(res);

      if(res.ok) {

        self.props.setPos("users", "Users");
        self.props.setAlert(user_name + " has been updated!", "success");

      } else {

        // a validation error occurred
        if(JSON.parse(res.text).response) {
          var errors = JSON.parse(res.text).response.error;

          self.props.setPos("users", "Users");
          self.props.setAlert("Unable to update " + user_name + ". The following errors occurred: " + JSON.stringify(errors), "alert");

        }


      }

    });


  },

  componentDidMount: function() {


    // Ensure current path references a website that the user owns
    var id = Backbone.history.fragment.replace("users/edit/", "");

    var users = _.chain(this.props.websites).where({'id' : this.props.activeWebsite}).pluck('contacts').flatten().value();

    var match = _.find(users, {"user_id" : parseInt(id)});


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
  .query({user_id: this.state.user.user_id})
  .query({website_id: this.state.user.website_id})
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

      var customAttributes = _.map(self.state.user.custom_attributes, function(attribute, key) {

        var index = _.chain(self.state.user.custom_attributes).keys().value().indexOf(key) + 1;

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

        var index = _.size(self.state.user.custom_attributes);

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
       <li className="current">{this.state.user.user_name}</li>
       </ul>

       <h2>Editing {this.state.user.user_name}</h2>



       <div className="row">
       <form>
       <fieldset>
       <legend>Required Fields</legend>
       <label>Name
       <input id="userName" type="text" placeholder="Name" defaultValue={this.state.user.user_name} />
       </label>

       <label>Email Address
       <input id="userEmail" type="text" placeholder="Email Address" defaultValue={this.state.user.user_email} />
       </label>

       <label>Signup Date
       <input id="userSignupDate" type="text" placeholder="Signup Date" defaultValue={this.state.user.user_signup_date} />
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

       <p>Click the button below to <strong>permenantly remove {this.state.user.user_name} and all of their data</strong> from the system.</p>
       <button onClick={this.deleteUser} className="button radius alert expand">Delete</button>


       </div>

       </div>
       )

} else {
  return (
          <div>
          No user
          </div>

          )
}

}


});

exports.Users = Users;
exports.EditUser = EditUser;