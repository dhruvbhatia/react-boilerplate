(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/** @jsx React.DOM */

var Dashboard = React.createClass({displayName: 'Dashboard',

  render: function() {
    return (
            React.DOM.div(null, 
            React.DOM.p(null, this.props.path),

      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nulla nisl, fermentum sit amet justo vel, commodo hendrerit metus. Quisque dignissim eu sapien vel ornare. Nulla vulputate dui et lorem vulputate fermentum. Mauris vulputate facilisis urna vel fringilla. Suspendisse congue gravida risus eget aliquet. Cras a imperdiet nulla, sit amet convallis odio. Aenean erat erat, elementum sit amet arcu quis, accumsan commodo sapien. Maecenas lacinia est quis massa ultricies ultricies. Donec mauris mi, accumsan ac erat et, sollicitudin fringilla mauris. Nunc varius fermentum consectetur. Suspendisse mattis dui nec egestas ultrices. Sed sodales id turpis ut sagittis. Suspendisse interdum tristique elit. Phasellus sit amet mauris diam."+' '+

"Cras vel pellentesque nisi, non aliquam enim. Praesent rhoncus quis lacus eu viverra. Vestibulum sollicitudin sit amet nunc a vulputate. In et dignissim risus. Integer suscipit augue sit amet est sollicitudin, eget placerat lectus fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque lobortis, mi et adipiscing pharetra, eros sem scelerisque tellus, eu viverra sem justo vestibulum tellus. Proin pharetra metus id augue imperdiet, eget ultrices arcu commodo. Etiam dui ligula, accumsan auctor aliquam nec, tristique at est. Sed eget venenatis tortor, quis pulvinar sem. Phasellus in ligula massa. Nullam a eros et lacus dapibus posuere."+' '+

"Morbi id egestas dolor. Donec non posuere massa. In varius hendrerit augue, quis feugiat diam pulvinar eget. Nunc non gravida lacus. Duis iaculis justo ac enim volutpat commodo. Morbi sagittis orci in nibh blandit, ac pulvinar nibh convallis. Proin ac nisl dui. Nam condimentum cursus odio sit amet tempus. Aenean vestibulum elit a lorem dignissim, in adipiscing arcu rutrum. Vestibulum non varius nisl, a porta elit."+' '+

"Maecenas sit amet eros eget dui blandit consequat. Donec et sollicitudin risus. Vivamus accumsan ante vel mattis vehicula. Vestibulum eget dolor a velit ultricies ultricies. Curabitur turpis sapien, tempus eu consectetur a, tempus sed lacus. Proin sodales iaculis lorem, bibendum lobortis mauris imperdiet vel. Maecenas a bibendum erat. Morbi pellentesque purus sit amet enim pulvinar ullamcorper. Nunc vitae cursus justo. Suspendisse egestas nibh eget neque vulputate molestie. Aenean sit amet velit a felis pellentesque commodo eu ut nibh. Pellentesque at vehicula metus. Morbi aliquet justo non tellus pretium bibendum. Maecenas porttitor et tortor id interdum. Cras fermentum tellus nec porttitor feugiat. Vestibulum facilisis nec dolor vel volutpat."+' '+

"Aenean commodo nunc eros, a pharetra sem auctor nec. Quisque at ullamcorper lectus, non sagittis est. Morbi sagittis bibendum enim non gravida. Sed ac sem viverra, commodo dolor ut, tempus lectus. Nunc sit amet aliquam nibh. Praesent ultrices tortor at velit interdum viverra. Duis suscipit erat ac turpis pharetra bibendum. Vivamus molestie nec lectus scelerisque convallis. Curabitur metus purus, faucibus tempor neque ac, convallis lacinia tortor. Morbi in neque pretium, placerat orci interdum, ornare sapien. Quisque ornare diam ac eros molestie, ut pellentesque enim eleifend."+' '+

"Integer dapibus, sapien in suscipit tristique, risus eros tempor ligula, a malesuada tellus elit eget felis. Morbi viverra elit lectus. Nulla eleifend leo ante, sit amet semper nibh auctor non. Vestibulum laoreet ante vitae justo fringilla, facilisis pulvinar nunc dignissim. Donec venenatis nisl a neque pulvinar viverra. Phasellus ac ante et nisi pulvinar fringilla. Nunc dictum euismod ipsum sit amet elementum."+' '+

"Aenean eleifend non nisi non venenatis. Sed ac turpis at nisi sodales hendrerit vitae quis velit. Mauris eget tincidunt eros, nec molestie nulla. Proin faucibus dictum vestibulum. Sed a neque quam. Pellentesque aliquet lobortis justo, vitae aliquam velit congue a. Suspendisse volutpat gravida arcu vel euismod."+' '+

"Vivamus in urna et lectus posuere suscipit. Curabitur ultricies erat diam, vel tristique neque tempus luctus. Sed tempus iaculis mi in sollicitudin. Nullam vestibulum quam leo, sed imperdiet nisi congue at. Mauris volutpat arcu sed urna hendrerit, sit amet commodo arcu scelerisque. Integer molestie cursus mi id ornare. Phasellus ut malesuada arcu, sit amet dapibus odio. Phasellus in convallis justo. Etiam hendrerit commodo nulla ac vehicula. Duis lorem est, sodales at venenatis nec, commodo ac neque. Aliquam tincidunt facilisis nunc. Nullam rutrum bibendum orci, sit amet semper tortor consectetur at."+' '+

"Donec in urna laoreet, ullamcorper libero eget, convallis dolor. Nullam sodales commodo lectus nec dictum. Suspendisse et facilisis neque, quis ullamcorper libero. Nullam in sapien mattis, volutpat arcu eu, viverra augue. Nullam dictum lorem ut orci eleifend, semper gravida nisl congue. Aenean tempor rutrum justo vitae lacinia. Ut suscipit ipsum a nisi ultricies mollis. Maecenas ac auctor justo. Fusce sit amet ipsum volutpat, hendrerit dolor porttitor, rhoncus neque. Donec quis condimentum enim. Praesent vitae lectus nec dolor vestibulum mattis."+' '+

"Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam pharetra viverra eros quis dignissim. Fusce vel dui mauris. Pellentesque mollis ante ac fermentum pellentesque. Proin ultrices, nulla ut venenatis dapibus, mi velit commodo purus, in imperdiet odio mauris nec felis. Praesent scelerisque eros id sollicitudin laoreet. Praesent ultricies, purus sit amet bibendum imperdiet, ligula arcu imperdiet justo, a ullamcorper turpis lectus sed dolor. Maecenas nec tempus mauris, quis accumsan nibh."+' '+

"Vestibulum eleifend blandit lobortis. Sed interdum semper sapien, et lacinia dui suscipit sit amet. Integer elementum felis ut diam tempus, ac facilisis eros posuere. Nullam placerat tristique metus, eget venenatis augue molestie eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut egestas mauris nec lacus vehicula, pulvinar fringilla lectus tempor. Sed ut ante arcu."+' '+

"Ut convallis commodo ipsum quis tempus. Sed pharetra velit eget sollicitudin pretium. Fusce molestie at purus a scelerisque. Nulla facilisi. Morbi felis neque, gravida sed congue sed, dapibus vel augue. Vivamus viverra condimentum luctus. Ut at tellus nec augue convallis congue. Maecenas placerat ultrices lorem, non convallis nibh malesuada vel. Praesent non hendrerit velit, sit amet rutrum massa. Curabitur quis elementum est. Aliquam erat volutpat. Duis pulvinar tellus a consequat auctor. Sed iaculis sed ligula quis hendrerit. Fusce consequat facilisis eros, in tempus tellus vehicula eu."+' '+

"Duis condimentum at mauris quis interdum. Phasellus imperdiet sodales massa, quis lobortis sem blandit nec. Aliquam nec sapien mauris. Aliquam gravida cursus dolor vitae interdum. Cras at ultrices mi, ut lacinia purus. Morbi gravida sapien in lectus rutrum vehicula. Sed volutpat condimentum ligula. Aliquam erat volutpat. Phasellus aliquet velit felis, non faucibus nunc hendrerit non. Fusce semper urna id nibh mollis, sit amet viverra nibh dictum. Sed dignissim vel lorem vel consequat. Suspendisse convallis nibh tortor, a suscipit metus tincidunt a."+' '+

"Vivamus interdum sed diam vitae euismod. Sed dignissim a mauris non cursus. Quisque vestibulum, nunc eu pretium fringilla, lacus ante feugiat nibh, eu dictum sapien velit in dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis sem massa. Suspendisse vel bibendum massa, a mattis dui. Praesent massa eros, pretium quis vehicula quis, blandit sit amet libero. Etiam sed dolor mi. Pellentesque fringilla tempus nulla, at hendrerit magna viverra ut. Praesent dapibus tempor orci, ut vehicula justo luctus sit amet. Fusce mattis felis turpis, at rutrum eros cursus et."+' '+

"Suspendisse sed semper lacus. Aenean lobortis pellentesque mattis. Fusce luctus sagittis leo, ac commodo magna pharetra ut. In hac habitasse platea dictumst. Donec in ornare sem, rutrum ullamcorper magna. Nulla nulla nibh, ullamcorper in lacus a, sodales gravida libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum accumsan iaculis eros in aliquam. Praesent ligula risus, facilisis sed pharetra iaculis, lobortis at mi. Curabitur ornare egestas est, eu ultricies risus. Cras ornare volutpat risus euismod tristique. Mauris condimentum eget nulla vitae volutpat. Curabitur vel purus ac erat commodo viverra."

      )
    );
  }

});

exports.Dashboard = Dashboard;
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components/dashboard.jsx","/components")
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":13,"buffer":10}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/** @jsx React.DOM */


var CONFIG = require('../config');
var UTIL = require("../util");
var Router = require("./router");

var Dashboard = require('./dashboard').Dashboard;
var Login = require("./login").Login;
var MyAccount = require("./my-account").MyAccount;
var EditAccount = require("./my-account").EditAccount;
var Websites = require("./website").Websites;
var AddWebsite = require("./website").AddWebsite;
var EditWebsite = require("./website").EditWebsite;



var Layout = React.createClass({displayName: 'Layout',
  getInitialState: function() {

    // set the pushState to blank if the user arrives to the dashboard, either by going to the root or entering an invalid route
    var pos = Backbone.history.fragment;

        // Look up the current route against CONFIG.ROUTES so that we can populate Layout with the pretty path name.
    // If the current path isn't defined in CONFIG.ROUTES, send to the Dashboard
    var path = _.find(CONFIG.ROUTES, { 'url': pos });


    // If no path, then use the first route.
    if(_.isEmpty(pos)) {
      path = _.first(CONFIG.ROUTES);
    }

    // Current path isn't found. Check if it's a route with parameters
    if(_.isEmpty(path)) {

      path = _.last(_.filter(CONFIG.ROUTES, function(route) {
        return _.contains(pos, route.url) && route.allow_parameters;
      }));

    }


    if(_.has(path, "name")) {
      path = path.name
    } else {
      path = "Dashboard"
    }



    if(path === "Dashboard") {
      router.navigate("");
    };

    document.title = path + " | " + CONFIG.WEBSITE_NAME;

    return {path: path, user: undefined, render: false, active_website: undefined, websites: undefined, alert: {'message' : null, 'type' : null}};
  },

  componentWillReceiveProps: function() {

// set the pushState to blank if the user arrives to the dashboard, either by going to the root or entering an invalid route
    var pos = Backbone.history.fragment;

        // Look up the current route against CONFIG.ROUTES so that we can populate Layout with the pretty path name.
    // If the current path isn't defined in CONFIG.ROUTES, send to the Dashboard
    var path = _.find(CONFIG.ROUTES, { 'url': pos });


    // If no path, then use the first route.
    if(_.isEmpty(pos)) {
      path = _.first(CONFIG.ROUTES);
    }

    // Current path isn't found. Check if it's a route with parameters
    if(_.isEmpty(path)) {

      path = _.last(_.filter(CONFIG.ROUTES, function(route) {
        return _.contains(pos, route.url) && route.allow_parameters;
      }));

    }


    if(_.has(path, "name")) {
      path = path.name
    } else {
      path = "Dashboard"
    }



    if(path === "Dashboard") {
      router.navigate("");
    };

    this.setPos(pos, path)
    //this.setState({path: path})

    

  },

  componentDidMount: function() {

    _.getSession.call(this);

  },

  setPos: function(url, pos) {

    _.getSession.call(this);

    // Onboarding screen if no websites exist

      document.title = pos + " | " + CONFIG.WEBSITE_NAME;
      this.setState({path: pos});

      router.navigate(url);
    

    this.setState({alert: {'message' : null, 'type' : null}});

  },

  setWebsite: function(website) {

    console.log(website)

    // if this is called with "default" as an argument, then set the active website to the first one in the user's list
    var websites = this.state.websites;

    if(_.isEmpty(websites)) {
      return this.setState({active_website: "default"});
    };


    var first_website = _.first(websites).id;

    if( (!_.isEmpty(websites)) && (website === "default")) {

      this.setState({active_website: first_website});

    } else {


      var cookie = JSON.parse($.cookie("application"));

      cookie.active_website = website;

      $.cookie("application", JSON.stringify(cookie), {path: "/", expires: 120});

      this.setState({active_website: website});

    };



  },

  setUser: function(state) {
    this.setState({user: state});

    // Kill cookie if user is logging out
    if(state === undefined) {
      $.removeCookie("application");
    };

  },

  setAlert: function(message, type) {

    this.setState({alert: {'message' : message, 'type' : type}});

  },

  setWebsites: function(websites) {

    this.setState({websites: websites});

  },

  render: function() {

    // Defer rendering while checking if cookie is valid
    if(this.state.render) {

        // Login view if not logged in
        if(this.state.user === undefined) {

          return (
                  React.DOM.div(null, 
                  Login( {path:this.state.path, setPos:this.setPos, user:this.state.user, setUser:this.setUser, setWebsite:this.setWebsite, websites:this.state.websites, setWebsites:this.setWebsites, alert:this.state.alert, setAlert:this.setAlert} )
                  )
                  )
        } else {

        // User is logged in
        return (
                React.DOM.div(null, 
                TopBar( {path:this.state.path, setPos:this.setPos, user:this.state.user, setUser:this.setUser, active_website:this.state.active_website, setWebsite:this.setWebsite, websites:this.state.websites, setWebsites:this.setWebsites, alert:this.state.alert, setAlert:this.setAlert} ),
                LeftMenu( {routes:this.props.routes, path:this.state.path, setPos:this.setPos, user:this.state.user, setUser:this.setUser, active_website:this.state.active_website, setWebsite:this.setWebsite, websites:this.state.websites, setWebsites:this.setWebsites, alert:this.state.alert, setAlert:this.setAlert} ),
                Content( {path:this.state.path, setPos:this.setPos, user:this.state.user, setUser:this.setUser, active_website:this.state.active_website, setWebsite:this.setWebsite, websites:this.state.websites, setWebsites:this.setWebsites, alert:this.state.alert, setAlert:this.setAlert} )
                )
                );
      }
    } else {

      var loadingMsgStyle = {
       position: "relative",
       top: "30%"
     };

     return(

            React.DOM.div( {className:"row text-center", style:loadingMsgStyle}, 
            React.DOM.h1(null, "Loading...")
            )
            )

   }
 }

});


var TopBar = React.createClass({displayName: 'TopBar',

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
    router.navigate('', {trigger: false, replace: true});
    this.props.setUser(undefined);
    this.props.setWebsites(undefined);
    this.props.setPos("", "Dashboard");

  },

  render: function() {

    return (
            React.DOM.div( {id:"topBar", className:"sticky"}, 
            React.DOM.nav( {className:"top-bar", 'data-topbar':true, 'data-options':"is_hover: false"}, 
            React.DOM.ul( {className:"title-area"}, 
            React.DOM.li( {className:"name"}, 
            React.DOM.h1(null, React.DOM.a( {href:"#"}, "Web App Name"))
            ),
            React.DOM.li( {className:"toggle-topbar menu-icon"}, React.DOM.a( {href:"#"}, "Menu"))
            ),

            React.DOM.section( {className:"top-bar-section"}, 

            React.DOM.ul( {className:"right"}, 
            React.DOM.li( {className:"active has-dropdown"}, 
            React.DOM.a( {href:"#"}, "Logged in as ", this.props.user.fullName),
            React.DOM.ul( {className:"dropdown"}, 
            React.DOM.li(null, React.DOM.a( {'data-nav':"account", onClick:this.route}, "My Account")),
            React.DOM.li(null, React.DOM.a( {onClick:this.logout}, "Logout"))
            )
            ),
            React.DOM.li( {className:"has-dropdown"}, 
            React.DOM.a( {href:"#"}, "Help"),
            React.DOM.ul( {className:"dropdown"}, 
            React.DOM.li(null, React.DOM.a( {href:"#"}, "Getting Started Guide")),
            React.DOM.li(null, React.DOM.a( {href:"#"}, "API Documentation")),
            React.DOM.li(null, React.DOM.a( {href:"#"}, "Contact Us"))
            )
            )
            )

            )
            )
            )
            );
}

});


var LeftMenu = React.createClass({displayName: 'LeftMenu',

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
    
    var links = _.map(_.filter(this.props.routes, "show_in_menu"), function(link, key) {

      var classString = "";
      if((self.props.path===link.name) || (_.contains(link.subroutes,self.props.path))){classString = "active"};

      return React.DOM.li( {key:key}, React.DOM.a( {href:link.url, onClick:self.route, 'data-nav':link.url, className:classString}, link.name))
    });

    return (
            React.DOM.div( {id:"leftMenu", className:"small-4 large-2 columns"}, 
            WebsiteSelector( {active_website:this.props.active_website, setWebsite:this.props.setWebsite, setPos:this.props.setPos, websites:this.props.websites, setWebsites:this.props.setWebsites, alert:this.props.alert, setAlert:this.props.setAlert} ),
            React.DOM.ul( {className:"side-nav"}, links)
            )
            );
  }

});


var WebsiteSelector = React.createClass({displayName: 'WebsiteSelector',

  websiteSelected: function(e) {

    var websites = this.props.websites;

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
    if(this.props.active_website !== undefined) {
      value = this.props.active_website;
    };

    if($.cookie("application")) {
      var websites = this.props.websites;


      var links = _.map(websites, function(site, key) {

        return React.DOM.option( {key:site.id, value:site.id}, site.name)

      });

    };

    return (

            React.DOM.div(null, 

            React.DOM.select( {id:"websiteSelector", onChange:this.websiteSelected, value:value}, 

            React.DOM.option( {key:"0", value:"0"}, "Add New Website"),
            links
            )

            )
            )

  }

});

var Content = React.createClass({displayName: 'Content',

  render: function() {


    var section = null;
    var self = this;

    // scroll to top
    $(window).scrollTop(0);

    // The code below checks if there is a React component that matches the current path's name.
    // If there is, then render it, otherwise just render the name of the current path.
    if ( eval("typeof " + this.props.path.replace(" ","") + " === 'function'") ){ 

      var element = eval(this.props.path.replace(" ",""));

      section = element( {path:this.props.path, setPos:this.props.setPos, user:this.props.user, setUser:this.props.setUser, setWebsite:this.props.setWebsite, active_website:this.props.active_website, websites:this.props.websites, setWebsites:this.props.setWebsites, alert:this.props.alert, setAlert:this.props.setAlert} )

    } else {
      section = (
                 React.DOM.p(null, this.props.path)
                 )
    }


    var alerts = function() {

      if(!_.isEmpty(self.props.alert.message)) {
        var classString = "alert-box " + self.props.alert.type
        return (

                React.DOM.div( {'data-alert':true, className:classString}, 
                self.props.alert.message
                )
                )
      }

    };

    return (
            React.DOM.div( {id:"content", className:"small-8 large-10 columns"}, 

            alerts(),

            section
            )
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
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components/layout.jsx","/components")
},{"../config":7,"../util":9,"./dashboard":1,"./login":3,"./my-account":4,"./router":5,"./website":6,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":13,"buffer":10}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/** @jsx React.DOM */

var CONFIG = require('../config');

var Login = React.createClass({displayName: 'Login',

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


        } else {


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
              React.DOM.small( {className:"error"}, field)
              )
    }

  };

  return (
          React.DOM.div( {id:"login", className:"row"}, 

          React.DOM.div( {className:"panel"}, 
          React.DOM.h1(null, "Login to ", CONFIG.WEBSITE_NAME),
          "Please login to access ", CONFIG.WEBSITE_NAME,".",
          React.DOM.hr(null ),
          validation_error(this.state.login_server_error),
          React.DOM.form(null, 
          React.DOM.label(null, "Email",
          React.DOM.input( {id:"login_email", type:"email", placeholder:"Email"} ),
          validation_error(this.state.login_email_error)

          ),
          React.DOM.label(null, "Password",
          React.DOM.input( {id:"login_password", type:"password", placeholder:"Password"} ),
          validation_error(this.state.login_password_error)
          ),
          React.DOM.button( {onClick:this.login, className:"button radius expand"}, "Login")
          ),

          React.DOM.hr(null ),
          React.DOM.h1(null, "Don't have an account?"),
          "Register a new account at ", CONFIG.WEBSITE_NAME,".",
          React.DOM.hr(null ),
          validation_error(this.state.register_server_error),
          React.DOM.form(null, 

          React.DOM.label(null, "First Name",
          React.DOM.input( {id:"register_first_name", type:"text", placeholder:"First Name"} ),
          validation_error(this.state.register_first_name_error)
          ),

          React.DOM.label(null, "Last Name",
          React.DOM.input( {id:"register_last_name", type:"text", placeholder:"Last Name"} ),
          validation_error(this.state.register_last_name_error)
          ),

          React.DOM.label(null, "Email",
          React.DOM.input( {id:"register_email", type:"email", placeholder:"Email"} ),
          validation_error(this.state.register_email_error)
          ),

          React.DOM.label(null, "Password",
          React.DOM.input( {id:"register_password", type:"password", placeholder:"Password"} ),
          validation_error(this.state.register_password_error)
          ),

          React.DOM.button( {onClick:this.register, className:"button radius expand"}, "Register")
          )



          )
          )
          );
}
});



exports.Login = Login;
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components/login.jsx","/components")
},{"../config":7,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":13,"buffer":10}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/** @jsx React.DOM */

var CONFIG = require('../config');

var MyAccount = React.createClass({displayName: 'MyAccount',

  routeEditAccount: function(e) {
    e.preventDefault();
    console.log("button clicked");
    this.props.setPos("account/edit", "Edit Account");
  },

  render: function() {

    return (

            React.DOM.div( {className:"text-center"}, 

            React.DOM.img( {className:"th", src:"http://gravatar.com/avatar/f00161c7b35f0084d390f785e015b9ca.jpg"} ),
            React.DOM.h1(null, this.props.user.fullName),
            React.DOM.h3(null, this.props.user.email),
            React.DOM.h4(null, "Registered ", moment(this.props.user.createdAt).fromNow()),

            React.DOM.button( {onClick:this.routeEditAccount, className:"button radius"}, "Edit Account")

            )
            )

  }

});


var EditAccount = React.createClass({displayName: 'EditAccount',

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
    } else if(email.indexOf("@") === -1) {
      this.setState({email_error: "Please input a valid email address"});
    } else {
      self.setState({email_error: undefined});
    };

    if(_.isEmpty(password)) {
      self.setState({password_error: "Password cannot be blank"});
    } else {
      self.setState({password_error: undefined});
    };

// send to server if client validation passes
if(!_.some([this._pendingState.first_name_error, this._pendingState.last_name_error, this._pendingState.email_error, this._pendingState.password_error])) {

  var updated_user = {};

  updated_user.uid = this.props.user.uid;
  updated_user.first_name = first_name;
  updated_user.last_name = last_name;
  updated_user.email = email;
  updated_user.password = password;

  console.log(updated_user);

  var cookie = JSON.parse($.cookie("application"));
  var token = cookie.sessionId;


  superagent
  .post(CONFIG.URLS.updateAccount)
  .set('X-API-Key', token)
  .query(updated_user)
  .set('Accept', 'application/json')
  .end(function(error, res){

    console.log(res);

    if(res.ok) {

      self.props.setPos("account", "My Account");
      self.props.setAlert("Your account has been updated!", "success");

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
              React.DOM.small( {className:"error"}, self.state.server_error)
              )
    }
  };

  var first_name_error = function() {
    if(self.state.first_name_error !== undefined) {
      return (
              React.DOM.small( {className:"error"}, self.state.first_name_error)
              )
    }
  };

  var last_name_error = function() {
    if(self.state.last_name_error !== undefined) {
      return (
              React.DOM.small( {className:"error"}, self.state.last_name_error)
              )
    }
  };

  var email_error = function() {
    if(self.state.email_error !== undefined) {
      return (
              React.DOM.small( {className:"error"}, self.state.email_error)
              )
    }
  };

  var password_error = function() {
    if(self.state.password_error !== undefined) {
      return (
              React.DOM.small( {className:"error"}, self.state.password_error)
              )
    }
  };

  return (

          React.DOM.div( {className:"text-center"}, 

          React.DOM.ul( {className:"breadcrumbs"}, 
          React.DOM.li(null, React.DOM.a( {onClick:this.routeMyAccount}, "My Account")),
          React.DOM.li( {className:"current"}, "Edit Account"),
          React.DOM.li( {className:"current"}, this.props.user.fullName)
          ),

          React.DOM.h2(null, "Edit Your Account"),

          React.DOM.div( {className:"row"}, 
          React.DOM.form(null, 
          React.DOM.fieldset(null, 
          React.DOM.legend(null, "Update User Details"),
          server_error(),
          React.DOM.label(null, "First Name",
          React.DOM.input( {id:"first_name", type:"text", placeholder:"First Name", defaultValue:this.props.user.firstName} ),
          first_name_error()
          ),

          React.DOM.label(null, "Last Name",
          React.DOM.input( {id:"last_name", type:"text", placeholder:"Last Name", defaultValue:this.props.user.lastName} ),
          last_name_error()
          ),

          React.DOM.label(null, "Email Address",
          React.DOM.input( {id:"email", type:"text", placeholder:"Email Address", defaultValue:this.props.user.email} ),
          email_error()
          ),

          React.DOM.label(null, "Password",
          React.DOM.input( {id:"password", type:"password", placeholder:"Password"} ),
          password_error()
          )

          ),

          React.DOM.button( {onClick:this.saveUser, className:"button radius expand"}, "Update")
          )
          )



          )
          )

}

});


exports.MyAccount = MyAccount;
exports.EditAccount = EditAccount;
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components/my-account.jsx","/components")
},{"../config":7,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":13,"buffer":10}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/** @jsx React.DOM */

var CONFIG = require('../config');
var Layout = require("./layout").Layout;

Router = Backbone.Router.extend({

  // Routes are defined in CONFIG.ROUTES, so send any path to showLayout
  routes : {
    "*splat" : "showLayout"
  },
  showLayout : function(pos) {
    console.log(pos)

    React.renderComponent(
                          Layout( {routes:CONFIG.ROUTES} ),
                          document.getElementById('application')
                          );
  }
});

router = new Router();

Backbone.history.start({pushState: true});
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components/router.jsx","/components")
},{"../config":7,"./layout":2,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":13,"buffer":10}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/** @jsx React.DOM */

var CONFIG = require('../config');

var Websites = React.createClass({displayName: 'Websites',

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
             React.DOM.tr( {id:website.id, key:website.id}, 
             React.DOM.td(null, website.name),
             React.DOM.td(null, website.sender_name, " (",website.sender_email,")"),
             React.DOM.td(null, moment(website.created_at).fromNow()),
             React.DOM.td(null, React.DOM.button( {onClick:self.routeEditWebsite, className:"button radius"}, "Edit"))
             )

             )

    });

    return (

            React.DOM.div(null, 
            React.DOM.h2(null, "Websites"),

            React.DOM.table( {width:"100%"}, 
            React.DOM.thead(null, 
            React.DOM.tr(null, 
            React.DOM.th(null, "Website Name"),
            React.DOM.th(null, "Sender Details"),
            React.DOM.th(null, "Created"),
            React.DOM.th(null, "Actions")
            )
            ),
            React.DOM.tbody(null, 
            website_rows
            )
            ),




            React.DOM.div( {className:"text-center"}, 
            React.DOM.button( {onClick:this.routeAddWebsite, className:"button radius"}, "Add New Website")

            )
            )
            )

  }

});


var AddWebsite = React.createClass({displayName: 'AddWebsite',

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
              React.DOM.small( {className:"error"}, self.state.server_error)
              )
    }
  };

  var name_error = function() {
    if(self.state.name_error !== undefined) {
      return (
              React.DOM.small( {className:"error"}, self.state.name_error)
              )
    }
  };

  var url_error = function() {
    if(self.state.url_error !== undefined) {
      return (
              React.DOM.small( {className:"error"}, self.state.url_error)
              )
    }
  };

  var sender_name_error = function() {
    if(self.state.sender_name_error !== undefined) {
      return (
              React.DOM.small( {className:"error"}, self.state.sender_name_error)
              )
    }
  };

  var sender_email_error = function() {
    if(self.state.sender_email_error !== undefined) {
      return (
              React.DOM.small( {className:"error"}, self.state.sender_email_error)
              )
    }
  };

    return (

            React.DOM.div( {className:"text-center"}, 

            React.DOM.ul( {className:"breadcrumbs"}, 
            React.DOM.li(null, React.DOM.a( {onClick:this.routeWebsites}, "Websites")),
            React.DOM.li( {className:"current"}, "Add Website")
            ),

            React.DOM.h2(null, "Add Website"),

              React.DOM.div( {className:"row"}, 
              React.DOM.form(null, 
              React.DOM.fieldset(null, 
              React.DOM.legend(null, "Website Details"),
              server_error(),
              React.DOM.label(null, "Website Name",
              React.DOM.input( {id:"name", type:"text", placeholder:"Website Name"} ),
              name_error()
              ),

              React.DOM.label(null, "URL",
              React.DOM.input( {id:"url", type:"text", placeholder:"Website URL"} ),
              url_error()
              ),

              React.DOM.label(null, "Sender Name",
              React.DOM.input( {id:"sender_name", type:"text", placeholder:"Sender Name"} ),
              sender_name_error()
              ),

              React.DOM.label(null, "Sender Email",
              React.DOM.input( {id:"sender_email", type:"text", placeholder:"Sender Email"} ),
              sender_email_error()
              )

              ),

              React.DOM.button( {onClick:this.saveWebsite, className:"button radius expand"}, "Add")
              )
              )

            )
            )

  }

});

var EditWebsite = React.createClass({displayName: 'EditWebsite',

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
              React.DOM.small( {className:"error"}, self.state.server_error)
              )
    }
  };

  var name_error = function() {
    if(self.state.name_error !== undefined) {
      return (
              React.DOM.small( {className:"error"}, self.state.name_error)
              )
    }
  };

  var url_error = function() {
    if(self.state.url_error !== undefined) {
      return (
              React.DOM.small( {className:"error"}, self.state.url_error)
              )
    }
  };

  var sender_name_error = function() {
    if(self.state.sender_name_error !== undefined) {
      return (
              React.DOM.small( {className:"error"}, self.state.sender_name_error)
              )
    }
  };

  var sender_email_error = function() {
    if(self.state.sender_email_error !== undefined) {
      return (
              React.DOM.small( {className:"error"}, self.state.sender_email_error)
              )
    }
  };


  if(!_.isEmpty(active_website)) {
    if(active_website.id === parseInt(website_id)) {

      return (

              React.DOM.div( {className:"text-center"}, 

              React.DOM.ul( {className:"breadcrumbs"}, 
              React.DOM.li(null, React.DOM.a( {onClick:this.routeWebsites}, "Websites")),
              React.DOM.li( {className:"current"}, "Edit Website"),
              React.DOM.li( {className:"current"}, active_website.name)
              ),

              React.DOM.h2(null, "Editing ", active_website.name),

              React.DOM.div( {className:"row"}, 
              React.DOM.form(null, 
              React.DOM.fieldset(null, 
              React.DOM.legend(null, "Update Details"),
              server_error(),
              React.DOM.label(null, "Website Name",
              React.DOM.input( {id:"name", type:"text", placeholder:"Website Name", defaultValue:active_website.name} ),
              name_error()
              ),

              React.DOM.label(null, "URL",
              React.DOM.input( {id:"url", type:"text", placeholder:"Website URL", defaultValue:active_website.url} ),
              url_error()
              ),

              React.DOM.label(null, "Sender Name",
              React.DOM.input( {id:"sender_name", type:"text", placeholder:"Sender Name", defaultValue:active_website.sender_name} ),
              sender_name_error()
              ),

              React.DOM.label(null, "Sender Email",
              React.DOM.input( {id:"sender_email", type:"text", placeholder:"Sender Email", defaultValue:active_website.sender_email} ),
              sender_email_error()
              )

              ),

              React.DOM.button( {onClick:this.saveWebsite, className:"button radius expand"}, "Update")
              ),

              React.DOM.hr(null ),
              React.DOM.h3(null, "Permenantly Delete Website"),
              
              React.DOM.p(null, "Click the button below to ", React.DOM.strong(null, "permenantly remove the ", active_website.name, " website and all of its data"), " from the system."),
              React.DOM.button( {onClick:this.deleteWebsite, className:"button radius alert expand"}, "Delete")
              )


              )
              )
} else {
  return (
          React.DOM.div(null, 
          "An unexpected error occurred"
          ))
} 
} else {
  return (
          React.DOM.div(null, 
          "An unexpected error occurred"
          ))
}
}

});

exports.Websites = Websites;
exports.AddWebsite = AddWebsite;
exports.EditWebsite = EditWebsite;

}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components/website.jsx","/components")
},{"../config":7,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":13,"buffer":10}],7:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 *
 * This file is used to configure settings for the application.
 *
 * @author Dhruv Bhatia <dhruv@dhruvbhatia.com>
 *
 */
module.exports = {

  WEBSITE_NAME : "React Demo",

  ROUTES : [
    {name: "Dashboard", url: "", show_in_menu: true, allow_parameters: false},
    {name: "Websites", url: "websites", subroutes: "Add Website, Edit Website", show_in_menu: true, allow_parameters: false},
    {name: "Add Website", url: "websites/add", show_in_menu: false, allow_parameters: false},
    {name: "Edit Website", url: "websites/edit", show_in_menu: false, allow_parameters: true},
    {name: "Campaigns", url: "campaigns", show_in_menu: true, allow_parameters: false},
    {name: "My Account", url: "account", subroutes: "Edit Account", show_in_menu: true, allow_parameters: false},
    {name: "Edit Account", url: "account/edit", show_in_menu: false, allow_parameters: false},
    {name: "Support", url: "support", show_in_menu: true, allow_parameters: false}
  ],

  URLS : {

    "validate" : "http://192.168.178.20:9000/api/v1/auth/validate/",
    "updateWebsite" : "http://192.168.178.20:9000/api/v1/website/update",
    "addWebsite" : "http://192.168.178.20:9000/api/v1/website/add",
    "deleteWebsite" : "http://192.168.178.20:9000/api/v1/website/delete",
    "login" : 'http://192.168.178.20:9000/api/v1/auth/login',
    "register" : "http://192.168.178.20:9000/api/v1/account/add",
    "updateAccount" : "http://192.168.178.20:9000/api/v1/account/update"

  },


  MODE : "Debug"

};
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/config.js","/")
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":13,"buffer":10}],8:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var config = require("./config");
var BackboneRouter = require("./components/router");

Application = require("./components/layout").Layout;

// Login = require("./components/layout").Login;
// TopBar = require("./components/layout").TopBar;
// LeftMenu = require("./components/layout").LeftMenu;
// WebsiteSelector = require("./components/layout").WebsiteSelector;
// Content = require("./components/layout").Content;
// Router = require("./components/layout").Router;





window.onload = function() {

  $(document).foundation();

}();
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_ff9c721c.js","/")
},{"./components/layout":2,"./components/router":5,"./config":7,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":13,"buffer":10}],9:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 *
 * This file contains common helper functions which extend Lo-Dash's _ namespace.
 *
 * @namespace _
 * @author Dhruv Bhatia <dhruv@dhruvbhatia.com>
 *
 */

var CONFIG = require("./config");

_.mixin({

  /**
   *
   * Checks for a valid session cookie & pulls down any updates from the server,
   * otherwise kills the current session which shows the Login screen.
   *
   */
  getSession: function() {


    var cookie = $.cookie("application");
    var self = this;

    if (!_.isUndefined(cookie)) {

      var token = JSON.parse(cookie).sessionId;

      superagent
        .get(CONFIG.URLS.validate + token)
        .set('X-API-Key', token)
        .set('Accept', 'application/json')
        .end(function(error, res) {

          if (res.ok === true) {

            var sessionId = JSON.parse(res.text).sessionId
            var user = JSON.parse(res.text).user

            var user_websites = JSON.parse(res.text).websites

            var active_website = undefined;

            if (!_.isEmpty(user_websites)) {
              // set active website to the last selected website in the cookie, else first website in the user's list
              active_website = JSON.parse(cookie).active_website;



              if (_.isEmpty(_.find(user_websites, {
                "id": parseInt(active_website)
              }))) {
                console.log(active_website)
                active_website = _.first(user_websites).id;
              }

            }

            $.cookie("application", JSON.stringify({
              "sessionId": sessionId,
              "active_website": active_website
            }), {
              path: "/",
              expires: 120
            });


            self.setWebsite(active_website);

            self.setState({
              user: user,
              active_website: active_website,
              websites: user_websites,
              render: true
            });



          } else {

            // Cookie no longer valid - render login form
            self.setUser(undefined);
            self.setState({
              render: true
            });

          }

          console.log(res);

        });



    } else {

      // No prev cookie - render login form
      self.setUser(undefined);
      self.setState({
        render: true
      });

    }
  }

});
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/util.js","/")
},{"./config":7,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":13,"buffer":10}],10:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */
Buffer._useTypedArrays = (function () {
  // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
  // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
  // because we need to be able to add all the node Buffer API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &&
        typeof arr.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.
  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject)
    while (subject.length % 4 !== 0) {
      subject = subject + '='
    }
  }

  // Find the length
  var length
  if (type === 'number')
    length = coerce(subject)
  else if (type === 'string')
    length = Buffer.byteLength(subject, encoding)
  else if (type === 'object')
    length = coerce(subject.length) // assume that object is array-like
  else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject))
        buf[i] = subject.readUInt8(i)
      else
        buf[i] = subject[i]
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' +
      'list should be an Array.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (typeof totalLength !== 'number') {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

// BUFFER INSTANCE METHODS
// =======================

function _hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  Buffer._charsWritten = i * 2
  return i
}

function _utf8Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function _asciiWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function _binaryWrite (buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length)
}

function _base64Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function _utf16leWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = _asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = _binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = _base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end !== undefined)
    ? Number(end)
    : end = self.length

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = _asciiSlice(self, start, end)
      break
    case 'binary':
      ret = _binarySlice(self, start, end)
      break
    case 'base64':
      ret = _base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++)
      target[i + target_start] = this[i + start]
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function _base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function _utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function _asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++)
    ret += String.fromCharCode(buf[i])
  return ret
}

function _binarySlice (buf, start, end) {
  return _asciiSlice(buf, start, end)
}

function _hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function _utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i+1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = clamp(start, len, 0)
  end = clamp(end, len, len)

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function _readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert)
}

function _readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function _readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert)
}

function _readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert)
}

function _readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert)
}

function _readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
}

function _writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert)
}

function _writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
}

function _writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert)
}

function _writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert)
}

function _writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert)
}

function _writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (typeof value === 'string') {
    value = value.charCodeAt(0)
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number')
  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  for (var i = start; i < end; i++) {
    this[i] = value
  }
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1)
        buf[i] = this[i]
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

// slice(start, end)
function clamp (index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len
  if (index >= 0) return index
  index += len
  if (index >= 0) return index
  return 0
}

function coerce (length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length)
  return length < 0 ? 0 : length
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F)
      byteArray.push(str.charCodeAt(i))
    else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16))
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  var pos
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/browserify/node_modules/buffer/index.js","/../../node_modules/browserify/node_modules/buffer")
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":13,"base64-js":11,"buffer":10,"ieee754":12}],11:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var ZERO   = '0'.charCodeAt(0)
	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	module.exports.toByteArray = b64ToByteArray
	module.exports.fromByteArray = uint8ToBase64
}())

}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","/../../node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":13,"buffer":10}],12:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","/../../node_modules/browserify/node_modules/buffer/node_modules/ieee754")
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":13,"buffer":10}],13:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.once = noop;
process.off = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js","/../../node_modules/browserify/node_modules/insert-module-globals/node_modules/process")
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":13,"buffer":10}]},{},[8])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL2FwcC9zY3JpcHRzL2NvbXBvbmVudHMvZGFzaGJvYXJkLmpzeCIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvYXBwL3NjcmlwdHMvY29tcG9uZW50cy9sYXlvdXQuanN4IiwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9hcHAvc2NyaXB0cy9jb21wb25lbnRzL2xvZ2luLmpzeCIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvYXBwL3NjcmlwdHMvY29tcG9uZW50cy9teS1hY2NvdW50LmpzeCIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvYXBwL3NjcmlwdHMvY29tcG9uZW50cy9yb3V0ZXIuanN4IiwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9hcHAvc2NyaXB0cy9jb21wb25lbnRzL3dlYnNpdGUuanN4IiwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9hcHAvc2NyaXB0cy9jb25maWcuanMiLCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL2FwcC9zY3JpcHRzL2Zha2VfZmY5YzcyMWMuanMiLCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL2FwcC9zY3JpcHRzL3V0aWwuanMiLCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWIvYjY0LmpzIiwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2bENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqIEBqc3ggUmVhY3QuRE9NICovXG5cbnZhciBEYXNoYm9hcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdEYXNoYm9hcmQnLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYobnVsbCwgXG4gICAgICAgICAgICBSZWFjdC5ET00ucChudWxsLCB0aGlzLnByb3BzLnBhdGgpLFxuXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIERvbmVjIG51bGxhIG5pc2wsIGZlcm1lbnR1bSBzaXQgYW1ldCBqdXN0byB2ZWwsIGNvbW1vZG8gaGVuZHJlcml0IG1ldHVzLiBRdWlzcXVlIGRpZ25pc3NpbSBldSBzYXBpZW4gdmVsIG9ybmFyZS4gTnVsbGEgdnVscHV0YXRlIGR1aSBldCBsb3JlbSB2dWxwdXRhdGUgZmVybWVudHVtLiBNYXVyaXMgdnVscHV0YXRlIGZhY2lsaXNpcyB1cm5hIHZlbCBmcmluZ2lsbGEuIFN1c3BlbmRpc3NlIGNvbmd1ZSBncmF2aWRhIHJpc3VzIGVnZXQgYWxpcXVldC4gQ3JhcyBhIGltcGVyZGlldCBudWxsYSwgc2l0IGFtZXQgY29udmFsbGlzIG9kaW8uIEFlbmVhbiBlcmF0IGVyYXQsIGVsZW1lbnR1bSBzaXQgYW1ldCBhcmN1IHF1aXMsIGFjY3Vtc2FuIGNvbW1vZG8gc2FwaWVuLiBNYWVjZW5hcyBsYWNpbmlhIGVzdCBxdWlzIG1hc3NhIHVsdHJpY2llcyB1bHRyaWNpZXMuIERvbmVjIG1hdXJpcyBtaSwgYWNjdW1zYW4gYWMgZXJhdCBldCwgc29sbGljaXR1ZGluIGZyaW5naWxsYSBtYXVyaXMuIE51bmMgdmFyaXVzIGZlcm1lbnR1bSBjb25zZWN0ZXR1ci4gU3VzcGVuZGlzc2UgbWF0dGlzIGR1aSBuZWMgZWdlc3RhcyB1bHRyaWNlcy4gU2VkIHNvZGFsZXMgaWQgdHVycGlzIHV0IHNhZ2l0dGlzLiBTdXNwZW5kaXNzZSBpbnRlcmR1bSB0cmlzdGlxdWUgZWxpdC4gUGhhc2VsbHVzIHNpdCBhbWV0IG1hdXJpcyBkaWFtLlwiKycgJytcblxuXCJDcmFzIHZlbCBwZWxsZW50ZXNxdWUgbmlzaSwgbm9uIGFsaXF1YW0gZW5pbS4gUHJhZXNlbnQgcmhvbmN1cyBxdWlzIGxhY3VzIGV1IHZpdmVycmEuIFZlc3RpYnVsdW0gc29sbGljaXR1ZGluIHNpdCBhbWV0IG51bmMgYSB2dWxwdXRhdGUuIEluIGV0IGRpZ25pc3NpbSByaXN1cy4gSW50ZWdlciBzdXNjaXBpdCBhdWd1ZSBzaXQgYW1ldCBlc3Qgc29sbGljaXR1ZGluLCBlZ2V0IHBsYWNlcmF0IGxlY3R1cyBmcmluZ2lsbGEuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy4gUGVsbGVudGVzcXVlIGxvYm9ydGlzLCBtaSBldCBhZGlwaXNjaW5nIHBoYXJldHJhLCBlcm9zIHNlbSBzY2VsZXJpc3F1ZSB0ZWxsdXMsIGV1IHZpdmVycmEgc2VtIGp1c3RvIHZlc3RpYnVsdW0gdGVsbHVzLiBQcm9pbiBwaGFyZXRyYSBtZXR1cyBpZCBhdWd1ZSBpbXBlcmRpZXQsIGVnZXQgdWx0cmljZXMgYXJjdSBjb21tb2RvLiBFdGlhbSBkdWkgbGlndWxhLCBhY2N1bXNhbiBhdWN0b3IgYWxpcXVhbSBuZWMsIHRyaXN0aXF1ZSBhdCBlc3QuIFNlZCBlZ2V0IHZlbmVuYXRpcyB0b3J0b3IsIHF1aXMgcHVsdmluYXIgc2VtLiBQaGFzZWxsdXMgaW4gbGlndWxhIG1hc3NhLiBOdWxsYW0gYSBlcm9zIGV0IGxhY3VzIGRhcGlidXMgcG9zdWVyZS5cIisnICcrXG5cblwiTW9yYmkgaWQgZWdlc3RhcyBkb2xvci4gRG9uZWMgbm9uIHBvc3VlcmUgbWFzc2EuIEluIHZhcml1cyBoZW5kcmVyaXQgYXVndWUsIHF1aXMgZmV1Z2lhdCBkaWFtIHB1bHZpbmFyIGVnZXQuIE51bmMgbm9uIGdyYXZpZGEgbGFjdXMuIER1aXMgaWFjdWxpcyBqdXN0byBhYyBlbmltIHZvbHV0cGF0IGNvbW1vZG8uIE1vcmJpIHNhZ2l0dGlzIG9yY2kgaW4gbmliaCBibGFuZGl0LCBhYyBwdWx2aW5hciBuaWJoIGNvbnZhbGxpcy4gUHJvaW4gYWMgbmlzbCBkdWkuIE5hbSBjb25kaW1lbnR1bSBjdXJzdXMgb2RpbyBzaXQgYW1ldCB0ZW1wdXMuIEFlbmVhbiB2ZXN0aWJ1bHVtIGVsaXQgYSBsb3JlbSBkaWduaXNzaW0sIGluIGFkaXBpc2NpbmcgYXJjdSBydXRydW0uIFZlc3RpYnVsdW0gbm9uIHZhcml1cyBuaXNsLCBhIHBvcnRhIGVsaXQuXCIrJyAnK1xuXG5cIk1hZWNlbmFzIHNpdCBhbWV0IGVyb3MgZWdldCBkdWkgYmxhbmRpdCBjb25zZXF1YXQuIERvbmVjIGV0IHNvbGxpY2l0dWRpbiByaXN1cy4gVml2YW11cyBhY2N1bXNhbiBhbnRlIHZlbCBtYXR0aXMgdmVoaWN1bGEuIFZlc3RpYnVsdW0gZWdldCBkb2xvciBhIHZlbGl0IHVsdHJpY2llcyB1bHRyaWNpZXMuIEN1cmFiaXR1ciB0dXJwaXMgc2FwaWVuLCB0ZW1wdXMgZXUgY29uc2VjdGV0dXIgYSwgdGVtcHVzIHNlZCBsYWN1cy4gUHJvaW4gc29kYWxlcyBpYWN1bGlzIGxvcmVtLCBiaWJlbmR1bSBsb2JvcnRpcyBtYXVyaXMgaW1wZXJkaWV0IHZlbC4gTWFlY2VuYXMgYSBiaWJlbmR1bSBlcmF0LiBNb3JiaSBwZWxsZW50ZXNxdWUgcHVydXMgc2l0IGFtZXQgZW5pbSBwdWx2aW5hciB1bGxhbWNvcnBlci4gTnVuYyB2aXRhZSBjdXJzdXMganVzdG8uIFN1c3BlbmRpc3NlIGVnZXN0YXMgbmliaCBlZ2V0IG5lcXVlIHZ1bHB1dGF0ZSBtb2xlc3RpZS4gQWVuZWFuIHNpdCBhbWV0IHZlbGl0IGEgZmVsaXMgcGVsbGVudGVzcXVlIGNvbW1vZG8gZXUgdXQgbmliaC4gUGVsbGVudGVzcXVlIGF0IHZlaGljdWxhIG1ldHVzLiBNb3JiaSBhbGlxdWV0IGp1c3RvIG5vbiB0ZWxsdXMgcHJldGl1bSBiaWJlbmR1bS4gTWFlY2VuYXMgcG9ydHRpdG9yIGV0IHRvcnRvciBpZCBpbnRlcmR1bS4gQ3JhcyBmZXJtZW50dW0gdGVsbHVzIG5lYyBwb3J0dGl0b3IgZmV1Z2lhdC4gVmVzdGlidWx1bSBmYWNpbGlzaXMgbmVjIGRvbG9yIHZlbCB2b2x1dHBhdC5cIisnICcrXG5cblwiQWVuZWFuIGNvbW1vZG8gbnVuYyBlcm9zLCBhIHBoYXJldHJhIHNlbSBhdWN0b3IgbmVjLiBRdWlzcXVlIGF0IHVsbGFtY29ycGVyIGxlY3R1cywgbm9uIHNhZ2l0dGlzIGVzdC4gTW9yYmkgc2FnaXR0aXMgYmliZW5kdW0gZW5pbSBub24gZ3JhdmlkYS4gU2VkIGFjIHNlbSB2aXZlcnJhLCBjb21tb2RvIGRvbG9yIHV0LCB0ZW1wdXMgbGVjdHVzLiBOdW5jIHNpdCBhbWV0IGFsaXF1YW0gbmliaC4gUHJhZXNlbnQgdWx0cmljZXMgdG9ydG9yIGF0IHZlbGl0IGludGVyZHVtIHZpdmVycmEuIER1aXMgc3VzY2lwaXQgZXJhdCBhYyB0dXJwaXMgcGhhcmV0cmEgYmliZW5kdW0uIFZpdmFtdXMgbW9sZXN0aWUgbmVjIGxlY3R1cyBzY2VsZXJpc3F1ZSBjb252YWxsaXMuIEN1cmFiaXR1ciBtZXR1cyBwdXJ1cywgZmF1Y2lidXMgdGVtcG9yIG5lcXVlIGFjLCBjb252YWxsaXMgbGFjaW5pYSB0b3J0b3IuIE1vcmJpIGluIG5lcXVlIHByZXRpdW0sIHBsYWNlcmF0IG9yY2kgaW50ZXJkdW0sIG9ybmFyZSBzYXBpZW4uIFF1aXNxdWUgb3JuYXJlIGRpYW0gYWMgZXJvcyBtb2xlc3RpZSwgdXQgcGVsbGVudGVzcXVlIGVuaW0gZWxlaWZlbmQuXCIrJyAnK1xuXG5cIkludGVnZXIgZGFwaWJ1cywgc2FwaWVuIGluIHN1c2NpcGl0IHRyaXN0aXF1ZSwgcmlzdXMgZXJvcyB0ZW1wb3IgbGlndWxhLCBhIG1hbGVzdWFkYSB0ZWxsdXMgZWxpdCBlZ2V0IGZlbGlzLiBNb3JiaSB2aXZlcnJhIGVsaXQgbGVjdHVzLiBOdWxsYSBlbGVpZmVuZCBsZW8gYW50ZSwgc2l0IGFtZXQgc2VtcGVyIG5pYmggYXVjdG9yIG5vbi4gVmVzdGlidWx1bSBsYW9yZWV0IGFudGUgdml0YWUganVzdG8gZnJpbmdpbGxhLCBmYWNpbGlzaXMgcHVsdmluYXIgbnVuYyBkaWduaXNzaW0uIERvbmVjIHZlbmVuYXRpcyBuaXNsIGEgbmVxdWUgcHVsdmluYXIgdml2ZXJyYS4gUGhhc2VsbHVzIGFjIGFudGUgZXQgbmlzaSBwdWx2aW5hciBmcmluZ2lsbGEuIE51bmMgZGljdHVtIGV1aXNtb2QgaXBzdW0gc2l0IGFtZXQgZWxlbWVudHVtLlwiKycgJytcblxuXCJBZW5lYW4gZWxlaWZlbmQgbm9uIG5pc2kgbm9uIHZlbmVuYXRpcy4gU2VkIGFjIHR1cnBpcyBhdCBuaXNpIHNvZGFsZXMgaGVuZHJlcml0IHZpdGFlIHF1aXMgdmVsaXQuIE1hdXJpcyBlZ2V0IHRpbmNpZHVudCBlcm9zLCBuZWMgbW9sZXN0aWUgbnVsbGEuIFByb2luIGZhdWNpYnVzIGRpY3R1bSB2ZXN0aWJ1bHVtLiBTZWQgYSBuZXF1ZSBxdWFtLiBQZWxsZW50ZXNxdWUgYWxpcXVldCBsb2JvcnRpcyBqdXN0bywgdml0YWUgYWxpcXVhbSB2ZWxpdCBjb25ndWUgYS4gU3VzcGVuZGlzc2Ugdm9sdXRwYXQgZ3JhdmlkYSBhcmN1IHZlbCBldWlzbW9kLlwiKycgJytcblxuXCJWaXZhbXVzIGluIHVybmEgZXQgbGVjdHVzIHBvc3VlcmUgc3VzY2lwaXQuIEN1cmFiaXR1ciB1bHRyaWNpZXMgZXJhdCBkaWFtLCB2ZWwgdHJpc3RpcXVlIG5lcXVlIHRlbXB1cyBsdWN0dXMuIFNlZCB0ZW1wdXMgaWFjdWxpcyBtaSBpbiBzb2xsaWNpdHVkaW4uIE51bGxhbSB2ZXN0aWJ1bHVtIHF1YW0gbGVvLCBzZWQgaW1wZXJkaWV0IG5pc2kgY29uZ3VlIGF0LiBNYXVyaXMgdm9sdXRwYXQgYXJjdSBzZWQgdXJuYSBoZW5kcmVyaXQsIHNpdCBhbWV0IGNvbW1vZG8gYXJjdSBzY2VsZXJpc3F1ZS4gSW50ZWdlciBtb2xlc3RpZSBjdXJzdXMgbWkgaWQgb3JuYXJlLiBQaGFzZWxsdXMgdXQgbWFsZXN1YWRhIGFyY3UsIHNpdCBhbWV0IGRhcGlidXMgb2Rpby4gUGhhc2VsbHVzIGluIGNvbnZhbGxpcyBqdXN0by4gRXRpYW0gaGVuZHJlcml0IGNvbW1vZG8gbnVsbGEgYWMgdmVoaWN1bGEuIER1aXMgbG9yZW0gZXN0LCBzb2RhbGVzIGF0IHZlbmVuYXRpcyBuZWMsIGNvbW1vZG8gYWMgbmVxdWUuIEFsaXF1YW0gdGluY2lkdW50IGZhY2lsaXNpcyBudW5jLiBOdWxsYW0gcnV0cnVtIGJpYmVuZHVtIG9yY2ksIHNpdCBhbWV0IHNlbXBlciB0b3J0b3IgY29uc2VjdGV0dXIgYXQuXCIrJyAnK1xuXG5cIkRvbmVjIGluIHVybmEgbGFvcmVldCwgdWxsYW1jb3JwZXIgbGliZXJvIGVnZXQsIGNvbnZhbGxpcyBkb2xvci4gTnVsbGFtIHNvZGFsZXMgY29tbW9kbyBsZWN0dXMgbmVjIGRpY3R1bS4gU3VzcGVuZGlzc2UgZXQgZmFjaWxpc2lzIG5lcXVlLCBxdWlzIHVsbGFtY29ycGVyIGxpYmVyby4gTnVsbGFtIGluIHNhcGllbiBtYXR0aXMsIHZvbHV0cGF0IGFyY3UgZXUsIHZpdmVycmEgYXVndWUuIE51bGxhbSBkaWN0dW0gbG9yZW0gdXQgb3JjaSBlbGVpZmVuZCwgc2VtcGVyIGdyYXZpZGEgbmlzbCBjb25ndWUuIEFlbmVhbiB0ZW1wb3IgcnV0cnVtIGp1c3RvIHZpdGFlIGxhY2luaWEuIFV0IHN1c2NpcGl0IGlwc3VtIGEgbmlzaSB1bHRyaWNpZXMgbW9sbGlzLiBNYWVjZW5hcyBhYyBhdWN0b3IganVzdG8uIEZ1c2NlIHNpdCBhbWV0IGlwc3VtIHZvbHV0cGF0LCBoZW5kcmVyaXQgZG9sb3IgcG9ydHRpdG9yLCByaG9uY3VzIG5lcXVlLiBEb25lYyBxdWlzIGNvbmRpbWVudHVtIGVuaW0uIFByYWVzZW50IHZpdGFlIGxlY3R1cyBuZWMgZG9sb3IgdmVzdGlidWx1bSBtYXR0aXMuXCIrJyAnK1xuXG5cIkludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gRXRpYW0gcGhhcmV0cmEgdml2ZXJyYSBlcm9zIHF1aXMgZGlnbmlzc2ltLiBGdXNjZSB2ZWwgZHVpIG1hdXJpcy4gUGVsbGVudGVzcXVlIG1vbGxpcyBhbnRlIGFjIGZlcm1lbnR1bSBwZWxsZW50ZXNxdWUuIFByb2luIHVsdHJpY2VzLCBudWxsYSB1dCB2ZW5lbmF0aXMgZGFwaWJ1cywgbWkgdmVsaXQgY29tbW9kbyBwdXJ1cywgaW4gaW1wZXJkaWV0IG9kaW8gbWF1cmlzIG5lYyBmZWxpcy4gUHJhZXNlbnQgc2NlbGVyaXNxdWUgZXJvcyBpZCBzb2xsaWNpdHVkaW4gbGFvcmVldC4gUHJhZXNlbnQgdWx0cmljaWVzLCBwdXJ1cyBzaXQgYW1ldCBiaWJlbmR1bSBpbXBlcmRpZXQsIGxpZ3VsYSBhcmN1IGltcGVyZGlldCBqdXN0bywgYSB1bGxhbWNvcnBlciB0dXJwaXMgbGVjdHVzIHNlZCBkb2xvci4gTWFlY2VuYXMgbmVjIHRlbXB1cyBtYXVyaXMsIHF1aXMgYWNjdW1zYW4gbmliaC5cIisnICcrXG5cblwiVmVzdGlidWx1bSBlbGVpZmVuZCBibGFuZGl0IGxvYm9ydGlzLiBTZWQgaW50ZXJkdW0gc2VtcGVyIHNhcGllbiwgZXQgbGFjaW5pYSBkdWkgc3VzY2lwaXQgc2l0IGFtZXQuIEludGVnZXIgZWxlbWVudHVtIGZlbGlzIHV0IGRpYW0gdGVtcHVzLCBhYyBmYWNpbGlzaXMgZXJvcyBwb3N1ZXJlLiBOdWxsYW0gcGxhY2VyYXQgdHJpc3RpcXVlIG1ldHVzLCBlZ2V0IHZlbmVuYXRpcyBhdWd1ZSBtb2xlc3RpZSBlZ2V0LiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gVXQgZWdlc3RhcyBtYXVyaXMgbmVjIGxhY3VzIHZlaGljdWxhLCBwdWx2aW5hciBmcmluZ2lsbGEgbGVjdHVzIHRlbXBvci4gU2VkIHV0IGFudGUgYXJjdS5cIisnICcrXG5cblwiVXQgY29udmFsbGlzIGNvbW1vZG8gaXBzdW0gcXVpcyB0ZW1wdXMuIFNlZCBwaGFyZXRyYSB2ZWxpdCBlZ2V0IHNvbGxpY2l0dWRpbiBwcmV0aXVtLiBGdXNjZSBtb2xlc3RpZSBhdCBwdXJ1cyBhIHNjZWxlcmlzcXVlLiBOdWxsYSBmYWNpbGlzaS4gTW9yYmkgZmVsaXMgbmVxdWUsIGdyYXZpZGEgc2VkIGNvbmd1ZSBzZWQsIGRhcGlidXMgdmVsIGF1Z3VlLiBWaXZhbXVzIHZpdmVycmEgY29uZGltZW50dW0gbHVjdHVzLiBVdCBhdCB0ZWxsdXMgbmVjIGF1Z3VlIGNvbnZhbGxpcyBjb25ndWUuIE1hZWNlbmFzIHBsYWNlcmF0IHVsdHJpY2VzIGxvcmVtLCBub24gY29udmFsbGlzIG5pYmggbWFsZXN1YWRhIHZlbC4gUHJhZXNlbnQgbm9uIGhlbmRyZXJpdCB2ZWxpdCwgc2l0IGFtZXQgcnV0cnVtIG1hc3NhLiBDdXJhYml0dXIgcXVpcyBlbGVtZW50dW0gZXN0LiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuIER1aXMgcHVsdmluYXIgdGVsbHVzIGEgY29uc2VxdWF0IGF1Y3Rvci4gU2VkIGlhY3VsaXMgc2VkIGxpZ3VsYSBxdWlzIGhlbmRyZXJpdC4gRnVzY2UgY29uc2VxdWF0IGZhY2lsaXNpcyBlcm9zLCBpbiB0ZW1wdXMgdGVsbHVzIHZlaGljdWxhIGV1LlwiKycgJytcblxuXCJEdWlzIGNvbmRpbWVudHVtIGF0IG1hdXJpcyBxdWlzIGludGVyZHVtLiBQaGFzZWxsdXMgaW1wZXJkaWV0IHNvZGFsZXMgbWFzc2EsIHF1aXMgbG9ib3J0aXMgc2VtIGJsYW5kaXQgbmVjLiBBbGlxdWFtIG5lYyBzYXBpZW4gbWF1cmlzLiBBbGlxdWFtIGdyYXZpZGEgY3Vyc3VzIGRvbG9yIHZpdGFlIGludGVyZHVtLiBDcmFzIGF0IHVsdHJpY2VzIG1pLCB1dCBsYWNpbmlhIHB1cnVzLiBNb3JiaSBncmF2aWRhIHNhcGllbiBpbiBsZWN0dXMgcnV0cnVtIHZlaGljdWxhLiBTZWQgdm9sdXRwYXQgY29uZGltZW50dW0gbGlndWxhLiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuIFBoYXNlbGx1cyBhbGlxdWV0IHZlbGl0IGZlbGlzLCBub24gZmF1Y2lidXMgbnVuYyBoZW5kcmVyaXQgbm9uLiBGdXNjZSBzZW1wZXIgdXJuYSBpZCBuaWJoIG1vbGxpcywgc2l0IGFtZXQgdml2ZXJyYSBuaWJoIGRpY3R1bS4gU2VkIGRpZ25pc3NpbSB2ZWwgbG9yZW0gdmVsIGNvbnNlcXVhdC4gU3VzcGVuZGlzc2UgY29udmFsbGlzIG5pYmggdG9ydG9yLCBhIHN1c2NpcGl0IG1ldHVzIHRpbmNpZHVudCBhLlwiKycgJytcblxuXCJWaXZhbXVzIGludGVyZHVtIHNlZCBkaWFtIHZpdGFlIGV1aXNtb2QuIFNlZCBkaWduaXNzaW0gYSBtYXVyaXMgbm9uIGN1cnN1cy4gUXVpc3F1ZSB2ZXN0aWJ1bHVtLCBudW5jIGV1IHByZXRpdW0gZnJpbmdpbGxhLCBsYWN1cyBhbnRlIGZldWdpYXQgbmliaCwgZXUgZGljdHVtIHNhcGllbiB2ZWxpdCBpbiBkdWkuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEN1cmFiaXR1ciBxdWlzIHNlbSBtYXNzYS4gU3VzcGVuZGlzc2UgdmVsIGJpYmVuZHVtIG1hc3NhLCBhIG1hdHRpcyBkdWkuIFByYWVzZW50IG1hc3NhIGVyb3MsIHByZXRpdW0gcXVpcyB2ZWhpY3VsYSBxdWlzLCBibGFuZGl0IHNpdCBhbWV0IGxpYmVyby4gRXRpYW0gc2VkIGRvbG9yIG1pLiBQZWxsZW50ZXNxdWUgZnJpbmdpbGxhIHRlbXB1cyBudWxsYSwgYXQgaGVuZHJlcml0IG1hZ25hIHZpdmVycmEgdXQuIFByYWVzZW50IGRhcGlidXMgdGVtcG9yIG9yY2ksIHV0IHZlaGljdWxhIGp1c3RvIGx1Y3R1cyBzaXQgYW1ldC4gRnVzY2UgbWF0dGlzIGZlbGlzIHR1cnBpcywgYXQgcnV0cnVtIGVyb3MgY3Vyc3VzIGV0LlwiKycgJytcblxuXCJTdXNwZW5kaXNzZSBzZWQgc2VtcGVyIGxhY3VzLiBBZW5lYW4gbG9ib3J0aXMgcGVsbGVudGVzcXVlIG1hdHRpcy4gRnVzY2UgbHVjdHVzIHNhZ2l0dGlzIGxlbywgYWMgY29tbW9kbyBtYWduYSBwaGFyZXRyYSB1dC4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIERvbmVjIGluIG9ybmFyZSBzZW0sIHJ1dHJ1bSB1bGxhbWNvcnBlciBtYWduYS4gTnVsbGEgbnVsbGEgbmliaCwgdWxsYW1jb3JwZXIgaW4gbGFjdXMgYSwgc29kYWxlcyBncmF2aWRhIGxpYmVyby4gSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLiBWZXN0aWJ1bHVtIGFjY3Vtc2FuIGlhY3VsaXMgZXJvcyBpbiBhbGlxdWFtLiBQcmFlc2VudCBsaWd1bGEgcmlzdXMsIGZhY2lsaXNpcyBzZWQgcGhhcmV0cmEgaWFjdWxpcywgbG9ib3J0aXMgYXQgbWkuIEN1cmFiaXR1ciBvcm5hcmUgZWdlc3RhcyBlc3QsIGV1IHVsdHJpY2llcyByaXN1cy4gQ3JhcyBvcm5hcmUgdm9sdXRwYXQgcmlzdXMgZXVpc21vZCB0cmlzdGlxdWUuIE1hdXJpcyBjb25kaW1lbnR1bSBlZ2V0IG51bGxhIHZpdGFlIHZvbHV0cGF0LiBDdXJhYml0dXIgdmVsIHB1cnVzIGFjIGVyYXQgY29tbW9kbyB2aXZlcnJhLlwiXG5cbiAgICAgIClcbiAgICApO1xuICB9XG5cbn0pO1xuXG5leHBvcnRzLkRhc2hib2FyZCA9IERhc2hib2FyZDtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb21wb25lbnRzL2Rhc2hib2FyZC5qc3hcIixcIi9jb21wb25lbnRzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqIEBqc3ggUmVhY3QuRE9NICovXG5cblxudmFyIENPTkZJRyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xudmFyIFVUSUwgPSByZXF1aXJlKFwiLi4vdXRpbFwiKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG5cbnZhciBEYXNoYm9hcmQgPSByZXF1aXJlKCcuL2Rhc2hib2FyZCcpLkRhc2hib2FyZDtcbnZhciBMb2dpbiA9IHJlcXVpcmUoXCIuL2xvZ2luXCIpLkxvZ2luO1xudmFyIE15QWNjb3VudCA9IHJlcXVpcmUoXCIuL215LWFjY291bnRcIikuTXlBY2NvdW50O1xudmFyIEVkaXRBY2NvdW50ID0gcmVxdWlyZShcIi4vbXktYWNjb3VudFwiKS5FZGl0QWNjb3VudDtcbnZhciBXZWJzaXRlcyA9IHJlcXVpcmUoXCIuL3dlYnNpdGVcIikuV2Vic2l0ZXM7XG52YXIgQWRkV2Vic2l0ZSA9IHJlcXVpcmUoXCIuL3dlYnNpdGVcIikuQWRkV2Vic2l0ZTtcbnZhciBFZGl0V2Vic2l0ZSA9IHJlcXVpcmUoXCIuL3dlYnNpdGVcIikuRWRpdFdlYnNpdGU7XG5cblxuXG52YXIgTGF5b3V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnTGF5b3V0JyxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblxuICAgIC8vIHNldCB0aGUgcHVzaFN0YXRlIHRvIGJsYW5rIGlmIHRoZSB1c2VyIGFycml2ZXMgdG8gdGhlIGRhc2hib2FyZCwgZWl0aGVyIGJ5IGdvaW5nIHRvIHRoZSByb290IG9yIGVudGVyaW5nIGFuIGludmFsaWQgcm91dGVcbiAgICB2YXIgcG9zID0gQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcblxuICAgICAgICAvLyBMb29rIHVwIHRoZSBjdXJyZW50IHJvdXRlIGFnYWluc3QgQ09ORklHLlJPVVRFUyBzbyB0aGF0IHdlIGNhbiBwb3B1bGF0ZSBMYXlvdXQgd2l0aCB0aGUgcHJldHR5IHBhdGggbmFtZS5cbiAgICAvLyBJZiB0aGUgY3VycmVudCBwYXRoIGlzbid0IGRlZmluZWQgaW4gQ09ORklHLlJPVVRFUywgc2VuZCB0byB0aGUgRGFzaGJvYXJkXG4gICAgdmFyIHBhdGggPSBfLmZpbmQoQ09ORklHLlJPVVRFUywgeyAndXJsJzogcG9zIH0pO1xuXG5cbiAgICAvLyBJZiBubyBwYXRoLCB0aGVuIHVzZSB0aGUgZmlyc3Qgcm91dGUuXG4gICAgaWYoXy5pc0VtcHR5KHBvcykpIHtcbiAgICAgIHBhdGggPSBfLmZpcnN0KENPTkZJRy5ST1VURVMpO1xuICAgIH1cblxuICAgIC8vIEN1cnJlbnQgcGF0aCBpc24ndCBmb3VuZC4gQ2hlY2sgaWYgaXQncyBhIHJvdXRlIHdpdGggcGFyYW1ldGVyc1xuICAgIGlmKF8uaXNFbXB0eShwYXRoKSkge1xuXG4gICAgICBwYXRoID0gXy5sYXN0KF8uZmlsdGVyKENPTkZJRy5ST1VURVMsIGZ1bmN0aW9uKHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBfLmNvbnRhaW5zKHBvcywgcm91dGUudXJsKSAmJiByb3V0ZS5hbGxvd19wYXJhbWV0ZXJzO1xuICAgICAgfSkpO1xuXG4gICAgfVxuXG5cbiAgICBpZihfLmhhcyhwYXRoLCBcIm5hbWVcIikpIHtcbiAgICAgIHBhdGggPSBwYXRoLm5hbWVcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aCA9IFwiRGFzaGJvYXJkXCJcbiAgICB9XG5cblxuXG4gICAgaWYocGF0aCA9PT0gXCJEYXNoYm9hcmRcIikge1xuICAgICAgcm91dGVyLm5hdmlnYXRlKFwiXCIpO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC50aXRsZSA9IHBhdGggKyBcIiB8IFwiICsgQ09ORklHLldFQlNJVEVfTkFNRTtcblxuICAgIHJldHVybiB7cGF0aDogcGF0aCwgdXNlcjogdW5kZWZpbmVkLCByZW5kZXI6IGZhbHNlLCBhY3RpdmVfd2Vic2l0ZTogdW5kZWZpbmVkLCB3ZWJzaXRlczogdW5kZWZpbmVkLCBhbGVydDogeydtZXNzYWdlJyA6IG51bGwsICd0eXBlJyA6IG51bGx9fTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbigpIHtcblxuLy8gc2V0IHRoZSBwdXNoU3RhdGUgdG8gYmxhbmsgaWYgdGhlIHVzZXIgYXJyaXZlcyB0byB0aGUgZGFzaGJvYXJkLCBlaXRoZXIgYnkgZ29pbmcgdG8gdGhlIHJvb3Qgb3IgZW50ZXJpbmcgYW4gaW52YWxpZCByb3V0ZVxuICAgIHZhciBwb3MgPSBCYWNrYm9uZS5oaXN0b3J5LmZyYWdtZW50O1xuXG4gICAgICAgIC8vIExvb2sgdXAgdGhlIGN1cnJlbnQgcm91dGUgYWdhaW5zdCBDT05GSUcuUk9VVEVTIHNvIHRoYXQgd2UgY2FuIHBvcHVsYXRlIExheW91dCB3aXRoIHRoZSBwcmV0dHkgcGF0aCBuYW1lLlxuICAgIC8vIElmIHRoZSBjdXJyZW50IHBhdGggaXNuJ3QgZGVmaW5lZCBpbiBDT05GSUcuUk9VVEVTLCBzZW5kIHRvIHRoZSBEYXNoYm9hcmRcbiAgICB2YXIgcGF0aCA9IF8uZmluZChDT05GSUcuUk9VVEVTLCB7ICd1cmwnOiBwb3MgfSk7XG5cblxuICAgIC8vIElmIG5vIHBhdGgsIHRoZW4gdXNlIHRoZSBmaXJzdCByb3V0ZS5cbiAgICBpZihfLmlzRW1wdHkocG9zKSkge1xuICAgICAgcGF0aCA9IF8uZmlyc3QoQ09ORklHLlJPVVRFUyk7XG4gICAgfVxuXG4gICAgLy8gQ3VycmVudCBwYXRoIGlzbid0IGZvdW5kLiBDaGVjayBpZiBpdCdzIGEgcm91dGUgd2l0aCBwYXJhbWV0ZXJzXG4gICAgaWYoXy5pc0VtcHR5KHBhdGgpKSB7XG5cbiAgICAgIHBhdGggPSBfLmxhc3QoXy5maWx0ZXIoQ09ORklHLlJPVVRFUywgZnVuY3Rpb24ocm91dGUpIHtcbiAgICAgICAgcmV0dXJuIF8uY29udGFpbnMocG9zLCByb3V0ZS51cmwpICYmIHJvdXRlLmFsbG93X3BhcmFtZXRlcnM7XG4gICAgICB9KSk7XG5cbiAgICB9XG5cblxuICAgIGlmKF8uaGFzKHBhdGgsIFwibmFtZVwiKSkge1xuICAgICAgcGF0aCA9IHBhdGgubmFtZVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXRoID0gXCJEYXNoYm9hcmRcIlxuICAgIH1cblxuXG5cbiAgICBpZihwYXRoID09PSBcIkRhc2hib2FyZFwiKSB7XG4gICAgICByb3V0ZXIubmF2aWdhdGUoXCJcIik7XG4gICAgfTtcblxuICAgIHRoaXMuc2V0UG9zKHBvcywgcGF0aClcbiAgICAvL3RoaXMuc2V0U3RhdGUoe3BhdGg6IHBhdGh9KVxuXG4gICAgXG5cbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG5cbiAgICBfLmdldFNlc3Npb24uY2FsbCh0aGlzKTtcblxuICB9LFxuXG4gIHNldFBvczogZnVuY3Rpb24odXJsLCBwb3MpIHtcblxuICAgIF8uZ2V0U2Vzc2lvbi5jYWxsKHRoaXMpO1xuXG4gICAgLy8gT25ib2FyZGluZyBzY3JlZW4gaWYgbm8gd2Vic2l0ZXMgZXhpc3RcblxuICAgICAgZG9jdW1lbnQudGl0bGUgPSBwb3MgKyBcIiB8IFwiICsgQ09ORklHLldFQlNJVEVfTkFNRTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3BhdGg6IHBvc30pO1xuXG4gICAgICByb3V0ZXIubmF2aWdhdGUodXJsKTtcbiAgICBcblxuICAgIHRoaXMuc2V0U3RhdGUoe2FsZXJ0OiB7J21lc3NhZ2UnIDogbnVsbCwgJ3R5cGUnIDogbnVsbH19KTtcblxuICB9LFxuXG4gIHNldFdlYnNpdGU6IGZ1bmN0aW9uKHdlYnNpdGUpIHtcblxuICAgIGNvbnNvbGUubG9nKHdlYnNpdGUpXG5cbiAgICAvLyBpZiB0aGlzIGlzIGNhbGxlZCB3aXRoIFwiZGVmYXVsdFwiIGFzIGFuIGFyZ3VtZW50LCB0aGVuIHNldCB0aGUgYWN0aXZlIHdlYnNpdGUgdG8gdGhlIGZpcnN0IG9uZSBpbiB0aGUgdXNlcidzIGxpc3RcbiAgICB2YXIgd2Vic2l0ZXMgPSB0aGlzLnN0YXRlLndlYnNpdGVzO1xuXG4gICAgaWYoXy5pc0VtcHR5KHdlYnNpdGVzKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZV93ZWJzaXRlOiBcImRlZmF1bHRcIn0pO1xuICAgIH07XG5cblxuICAgIHZhciBmaXJzdF93ZWJzaXRlID0gXy5maXJzdCh3ZWJzaXRlcykuaWQ7XG5cbiAgICBpZiggKCFfLmlzRW1wdHkod2Vic2l0ZXMpKSAmJiAod2Vic2l0ZSA9PT0gXCJkZWZhdWx0XCIpKSB7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZV93ZWJzaXRlOiBmaXJzdF93ZWJzaXRlfSk7XG5cbiAgICB9IGVsc2Uge1xuXG5cbiAgICAgIHZhciBjb29raWUgPSBKU09OLnBhcnNlKCQuY29va2llKFwiYXBwbGljYXRpb25cIikpO1xuXG4gICAgICBjb29raWUuYWN0aXZlX3dlYnNpdGUgPSB3ZWJzaXRlO1xuXG4gICAgICAkLmNvb2tpZShcImFwcGxpY2F0aW9uXCIsIEpTT04uc3RyaW5naWZ5KGNvb2tpZSksIHtwYXRoOiBcIi9cIiwgZXhwaXJlczogMTIwfSk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZV93ZWJzaXRlOiB3ZWJzaXRlfSk7XG5cbiAgICB9O1xuXG5cblxuICB9LFxuXG4gIHNldFVzZXI6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dXNlcjogc3RhdGV9KTtcblxuICAgIC8vIEtpbGwgY29va2llIGlmIHVzZXIgaXMgbG9nZ2luZyBvdXRcbiAgICBpZihzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAkLnJlbW92ZUNvb2tpZShcImFwcGxpY2F0aW9uXCIpO1xuICAgIH07XG5cbiAgfSxcblxuICBzZXRBbGVydDogZnVuY3Rpb24obWVzc2FnZSwgdHlwZSkge1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7YWxlcnQ6IHsnbWVzc2FnZScgOiBtZXNzYWdlLCAndHlwZScgOiB0eXBlfX0pO1xuXG4gIH0sXG5cbiAgc2V0V2Vic2l0ZXM6IGZ1bmN0aW9uKHdlYnNpdGVzKSB7XG5cbiAgICB0aGlzLnNldFN0YXRlKHt3ZWJzaXRlczogd2Vic2l0ZXN9KTtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBEZWZlciByZW5kZXJpbmcgd2hpbGUgY2hlY2tpbmcgaWYgY29va2llIGlzIHZhbGlkXG4gICAgaWYodGhpcy5zdGF0ZS5yZW5kZXIpIHtcblxuICAgICAgICAvLyBMb2dpbiB2aWV3IGlmIG5vdCBsb2dnZWQgaW5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS51c2VyID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICBSZWFjdC5ET00uZGl2KG51bGwsIFxuICAgICAgICAgICAgICAgICAgTG9naW4oIHtwYXRoOnRoaXMuc3RhdGUucGF0aCwgc2V0UG9zOnRoaXMuc2V0UG9zLCB1c2VyOnRoaXMuc3RhdGUudXNlciwgc2V0VXNlcjp0aGlzLnNldFVzZXIsIHNldFdlYnNpdGU6dGhpcy5zZXRXZWJzaXRlLCB3ZWJzaXRlczp0aGlzLnN0YXRlLndlYnNpdGVzLCBzZXRXZWJzaXRlczp0aGlzLnNldFdlYnNpdGVzLCBhbGVydDp0aGlzLnN0YXRlLmFsZXJ0LCBzZXRBbGVydDp0aGlzLnNldEFsZXJ0fSApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgLy8gVXNlciBpcyBsb2dnZWQgaW5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBSZWFjdC5ET00uZGl2KG51bGwsIFxuICAgICAgICAgICAgICAgIFRvcEJhcigge3BhdGg6dGhpcy5zdGF0ZS5wYXRoLCBzZXRQb3M6dGhpcy5zZXRQb3MsIHVzZXI6dGhpcy5zdGF0ZS51c2VyLCBzZXRVc2VyOnRoaXMuc2V0VXNlciwgYWN0aXZlX3dlYnNpdGU6dGhpcy5zdGF0ZS5hY3RpdmVfd2Vic2l0ZSwgc2V0V2Vic2l0ZTp0aGlzLnNldFdlYnNpdGUsIHdlYnNpdGVzOnRoaXMuc3RhdGUud2Vic2l0ZXMsIHNldFdlYnNpdGVzOnRoaXMuc2V0V2Vic2l0ZXMsIGFsZXJ0OnRoaXMuc3RhdGUuYWxlcnQsIHNldEFsZXJ0OnRoaXMuc2V0QWxlcnR9ICksXG4gICAgICAgICAgICAgICAgTGVmdE1lbnUoIHtyb3V0ZXM6dGhpcy5wcm9wcy5yb3V0ZXMsIHBhdGg6dGhpcy5zdGF0ZS5wYXRoLCBzZXRQb3M6dGhpcy5zZXRQb3MsIHVzZXI6dGhpcy5zdGF0ZS51c2VyLCBzZXRVc2VyOnRoaXMuc2V0VXNlciwgYWN0aXZlX3dlYnNpdGU6dGhpcy5zdGF0ZS5hY3RpdmVfd2Vic2l0ZSwgc2V0V2Vic2l0ZTp0aGlzLnNldFdlYnNpdGUsIHdlYnNpdGVzOnRoaXMuc3RhdGUud2Vic2l0ZXMsIHNldFdlYnNpdGVzOnRoaXMuc2V0V2Vic2l0ZXMsIGFsZXJ0OnRoaXMuc3RhdGUuYWxlcnQsIHNldEFsZXJ0OnRoaXMuc2V0QWxlcnR9ICksXG4gICAgICAgICAgICAgICAgQ29udGVudCgge3BhdGg6dGhpcy5zdGF0ZS5wYXRoLCBzZXRQb3M6dGhpcy5zZXRQb3MsIHVzZXI6dGhpcy5zdGF0ZS51c2VyLCBzZXRVc2VyOnRoaXMuc2V0VXNlciwgYWN0aXZlX3dlYnNpdGU6dGhpcy5zdGF0ZS5hY3RpdmVfd2Vic2l0ZSwgc2V0V2Vic2l0ZTp0aGlzLnNldFdlYnNpdGUsIHdlYnNpdGVzOnRoaXMuc3RhdGUud2Vic2l0ZXMsIHNldFdlYnNpdGVzOnRoaXMuc2V0V2Vic2l0ZXMsIGFsZXJ0OnRoaXMuc3RhdGUuYWxlcnQsIHNldEFsZXJ0OnRoaXMuc2V0QWxlcnR9IClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuXG4gICAgICB2YXIgbG9hZGluZ01zZ1N0eWxlID0ge1xuICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgdG9wOiBcIjMwJVwiXG4gICAgIH07XG5cbiAgICAgcmV0dXJuKFxuXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwicm93IHRleHQtY2VudGVyXCIsIHN0eWxlOmxvYWRpbmdNc2dTdHlsZX0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmgxKG51bGwsIFwiTG9hZGluZy4uLlwiKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuXG4gICB9XG4gfVxuXG59KTtcblxuXG52YXIgVG9wQmFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnVG9wQmFyJyxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG5cbiAgICAkKGRvY3VtZW50KS5mb3VuZGF0aW9uKCk7XG5cbiAgfSxcblxuICByb3V0ZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciB1cmwgPSAkKGV2ZW50LnRhcmdldCkuYXR0cignZGF0YS1uYXYnKTtcbiAgICB2YXIgcG9zID0gJChldmVudC50YXJnZXQpLnRleHQoKTtcblxuICAgIHRoaXMucHJvcHMuc2V0UG9zKHVybCwgcG9zKTtcbiAgfSxcblxuICBsb2dvdXQ6IGZ1bmN0aW9uKGUpIHtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByb3V0ZXIubmF2aWdhdGUoJycsIHt0cmlnZ2VyOiBmYWxzZSwgcmVwbGFjZTogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMuc2V0VXNlcih1bmRlZmluZWQpO1xuICAgIHRoaXMucHJvcHMuc2V0V2Vic2l0ZXModW5kZWZpbmVkKTtcbiAgICB0aGlzLnByb3BzLnNldFBvcyhcIlwiLCBcIkRhc2hib2FyZFwiKTtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuRE9NLmRpdigge2lkOlwidG9wQmFyXCIsIGNsYXNzTmFtZTpcInN0aWNreVwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00ubmF2KCB7Y2xhc3NOYW1lOlwidG9wLWJhclwiLCAnZGF0YS10b3BiYXInOnRydWUsICdkYXRhLW9wdGlvbnMnOlwiaXNfaG92ZXI6IGZhbHNlXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS51bCgge2NsYXNzTmFtZTpcInRpdGxlLWFyZWFcIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmxpKCB7Y2xhc3NOYW1lOlwibmFtZVwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00uaDEobnVsbCwgUmVhY3QuRE9NLmEoIHtocmVmOlwiI1wifSwgXCJXZWIgQXBwIE5hbWVcIikpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuRE9NLmxpKCB7Y2xhc3NOYW1lOlwidG9nZ2xlLXRvcGJhciBtZW51LWljb25cIn0sIFJlYWN0LkRPTS5hKCB7aHJlZjpcIiNcIn0sIFwiTWVudVwiKSlcbiAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS5zZWN0aW9uKCB7Y2xhc3NOYW1lOlwidG9wLWJhci1zZWN0aW9uXCJ9LCBcblxuICAgICAgICAgICAgUmVhY3QuRE9NLnVsKCB7Y2xhc3NOYW1lOlwicmlnaHRcIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmxpKCB7Y2xhc3NOYW1lOlwiYWN0aXZlIGhhcy1kcm9wZG93blwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00uYSgge2hyZWY6XCIjXCJ9LCBcIkxvZ2dlZCBpbiBhcyBcIiwgdGhpcy5wcm9wcy51c2VyLmZ1bGxOYW1lKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS51bCgge2NsYXNzTmFtZTpcImRyb3Bkb3duXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5saShudWxsLCBSZWFjdC5ET00uYSggeydkYXRhLW5hdic6XCJhY2NvdW50XCIsIG9uQ2xpY2s6dGhpcy5yb3V0ZX0sIFwiTXkgQWNjb3VudFwiKSksXG4gICAgICAgICAgICBSZWFjdC5ET00ubGkobnVsbCwgUmVhY3QuRE9NLmEoIHtvbkNsaWNrOnRoaXMubG9nb3V0fSwgXCJMb2dvdXRcIikpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuRE9NLmxpKCB7Y2xhc3NOYW1lOlwiaGFzLWRyb3Bkb3duXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5hKCB7aHJlZjpcIiNcIn0sIFwiSGVscFwiKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS51bCgge2NsYXNzTmFtZTpcImRyb3Bkb3duXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5saShudWxsLCBSZWFjdC5ET00uYSgge2hyZWY6XCIjXCJ9LCBcIkdldHRpbmcgU3RhcnRlZCBHdWlkZVwiKSksXG4gICAgICAgICAgICBSZWFjdC5ET00ubGkobnVsbCwgUmVhY3QuRE9NLmEoIHtocmVmOlwiI1wifSwgXCJBUEkgRG9jdW1lbnRhdGlvblwiKSksXG4gICAgICAgICAgICBSZWFjdC5ET00ubGkobnVsbCwgUmVhY3QuRE9NLmEoIHtocmVmOlwiI1wifSwgXCJDb250YWN0IFVzXCIpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApO1xufVxuXG59KTtcblxuXG52YXIgTGVmdE1lbnUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdMZWZ0TWVudScsXG5cbiAgcm91dGU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdXJsID0gJChldmVudC50YXJnZXQpLmF0dHIoJ2RhdGEtbmF2Jyk7XG4gICAgdmFyIHBvcyA9ICQoZXZlbnQudGFyZ2V0KS50ZXh0KCk7XG5cbiAgICB0aGlzLnByb3BzLnNldFBvcyh1cmwsIHBvcyk7XG5cbiAgICAvLyBUTyBSRVZJRVc6IHNldCB0aGUgd2Vic2l0ZSBjb250ZXh0IGJhY2sgdG8gZGVmYXVsdCB3aGVuIGEgbWVudSBsaW5rIGlzIGNsaWNrZWRcbiAgICAvL3RoaXMucHJvcHMuc2V0V2Vic2l0ZShcImRlZmF1bHRcIik7XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIFxuICAgIHZhciBsaW5rcyA9IF8ubWFwKF8uZmlsdGVyKHRoaXMucHJvcHMucm91dGVzLCBcInNob3dfaW5fbWVudVwiKSwgZnVuY3Rpb24obGluaywga2V5KSB7XG5cbiAgICAgIHZhciBjbGFzc1N0cmluZyA9IFwiXCI7XG4gICAgICBpZigoc2VsZi5wcm9wcy5wYXRoPT09bGluay5uYW1lKSB8fCAoXy5jb250YWlucyhsaW5rLnN1YnJvdXRlcyxzZWxmLnByb3BzLnBhdGgpKSl7Y2xhc3NTdHJpbmcgPSBcImFjdGl2ZVwifTtcblxuICAgICAgcmV0dXJuIFJlYWN0LkRPTS5saSgge2tleTprZXl9LCBSZWFjdC5ET00uYSgge2hyZWY6bGluay51cmwsIG9uQ2xpY2s6c2VsZi5yb3V0ZSwgJ2RhdGEtbmF2JzpsaW5rLnVybCwgY2xhc3NOYW1lOmNsYXNzU3RyaW5nfSwgbGluay5uYW1lKSlcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7aWQ6XCJsZWZ0TWVudVwiLCBjbGFzc05hbWU6XCJzbWFsbC00IGxhcmdlLTIgY29sdW1uc1wifSwgXG4gICAgICAgICAgICBXZWJzaXRlU2VsZWN0b3IoIHthY3RpdmVfd2Vic2l0ZTp0aGlzLnByb3BzLmFjdGl2ZV93ZWJzaXRlLCBzZXRXZWJzaXRlOnRoaXMucHJvcHMuc2V0V2Vic2l0ZSwgc2V0UG9zOnRoaXMucHJvcHMuc2V0UG9zLCB3ZWJzaXRlczp0aGlzLnByb3BzLndlYnNpdGVzLCBzZXRXZWJzaXRlczp0aGlzLnByb3BzLnNldFdlYnNpdGVzLCBhbGVydDp0aGlzLnByb3BzLmFsZXJ0LCBzZXRBbGVydDp0aGlzLnByb3BzLnNldEFsZXJ0fSApLFxuICAgICAgICAgICAgUmVhY3QuRE9NLnVsKCB7Y2xhc3NOYW1lOlwic2lkZS1uYXZcIn0sIGxpbmtzKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgfVxuXG59KTtcblxuXG52YXIgV2Vic2l0ZVNlbGVjdG9yID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnV2Vic2l0ZVNlbGVjdG9yJyxcblxuICB3ZWJzaXRlU2VsZWN0ZWQ6IGZ1bmN0aW9uKGUpIHtcblxuICAgIHZhciB3ZWJzaXRlcyA9IHRoaXMucHJvcHMud2Vic2l0ZXM7XG5cbiAgICBpZihwYXJzZUludChlLnRhcmdldC52YWx1ZSkgPT09IDApIHtcblxuICAgICAgdGhpcy5wcm9wcy5zZXRXZWJzaXRlKHVuZGVmaW5lZCk7XG5cbiAgICAgIC8vIHRvZG86IHJldmlld1xuICAgICAgdGhpcy5wcm9wcy5zZXRQb3MoXCJ3ZWJzaXRlcy9hZGRcIiwgXCJBZGQgV2Vic2l0ZVwiKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHZhciB3ZWJzaXRlID0gXy5maXJzdChfLmZpbHRlcih3ZWJzaXRlcywgeyAnaWQnOiBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgfSkpLmlkO1xuXG4gICAgICB0aGlzLnByb3BzLnNldFdlYnNpdGUod2Vic2l0ZSk7XG5cbiAgICAgIHRoaXMucHJvcHMuc2V0UG9zKFwiXCIsIFwiRGFzaGJvYXJkXCIpO1xuXG4gICAgfVxuXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgdmFsdWUgPSAwO1xuICAgIC8vIFNlbGVjdCBkZWZhdWx0IG9wdGlvbiB3aGVyZSB2YWx1ZSA9IDAgaWYgd2Vic2l0ZSBpc24ndCBkZWZpbmVkXG4gICAgaWYodGhpcy5wcm9wcy5hY3RpdmVfd2Vic2l0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucHJvcHMuYWN0aXZlX3dlYnNpdGU7XG4gICAgfTtcblxuICAgIGlmKCQuY29va2llKFwiYXBwbGljYXRpb25cIikpIHtcbiAgICAgIHZhciB3ZWJzaXRlcyA9IHRoaXMucHJvcHMud2Vic2l0ZXM7XG5cblxuICAgICAgdmFyIGxpbmtzID0gXy5tYXAod2Vic2l0ZXMsIGZ1bmN0aW9uKHNpdGUsIGtleSkge1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5ET00ub3B0aW9uKCB7a2V5OnNpdGUuaWQsIHZhbHVlOnNpdGUuaWR9LCBzaXRlLm5hbWUpXG5cbiAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYobnVsbCwgXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS5zZWxlY3QoIHtpZDpcIndlYnNpdGVTZWxlY3RvclwiLCBvbkNoYW5nZTp0aGlzLndlYnNpdGVTZWxlY3RlZCwgdmFsdWU6dmFsdWV9LCBcblxuICAgICAgICAgICAgUmVhY3QuRE9NLm9wdGlvbigge2tleTpcIjBcIiwgdmFsdWU6XCIwXCJ9LCBcIkFkZCBOZXcgV2Vic2l0ZVwiKSxcbiAgICAgICAgICAgIGxpbmtzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcblxuICB9XG5cbn0pO1xuXG52YXIgQ29udGVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ0NvbnRlbnQnLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cblxuICAgIHZhciBzZWN0aW9uID0gbnVsbDtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBzY3JvbGwgdG8gdG9wXG4gICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgwKTtcblxuICAgIC8vIFRoZSBjb2RlIGJlbG93IGNoZWNrcyBpZiB0aGVyZSBpcyBhIFJlYWN0IGNvbXBvbmVudCB0aGF0IG1hdGNoZXMgdGhlIGN1cnJlbnQgcGF0aCdzIG5hbWUuXG4gICAgLy8gSWYgdGhlcmUgaXMsIHRoZW4gcmVuZGVyIGl0LCBvdGhlcndpc2UganVzdCByZW5kZXIgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnQgcGF0aC5cbiAgICBpZiAoIGV2YWwoXCJ0eXBlb2YgXCIgKyB0aGlzLnByb3BzLnBhdGgucmVwbGFjZShcIiBcIixcIlwiKSArIFwiID09PSAnZnVuY3Rpb24nXCIpICl7IFxuXG4gICAgICB2YXIgZWxlbWVudCA9IGV2YWwodGhpcy5wcm9wcy5wYXRoLnJlcGxhY2UoXCIgXCIsXCJcIikpO1xuXG4gICAgICBzZWN0aW9uID0gZWxlbWVudCgge3BhdGg6dGhpcy5wcm9wcy5wYXRoLCBzZXRQb3M6dGhpcy5wcm9wcy5zZXRQb3MsIHVzZXI6dGhpcy5wcm9wcy51c2VyLCBzZXRVc2VyOnRoaXMucHJvcHMuc2V0VXNlciwgc2V0V2Vic2l0ZTp0aGlzLnByb3BzLnNldFdlYnNpdGUsIGFjdGl2ZV93ZWJzaXRlOnRoaXMucHJvcHMuYWN0aXZlX3dlYnNpdGUsIHdlYnNpdGVzOnRoaXMucHJvcHMud2Vic2l0ZXMsIHNldFdlYnNpdGVzOnRoaXMucHJvcHMuc2V0V2Vic2l0ZXMsIGFsZXJ0OnRoaXMucHJvcHMuYWxlcnQsIHNldEFsZXJ0OnRoaXMucHJvcHMuc2V0QWxlcnR9IClcblxuICAgIH0gZWxzZSB7XG4gICAgICBzZWN0aW9uID0gKFxuICAgICAgICAgICAgICAgICBSZWFjdC5ET00ucChudWxsLCB0aGlzLnByb3BzLnBhdGgpXG4gICAgICAgICAgICAgICAgIClcbiAgICB9XG5cblxuICAgIHZhciBhbGVydHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgaWYoIV8uaXNFbXB0eShzZWxmLnByb3BzLmFsZXJ0Lm1lc3NhZ2UpKSB7XG4gICAgICAgIHZhciBjbGFzc1N0cmluZyA9IFwiYWxlcnQtYm94IFwiICsgc2VsZi5wcm9wcy5hbGVydC50eXBlXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7J2RhdGEtYWxlcnQnOnRydWUsIGNsYXNzTmFtZTpjbGFzc1N0cmluZ30sIFxuICAgICAgICAgICAgICAgIHNlbGYucHJvcHMuYWxlcnQubWVzc2FnZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYoIHtpZDpcImNvbnRlbnRcIiwgY2xhc3NOYW1lOlwic21hbGwtOCBsYXJnZS0xMCBjb2x1bW5zXCJ9LCBcblxuICAgICAgICAgICAgYWxlcnRzKCksXG5cbiAgICAgICAgICAgIHNlY3Rpb25cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcblxuICB9XG5cbn0pO1xuXG5cbmV4cG9ydHMuTGF5b3V0ID0gTGF5b3V0O1xuZXhwb3J0cy5Mb2dpbiA9IExvZ2luO1xuZXhwb3J0cy5Ub3BCYXIgPSBUb3BCYXI7XG5leHBvcnRzLkxlZnRNZW51ID0gTGVmdE1lbnU7XG5leHBvcnRzLldlYnNpdGVTZWxlY3RvciA9IFdlYnNpdGVTZWxlY3RvcjtcbmV4cG9ydHMuQ29udGVudCA9IENvbnRlbnQ7XG5leHBvcnRzLlJvdXRlciA9IFJvdXRlcjtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb21wb25lbnRzL2xheW91dC5qc3hcIixcIi9jb21wb25lbnRzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqIEBqc3ggUmVhY3QuRE9NICovXG5cbnZhciBDT05GSUcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxudmFyIExvZ2luID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnTG9naW4nLFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cbiAgICBkb2N1bWVudC50aXRsZSA9IFwiTG9naW4gfCBcIiArIENPTkZJRy5XRUJTSVRFX05BTUU7XG5cbiAgICByZXR1cm4ge2xvZ2luX2VtYWlsX2Vycm9yOiB1bmRlZmluZWQsIGxvZ2luX3Bhc3N3b3JkX2Vycm9yOiB1bmRlZmluZWQsIGxvZ2luX3NlcnZlcl9lcnJvcjogdW5kZWZpbmVkLCByZWdpc3Rlcl9maXJzdF9uYW1lX2Vycm9yOiB1bmRlZmluZWQsIHJlZ2lzdGVyX2xhc3RfbmFtZV9lcnJvcjogdW5kZWZpbmVkLCByZWdpc3Rlcl9lbWFpbF9lcnJvcjogdW5kZWZpbmVkLCByZWdpc3Rlcl9wYXNzd29yZF9lcnJvcjogdW5kZWZpbmVkLCByZWdpc3Rlcl9zZXJ2ZXJfZXJyb3I6IHVuZGVmaW5lZH07XG5cbiAgfSxcblxuICByZWdpc3RlcjogZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyX3NlcnZlcl9lcnJvcjogdW5kZWZpbmVkfSk7XG5cbiAgICB2YXIgZmlyc3RfbmFtZSA9ICQoXCIjcmVnaXN0ZXJfZmlyc3RfbmFtZVwiKS52YWwoKTtcbiAgICB2YXIgbGFzdF9uYW1lID0gJChcIiNyZWdpc3Rlcl9sYXN0X25hbWVcIikudmFsKCk7XG4gICAgdmFyIGVtYWlsID0gJChcIiNyZWdpc3Rlcl9lbWFpbFwiKS52YWwoKTtcbiAgICB2YXIgcGFzc3dvcmQgPSAkKFwiI3JlZ2lzdGVyX3Bhc3N3b3JkXCIpLnZhbCgpO1xuXG4gICAgLy8gVmFsaWRhdGUgZmllbGRzXG4gICAgaWYoXy5pc0VtcHR5KGZpcnN0X25hbWUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3Rlcl9maXJzdF9uYW1lX2Vycm9yOiBcIkZpcnN0IE5hbWUgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IFxuXG4gICAgaWYoXy5pc0VtcHR5KGxhc3RfbmFtZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyX2xhc3RfbmFtZV9lcnJvcjogXCJMYXN0IE5hbWUgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IFxuXG4gICAgaWYoXy5pc0VtcHR5KGVtYWlsKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXJfZW1haWxfZXJyb3I6IFwiRW1haWwgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2UgaWYoZW1haWwuaW5kZXhPZihcIkBcIikgPT09IC0xKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3Rlcl9lbWFpbF9lcnJvcjogXCJQbGVhc2UgaW5wdXQgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXJfZW1haWxfZXJyb3I6IHVuZGVmaW5lZH0pO1xuICAgIH1cbiAgICBcbiAgICBpZihfLmlzRW1wdHkocGFzc3dvcmQpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3Rlcl9wYXNzd29yZF9lcnJvcjogXCJQYXNzd29yZCBjYW5ub3QgYmUgYmxhbmtcIn0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3Rlcl9wYXNzd29yZF9lcnJvcjogdW5kZWZpbmVkfSk7XG4gICAgfVxuXG4gICAgLy8gZmllbGRzIGFyZSBwb3B1bGF0ZWRcbiAgICBpZighXy5zb21lKFt0aGlzLl9wZW5kaW5nU3RhdGUubG9naW5fZmlyc3RfbmFtZV9lcnJvciwgdGhpcy5fcGVuZGluZ1N0YXRlLmxvZ2luX2xhc3RfbmFtZV9lcnJvciwgdGhpcy5fcGVuZGluZ1N0YXRlLmxvZ2luX2VtYWlsX2Vycm9yLCB0aGlzLl9wZW5kaW5nU3RhdGUubG9naW5fcGFzc3dvcmRfZXJyb3JdKSkge1xuXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgcmVnaXN0ZXIgPSB7fTtcblxuICAgICAgcmVnaXN0ZXIuZmlyc3RfbmFtZSA9IGZpcnN0X25hbWU7XG4gICAgICByZWdpc3Rlci5sYXN0X25hbWUgPSBsYXN0X25hbWU7XG4gICAgICByZWdpc3Rlci5lbWFpbCA9IGVtYWlsO1xuICAgICAgcmVnaXN0ZXIucGFzc3dvcmQgPSBwYXNzd29yZDtcblxuICAgICAgc3VwZXJhZ2VudFxuICAgICAgLnBvc3QoQ09ORklHLlVSTFMucmVnaXN0ZXIpXG4gICAgICAucXVlcnkocmVnaXN0ZXIpXG4gICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgICAuZW5kKGZ1bmN0aW9uKGVycm9yLCByZXMpe1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50ZXh0KTtcblxuICAgICAgICBpZihyZXMub2sgPT09IHRydWUpIHtcblxuXG4gICAgICAgIH0gZWxzZSB7XG5cblxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG5cbiAgICB9XG5cblxuXG4gIH0sXG5cblxuICBsb2dpbjogZnVuY3Rpb24oZSkge1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9naW5fc2VydmVyX2Vycm9yOiB1bmRlZmluZWR9KTtcblxuICAgIHZhciBlbWFpbCA9ICQoXCIjbG9naW5fZW1haWxcIikudmFsKCk7XG4gICAgdmFyIHBhc3N3b3JkID0gJChcIiNsb2dpbl9wYXNzd29yZFwiKS52YWwoKTtcblxuXG4gICAgLy8gVmFsaWRhdGUgLSBmaWVsZHMgbXVzdCBub3QgYmUgZW1wdHlcbiAgICBpZihfLmlzRW1wdHkoZW1haWwpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2dpbl9lbWFpbF9lcnJvcjogXCJFbWFpbCBjYW5ub3QgYmUgYmxhbmtcIn0pO1xuICAgIH0gZWxzZSBpZihlbWFpbC5pbmRleE9mKFwiQFwiKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvZ2luX2VtYWlsX2Vycm9yOiBcIlBsZWFzZSBpbnB1dCBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIn0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2dpbl9lbWFpbF9lcnJvcjogdW5kZWZpbmVkfSk7XG4gICAgfVxuICAgIC8vIGFsZXJ0KHRoaXMuX3BlbmRpbmdTdGF0ZS5sb2dpbl9lbWFpbF9lcnJvcilcbiAgICAvLyBhbGVydCh0aGlzLnN0YXRlLmxvZ2luX2VtYWlsX2Vycm9yKVxuICAgIFxuICAgIGlmKF8uaXNFbXB0eShwYXNzd29yZCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvZ2luX3Bhc3N3b3JkX2Vycm9yOiBcIlBhc3N3b3JkIGNhbm5vdCBiZSBibGFua1wifSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvZ2luX3Bhc3N3b3JkX2Vycm9yOiB1bmRlZmluZWR9KTtcbiAgICB9XG5cblxuICAgIC8vIGZpZWxkcyBhcmUgcG9wdWxhdGVkXG4gICAgaWYoIV8uc29tZShbdGhpcy5fcGVuZGluZ1N0YXRlLmxvZ2luX2VtYWlsX2Vycm9yLCB0aGlzLl9wZW5kaW5nU3RhdGUubG9naW5fcGFzc3dvcmRfZXJyb3JdKSkge1xuXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHN1cGVyYWdlbnRcbiAgICAgIC5wb3N0KENPTkZJRy5VUkxTLmxvZ2luKVxuICAgICAgLnNldCgnWC1BUEktRW1haWwnLCBlbWFpbClcbiAgICAgIC5zZXQoJ1gtQVBJLVBhc3N3b3JkJywgcGFzc3dvcmQpXG4gICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgICAuZW5kKGZ1bmN0aW9uKGVycm9yLCByZXMpe1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50ZXh0KTtcblxuICAgICAgICBpZihyZXMub2sgPT09IHRydWUpIHtcblxuICAgICAgICAgIHZhciBzZXNzaW9uSWQgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS5zZXNzaW9uSWRcbiAgICAgICAgICB2YXIgdXNlciA9IEpTT04ucGFyc2UocmVzLnRleHQpLnVzZXJcblxuXG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhzZXNzaW9uSWQpXG4gICAgICAgICAgY29uc29sZS5sb2codXNlcilcblxuICAgICAgICAgIHZhciB1c2VyX3dlYnNpdGVzID0gSlNPTi5wYXJzZShyZXMudGV4dCkud2Vic2l0ZXM7XG4gICAgICAgICAgY29uc29sZS5sb2codXNlcl93ZWJzaXRlcylcblxuICAgICAgICAgIGlmKCFfLmlzRW1wdHkodXNlcl93ZWJzaXRlcykpIHtcbiAgICAgICAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKF8uZmlyc3QodXNlcl93ZWJzaXRlcykpKSB7XG4gICAgICAgICAgICAgIGFjdGl2ZV93ZWJzaXRlID0gXy5maXJzdCh1c2VyX3dlYnNpdGVzKS5pZDtcblxuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZV93ZWJzaXRlKVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG5cblxuXG5cblxuXG5cbiAgICAgICAgICAvLyBzZXQgY29va2llXG4gICAgICAgICAgJC5jb29raWUoXCJhcHBsaWNhdGlvblwiLCBKU09OLnN0cmluZ2lmeSh7IFwic2Vzc2lvbklkXCI6IHNlc3Npb25JZCwgXCJ1c2VyXCI6IHVzZXIgfSksIHtwYXRoOiBcIi9cIiwgZXhwaXJlczogMTIwfSk7XG5cbiAgICAgICAgICBzZWxmLnByb3BzLnNldFVzZXIodXNlcik7XG5cbiAgICAgICAgICBzZWxmLnByb3BzLnNldFdlYnNpdGVzKHVzZXJfd2Vic2l0ZXMpO1xuXG4gICAgICAgICAgY29uc29sZS5sb2codXNlcilcblxuICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gc2VsZi5wcm9wcy5wYXRoICsgXCIgfCBcIiArIENPTkZJRy5XRUJTSVRFX05BTUU7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIC8vIFJldHVybiBlcnJvciBmcm9tIHNlcnZlclxuICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe2xvZ2luX3NlcnZlcl9lcnJvcjogSlNPTi5wYXJzZShyZXMudGV4dCkuZXJyb3J9KTtcblxuXG4gICAgICAgIH1cblxuICAgICAgfSk7XG5cbn1cblxufSxcblxucmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHZhciB2YWxpZGF0aW9uX2Vycm9yID0gZnVuY3Rpb24oZmllbGQpIHtcblxuICAgIGlmKGZpZWxkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBmaWVsZClcbiAgICAgICAgICAgICAgKVxuICAgIH1cblxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgICAgICAgUmVhY3QuRE9NLmRpdigge2lkOlwibG9naW5cIiwgY2xhc3NOYW1lOlwicm93XCJ9LCBcblxuICAgICAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJwYW5lbFwifSwgXG4gICAgICAgICAgUmVhY3QuRE9NLmgxKG51bGwsIFwiTG9naW4gdG8gXCIsIENPTkZJRy5XRUJTSVRFX05BTUUpLFxuICAgICAgICAgIFwiUGxlYXNlIGxvZ2luIHRvIGFjY2VzcyBcIiwgQ09ORklHLldFQlNJVEVfTkFNRSxcIi5cIixcbiAgICAgICAgICBSZWFjdC5ET00uaHIobnVsbCApLFxuICAgICAgICAgIHZhbGlkYXRpb25fZXJyb3IodGhpcy5zdGF0ZS5sb2dpbl9zZXJ2ZXJfZXJyb3IpLFxuICAgICAgICAgIFJlYWN0LkRPTS5mb3JtKG51bGwsIFxuICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIkVtYWlsXCIsXG4gICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJsb2dpbl9lbWFpbFwiLCB0eXBlOlwiZW1haWxcIiwgcGxhY2Vob2xkZXI6XCJFbWFpbFwifSApLFxuICAgICAgICAgIHZhbGlkYXRpb25fZXJyb3IodGhpcy5zdGF0ZS5sb2dpbl9lbWFpbF9lcnJvcilcblxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiUGFzc3dvcmRcIixcbiAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoIHtpZDpcImxvZ2luX3Bhc3N3b3JkXCIsIHR5cGU6XCJwYXNzd29yZFwiLCBwbGFjZWhvbGRlcjpcIlBhc3N3b3JkXCJ9ICksXG4gICAgICAgICAgdmFsaWRhdGlvbl9lcnJvcih0aGlzLnN0YXRlLmxvZ2luX3Bhc3N3b3JkX2Vycm9yKVxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuRE9NLmJ1dHRvbigge29uQ2xpY2s6dGhpcy5sb2dpbiwgY2xhc3NOYW1lOlwiYnV0dG9uIHJhZGl1cyBleHBhbmRcIn0sIFwiTG9naW5cIilcbiAgICAgICAgICApLFxuXG4gICAgICAgICAgUmVhY3QuRE9NLmhyKG51bGwgKSxcbiAgICAgICAgICBSZWFjdC5ET00uaDEobnVsbCwgXCJEb24ndCBoYXZlIGFuIGFjY291bnQ/XCIpLFxuICAgICAgICAgIFwiUmVnaXN0ZXIgYSBuZXcgYWNjb3VudCBhdCBcIiwgQ09ORklHLldFQlNJVEVfTkFNRSxcIi5cIixcbiAgICAgICAgICBSZWFjdC5ET00uaHIobnVsbCApLFxuICAgICAgICAgIHZhbGlkYXRpb25fZXJyb3IodGhpcy5zdGF0ZS5yZWdpc3Rlcl9zZXJ2ZXJfZXJyb3IpLFxuICAgICAgICAgIFJlYWN0LkRPTS5mb3JtKG51bGwsIFxuXG4gICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiRmlyc3QgTmFtZVwiLFxuICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwicmVnaXN0ZXJfZmlyc3RfbmFtZVwiLCB0eXBlOlwidGV4dFwiLCBwbGFjZWhvbGRlcjpcIkZpcnN0IE5hbWVcIn0gKSxcbiAgICAgICAgICB2YWxpZGF0aW9uX2Vycm9yKHRoaXMuc3RhdGUucmVnaXN0ZXJfZmlyc3RfbmFtZV9lcnJvcilcbiAgICAgICAgICApLFxuXG4gICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiTGFzdCBOYW1lXCIsXG4gICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJyZWdpc3Rlcl9sYXN0X25hbWVcIiwgdHlwZTpcInRleHRcIiwgcGxhY2Vob2xkZXI6XCJMYXN0IE5hbWVcIn0gKSxcbiAgICAgICAgICB2YWxpZGF0aW9uX2Vycm9yKHRoaXMuc3RhdGUucmVnaXN0ZXJfbGFzdF9uYW1lX2Vycm9yKVxuICAgICAgICAgICksXG5cbiAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJFbWFpbFwiLFxuICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwicmVnaXN0ZXJfZW1haWxcIiwgdHlwZTpcImVtYWlsXCIsIHBsYWNlaG9sZGVyOlwiRW1haWxcIn0gKSxcbiAgICAgICAgICB2YWxpZGF0aW9uX2Vycm9yKHRoaXMuc3RhdGUucmVnaXN0ZXJfZW1haWxfZXJyb3IpXG4gICAgICAgICAgKSxcblxuICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJyZWdpc3Rlcl9wYXNzd29yZFwiLCB0eXBlOlwicGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6XCJQYXNzd29yZFwifSApLFxuICAgICAgICAgIHZhbGlkYXRpb25fZXJyb3IodGhpcy5zdGF0ZS5yZWdpc3Rlcl9wYXNzd29yZF9lcnJvcilcbiAgICAgICAgICApLFxuXG4gICAgICAgICAgUmVhY3QuRE9NLmJ1dHRvbigge29uQ2xpY2s6dGhpcy5yZWdpc3RlciwgY2xhc3NOYW1lOlwiYnV0dG9uIHJhZGl1cyBleHBhbmRcIn0sIFwiUmVnaXN0ZXJcIilcbiAgICAgICAgICApXG5cblxuXG4gICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICApO1xufVxufSk7XG5cblxuXG5leHBvcnRzLkxvZ2luID0gTG9naW47XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29tcG9uZW50cy9sb2dpbi5qc3hcIixcIi9jb21wb25lbnRzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqIEBqc3ggUmVhY3QuRE9NICovXG5cbnZhciBDT05GSUcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxudmFyIE15QWNjb3VudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ015QWNjb3VudCcsXG5cbiAgcm91dGVFZGl0QWNjb3VudDogZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcImJ1dHRvbiBjbGlja2VkXCIpO1xuICAgIHRoaXMucHJvcHMuc2V0UG9zKFwiYWNjb3VudC9lZGl0XCIsIFwiRWRpdCBBY2NvdW50XCIpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwidGV4dC1jZW50ZXJcIn0sIFxuXG4gICAgICAgICAgICBSZWFjdC5ET00uaW1nKCB7Y2xhc3NOYW1lOlwidGhcIiwgc3JjOlwiaHR0cDovL2dyYXZhdGFyLmNvbS9hdmF0YXIvZjAwMTYxYzdiMzVmMDA4NGQzOTBmNzg1ZTAxNWI5Y2EuanBnXCJ9ICksXG4gICAgICAgICAgICBSZWFjdC5ET00uaDEobnVsbCwgdGhpcy5wcm9wcy51c2VyLmZ1bGxOYW1lKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS5oMyhudWxsLCB0aGlzLnByb3BzLnVzZXIuZW1haWwpLFxuICAgICAgICAgICAgUmVhY3QuRE9NLmg0KG51bGwsIFwiUmVnaXN0ZXJlZCBcIiwgbW9tZW50KHRoaXMucHJvcHMudXNlci5jcmVhdGVkQXQpLmZyb21Ob3coKSksXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS5idXR0b24oIHtvbkNsaWNrOnRoaXMucm91dGVFZGl0QWNjb3VudCwgY2xhc3NOYW1lOlwiYnV0dG9uIHJhZGl1c1wifSwgXCJFZGl0IEFjY291bnRcIilcblxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuXG4gIH1cblxufSk7XG5cblxudmFyIEVkaXRBY2NvdW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnRWRpdEFjY291bnQnLFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cbiAgICByZXR1cm4ge2ZpcnN0X25hbWVfZXJyb3I6IHVuZGVmaW5lZCwgbGFzdF9uYW1lX2Vycm9yOiB1bmRlZmluZWQsIGVtYWlsX2Vycm9yOiB1bmRlZmluZWQsIHBhc3N3b3JkX2Vycm9yOiB1bmRlZmluZWQsIHNlcnZlcl9lcnJvcjogdW5kZWZpbmVkfTtcblxuICB9LFxuXG4gIHJvdXRlTXlBY2NvdW50OiBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuc2V0UG9zKFwiYWNjb3VudFwiLCBcIk15IEFjY291bnRcIik7XG4gIH0sXG5cbnNhdmVVc2VyOiBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc29sZS5sb2coXCJzYXZpbmcuLlwiKTtcblxuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdmFyIGZpcnN0X25hbWUgPSAkKCdpbnB1dCNmaXJzdF9uYW1lJykudmFsKCk7XG4gIHZhciBsYXN0X25hbWUgPSAkKCdpbnB1dCNsYXN0X25hbWUnKS52YWwoKTtcbiAgdmFyIGVtYWlsID0gJCgnaW5wdXQjZW1haWwnKS52YWwoKTtcbiAgdmFyIHBhc3N3b3JkID0gJCgnaW5wdXQjcGFzc3dvcmQnKS52YWwoKTtcblxuXG4gICAgLy8gVmFsaWRhdGUgLSBmaWVsZHMgbXVzdCBub3QgYmUgZW1wdHlcbiAgICBpZihfLmlzRW1wdHkoZmlyc3RfbmFtZSkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe2ZpcnN0X25hbWVfZXJyb3I6IFwiRmlyc3QgTmFtZSBjYW5ub3QgYmUgYmxhbmtcIn0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtmaXJzdF9uYW1lX2Vycm9yOiB1bmRlZmluZWR9KTtcbiAgICB9O1xuXG4gICAgaWYoXy5pc0VtcHR5KGxhc3RfbmFtZSkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe2xhc3RfbmFtZV9lcnJvcjogXCJMYXN0IE5hbWUgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7bGFzdF9uYW1lX2Vycm9yOiB1bmRlZmluZWR9KTtcbiAgICB9O1xuXG4gICAgaWYoXy5pc0VtcHR5KGVtYWlsKSkge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7ZW1haWxfZXJyb3I6IFwiRW1haWwgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2UgaWYoZW1haWwuaW5kZXhPZihcIkBcIikgPT09IC0xKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtlbWFpbF9lcnJvcjogXCJQbGVhc2UgaW5wdXQgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7ZW1haWxfZXJyb3I6IHVuZGVmaW5lZH0pO1xuICAgIH07XG5cbiAgICBpZihfLmlzRW1wdHkocGFzc3dvcmQpKSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtwYXNzd29yZF9lcnJvcjogXCJQYXNzd29yZCBjYW5ub3QgYmUgYmxhbmtcIn0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtwYXNzd29yZF9lcnJvcjogdW5kZWZpbmVkfSk7XG4gICAgfTtcblxuLy8gc2VuZCB0byBzZXJ2ZXIgaWYgY2xpZW50IHZhbGlkYXRpb24gcGFzc2VzXG5pZighXy5zb21lKFt0aGlzLl9wZW5kaW5nU3RhdGUuZmlyc3RfbmFtZV9lcnJvciwgdGhpcy5fcGVuZGluZ1N0YXRlLmxhc3RfbmFtZV9lcnJvciwgdGhpcy5fcGVuZGluZ1N0YXRlLmVtYWlsX2Vycm9yLCB0aGlzLl9wZW5kaW5nU3RhdGUucGFzc3dvcmRfZXJyb3JdKSkge1xuXG4gIHZhciB1cGRhdGVkX3VzZXIgPSB7fTtcblxuICB1cGRhdGVkX3VzZXIudWlkID0gdGhpcy5wcm9wcy51c2VyLnVpZDtcbiAgdXBkYXRlZF91c2VyLmZpcnN0X25hbWUgPSBmaXJzdF9uYW1lO1xuICB1cGRhdGVkX3VzZXIubGFzdF9uYW1lID0gbGFzdF9uYW1lO1xuICB1cGRhdGVkX3VzZXIuZW1haWwgPSBlbWFpbDtcbiAgdXBkYXRlZF91c2VyLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG5cbiAgY29uc29sZS5sb2codXBkYXRlZF91c2VyKTtcblxuICB2YXIgY29va2llID0gSlNPTi5wYXJzZSgkLmNvb2tpZShcImFwcGxpY2F0aW9uXCIpKTtcbiAgdmFyIHRva2VuID0gY29va2llLnNlc3Npb25JZDtcblxuXG4gIHN1cGVyYWdlbnRcbiAgLnBvc3QoQ09ORklHLlVSTFMudXBkYXRlQWNjb3VudClcbiAgLnNldCgnWC1BUEktS2V5JywgdG9rZW4pXG4gIC5xdWVyeSh1cGRhdGVkX3VzZXIpXG4gIC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgLmVuZChmdW5jdGlvbihlcnJvciwgcmVzKXtcblxuICAgIGNvbnNvbGUubG9nKHJlcyk7XG5cbiAgICBpZihyZXMub2spIHtcblxuICAgICAgc2VsZi5wcm9wcy5zZXRQb3MoXCJhY2NvdW50XCIsIFwiTXkgQWNjb3VudFwiKTtcbiAgICAgIHNlbGYucHJvcHMuc2V0QWxlcnQoXCJZb3VyIGFjY291bnQgaGFzIGJlZW4gdXBkYXRlZCFcIiwgXCJzdWNjZXNzXCIpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICAgIC8vIGEgdmFsaWRhdGlvbiBlcnJvciBvY2N1cnJlZFxuICAgICAgICAgIGlmKEpTT04ucGFyc2UocmVzLnRleHQpLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3JzID0gSlNPTi5wYXJzZShyZXMudGV4dCkucmVzcG9uc2UuZXJyb3I7XG5cblxuICAgICAgICAgICAgaWYoIV8uaXNVbmRlZmluZWQoZXJyb3JzLmZpcnN0X25hbWUpKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe2ZpcnN0X25hbWVfZXJyb3I6IGVycm9ycy5maXJzdF9uYW1lLmVycm9yfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIV8uaXNVbmRlZmluZWQoZXJyb3JzLmxhc3RfbmFtZSkpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7bGFzdF9uYW1lX2Vycm9yOiBlcnJvcnMubGFzdF9uYW1lLmVycm9yfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIV8uaXNVbmRlZmluZWQoZXJyb3JzLmVtYWlsKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtlbWFpbF9lcnJvcjogZXJyb3JzLmVtYWlsLmVycm9yfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIV8uaXNVbmRlZmluZWQoZXJyb3JzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtwYXNzd29yZF9lcnJvcjogZXJyb3JzLnBhc3N3b3JkX2Vycm9yLmVycm9yfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhIHRva2VuIGVycm9yIG9jY3VycmVkXG4gICAgICAgICAgICBpZihKU09OLnBhcnNlKHJlcy50ZXh0KS5lcnJvcikge1xuICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS5lcnJvcjtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VydmVyX2Vycm9yOiBlcnJvcn0pO1xuXG4gICAgICAgICAgICAgIGlmKEpTT04ucGFyc2UocmVzLnRleHQpLnNlc3Npb25faW52YWxpZCkge1xuICAgICAgICAgICAgICBzZWxmLnByb3BzLnNldFVzZXIodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG5cbiAgICAgIH0pXG5cbn1cblxufSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgIHZhciBzZXJ2ZXJfZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzZWxmLnN0YXRlLnNlcnZlcl9lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS5zZXJ2ZXJfZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgdmFyIGZpcnN0X25hbWVfZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzZWxmLnN0YXRlLmZpcnN0X25hbWVfZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUuZmlyc3RfbmFtZV9lcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuICB2YXIgbGFzdF9uYW1lX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5sYXN0X25hbWVfZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUubGFzdF9uYW1lX2Vycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gIHZhciBlbWFpbF9lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUuZW1haWxfZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUuZW1haWxfZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgdmFyIHBhc3N3b3JkX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5wYXNzd29yZF9lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS5wYXNzd29yZF9lcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuXG4gICAgICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInRleHQtY2VudGVyXCJ9LCBcblxuICAgICAgICAgIFJlYWN0LkRPTS51bCgge2NsYXNzTmFtZTpcImJyZWFkY3J1bWJzXCJ9LCBcbiAgICAgICAgICBSZWFjdC5ET00ubGkobnVsbCwgUmVhY3QuRE9NLmEoIHtvbkNsaWNrOnRoaXMucm91dGVNeUFjY291bnR9LCBcIk15IEFjY291bnRcIikpLFxuICAgICAgICAgIFJlYWN0LkRPTS5saSgge2NsYXNzTmFtZTpcImN1cnJlbnRcIn0sIFwiRWRpdCBBY2NvdW50XCIpLFxuICAgICAgICAgIFJlYWN0LkRPTS5saSgge2NsYXNzTmFtZTpcImN1cnJlbnRcIn0sIHRoaXMucHJvcHMudXNlci5mdWxsTmFtZSlcbiAgICAgICAgICApLFxuXG4gICAgICAgICAgUmVhY3QuRE9NLmgyKG51bGwsIFwiRWRpdCBZb3VyIEFjY291bnRcIiksXG5cbiAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwicm93XCJ9LCBcbiAgICAgICAgICBSZWFjdC5ET00uZm9ybShudWxsLCBcbiAgICAgICAgICBSZWFjdC5ET00uZmllbGRzZXQobnVsbCwgXG4gICAgICAgICAgUmVhY3QuRE9NLmxlZ2VuZChudWxsLCBcIlVwZGF0ZSBVc2VyIERldGFpbHNcIiksXG4gICAgICAgICAgc2VydmVyX2Vycm9yKCksXG4gICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiRmlyc3QgTmFtZVwiLFxuICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwiZmlyc3RfbmFtZVwiLCB0eXBlOlwidGV4dFwiLCBwbGFjZWhvbGRlcjpcIkZpcnN0IE5hbWVcIiwgZGVmYXVsdFZhbHVlOnRoaXMucHJvcHMudXNlci5maXJzdE5hbWV9ICksXG4gICAgICAgICAgZmlyc3RfbmFtZV9lcnJvcigpXG4gICAgICAgICAgKSxcblxuICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIkxhc3QgTmFtZVwiLFxuICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwibGFzdF9uYW1lXCIsIHR5cGU6XCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOlwiTGFzdCBOYW1lXCIsIGRlZmF1bHRWYWx1ZTp0aGlzLnByb3BzLnVzZXIubGFzdE5hbWV9ICksXG4gICAgICAgICAgbGFzdF9uYW1lX2Vycm9yKClcbiAgICAgICAgICApLFxuXG4gICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiRW1haWwgQWRkcmVzc1wiLFxuICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwiZW1haWxcIiwgdHlwZTpcInRleHRcIiwgcGxhY2Vob2xkZXI6XCJFbWFpbCBBZGRyZXNzXCIsIGRlZmF1bHRWYWx1ZTp0aGlzLnByb3BzLnVzZXIuZW1haWx9ICksXG4gICAgICAgICAgZW1haWxfZXJyb3IoKVxuICAgICAgICAgICksXG5cbiAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJQYXNzd29yZFwiLFxuICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwicGFzc3dvcmRcIiwgdHlwZTpcInBhc3N3b3JkXCIsIHBsYWNlaG9sZGVyOlwiUGFzc3dvcmRcIn0gKSxcbiAgICAgICAgICBwYXNzd29yZF9lcnJvcigpXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgKSxcblxuICAgICAgICAgIFJlYWN0LkRPTS5idXR0b24oIHtvbkNsaWNrOnRoaXMuc2F2ZVVzZXIsIGNsYXNzTmFtZTpcImJ1dHRvbiByYWRpdXMgZXhwYW5kXCJ9LCBcIlVwZGF0ZVwiKVxuICAgICAgICAgIClcbiAgICAgICAgICApXG5cblxuXG4gICAgICAgICAgKVxuICAgICAgICAgIClcblxufVxuXG59KTtcblxuXG5leHBvcnRzLk15QWNjb3VudCA9IE15QWNjb3VudDtcbmV4cG9ydHMuRWRpdEFjY291bnQgPSBFZGl0QWNjb3VudDtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb21wb25lbnRzL215LWFjY291bnQuanN4XCIsXCIvY29tcG9uZW50c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKiBAanN4IFJlYWN0LkRPTSAqL1xuXG52YXIgQ09ORklHID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG52YXIgTGF5b3V0ID0gcmVxdWlyZShcIi4vbGF5b3V0XCIpLkxheW91dDtcblxuUm91dGVyID0gQmFja2JvbmUuUm91dGVyLmV4dGVuZCh7XG5cbiAgLy8gUm91dGVzIGFyZSBkZWZpbmVkIGluIENPTkZJRy5ST1VURVMsIHNvIHNlbmQgYW55IHBhdGggdG8gc2hvd0xheW91dFxuICByb3V0ZXMgOiB7XG4gICAgXCIqc3BsYXRcIiA6IFwic2hvd0xheW91dFwiXG4gIH0sXG4gIHNob3dMYXlvdXQgOiBmdW5jdGlvbihwb3MpIHtcbiAgICBjb25zb2xlLmxvZyhwb3MpXG5cbiAgICBSZWFjdC5yZW5kZXJDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExheW91dCgge3JvdXRlczpDT05GSUcuUk9VVEVTfSApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwbGljYXRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICB9XG59KTtcblxucm91dGVyID0gbmV3IFJvdXRlcigpO1xuXG5CYWNrYm9uZS5oaXN0b3J5LnN0YXJ0KHtwdXNoU3RhdGU6IHRydWV9KTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb21wb25lbnRzL3JvdXRlci5qc3hcIixcIi9jb21wb25lbnRzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqIEBqc3ggUmVhY3QuRE9NICovXG5cbnZhciBDT05GSUcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxudmFyIFdlYnNpdGVzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnV2Vic2l0ZXMnLFxuXG4gIHJvdXRlQWRkV2Vic2l0ZTogZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcImJ1dHRvbiBjbGlja2VkXCIpO1xuICAgIHRoaXMucHJvcHMuc2V0V2Vic2l0ZSh1bmRlZmluZWQpO1xuICAgIHRoaXMucHJvcHMuc2V0UG9zKFwid2Vic2l0ZXMvYWRkXCIsIFwiQWRkIFdlYnNpdGVcIik7XG4gIH0sXG5cbiAgcm91dGVFZGl0V2Vic2l0ZTogZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgd2Vic2l0ZV9pZCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoXCJ0clwiKS5hdHRyKFwiaWRcIik7XG4gICAgY29uc29sZS5sb2cod2Vic2l0ZV9pZCk7XG4gICAgdGhpcy5wcm9wcy5zZXRXZWJzaXRlKHdlYnNpdGVfaWQpO1xuICAgIHRoaXMucHJvcHMuc2V0UG9zKFwid2Vic2l0ZXMvZWRpdC9cIiArIHdlYnNpdGVfaWQsIFwiRWRpdCBXZWJzaXRlXCIpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgd2Vic2l0ZXMgPSB0aGlzLnByb3BzLndlYnNpdGVzO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuXG4gICAgdmFyIHdlYnNpdGVfcm93cyA9IF8ubWFwKHdlYnNpdGVzLCBmdW5jdGlvbih3ZWJzaXRlKSB7XG5cbiAgICAgIHJldHVybihcbiAgICAgICAgICAgICBSZWFjdC5ET00udHIoIHtpZDp3ZWJzaXRlLmlkLCBrZXk6d2Vic2l0ZS5pZH0sIFxuICAgICAgICAgICAgIFJlYWN0LkRPTS50ZChudWxsLCB3ZWJzaXRlLm5hbWUpLFxuICAgICAgICAgICAgIFJlYWN0LkRPTS50ZChudWxsLCB3ZWJzaXRlLnNlbmRlcl9uYW1lLCBcIiAoXCIsd2Vic2l0ZS5zZW5kZXJfZW1haWwsXCIpXCIpLFxuICAgICAgICAgICAgIFJlYWN0LkRPTS50ZChudWxsLCBtb21lbnQod2Vic2l0ZS5jcmVhdGVkX2F0KS5mcm9tTm93KCkpLFxuICAgICAgICAgICAgIFJlYWN0LkRPTS50ZChudWxsLCBSZWFjdC5ET00uYnV0dG9uKCB7b25DbGljazpzZWxmLnJvdXRlRWRpdFdlYnNpdGUsIGNsYXNzTmFtZTpcImJ1dHRvbiByYWRpdXNcIn0sIFwiRWRpdFwiKSlcbiAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICApXG5cbiAgICB9KTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYobnVsbCwgXG4gICAgICAgICAgICBSZWFjdC5ET00uaDIobnVsbCwgXCJXZWJzaXRlc1wiKSxcblxuICAgICAgICAgICAgUmVhY3QuRE9NLnRhYmxlKCB7d2lkdGg6XCIxMDAlXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS50aGVhZChudWxsLCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS50cihudWxsLCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS50aChudWxsLCBcIldlYnNpdGUgTmFtZVwiKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS50aChudWxsLCBcIlNlbmRlciBEZXRhaWxzXCIpLFxuICAgICAgICAgICAgUmVhY3QuRE9NLnRoKG51bGwsIFwiQ3JlYXRlZFwiKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS50aChudWxsLCBcIkFjdGlvbnNcIilcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5ET00udGJvZHkobnVsbCwgXG4gICAgICAgICAgICB3ZWJzaXRlX3Jvd3NcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG5cblxuXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJ0ZXh0LWNlbnRlclwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00uYnV0dG9uKCB7b25DbGljazp0aGlzLnJvdXRlQWRkV2Vic2l0ZSwgY2xhc3NOYW1lOlwiYnV0dG9uIHJhZGl1c1wifSwgXCJBZGQgTmV3IFdlYnNpdGVcIilcblxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuXG4gIH1cblxufSk7XG5cblxudmFyIEFkZFdlYnNpdGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdBZGRXZWJzaXRlJyxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuXG4gICAgcmV0dXJuIHtuYW1lX2Vycm9yOiB1bmRlZmluZWQsIHVybF9lcnJvcjogdW5kZWZpbmVkLCBzZW5kZXJfbmFtZV9lcnJvcjogdW5kZWZpbmVkLCBzZW5kZXJfZW1haWxfZXJyb3I6IHVuZGVmaW5lZCwgc2VydmVyX2Vycm9yOiB1bmRlZmluZWR9O1xuXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5wcm9wcy5zZXRXZWJzaXRlKHVuZGVmaW5lZCk7XG5cbiAgfSxcblxuICByb3V0ZVdlYnNpdGVzOiBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuc2V0UG9zKFwid2Vic2l0ZXNcIiwgXCJXZWJzaXRlc1wiKTtcbiAgfSxcblxuc2F2ZVdlYnNpdGU6IGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zb2xlLmxvZyhcInNhdmluZy4uXCIpO1xuXG4gIHZhciBzZWxmID0gdGhpcztcblxuICB2YXIgbmFtZSA9ICQoJ2lucHV0I25hbWUnKS52YWwoKTtcbiAgdmFyIHVybCA9ICQoJ2lucHV0I3VybCcpLnZhbCgpO1xuICB2YXIgc2VuZGVyX25hbWUgPSAkKCdpbnB1dCNzZW5kZXJfbmFtZScpLnZhbCgpO1xuICB2YXIgc2VuZGVyX2VtYWlsID0gJCgnaW5wdXQjc2VuZGVyX2VtYWlsJykudmFsKCk7XG5cblxuICAgIC8vIFZhbGlkYXRlIC0gZmllbGRzIG11c3Qgbm90IGJlIGVtcHR5XG4gICAgaWYoXy5pc0VtcHR5KG5hbWUpKSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtuYW1lX2Vycm9yOiBcIk5hbWUgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7bmFtZV9lcnJvcjogdW5kZWZpbmVkfSk7XG4gICAgfTtcblxuICAgIGlmKF8uaXNFbXB0eSh1cmwpKSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHt1cmxfZXJyb3I6IFwiVVJMIGNhbm5vdCBiZSBibGFua1wifSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe3VybF9lcnJvcjogdW5kZWZpbmVkfSk7XG4gICAgfTtcblxuICAgIGlmKF8uaXNFbXB0eShzZW5kZXJfbmFtZSkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe3NlbmRlcl9uYW1lX2Vycm9yOiBcIlNlbmRlciBOYW1lIGNhbm5vdCBiZSBibGFua1wifSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe3NlbmRlcl9uYW1lX2Vycm9yOiB1bmRlZmluZWR9KTtcbiAgICB9O1xuXG4gICAgaWYoXy5pc0VtcHR5KHNlbmRlcl9lbWFpbCkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe3NlbmRlcl9lbWFpbF9lcnJvcjogXCJTZW5kZXIgRW1haWwgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2UgaWYoc2VuZGVyX2VtYWlsLmluZGV4T2YoXCJAXCIpID09PSAtMSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VuZGVyX2VtYWlsX2Vycm9yOiBcIlBsZWFzZSBpbnB1dCBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIn0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtzZW5kZXJfZW1haWxfZXJyb3I6IHVuZGVmaW5lZH0pO1xuICAgIH07XG5cbi8vIHNlbmQgdG8gc2VydmVyIGlmIGNsaWVudCB2YWxpZGF0aW9uIHBhc3Nlc1xuaWYoIV8uc29tZShbdGhpcy5fcGVuZGluZ1N0YXRlLm5hbWVfZXJyb3IsIHRoaXMuX3BlbmRpbmdTdGF0ZS51cmxfZXJyb3IsIHRoaXMuX3BlbmRpbmdTdGF0ZS5zZW5kZXJfbmFtZV9lcnJvciwgdGhpcy5fcGVuZGluZ1N0YXRlLnNlbmRlcl9lbWFpbF9lcnJvcl0pKSB7XG5cbiAgdmFyIG5ld193ZWJzaXRlID0ge307XG5cbiAgbmV3X3dlYnNpdGUubmFtZSA9IG5hbWU7XG4gIG5ld193ZWJzaXRlLnVybCA9IHVybDtcbiAgbmV3X3dlYnNpdGUuc2VuZGVyX25hbWUgPSBzZW5kZXJfbmFtZTtcbiAgbmV3X3dlYnNpdGUuc2VuZGVyX2VtYWlsID0gc2VuZGVyX2VtYWlsO1xuXG4gIGNvbnNvbGUubG9nKG5ld193ZWJzaXRlKTtcblxuICB2YXIgY29va2llID0gSlNPTi5wYXJzZSgkLmNvb2tpZShcImFwcGxpY2F0aW9uXCIpKTtcbiAgdmFyIHRva2VuID0gY29va2llLnNlc3Npb25JZDtcblxuXG4gIHN1cGVyYWdlbnRcbiAgLnBvc3QoQ09ORklHLlVSTFMuYWRkV2Vic2l0ZSlcbiAgLnNldCgnWC1BUEktS2V5JywgdG9rZW4pXG4gIC5xdWVyeShuZXdfd2Vic2l0ZSlcbiAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAuZW5kKGZ1bmN0aW9uKGVycm9yLCByZXMpe1xuXG4gICAgY29uc29sZS5sb2cocmVzKTtcblxuICAgIGlmKHJlcy5vaykge1xuXG4gICAgICBzZWxmLnByb3BzLnNldFBvcyhcIndlYnNpdGVzXCIsIFwiV2Vic2l0ZXNcIik7XG4gICAgICBzZWxmLnByb3BzLnNldEFsZXJ0KG5hbWUgKyBcIiBoYXMgYmVlbiBhZGRlZCFcIiwgXCJzdWNjZXNzXCIpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICAgIC8vIGEgdmFsaWRhdGlvbiBlcnJvciBvY2N1cnJlZFxuICAgICAgICAgIGlmKEpTT04ucGFyc2UocmVzLnRleHQpLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3JzID0gSlNPTi5wYXJzZShyZXMudGV4dCkucmVzcG9uc2UuZXJyb3I7XG5cblxuICAgICAgICAgICAgaWYoIV8uaXNVbmRlZmluZWQoZXJyb3JzLm5hbWUpKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe25hbWVfZXJyb3I6IGVycm9ycy5uYW1lLmVycm9yfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIV8uaXNVbmRlZmluZWQoZXJyb3JzLnVybCkpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7dXJsX2Vycm9yOiBlcnJvcnMudXJsLmVycm9yfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIV8uaXNVbmRlZmluZWQoZXJyb3JzLnNlbmRlcl9uYW1lKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtzZW5kZXJfbmFtZV9lcnJvcjogZXJyb3JzLnNlbmRlcl9uYW1lLmVycm9yfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIV8uaXNVbmRlZmluZWQoZXJyb3JzLnNlbmRlcl9lbWFpbCkpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VuZGVyX2VtYWlsX2Vycm9yOiBlcnJvcnMuc2VuZGVyX2VtYWlsLmVycm9yfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhIHRva2VuIGVycm9yIG9jY3VycmVkXG4gICAgICAgICAgICBpZihKU09OLnBhcnNlKHJlcy50ZXh0KS5lcnJvcikge1xuICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS5lcnJvcjtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VydmVyX2Vycm9yOiBlcnJvcn0pO1xuXG4gICAgICAgICAgICAgIGlmKEpTT04ucGFyc2UocmVzLnRleHQpLnNlc3Npb25faW52YWxpZCkge1xuICAgICAgICAgICAgICBzZWxmLnByb3BzLnNldFVzZXIodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG5cbiAgICAgIH0pXG5cbn1cblxufSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHZhciBzZXJ2ZXJfZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzZWxmLnN0YXRlLnNlcnZlcl9lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS5zZXJ2ZXJfZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgdmFyIG5hbWVfZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzZWxmLnN0YXRlLm5hbWVfZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUubmFtZV9lcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuICB2YXIgdXJsX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS51cmxfZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUudXJsX2Vycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gIHZhciBzZW5kZXJfbmFtZV9lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUuc2VuZGVyX25hbWVfZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUuc2VuZGVyX25hbWVfZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNlbmRlcl9lbWFpbF9lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUuc2VuZGVyX2VtYWlsX2Vycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLnNlbmRlcl9lbWFpbF9lcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJ0ZXh0LWNlbnRlclwifSwgXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS51bCgge2NsYXNzTmFtZTpcImJyZWFkY3J1bWJzXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5saShudWxsLCBSZWFjdC5ET00uYSgge29uQ2xpY2s6dGhpcy5yb3V0ZVdlYnNpdGVzfSwgXCJXZWJzaXRlc1wiKSksXG4gICAgICAgICAgICBSZWFjdC5ET00ubGkoIHtjbGFzc05hbWU6XCJjdXJyZW50XCJ9LCBcIkFkZCBXZWJzaXRlXCIpXG4gICAgICAgICAgICApLFxuXG4gICAgICAgICAgICBSZWFjdC5ET00uaDIobnVsbCwgXCJBZGQgV2Vic2l0ZVwiKSxcblxuICAgICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwicm93XCJ9LCBcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmZvcm0obnVsbCwgXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5maWVsZHNldChudWxsLCBcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmxlZ2VuZChudWxsLCBcIldlYnNpdGUgRGV0YWlsc1wiKSxcbiAgICAgICAgICAgICAgc2VydmVyX2Vycm9yKCksXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIldlYnNpdGUgTmFtZVwiLFxuICAgICAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoIHtpZDpcIm5hbWVcIiwgdHlwZTpcInRleHRcIiwgcGxhY2Vob2xkZXI6XCJXZWJzaXRlIE5hbWVcIn0gKSxcbiAgICAgICAgICAgICAgbmFtZV9lcnJvcigpXG4gICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiVVJMXCIsXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwidXJsXCIsIHR5cGU6XCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOlwiV2Vic2l0ZSBVUkxcIn0gKSxcbiAgICAgICAgICAgICAgdXJsX2Vycm9yKClcbiAgICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJTZW5kZXIgTmFtZVwiLFxuICAgICAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoIHtpZDpcInNlbmRlcl9uYW1lXCIsIHR5cGU6XCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOlwiU2VuZGVyIE5hbWVcIn0gKSxcbiAgICAgICAgICAgICAgc2VuZGVyX25hbWVfZXJyb3IoKVxuICAgICAgICAgICAgICApLFxuXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIlNlbmRlciBFbWFpbFwiLFxuICAgICAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoIHtpZDpcInNlbmRlcl9lbWFpbFwiLCB0eXBlOlwidGV4dFwiLCBwbGFjZWhvbGRlcjpcIlNlbmRlciBFbWFpbFwifSApLFxuICAgICAgICAgICAgICBzZW5kZXJfZW1haWxfZXJyb3IoKVxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgICBSZWFjdC5ET00uYnV0dG9uKCB7b25DbGljazp0aGlzLnNhdmVXZWJzaXRlLCBjbGFzc05hbWU6XCJidXR0b24gcmFkaXVzIGV4cGFuZFwifSwgXCJBZGRcIilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcblxuICB9XG5cbn0pO1xuXG52YXIgRWRpdFdlYnNpdGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdFZGl0V2Vic2l0ZScsXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblxuICAgIHJldHVybiB7bmFtZV9lcnJvcjogdW5kZWZpbmVkLCB1cmxfZXJyb3I6IHVuZGVmaW5lZCwgc2VuZGVyX25hbWVfZXJyb3I6IHVuZGVmaW5lZCwgc2VuZGVyX2VtYWlsX2Vycm9yOiB1bmRlZmluZWQsIHNlcnZlcl9lcnJvcjogdW5kZWZpbmVkfTtcblxuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcblxuXG4gICAgLy8gRW5zdXJlIGN1cnJlbnQgcGF0aCByZWZlcmVuY2VzIGEgd2Vic2l0ZSB0aGF0IHRoZSB1c2VyIG93bnNcbiAgICB2YXIgd2Vic2l0ZV9pZCA9IEJhY2tib25lLmhpc3RvcnkuZnJhZ21lbnQucmVwbGFjZShcIndlYnNpdGVzL2VkaXQvXCIsIFwiXCIpO1xuICAgIHZhciB3ZWJzaXRlcyA9IHRoaXMucHJvcHMud2Vic2l0ZXM7XG5cbiAgICBjb25zb2xlLmxvZyh3ZWJzaXRlX2lkKVxuXG4gICAgaWYodGhpcy5wcm9wcy5hY3RpdmVfd2Vic2l0ZSAhPT0gd2Vic2l0ZV9pZCkge1xuICAgICAgdmFyIG1hdGNoID0gXy5maW5kKHdlYnNpdGVzLCB7XCJpZFwiIDogcGFyc2VJbnQod2Vic2l0ZV9pZCl9KTtcblxuICAgICAgaWYoIV8uaXNFbXB0eShtYXRjaCkpIHtcblxuICAgICAgLy8gUGF0aCBpZCBpcyBhIHZhbGlkIHdlYnNpdGVcbiAgICAgIHRoaXMucHJvcHMuc2V0V2Vic2l0ZSh3ZWJzaXRlX2lkKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8vIFBhdGggaWQgaXMgbm90IGEgdmFsaWQgd2Vic2l0ZVxuICAgICAgdGhpcy5wcm9wcy5zZXRQb3MoXCJ3ZWJzaXRlc1wiLCBcIldlYnNpdGVzXCIpO1xuXG4gICAgfVxuXG4gIH1cbn0sXG5cbnJvdXRlV2Vic2l0ZXM6IGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB0aGlzLnByb3BzLnNldFBvcyhcIndlYnNpdGVzXCIsIFwiV2Vic2l0ZXNcIik7XG59LFxuXG5kZWxldGVXZWJzaXRlOiBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc29sZS5sb2coXCJkZWxldGluZy4uXCIpO1xuXG52YXIgY29va2llID0gSlNPTi5wYXJzZSgkLmNvb2tpZShcImFwcGxpY2F0aW9uXCIpKTtcbnZhciBzZWxmID0gdGhpcztcbiAgdmFyIHRva2VuID0gY29va2llLnNlc3Npb25JZDtcblxuXG4gIHN1cGVyYWdlbnRcbiAgLnBvc3QoQ09ORklHLlVSTFMuZGVsZXRlV2Vic2l0ZSlcbiAgLnNldCgnWC1BUEktS2V5JywgdG9rZW4pXG4gIC5xdWVyeSh7aWQ6IHRoaXMucHJvcHMuYWN0aXZlX3dlYnNpdGV9KVxuICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gIC5lbmQoZnVuY3Rpb24oZXJyb3IsIHJlcyl7XG5cbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgaWYocmVzLm9rKSB7XG5cbiAgICAgIHNlbGYucHJvcHMuc2V0UG9zKFwid2Vic2l0ZXNcIiwgXCJXZWJzaXRlc1wiKTtcbiAgICAgIHNlbGYucHJvcHMuc2V0QWxlcnQoXCJXZWJzaXRlIGhhcyBiZWVuIGRlbGV0ZWQhXCIsIFwic3VjY2Vzc1wiKTtcblxuICAgIH1cblxuICB9KTtcblxuXG59LFxuXG5cbnNhdmVXZWJzaXRlOiBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc29sZS5sb2coXCJzYXZpbmcuLlwiKTtcblxuXG52YXIgY29va2llID0gJC5jb29raWUoXCJhcHBsaWNhdGlvblwiKTtcbnZhciB3ZWJzaXRlcyA9IHRoaXMucHJvcHMud2Vic2l0ZXM7XG5cblxuICB2YXIgYWN0aXZlX3dlYnNpdGUgPSBfLmZpbmQod2Vic2l0ZXMsIHsgXCJpZFwiIDogcGFyc2VJbnQoSlNPTi5wYXJzZShjb29raWUpLmFjdGl2ZV93ZWJzaXRlKX0pO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdmFyIG5hbWUgPSAkKCdpbnB1dCNuYW1lJykudmFsKCk7XG4gIHZhciB1cmwgPSAkKCdpbnB1dCN1cmwnKS52YWwoKTtcbiAgdmFyIHNlbmRlcl9uYW1lID0gJCgnaW5wdXQjc2VuZGVyX25hbWUnKS52YWwoKTtcbiAgdmFyIHNlbmRlcl9lbWFpbCA9ICQoJ2lucHV0I3NlbmRlcl9lbWFpbCcpLnZhbCgpO1xuXG5cbiAgICAvLyBWYWxpZGF0ZSAtIGZpZWxkcyBtdXN0IG5vdCBiZSBlbXB0eVxuICAgIGlmKF8uaXNFbXB0eShuYW1lKSkge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7bmFtZV9lcnJvcjogXCJOYW1lIGNhbm5vdCBiZSBibGFua1wifSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe25hbWVfZXJyb3I6IHVuZGVmaW5lZH0pO1xuICAgIH07XG5cbiAgICBpZihfLmlzRW1wdHkodXJsKSkge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7dXJsX2Vycm9yOiBcIlVSTCBjYW5ub3QgYmUgYmxhbmtcIn0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHt1cmxfZXJyb3I6IHVuZGVmaW5lZH0pO1xuICAgIH07XG5cbiAgICBpZihfLmlzRW1wdHkoc2VuZGVyX25hbWUpKSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtzZW5kZXJfbmFtZV9lcnJvcjogXCJTZW5kZXIgTmFtZSBjYW5ub3QgYmUgYmxhbmtcIn0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtzZW5kZXJfbmFtZV9lcnJvcjogdW5kZWZpbmVkfSk7XG4gICAgfTtcblxuICAgIGlmKF8uaXNFbXB0eShzZW5kZXJfZW1haWwpKSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtzZW5kZXJfZW1haWxfZXJyb3I6IFwiU2VuZGVyIEVtYWlsIGNhbm5vdCBiZSBibGFua1wifSk7XG4gICAgfSBlbHNlIGlmKHNlbmRlcl9lbWFpbC5pbmRleE9mKFwiQFwiKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbmRlcl9lbWFpbF9lcnJvcjogXCJQbGVhc2UgaW5wdXQgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VuZGVyX2VtYWlsX2Vycm9yOiB1bmRlZmluZWR9KTtcbiAgICB9O1xuXG4vLyBzZW5kIHRvIHNlcnZlciBpZiBjbGllbnQgdmFsaWRhdGlvbiBwYXNzZXNcbmlmKCFfLnNvbWUoW3RoaXMuX3BlbmRpbmdTdGF0ZS5uYW1lX2Vycm9yLCB0aGlzLl9wZW5kaW5nU3RhdGUudXJsX2Vycm9yLCB0aGlzLl9wZW5kaW5nU3RhdGUuc2VuZGVyX25hbWVfZXJyb3IsIHRoaXMuX3BlbmRpbmdTdGF0ZS5zZW5kZXJfZW1haWxfZXJyb3JdKSkge1xuXG4gIHZhciB1cGRhdGVkX3dlYnNpdGUgPSB7fTtcblxuICB1cGRhdGVkX3dlYnNpdGUuaWQgPSBhY3RpdmVfd2Vic2l0ZS5pZDtcbiAgdXBkYXRlZF93ZWJzaXRlLm5hbWUgPSBuYW1lO1xuICB1cGRhdGVkX3dlYnNpdGUudXJsID0gdXJsO1xuICB1cGRhdGVkX3dlYnNpdGUuc2VuZGVyX25hbWUgPSBzZW5kZXJfbmFtZTtcbiAgdXBkYXRlZF93ZWJzaXRlLnNlbmRlcl9lbWFpbCA9IHNlbmRlcl9lbWFpbDtcblxuICBjb25zb2xlLmxvZyh1cGRhdGVkX3dlYnNpdGUpO1xuXG4gIHZhciBjb29raWUgPSBKU09OLnBhcnNlKCQuY29va2llKFwiYXBwbGljYXRpb25cIikpO1xuICB2YXIgdG9rZW4gPSBjb29raWUuc2Vzc2lvbklkO1xuXG5cbiAgc3VwZXJhZ2VudFxuICAucG9zdChDT05GSUcuVVJMUy51cGRhdGVXZWJzaXRlKVxuICAuc2V0KCdYLUFQSS1LZXknLCB0b2tlbilcbiAgLnF1ZXJ5KHVwZGF0ZWRfd2Vic2l0ZSlcbiAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAuZW5kKGZ1bmN0aW9uKGVycm9yLCByZXMpe1xuXG4gICAgY29uc29sZS5sb2cocmVzKTtcblxuICAgIGlmKHJlcy5vaykge1xuXG4gICAgICBzZWxmLnByb3BzLnNldFBvcyhcIndlYnNpdGVzXCIsIFwiV2Vic2l0ZXNcIik7XG4gICAgICBzZWxmLnByb3BzLnNldEFsZXJ0KG5hbWUgKyBcIiBoYXMgYmVlbiB1cGRhdGVkIVwiLCBcInN1Y2Nlc3NcIik7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgLy8gYSB2YWxpZGF0aW9uIGVycm9yIG9jY3VycmVkXG4gICAgICAgICAgaWYoSlNPTi5wYXJzZShyZXMudGV4dCkucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciBlcnJvcnMgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS5yZXNwb25zZS5lcnJvcjtcblxuXG4gICAgICAgICAgICBpZighXy5pc1VuZGVmaW5lZChlcnJvcnMubmFtZSkpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7bmFtZV9lcnJvcjogZXJyb3JzLm5hbWUuZXJyb3J9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighXy5pc1VuZGVmaW5lZChlcnJvcnMudXJsKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHt1cmxfZXJyb3I6IGVycm9ycy51cmwuZXJyb3J9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighXy5pc1VuZGVmaW5lZChlcnJvcnMuc2VuZGVyX25hbWUpKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3NlbmRlcl9uYW1lX2Vycm9yOiBlcnJvcnMuc2VuZGVyX25hbWUuZXJyb3J9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighXy5pc1VuZGVmaW5lZChlcnJvcnMuc2VuZGVyX2VtYWlsKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtzZW5kZXJfZW1haWxfZXJyb3I6IGVycm9ycy5zZW5kZXJfZW1haWwuZXJyb3J9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGEgdG9rZW4gZXJyb3Igb2NjdXJyZWRcbiAgICAgICAgICAgIGlmKEpTT04ucGFyc2UocmVzLnRleHQpLmVycm9yKSB7XG4gICAgICAgICAgICAgIHZhciBlcnJvciA9IEpTT04ucGFyc2UocmVzLnRleHQpLmVycm9yO1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtzZXJ2ZXJfZXJyb3I6IGVycm9yfSk7XG5cbiAgICAgICAgICAgICAgaWYoSlNPTi5wYXJzZShyZXMudGV4dCkuc2Vzc2lvbl9pbnZhbGlkKSB7XG4gICAgICAgICAgICAgIHNlbGYucHJvcHMuc2V0VXNlcih1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuICAgICAgfSlcblxufVxuXG59LFxuXG5cbnJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbnZhciBjb29raWUgPSAkLmNvb2tpZShcImFwcGxpY2F0aW9uXCIpO1xudmFyIHdlYnNpdGVzID0gdGhpcy5wcm9wcy53ZWJzaXRlcztcblxuXG4gIHZhciBhY3RpdmVfd2Vic2l0ZSA9IF8uZmluZCh3ZWJzaXRlcywgeyBcImlkXCIgOiBwYXJzZUludChKU09OLnBhcnNlKGNvb2tpZSkuYWN0aXZlX3dlYnNpdGUpfSk7XG4gIHZhciB3ZWJzaXRlX2lkID0gQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudC5yZXBsYWNlKFwid2Vic2l0ZXMvZWRpdC9cIiwgXCJcIik7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICB2YXIgc2VydmVyX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5zZXJ2ZXJfZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUuc2VydmVyX2Vycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gIHZhciBuYW1lX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5uYW1lX2Vycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLm5hbWVfZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgdmFyIHVybF9lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUudXJsX2Vycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLnVybF9lcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuICB2YXIgc2VuZGVyX25hbWVfZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzZWxmLnN0YXRlLnNlbmRlcl9uYW1lX2Vycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLnNlbmRlcl9uYW1lX2Vycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gIHZhciBzZW5kZXJfZW1haWxfZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzZWxmLnN0YXRlLnNlbmRlcl9lbWFpbF9lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS5zZW5kZXJfZW1haWxfZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cblxuICBpZighXy5pc0VtcHR5KGFjdGl2ZV93ZWJzaXRlKSkge1xuICAgIGlmKGFjdGl2ZV93ZWJzaXRlLmlkID09PSBwYXJzZUludCh3ZWJzaXRlX2lkKSkge1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJ0ZXh0LWNlbnRlclwifSwgXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnVsKCB7Y2xhc3NOYW1lOlwiYnJlYWRjcnVtYnNcIn0sIFxuICAgICAgICAgICAgICBSZWFjdC5ET00ubGkobnVsbCwgUmVhY3QuRE9NLmEoIHtvbkNsaWNrOnRoaXMucm91dGVXZWJzaXRlc30sIFwiV2Vic2l0ZXNcIikpLFxuICAgICAgICAgICAgICBSZWFjdC5ET00ubGkoIHtjbGFzc05hbWU6XCJjdXJyZW50XCJ9LCBcIkVkaXQgV2Vic2l0ZVwiKSxcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmxpKCB7Y2xhc3NOYW1lOlwiY3VycmVudFwifSwgYWN0aXZlX3dlYnNpdGUubmFtZSlcbiAgICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgICBSZWFjdC5ET00uaDIobnVsbCwgXCJFZGl0aW5nIFwiLCBhY3RpdmVfd2Vic2l0ZS5uYW1lKSxcblxuICAgICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwicm93XCJ9LCBcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmZvcm0obnVsbCwgXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5maWVsZHNldChudWxsLCBcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmxlZ2VuZChudWxsLCBcIlVwZGF0ZSBEZXRhaWxzXCIpLFxuICAgICAgICAgICAgICBzZXJ2ZXJfZXJyb3IoKSxcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiV2Vic2l0ZSBOYW1lXCIsXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwibmFtZVwiLCB0eXBlOlwidGV4dFwiLCBwbGFjZWhvbGRlcjpcIldlYnNpdGUgTmFtZVwiLCBkZWZhdWx0VmFsdWU6YWN0aXZlX3dlYnNpdGUubmFtZX0gKSxcbiAgICAgICAgICAgICAgbmFtZV9lcnJvcigpXG4gICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiVVJMXCIsXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwidXJsXCIsIHR5cGU6XCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOlwiV2Vic2l0ZSBVUkxcIiwgZGVmYXVsdFZhbHVlOmFjdGl2ZV93ZWJzaXRlLnVybH0gKSxcbiAgICAgICAgICAgICAgdXJsX2Vycm9yKClcbiAgICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJTZW5kZXIgTmFtZVwiLFxuICAgICAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoIHtpZDpcInNlbmRlcl9uYW1lXCIsIHR5cGU6XCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOlwiU2VuZGVyIE5hbWVcIiwgZGVmYXVsdFZhbHVlOmFjdGl2ZV93ZWJzaXRlLnNlbmRlcl9uYW1lfSApLFxuICAgICAgICAgICAgICBzZW5kZXJfbmFtZV9lcnJvcigpXG4gICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiU2VuZGVyIEVtYWlsXCIsXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwic2VuZGVyX2VtYWlsXCIsIHR5cGU6XCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOlwiU2VuZGVyIEVtYWlsXCIsIGRlZmF1bHRWYWx1ZTphY3RpdmVfd2Vic2l0ZS5zZW5kZXJfZW1haWx9ICksXG4gICAgICAgICAgICAgIHNlbmRlcl9lbWFpbF9lcnJvcigpXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICApLFxuXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5idXR0b24oIHtvbkNsaWNrOnRoaXMuc2F2ZVdlYnNpdGUsIGNsYXNzTmFtZTpcImJ1dHRvbiByYWRpdXMgZXhwYW5kXCJ9LCBcIlVwZGF0ZVwiKVxuICAgICAgICAgICAgICApLFxuXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5ocihudWxsICksXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5oMyhudWxsLCBcIlBlcm1lbmFudGx5IERlbGV0ZSBXZWJzaXRlXCIpLFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnAobnVsbCwgXCJDbGljayB0aGUgYnV0dG9uIGJlbG93IHRvIFwiLCBSZWFjdC5ET00uc3Ryb25nKG51bGwsIFwicGVybWVuYW50bHkgcmVtb3ZlIHRoZSBcIiwgYWN0aXZlX3dlYnNpdGUubmFtZSwgXCIgd2Vic2l0ZSBhbmQgYWxsIG9mIGl0cyBkYXRhXCIpLCBcIiBmcm9tIHRoZSBzeXN0ZW0uXCIpLFxuICAgICAgICAgICAgICBSZWFjdC5ET00uYnV0dG9uKCB7b25DbGljazp0aGlzLmRlbGV0ZVdlYnNpdGUsIGNsYXNzTmFtZTpcImJ1dHRvbiByYWRpdXMgYWxlcnQgZXhwYW5kXCJ9LCBcIkRlbGV0ZVwiKVxuICAgICAgICAgICAgICApXG5cblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbn0gZWxzZSB7XG4gIHJldHVybiAoXG4gICAgICAgICAgUmVhY3QuRE9NLmRpdihudWxsLCBcbiAgICAgICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIlxuICAgICAgICAgICkpXG59IFxufSBlbHNlIHtcbiAgcmV0dXJuIChcbiAgICAgICAgICBSZWFjdC5ET00uZGl2KG51bGwsIFxuICAgICAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiXG4gICAgICAgICAgKSlcbn1cbn1cblxufSk7XG5cbmV4cG9ydHMuV2Vic2l0ZXMgPSBXZWJzaXRlcztcbmV4cG9ydHMuQWRkV2Vic2l0ZSA9IEFkZFdlYnNpdGU7XG5leHBvcnRzLkVkaXRXZWJzaXRlID0gRWRpdFdlYnNpdGU7XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb21wb25lbnRzL3dlYnNpdGUuanN4XCIsXCIvY29tcG9uZW50c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKlxuICpcbiAqIFRoaXMgZmlsZSBpcyB1c2VkIHRvIGNvbmZpZ3VyZSBzZXR0aW5ncyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICpcbiAqIEBhdXRob3IgRGhydXYgQmhhdGlhIDxkaHJ1dkBkaHJ1dmJoYXRpYS5jb20+XG4gKlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBXRUJTSVRFX05BTUUgOiBcIlJlYWN0IERlbW9cIixcblxuICBST1VURVMgOiBbXG4gICAge25hbWU6IFwiRGFzaGJvYXJkXCIsIHVybDogXCJcIiwgc2hvd19pbl9tZW51OiB0cnVlLCBhbGxvd19wYXJhbWV0ZXJzOiBmYWxzZX0sXG4gICAge25hbWU6IFwiV2Vic2l0ZXNcIiwgdXJsOiBcIndlYnNpdGVzXCIsIHN1YnJvdXRlczogXCJBZGQgV2Vic2l0ZSwgRWRpdCBXZWJzaXRlXCIsIHNob3dfaW5fbWVudTogdHJ1ZSwgYWxsb3dfcGFyYW1ldGVyczogZmFsc2V9LFxuICAgIHtuYW1lOiBcIkFkZCBXZWJzaXRlXCIsIHVybDogXCJ3ZWJzaXRlcy9hZGRcIiwgc2hvd19pbl9tZW51OiBmYWxzZSwgYWxsb3dfcGFyYW1ldGVyczogZmFsc2V9LFxuICAgIHtuYW1lOiBcIkVkaXQgV2Vic2l0ZVwiLCB1cmw6IFwid2Vic2l0ZXMvZWRpdFwiLCBzaG93X2luX21lbnU6IGZhbHNlLCBhbGxvd19wYXJhbWV0ZXJzOiB0cnVlfSxcbiAgICB7bmFtZTogXCJDYW1wYWlnbnNcIiwgdXJsOiBcImNhbXBhaWduc1wiLCBzaG93X2luX21lbnU6IHRydWUsIGFsbG93X3BhcmFtZXRlcnM6IGZhbHNlfSxcbiAgICB7bmFtZTogXCJNeSBBY2NvdW50XCIsIHVybDogXCJhY2NvdW50XCIsIHN1YnJvdXRlczogXCJFZGl0IEFjY291bnRcIiwgc2hvd19pbl9tZW51OiB0cnVlLCBhbGxvd19wYXJhbWV0ZXJzOiBmYWxzZX0sXG4gICAge25hbWU6IFwiRWRpdCBBY2NvdW50XCIsIHVybDogXCJhY2NvdW50L2VkaXRcIiwgc2hvd19pbl9tZW51OiBmYWxzZSwgYWxsb3dfcGFyYW1ldGVyczogZmFsc2V9LFxuICAgIHtuYW1lOiBcIlN1cHBvcnRcIiwgdXJsOiBcInN1cHBvcnRcIiwgc2hvd19pbl9tZW51OiB0cnVlLCBhbGxvd19wYXJhbWV0ZXJzOiBmYWxzZX1cbiAgXSxcblxuICBVUkxTIDoge1xuXG4gICAgXCJ2YWxpZGF0ZVwiIDogXCJodHRwOi8vMTkyLjE2OC4xNzguMjA6OTAwMC9hcGkvdjEvYXV0aC92YWxpZGF0ZS9cIixcbiAgICBcInVwZGF0ZVdlYnNpdGVcIiA6IFwiaHR0cDovLzE5Mi4xNjguMTc4LjIwOjkwMDAvYXBpL3YxL3dlYnNpdGUvdXBkYXRlXCIsXG4gICAgXCJhZGRXZWJzaXRlXCIgOiBcImh0dHA6Ly8xOTIuMTY4LjE3OC4yMDo5MDAwL2FwaS92MS93ZWJzaXRlL2FkZFwiLFxuICAgIFwiZGVsZXRlV2Vic2l0ZVwiIDogXCJodHRwOi8vMTkyLjE2OC4xNzguMjA6OTAwMC9hcGkvdjEvd2Vic2l0ZS9kZWxldGVcIixcbiAgICBcImxvZ2luXCIgOiAnaHR0cDovLzE5Mi4xNjguMTc4LjIwOjkwMDAvYXBpL3YxL2F1dGgvbG9naW4nLFxuICAgIFwicmVnaXN0ZXJcIiA6IFwiaHR0cDovLzE5Mi4xNjguMTc4LjIwOjkwMDAvYXBpL3YxL2FjY291bnQvYWRkXCIsXG4gICAgXCJ1cGRhdGVBY2NvdW50XCIgOiBcImh0dHA6Ly8xOTIuMTY4LjE3OC4yMDo5MDAwL2FwaS92MS9hY2NvdW50L3VwZGF0ZVwiXG5cbiAgfSxcblxuXG4gIE1PREUgOiBcIkRlYnVnXCJcblxufTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb25maWcuanNcIixcIi9cIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG52YXIgY29uZmlnID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xudmFyIEJhY2tib25lUm91dGVyID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9yb3V0ZXJcIik7XG5cbkFwcGxpY2F0aW9uID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9sYXlvdXRcIikuTGF5b3V0O1xuXG4vLyBMb2dpbiA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbGF5b3V0XCIpLkxvZ2luO1xuLy8gVG9wQmFyID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9sYXlvdXRcIikuVG9wQmFyO1xuLy8gTGVmdE1lbnUgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2xheW91dFwiKS5MZWZ0TWVudTtcbi8vIFdlYnNpdGVTZWxlY3RvciA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbGF5b3V0XCIpLldlYnNpdGVTZWxlY3Rvcjtcbi8vIENvbnRlbnQgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2xheW91dFwiKS5Db250ZW50O1xuLy8gUm91dGVyID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9sYXlvdXRcIikuUm91dGVyO1xuXG5cblxuXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAkKGRvY3VtZW50KS5mb3VuZGF0aW9uKCk7XG5cbn0oKTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9mYWtlX2ZmOWM3MjFjLmpzXCIsXCIvXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXG4gKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGNvbW1vbiBoZWxwZXIgZnVuY3Rpb25zIHdoaWNoIGV4dGVuZCBMby1EYXNoJ3MgXyBuYW1lc3BhY2UuXG4gKlxuICogQG5hbWVzcGFjZSBfXG4gKiBAYXV0aG9yIERocnV2IEJoYXRpYSA8ZGhydXZAZGhydXZiaGF0aWEuY29tPlxuICpcbiAqL1xuXG52YXIgQ09ORklHID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xuXG5fLm1peGluKHtcblxuICAvKipcbiAgICpcbiAgICogQ2hlY2tzIGZvciBhIHZhbGlkIHNlc3Npb24gY29va2llICYgcHVsbHMgZG93biBhbnkgdXBkYXRlcyBmcm9tIHRoZSBzZXJ2ZXIsXG4gICAqIG90aGVyd2lzZSBraWxscyB0aGUgY3VycmVudCBzZXNzaW9uIHdoaWNoIHNob3dzIHRoZSBMb2dpbiBzY3JlZW4uXG4gICAqXG4gICAqL1xuICBnZXRTZXNzaW9uOiBmdW5jdGlvbigpIHtcblxuXG4gICAgdmFyIGNvb2tpZSA9ICQuY29va2llKFwiYXBwbGljYXRpb25cIik7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKGNvb2tpZSkpIHtcblxuICAgICAgdmFyIHRva2VuID0gSlNPTi5wYXJzZShjb29raWUpLnNlc3Npb25JZDtcblxuICAgICAgc3VwZXJhZ2VudFxuICAgICAgICAuZ2V0KENPTkZJRy5VUkxTLnZhbGlkYXRlICsgdG9rZW4pXG4gICAgICAgIC5zZXQoJ1gtQVBJLUtleScsIHRva2VuKVxuICAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgICAgIC5lbmQoZnVuY3Rpb24oZXJyb3IsIHJlcykge1xuXG4gICAgICAgICAgaWYgKHJlcy5vayA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICB2YXIgc2Vzc2lvbklkID0gSlNPTi5wYXJzZShyZXMudGV4dCkuc2Vzc2lvbklkXG4gICAgICAgICAgICB2YXIgdXNlciA9IEpTT04ucGFyc2UocmVzLnRleHQpLnVzZXJcblxuICAgICAgICAgICAgdmFyIHVzZXJfd2Vic2l0ZXMgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS53ZWJzaXRlc1xuXG4gICAgICAgICAgICB2YXIgYWN0aXZlX3dlYnNpdGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIGlmICghXy5pc0VtcHR5KHVzZXJfd2Vic2l0ZXMpKSB7XG4gICAgICAgICAgICAgIC8vIHNldCBhY3RpdmUgd2Vic2l0ZSB0byB0aGUgbGFzdCBzZWxlY3RlZCB3ZWJzaXRlIGluIHRoZSBjb29raWUsIGVsc2UgZmlyc3Qgd2Vic2l0ZSBpbiB0aGUgdXNlcidzIGxpc3RcbiAgICAgICAgICAgICAgYWN0aXZlX3dlYnNpdGUgPSBKU09OLnBhcnNlKGNvb2tpZSkuYWN0aXZlX3dlYnNpdGU7XG5cblxuXG4gICAgICAgICAgICAgIGlmIChfLmlzRW1wdHkoXy5maW5kKHVzZXJfd2Vic2l0ZXMsIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IHBhcnNlSW50KGFjdGl2ZV93ZWJzaXRlKVxuICAgICAgICAgICAgICB9KSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVfd2Vic2l0ZSlcbiAgICAgICAgICAgICAgICBhY3RpdmVfd2Vic2l0ZSA9IF8uZmlyc3QodXNlcl93ZWJzaXRlcykuaWQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkLmNvb2tpZShcImFwcGxpY2F0aW9uXCIsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgXCJzZXNzaW9uSWRcIjogc2Vzc2lvbklkLFxuICAgICAgICAgICAgICBcImFjdGl2ZV93ZWJzaXRlXCI6IGFjdGl2ZV93ZWJzaXRlXG4gICAgICAgICAgICB9KSwge1xuICAgICAgICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgICAgICAgZXhwaXJlczogMTIwXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBzZWxmLnNldFdlYnNpdGUoYWN0aXZlX3dlYnNpdGUpO1xuXG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgICAgICAgYWN0aXZlX3dlYnNpdGU6IGFjdGl2ZV93ZWJzaXRlLFxuICAgICAgICAgICAgICB3ZWJzaXRlczogdXNlcl93ZWJzaXRlcyxcbiAgICAgICAgICAgICAgcmVuZGVyOiB0cnVlXG4gICAgICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAvLyBDb29raWUgbm8gbG9uZ2VyIHZhbGlkIC0gcmVuZGVyIGxvZ2luIGZvcm1cbiAgICAgICAgICAgIHNlbGYuc2V0VXNlcih1bmRlZmluZWQpO1xuICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHJlbmRlcjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgICAgIH0pO1xuXG5cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8vIE5vIHByZXYgY29va2llIC0gcmVuZGVyIGxvZ2luIGZvcm1cbiAgICAgIHNlbGYuc2V0VXNlcih1bmRlZmluZWQpO1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgIHJlbmRlcjogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICB9XG4gIH1cblxufSk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvdXRpbC5qc1wiLFwiL1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTJcblxuLyoqXG4gKiBJZiBgQnVmZmVyLl91c2VUeXBlZEFycmF5c2A6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChjb21wYXRpYmxlIGRvd24gdG8gSUU2KVxuICovXG5CdWZmZXIuX3VzZVR5cGVkQXJyYXlzID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gRGV0ZWN0IGlmIGJyb3dzZXIgc3VwcG9ydHMgVHlwZWQgQXJyYXlzLiBTdXBwb3J0ZWQgYnJvd3NlcnMgYXJlIElFIDEwKywgRmlyZWZveCA0KyxcbiAgLy8gQ2hyb21lIDcrLCBTYWZhcmkgNS4xKywgT3BlcmEgMTEuNissIGlPUyA0LjIrLiBJZiB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGFkZGluZ1xuICAvLyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsIHRoZW4gdGhhdCdzIHRoZSBzYW1lIGFzIG5vIGBVaW50OEFycmF5YCBzdXBwb3J0XG4gIC8vIGJlY2F1c2Ugd2UgbmVlZCB0byBiZSBhYmxlIHRvIGFkZCBhbGwgdGhlIG5vZGUgQnVmZmVyIEFQSSBtZXRob2RzLiBUaGlzIGlzIGFuIGlzc3VlXG4gIC8vIGluIEZpcmVmb3ggNC0yOS4gTm93IGZpeGVkOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzhcbiAgdHJ5IHtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKDApXG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICBhcnIuZm9vID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfVxuICAgIHJldHVybiA0MiA9PT0gYXJyLmZvbygpICYmXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgLy8gQ2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSkoKVxuXG4vKipcbiAqIENsYXNzOiBCdWZmZXJcbiAqID09PT09PT09PT09PT1cbiAqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGFyZSBhdWdtZW50ZWRcbiAqIHdpdGggZnVuY3Rpb24gcHJvcGVydGllcyBmb3IgYWxsIHRoZSBub2RlIGBCdWZmZXJgIEFQSSBmdW5jdGlvbnMuIFdlIHVzZVxuICogYFVpbnQ4QXJyYXlgIHNvIHRoYXQgc3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXQgcmV0dXJuc1xuICogYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogQnkgYXVnbWVudGluZyB0aGUgaW5zdGFuY2VzLCB3ZSBjYW4gYXZvaWQgbW9kaWZ5aW5nIHRoZSBgVWludDhBcnJheWBcbiAqIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gQnVmZmVyIChzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKVxuICAgIHJldHVybiBuZXcgQnVmZmVyKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pXG5cbiAgdmFyIHR5cGUgPSB0eXBlb2Ygc3ViamVjdFxuXG4gIC8vIFdvcmthcm91bmQ6IG5vZGUncyBiYXNlNjQgaW1wbGVtZW50YXRpb24gYWxsb3dzIGZvciBub24tcGFkZGVkIHN0cmluZ3NcbiAgLy8gd2hpbGUgYmFzZTY0LWpzIGRvZXMgbm90LlxuICBpZiAoZW5jb2RpbmcgPT09ICdiYXNlNjQnICYmIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgc3ViamVjdCA9IHN0cmluZ3RyaW0oc3ViamVjdClcbiAgICB3aGlsZSAoc3ViamVjdC5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgICBzdWJqZWN0ID0gc3ViamVjdCArICc9J1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbmQgdGhlIGxlbmd0aFxuICB2YXIgbGVuZ3RoXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJylcbiAgICBsZW5ndGggPSBjb2VyY2Uoc3ViamVjdClcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpXG4gICAgbGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoc3ViamVjdCwgZW5jb2RpbmcpXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKVxuICAgIGxlbmd0aCA9IGNvZXJjZShzdWJqZWN0Lmxlbmd0aCkgLy8gYXNzdW1lIHRoYXQgb2JqZWN0IGlzIGFycmF5LWxpa2VcbiAgZWxzZVxuICAgIHRocm93IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgbmVlZHMgdG8gYmUgYSBudW1iZXIsIGFycmF5IG9yIHN0cmluZy4nKVxuXG4gIHZhciBidWZcbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICAvLyBQcmVmZXJyZWQ6IFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgYnVmID0gQnVmZmVyLl9hdWdtZW50KG5ldyBVaW50OEFycmF5KGxlbmd0aCkpXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBUSElTIGluc3RhbmNlIG9mIEJ1ZmZlciAoY3JlYXRlZCBieSBgbmV3YClcbiAgICBidWYgPSB0aGlzXG4gICAgYnVmLmxlbmd0aCA9IGxlbmd0aFxuICAgIGJ1Zi5faXNCdWZmZXIgPSB0cnVlXG4gIH1cblxuICB2YXIgaVxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cyAmJiB0eXBlb2Ygc3ViamVjdC5ieXRlTGVuZ3RoID09PSAnbnVtYmVyJykge1xuICAgIC8vIFNwZWVkIG9wdGltaXphdGlvbiAtLSB1c2Ugc2V0IGlmIHdlJ3JlIGNvcHlpbmcgZnJvbSBhIHR5cGVkIGFycmF5XG4gICAgYnVmLl9zZXQoc3ViamVjdClcbiAgfSBlbHNlIGlmIChpc0FycmF5aXNoKHN1YmplY3QpKSB7XG4gICAgLy8gVHJlYXQgYXJyYXktaXNoIG9iamVjdHMgYXMgYSBieXRlIGFycmF5XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpKVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0LnJlYWRVSW50OChpKVxuICAgICAgZWxzZVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0W2ldXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgYnVmLndyaXRlKHN1YmplY3QsIDAsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmICFCdWZmZXIuX3VzZVR5cGVkQXJyYXlzICYmICFub1plcm8pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1ZltpXSA9IDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmXG59XG5cbi8vIFNUQVRJQyBNRVRIT0RTXG4vLyA9PT09PT09PT09PT09PVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAncmF3JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gKGIpIHtcbiAgcmV0dXJuICEhKGIgIT09IG51bGwgJiYgYiAhPT0gdW5kZWZpbmVkICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGZ1bmN0aW9uIChzdHIsIGVuY29kaW5nKSB7XG4gIHZhciByZXRcbiAgc3RyID0gc3RyICsgJydcbiAgc3dpdGNoIChlbmNvZGluZyB8fCAndXRmOCcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAvIDJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gdXRmOFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAncmF3JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggKiAyXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIChsaXN0LCB0b3RhbExlbmd0aCkge1xuICBhc3NlcnQoaXNBcnJheShsaXN0KSwgJ1VzYWdlOiBCdWZmZXIuY29uY2F0KGxpc3QsIFt0b3RhbExlbmd0aF0pXFxuJyArXG4gICAgICAnbGlzdCBzaG91bGQgYmUgYW4gQXJyYXkuJylcblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcigwKVxuICB9IGVsc2UgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGxpc3RbMF1cbiAgfVxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdG90YWxMZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgdG90YWxMZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvdGFsTGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIodG90YWxMZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgaXRlbS5jb3B5KGJ1ZiwgcG9zKVxuICAgIHBvcyArPSBpdGVtLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZcbn1cblxuLy8gQlVGRkVSIElOU1RBTkNFIE1FVEhPRFNcbi8vID09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIF9oZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGFzc2VydChzdHJMZW4gJSAyID09PSAwLCAnSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGJ5dGUgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgYXNzZXJ0KCFpc05hTihieXRlKSwgJ0ludmFsaWQgaGV4IHN0cmluZycpXG4gICAgYnVmW29mZnNldCArIGldID0gYnl0ZVxuICB9XG4gIEJ1ZmZlci5fY2hhcnNXcml0dGVuID0gaSAqIDJcbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gX3V0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF9hc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF9iaW5hcnlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBfYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIF9iYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX3V0ZjE2bGVXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gU3VwcG9ydCBib3RoIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZylcbiAgLy8gYW5kIHRoZSBsZWdhY3kgKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIGlmICghaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHsgIC8vIGxlZ2FjeVxuICAgIHZhciBzd2FwID0gZW5jb2RpbmdcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIG9mZnNldCA9IGxlbmd0aFxuICAgIGxlbmd0aCA9IHN3YXBcbiAgfVxuXG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IF9oZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSBfdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IF9hc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBfYmluYXJ5V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IF9iYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gX3V0ZjE2bGVXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG4gIHN0YXJ0ID0gTnVtYmVyKHN0YXJ0KSB8fCAwXG4gIGVuZCA9IChlbmQgIT09IHVuZGVmaW5lZClcbiAgICA/IE51bWJlcihlbmQpXG4gICAgOiBlbmQgPSBzZWxmLmxlbmd0aFxuXG4gIC8vIEZhc3RwYXRoIGVtcHR5IHN0cmluZ3NcbiAgaWYgKGVuZCA9PT0gc3RhcnQpXG4gICAgcmV0dXJuICcnXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IF9oZXhTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSBfdXRmOFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IF9hc2NpaVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBfYmluYXJ5U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IF9iYXNlNjRTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gX3V0ZjE2bGVTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldF9zdGFydCwgc3RhcnQsIGVuZCkge1xuICB2YXIgc291cmNlID0gdGhpc1xuXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICghdGFyZ2V0X3N0YXJ0KSB0YXJnZXRfc3RhcnQgPSAwXG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgc291cmNlLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBhc3NlcnQoZW5kID49IHN0YXJ0LCAnc291cmNlRW5kIDwgc291cmNlU3RhcnQnKVxuICBhc3NlcnQodGFyZ2V0X3N0YXJ0ID49IDAgJiYgdGFyZ2V0X3N0YXJ0IDwgdGFyZ2V0Lmxlbmd0aCxcbiAgICAgICd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KHN0YXJ0ID49IDAgJiYgc3RhcnQgPCBzb3VyY2UubGVuZ3RoLCAnc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChlbmQgPj0gMCAmJiBlbmQgPD0gc291cmNlLmxlbmd0aCwgJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpXG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgPCBlbmQgLSBzdGFydClcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0ICsgc3RhcnRcblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcblxuICBpZiAobGVuIDwgMTAwIHx8ICFCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0X3N0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5fc2V0KHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSwgdGFyZ2V0X3N0YXJ0KVxuICB9XG59XG5cbmZ1bmN0aW9uIF9iYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gX3V0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXMgPSAnJ1xuICB2YXIgdG1wID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgaWYgKGJ1ZltpXSA8PSAweDdGKSB7XG4gICAgICByZXMgKz0gZGVjb2RlVXRmOENoYXIodG1wKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICAgICAgdG1wID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgdG1wICs9ICclJyArIGJ1ZltpXS50b1N0cmluZygxNilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzICsgZGVjb2RlVXRmOENoYXIodG1wKVxufVxuXG5mdW5jdGlvbiBfYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspXG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIF9iaW5hcnlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHJldHVybiBfYXNjaWlTbGljZShidWYsIHN0YXJ0LCBlbmQpXG59XG5cbmZ1bmN0aW9uIF9oZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIF91dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2krMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gY2xhbXAoc3RhcnQsIGxlbiwgMClcbiAgZW5kID0gY2xhbXAoZW5kLCBsZW4sIGxlbilcblxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIHJldHVybiBCdWZmZXIuX2F1Z21lbnQodGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSlcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIHZhciBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQsIHRydWUpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgaSsrKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0J1ZlxuICB9XG59XG5cbi8vIGBnZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5nZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLnJlYWRVSW50OChvZmZzZXQpXG59XG5cbi8vIGBzZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2LCBvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5zZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLndyaXRlVUludDgodiwgb2Zmc2V0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5mdW5jdGlvbiBfcmVhZFVJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdXG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgfSBlbHNlIHtcbiAgICB2YWwgPSBidWZbb2Zmc2V0XSA8PCA4XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQxNih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQxNih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRVSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsXG4gIGlmIChsaXR0bGVFbmRpYW4pIHtcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCA9IGJ1ZltvZmZzZXQgKyAyXSA8PCAxNlxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXSA8PCA4XG4gICAgdmFsIHw9IGJ1ZltvZmZzZXRdXG4gICAgaWYgKG9mZnNldCArIDMgPCBsZW4pXG4gICAgICB2YWwgPSB2YWwgKyAoYnVmW29mZnNldCArIDNdIDw8IDI0ID4+PiAwKVxuICB9IGVsc2Uge1xuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDFdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDIgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDJdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgM11cbiAgICB2YWwgPSB2YWwgKyAoYnVmW29mZnNldF0gPDwgMjQgPj4+IDApXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQzMih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQzMih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLFxuICAgICAgICAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgdmFyIG5lZyA9IHRoaXNbb2Zmc2V0XSAmIDB4ODBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbmZ1bmN0aW9uIF9yZWFkSW50MTYgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gX3JlYWRVSW50MTYoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgdHJ1ZSlcbiAgdmFyIG5lZyA9IHZhbCAmIDB4ODAwMFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZmZmIC0gdmFsICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MTYodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDE2KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZEludDMyIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbCA9IF9yZWFkVUludDMyKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIHRydWUpXG4gIHZhciBuZWcgPSB2YWwgJiAweDgwMDAwMDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmZmZmZmIC0gdmFsICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MzIodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDMyKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZEZsb2F0IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHJldHVybiBpZWVlNzU0LnJlYWQoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRmxvYXQodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkRG91YmxlIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgKyA3IDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHJldHVybiBpZWVlNzU0LnJlYWQoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRG91YmxlKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRG91YmxlKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZilcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpIHJldHVyblxuXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG59XG5cbmZ1bmN0aW9uIF93cml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgMik7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmZmZmZmZmKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihsZW4gLSBvZmZzZXQsIDQpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID1cbiAgICAgICAgKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmLCAtMHg4MClcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgdGhpcy53cml0ZVVJbnQ4KHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgdGhpcy53cml0ZVVJbnQ4KDB4ZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2ZmZiwgLTB4ODAwMClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIF93cml0ZVVJbnQxNihidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICBfd3JpdGVVSW50MTYoYnVmLCAweGZmZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICBfd3JpdGVVSW50MzIoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgX3dyaXRlVUludDMyKGJ1ZiwgMHhmZmZmZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZJRUVFNzU0KHZhbHVlLCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgNyA8IGJ1Zi5sZW5ndGgsXG4gICAgICAgICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmSUVFRTc1NCh2YWx1ZSwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gZmlsbCh2YWx1ZSwgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAodmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCF2YWx1ZSkgdmFsdWUgPSAwXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCkgZW5kID0gdGhpcy5sZW5ndGhcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHZhbHVlID0gdmFsdWUuY2hhckNvZGVBdCgwKVxuICB9XG5cbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbHVlKSwgJ3ZhbHVlIGlzIG5vdCBhIG51bWJlcicpXG4gIGFzc2VydChlbmQgPj0gc3RhcnQsICdlbmQgPCBzdGFydCcpXG5cbiAgLy8gRmlsbCAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICBhc3NlcnQoc3RhcnQgPj0gMCAmJiBzdGFydCA8IHRoaXMubGVuZ3RoLCAnc3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChlbmQgPj0gMCAmJiBlbmQgPD0gdGhpcy5sZW5ndGgsICdlbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICB0aGlzW2ldID0gdmFsdWVcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvdXQgPSBbXVxuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIG91dFtpXSA9IHRvSGV4KHRoaXNbaV0pXG4gICAgaWYgKGkgPT09IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMpIHtcbiAgICAgIG91dFtpICsgMV0gPSAnLi4uJ1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBvdXQuam9pbignICcpICsgJz4nXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlCdWZmZXJgIHdpdGggdGhlICpjb3BpZWQqIG1lbW9yeSBvZiB0aGUgYnVmZmVyIGluc3RhbmNlLlxuICogQWRkZWQgaW4gTm9kZSAwLjEyLiBPbmx5IGF2YWlsYWJsZSBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgQXJyYXlCdWZmZXIuXG4gKi9cbkJ1ZmZlci5wcm90b3R5cGUudG9BcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgICByZXR1cm4gKG5ldyBCdWZmZXIodGhpcykpLmJ1ZmZlclxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYnVmID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5sZW5ndGgpXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnVmLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKVxuICAgICAgICBidWZbaV0gPSB0aGlzW2ldXG4gICAgICByZXR1cm4gYnVmLmJ1ZmZlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0J1ZmZlci50b0FycmF5QnVmZmVyIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJylcbiAgfVxufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbnZhciBCUCA9IEJ1ZmZlci5wcm90b3R5cGVcblxuLyoqXG4gKiBBdWdtZW50IGEgVWludDhBcnJheSAqaW5zdGFuY2UqIChub3QgdGhlIFVpbnQ4QXJyYXkgY2xhc3MhKSB3aXRoIEJ1ZmZlciBtZXRob2RzXG4gKi9cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9pc0J1ZmZlciA9IHRydWVcblxuICAvLyBzYXZlIHJlZmVyZW5jZSB0byBvcmlnaW5hbCBVaW50OEFycmF5IGdldC9zZXQgbWV0aG9kcyBiZWZvcmUgb3ZlcndyaXRpbmdcbiAgYXJyLl9nZXQgPSBhcnIuZ2V0XG4gIGFyci5fc2V0ID0gYXJyLnNldFxuXG4gIC8vIGRlcHJlY2F0ZWQsIHdpbGwgYmUgcmVtb3ZlZCBpbiBub2RlIDAuMTMrXG4gIGFyci5nZXQgPSBCUC5nZXRcbiAgYXJyLnNldCA9IEJQLnNldFxuXG4gIGFyci53cml0ZSA9IEJQLndyaXRlXG4gIGFyci50b1N0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0xvY2FsZVN0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0pTT04gPSBCUC50b0pTT05cbiAgYXJyLmNvcHkgPSBCUC5jb3B5XG4gIGFyci5zbGljZSA9IEJQLnNsaWNlXG4gIGFyci5yZWFkVUludDggPSBCUC5yZWFkVUludDhcbiAgYXJyLnJlYWRVSW50MTZMRSA9IEJQLnJlYWRVSW50MTZMRVxuICBhcnIucmVhZFVJbnQxNkJFID0gQlAucmVhZFVJbnQxNkJFXG4gIGFyci5yZWFkVUludDMyTEUgPSBCUC5yZWFkVUludDMyTEVcbiAgYXJyLnJlYWRVSW50MzJCRSA9IEJQLnJlYWRVSW50MzJCRVxuICBhcnIucmVhZEludDggPSBCUC5yZWFkSW50OFxuICBhcnIucmVhZEludDE2TEUgPSBCUC5yZWFkSW50MTZMRVxuICBhcnIucmVhZEludDE2QkUgPSBCUC5yZWFkSW50MTZCRVxuICBhcnIucmVhZEludDMyTEUgPSBCUC5yZWFkSW50MzJMRVxuICBhcnIucmVhZEludDMyQkUgPSBCUC5yZWFkSW50MzJCRVxuICBhcnIucmVhZEZsb2F0TEUgPSBCUC5yZWFkRmxvYXRMRVxuICBhcnIucmVhZEZsb2F0QkUgPSBCUC5yZWFkRmxvYXRCRVxuICBhcnIucmVhZERvdWJsZUxFID0gQlAucmVhZERvdWJsZUxFXG4gIGFyci5yZWFkRG91YmxlQkUgPSBCUC5yZWFkRG91YmxlQkVcbiAgYXJyLndyaXRlVUludDggPSBCUC53cml0ZVVJbnQ4XG4gIGFyci53cml0ZVVJbnQxNkxFID0gQlAud3JpdGVVSW50MTZMRVxuICBhcnIud3JpdGVVSW50MTZCRSA9IEJQLndyaXRlVUludDE2QkVcbiAgYXJyLndyaXRlVUludDMyTEUgPSBCUC53cml0ZVVJbnQzMkxFXG4gIGFyci53cml0ZVVJbnQzMkJFID0gQlAud3JpdGVVSW50MzJCRVxuICBhcnIud3JpdGVJbnQ4ID0gQlAud3JpdGVJbnQ4XG4gIGFyci53cml0ZUludDE2TEUgPSBCUC53cml0ZUludDE2TEVcbiAgYXJyLndyaXRlSW50MTZCRSA9IEJQLndyaXRlSW50MTZCRVxuICBhcnIud3JpdGVJbnQzMkxFID0gQlAud3JpdGVJbnQzMkxFXG4gIGFyci53cml0ZUludDMyQkUgPSBCUC53cml0ZUludDMyQkVcbiAgYXJyLndyaXRlRmxvYXRMRSA9IEJQLndyaXRlRmxvYXRMRVxuICBhcnIud3JpdGVGbG9hdEJFID0gQlAud3JpdGVGbG9hdEJFXG4gIGFyci53cml0ZURvdWJsZUxFID0gQlAud3JpdGVEb3VibGVMRVxuICBhcnIud3JpdGVEb3VibGVCRSA9IEJQLndyaXRlRG91YmxlQkVcbiAgYXJyLmZpbGwgPSBCUC5maWxsXG4gIGFyci5pbnNwZWN0ID0gQlAuaW5zcGVjdFxuICBhcnIudG9BcnJheUJ1ZmZlciA9IEJQLnRvQXJyYXlCdWZmZXJcblxuICByZXR1cm4gYXJyXG59XG5cbi8vIHNsaWNlKHN0YXJ0LCBlbmQpXG5mdW5jdGlvbiBjbGFtcCAoaW5kZXgsIGxlbiwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSByZXR1cm4gZGVmYXVsdFZhbHVlXG4gIGluZGV4ID0gfn5pbmRleDsgIC8vIENvZXJjZSB0byBpbnRlZ2VyLlxuICBpZiAoaW5kZXggPj0gbGVuKSByZXR1cm4gbGVuXG4gIGlmIChpbmRleCA+PSAwKSByZXR1cm4gaW5kZXhcbiAgaW5kZXggKz0gbGVuXG4gIGlmIChpbmRleCA+PSAwKSByZXR1cm4gaW5kZXhcbiAgcmV0dXJuIDBcbn1cblxuZnVuY3Rpb24gY29lcmNlIChsZW5ndGgpIHtcbiAgLy8gQ29lcmNlIGxlbmd0aCB0byBhIG51bWJlciAocG9zc2libHkgTmFOKSwgcm91bmQgdXBcbiAgLy8gaW4gY2FzZSBpdCdzIGZyYWN0aW9uYWwgKGUuZy4gMTIzLjQ1NikgdGhlbiBkbyBhXG4gIC8vIGRvdWJsZSBuZWdhdGUgdG8gY29lcmNlIGEgTmFOIHRvIDAuIEVhc3ksIHJpZ2h0P1xuICBsZW5ndGggPSB+fk1hdGguY2VpbCgrbGVuZ3RoKVxuICByZXR1cm4gbGVuZ3RoIDwgMCA/IDAgOiBsZW5ndGhcbn1cblxuZnVuY3Rpb24gaXNBcnJheSAoc3ViamVjdCkge1xuICByZXR1cm4gKEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHN1YmplY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN1YmplY3QpID09PSAnW29iamVjdCBBcnJheV0nXG4gIH0pKHN1YmplY3QpXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlpc2ggKHN1YmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc3ViamVjdCkgfHwgQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpIHx8XG4gICAgICBzdWJqZWN0ICYmIHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIHN1YmplY3QubGVuZ3RoID09PSAnbnVtYmVyJ1xufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGIgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGlmIChiIDw9IDB4N0YpXG4gICAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSlcbiAgICBlbHNlIHtcbiAgICAgIHZhciBzdGFydCA9IGlcbiAgICAgIGlmIChiID49IDB4RDgwMCAmJiBiIDw9IDB4REZGRikgaSsrXG4gICAgICB2YXIgaCA9IGVuY29kZVVSSUNvbXBvbmVudChzdHIuc2xpY2Uoc3RhcnQsIGkrMSkpLnN1YnN0cigxKS5zcGxpdCgnJScpXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGgubGVuZ3RoOyBqKyspXG4gICAgICAgIGJ5dGVBcnJheS5wdXNoKHBhcnNlSW50KGhbal0sIDE2KSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoc3RyKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIHBvc1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKVxuICAgICAgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBkZWNvZGVVdGY4Q2hhciAoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCkgLy8gVVRGIDggaW52YWxpZCBjaGFyXG4gIH1cbn1cblxuLypcbiAqIFdlIGhhdmUgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHZhbHVlIGlzIGEgdmFsaWQgaW50ZWdlci4gVGhpcyBtZWFucyB0aGF0IGl0XG4gKiBpcyBub24tbmVnYXRpdmUuIEl0IGhhcyBubyBmcmFjdGlvbmFsIGNvbXBvbmVudCBhbmQgdGhhdCBpdCBkb2VzIG5vdFxuICogZXhjZWVkIHRoZSBtYXhpbXVtIGFsbG93ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHZlcmlmdWludCAodmFsdWUsIG1heCkge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPj0gMCwgJ3NwZWNpZmllZCBhIG5lZ2F0aXZlIHZhbHVlIGZvciB3cml0aW5nIGFuIHVuc2lnbmVkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGlzIGxhcmdlciB0aGFuIG1heGltdW0gdmFsdWUgZm9yIHR5cGUnKVxuICBhc3NlcnQoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlLCAndmFsdWUgaGFzIGEgZnJhY3Rpb25hbCBjb21wb25lbnQnKVxufVxuXG5mdW5jdGlvbiB2ZXJpZnNpbnQgKHZhbHVlLCBtYXgsIG1pbikge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgbGFyZ2VyIHRoYW4gbWF4aW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlID49IG1pbiwgJ3ZhbHVlIHNtYWxsZXIgdGhhbiBtaW5pbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlLCAndmFsdWUgaGFzIGEgZnJhY3Rpb25hbCBjb21wb25lbnQnKVxufVxuXG5mdW5jdGlvbiB2ZXJpZklFRUU3NTQgKHZhbHVlLCBtYXgsIG1pbikge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgbGFyZ2VyIHRoYW4gbWF4aW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlID49IG1pbiwgJ3ZhbHVlIHNtYWxsZXIgdGhhbiBtaW5pbXVtIGFsbG93ZWQgdmFsdWUnKVxufVxuXG5mdW5jdGlvbiBhc3NlcnQgKHRlc3QsIG1lc3NhZ2UpIHtcbiAgaWYgKCF0ZXN0KSB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSB8fCAnRmFpbGVkIGFzc2VydGlvbicpXG59XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlclwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbnZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbjsoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBBcnIgPSAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgID8gVWludDhBcnJheVxuICAgIDogQXJyYXlcblxuXHR2YXIgWkVSTyAgID0gJzAnLmNoYXJDb2RlQXQoMClcblx0dmFyIFBMVVMgICA9ICcrJy5jaGFyQ29kZUF0KDApXG5cdHZhciBTTEFTSCAgPSAnLycuY2hhckNvZGVBdCgwKVxuXHR2YXIgTlVNQkVSID0gJzAnLmNoYXJDb2RlQXQoMClcblx0dmFyIExPV0VSICA9ICdhJy5jaGFyQ29kZUF0KDApXG5cdHZhciBVUFBFUiAgPSAnQScuY2hhckNvZGVBdCgwKVxuXG5cdGZ1bmN0aW9uIGRlY29kZSAoZWx0KSB7XG5cdFx0dmFyIGNvZGUgPSBlbHQuY2hhckNvZGVBdCgwKVxuXHRcdGlmIChjb2RlID09PSBQTFVTKVxuXHRcdFx0cmV0dXJuIDYyIC8vICcrJ1xuXHRcdGlmIChjb2RlID09PSBTTEFTSClcblx0XHRcdHJldHVybiA2MyAvLyAnLydcblx0XHRpZiAoY29kZSA8IE5VTUJFUilcblx0XHRcdHJldHVybiAtMSAvL25vIG1hdGNoXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIgKyAxMClcblx0XHRcdHJldHVybiBjb2RlIC0gTlVNQkVSICsgMjYgKyAyNlxuXHRcdGlmIChjb2RlIDwgVVBQRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gVVBQRVJcblx0XHRpZiAoY29kZSA8IExPV0VSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIExPV0VSICsgMjZcblx0fVxuXG5cdGZ1bmN0aW9uIGI2NFRvQnl0ZUFycmF5IChiNjQpIHtcblx0XHR2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuXG5cdFx0aWYgKGI2NC5sZW5ndGggJSA0ID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0Jylcblx0XHR9XG5cblx0XHQvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuXHRcdC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcblx0XHQvLyByZXByZXNlbnQgb25lIGJ5dGVcblx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcblx0XHQvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG5cdFx0dmFyIGxlbiA9IGI2NC5sZW5ndGhcblx0XHRwbGFjZUhvbGRlcnMgPSAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMikgPyAyIDogJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDEpID8gMSA6IDBcblxuXHRcdC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuXHRcdGFyciA9IG5ldyBBcnIoYjY0Lmxlbmd0aCAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuXHRcdGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gYjY0Lmxlbmd0aCAtIDQgOiBiNjQubGVuZ3RoXG5cblx0XHR2YXIgTCA9IDBcblxuXHRcdGZ1bmN0aW9uIHB1c2ggKHYpIHtcblx0XHRcdGFycltMKytdID0gdlxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTgpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPDwgNikgfCBkZWNvZGUoYjY0LmNoYXJBdChpICsgMykpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDAwMCkgPj4gMTYpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDApID4+IDgpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpID4+IDQpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTApIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA+PiAyKVxuXHRcdFx0cHVzaCgodG1wID4+IDgpICYgMHhGRilcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyXG5cdH1cblxuXHRmdW5jdGlvbiB1aW50OFRvQmFzZTY0ICh1aW50OCkge1xuXHRcdHZhciBpLFxuXHRcdFx0ZXh0cmFCeXRlcyA9IHVpbnQ4Lmxlbmd0aCAlIDMsIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG5cdFx0XHRvdXRwdXQgPSBcIlwiLFxuXHRcdFx0dGVtcCwgbGVuZ3RoXG5cblx0XHRmdW5jdGlvbiBlbmNvZGUgKG51bSkge1xuXHRcdFx0cmV0dXJuIGxvb2t1cC5jaGFyQXQobnVtKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKG51bSA+PiAxOCAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiAxMiAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiA2ICYgMHgzRikgKyBlbmNvZGUobnVtICYgMHgzRilcblx0XHR9XG5cblx0XHQvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG5cdFx0Zm9yIChpID0gMCwgbGVuZ3RoID0gdWludDgubGVuZ3RoIC0gZXh0cmFCeXRlczsgaSA8IGxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHR0ZW1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuXHRcdFx0b3V0cHV0ICs9IHRyaXBsZXRUb0Jhc2U2NCh0ZW1wKVxuXHRcdH1cblxuXHRcdC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcblx0XHRzd2l0Y2ggKGV4dHJhQnl0ZXMpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGVtcCA9IHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAyKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9PSdcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGVtcCA9ICh1aW50OFt1aW50OC5sZW5ndGggLSAyXSA8PCA4KSArICh1aW50OFt1aW50OC5sZW5ndGggLSAxXSlcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDEwKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wID4+IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCAyKSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPSdcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cblxuXHRtb2R1bGUuZXhwb3J0cy50b0J5dGVBcnJheSA9IGI2NFRvQnl0ZUFycmF5XG5cdG1vZHVsZS5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSB1aW50OFRvQmFzZTY0XG59KCkpXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWJcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5leHBvcnRzLnJlYWQgPSBmdW5jdGlvbihidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIG5CaXRzID0gLTcsXG4gICAgICBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDAsXG4gICAgICBkID0gaXNMRSA/IC0xIDogMSxcbiAgICAgIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV07XG5cbiAgaSArPSBkO1xuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBzID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gZUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIGUgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBtTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXM7XG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KTtcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pO1xuICAgIGUgPSBlIC0gZUJpYXM7XG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbik7XG59O1xuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24oYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGMsXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApLFxuICAgICAgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpLFxuICAgICAgZCA9IGlzTEUgPyAxIDogLTEsXG4gICAgICBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwO1xuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpO1xuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwO1xuICAgIGUgPSBlTWF4O1xuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKTtcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS07XG4gICAgICBjICo9IDI7XG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcyk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrO1xuICAgICAgYyAvPSAyO1xuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDA7XG4gICAgICBlID0gZU1heDtcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gZSArIGVCaWFzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gMDtcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KTtcblxuICBlID0gKGUgPDwgbUxlbikgfCBtO1xuICBlTGVuICs9IG1MZW47XG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCk7XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4O1xufTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanNcIixcIi8uLi8uLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0XCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB2YXIgcXVldWUgPSBbXTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3NcIikiXX0=
