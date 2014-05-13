/** @jsx React.DOM */

var CONFIG = require('../config');

var MyAccount = React.createClass({

  routeEditAccount: function(e) {
    e.preventDefault();
    console.log("button clicked");
    this.props.setPos("account/edit", "Edit Account");
  },

  render: function() {

    return (

            <div className="text-center">

            <img className="th" src="http://gravatar.com/avatar/f00161c7b35f0084d390f785e015b9ca.jpg" />
            <h1>{this.props.user.fullName}</h1>
            <h3>{this.props.user.email}</h3>
            <h4>Registered {moment(this.props.user.createdAt).fromNow()}</h4>

            <button onClick={this.routeEditAccount} className="button radius">Edit Account</button>

            </div>
            )

  }

});


var EditAccount = React.createClass({

  getInitialState: function() {

    return {first_name_error: undefined, last_name_error: undefined, email_error: undefined, password_error: undefined, server_error: undefined};

  },

  routeMyAccount: function(e) {
    e.preventDefault();
    this.props.setPos("account", "My Account");
  },

saveUser: function(e) {
  e.preventDefault();
  console.log("saving..");

  var self = this;

  var first_name = $('input#first_name').val();
  var last_name = $('input#last_name').val();
  var email = $('input#email').val();
  var password = $('input#password').val();


    // Validate - fields must not be empty
    if(_.isEmpty(first_name)) {
      self.setState({first_name_error: "First Name cannot be blank"});
    } else {
      self.setState({first_name_error: undefined});
    };

    if(_.isEmpty(last_name)) {
      self.setState({last_name_error: "Last Name cannot be blank"});
    } else {
      self.setState({last_name_error: undefined});
    };

    if(_.isEmpty(email)) {
      self.setState({email_error: "Email cannot be blank"});
    } else {
      self.setState({email_error: undefined});
    };

    if(_.isEmpty(password)) {
      self.setState({password_error: "Password cannot be blank"});
    } else {
      self.setState({password_error: undefined});
    };

// send to server if client validation passes
if(!_.some([_.isEmpty(first_name), _.isEmpty(last_name), _.isEmpty(email), _.isEmpty(password)])) {

  var updated_user = {};

  updated_user.first_name = first_name;
  updated_user.last_name = last_name;
  updated_user.email = email;
  updated_user.password = password;

  console.log(updated_user);

  var cookie = JSON.parse($.cookie("application"));
  var token = cookie.sessionId;


  superagent
  .post(CONFIG.URLS.updateUser)
  .set('X-API-Key', token)
  .query(updated_user)
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


            if(!_.isUndefined(errors.first_name)) {
              self.setState({first_name_error: errors.first_name.error})
            }

            if(!_.isUndefined(errors.last_name)) {
              self.setState({last_name_error: errors.last_name.error})
            }

            if(!_.isUndefined(errors.email)) {
              self.setState({email_error: errors.email.error})
            }

            if(!_.isUndefined(errors.password)) {
              self.setState({password_error: errors.password_error.error})
            }

          } else {
            // a token error occurred
            if(JSON.parse(res.text).error) {
              var error = JSON.parse(res.text).error;
              self.setState({server_error: error});

              if(JSON.parse(res.text).session_invalid) {
              self.props.setLoggedIn(undefined);
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

  var first_name_error = function() {
    if(self.state.first_name_error !== undefined) {
      return (
              <small className="error">{self.state.first_name_error}</small>
              )
    }
  };

  var last_name_error = function() {
    if(self.state.last_name_error !== undefined) {
      return (
              <small className="error">{self.state.last_name_error}</small>
              )
    }
  };

  var email_error = function() {
    if(self.state.email_error !== undefined) {
      return (
              <small className="error">{self.state.email_error}</small>
              )
    }
  };

  var password_error = function() {
    if(self.state.password_error !== undefined) {
      return (
              <small className="error">{self.state.password_error}</small>
              )
    }
  };

  return (

          <div className="text-center">

          <ul className="breadcrumbs">
          <li><a onClick={this.routeMyAccount}>My Account</a></li>
          <li className="current">Edit Account</li>
          <li className="current">{this.props.user.fullName}</li>
          </ul>

          <h2>Edit Your Account</h2>

          <div className="row">
          <form>
          <fieldset>
          <legend>Update User Details</legend>
          {server_error()}
          <label>First Name
          <input id="first_name" type="text" placeholder="First Name" defaultValue={this.props.user.firstName} />
          {first_name_error()}
          </label>

          <label>Last Name
          <input id="last_name" type="text" placeholder="Last Name" defaultValue={this.props.user.lastName} />
          {last_name_error()}
          </label>

          <label>Email Address
          <input id="email" type="text" placeholder="Email Address" defaultValue={this.props.user.email} />
          {email_error()}
          </label>

          <label>Password
          <input id="password" type="password" placeholder="Password" />
          {password_error()}
          </label>

          </fieldset>

          <button onClick={this.saveUser} className="button radius expand">Update</button>
          </form>
          </div>



          </div>
          )

}

});


exports.MyAccount = MyAccount;
exports.EditAccount = EditAccount;