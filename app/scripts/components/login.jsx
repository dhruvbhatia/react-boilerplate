/** @jsx React.DOM */

var CONFIG = require('../config');

var Login = React.createClass({

  getInitialState: function() {

    document.title = "Login | " + CONFIG.WEBSITE_NAME;

    return {login_email_error: undefined, login_password_error: undefined, login_server_error: undefined, register_first_name_error: undefined, register_last_name_error: undefined, register_email_error: undefined, register_password_error: undefined, register_server_error: undefined};

  },

  register: function(e) {
    e.preventDefault();

    this.setState({register_server_error: undefined});

    var first_name = $("#register_first_name").val();
    var last_name = $("#register_last_name").val();
    var email = $("#register_email").val();
    var password = $("#register_password").val();

    // Validate fields
    if(_.isEmpty(first_name)) {
      this.setState({register_first_name_error: "First Name cannot be blank"});
    } 

    if(_.isEmpty(last_name)) {
      this.setState({register_last_name_error: "Last Name cannot be blank"});
    } 

    if(_.isEmpty(email)) {
      this.setState({register_email_error: "Email cannot be blank"});
    } else if(email.indexOf("@") === -1) {
      this.setState({register_email_error: "Please input a valid email address"});
    } else {
      this.setState({register_email_error: undefined});
    }
    
    if(_.isEmpty(password)) {
      this.setState({register_password_error: "Password cannot be blank"});
    } else {
      this.setState({register_password_error: undefined});
    }

    // fields are populated
    if(!_.some([this._pendingState.login_first_name_error, this._pendingState.login_last_name_error, this._pendingState.login_email_error, this._pendingState.login_password_error])) {

      var self = this;
      var register = {};

      register.first_name = first_name;
      register.last_name = last_name;
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
          $("#login_email").val(email);
          $("#login_password").val(password);
          $("#login_button").trigger("click");

        } else {

          if(JSON.parse(res.text).hasOwnProperty("error")) {

            var error = JSON.parse(res.text).error;

            self.setState({register_server_error: error});


          }

        }

      });


    }



  },


  login: function(e) {

    e.preventDefault();

    this.setState({login_server_error: undefined});

    var email = $("#login_email").val();
    var password = $("#login_password").val();


    // Validate - fields must not be empty
    if(_.isEmpty(email)) {
      this.setState({login_email_error: "Email cannot be blank"});
    } else if(email.indexOf("@") === -1) {
      this.setState({login_email_error: "Please input a valid email address"});
    } else {
      this.setState({login_email_error: undefined});
    }
    // alert(this._pendingState.login_email_error)
    // alert(this.state.login_email_error)
    
    if(_.isEmpty(password)) {
      this.setState({login_password_error: "Password cannot be blank"});
    } else {
      this.setState({login_password_error: undefined});
    }


    // fields are populated
    if(!_.some([this._pendingState.login_email_error, this._pendingState.login_password_error])) {

      var self = this;

      superagent
      .post(CONFIG.URLS.login)
      .set('X-API-Email', email)
      .set('X-API-Password', password)
      .set('Accept', 'application/json')
      .end(function(error, res){

        console.log(res.text);

        if(res.ok === true) {

          var sessionId = JSON.parse(res.text).sessionId
          var user = JSON.parse(res.text).user



          console.log(sessionId)
          console.log(user)

          var user_websites = JSON.parse(res.text).websites;
          console.log(user_websites)

          if(!_.isEmpty(user_websites)) {
            if(!_.isUndefined(_.first(user_websites))) {
              active_website = _.first(user_websites).id;


              console.log(active_website)

            }

          }







          // set cookie
          $.cookie("application", JSON.stringify({ "sessionId": sessionId, "user": user }), {path: "/", expires: 120});

          self.props.setUser(user);

          self.props.setWebsites(user_websites);

          console.log(user)

          document.title = self.props.path + " | " + CONFIG.WEBSITE_NAME;

        } else {

          // Return error from server
          self.setState({login_server_error: JSON.parse(res.text).error});


        }

      });

}

},

render: function() {
  var self = this;

  var validation_error = function(field) {

    if(field !== undefined) {
      return (
              <small className="error">{field}</small>
              )
    }

  };

  return (
          <div id="login" className="row">

          <div className="panel">
          <h1>Login to {CONFIG.WEBSITE_NAME}</h1>
          Please login to access {CONFIG.WEBSITE_NAME}.
          <hr />
          {validation_error(this.state.login_server_error)}
          <form>
          <label>Email
          <input id="login_email" type="email" placeholder="Email" />
          {validation_error(this.state.login_email_error)}

          </label>
          <label>Password
          <input id="login_password" type="password" placeholder="Password" />
          {validation_error(this.state.login_password_error)}
          </label>
          <button id="login_button" onClick={this.login} className="button radius expand">Login</button>
          </form>

          Forgot Password

          <hr />
          <h1>Don't have an account?</h1>
          Register a new account at {CONFIG.WEBSITE_NAME}.
          <hr />
          {validation_error(this.state.register_server_error)}
          <form>

          <label>First Name
          <input id="register_first_name" type="text" placeholder="First Name" />
          {validation_error(this.state.register_first_name_error)}
          </label>

          <label>Last Name
          <input id="register_last_name" type="text" placeholder="Last Name" />
          {validation_error(this.state.register_last_name_error)}
          </label>

          <label>Email
          <input id="register_email" type="email" placeholder="Email" />
          {validation_error(this.state.register_email_error)}
          </label>

          <label>Password
          <input id="register_password" type="password" placeholder="Password" />
          {validation_error(this.state.register_password_error)}
          </label>

          <button onClick={this.register} className="button radius expand">Register</button>
          </form>



          </div>
          </div>
          );
}
});



exports.Login = Login;