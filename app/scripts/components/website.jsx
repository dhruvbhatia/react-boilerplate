/** @jsx React.DOM */
'use strict';

var CONFIG = require('../config');

var Websites = React.createClass({

  routeAddWebsite: function(e) {
    e.preventDefault();
    console.log("button clicked");
    this.props.setWebsite(undefined);
    this.props.setPos("websites/add", "Add Website");
  },

  routeEditWebsite: function(e) {
    e.preventDefault();
    var id = $(e.target).closest("tr").attr("id");
    console.log(id);
    this.props.setWebsite(id);
    this.props.setPos("websites/edit/" + id, "Edit Website");
  },

  render: function() {

    var websites = this.props.websites;
    var self = this;


    var rows = _.map(websites, function(website) {

      return(
             <tr id={website.id} key={website.id}>
             <td>{website.name}</td>
             <td>{website.contacts.length}</td>
             <td>{website.senderName} ({website.senderEmail})</td>
             <td>{moment(website.createdAt).fromNow()}</td>
             <td><button onClick={self.routeEditWebsite} className="button radius">Edit</button></td>
             </tr>

             );

    });

    return (


            <div>
            <h2>Websites</h2>

            <table width="100%">
            <thead>
            <tr>
            <th>Website Name</th>
            <th>Users</th>
            <th>Sender Details</th>
            <th>Created</th>
            <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
            </table>




            <div className="text-center">
            <button onClick={this.routeAddWebsite} className="button radius">Add New Website</button>

            </div>
            </div>
            );

  }

});


var AddWebsite = React.createClass({

  getInitialState: function() {

    return {nameError: undefined, urlError: undefined, senderNameError: undefined, senderEmailError: undefined, serverError: undefined};

  },

  componentDidMount: function() {

    this.props.setWebsite(undefined);

  },

  routeWebsites: function(e) {
    e.preventDefault();
    this.props.setPos("websites", "Websites");
  },

  saveWebsite: function(e) {
    e.preventDefault();
    console.log("saving..");

    var self = this;

    var name = $('input#name').val();
    var url = $('input#url').val();
    var senderName = $('input#senderName').val();
    var senderEmail = $('input#senderEmail').val();


    // Validate - fields must not be empty
    if(_.isEmpty(name)) {
      self.setState({nameError: "Name cannot be blank"});
    } else {
      self.setState({nameError: undefined});
    }

    if(_.isEmpty(url)) {
      self.setState({urlError: "URL cannot be blank"});
    } else {
      self.setState({urlError: undefined});
    }

    if(_.isEmpty(senderName)) {
      self.setState({senderNameError: "Sender Name cannot be blank"});
    } else {
      self.setState({senderNameError: undefined});
    }

    if(_.isEmpty(senderEmail)) {
      self.setState({senderEmailError: "Sender Email cannot be blank"});
    } else if(senderEmail.indexOf("@") === -1) {
      this.setState({senderEmailError: "Please input a valid email address"});
    } else {
      self.setState({senderEmailError: undefined});
    }

// send to server if client validation passes
if(!_.some([this._pendingState.nameError, this._pendingState.urlError, this._pendingState.senderNameError, this._pendingState.senderEmailError])) {

  var newWebsite = {};

  newWebsite.name = name;
  newWebsite.url = url;
  newWebsite.senderName = senderName;
  newWebsite.senderEmail = senderEmail;

  console.log(newWebsite);

  var cookie = JSON.parse($.cookie("application"));
  var token = cookie.sessionId;


  superagent
  .post(CONFIG.URLS.addWebsite)
  .set('X-API-Key', token)
  .query(newWebsite)
  .set('Accept', 'application/json')
  .end(function(error, res){

    console.log(res);

    if(res.ok) {

      self.props.setPos("websites", "Websites");
      self.props.setAlert(name + " has been added!", "success");

    } else {

          // a validation error occurred
          if(JSON.parse(res.text).response) {
            var errors = JSON.parse(res.text).response.error;


            if(!_.isUndefined(errors.name)) {
              self.setState({nameError: errors.name.error});
            }

            if(!_.isUndefined(errors.url)) {
              self.setState({urlError: errors.url.error});
            }

            if(!_.isUndefined(errors.senderName)) {
              self.setState({senderNameError: errors.senderName.error});
            }

            if(!_.isUndefined(errors.senderEmail)) {
              self.setState({senderEmailError: errors.senderEmail.error});
            }

          } else {
            // a token error occurred
            if(JSON.parse(res.text).error) {
              var serverError = JSON.parse(res.text).error;
              self.setState({serverError: serverError});

              if(JSON.parse(res.text).sessionInvalid) {
                self.props.setUser(undefined);
              }
            }
          }

        }


      });

}

},

render: function() {

  var self = this;

  var serverError = function() {
    if(self.state.serverError !== undefined) {
      return (
              <small className="error">{self.state.serverError}</small>
              );
    }
  };

  var nameError = function() {
    if(self.state.nameError !== undefined) {
      return (
              <small className="error">{self.state.nameError}</small>
              );
    }
  };

  var urlError = function() {
    if(self.state.urlError !== undefined) {
      return (
              <small className="error">{self.state.urlError}</small>
              );
    }
  };

  var senderNameError = function() {
    if(self.state.senderNameError !== undefined) {
      return (
              <small className="error">{self.state.senderNameError}</small>
              );
    }
  };

  var senderEmailError = function() {
    if(self.state.senderEmailError !== undefined) {
      return (
              <small className="error">{self.state.senderEmailError}</small>
              );
    }
  };

  return (

          <div className="text-center">

          <ul className="breadcrumbs">
          <li><a onClick={this.routeWebsites}>Websites</a></li>
          <li className="current">Add Website</li>
          </ul>

          <h2>Add Website</h2>

          <div className="row">
          <form>
          <fieldset>
          <legend>Website Details</legend>
          {serverError()}
          <label>Website Name
          <input id="name" type="text" placeholder="Website Name" />
          {nameError()}
          </label>

          <label>URL
          <input id="url" type="text" placeholder="Website URL" />
          {urlError()}
          </label>

          <label>Sender Name
          <input id="senderName" type="text" placeholder="Sender Name" />
          {senderNameError()}
          </label>

          <label>Sender Email
          <input id="senderEmail" type="text" placeholder="Sender Email" />
          {senderEmailError()}
          </label>

          </fieldset>

          <button onClick={this.saveWebsite} className="button radius expand">Add</button>
          </form>
          </div>

          </div>
          );



}

});

var EditWebsite = React.createClass({

  getInitialState: function() {

    return {nameError: undefined, urlError: undefined, senderNameError: undefined, senderEmailError: undefined, serverError: undefined};

  },

  componentDidMount: function() {


    // Ensure current path references a website that the user owns
    var id = Backbone.history.fragment.replace("websites/edit/", "");
    var websites = this.props.websites;

    console.log(id);

    if(this.props.activeWebsite !== id) {
      var match = _.find(websites, {"id" : parseInt(id)});

      if(!_.isEmpty(match)) {

      // Path id is a valid website
      this.props.setWebsite(id);

    } else {

      // Path id is not a valid website
      this.props.setPos("websites", "Websites");

    }

  }
},

routeWebsites: function(e) {
  e.preventDefault();
  this.props.setPos("websites", "Websites");
},

deleteWebsite: function(e) {
  e.preventDefault();
  console.log("deleting..");

  var cookie = JSON.parse($.cookie("application"));
  var self = this;
  var token = cookie.sessionId;


  superagent
  .post(CONFIG.URLS.deleteWebsite)
  .set('X-API-Key', token)
  .query({id: this.props.activeWebsite})
  .set('Accept', 'application/json')
  .end(function(error, res){

    console.log(res);

    if(res.ok) {

      self.props.setPos("websites", "Websites");
      self.props.setAlert("Website has been deleted!", "success");

    }

  });


},


saveWebsite: function(e) {
  e.preventDefault();
  console.log("saving..");


  var cookie = $.cookie("application");
  var websites = this.props.websites;


  var activeWebsite = _.find(websites, { "id" : parseInt(JSON.parse(cookie).activeWebsite)});
  var self = this;

  var name = $('input#name').val();
  var url = $('input#url').val();
  var senderName = $('input#senderName').val();
  var senderEmail = $('input#senderEmail').val();


    // Validate - fields must not be empty
    if(_.isEmpty(name)) {
      self.setState({nameError: "Name cannot be blank"});
    } else {
      self.setState({nameError: undefined});
    }

    if(_.isEmpty(url)) {
      self.setState({urlError: "URL cannot be blank"});
    } else {
      self.setState({urlError: undefined});
    }

    if(_.isEmpty(senderName)) {
      self.setState({senderNameError: "Sender Name cannot be blank"});
    } else {
      self.setState({senderNameError: undefined});
    }

    if(_.isEmpty(senderEmail)) {
      self.setState({senderEmailError: "Sender Email cannot be blank"});
    } else if(senderEmail.indexOf("@") === -1) {
      this.setState({senderEmailError: "Please input a valid email address"});
    } else {
      self.setState({senderEmailError: undefined});
    }

// send to server if client validation passes
if(!_.some([this._pendingState.nameError, this._pendingState.urlError, this._pendingState.senderNameError, this._pendingState.senderEmailError])) {

  var updatedWebsite = {};

  updatedWebsite.id = activeWebsite.id;
  updatedWebsite.name = name;
  updatedWebsite.url = url;
  updatedWebsite.senderName = senderName;
  updatedWebsite.senderEmail = senderEmail;

  console.log(updatedWebsite);

  var token = cookie.sessionId;


  superagent
  .post(CONFIG.URLS.updateWebsite)
  .set('X-API-Key', token)
  .query(updatedWebsite)
  .set('Accept', 'application/json')
  .end(function(error, res){

    console.log(res);

    if(res.ok) {

      self.props.setPos("websites", "Websites");
      self.props.setAlert(name + " has been updated!", "success");

    } else {

          // a validation error occurred
          if(JSON.parse(res.text).response) {
            var errors = JSON.parse(res.text).response.error;


            if(!_.isUndefined(errors.name)) {
              self.setState({nameError: errors.name.error});
            }

            if(!_.isUndefined(errors.url)) {
              self.setState({urlError: errors.url.error});
            }

            if(!_.isUndefined(errors.senderName)) {
              self.setState({senderNameError: errors.senderName.error});
            }

            if(!_.isUndefined(errors.senderEmail)) {
              self.setState({senderEmailError: errors.senderEmail.error});
            }

          } else {
            // a token error occurred
            if(JSON.parse(res.text).error) {
              var serverError = JSON.parse(res.text).error;
              self.setState({serverError: serverError});

              if(JSON.parse(res.text).sessionInvalid) {
                self.props.setUser(undefined);
              }
            }
          }

        }


      });

}

},


render: function() {
  
  var cookie = $.cookie("application");
  var websites = this.props.websites;


  var activeWebsite = _.find(websites, { "id" : parseInt(JSON.parse(cookie).activeWebsite)});
  var id = Backbone.history.fragment.replace("websites/edit/", "");
  var self = this;

  var serverError = function() {
    if(self.state.serverError !== undefined) {
      return (
              <small className="error">{self.state.serverError}</small>
              );
    }
  };

  var nameError = function() {
    if(self.state.nameError !== undefined) {
      return (
              <small className="error">{self.state.nameError}</small>
              );
    }
  };

  var urlError = function() {
    if(self.state.urlError !== undefined) {
      return (
              <small className="error">{self.state.urlError}</small>
              );
    }
  };

  var senderNameError = function() {
    if(self.state.senderNameError !== undefined) {
      return (
              <small className="error">{self.state.senderNameError}</small>
              );
    }
  };

  var senderEmailError = function() {
    if(self.state.senderEmailError !== undefined) {
      return (
              <small className="error">{self.state.senderEmailError}</small>
              );
    }
  };


  if(!_.isEmpty(activeWebsite)) {
    if(activeWebsite.id === parseInt(id)) {

      return (

              <div className="text-center">

              <ul className="breadcrumbs">
              <li><a onClick={this.routeWebsites}>Websites</a></li>
              <li className="current">Edit Website</li>
              <li className="current">{activeWebsite.name}</li>
              </ul>

              <h2>Editing {activeWebsite.name}</h2>

              <div className="row">
              <form>
              <fieldset>
              <legend>Update Details</legend>
              {serverError()}
              <label>Website Name
              <input id="name" type="text" placeholder="Website Name" defaultValue={activeWebsite.name} />
              {nameError()}
              </label>

              <label>URL
              <input id="url" type="text" placeholder="Website URL" defaultValue={activeWebsite.url} />
              {urlError()}
              </label>

              <label>Sender Name
              <input id="senderName" type="text" placeholder="Sender Name" defaultValue={activeWebsite.senderName} />
              {senderNameError()}
              </label>

              <label>Sender Email
              <input id="senderEmail" type="text" placeholder="Sender Email" defaultValue={activeWebsite.senderEmail} />
              {senderEmailError()}
              </label>

              </fieldset>

              <button onClick={this.saveWebsite} className="button radius expand">Update</button>
              </form>

              <hr />
              <h3>Permenantly Delete Website</h3>
              
              <p>Click the button below to <strong>permenantly remove the {activeWebsite.name} website and all of its data</strong> from the system.</p>
              <button onClick={this.deleteWebsite} className="button radius alert expand">Delete</button>
              </div>


              </div>
              );
} else {
  return (
          <div>
          An unexpected error occurred
          </div>);
} 
} else {
  return (
          <div>
          An unexpected error occurred
          </div>);
}
}

});

exports.Websites = Websites;
exports.AddWebsite = AddWebsite;
exports.EditWebsite = EditWebsite;
