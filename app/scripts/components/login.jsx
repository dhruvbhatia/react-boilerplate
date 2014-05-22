/** @jsx React.DOM */
'use strict';

var CONFIG = require('../config');

var Login = React.createClass({

  getInitialState: function() {

    document.title = 'Login | ' + CONFIG.WEBSITE_NAME;

    return {loginEmailError: undefined, loginPasswordError: undefined, loginServerError: undefined, registerFirstNameError: undefined, registerLastNameError: undefined, registerEmailError: undefined, registerPasswordError: undefined, registerServerError: undefined};

  },

  register: function(e) {
    e.preventDefault();

    this.setState({registerServerError: undefined});

    var firstName = $('#register_firstName').val();
    var lastName = $('#register_lastName').val();
    var email = $('#register_email').val();
    var password = $('#register_password').val();

    // Validate fields
    if(_.isEmpty(firstName)) {
      this.setState({registerFirstNameError: 'First Name cannot be blank'});
    } 

    if(_.isEmpty(lastName)) {
      this.setState({registerLastNameError: 'Last Name cannot be blank'});
    } 

    if(_.isEmpty(email)) {
      this.setState({registerEmailError: 'Email cannot be blank'});
    } else if(email.indexOf('@') === -1) {
      this.setState({registerEmailError: 'Please input a valid email address'});
    } else {
      this.setState({registerEmailError: undefined});
    }
    
    if(_.isEmpty(password)) {
      this.setState({registerPasswordError: 'Password cannot be blank'});
    } else {
      this.setState({registerPasswordError: undefined});
    }

    // fields are populated
    if(!_.some([this._pendingState.registerFirstNameError, this._pendingState.registerLastNameError, this._pendingState.registerEmailError, this._pendingState.registerPasswordError])) {

      var self = this;
      var register = {};

      register.firstName = firstName;
      register.lastName = lastName;
      register.email = email;
      register.password = password;

      superagent
      .post(CONFIG.URLS.register)
      .query(register)
      .set('Accept', 'application/json')
      .end(function(error, res){

        console.log(res.text);

        if(res.ok === true) {

          // login
          $('#login_email').val(email);
          $('#login_password').val(password);
          $('#login_button').trigger('click');

        } else {

          // validation error msg
          if(JSON.parse(res.text).hasOwnProperty('response')) {

            if(JSON.parse(res.text).response.hasOwnProperty('error')) {

              var errors = JSON.parse(res.text).response.error;


              if(!_.isUndefined(errors.firstName)) {
                self.setState({registerFirstNameError: errors.firstName.error});
              }

              if(!_.isUndefined(errors.lastName)) {
                self.setState({registerLastNameError: errors.lastName.error});
              }

              if(!_.isUndefined(errors.email)) {
                self.setState({registerEmailError: errors.email.error});
              }

              if(!_.isUndefined(errors.password)) {
                self.setState({registerPasswordError: errors.password.error});
              }

            }

          } 
          // custom error msg
          else if(JSON.parse(res.text).hasOwnProperty('error')) {

            var otherServerError = JSON.parse(res.text).error;

            self.setState({registerServerError: otherServerError});


          }


        }

      });


}



},


login: function(e) {

  e.preventDefault();

  this.setState({loginServerError: undefined});

  var email = $('#login_email').val();
  var password = $('#login_password').val();


    // Validate - fields must not be empty
    if(_.isEmpty(email)) {
      this.setState({loginEmailError: 'Email cannot be blank'});
    } else if(email.indexOf('@') === -1) {
      this.setState({loginEmailError: 'Please input a valid email address'});
    } else {
      this.setState({loginEmailError: undefined});
    }
    // alert(this._pendingState.loginEmailError)
    // alert(this.state.loginEmailError)
    
    if(_.isEmpty(password)) {
      this.setState({loginPasswordError: 'Password cannot be blank'});
    } else {
      this.setState({loginPasswordError: undefined});
    }


    // fields are populated
    if(!_.some([this._pendingState.loginEmailError, this._pendingState.loginPasswordError])) {

      var self = this;

      superagent
      .post(CONFIG.URLS.login)
      .set('X-API-Email', email)
      .set('X-API-Password', password)
      .set('Accept', 'application/json')
      .end(function(error, res){

        console.log(res.text);

        if(res.ok === true) {

          var sessionId = JSON.parse(res.text).sessionId;
          var user = JSON.parse(res.text).user;



          console.log(sessionId);
          console.log(user);

          var userWebsites = JSON.parse(res.text).websites;
          console.log(userWebsites);

          if(!_.isEmpty(userWebsites)) {
            if(!_.isUndefined(_.first(userWebsites))) {
              var activeWebsite = _.first(userWebsites).id;


              console.log(activeWebsite);

            }

          }







          // set cookie
          $.cookie('application', JSON.stringify({ 'sessionId': sessionId, 'user': user }), {path: '/', expires: 120});

          self.props.setUser(user);

          self.props.setWebsites(userWebsites);

          console.log(user);

          document.title = self.props.path + ' | ' + CONFIG.WEBSITE_NAME;

        } else {

          // Return error from server
          self.setState({loginServerError: JSON.parse(res.text).error});


        }

      });

}

},

render: function() {
  var self = this;

  var validationError = function(field) {

    if(field !== undefined) {
      return (
              <small className='error'>{field}</small>
              );
    }

  };

  return (
          <div id='login' className='row'>

          <div className='panel'>
          <h1>Login to {CONFIG.WEBSITE_NAME}</h1>
          Please login to access {CONFIG.WEBSITE_NAME}.
          <hr />
          {validationError(this.state.loginServerError)}
          <form>
          <label>Email
          <input id='login_email' type='email' placeholder='Email' />
          {validationError(this.state.loginEmailError)}

          </label>
          <label>Password
          <input id='login_password' type='password' placeholder='Password' />
          {validationError(this.state.loginPasswordError)}
          </label>
          <button id='login_button' onClick={this.login} className='button radius expand'>Login</button>
          </form>

          Forgot Password

          <hr />
          <h1>Don't have an account?</h1>
          Register a new account at {CONFIG.WEBSITE_NAME}.
          <hr />
          {validationError(this.state.registerServerError)}
          <form>

          <label>First Name
          <input id='register_firstName' type='text' placeholder='First Name' />
          {validationError(this.state.registerFirstNameError)}
          </label>

          <label>Last Name
          <input id='register_lastName' type='text' placeholder='Last Name' />
          {validationError(this.state.registerLastNameError)}
          </label>

          <label>Email
          <input id='register_email' type='email' placeholder='Email' />
          {validationError(this.state.registerEmailError)}
          </label>

          <label>Password
          <input id='register_password' type='password' placeholder='Password' />
          {validationError(this.state.registerPasswordError)}
          </label>

          <button onClick={this.register} className='button radius expand'>Register</button>
          </form>



          </div>
          </div>
          );
}
});



exports.Login = Login;