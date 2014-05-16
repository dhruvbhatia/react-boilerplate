/** @jsx React.DOM */

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
    var website_id = $(e.target).closest("tr").attr("id");
    console.log(website_id);
    this.props.setWebsite(website_id);
    this.props.setPos("websites/edit/" + website_id, "Edit Website");
  },

  render: function() {

    var websites = this.props.websites;
    var self = this;


    var website_rows = _.map(websites, function(website) {

      return(
             <tr id={website.id} key={website.id}>
             <td>{website.name}</td>
             <td>{website.contact_count}</td>
             <td>{website.sender_name} ({website.sender_email})</td>
             <td>{moment(website.created_at).fromNow()}</td>
             <td><button onClick={self.routeEditWebsite} className="button radius">Edit</button></td>
             </tr>

             )

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
            {website_rows}
            </tbody>
            </table>




            <div className="text-center">
            <button onClick={this.routeAddWebsite} className="button radius">Add New Website</button>

            </div>
            </div>
            )

  }

});


var AddWebsite = React.createClass({

  getInitialState: function() {

    return {name_error: undefined, url_error: undefined, sender_name_error: undefined, sender_email_error: undefined, server_error: undefined};

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
  var sender_name = $('input#sender_name').val();
  var sender_email = $('input#sender_email').val();


    // Validate - fields must not be empty
    if(_.isEmpty(name)) {
      self.setState({name_error: "Name cannot be blank"});
    } else {
      self.setState({name_error: undefined});
    };

    if(_.isEmpty(url)) {
      self.setState({url_error: "URL cannot be blank"});
    } else {
      self.setState({url_error: undefined});
    };

    if(_.isEmpty(sender_name)) {
      self.setState({sender_name_error: "Sender Name cannot be blank"});
    } else {
      self.setState({sender_name_error: undefined});
    };

    if(_.isEmpty(sender_email)) {
      self.setState({sender_email_error: "Sender Email cannot be blank"});
    } else if(sender_email.indexOf("@") === -1) {
      this.setState({sender_email_error: "Please input a valid email address"});
    } else {
      self.setState({sender_email_error: undefined});
    };

// send to server if client validation passes
if(!_.some([this._pendingState.name_error, this._pendingState.url_error, this._pendingState.sender_name_error, this._pendingState.sender_email_error])) {

  var new_website = {};

  new_website.name = name;
  new_website.url = url;
  new_website.sender_name = sender_name;
  new_website.sender_email = sender_email;

  console.log(new_website);

  var cookie = JSON.parse($.cookie("application"));
  var token = cookie.sessionId;


  superagent
  .post(CONFIG.URLS.addWebsite)
  .set('X-API-Key', token)
  .query(new_website)
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
              self.setState({name_error: errors.name.error})
            }

            if(!_.isUndefined(errors.url)) {
              self.setState({url_error: errors.url.error})
            }

            if(!_.isUndefined(errors.sender_name)) {
              self.setState({sender_name_error: errors.sender_name.error})
            }

            if(!_.isUndefined(errors.sender_email)) {
              self.setState({sender_email_error: errors.sender_email.error})
            }

          } else {
            // a token error occurred
            if(JSON.parse(res.text).error) {
              var error = JSON.parse(res.text).error;
              self.setState({server_error: error});

              if(JSON.parse(res.text).session_invalid) {
              self.props.setUser(undefined);
            }
            }
          }

        }


      })

}

},

  render: function() {

 var self = this;

  var server_error = function() {
    if(self.state.server_error !== undefined) {
      return (
              <small className="error">{self.state.server_error}</small>
              )
    }
  };

  var name_error = function() {
    if(self.state.name_error !== undefined) {
      return (
              <small className="error">{self.state.name_error}</small>
              )
    }
  };

  var url_error = function() {
    if(self.state.url_error !== undefined) {
      return (
              <small className="error">{self.state.url_error}</small>
              )
    }
  };

  var sender_name_error = function() {
    if(self.state.sender_name_error !== undefined) {
      return (
              <small className="error">{self.state.sender_name_error}</small>
              )
    }
  };

  var sender_email_error = function() {
    if(self.state.sender_email_error !== undefined) {
      return (
              <small className="error">{self.state.sender_email_error}</small>
              )
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
              {server_error()}
              <label>Website Name
              <input id="name" type="text" placeholder="Website Name" />
              {name_error()}
              </label>

              <label>URL
              <input id="url" type="text" placeholder="Website URL" />
              {url_error()}
              </label>

              <label>Sender Name
              <input id="sender_name" type="text" placeholder="Sender Name" />
              {sender_name_error()}
              </label>

              <label>Sender Email
              <input id="sender_email" type="text" placeholder="Sender Email" />
              {sender_email_error()}
              </label>

              </fieldset>

              <button onClick={this.saveWebsite} className="button radius expand">Add</button>
              </form>
              </div>

            </div>
            )

  }

});

var EditWebsite = React.createClass({

  getInitialState: function() {

    return {name_error: undefined, url_error: undefined, sender_name_error: undefined, sender_email_error: undefined, server_error: undefined};

  },

  componentDidMount: function() {


    // Ensure current path references a website that the user owns
    var website_id = Backbone.history.fragment.replace("websites/edit/", "");
    var websites = this.props.websites;

    console.log(website_id)

    if(this.props.active_website !== website_id) {
      var match = _.find(websites, {"id" : parseInt(website_id)});

      if(!_.isEmpty(match)) {

      // Path id is a valid website
      this.props.setWebsite(website_id);

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
  .query({id: this.props.active_website})
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


  var active_website = _.find(websites, { "id" : parseInt(JSON.parse(cookie).active_website)});
  var self = this;

  var name = $('input#name').val();
  var url = $('input#url').val();
  var sender_name = $('input#sender_name').val();
  var sender_email = $('input#sender_email').val();


    // Validate - fields must not be empty
    if(_.isEmpty(name)) {
      self.setState({name_error: "Name cannot be blank"});
    } else {
      self.setState({name_error: undefined});
    };

    if(_.isEmpty(url)) {
      self.setState({url_error: "URL cannot be blank"});
    } else {
      self.setState({url_error: undefined});
    };

    if(_.isEmpty(sender_name)) {
      self.setState({sender_name_error: "Sender Name cannot be blank"});
    } else {
      self.setState({sender_name_error: undefined});
    };

    if(_.isEmpty(sender_email)) {
      self.setState({sender_email_error: "Sender Email cannot be blank"});
    } else if(sender_email.indexOf("@") === -1) {
      this.setState({sender_email_error: "Please input a valid email address"});
    } else {
      self.setState({sender_email_error: undefined});
    };

// send to server if client validation passes
if(!_.some([this._pendingState.name_error, this._pendingState.url_error, this._pendingState.sender_name_error, this._pendingState.sender_email_error])) {

  var updated_website = {};

  updated_website.id = active_website.id;
  updated_website.name = name;
  updated_website.url = url;
  updated_website.sender_name = sender_name;
  updated_website.sender_email = sender_email;

  console.log(updated_website);

  var cookie = JSON.parse($.cookie("application"));
  var token = cookie.sessionId;


  superagent
  .post(CONFIG.URLS.updateWebsite)
  .set('X-API-Key', token)
  .query(updated_website)
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
              self.setState({name_error: errors.name.error})
            }

            if(!_.isUndefined(errors.url)) {
              self.setState({url_error: errors.url.error})
            }

            if(!_.isUndefined(errors.sender_name)) {
              self.setState({sender_name_error: errors.sender_name.error})
            }

            if(!_.isUndefined(errors.sender_email)) {
              self.setState({sender_email_error: errors.sender_email.error})
            }

          } else {
            // a token error occurred
            if(JSON.parse(res.text).error) {
              var error = JSON.parse(res.text).error;
              self.setState({server_error: error});

              if(JSON.parse(res.text).session_invalid) {
              self.props.setUser(undefined);
            }
            }
          }

        }


      })

}

},


render: function() {

var cookie = $.cookie("application");
var websites = this.props.websites;


  var active_website = _.find(websites, { "id" : parseInt(JSON.parse(cookie).active_website)});
  var website_id = Backbone.history.fragment.replace("websites/edit/", "");
  var self = this;

  var server_error = function() {
    if(self.state.server_error !== undefined) {
      return (
              <small className="error">{self.state.server_error}</small>
              )
    }
  };

  var name_error = function() {
    if(self.state.name_error !== undefined) {
      return (
              <small className="error">{self.state.name_error}</small>
              )
    }
  };

  var url_error = function() {
    if(self.state.url_error !== undefined) {
      return (
              <small className="error">{self.state.url_error}</small>
              )
    }
  };

  var sender_name_error = function() {
    if(self.state.sender_name_error !== undefined) {
      return (
              <small className="error">{self.state.sender_name_error}</small>
              )
    }
  };

  var sender_email_error = function() {
    if(self.state.sender_email_error !== undefined) {
      return (
              <small className="error">{self.state.sender_email_error}</small>
              )
    }
  };


  if(!_.isEmpty(active_website)) {
    if(active_website.id === parseInt(website_id)) {

      return (

              <div className="text-center">

              <ul className="breadcrumbs">
              <li><a onClick={this.routeWebsites}>Websites</a></li>
              <li className="current">Edit Website</li>
              <li className="current">{active_website.name}</li>
              </ul>

              <h2>Editing {active_website.name}</h2>

              <div className="row">
              <form>
              <fieldset>
              <legend>Update Details</legend>
              {server_error()}
              <label>Website Name
              <input id="name" type="text" placeholder="Website Name" defaultValue={active_website.name} />
              {name_error()}
              </label>

              <label>URL
              <input id="url" type="text" placeholder="Website URL" defaultValue={active_website.url} />
              {url_error()}
              </label>

              <label>Sender Name
              <input id="sender_name" type="text" placeholder="Sender Name" defaultValue={active_website.sender_name} />
              {sender_name_error()}
              </label>

              <label>Sender Email
              <input id="sender_email" type="text" placeholder="Sender Email" defaultValue={active_website.sender_email} />
              {sender_email_error()}
              </label>

              </fieldset>

              <button onClick={this.saveWebsite} className="button radius expand">Update</button>
              </form>

              <hr />
              <h3>Permenantly Delete Website</h3>
              
              <p>Click the button below to <strong>permenantly remove the {active_website.name} website and all of its data</strong> from the system.</p>
              <button onClick={this.deleteWebsite} className="button radius alert expand">Delete</button>
              </div>


              </div>
              )
} else {
  return (
          <div>
          An unexpected error occurred
          </div>)
} 
} else {
  return (
          <div>
          An unexpected error occurred
          </div>)
}
}

});

exports.Websites = Websites;
exports.AddWebsite = AddWebsite;
exports.EditWebsite = EditWebsite;
