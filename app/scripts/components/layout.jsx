/** @jsx React.DOM */


var CONFIG = require('../config');
var UTIL = require("../util");
var Router = require("./router");

var Dashboard = require('./dashboard').Dashboard;
var MyAccount = require("./my-account").MyAccount;
var EditAccount = require("./my-account").EditAccount;
var Websites = require("./website").Websites;
var AddWebsite = require("./website").AddWebsite;
var EditWebsite = require("./website").EditWebsite;


var Layout = React.createClass({
  getInitialState: function() {

    // set the pushState to blank if the user arrives to the dashboard, either by going to the root or entering an invalid route
    if(this.props.navPos === "Dashboard") {
      router.navigate("");
    };

    return {navPos: this.props.navPos, loggedIn: undefined, render: false, website: undefined};
  },

  componentDidMount: function() {

    _.getSession.call(this);

  },

  setPos: function(url, pos) {

   // _.getSession.call(this);

    // Onboarding screen if no websites exist
    if(_.isEmpty(JSON.parse($.cookie("application")).user.websites)) {
      this.setState({navPos: "Add Website"});
      router.navigate("websites/add");
    } else {

      this.setState({navPos: pos});

      router.navigate(url);
    }

  },

  setWebsite: function(website) {

    console.log(website)

    // if this is called with "default" as an argument, then set the active website to the first one in the user's list
    var websites = JSON.parse($.cookie("application")).user.websites;

    if(_.isEmpty(websites)) {
      return this.setState({website: "default"});
    };


    var first_website = _.first(websites).id;

    if( (!_.isEmpty(websites)) && (website === "default")) {

      this.setState({website: first_website});

    } else {


      var cookie = JSON.parse($.cookie("application"));

      cookie.user.website = website;

      $.cookie("application", JSON.stringify(cookie), {path: "/", expires: 120});

      this.setState({website: website});

    };



  },

  setLoggedIn: function(state) {
    this.setState({loggedIn: state});

    // Kill cookie if user is logging out
    if(state === undefined) {
      $.removeCookie("application");
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
                <TopBar navPos={this.state.navPos} setPos={this.setPos} loggedIn={this.state.loggedIn} setLoggedIn={this.setLoggedIn} website={this.state.website} setWebsite={this.setWebsite} />
                <LeftMenu navLinks={this.props.navLinks} navPos={this.state.navPos} setPos={this.setPos} loggedIn={this.state.loggedIn} setLoggedIn={this.setLoggedIn} website={this.state.website} setWebsite={this.setWebsite} />
                <Content navPos={this.state.navPos} setPos={this.setPos} loggedIn={this.state.loggedIn} setLoggedIn={this.setLoggedIn} website={this.state.website} setWebsite={this.setWebsite} />
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
      .post('http://192.168.178.20:9000/api/v1/auth/login')
      //.send({ name: 'Manny', species: 'cat' })
      .set('X-API-Email', email)
      .set('X-API-Password', password)
      .set('Accept', 'application/json')
      .end(function(error, res){

        console.log(res);

        var sessionId = JSON.parse(res.text).sessionId
        var user = JSON.parse(res.text).user
        


        console.log(sessionId)
        //console.log(document.cookie)

        if(res.ok === true) {

          user.websites = JSON.parse(res.text).websites;

          // set cookie
          $.cookie("application", JSON.stringify({ "sessionId": sessionId, "user": user }), {path: "/", expires: 120});

          self.props.setLoggedIn(user);

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
            <nav className="top-bar" data-topbar data-options="is_hover: false">
            <ul className="title-area">
            <li className="name">
            <h1><a href="#">Web App Name</a></h1>
            </li>
            <li className="toggle-topbar menu-icon"><a href="#">Menu</a></li>
            </ul>

            <section className="top-bar-section">

            <ul className="right">
            <li className="active has-dropdown">
            <a href="#">Logged in as {this.props.loggedIn.fullName}</a>
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

    // TO REVIEW: set the website context back to default when a menu link is clicked
    //this.props.setWebsite("default");

  },

  render: function() {

    var self = this;
    
    var links = _.map(_.filter(this.props.navLinks, "showInMenu"), function(link, key) {

      var classString = "";
      if((self.props.navPos===link.name) || (_.contains(link.subroutes,self.props.navPos))){classString = "active"};

      return <li key={key}><a href={link.url} onClick={self.route} data-nav={link.url} className={classString}>{link.name}</a></li>
    });

    return (
            <div id="leftMenu" className="small-4 large-2 columns">
            <WebsiteSelector website={this.props.website} setWebsite={this.props.setWebsite} setPos={this.props.setPos} />
            <ul className="side-nav">{links}</ul>
            </div>
            );
  }

});


var WebsiteSelector = React.createClass({

  websiteSelected: function(e) {

    var websites = JSON.parse($.cookie("application")).user.websites;

    if(parseInt(e.target.value) === 0) {

      this.props.setWebsite(undefined);

      // todo: review
      this.props.setPos("websites/add", "Add Website");

    } else {

      var website = _.first(_.filter(websites, { 'id': parseInt(e.target.value) })).id;

      this.props.setWebsite(website);

      this.props.setPos("", "Dashboard");

    }

  },

  render: function() {
    var self = this;

    var value = 0;
    // Select default option where value = 0 if website isn't defined
    if(this.props.website !== undefined) {
      value = this.props.website;
    };

    if($.cookie("application")) {
      var websites = JSON.parse($.cookie("application")).user.websites


      var links = _.map(websites, function(site, key) {

        return <option key={site.id} value={site.id}>{site.name}</option>

      });

    };

    return (

            <div>

            <select id="websiteSelector" onChange={this.websiteSelected} value={value}>

            <option key="0" value="0">Add New Website</option>
            {links}
            </select>

            </div>
            )

  }

});

var Content = React.createClass({

  render: function() {


    var section = null;

    // The code below checks if there is a React component that matches the current navPos's name.
    // If there is, then render it, otherwise just render the name of the current navPos.
    if ( eval("typeof " + this.props.navPos.replace(" ","") + " === 'function'") ){ 

      var element = eval(this.props.navPos.replace(" ",""));

      section = <element navPos={this.props.navPos} setPos={this.props.setPos} loggedIn={this.props.loggedIn} setLoggedIn={this.props.setLoggedIn} setWebsite={this.props.setWebsite} />

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


exports.Layout = Layout;
exports.Login = Login;
exports.TopBar = TopBar;
exports.LeftMenu = LeftMenu;
exports.WebsiteSelector = WebsiteSelector;
exports.Content = Content;
exports.Router = Router;