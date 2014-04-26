/** @jsx React.DOM */

var navigation_data = [
  {name: "Dashboard", url: ""},
  {name: "Campaigns", url: "campaigns"},
  {name: "My Account", url: "account"}
];


var Layout = React.createClass({
  getInitialState: function() {

    // set the pushState to blank if the user arrives to the dashboard, either by going to the root or entering an invalid route
    if(this.props.navPos === "Dashboard") {
      router.navigate("");
    };

    return {navPos: this.props.navPos, loggedIn: undefined, render: false};
  },

  componentDidMount: function() {

    // figure out if a cookie exists and is a valid session
    self = this;
    var cookie = $.cookie("application");

    if(!_.isUndefined(cookie)) {

      var token = JSON.parse(cookie).sessionId;
      var email = JSON.parse(cookie).email;

      superagent
      .get('http://localhost:9000/api/v1/auth/validate/' + token)
      .set('X-API-Key', token)
      .set('Accept', 'application/json')
      .end(function(error, res){

        if(res.ok === true) {

          self.setState({loggedIn: email, render: true});

        } else {

          // Cookie no longer valid - render login form
          self.setLoggedIn(undefined);
          self.setState({render: true});

        }

        console.log(res);

      });

    } else {

      // No prev cookie - render login form
      self.setLoggedIn(undefined);
      self.setState({render: true});

    }

  },

  setPos: function(url, pos) {
    this.setState({navPos: pos});
    router.navigate(url);
  },

  setLoggedIn: function(state) {
    this.setState({loggedIn: state});

    // Kill cookie if user is logging out
    if(state === undefined) {
      $.removeCookie("application")
    };

  },

  render: function() {

// Defer rendering while checking if cookie is valid
if(this.state.render) {

    // Login view if not logged in
    if(this.state.loggedIn === undefined) {

      return (
      <div>
        <Login navPos={this.state.navPos} setPos={this.setPos} loggedIn={this.state.loggedIn} setLoggedIn={this.setLoggedIn} />
      </div>
      )
    } else {

    // User is logged in
    return (
      <div>
      <TopBar navPos={this.state.navPos} setPos={this.setPos} loggedIn={this.state.loggedIn} setLoggedIn={this.setLoggedIn} />
      <LeftMenu navLinks={this.props.navLinks} navPos={this.state.navPos} setPos={this.setPos} loggedIn={this.state.loggedIn} setLoggedIn={this.setLoggedIn} />
      <Content navPos={this.state.navPos} setPos={this.setPos} loggedIn={this.state.loggedIn} setLoggedIn={this.setLoggedIn} />
      </div>
    );
  }
} else {

var loadingMsgStyle = {
         position: "relative",
         top: "30%"
     };

  return(

      <div className="row text-center" style={loadingMsgStyle}>
      <h1>Loading...</h1>
    </div>
)

  }
}

});

var Login = React.createClass({

  getInitialState: function() {

    return {email_blank: false, password_blank: false, server_error: undefined};

  },

  login: function(e) {

    e.preventDefault();

    this.setState({server_error: undefined});

    var email = $("#email").val();
    var password = $("#password").val();


    // Validate - fields must not be empty
    if(_.isEmpty(email)) {
      this.setState({email_blank: true});
    } else {
      this.setState({email_blank: false});
    };
    
    if(_.isEmpty(password)) {
      this.setState({password_blank: true});
    } else {
      this.setState({password_blank: false});
    };

    // fields are populated
    if(!_.isEmpty(email) && !_.isEmpty(password)) {
      // TODO: check if credentials are valid

      var self = this;

      superagent
      .post('http://localhost:9000/api/v1/auth/login')
      //.send({ name: 'Manny', species: 'cat' })
      .set('X-API-Email', email)
      .set('X-API-Password', password)
      .set('Accept', 'application/json')
      .end(function(error, res){

        var sessionId = JSON.parse(res.text).sessionId

        console.log(res)
        console.log(sessionId)
        //console.log(document.cookie)

        if(res.ok === true) {
          self.props.setLoggedIn(email);

          // set cookie
          $.cookie("application", JSON.stringify({ "sessionId": sessionId,  "email": email }), {path: "/", expires: 120});

        } else {

          // Return error from server
          self.setState({server_error: JSON.parse(res.text).error});
                  

        }

      });

    }

  },

  render: function() {
    var self = this;

    var email_blank = function() {
      if(self.state.email_blank === true) {
        return (
          <small className="error">Email cannot be blank</small>
        )
      }
    };

    var password_blank = function() {
      if(self.state.password_blank === true) {
        return (
          <small className="error">Password cannot be blank</small>
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
          <h1>Login to Web App</h1>
          Please login to access Web App.
          <hr />
          {server_error()}
          <form>
          <label>Email
            <input id="email" type="text" placeholder="Email" />
            {email_blank()}

          </label>
          <label>Password
            <input id="password" type="password" placeholder="Password" />
            {password_blank()}
          </label>
          <button onClick={this.login} className="button radius expand">Login</button>
          </form>
        </div>
      </div>
    );
  }
});


var TopBar = React.createClass({

  componentDidMount: function() {

    $(document).foundation();

  },

route: function(event) {
    event.preventDefault();
    var url = $(event.target).attr('data-nav');
    var pos = $(event.target).text();

    this.props.setPos(url, pos);
  },

  logout: function(e) {

    e.preventDefault();
    this.props.setLoggedIn(undefined);

  },

  render: function() {

    return (
      <div id="topBar" className="sticky">
      <nav className="top-bar" data-topbar>
        <ul className="title-area">
          <li className="name">
            <h1><a href="#">Web App Name</a></h1>
          </li>
          <li className="toggle-topbar menu-icon"><a href="#">Menu</a></li>
        </ul>

        <section className="top-bar-section">

          <ul className="right">
            <li className="active has-dropdown">
            <a href="#">Logged in as {this.props.loggedIn}</a>
            <ul className="dropdown">
                <li><a data-nav="account" onClick={this.route}>My Account</a></li>
                <li><a onClick={this.logout}>Logout</a></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <a href="#">Help</a>
              <ul className="dropdown">
                <li><a href="#">Getting Started Guide</a></li>
                <li><a href="#">API Documentation</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </li>
          </ul>

        </section>
      </nav>
      </div>
    );
  }

});


var LeftMenu = React.createClass({

route: function(event) {
    event.preventDefault();
    var url = $(event.target).attr('data-nav');
    var pos = $(event.target).text();

    this.props.setPos(url, pos);
  },

  render: function() {

    var self = this;
    
    var links = _.map(this.props.navLinks, function(link, key) {

      var classString = "";
      if(self.props.navPos===link.name){classString = "active"};

      return <li key={key}><a href={link.url} onClick={self.route} data-nav={link.url} className={classString}>{link.name}</a></li>
    });

    return (
      <div id="leftMenu" className="small-4 large-2 columns">
      <ul className="side-nav">{links}</ul>
      </div>
    );
  }

});

var Content = React.createClass({

  render: function() {
    
    var section = null;
    if(this.props.navPos === "Dashboard") {
      section = (
        <Dashboard navPos={this.props.navPos} setPos={this.props.setPos} />
      )
    } else {
      section = (
        <p>{this.props.navPos}</p>
      )
    }

    return (
      <div id="content" className="small-8 large-10 columns">
      {section}
      </div>
    )

  }

});

var Router = Backbone.Router.extend({
  routes : {
    ""    : "index",
    "campaigns" : "campaigns",
    "account" : "account",
    "*splat" : "index"
  },
    clearLayout : function() {
        React.renderComponent(
         <div></div>,
      document.getElementById('application')
    );
    },
  showLayout : function(pos) {

    // Look up the current route against navigation_data so that we can populate Layout with the pretty navPos name.
    var navPos = _.find(navigation_data, { 'url': pos });
    if(_.has(navPos, "name")) {
      navPos = navPos.name
    } else {
      navPos = "Dashboard"
    }

        React.renderComponent(
      <Layout navLinks={navigation_data} navPos={navPos} />,
      document.getElementById('application')
    );
    },
  index : function() {
    this.clearLayout();
    this.showLayout("dashboard");
  },
  campaigns : function() {
    this.clearLayout();
    this.showLayout("campaigns");
  },
  account : function() {
    this.clearLayout();
    this.showLayout("account");
  }
});
 
var router = new Router();
 
Backbone.history.start({pushState: true});