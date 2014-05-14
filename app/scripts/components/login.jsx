/** @jsx React.DOM */

var CONFIG = require('../config');

var Login = React.createClass({

  getInitialState: function() {

    document.title = "Login | " + CONFIG.WEBSITE_NAME;

    return {email_error: undefined, password_error: undefined, server_error: undefined};

  },

  register: function(e) {
    e.preventDefault();

    console.log("register");


  },


  login: function(e) {

    e.preventDefault();

    this.setState({server_error: undefined});

    var email = $("#email").val();
    var password = $("#password").val();


    // Validate - fields must not be empty
    if(_.isEmpty(email)) {
      this.setState({email_error: "Email cannot be blank"});
    } else if(email.indexOf("@") === -1) {
      this.setState({email_error: "Please input a valid email address"});
    } else {
      this.setState({email_error: undefined});
    }
    // alert(this._pendingState.email_error)
    // alert(this.state.email_error)
    
    if(_.isEmpty(password)) {
      this.setState({password_error: "Password cannot be blank"});
    } else {
      this.setState({password_error: undefined});
    }


    // fields are populated
    if(!_.some([this._pendingState.email_error, this._pendingState.password_error])) {

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
          self.setState({server_error: JSON.parse(res.text).error});


        }

      });

}

},

render: function() {
  var self = this;

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

  var server_error = function() {
    if(self.state.server_error !== undefined) {
      return (
              <small className="error">{self.state.server_error}</small>
              )
    }
  };

  return (
          <div id="login" className="row">
          <div className="panel">
          <h1>Login to {CONFIG.WEBSITE_NAME}</h1>
          Please login to access {CONFIG.WEBSITE_NAME}.
          <hr />
          {server_error()}
          <form>
          <label>Email
          <input id="email" type="text" placeholder="Email" />
          {email_error()}

          </label>
          <label>Password
          <input id="password" type="password" placeholder="Password" />
          {password_error()}
          </label>
          <button onClick={this.login} className="button radius expand">Login</button>
          <a onClick={this.register}>Don't have an account?</a>
          </form>
          </div>
          </div>
          );
}
});



exports.Login = Login;