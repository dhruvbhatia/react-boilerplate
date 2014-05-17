/** @jsx React.DOM */
'use strict';

var CONFIG = require('../config');

var MyAccount = React.createClass({

  routeEditAccount: function(e) {
    e.preventDefault();
    console.log("button clicked");
    this.props.setPos("account/edit", "Edit Account");
  },

  render: function() {
    /*jshint ignore:start */
    return (

            <div className="text-center">

            <img className="th" src="http://gravatar.com/avatar/f00161c7b35f0084d390f785e015b9ca.jpg" />
            <h1>{this.props.user.fullName}</h1>
            <h3>{this.props.user.email}</h3>
            <h4>Registered {moment(this.props.user.createdAt).fromNow()}</h4>

            <button onClick={this.routeEditAccount} className="button radius">Edit Account</button>

            </div>
            );
    /*jshint ignore:end */
  }

});


var EditAccount = React.createClass({

  getInitialState: function() {

    return {firstNameError: undefined, lastNameError: undefined, emailError: undefined, passwordError: undefined, serverError: undefined};

  },

  routeMyAccount: function(e) {
    e.preventDefault();
    this.props.setPos("account", "My Account");
  },

  saveUser: function(e) {
    e.preventDefault();
    console.log("saving..");

    var self = this;

    var firstName = $('input#firstName').val();
    var lastName = $('input#lastName').val();
    var email = $('input#email').val();
    var password = $('input#password').val();


    // Validate - fields must not be empty
    if(_.isEmpty(firstName)) {
      self.setState({firstNameError: "First Name cannot be blank"});
    } else {
      self.setState({firstNameError: undefined});
    }

    if(_.isEmpty(lastName)) {
      self.setState({lastNameError: "Last Name cannot be blank"});
    } else {
      self.setState({lastNameError: undefined});
    }

    if(_.isEmpty(email)) {
      self.setState({emailError: "Email cannot be blank"});
    } else if(email.indexOf("@") === -1) {
      this.setState({emailError: "Please input a valid email address"});
    } else {
      self.setState({emailError: undefined});
    }

    if(_.isEmpty(password)) {
      self.setState({passwordError: "Password cannot be blank"});
    } else {
      self.setState({passwordError: undefined});
    }

// send to server if client validation passes
if(!_.some([this._pendingState.firstNameError, this._pendingState.lastNameError, this._pendingState.emailError, this._pendingState.passwordError])) {

  var updatedUser = {};

  /*jshint ignore:start */
  updatedUser.uid = this.props.user.uid;
  updatedUser.first_name = firstName;
  updatedUser.last_name = lastName;
  updatedUser.email = email;
  updatedUser.password = password;
  /*jshint ignore:end */

  console.log(updatedUser);

  var cookie = JSON.parse($.cookie("application"));
  var token = cookie.sessionId;


  superagent
  .post(CONFIG.URLS.updateAccount)
  .set('X-API-Key', token)
  .query(updatedUser)
  .set('Accept', 'application/json')
  .end(function(error, res){

    console.log(res);

    if(res.ok) {

      self.props.setPos("account", "My Account");
      self.props.setAlert("Your account has been updated!", "success");

    } else {
      /*jshint ignore:start */
          // a validation error occurred
          if(JSON.parse(res.text).response) {
            var errors = JSON.parse(res.text).response.error;


            if(!_.isUndefined(errors.first_name)) {
              self.setState({firstNameError: errors.first_name.error});
            }

            if(!_.isUndefined(errors.last_name)) {
              self.setState({lastNameError: errors.last_name.error});
            }

            if(!_.isUndefined(errors.email)) {
              self.setState({emailError: errors.email.error});
            }

            if(!_.isUndefined(errors.password)) {
              self.setState({passwordError: errors.password.error});
            }

          } else {
            // a token error occurred
            if(JSON.parse(res.text).error) {
              var serverError = JSON.parse(res.text).error;
              self.setState({serverError: serverError});

              
              if(JSON.parse(res.text).session_invalid) {
                self.props.setUser(undefined);
              }
              
            }
          }
          /*jshint ignore:end */
        }


      });

}

},

render: function() {

  /*jshint ignore:start */

  var self = this;

  var serverError = function() {
    if(self.state.serverError !== undefined) {
      return (
              <small className="error">{self.state.serverError}</small>
              )
    }
  };

  var firstNameError = function() {
    if(self.state.firstNameError !== undefined) {
      return (
              <small className="error">{self.state.firstNameError}</small>
              )
    }
  };

  var lastNameError = function() {
    if(self.state.lastNameError !== undefined) {
      return (
              <small className="error">{self.state.lastNameError}</small>
              )
    }
  };

  var emailError = function() {
    if(self.state.emailError !== undefined) {
      return (
              <small className="error">{self.state.emailError}</small>
              )
    }
  };

  var passwordError = function() {
    if(self.state.passwordError !== undefined) {
      return (
              <small className="error">{self.state.passwordError}</small>
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
          {serverError()}
          <label>First Name
          <input id="firstName" type="text" placeholder="First Name" defaultValue={this.props.user.firstName} />
          {firstNameError()}
          </label>

          <label>Last Name
          <input id="lastName" type="text" placeholder="Last Name" defaultValue={this.props.user.lastName} />
          {lastNameError()}
          </label>

          <label>Email Address
          <input id="email" type="text" placeholder="Email Address" defaultValue={this.props.user.email} />
          {emailError()}
          </label>

          <label>Password
          <input id="password" type="password" placeholder="Password" />
          {passwordError()}
          </label>

          </fieldset>

          <button onClick={this.saveUser} className="button radius expand">Update</button>
          </form>
          </div>



          </div>
          )

/*jshint ignore:end */
}

});


exports.MyAccount = MyAccount;
exports.EditAccount = EditAccount;