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
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":12,"buffer":9}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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

    this.setState({path: path})

    document.title = this.state.path + " | " + CONFIG.WEBSITE_NAME;

  },

  componentDidMount: function() {

    _.getSession.call(this);

  },

  setPos: function(url, pos) {

    _.getSession.call(this);

    // Onboarding screen if no websites exist


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

var Login = React.createClass({displayName: 'Login',

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
      .post(CONFIG.URLS.login)
      //.send({ name: 'Manny', species: 'cat' })
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
        //console.log(document.cookie)

        

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
              React.DOM.small( {className:"error"}, "Email cannot be blank")
              )
    }
  };

  var password_blank = function() {
    if(self.state.password_blank === true) {
      return (
              React.DOM.small( {className:"error"}, "Password cannot be blank")
              )
    }
  };

  var server_error = function() {
    if(self.state.server_error !== undefined) {
      return (
              React.DOM.small( {className:"error"}, self.state.server_error)
              )
    }
  };

  return (
          React.DOM.div( {id:"login", className:"row"}, 
          React.DOM.div( {className:"panel"}, 
          React.DOM.h1(null, "Login to Web App"),
          "Please login to access Web App.",
          React.DOM.hr(null ),
          server_error(),
          React.DOM.form(null, 
          React.DOM.label(null, "Email",
          React.DOM.input( {id:"email", type:"text", placeholder:"Email"} ),
          email_blank()

          ),
          React.DOM.label(null, "Password",
          React.DOM.input( {id:"password", type:"password", placeholder:"Password"} ),
          password_blank()
          ),
          React.DOM.button( {onClick:this.login, className:"button radius expand"}, "Login")
          )
          )
          )
          );
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
    this.props.setUser(undefined);

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
},{"../config":6,"../util":8,"./dashboard":1,"./my-account":3,"./router":4,"./website":5,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":12,"buffer":9}],3:[function(require,module,exports){
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
},{"../config":6,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":12,"buffer":9}],4:[function(require,module,exports){
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
},{"../config":6,"./layout":2,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":12,"buffer":9}],5:[function(require,module,exports){
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
             React.DOM.tr( {id:website.id}, 
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

    return {name_error: false, url_error: false, sender_name_error: false, sender_email_error: false, server_error: undefined};

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
      self.setState({name_error: false});
    };

    if(_.isEmpty(url)) {
      self.setState({url_error: "URL cannot be blank"});
    } else {
      self.setState({url_error: false});
    };

    if(_.isEmpty(sender_name)) {
      self.setState({sender_name_error: "Sender Name cannot be blank"});
    } else {
      self.setState({sender_name_error: false});
    };

    if(_.isEmpty(sender_email)) {
      self.setState({sender_email_error: "Sender Email cannot be blank"});
    } else {
      self.setState({sender_email_error: false});
    };

// send to server if client validation passes
if(!_.some([_.isEmpty(name), _.isEmpty(url), _.isEmpty(sender_name), _.isEmpty(sender_email)])) {

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
              React.DOM.small( {className:"error"}, self.state.server_error)
              )
    }
  };

  var name_error = function() {
    if(self.state.name_error !== false) {
      return (
              React.DOM.small( {className:"error"}, self.state.name_error)
              )
    }
  };

  var url_error = function() {
    if(self.state.url_error !== false) {
      return (
              React.DOM.small( {className:"error"}, self.state.url_error)
              )
    }
  };

  var sender_name_error = function() {
    if(self.state.sender_name_error !== false) {
      return (
              React.DOM.small( {className:"error"}, self.state.sender_name_error)
              )
    }
  };

  var sender_email_error = function() {
    if(self.state.sender_email_error !== false) {
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

    return {name_error: false, url_error: false, sender_name_error: false, sender_email_error: false, server_error: undefined};

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
      self.setState({name_error: false});
    };

    if(_.isEmpty(url)) {
      self.setState({url_error: "URL cannot be blank"});
    } else {
      self.setState({url_error: false});
    };

    if(_.isEmpty(sender_name)) {
      self.setState({sender_name_error: "Sender Name cannot be blank"});
    } else {
      self.setState({sender_name_error: false});
    };

    if(_.isEmpty(sender_email)) {
      self.setState({sender_email_error: "Sender Email cannot be blank"});
    } else {
      self.setState({sender_email_error: false});
    };

// send to server if client validation passes
if(!_.some([_.isEmpty(name), _.isEmpty(url), _.isEmpty(sender_name), _.isEmpty(sender_email)])) {

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
              self.props.setLoggedIn(undefined);
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
    if(self.state.name_error !== false) {
      return (
              React.DOM.small( {className:"error"}, self.state.name_error)
              )
    }
  };

  var url_error = function() {
    if(self.state.url_error !== false) {
      return (
              React.DOM.small( {className:"error"}, self.state.url_error)
              )
    }
  };

  var sender_name_error = function() {
    if(self.state.sender_name_error !== false) {
      return (
              React.DOM.small( {className:"error"}, self.state.sender_name_error)
              )
    }
  };

  var sender_email_error = function() {
    if(self.state.sender_email_error !== false) {
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
},{"../config":6,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":12,"buffer":9}],6:[function(require,module,exports){
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
    "updateUser" : "http://192.168.178.20:9000/api/v1/user/update"

  },


  MODE : "Debug"

};
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/config.js","/")
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":12,"buffer":9}],7:[function(require,module,exports){
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
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_1eccda48.js","/")
},{"./components/layout":2,"./components/router":4,"./config":6,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":12,"buffer":9}],8:[function(require,module,exports){
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
},{"./config":6,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":12,"buffer":9}],9:[function(require,module,exports){
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
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":12,"base64-js":10,"buffer":9,"ieee754":11}],10:[function(require,module,exports){
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
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":12,"buffer":9}],11:[function(require,module,exports){
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
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":12,"buffer":9}],12:[function(require,module,exports){
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
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":12,"buffer":9}]},{},[7])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL2FwcC9zY3JpcHRzL2NvbXBvbmVudHMvZGFzaGJvYXJkLmpzeCIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvYXBwL3NjcmlwdHMvY29tcG9uZW50cy9sYXlvdXQuanN4IiwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9hcHAvc2NyaXB0cy9jb21wb25lbnRzL215LWFjY291bnQuanN4IiwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9hcHAvc2NyaXB0cy9jb21wb25lbnRzL3JvdXRlci5qc3giLCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL2FwcC9zY3JpcHRzL2NvbXBvbmVudHMvd2Vic2l0ZS5qc3giLCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL2FwcC9zY3JpcHRzL2NvbmZpZy5qcyIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvYXBwL3NjcmlwdHMvZmFrZV8xZWNjZGE0OC5qcyIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvYXBwL3NjcmlwdHMvdXRpbC5qcyIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanMiLCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeGxCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2bENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqIEBqc3ggUmVhY3QuRE9NICovXG5cbnZhciBEYXNoYm9hcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdEYXNoYm9hcmQnLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYobnVsbCwgXG4gICAgICAgICAgICBSZWFjdC5ET00ucChudWxsLCB0aGlzLnByb3BzLnBhdGgpLFxuXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIERvbmVjIG51bGxhIG5pc2wsIGZlcm1lbnR1bSBzaXQgYW1ldCBqdXN0byB2ZWwsIGNvbW1vZG8gaGVuZHJlcml0IG1ldHVzLiBRdWlzcXVlIGRpZ25pc3NpbSBldSBzYXBpZW4gdmVsIG9ybmFyZS4gTnVsbGEgdnVscHV0YXRlIGR1aSBldCBsb3JlbSB2dWxwdXRhdGUgZmVybWVudHVtLiBNYXVyaXMgdnVscHV0YXRlIGZhY2lsaXNpcyB1cm5hIHZlbCBmcmluZ2lsbGEuIFN1c3BlbmRpc3NlIGNvbmd1ZSBncmF2aWRhIHJpc3VzIGVnZXQgYWxpcXVldC4gQ3JhcyBhIGltcGVyZGlldCBudWxsYSwgc2l0IGFtZXQgY29udmFsbGlzIG9kaW8uIEFlbmVhbiBlcmF0IGVyYXQsIGVsZW1lbnR1bSBzaXQgYW1ldCBhcmN1IHF1aXMsIGFjY3Vtc2FuIGNvbW1vZG8gc2FwaWVuLiBNYWVjZW5hcyBsYWNpbmlhIGVzdCBxdWlzIG1hc3NhIHVsdHJpY2llcyB1bHRyaWNpZXMuIERvbmVjIG1hdXJpcyBtaSwgYWNjdW1zYW4gYWMgZXJhdCBldCwgc29sbGljaXR1ZGluIGZyaW5naWxsYSBtYXVyaXMuIE51bmMgdmFyaXVzIGZlcm1lbnR1bSBjb25zZWN0ZXR1ci4gU3VzcGVuZGlzc2UgbWF0dGlzIGR1aSBuZWMgZWdlc3RhcyB1bHRyaWNlcy4gU2VkIHNvZGFsZXMgaWQgdHVycGlzIHV0IHNhZ2l0dGlzLiBTdXNwZW5kaXNzZSBpbnRlcmR1bSB0cmlzdGlxdWUgZWxpdC4gUGhhc2VsbHVzIHNpdCBhbWV0IG1hdXJpcyBkaWFtLlwiKycgJytcblxuXCJDcmFzIHZlbCBwZWxsZW50ZXNxdWUgbmlzaSwgbm9uIGFsaXF1YW0gZW5pbS4gUHJhZXNlbnQgcmhvbmN1cyBxdWlzIGxhY3VzIGV1IHZpdmVycmEuIFZlc3RpYnVsdW0gc29sbGljaXR1ZGluIHNpdCBhbWV0IG51bmMgYSB2dWxwdXRhdGUuIEluIGV0IGRpZ25pc3NpbSByaXN1cy4gSW50ZWdlciBzdXNjaXBpdCBhdWd1ZSBzaXQgYW1ldCBlc3Qgc29sbGljaXR1ZGluLCBlZ2V0IHBsYWNlcmF0IGxlY3R1cyBmcmluZ2lsbGEuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy4gUGVsbGVudGVzcXVlIGxvYm9ydGlzLCBtaSBldCBhZGlwaXNjaW5nIHBoYXJldHJhLCBlcm9zIHNlbSBzY2VsZXJpc3F1ZSB0ZWxsdXMsIGV1IHZpdmVycmEgc2VtIGp1c3RvIHZlc3RpYnVsdW0gdGVsbHVzLiBQcm9pbiBwaGFyZXRyYSBtZXR1cyBpZCBhdWd1ZSBpbXBlcmRpZXQsIGVnZXQgdWx0cmljZXMgYXJjdSBjb21tb2RvLiBFdGlhbSBkdWkgbGlndWxhLCBhY2N1bXNhbiBhdWN0b3IgYWxpcXVhbSBuZWMsIHRyaXN0aXF1ZSBhdCBlc3QuIFNlZCBlZ2V0IHZlbmVuYXRpcyB0b3J0b3IsIHF1aXMgcHVsdmluYXIgc2VtLiBQaGFzZWxsdXMgaW4gbGlndWxhIG1hc3NhLiBOdWxsYW0gYSBlcm9zIGV0IGxhY3VzIGRhcGlidXMgcG9zdWVyZS5cIisnICcrXG5cblwiTW9yYmkgaWQgZWdlc3RhcyBkb2xvci4gRG9uZWMgbm9uIHBvc3VlcmUgbWFzc2EuIEluIHZhcml1cyBoZW5kcmVyaXQgYXVndWUsIHF1aXMgZmV1Z2lhdCBkaWFtIHB1bHZpbmFyIGVnZXQuIE51bmMgbm9uIGdyYXZpZGEgbGFjdXMuIER1aXMgaWFjdWxpcyBqdXN0byBhYyBlbmltIHZvbHV0cGF0IGNvbW1vZG8uIE1vcmJpIHNhZ2l0dGlzIG9yY2kgaW4gbmliaCBibGFuZGl0LCBhYyBwdWx2aW5hciBuaWJoIGNvbnZhbGxpcy4gUHJvaW4gYWMgbmlzbCBkdWkuIE5hbSBjb25kaW1lbnR1bSBjdXJzdXMgb2RpbyBzaXQgYW1ldCB0ZW1wdXMuIEFlbmVhbiB2ZXN0aWJ1bHVtIGVsaXQgYSBsb3JlbSBkaWduaXNzaW0sIGluIGFkaXBpc2NpbmcgYXJjdSBydXRydW0uIFZlc3RpYnVsdW0gbm9uIHZhcml1cyBuaXNsLCBhIHBvcnRhIGVsaXQuXCIrJyAnK1xuXG5cIk1hZWNlbmFzIHNpdCBhbWV0IGVyb3MgZWdldCBkdWkgYmxhbmRpdCBjb25zZXF1YXQuIERvbmVjIGV0IHNvbGxpY2l0dWRpbiByaXN1cy4gVml2YW11cyBhY2N1bXNhbiBhbnRlIHZlbCBtYXR0aXMgdmVoaWN1bGEuIFZlc3RpYnVsdW0gZWdldCBkb2xvciBhIHZlbGl0IHVsdHJpY2llcyB1bHRyaWNpZXMuIEN1cmFiaXR1ciB0dXJwaXMgc2FwaWVuLCB0ZW1wdXMgZXUgY29uc2VjdGV0dXIgYSwgdGVtcHVzIHNlZCBsYWN1cy4gUHJvaW4gc29kYWxlcyBpYWN1bGlzIGxvcmVtLCBiaWJlbmR1bSBsb2JvcnRpcyBtYXVyaXMgaW1wZXJkaWV0IHZlbC4gTWFlY2VuYXMgYSBiaWJlbmR1bSBlcmF0LiBNb3JiaSBwZWxsZW50ZXNxdWUgcHVydXMgc2l0IGFtZXQgZW5pbSBwdWx2aW5hciB1bGxhbWNvcnBlci4gTnVuYyB2aXRhZSBjdXJzdXMganVzdG8uIFN1c3BlbmRpc3NlIGVnZXN0YXMgbmliaCBlZ2V0IG5lcXVlIHZ1bHB1dGF0ZSBtb2xlc3RpZS4gQWVuZWFuIHNpdCBhbWV0IHZlbGl0IGEgZmVsaXMgcGVsbGVudGVzcXVlIGNvbW1vZG8gZXUgdXQgbmliaC4gUGVsbGVudGVzcXVlIGF0IHZlaGljdWxhIG1ldHVzLiBNb3JiaSBhbGlxdWV0IGp1c3RvIG5vbiB0ZWxsdXMgcHJldGl1bSBiaWJlbmR1bS4gTWFlY2VuYXMgcG9ydHRpdG9yIGV0IHRvcnRvciBpZCBpbnRlcmR1bS4gQ3JhcyBmZXJtZW50dW0gdGVsbHVzIG5lYyBwb3J0dGl0b3IgZmV1Z2lhdC4gVmVzdGlidWx1bSBmYWNpbGlzaXMgbmVjIGRvbG9yIHZlbCB2b2x1dHBhdC5cIisnICcrXG5cblwiQWVuZWFuIGNvbW1vZG8gbnVuYyBlcm9zLCBhIHBoYXJldHJhIHNlbSBhdWN0b3IgbmVjLiBRdWlzcXVlIGF0IHVsbGFtY29ycGVyIGxlY3R1cywgbm9uIHNhZ2l0dGlzIGVzdC4gTW9yYmkgc2FnaXR0aXMgYmliZW5kdW0gZW5pbSBub24gZ3JhdmlkYS4gU2VkIGFjIHNlbSB2aXZlcnJhLCBjb21tb2RvIGRvbG9yIHV0LCB0ZW1wdXMgbGVjdHVzLiBOdW5jIHNpdCBhbWV0IGFsaXF1YW0gbmliaC4gUHJhZXNlbnQgdWx0cmljZXMgdG9ydG9yIGF0IHZlbGl0IGludGVyZHVtIHZpdmVycmEuIER1aXMgc3VzY2lwaXQgZXJhdCBhYyB0dXJwaXMgcGhhcmV0cmEgYmliZW5kdW0uIFZpdmFtdXMgbW9sZXN0aWUgbmVjIGxlY3R1cyBzY2VsZXJpc3F1ZSBjb252YWxsaXMuIEN1cmFiaXR1ciBtZXR1cyBwdXJ1cywgZmF1Y2lidXMgdGVtcG9yIG5lcXVlIGFjLCBjb252YWxsaXMgbGFjaW5pYSB0b3J0b3IuIE1vcmJpIGluIG5lcXVlIHByZXRpdW0sIHBsYWNlcmF0IG9yY2kgaW50ZXJkdW0sIG9ybmFyZSBzYXBpZW4uIFF1aXNxdWUgb3JuYXJlIGRpYW0gYWMgZXJvcyBtb2xlc3RpZSwgdXQgcGVsbGVudGVzcXVlIGVuaW0gZWxlaWZlbmQuXCIrJyAnK1xuXG5cIkludGVnZXIgZGFwaWJ1cywgc2FwaWVuIGluIHN1c2NpcGl0IHRyaXN0aXF1ZSwgcmlzdXMgZXJvcyB0ZW1wb3IgbGlndWxhLCBhIG1hbGVzdWFkYSB0ZWxsdXMgZWxpdCBlZ2V0IGZlbGlzLiBNb3JiaSB2aXZlcnJhIGVsaXQgbGVjdHVzLiBOdWxsYSBlbGVpZmVuZCBsZW8gYW50ZSwgc2l0IGFtZXQgc2VtcGVyIG5pYmggYXVjdG9yIG5vbi4gVmVzdGlidWx1bSBsYW9yZWV0IGFudGUgdml0YWUganVzdG8gZnJpbmdpbGxhLCBmYWNpbGlzaXMgcHVsdmluYXIgbnVuYyBkaWduaXNzaW0uIERvbmVjIHZlbmVuYXRpcyBuaXNsIGEgbmVxdWUgcHVsdmluYXIgdml2ZXJyYS4gUGhhc2VsbHVzIGFjIGFudGUgZXQgbmlzaSBwdWx2aW5hciBmcmluZ2lsbGEuIE51bmMgZGljdHVtIGV1aXNtb2QgaXBzdW0gc2l0IGFtZXQgZWxlbWVudHVtLlwiKycgJytcblxuXCJBZW5lYW4gZWxlaWZlbmQgbm9uIG5pc2kgbm9uIHZlbmVuYXRpcy4gU2VkIGFjIHR1cnBpcyBhdCBuaXNpIHNvZGFsZXMgaGVuZHJlcml0IHZpdGFlIHF1aXMgdmVsaXQuIE1hdXJpcyBlZ2V0IHRpbmNpZHVudCBlcm9zLCBuZWMgbW9sZXN0aWUgbnVsbGEuIFByb2luIGZhdWNpYnVzIGRpY3R1bSB2ZXN0aWJ1bHVtLiBTZWQgYSBuZXF1ZSBxdWFtLiBQZWxsZW50ZXNxdWUgYWxpcXVldCBsb2JvcnRpcyBqdXN0bywgdml0YWUgYWxpcXVhbSB2ZWxpdCBjb25ndWUgYS4gU3VzcGVuZGlzc2Ugdm9sdXRwYXQgZ3JhdmlkYSBhcmN1IHZlbCBldWlzbW9kLlwiKycgJytcblxuXCJWaXZhbXVzIGluIHVybmEgZXQgbGVjdHVzIHBvc3VlcmUgc3VzY2lwaXQuIEN1cmFiaXR1ciB1bHRyaWNpZXMgZXJhdCBkaWFtLCB2ZWwgdHJpc3RpcXVlIG5lcXVlIHRlbXB1cyBsdWN0dXMuIFNlZCB0ZW1wdXMgaWFjdWxpcyBtaSBpbiBzb2xsaWNpdHVkaW4uIE51bGxhbSB2ZXN0aWJ1bHVtIHF1YW0gbGVvLCBzZWQgaW1wZXJkaWV0IG5pc2kgY29uZ3VlIGF0LiBNYXVyaXMgdm9sdXRwYXQgYXJjdSBzZWQgdXJuYSBoZW5kcmVyaXQsIHNpdCBhbWV0IGNvbW1vZG8gYXJjdSBzY2VsZXJpc3F1ZS4gSW50ZWdlciBtb2xlc3RpZSBjdXJzdXMgbWkgaWQgb3JuYXJlLiBQaGFzZWxsdXMgdXQgbWFsZXN1YWRhIGFyY3UsIHNpdCBhbWV0IGRhcGlidXMgb2Rpby4gUGhhc2VsbHVzIGluIGNvbnZhbGxpcyBqdXN0by4gRXRpYW0gaGVuZHJlcml0IGNvbW1vZG8gbnVsbGEgYWMgdmVoaWN1bGEuIER1aXMgbG9yZW0gZXN0LCBzb2RhbGVzIGF0IHZlbmVuYXRpcyBuZWMsIGNvbW1vZG8gYWMgbmVxdWUuIEFsaXF1YW0gdGluY2lkdW50IGZhY2lsaXNpcyBudW5jLiBOdWxsYW0gcnV0cnVtIGJpYmVuZHVtIG9yY2ksIHNpdCBhbWV0IHNlbXBlciB0b3J0b3IgY29uc2VjdGV0dXIgYXQuXCIrJyAnK1xuXG5cIkRvbmVjIGluIHVybmEgbGFvcmVldCwgdWxsYW1jb3JwZXIgbGliZXJvIGVnZXQsIGNvbnZhbGxpcyBkb2xvci4gTnVsbGFtIHNvZGFsZXMgY29tbW9kbyBsZWN0dXMgbmVjIGRpY3R1bS4gU3VzcGVuZGlzc2UgZXQgZmFjaWxpc2lzIG5lcXVlLCBxdWlzIHVsbGFtY29ycGVyIGxpYmVyby4gTnVsbGFtIGluIHNhcGllbiBtYXR0aXMsIHZvbHV0cGF0IGFyY3UgZXUsIHZpdmVycmEgYXVndWUuIE51bGxhbSBkaWN0dW0gbG9yZW0gdXQgb3JjaSBlbGVpZmVuZCwgc2VtcGVyIGdyYXZpZGEgbmlzbCBjb25ndWUuIEFlbmVhbiB0ZW1wb3IgcnV0cnVtIGp1c3RvIHZpdGFlIGxhY2luaWEuIFV0IHN1c2NpcGl0IGlwc3VtIGEgbmlzaSB1bHRyaWNpZXMgbW9sbGlzLiBNYWVjZW5hcyBhYyBhdWN0b3IganVzdG8uIEZ1c2NlIHNpdCBhbWV0IGlwc3VtIHZvbHV0cGF0LCBoZW5kcmVyaXQgZG9sb3IgcG9ydHRpdG9yLCByaG9uY3VzIG5lcXVlLiBEb25lYyBxdWlzIGNvbmRpbWVudHVtIGVuaW0uIFByYWVzZW50IHZpdGFlIGxlY3R1cyBuZWMgZG9sb3IgdmVzdGlidWx1bSBtYXR0aXMuXCIrJyAnK1xuXG5cIkludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gRXRpYW0gcGhhcmV0cmEgdml2ZXJyYSBlcm9zIHF1aXMgZGlnbmlzc2ltLiBGdXNjZSB2ZWwgZHVpIG1hdXJpcy4gUGVsbGVudGVzcXVlIG1vbGxpcyBhbnRlIGFjIGZlcm1lbnR1bSBwZWxsZW50ZXNxdWUuIFByb2luIHVsdHJpY2VzLCBudWxsYSB1dCB2ZW5lbmF0aXMgZGFwaWJ1cywgbWkgdmVsaXQgY29tbW9kbyBwdXJ1cywgaW4gaW1wZXJkaWV0IG9kaW8gbWF1cmlzIG5lYyBmZWxpcy4gUHJhZXNlbnQgc2NlbGVyaXNxdWUgZXJvcyBpZCBzb2xsaWNpdHVkaW4gbGFvcmVldC4gUHJhZXNlbnQgdWx0cmljaWVzLCBwdXJ1cyBzaXQgYW1ldCBiaWJlbmR1bSBpbXBlcmRpZXQsIGxpZ3VsYSBhcmN1IGltcGVyZGlldCBqdXN0bywgYSB1bGxhbWNvcnBlciB0dXJwaXMgbGVjdHVzIHNlZCBkb2xvci4gTWFlY2VuYXMgbmVjIHRlbXB1cyBtYXVyaXMsIHF1aXMgYWNjdW1zYW4gbmliaC5cIisnICcrXG5cblwiVmVzdGlidWx1bSBlbGVpZmVuZCBibGFuZGl0IGxvYm9ydGlzLiBTZWQgaW50ZXJkdW0gc2VtcGVyIHNhcGllbiwgZXQgbGFjaW5pYSBkdWkgc3VzY2lwaXQgc2l0IGFtZXQuIEludGVnZXIgZWxlbWVudHVtIGZlbGlzIHV0IGRpYW0gdGVtcHVzLCBhYyBmYWNpbGlzaXMgZXJvcyBwb3N1ZXJlLiBOdWxsYW0gcGxhY2VyYXQgdHJpc3RpcXVlIG1ldHVzLCBlZ2V0IHZlbmVuYXRpcyBhdWd1ZSBtb2xlc3RpZSBlZ2V0LiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gVXQgZWdlc3RhcyBtYXVyaXMgbmVjIGxhY3VzIHZlaGljdWxhLCBwdWx2aW5hciBmcmluZ2lsbGEgbGVjdHVzIHRlbXBvci4gU2VkIHV0IGFudGUgYXJjdS5cIisnICcrXG5cblwiVXQgY29udmFsbGlzIGNvbW1vZG8gaXBzdW0gcXVpcyB0ZW1wdXMuIFNlZCBwaGFyZXRyYSB2ZWxpdCBlZ2V0IHNvbGxpY2l0dWRpbiBwcmV0aXVtLiBGdXNjZSBtb2xlc3RpZSBhdCBwdXJ1cyBhIHNjZWxlcmlzcXVlLiBOdWxsYSBmYWNpbGlzaS4gTW9yYmkgZmVsaXMgbmVxdWUsIGdyYXZpZGEgc2VkIGNvbmd1ZSBzZWQsIGRhcGlidXMgdmVsIGF1Z3VlLiBWaXZhbXVzIHZpdmVycmEgY29uZGltZW50dW0gbHVjdHVzLiBVdCBhdCB0ZWxsdXMgbmVjIGF1Z3VlIGNvbnZhbGxpcyBjb25ndWUuIE1hZWNlbmFzIHBsYWNlcmF0IHVsdHJpY2VzIGxvcmVtLCBub24gY29udmFsbGlzIG5pYmggbWFsZXN1YWRhIHZlbC4gUHJhZXNlbnQgbm9uIGhlbmRyZXJpdCB2ZWxpdCwgc2l0IGFtZXQgcnV0cnVtIG1hc3NhLiBDdXJhYml0dXIgcXVpcyBlbGVtZW50dW0gZXN0LiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuIER1aXMgcHVsdmluYXIgdGVsbHVzIGEgY29uc2VxdWF0IGF1Y3Rvci4gU2VkIGlhY3VsaXMgc2VkIGxpZ3VsYSBxdWlzIGhlbmRyZXJpdC4gRnVzY2UgY29uc2VxdWF0IGZhY2lsaXNpcyBlcm9zLCBpbiB0ZW1wdXMgdGVsbHVzIHZlaGljdWxhIGV1LlwiKycgJytcblxuXCJEdWlzIGNvbmRpbWVudHVtIGF0IG1hdXJpcyBxdWlzIGludGVyZHVtLiBQaGFzZWxsdXMgaW1wZXJkaWV0IHNvZGFsZXMgbWFzc2EsIHF1aXMgbG9ib3J0aXMgc2VtIGJsYW5kaXQgbmVjLiBBbGlxdWFtIG5lYyBzYXBpZW4gbWF1cmlzLiBBbGlxdWFtIGdyYXZpZGEgY3Vyc3VzIGRvbG9yIHZpdGFlIGludGVyZHVtLiBDcmFzIGF0IHVsdHJpY2VzIG1pLCB1dCBsYWNpbmlhIHB1cnVzLiBNb3JiaSBncmF2aWRhIHNhcGllbiBpbiBsZWN0dXMgcnV0cnVtIHZlaGljdWxhLiBTZWQgdm9sdXRwYXQgY29uZGltZW50dW0gbGlndWxhLiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuIFBoYXNlbGx1cyBhbGlxdWV0IHZlbGl0IGZlbGlzLCBub24gZmF1Y2lidXMgbnVuYyBoZW5kcmVyaXQgbm9uLiBGdXNjZSBzZW1wZXIgdXJuYSBpZCBuaWJoIG1vbGxpcywgc2l0IGFtZXQgdml2ZXJyYSBuaWJoIGRpY3R1bS4gU2VkIGRpZ25pc3NpbSB2ZWwgbG9yZW0gdmVsIGNvbnNlcXVhdC4gU3VzcGVuZGlzc2UgY29udmFsbGlzIG5pYmggdG9ydG9yLCBhIHN1c2NpcGl0IG1ldHVzIHRpbmNpZHVudCBhLlwiKycgJytcblxuXCJWaXZhbXVzIGludGVyZHVtIHNlZCBkaWFtIHZpdGFlIGV1aXNtb2QuIFNlZCBkaWduaXNzaW0gYSBtYXVyaXMgbm9uIGN1cnN1cy4gUXVpc3F1ZSB2ZXN0aWJ1bHVtLCBudW5jIGV1IHByZXRpdW0gZnJpbmdpbGxhLCBsYWN1cyBhbnRlIGZldWdpYXQgbmliaCwgZXUgZGljdHVtIHNhcGllbiB2ZWxpdCBpbiBkdWkuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEN1cmFiaXR1ciBxdWlzIHNlbSBtYXNzYS4gU3VzcGVuZGlzc2UgdmVsIGJpYmVuZHVtIG1hc3NhLCBhIG1hdHRpcyBkdWkuIFByYWVzZW50IG1hc3NhIGVyb3MsIHByZXRpdW0gcXVpcyB2ZWhpY3VsYSBxdWlzLCBibGFuZGl0IHNpdCBhbWV0IGxpYmVyby4gRXRpYW0gc2VkIGRvbG9yIG1pLiBQZWxsZW50ZXNxdWUgZnJpbmdpbGxhIHRlbXB1cyBudWxsYSwgYXQgaGVuZHJlcml0IG1hZ25hIHZpdmVycmEgdXQuIFByYWVzZW50IGRhcGlidXMgdGVtcG9yIG9yY2ksIHV0IHZlaGljdWxhIGp1c3RvIGx1Y3R1cyBzaXQgYW1ldC4gRnVzY2UgbWF0dGlzIGZlbGlzIHR1cnBpcywgYXQgcnV0cnVtIGVyb3MgY3Vyc3VzIGV0LlwiKycgJytcblxuXCJTdXNwZW5kaXNzZSBzZWQgc2VtcGVyIGxhY3VzLiBBZW5lYW4gbG9ib3J0aXMgcGVsbGVudGVzcXVlIG1hdHRpcy4gRnVzY2UgbHVjdHVzIHNhZ2l0dGlzIGxlbywgYWMgY29tbW9kbyBtYWduYSBwaGFyZXRyYSB1dC4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIERvbmVjIGluIG9ybmFyZSBzZW0sIHJ1dHJ1bSB1bGxhbWNvcnBlciBtYWduYS4gTnVsbGEgbnVsbGEgbmliaCwgdWxsYW1jb3JwZXIgaW4gbGFjdXMgYSwgc29kYWxlcyBncmF2aWRhIGxpYmVyby4gSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLiBWZXN0aWJ1bHVtIGFjY3Vtc2FuIGlhY3VsaXMgZXJvcyBpbiBhbGlxdWFtLiBQcmFlc2VudCBsaWd1bGEgcmlzdXMsIGZhY2lsaXNpcyBzZWQgcGhhcmV0cmEgaWFjdWxpcywgbG9ib3J0aXMgYXQgbWkuIEN1cmFiaXR1ciBvcm5hcmUgZWdlc3RhcyBlc3QsIGV1IHVsdHJpY2llcyByaXN1cy4gQ3JhcyBvcm5hcmUgdm9sdXRwYXQgcmlzdXMgZXVpc21vZCB0cmlzdGlxdWUuIE1hdXJpcyBjb25kaW1lbnR1bSBlZ2V0IG51bGxhIHZpdGFlIHZvbHV0cGF0LiBDdXJhYml0dXIgdmVsIHB1cnVzIGFjIGVyYXQgY29tbW9kbyB2aXZlcnJhLlwiXG5cbiAgICAgIClcbiAgICApO1xuICB9XG5cbn0pO1xuXG5leHBvcnRzLkRhc2hib2FyZCA9IERhc2hib2FyZDtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb21wb25lbnRzL2Rhc2hib2FyZC5qc3hcIixcIi9jb21wb25lbnRzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqIEBqc3ggUmVhY3QuRE9NICovXG5cblxudmFyIENPTkZJRyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xudmFyIFVUSUwgPSByZXF1aXJlKFwiLi4vdXRpbFwiKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG5cbnZhciBEYXNoYm9hcmQgPSByZXF1aXJlKCcuL2Rhc2hib2FyZCcpLkRhc2hib2FyZDtcbnZhciBNeUFjY291bnQgPSByZXF1aXJlKFwiLi9teS1hY2NvdW50XCIpLk15QWNjb3VudDtcbnZhciBFZGl0QWNjb3VudCA9IHJlcXVpcmUoXCIuL215LWFjY291bnRcIikuRWRpdEFjY291bnQ7XG52YXIgV2Vic2l0ZXMgPSByZXF1aXJlKFwiLi93ZWJzaXRlXCIpLldlYnNpdGVzO1xudmFyIEFkZFdlYnNpdGUgPSByZXF1aXJlKFwiLi93ZWJzaXRlXCIpLkFkZFdlYnNpdGU7XG52YXIgRWRpdFdlYnNpdGUgPSByZXF1aXJlKFwiLi93ZWJzaXRlXCIpLkVkaXRXZWJzaXRlO1xuXG5cbnZhciBMYXlvdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdMYXlvdXQnLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gc2V0IHRoZSBwdXNoU3RhdGUgdG8gYmxhbmsgaWYgdGhlIHVzZXIgYXJyaXZlcyB0byB0aGUgZGFzaGJvYXJkLCBlaXRoZXIgYnkgZ29pbmcgdG8gdGhlIHJvb3Qgb3IgZW50ZXJpbmcgYW4gaW52YWxpZCByb3V0ZVxuICAgIHZhciBwb3MgPSBCYWNrYm9uZS5oaXN0b3J5LmZyYWdtZW50O1xuXG4gICAgICAgIC8vIExvb2sgdXAgdGhlIGN1cnJlbnQgcm91dGUgYWdhaW5zdCBDT05GSUcuUk9VVEVTIHNvIHRoYXQgd2UgY2FuIHBvcHVsYXRlIExheW91dCB3aXRoIHRoZSBwcmV0dHkgcGF0aCBuYW1lLlxuICAgIC8vIElmIHRoZSBjdXJyZW50IHBhdGggaXNuJ3QgZGVmaW5lZCBpbiBDT05GSUcuUk9VVEVTLCBzZW5kIHRvIHRoZSBEYXNoYm9hcmRcbiAgICB2YXIgcGF0aCA9IF8uZmluZChDT05GSUcuUk9VVEVTLCB7ICd1cmwnOiBwb3MgfSk7XG5cblxuICAgIC8vIElmIG5vIHBhdGgsIHRoZW4gdXNlIHRoZSBmaXJzdCByb3V0ZS5cbiAgICBpZihfLmlzRW1wdHkocG9zKSkge1xuICAgICAgcGF0aCA9IF8uZmlyc3QoQ09ORklHLlJPVVRFUyk7XG4gICAgfVxuXG4gICAgLy8gQ3VycmVudCBwYXRoIGlzbid0IGZvdW5kLiBDaGVjayBpZiBpdCdzIGEgcm91dGUgd2l0aCBwYXJhbWV0ZXJzXG4gICAgaWYoXy5pc0VtcHR5KHBhdGgpKSB7XG5cbiAgICAgIHBhdGggPSBfLmxhc3QoXy5maWx0ZXIoQ09ORklHLlJPVVRFUywgZnVuY3Rpb24ocm91dGUpIHtcbiAgICAgICAgcmV0dXJuIF8uY29udGFpbnMocG9zLCByb3V0ZS51cmwpICYmIHJvdXRlLmFsbG93X3BhcmFtZXRlcnM7XG4gICAgICB9KSk7XG5cbiAgICB9XG5cblxuICAgIGlmKF8uaGFzKHBhdGgsIFwibmFtZVwiKSkge1xuICAgICAgcGF0aCA9IHBhdGgubmFtZVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXRoID0gXCJEYXNoYm9hcmRcIlxuICAgIH1cblxuXG5cbiAgICBpZihwYXRoID09PSBcIkRhc2hib2FyZFwiKSB7XG4gICAgICByb3V0ZXIubmF2aWdhdGUoXCJcIik7XG4gICAgfTtcblxuICAgIHJldHVybiB7cGF0aDogcGF0aCwgdXNlcjogdW5kZWZpbmVkLCByZW5kZXI6IGZhbHNlLCBhY3RpdmVfd2Vic2l0ZTogdW5kZWZpbmVkLCB3ZWJzaXRlczogdW5kZWZpbmVkLCBhbGVydDogeydtZXNzYWdlJyA6IG51bGwsICd0eXBlJyA6IG51bGx9fTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbigpIHtcblxuLy8gc2V0IHRoZSBwdXNoU3RhdGUgdG8gYmxhbmsgaWYgdGhlIHVzZXIgYXJyaXZlcyB0byB0aGUgZGFzaGJvYXJkLCBlaXRoZXIgYnkgZ29pbmcgdG8gdGhlIHJvb3Qgb3IgZW50ZXJpbmcgYW4gaW52YWxpZCByb3V0ZVxuICAgIHZhciBwb3MgPSBCYWNrYm9uZS5oaXN0b3J5LmZyYWdtZW50O1xuXG4gICAgICAgIC8vIExvb2sgdXAgdGhlIGN1cnJlbnQgcm91dGUgYWdhaW5zdCBDT05GSUcuUk9VVEVTIHNvIHRoYXQgd2UgY2FuIHBvcHVsYXRlIExheW91dCB3aXRoIHRoZSBwcmV0dHkgcGF0aCBuYW1lLlxuICAgIC8vIElmIHRoZSBjdXJyZW50IHBhdGggaXNuJ3QgZGVmaW5lZCBpbiBDT05GSUcuUk9VVEVTLCBzZW5kIHRvIHRoZSBEYXNoYm9hcmRcbiAgICB2YXIgcGF0aCA9IF8uZmluZChDT05GSUcuUk9VVEVTLCB7ICd1cmwnOiBwb3MgfSk7XG5cblxuICAgIC8vIElmIG5vIHBhdGgsIHRoZW4gdXNlIHRoZSBmaXJzdCByb3V0ZS5cbiAgICBpZihfLmlzRW1wdHkocG9zKSkge1xuICAgICAgcGF0aCA9IF8uZmlyc3QoQ09ORklHLlJPVVRFUyk7XG4gICAgfVxuXG4gICAgLy8gQ3VycmVudCBwYXRoIGlzbid0IGZvdW5kLiBDaGVjayBpZiBpdCdzIGEgcm91dGUgd2l0aCBwYXJhbWV0ZXJzXG4gICAgaWYoXy5pc0VtcHR5KHBhdGgpKSB7XG5cbiAgICAgIHBhdGggPSBfLmxhc3QoXy5maWx0ZXIoQ09ORklHLlJPVVRFUywgZnVuY3Rpb24ocm91dGUpIHtcbiAgICAgICAgcmV0dXJuIF8uY29udGFpbnMocG9zLCByb3V0ZS51cmwpICYmIHJvdXRlLmFsbG93X3BhcmFtZXRlcnM7XG4gICAgICB9KSk7XG5cbiAgICB9XG5cblxuICAgIGlmKF8uaGFzKHBhdGgsIFwibmFtZVwiKSkge1xuICAgICAgcGF0aCA9IHBhdGgubmFtZVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXRoID0gXCJEYXNoYm9hcmRcIlxuICAgIH1cblxuXG5cbiAgICBpZihwYXRoID09PSBcIkRhc2hib2FyZFwiKSB7XG4gICAgICByb3V0ZXIubmF2aWdhdGUoXCJcIik7XG4gICAgfTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe3BhdGg6IHBhdGh9KVxuXG4gICAgZG9jdW1lbnQudGl0bGUgPSB0aGlzLnN0YXRlLnBhdGggKyBcIiB8IFwiICsgQ09ORklHLldFQlNJVEVfTkFNRTtcblxuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcblxuICAgIF8uZ2V0U2Vzc2lvbi5jYWxsKHRoaXMpO1xuXG4gIH0sXG5cbiAgc2V0UG9zOiBmdW5jdGlvbih1cmwsIHBvcykge1xuXG4gICAgXy5nZXRTZXNzaW9uLmNhbGwodGhpcyk7XG5cbiAgICAvLyBPbmJvYXJkaW5nIHNjcmVlbiBpZiBubyB3ZWJzaXRlcyBleGlzdFxuXG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe3BhdGg6IHBvc30pO1xuXG4gICAgICByb3V0ZXIubmF2aWdhdGUodXJsKTtcbiAgICBcblxuICAgIHRoaXMuc2V0U3RhdGUoe2FsZXJ0OiB7J21lc3NhZ2UnIDogbnVsbCwgJ3R5cGUnIDogbnVsbH19KTtcblxuICB9LFxuXG4gIHNldFdlYnNpdGU6IGZ1bmN0aW9uKHdlYnNpdGUpIHtcblxuICAgIGNvbnNvbGUubG9nKHdlYnNpdGUpXG5cbiAgICAvLyBpZiB0aGlzIGlzIGNhbGxlZCB3aXRoIFwiZGVmYXVsdFwiIGFzIGFuIGFyZ3VtZW50LCB0aGVuIHNldCB0aGUgYWN0aXZlIHdlYnNpdGUgdG8gdGhlIGZpcnN0IG9uZSBpbiB0aGUgdXNlcidzIGxpc3RcbiAgICB2YXIgd2Vic2l0ZXMgPSB0aGlzLnN0YXRlLndlYnNpdGVzO1xuXG4gICAgaWYoXy5pc0VtcHR5KHdlYnNpdGVzKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZV93ZWJzaXRlOiBcImRlZmF1bHRcIn0pO1xuICAgIH07XG5cblxuICAgIHZhciBmaXJzdF93ZWJzaXRlID0gXy5maXJzdCh3ZWJzaXRlcykuaWQ7XG5cbiAgICBpZiggKCFfLmlzRW1wdHkod2Vic2l0ZXMpKSAmJiAod2Vic2l0ZSA9PT0gXCJkZWZhdWx0XCIpKSB7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZV93ZWJzaXRlOiBmaXJzdF93ZWJzaXRlfSk7XG5cbiAgICB9IGVsc2Uge1xuXG5cbiAgICAgIHZhciBjb29raWUgPSBKU09OLnBhcnNlKCQuY29va2llKFwiYXBwbGljYXRpb25cIikpO1xuXG4gICAgICBjb29raWUuYWN0aXZlX3dlYnNpdGUgPSB3ZWJzaXRlO1xuXG4gICAgICAkLmNvb2tpZShcImFwcGxpY2F0aW9uXCIsIEpTT04uc3RyaW5naWZ5KGNvb2tpZSksIHtwYXRoOiBcIi9cIiwgZXhwaXJlczogMTIwfSk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZV93ZWJzaXRlOiB3ZWJzaXRlfSk7XG5cbiAgICB9O1xuXG5cblxuICB9LFxuXG4gIHNldFVzZXI6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dXNlcjogc3RhdGV9KTtcblxuICAgIC8vIEtpbGwgY29va2llIGlmIHVzZXIgaXMgbG9nZ2luZyBvdXRcbiAgICBpZihzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAkLnJlbW92ZUNvb2tpZShcImFwcGxpY2F0aW9uXCIpO1xuICAgIH07XG5cbiAgfSxcblxuICBzZXRBbGVydDogZnVuY3Rpb24obWVzc2FnZSwgdHlwZSkge1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7YWxlcnQ6IHsnbWVzc2FnZScgOiBtZXNzYWdlLCAndHlwZScgOiB0eXBlfX0pO1xuXG4gIH0sXG5cbiAgc2V0V2Vic2l0ZXM6IGZ1bmN0aW9uKHdlYnNpdGVzKSB7XG5cbiAgICB0aGlzLnNldFN0YXRlKHt3ZWJzaXRlczogd2Vic2l0ZXN9KTtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBEZWZlciByZW5kZXJpbmcgd2hpbGUgY2hlY2tpbmcgaWYgY29va2llIGlzIHZhbGlkXG4gICAgaWYodGhpcy5zdGF0ZS5yZW5kZXIpIHtcblxuICAgICAgICAvLyBMb2dpbiB2aWV3IGlmIG5vdCBsb2dnZWQgaW5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS51c2VyID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICBSZWFjdC5ET00uZGl2KG51bGwsIFxuICAgICAgICAgICAgICAgICAgTG9naW4oIHtwYXRoOnRoaXMuc3RhdGUucGF0aCwgc2V0UG9zOnRoaXMuc2V0UG9zLCB1c2VyOnRoaXMuc3RhdGUudXNlciwgc2V0VXNlcjp0aGlzLnNldFVzZXIsIHNldFdlYnNpdGU6dGhpcy5zZXRXZWJzaXRlLCB3ZWJzaXRlczp0aGlzLnN0YXRlLndlYnNpdGVzLCBzZXRXZWJzaXRlczp0aGlzLnNldFdlYnNpdGVzLCBhbGVydDp0aGlzLnN0YXRlLmFsZXJ0LCBzZXRBbGVydDp0aGlzLnNldEFsZXJ0fSApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgLy8gVXNlciBpcyBsb2dnZWQgaW5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBSZWFjdC5ET00uZGl2KG51bGwsIFxuICAgICAgICAgICAgICAgIFRvcEJhcigge3BhdGg6dGhpcy5zdGF0ZS5wYXRoLCBzZXRQb3M6dGhpcy5zZXRQb3MsIHVzZXI6dGhpcy5zdGF0ZS51c2VyLCBzZXRVc2VyOnRoaXMuc2V0VXNlciwgYWN0aXZlX3dlYnNpdGU6dGhpcy5zdGF0ZS5hY3RpdmVfd2Vic2l0ZSwgc2V0V2Vic2l0ZTp0aGlzLnNldFdlYnNpdGUsIHdlYnNpdGVzOnRoaXMuc3RhdGUud2Vic2l0ZXMsIHNldFdlYnNpdGVzOnRoaXMuc2V0V2Vic2l0ZXMsIGFsZXJ0OnRoaXMuc3RhdGUuYWxlcnQsIHNldEFsZXJ0OnRoaXMuc2V0QWxlcnR9ICksXG4gICAgICAgICAgICAgICAgTGVmdE1lbnUoIHtyb3V0ZXM6dGhpcy5wcm9wcy5yb3V0ZXMsIHBhdGg6dGhpcy5zdGF0ZS5wYXRoLCBzZXRQb3M6dGhpcy5zZXRQb3MsIHVzZXI6dGhpcy5zdGF0ZS51c2VyLCBzZXRVc2VyOnRoaXMuc2V0VXNlciwgYWN0aXZlX3dlYnNpdGU6dGhpcy5zdGF0ZS5hY3RpdmVfd2Vic2l0ZSwgc2V0V2Vic2l0ZTp0aGlzLnNldFdlYnNpdGUsIHdlYnNpdGVzOnRoaXMuc3RhdGUud2Vic2l0ZXMsIHNldFdlYnNpdGVzOnRoaXMuc2V0V2Vic2l0ZXMsIGFsZXJ0OnRoaXMuc3RhdGUuYWxlcnQsIHNldEFsZXJ0OnRoaXMuc2V0QWxlcnR9ICksXG4gICAgICAgICAgICAgICAgQ29udGVudCgge3BhdGg6dGhpcy5zdGF0ZS5wYXRoLCBzZXRQb3M6dGhpcy5zZXRQb3MsIHVzZXI6dGhpcy5zdGF0ZS51c2VyLCBzZXRVc2VyOnRoaXMuc2V0VXNlciwgYWN0aXZlX3dlYnNpdGU6dGhpcy5zdGF0ZS5hY3RpdmVfd2Vic2l0ZSwgc2V0V2Vic2l0ZTp0aGlzLnNldFdlYnNpdGUsIHdlYnNpdGVzOnRoaXMuc3RhdGUud2Vic2l0ZXMsIHNldFdlYnNpdGVzOnRoaXMuc2V0V2Vic2l0ZXMsIGFsZXJ0OnRoaXMuc3RhdGUuYWxlcnQsIHNldEFsZXJ0OnRoaXMuc2V0QWxlcnR9IClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuXG4gICAgICB2YXIgbG9hZGluZ01zZ1N0eWxlID0ge1xuICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgdG9wOiBcIjMwJVwiXG4gICAgIH07XG5cbiAgICAgcmV0dXJuKFxuXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwicm93IHRleHQtY2VudGVyXCIsIHN0eWxlOmxvYWRpbmdNc2dTdHlsZX0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmgxKG51bGwsIFwiTG9hZGluZy4uLlwiKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuXG4gICB9XG4gfVxuXG59KTtcblxudmFyIExvZ2luID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnTG9naW4nLFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cbiAgICByZXR1cm4ge2VtYWlsX2JsYW5rOiBmYWxzZSwgcGFzc3dvcmRfYmxhbms6IGZhbHNlLCBzZXJ2ZXJfZXJyb3I6IHVuZGVmaW5lZH07XG5cbiAgfSxcblxuICBsb2dpbjogZnVuY3Rpb24oZSkge1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VydmVyX2Vycm9yOiB1bmRlZmluZWR9KTtcblxuICAgIHZhciBlbWFpbCA9ICQoXCIjZW1haWxcIikudmFsKCk7XG4gICAgdmFyIHBhc3N3b3JkID0gJChcIiNwYXNzd29yZFwiKS52YWwoKTtcblxuXG4gICAgLy8gVmFsaWRhdGUgLSBmaWVsZHMgbXVzdCBub3QgYmUgZW1wdHlcbiAgICBpZihfLmlzRW1wdHkoZW1haWwpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtlbWFpbF9ibGFuazogdHJ1ZX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtlbWFpbF9ibGFuazogZmFsc2V9KTtcbiAgICB9O1xuICAgIFxuICAgIGlmKF8uaXNFbXB0eShwYXNzd29yZCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkX2JsYW5rOiB0cnVlfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkX2JsYW5rOiBmYWxzZX0pO1xuICAgIH07XG5cbiAgICAvLyBmaWVsZHMgYXJlIHBvcHVsYXRlZFxuICAgIGlmKCFfLmlzRW1wdHkoZW1haWwpICYmICFfLmlzRW1wdHkocGFzc3dvcmQpKSB7XG4gICAgICAvLyBUT0RPOiBjaGVjayBpZiBjcmVkZW50aWFscyBhcmUgdmFsaWRcblxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBzdXBlcmFnZW50XG4gICAgICAucG9zdChDT05GSUcuVVJMUy5sb2dpbilcbiAgICAgIC8vLnNlbmQoeyBuYW1lOiAnTWFubnknLCBzcGVjaWVzOiAnY2F0JyB9KVxuICAgICAgLnNldCgnWC1BUEktRW1haWwnLCBlbWFpbClcbiAgICAgIC5zZXQoJ1gtQVBJLVBhc3N3b3JkJywgcGFzc3dvcmQpXG4gICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgICAuZW5kKGZ1bmN0aW9uKGVycm9yLCByZXMpe1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50ZXh0KTtcblxuICAgICAgICBpZihyZXMub2sgPT09IHRydWUpIHtcblxuICAgICAgICAgIHZhciBzZXNzaW9uSWQgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS5zZXNzaW9uSWRcbiAgICAgICAgICB2YXIgdXNlciA9IEpTT04ucGFyc2UocmVzLnRleHQpLnVzZXJcblxuXG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhzZXNzaW9uSWQpXG4gICAgICAgICAgY29uc29sZS5sb2codXNlcilcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkb2N1bWVudC5jb29raWUpXG5cbiAgICAgICAgXG5cbiAgICAgICAgdmFyIHVzZXJfd2Vic2l0ZXMgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS53ZWJzaXRlcztcbiAgICAgICAgY29uc29sZS5sb2codXNlcl93ZWJzaXRlcylcbiAgICAgICAgXG4gICAgICAgIGlmKCFfLmlzRW1wdHkodXNlcl93ZWJzaXRlcykpIHtcbiAgICAgICAgICBpZighXy5pc1VuZGVmaW5lZChfLmZpcnN0KHVzZXJfd2Vic2l0ZXMpKSkge1xuICAgICAgICAgICAgYWN0aXZlX3dlYnNpdGUgPSBfLmZpcnN0KHVzZXJfd2Vic2l0ZXMpLmlkO1xuXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZV93ZWJzaXRlKVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuXG4gICAgICAgIFxuXG5cbiAgICAgICAgXG5cbiAgICAgICAgICAvLyBzZXQgY29va2llXG4gICAgICAgICAgJC5jb29raWUoXCJhcHBsaWNhdGlvblwiLCBKU09OLnN0cmluZ2lmeSh7IFwic2Vzc2lvbklkXCI6IHNlc3Npb25JZCwgXCJ1c2VyXCI6IHVzZXIgfSksIHtwYXRoOiBcIi9cIiwgZXhwaXJlczogMTIwfSk7XG5cbiAgICAgICAgICBzZWxmLnByb3BzLnNldFVzZXIodXNlcik7XG5cbiAgICAgICAgICBzZWxmLnByb3BzLnNldFdlYnNpdGVzKHVzZXJfd2Vic2l0ZXMpO1xuXG4gICAgICAgICAgY29uc29sZS5sb2codXNlcilcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgLy8gUmV0dXJuIGVycm9yIGZyb20gc2VydmVyXG4gICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VydmVyX2Vycm9yOiBKU09OLnBhcnNlKHJlcy50ZXh0KS5lcnJvcn0pO1xuXG5cbiAgICAgICAgfVxuXG4gICAgICB9KTtcblxufVxuXG59LFxuXG5yZW5kZXI6IGZ1bmN0aW9uKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdmFyIGVtYWlsX2JsYW5rID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5lbWFpbF9ibGFuayA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIFwiRW1haWwgY2Fubm90IGJlIGJsYW5rXCIpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgdmFyIHBhc3N3b3JkX2JsYW5rID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5wYXNzd29yZF9ibGFuayA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIFwiUGFzc3dvcmQgY2Fubm90IGJlIGJsYW5rXCIpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNlcnZlcl9lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUuc2VydmVyX2Vycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLnNlcnZlcl9lcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgICAgICAgIFJlYWN0LkRPTS5kaXYoIHtpZDpcImxvZ2luXCIsIGNsYXNzTmFtZTpcInJvd1wifSwgXG4gICAgICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInBhbmVsXCJ9LCBcbiAgICAgICAgICBSZWFjdC5ET00uaDEobnVsbCwgXCJMb2dpbiB0byBXZWIgQXBwXCIpLFxuICAgICAgICAgIFwiUGxlYXNlIGxvZ2luIHRvIGFjY2VzcyBXZWIgQXBwLlwiLFxuICAgICAgICAgIFJlYWN0LkRPTS5ocihudWxsICksXG4gICAgICAgICAgc2VydmVyX2Vycm9yKCksXG4gICAgICAgICAgUmVhY3QuRE9NLmZvcm0obnVsbCwgXG4gICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiRW1haWxcIixcbiAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoIHtpZDpcImVtYWlsXCIsIHR5cGU6XCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOlwiRW1haWxcIn0gKSxcbiAgICAgICAgICBlbWFpbF9ibGFuaygpXG5cbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJwYXNzd29yZFwiLCB0eXBlOlwicGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6XCJQYXNzd29yZFwifSApLFxuICAgICAgICAgIHBhc3N3b3JkX2JsYW5rKClcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LkRPTS5idXR0b24oIHtvbkNsaWNrOnRoaXMubG9naW4sIGNsYXNzTmFtZTpcImJ1dHRvbiByYWRpdXMgZXhwYW5kXCJ9LCBcIkxvZ2luXCIpXG4gICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICAgKTtcbn1cbn0pO1xuXG5cbnZhciBUb3BCYXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdUb3BCYXInLFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcblxuICAgICQoZG9jdW1lbnQpLmZvdW5kYXRpb24oKTtcblxuICB9LFxuXG4gIHJvdXRlOiBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHVybCA9ICQoZXZlbnQudGFyZ2V0KS5hdHRyKCdkYXRhLW5hdicpO1xuICAgIHZhciBwb3MgPSAkKGV2ZW50LnRhcmdldCkudGV4dCgpO1xuXG4gICAgdGhpcy5wcm9wcy5zZXRQb3ModXJsLCBwb3MpO1xuICB9LFxuXG4gIGxvZ291dDogZnVuY3Rpb24oZSkge1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuc2V0VXNlcih1bmRlZmluZWQpO1xuXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7aWQ6XCJ0b3BCYXJcIiwgY2xhc3NOYW1lOlwic3RpY2t5XCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5uYXYoIHtjbGFzc05hbWU6XCJ0b3AtYmFyXCIsICdkYXRhLXRvcGJhcic6dHJ1ZSwgJ2RhdGEtb3B0aW9ucyc6XCJpc19ob3ZlcjogZmFsc2VcIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLnVsKCB7Y2xhc3NOYW1lOlwidGl0bGUtYXJlYVwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00ubGkoIHtjbGFzc05hbWU6XCJuYW1lXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5oMShudWxsLCBSZWFjdC5ET00uYSgge2hyZWY6XCIjXCJ9LCBcIldlYiBBcHAgTmFtZVwiKSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5ET00ubGkoIHtjbGFzc05hbWU6XCJ0b2dnbGUtdG9wYmFyIG1lbnUtaWNvblwifSwgUmVhY3QuRE9NLmEoIHtocmVmOlwiI1wifSwgXCJNZW51XCIpKVxuICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgUmVhY3QuRE9NLnNlY3Rpb24oIHtjbGFzc05hbWU6XCJ0b3AtYmFyLXNlY3Rpb25cIn0sIFxuXG4gICAgICAgICAgICBSZWFjdC5ET00udWwoIHtjbGFzc05hbWU6XCJyaWdodFwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00ubGkoIHtjbGFzc05hbWU6XCJhY3RpdmUgaGFzLWRyb3Bkb3duXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5hKCB7aHJlZjpcIiNcIn0sIFwiTG9nZ2VkIGluIGFzIFwiLCB0aGlzLnByb3BzLnVzZXIuZnVsbE5hbWUpLFxuICAgICAgICAgICAgUmVhY3QuRE9NLnVsKCB7Y2xhc3NOYW1lOlwiZHJvcGRvd25cIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmxpKG51bGwsIFJlYWN0LkRPTS5hKCB7J2RhdGEtbmF2JzpcImFjY291bnRcIiwgb25DbGljazp0aGlzLnJvdXRlfSwgXCJNeSBBY2NvdW50XCIpKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS5saShudWxsLCBSZWFjdC5ET00uYSgge29uQ2xpY2s6dGhpcy5sb2dvdXR9LCBcIkxvZ291dFwiKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5ET00ubGkoIHtjbGFzc05hbWU6XCJoYXMtZHJvcGRvd25cIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmEoIHtocmVmOlwiI1wifSwgXCJIZWxwXCIpLFxuICAgICAgICAgICAgUmVhY3QuRE9NLnVsKCB7Y2xhc3NOYW1lOlwiZHJvcGRvd25cIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmxpKG51bGwsIFJlYWN0LkRPTS5hKCB7aHJlZjpcIiNcIn0sIFwiR2V0dGluZyBTdGFydGVkIEd1aWRlXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS5saShudWxsLCBSZWFjdC5ET00uYSgge2hyZWY6XCIjXCJ9LCBcIkFQSSBEb2N1bWVudGF0aW9uXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS5saShudWxsLCBSZWFjdC5ET00uYSgge2hyZWY6XCIjXCJ9LCBcIkNvbnRhY3QgVXNcIikpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG59XG5cbn0pO1xuXG5cbnZhciBMZWZ0TWVudSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ0xlZnRNZW51JyxcblxuICByb3V0ZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciB1cmwgPSAkKGV2ZW50LnRhcmdldCkuYXR0cignZGF0YS1uYXYnKTtcbiAgICB2YXIgcG9zID0gJChldmVudC50YXJnZXQpLnRleHQoKTtcblxuICAgIHRoaXMucHJvcHMuc2V0UG9zKHVybCwgcG9zKTtcblxuICAgIC8vIFRPIFJFVklFVzogc2V0IHRoZSB3ZWJzaXRlIGNvbnRleHQgYmFjayB0byBkZWZhdWx0IHdoZW4gYSBtZW51IGxpbmsgaXMgY2xpY2tlZFxuICAgIC8vdGhpcy5wcm9wcy5zZXRXZWJzaXRlKFwiZGVmYXVsdFwiKTtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgdmFyIGxpbmtzID0gXy5tYXAoXy5maWx0ZXIodGhpcy5wcm9wcy5yb3V0ZXMsIFwic2hvd19pbl9tZW51XCIpLCBmdW5jdGlvbihsaW5rLCBrZXkpIHtcblxuICAgICAgdmFyIGNsYXNzU3RyaW5nID0gXCJcIjtcbiAgICAgIGlmKChzZWxmLnByb3BzLnBhdGg9PT1saW5rLm5hbWUpIHx8IChfLmNvbnRhaW5zKGxpbmsuc3Vicm91dGVzLHNlbGYucHJvcHMucGF0aCkpKXtjbGFzc1N0cmluZyA9IFwiYWN0aXZlXCJ9O1xuXG4gICAgICByZXR1cm4gUmVhY3QuRE9NLmxpKCB7a2V5OmtleX0sIFJlYWN0LkRPTS5hKCB7aHJlZjpsaW5rLnVybCwgb25DbGljazpzZWxmLnJvdXRlLCAnZGF0YS1uYXYnOmxpbmsudXJsLCBjbGFzc05hbWU6Y2xhc3NTdHJpbmd9LCBsaW5rLm5hbWUpKVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYoIHtpZDpcImxlZnRNZW51XCIsIGNsYXNzTmFtZTpcInNtYWxsLTQgbGFyZ2UtMiBjb2x1bW5zXCJ9LCBcbiAgICAgICAgICAgIFdlYnNpdGVTZWxlY3Rvcigge2FjdGl2ZV93ZWJzaXRlOnRoaXMucHJvcHMuYWN0aXZlX3dlYnNpdGUsIHNldFdlYnNpdGU6dGhpcy5wcm9wcy5zZXRXZWJzaXRlLCBzZXRQb3M6dGhpcy5wcm9wcy5zZXRQb3MsIHdlYnNpdGVzOnRoaXMucHJvcHMud2Vic2l0ZXMsIHNldFdlYnNpdGVzOnRoaXMucHJvcHMuc2V0V2Vic2l0ZXMsIGFsZXJ0OnRoaXMucHJvcHMuYWxlcnQsIHNldEFsZXJ0OnRoaXMucHJvcHMuc2V0QWxlcnR9ICksXG4gICAgICAgICAgICBSZWFjdC5ET00udWwoIHtjbGFzc05hbWU6XCJzaWRlLW5hdlwifSwgbGlua3MpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICB9XG5cbn0pO1xuXG5cbnZhciBXZWJzaXRlU2VsZWN0b3IgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdXZWJzaXRlU2VsZWN0b3InLFxuXG4gIHdlYnNpdGVTZWxlY3RlZDogZnVuY3Rpb24oZSkge1xuXG4gICAgdmFyIHdlYnNpdGVzID0gdGhpcy5wcm9wcy53ZWJzaXRlcztcblxuICAgIGlmKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSA9PT0gMCkge1xuXG4gICAgICB0aGlzLnByb3BzLnNldFdlYnNpdGUodW5kZWZpbmVkKTtcblxuICAgICAgLy8gdG9kbzogcmV2aWV3XG4gICAgICB0aGlzLnByb3BzLnNldFBvcyhcIndlYnNpdGVzL2FkZFwiLCBcIkFkZCBXZWJzaXRlXCIpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdmFyIHdlYnNpdGUgPSBfLmZpcnN0KF8uZmlsdGVyKHdlYnNpdGVzLCB7ICdpZCc6IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSB9KSkuaWQ7XG5cbiAgICAgIHRoaXMucHJvcHMuc2V0V2Vic2l0ZSh3ZWJzaXRlKTtcblxuICAgICAgdGhpcy5wcm9wcy5zZXRQb3MoXCJcIiwgXCJEYXNoYm9hcmRcIik7XG5cbiAgICB9XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciB2YWx1ZSA9IDA7XG4gICAgLy8gU2VsZWN0IGRlZmF1bHQgb3B0aW9uIHdoZXJlIHZhbHVlID0gMCBpZiB3ZWJzaXRlIGlzbid0IGRlZmluZWRcbiAgICBpZih0aGlzLnByb3BzLmFjdGl2ZV93ZWJzaXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5wcm9wcy5hY3RpdmVfd2Vic2l0ZTtcbiAgICB9O1xuXG4gICAgaWYoJC5jb29raWUoXCJhcHBsaWNhdGlvblwiKSkge1xuICAgICAgdmFyIHdlYnNpdGVzID0gdGhpcy5wcm9wcy53ZWJzaXRlcztcblxuXG4gICAgICB2YXIgbGlua3MgPSBfLm1hcCh3ZWJzaXRlcywgZnVuY3Rpb24oc2l0ZSwga2V5KSB7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LkRPTS5vcHRpb24oIHtrZXk6c2l0ZS5pZCwgdmFsdWU6c2l0ZS5pZH0sIHNpdGUubmFtZSlcblxuICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgICAgICAgUmVhY3QuRE9NLmRpdihudWxsLCBcblxuICAgICAgICAgICAgUmVhY3QuRE9NLnNlbGVjdCgge2lkOlwid2Vic2l0ZVNlbGVjdG9yXCIsIG9uQ2hhbmdlOnRoaXMud2Vic2l0ZVNlbGVjdGVkLCB2YWx1ZTp2YWx1ZX0sIFxuXG4gICAgICAgICAgICBSZWFjdC5ET00ub3B0aW9uKCB7a2V5OlwiMFwiLCB2YWx1ZTpcIjBcIn0sIFwiQWRkIE5ldyBXZWJzaXRlXCIpLFxuICAgICAgICAgICAgbGlua3NcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuXG4gIH1cblxufSk7XG5cbnZhciBDb250ZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnQ29udGVudCcsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuXG4gICAgdmFyIHNlY3Rpb24gPSBudWxsO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIFRoZSBjb2RlIGJlbG93IGNoZWNrcyBpZiB0aGVyZSBpcyBhIFJlYWN0IGNvbXBvbmVudCB0aGF0IG1hdGNoZXMgdGhlIGN1cnJlbnQgcGF0aCdzIG5hbWUuXG4gICAgLy8gSWYgdGhlcmUgaXMsIHRoZW4gcmVuZGVyIGl0LCBvdGhlcndpc2UganVzdCByZW5kZXIgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnQgcGF0aC5cbiAgICBpZiAoIGV2YWwoXCJ0eXBlb2YgXCIgKyB0aGlzLnByb3BzLnBhdGgucmVwbGFjZShcIiBcIixcIlwiKSArIFwiID09PSAnZnVuY3Rpb24nXCIpICl7IFxuXG4gICAgICB2YXIgZWxlbWVudCA9IGV2YWwodGhpcy5wcm9wcy5wYXRoLnJlcGxhY2UoXCIgXCIsXCJcIikpO1xuXG4gICAgICBzZWN0aW9uID0gZWxlbWVudCgge3BhdGg6dGhpcy5wcm9wcy5wYXRoLCBzZXRQb3M6dGhpcy5wcm9wcy5zZXRQb3MsIHVzZXI6dGhpcy5wcm9wcy51c2VyLCBzZXRVc2VyOnRoaXMucHJvcHMuc2V0VXNlciwgc2V0V2Vic2l0ZTp0aGlzLnByb3BzLnNldFdlYnNpdGUsIGFjdGl2ZV93ZWJzaXRlOnRoaXMucHJvcHMuYWN0aXZlX3dlYnNpdGUsIHdlYnNpdGVzOnRoaXMucHJvcHMud2Vic2l0ZXMsIHNldFdlYnNpdGVzOnRoaXMucHJvcHMuc2V0V2Vic2l0ZXMsIGFsZXJ0OnRoaXMucHJvcHMuYWxlcnQsIHNldEFsZXJ0OnRoaXMucHJvcHMuc2V0QWxlcnR9IClcblxuICAgIH0gZWxzZSB7XG4gICAgICBzZWN0aW9uID0gKFxuICAgICAgICAgICAgICAgICBSZWFjdC5ET00ucChudWxsLCB0aGlzLnByb3BzLnBhdGgpXG4gICAgICAgICAgICAgICAgIClcbiAgICB9XG5cblxuICAgIHZhciBhbGVydHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgaWYoIV8uaXNFbXB0eShzZWxmLnByb3BzLmFsZXJ0Lm1lc3NhZ2UpKSB7XG4gICAgICAgIHZhciBjbGFzc1N0cmluZyA9IFwiYWxlcnQtYm94IFwiICsgc2VsZi5wcm9wcy5hbGVydC50eXBlXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7J2RhdGEtYWxlcnQnOnRydWUsIGNsYXNzTmFtZTpjbGFzc1N0cmluZ30sIFxuICAgICAgICAgICAgICAgIHNlbGYucHJvcHMuYWxlcnQubWVzc2FnZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYoIHtpZDpcImNvbnRlbnRcIiwgY2xhc3NOYW1lOlwic21hbGwtOCBsYXJnZS0xMCBjb2x1bW5zXCJ9LCBcblxuICAgICAgICAgICAgYWxlcnRzKCksXG5cbiAgICAgICAgICAgIHNlY3Rpb25cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcblxuICB9XG5cbn0pO1xuXG5cbmV4cG9ydHMuTGF5b3V0ID0gTGF5b3V0O1xuZXhwb3J0cy5Mb2dpbiA9IExvZ2luO1xuZXhwb3J0cy5Ub3BCYXIgPSBUb3BCYXI7XG5leHBvcnRzLkxlZnRNZW51ID0gTGVmdE1lbnU7XG5leHBvcnRzLldlYnNpdGVTZWxlY3RvciA9IFdlYnNpdGVTZWxlY3RvcjtcbmV4cG9ydHMuQ29udGVudCA9IENvbnRlbnQ7XG5leHBvcnRzLlJvdXRlciA9IFJvdXRlcjtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb21wb25lbnRzL2xheW91dC5qc3hcIixcIi9jb21wb25lbnRzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqIEBqc3ggUmVhY3QuRE9NICovXG5cbnZhciBDT05GSUcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxudmFyIE15QWNjb3VudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ015QWNjb3VudCcsXG5cbiAgcm91dGVFZGl0QWNjb3VudDogZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcImJ1dHRvbiBjbGlja2VkXCIpO1xuICAgIHRoaXMucHJvcHMuc2V0UG9zKFwiYWNjb3VudC9lZGl0XCIsIFwiRWRpdCBBY2NvdW50XCIpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwidGV4dC1jZW50ZXJcIn0sIFxuXG4gICAgICAgICAgICBSZWFjdC5ET00uaW1nKCB7Y2xhc3NOYW1lOlwidGhcIiwgc3JjOlwiaHR0cDovL2dyYXZhdGFyLmNvbS9hdmF0YXIvZjAwMTYxYzdiMzVmMDA4NGQzOTBmNzg1ZTAxNWI5Y2EuanBnXCJ9ICksXG4gICAgICAgICAgICBSZWFjdC5ET00uaDEobnVsbCwgdGhpcy5wcm9wcy51c2VyLmZ1bGxOYW1lKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS5oMyhudWxsLCB0aGlzLnByb3BzLnVzZXIuZW1haWwpLFxuICAgICAgICAgICAgUmVhY3QuRE9NLmg0KG51bGwsIFwiUmVnaXN0ZXJlZCBcIiwgbW9tZW50KHRoaXMucHJvcHMudXNlci5jcmVhdGVkQXQpLmZyb21Ob3coKSksXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS5idXR0b24oIHtvbkNsaWNrOnRoaXMucm91dGVFZGl0QWNjb3VudCwgY2xhc3NOYW1lOlwiYnV0dG9uIHJhZGl1c1wifSwgXCJFZGl0IEFjY291bnRcIilcblxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuXG4gIH1cblxufSk7XG5cblxudmFyIEVkaXRBY2NvdW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnRWRpdEFjY291bnQnLFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cbiAgICByZXR1cm4ge2ZpcnN0X25hbWVfZXJyb3I6IHVuZGVmaW5lZCwgbGFzdF9uYW1lX2Vycm9yOiB1bmRlZmluZWQsIGVtYWlsX2Vycm9yOiB1bmRlZmluZWQsIHBhc3N3b3JkX2Vycm9yOiB1bmRlZmluZWQsIHNlcnZlcl9lcnJvcjogdW5kZWZpbmVkfTtcblxuICB9LFxuXG4gIHJvdXRlTXlBY2NvdW50OiBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuc2V0UG9zKFwiYWNjb3VudFwiLCBcIk15IEFjY291bnRcIik7XG4gIH0sXG5cbnNhdmVVc2VyOiBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc29sZS5sb2coXCJzYXZpbmcuLlwiKTtcblxuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdmFyIGZpcnN0X25hbWUgPSAkKCdpbnB1dCNmaXJzdF9uYW1lJykudmFsKCk7XG4gIHZhciBsYXN0X25hbWUgPSAkKCdpbnB1dCNsYXN0X25hbWUnKS52YWwoKTtcbiAgdmFyIGVtYWlsID0gJCgnaW5wdXQjZW1haWwnKS52YWwoKTtcbiAgdmFyIHBhc3N3b3JkID0gJCgnaW5wdXQjcGFzc3dvcmQnKS52YWwoKTtcblxuXG4gICAgLy8gVmFsaWRhdGUgLSBmaWVsZHMgbXVzdCBub3QgYmUgZW1wdHlcbiAgICBpZihfLmlzRW1wdHkoZmlyc3RfbmFtZSkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe2ZpcnN0X25hbWVfZXJyb3I6IFwiRmlyc3QgTmFtZSBjYW5ub3QgYmUgYmxhbmtcIn0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtmaXJzdF9uYW1lX2Vycm9yOiB1bmRlZmluZWR9KTtcbiAgICB9O1xuXG4gICAgaWYoXy5pc0VtcHR5KGxhc3RfbmFtZSkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe2xhc3RfbmFtZV9lcnJvcjogXCJMYXN0IE5hbWUgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7bGFzdF9uYW1lX2Vycm9yOiB1bmRlZmluZWR9KTtcbiAgICB9O1xuXG4gICAgaWYoXy5pc0VtcHR5KGVtYWlsKSkge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7ZW1haWxfZXJyb3I6IFwiRW1haWwgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7ZW1haWxfZXJyb3I6IHVuZGVmaW5lZH0pO1xuICAgIH07XG5cbiAgICBpZihfLmlzRW1wdHkocGFzc3dvcmQpKSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtwYXNzd29yZF9lcnJvcjogXCJQYXNzd29yZCBjYW5ub3QgYmUgYmxhbmtcIn0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtwYXNzd29yZF9lcnJvcjogdW5kZWZpbmVkfSk7XG4gICAgfTtcblxuLy8gc2VuZCB0byBzZXJ2ZXIgaWYgY2xpZW50IHZhbGlkYXRpb24gcGFzc2VzXG5pZighXy5zb21lKFtfLmlzRW1wdHkoZmlyc3RfbmFtZSksIF8uaXNFbXB0eShsYXN0X25hbWUpLCBfLmlzRW1wdHkoZW1haWwpLCBfLmlzRW1wdHkocGFzc3dvcmQpXSkpIHtcblxuICB2YXIgdXBkYXRlZF91c2VyID0ge307XG5cbiAgdXBkYXRlZF91c2VyLmZpcnN0X25hbWUgPSBmaXJzdF9uYW1lO1xuICB1cGRhdGVkX3VzZXIubGFzdF9uYW1lID0gbGFzdF9uYW1lO1xuICB1cGRhdGVkX3VzZXIuZW1haWwgPSBlbWFpbDtcbiAgdXBkYXRlZF91c2VyLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG5cbiAgY29uc29sZS5sb2codXBkYXRlZF91c2VyKTtcblxuICB2YXIgY29va2llID0gSlNPTi5wYXJzZSgkLmNvb2tpZShcImFwcGxpY2F0aW9uXCIpKTtcbiAgdmFyIHRva2VuID0gY29va2llLnNlc3Npb25JZDtcblxuXG4gIHN1cGVyYWdlbnRcbiAgLnBvc3QoQ09ORklHLlVSTFMudXBkYXRlVXNlcilcbiAgLnNldCgnWC1BUEktS2V5JywgdG9rZW4pXG4gIC5xdWVyeSh1cGRhdGVkX3VzZXIpXG4gIC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgLmVuZChmdW5jdGlvbihlcnJvciwgcmVzKXtcblxuICAgIGNvbnNvbGUubG9nKHJlcyk7XG5cbiAgICBpZihyZXMub2spIHtcblxuICAgICAgc2VsZi5wcm9wcy5zZXRQb3MoXCJ3ZWJzaXRlc1wiLCBcIldlYnNpdGVzXCIpO1xuICAgICAgc2VsZi5wcm9wcy5zZXRBbGVydChuYW1lICsgXCIgaGFzIGJlZW4gYWRkZWQhXCIsIFwic3VjY2Vzc1wiKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAvLyBhIHZhbGlkYXRpb24gZXJyb3Igb2NjdXJyZWRcbiAgICAgICAgICBpZihKU09OLnBhcnNlKHJlcy50ZXh0KS5yZXNwb25zZSkge1xuICAgICAgICAgICAgdmFyIGVycm9ycyA9IEpTT04ucGFyc2UocmVzLnRleHQpLnJlc3BvbnNlLmVycm9yO1xuXG5cbiAgICAgICAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGVycm9ycy5maXJzdF9uYW1lKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtmaXJzdF9uYW1lX2Vycm9yOiBlcnJvcnMuZmlyc3RfbmFtZS5lcnJvcn0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGVycm9ycy5sYXN0X25hbWUpKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe2xhc3RfbmFtZV9lcnJvcjogZXJyb3JzLmxhc3RfbmFtZS5lcnJvcn0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGVycm9ycy5lbWFpbCkpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7ZW1haWxfZXJyb3I6IGVycm9ycy5lbWFpbC5lcnJvcn0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGVycm9ycy5wYXNzd29yZCkpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7cGFzc3dvcmRfZXJyb3I6IGVycm9ycy5wYXNzd29yZF9lcnJvci5lcnJvcn0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYSB0b2tlbiBlcnJvciBvY2N1cnJlZFxuICAgICAgICAgICAgaWYoSlNPTi5wYXJzZShyZXMudGV4dCkuZXJyb3IpIHtcbiAgICAgICAgICAgICAgdmFyIGVycm9yID0gSlNPTi5wYXJzZShyZXMudGV4dCkuZXJyb3I7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3NlcnZlcl9lcnJvcjogZXJyb3J9KTtcblxuICAgICAgICAgICAgICBpZihKU09OLnBhcnNlKHJlcy50ZXh0KS5zZXNzaW9uX2ludmFsaWQpIHtcbiAgICAgICAgICAgICAgc2VsZi5wcm9wcy5zZXRMb2dnZWRJbih1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuICAgICAgfSlcblxufVxuXG59LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgIHZhciBzZWxmID0gdGhpcztcblxuICAgdmFyIHNlcnZlcl9lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUuc2VydmVyX2Vycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLnNlcnZlcl9lcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuICB2YXIgZmlyc3RfbmFtZV9lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUuZmlyc3RfbmFtZV9lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS5maXJzdF9uYW1lX2Vycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gIHZhciBsYXN0X25hbWVfZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzZWxmLnN0YXRlLmxhc3RfbmFtZV9lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS5sYXN0X25hbWVfZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgdmFyIGVtYWlsX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5lbWFpbF9lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS5lbWFpbF9lcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuICB2YXIgcGFzc3dvcmRfZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzZWxmLnN0YXRlLnBhc3N3b3JkX2Vycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLnBhc3N3b3JkX2Vycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG5cbiAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwidGV4dC1jZW50ZXJcIn0sIFxuXG4gICAgICAgICAgUmVhY3QuRE9NLnVsKCB7Y2xhc3NOYW1lOlwiYnJlYWRjcnVtYnNcIn0sIFxuICAgICAgICAgIFJlYWN0LkRPTS5saShudWxsLCBSZWFjdC5ET00uYSgge29uQ2xpY2s6dGhpcy5yb3V0ZU15QWNjb3VudH0sIFwiTXkgQWNjb3VudFwiKSksXG4gICAgICAgICAgUmVhY3QuRE9NLmxpKCB7Y2xhc3NOYW1lOlwiY3VycmVudFwifSwgXCJFZGl0IEFjY291bnRcIiksXG4gICAgICAgICAgUmVhY3QuRE9NLmxpKCB7Y2xhc3NOYW1lOlwiY3VycmVudFwifSwgdGhpcy5wcm9wcy51c2VyLmZ1bGxOYW1lKVxuICAgICAgICAgICksXG5cbiAgICAgICAgICBSZWFjdC5ET00uaDIobnVsbCwgXCJFZGl0IFlvdXIgQWNjb3VudFwiKSxcblxuICAgICAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJyb3dcIn0sIFxuICAgICAgICAgIFJlYWN0LkRPTS5mb3JtKG51bGwsIFxuICAgICAgICAgIFJlYWN0LkRPTS5maWVsZHNldChudWxsLCBcbiAgICAgICAgICBSZWFjdC5ET00ubGVnZW5kKG51bGwsIFwiVXBkYXRlIFVzZXIgRGV0YWlsc1wiKSxcbiAgICAgICAgICBzZXJ2ZXJfZXJyb3IoKSxcbiAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJGaXJzdCBOYW1lXCIsXG4gICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJmaXJzdF9uYW1lXCIsIHR5cGU6XCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOlwiRmlyc3QgTmFtZVwiLCBkZWZhdWx0VmFsdWU6dGhpcy5wcm9wcy51c2VyLmZpcnN0TmFtZX0gKSxcbiAgICAgICAgICBmaXJzdF9uYW1lX2Vycm9yKClcbiAgICAgICAgICApLFxuXG4gICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiTGFzdCBOYW1lXCIsXG4gICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJsYXN0X25hbWVcIiwgdHlwZTpcInRleHRcIiwgcGxhY2Vob2xkZXI6XCJMYXN0IE5hbWVcIiwgZGVmYXVsdFZhbHVlOnRoaXMucHJvcHMudXNlci5sYXN0TmFtZX0gKSxcbiAgICAgICAgICBsYXN0X25hbWVfZXJyb3IoKVxuICAgICAgICAgICksXG5cbiAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJFbWFpbCBBZGRyZXNzXCIsXG4gICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJlbWFpbFwiLCB0eXBlOlwidGV4dFwiLCBwbGFjZWhvbGRlcjpcIkVtYWlsIEFkZHJlc3NcIiwgZGVmYXVsdFZhbHVlOnRoaXMucHJvcHMudXNlci5lbWFpbH0gKSxcbiAgICAgICAgICBlbWFpbF9lcnJvcigpXG4gICAgICAgICAgKSxcblxuICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJwYXNzd29yZFwiLCB0eXBlOlwicGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6XCJQYXNzd29yZFwifSApLFxuICAgICAgICAgIHBhc3N3b3JkX2Vycm9yKClcbiAgICAgICAgICApXG5cbiAgICAgICAgICApLFxuXG4gICAgICAgICAgUmVhY3QuRE9NLmJ1dHRvbigge29uQ2xpY2s6dGhpcy5zYXZlVXNlciwgY2xhc3NOYW1lOlwiYnV0dG9uIHJhZGl1cyBleHBhbmRcIn0sIFwiVXBkYXRlXCIpXG4gICAgICAgICAgKVxuICAgICAgICAgIClcblxuXG5cbiAgICAgICAgICApXG4gICAgICAgICAgKVxuXG59XG5cbn0pO1xuXG5cbmV4cG9ydHMuTXlBY2NvdW50ID0gTXlBY2NvdW50O1xuZXhwb3J0cy5FZGl0QWNjb3VudCA9IEVkaXRBY2NvdW50O1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2NvbXBvbmVudHMvbXktYWNjb3VudC5qc3hcIixcIi9jb21wb25lbnRzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqIEBqc3ggUmVhY3QuRE9NICovXG5cbnZhciBDT05GSUcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcbnZhciBMYXlvdXQgPSByZXF1aXJlKFwiLi9sYXlvdXRcIikuTGF5b3V0O1xuXG5Sb3V0ZXIgPSBCYWNrYm9uZS5Sb3V0ZXIuZXh0ZW5kKHtcblxuICAvLyBSb3V0ZXMgYXJlIGRlZmluZWQgaW4gQ09ORklHLlJPVVRFUywgc28gc2VuZCBhbnkgcGF0aCB0byBzaG93TGF5b3V0XG4gIHJvdXRlcyA6IHtcbiAgICBcIipzcGxhdFwiIDogXCJzaG93TGF5b3V0XCJcbiAgfSxcbiAgc2hvd0xheW91dCA6IGZ1bmN0aW9uKHBvcykge1xuICAgIGNvbnNvbGUubG9nKHBvcylcblxuICAgIFJlYWN0LnJlbmRlckNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5b3V0KCB7cm91dGVzOkNPTkZJRy5ST1VURVN9ICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBsaWNhdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gIH1cbn0pO1xuXG5yb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cbkJhY2tib25lLmhpc3Rvcnkuc3RhcnQoe3B1c2hTdGF0ZTogdHJ1ZX0pO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2NvbXBvbmVudHMvcm91dGVyLmpzeFwiLFwiL2NvbXBvbmVudHNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKiogQGpzeCBSZWFjdC5ET00gKi9cblxudmFyIENPTkZJRyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xuXG52YXIgV2Vic2l0ZXMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdXZWJzaXRlcycsXG5cbiAgcm91dGVBZGRXZWJzaXRlOiBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwiYnV0dG9uIGNsaWNrZWRcIik7XG4gICAgdGhpcy5wcm9wcy5zZXRXZWJzaXRlKHVuZGVmaW5lZCk7XG4gICAgdGhpcy5wcm9wcy5zZXRQb3MoXCJ3ZWJzaXRlcy9hZGRcIiwgXCJBZGQgV2Vic2l0ZVwiKTtcbiAgfSxcblxuICByb3V0ZUVkaXRXZWJzaXRlOiBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciB3ZWJzaXRlX2lkID0gJChlLnRhcmdldCkuY2xvc2VzdChcInRyXCIpLmF0dHIoXCJpZFwiKTtcbiAgICBjb25zb2xlLmxvZyh3ZWJzaXRlX2lkKTtcbiAgICB0aGlzLnByb3BzLnNldFdlYnNpdGUod2Vic2l0ZV9pZCk7XG4gICAgdGhpcy5wcm9wcy5zZXRQb3MoXCJ3ZWJzaXRlcy9lZGl0L1wiICsgd2Vic2l0ZV9pZCwgXCJFZGl0IFdlYnNpdGVcIik7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICAgIHZhciB3ZWJzaXRlcyA9IHRoaXMucHJvcHMud2Vic2l0ZXM7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG5cbiAgICB2YXIgd2Vic2l0ZV9yb3dzID0gXy5tYXAod2Vic2l0ZXMsIGZ1bmN0aW9uKHdlYnNpdGUpIHtcblxuICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgIFJlYWN0LkRPTS50cigge2lkOndlYnNpdGUuaWR9LCBcbiAgICAgICAgICAgICBSZWFjdC5ET00udGQobnVsbCwgd2Vic2l0ZS5uYW1lKSxcbiAgICAgICAgICAgICBSZWFjdC5ET00udGQobnVsbCwgd2Vic2l0ZS5zZW5kZXJfbmFtZSwgXCIgKFwiLHdlYnNpdGUuc2VuZGVyX2VtYWlsLFwiKVwiKSxcbiAgICAgICAgICAgICBSZWFjdC5ET00udGQobnVsbCwgbW9tZW50KHdlYnNpdGUuY3JlYXRlZF9hdCkuZnJvbU5vdygpKSxcbiAgICAgICAgICAgICBSZWFjdC5ET00udGQobnVsbCwgUmVhY3QuRE9NLmJ1dHRvbigge29uQ2xpY2s6c2VsZi5yb3V0ZUVkaXRXZWJzaXRlLCBjbGFzc05hbWU6XCJidXR0b24gcmFkaXVzXCJ9LCBcIkVkaXRcIikpXG4gICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgKVxuXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KG51bGwsIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmgyKG51bGwsIFwiV2Vic2l0ZXNcIiksXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS50YWJsZSgge3dpZHRoOlwiMTAwJVwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00udGhlYWQobnVsbCwgXG4gICAgICAgICAgICBSZWFjdC5ET00udHIobnVsbCwgXG4gICAgICAgICAgICBSZWFjdC5ET00udGgobnVsbCwgXCJXZWJzaXRlIE5hbWVcIiksXG4gICAgICAgICAgICBSZWFjdC5ET00udGgobnVsbCwgXCJTZW5kZXIgRGV0YWlsc1wiKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS50aChudWxsLCBcIkNyZWF0ZWRcIiksXG4gICAgICAgICAgICBSZWFjdC5ET00udGgobnVsbCwgXCJBY3Rpb25zXCIpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuRE9NLnRib2R5KG51bGwsIFxuICAgICAgICAgICAgd2Vic2l0ZV9yb3dzXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuXG5cblxuXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwidGV4dC1jZW50ZXJcIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmJ1dHRvbigge29uQ2xpY2s6dGhpcy5yb3V0ZUFkZFdlYnNpdGUsIGNsYXNzTmFtZTpcImJ1dHRvbiByYWRpdXNcIn0sIFwiQWRkIE5ldyBXZWJzaXRlXCIpXG5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcblxuICB9XG5cbn0pO1xuXG5cbnZhciBBZGRXZWJzaXRlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnQWRkV2Vic2l0ZScsXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblxuICAgIHJldHVybiB7bmFtZV9lcnJvcjogZmFsc2UsIHVybF9lcnJvcjogZmFsc2UsIHNlbmRlcl9uYW1lX2Vycm9yOiBmYWxzZSwgc2VuZGVyX2VtYWlsX2Vycm9yOiBmYWxzZSwgc2VydmVyX2Vycm9yOiB1bmRlZmluZWR9O1xuXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5wcm9wcy5zZXRXZWJzaXRlKHVuZGVmaW5lZCk7XG5cbiAgfSxcblxuICByb3V0ZVdlYnNpdGVzOiBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuc2V0UG9zKFwid2Vic2l0ZXNcIiwgXCJXZWJzaXRlc1wiKTtcbiAgfSxcblxuc2F2ZVdlYnNpdGU6IGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zb2xlLmxvZyhcInNhdmluZy4uXCIpO1xuXG4gIHZhciBzZWxmID0gdGhpcztcblxuICB2YXIgbmFtZSA9ICQoJ2lucHV0I25hbWUnKS52YWwoKTtcbiAgdmFyIHVybCA9ICQoJ2lucHV0I3VybCcpLnZhbCgpO1xuICB2YXIgc2VuZGVyX25hbWUgPSAkKCdpbnB1dCNzZW5kZXJfbmFtZScpLnZhbCgpO1xuICB2YXIgc2VuZGVyX2VtYWlsID0gJCgnaW5wdXQjc2VuZGVyX2VtYWlsJykudmFsKCk7XG5cblxuICAgIC8vIFZhbGlkYXRlIC0gZmllbGRzIG11c3Qgbm90IGJlIGVtcHR5XG4gICAgaWYoXy5pc0VtcHR5KG5hbWUpKSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtuYW1lX2Vycm9yOiBcIk5hbWUgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7bmFtZV9lcnJvcjogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgaWYoXy5pc0VtcHR5KHVybCkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe3VybF9lcnJvcjogXCJVUkwgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7dXJsX2Vycm9yOiBmYWxzZX0pO1xuICAgIH07XG5cbiAgICBpZihfLmlzRW1wdHkoc2VuZGVyX25hbWUpKSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtzZW5kZXJfbmFtZV9lcnJvcjogXCJTZW5kZXIgTmFtZSBjYW5ub3QgYmUgYmxhbmtcIn0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtzZW5kZXJfbmFtZV9lcnJvcjogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgaWYoXy5pc0VtcHR5KHNlbmRlcl9lbWFpbCkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe3NlbmRlcl9lbWFpbF9lcnJvcjogXCJTZW5kZXIgRW1haWwgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VuZGVyX2VtYWlsX2Vycm9yOiBmYWxzZX0pO1xuICAgIH07XG5cbi8vIHNlbmQgdG8gc2VydmVyIGlmIGNsaWVudCB2YWxpZGF0aW9uIHBhc3Nlc1xuaWYoIV8uc29tZShbXy5pc0VtcHR5KG5hbWUpLCBfLmlzRW1wdHkodXJsKSwgXy5pc0VtcHR5KHNlbmRlcl9uYW1lKSwgXy5pc0VtcHR5KHNlbmRlcl9lbWFpbCldKSkge1xuXG4gIHZhciBuZXdfd2Vic2l0ZSA9IHt9O1xuXG4gIG5ld193ZWJzaXRlLm5hbWUgPSBuYW1lO1xuICBuZXdfd2Vic2l0ZS51cmwgPSB1cmw7XG4gIG5ld193ZWJzaXRlLnNlbmRlcl9uYW1lID0gc2VuZGVyX25hbWU7XG4gIG5ld193ZWJzaXRlLnNlbmRlcl9lbWFpbCA9IHNlbmRlcl9lbWFpbDtcblxuICBjb25zb2xlLmxvZyhuZXdfd2Vic2l0ZSk7XG5cbiAgdmFyIGNvb2tpZSA9IEpTT04ucGFyc2UoJC5jb29raWUoXCJhcHBsaWNhdGlvblwiKSk7XG4gIHZhciB0b2tlbiA9IGNvb2tpZS5zZXNzaW9uSWQ7XG5cblxuICBzdXBlcmFnZW50XG4gIC5wb3N0KENPTkZJRy5VUkxTLmFkZFdlYnNpdGUpXG4gIC5zZXQoJ1gtQVBJLUtleScsIHRva2VuKVxuICAucXVlcnkobmV3X3dlYnNpdGUpXG4gIC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgLmVuZChmdW5jdGlvbihlcnJvciwgcmVzKXtcblxuICAgIGNvbnNvbGUubG9nKHJlcyk7XG5cbiAgICBpZihyZXMub2spIHtcblxuICAgICAgc2VsZi5wcm9wcy5zZXRQb3MoXCJ3ZWJzaXRlc1wiLCBcIldlYnNpdGVzXCIpO1xuICAgICAgc2VsZi5wcm9wcy5zZXRBbGVydChuYW1lICsgXCIgaGFzIGJlZW4gYWRkZWQhXCIsIFwic3VjY2Vzc1wiKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAvLyBhIHZhbGlkYXRpb24gZXJyb3Igb2NjdXJyZWRcbiAgICAgICAgICBpZihKU09OLnBhcnNlKHJlcy50ZXh0KS5yZXNwb25zZSkge1xuICAgICAgICAgICAgdmFyIGVycm9ycyA9IEpTT04ucGFyc2UocmVzLnRleHQpLnJlc3BvbnNlLmVycm9yO1xuXG5cbiAgICAgICAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGVycm9ycy5uYW1lKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtuYW1lX2Vycm9yOiBlcnJvcnMubmFtZS5lcnJvcn0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGVycm9ycy51cmwpKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3VybF9lcnJvcjogZXJyb3JzLnVybC5lcnJvcn0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGVycm9ycy5zZW5kZXJfbmFtZSkpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VuZGVyX25hbWVfZXJyb3I6IGVycm9ycy5zZW5kZXJfbmFtZS5lcnJvcn0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGVycm9ycy5zZW5kZXJfZW1haWwpKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3NlbmRlcl9lbWFpbF9lcnJvcjogZXJyb3JzLnNlbmRlcl9lbWFpbC5lcnJvcn0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYSB0b2tlbiBlcnJvciBvY2N1cnJlZFxuICAgICAgICAgICAgaWYoSlNPTi5wYXJzZShyZXMudGV4dCkuZXJyb3IpIHtcbiAgICAgICAgICAgICAgdmFyIGVycm9yID0gSlNPTi5wYXJzZShyZXMudGV4dCkuZXJyb3I7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3NlcnZlcl9lcnJvcjogZXJyb3J9KTtcblxuICAgICAgICAgICAgICBpZihKU09OLnBhcnNlKHJlcy50ZXh0KS5zZXNzaW9uX2ludmFsaWQpIHtcbiAgICAgICAgICAgICAgc2VsZi5wcm9wcy5zZXRMb2dnZWRJbih1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuICAgICAgfSlcblxufVxuXG59LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdmFyIHNlcnZlcl9lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUuc2VydmVyX2Vycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLnNlcnZlcl9lcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuICB2YXIgbmFtZV9lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUubmFtZV9lcnJvciAhPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLm5hbWVfZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgdmFyIHVybF9lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUudXJsX2Vycm9yICE9PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUudXJsX2Vycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gIHZhciBzZW5kZXJfbmFtZV9lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUuc2VuZGVyX25hbWVfZXJyb3IgIT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS5zZW5kZXJfbmFtZV9lcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuICB2YXIgc2VuZGVyX2VtYWlsX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5zZW5kZXJfZW1haWxfZXJyb3IgIT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS5zZW5kZXJfZW1haWxfZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwidGV4dC1jZW50ZXJcIn0sIFxuXG4gICAgICAgICAgICBSZWFjdC5ET00udWwoIHtjbGFzc05hbWU6XCJicmVhZGNydW1ic1wifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00ubGkobnVsbCwgUmVhY3QuRE9NLmEoIHtvbkNsaWNrOnRoaXMucm91dGVXZWJzaXRlc30sIFwiV2Vic2l0ZXNcIikpLFxuICAgICAgICAgICAgUmVhY3QuRE9NLmxpKCB7Y2xhc3NOYW1lOlwiY3VycmVudFwifSwgXCJBZGQgV2Vic2l0ZVwiKVxuICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgUmVhY3QuRE9NLmgyKG51bGwsIFwiQWRkIFdlYnNpdGVcIiksXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInJvd1wifSwgXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5mb3JtKG51bGwsIFxuICAgICAgICAgICAgICBSZWFjdC5ET00uZmllbGRzZXQobnVsbCwgXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5sZWdlbmQobnVsbCwgXCJXZWJzaXRlIERldGFpbHNcIiksXG4gICAgICAgICAgICAgIHNlcnZlcl9lcnJvcigpLFxuICAgICAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJXZWJzaXRlIE5hbWVcIixcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJuYW1lXCIsIHR5cGU6XCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOlwiV2Vic2l0ZSBOYW1lXCJ9ICksXG4gICAgICAgICAgICAgIG5hbWVfZXJyb3IoKVxuICAgICAgICAgICAgICApLFxuXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIlVSTFwiLFxuICAgICAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoIHtpZDpcInVybFwiLCB0eXBlOlwidGV4dFwiLCBwbGFjZWhvbGRlcjpcIldlYnNpdGUgVVJMXCJ9ICksXG4gICAgICAgICAgICAgIHVybF9lcnJvcigpXG4gICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiU2VuZGVyIE5hbWVcIixcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJzZW5kZXJfbmFtZVwiLCB0eXBlOlwidGV4dFwiLCBwbGFjZWhvbGRlcjpcIlNlbmRlciBOYW1lXCJ9ICksXG4gICAgICAgICAgICAgIHNlbmRlcl9uYW1lX2Vycm9yKClcbiAgICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJTZW5kZXIgRW1haWxcIixcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJzZW5kZXJfZW1haWxcIiwgdHlwZTpcInRleHRcIiwgcGxhY2Vob2xkZXI6XCJTZW5kZXIgRW1haWxcIn0gKSxcbiAgICAgICAgICAgICAgc2VuZGVyX2VtYWlsX2Vycm9yKClcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmJ1dHRvbigge29uQ2xpY2s6dGhpcy5zYXZlV2Vic2l0ZSwgY2xhc3NOYW1lOlwiYnV0dG9uIHJhZGl1cyBleHBhbmRcIn0sIFwiQWRkXCIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApXG5cbiAgfVxuXG59KTtcblxudmFyIEVkaXRXZWJzaXRlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnRWRpdFdlYnNpdGUnLFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cbiAgICByZXR1cm4ge25hbWVfZXJyb3I6IGZhbHNlLCB1cmxfZXJyb3I6IGZhbHNlLCBzZW5kZXJfbmFtZV9lcnJvcjogZmFsc2UsIHNlbmRlcl9lbWFpbF9lcnJvcjogZmFsc2UsIHNlcnZlcl9lcnJvcjogdW5kZWZpbmVkfTtcblxuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcblxuXG4gICAgLy8gRW5zdXJlIGN1cnJlbnQgcGF0aCByZWZlcmVuY2VzIGEgd2Vic2l0ZSB0aGF0IHRoZSB1c2VyIG93bnNcbiAgICB2YXIgd2Vic2l0ZV9pZCA9IEJhY2tib25lLmhpc3RvcnkuZnJhZ21lbnQucmVwbGFjZShcIndlYnNpdGVzL2VkaXQvXCIsIFwiXCIpO1xuICAgIHZhciB3ZWJzaXRlcyA9IHRoaXMucHJvcHMud2Vic2l0ZXM7XG5cbiAgICBjb25zb2xlLmxvZyh3ZWJzaXRlX2lkKVxuXG4gICAgaWYodGhpcy5wcm9wcy5hY3RpdmVfd2Vic2l0ZSAhPT0gd2Vic2l0ZV9pZCkge1xuICAgICAgdmFyIG1hdGNoID0gXy5maW5kKHdlYnNpdGVzLCB7XCJpZFwiIDogcGFyc2VJbnQod2Vic2l0ZV9pZCl9KTtcblxuICAgICAgaWYoIV8uaXNFbXB0eShtYXRjaCkpIHtcblxuICAgICAgLy8gUGF0aCBpZCBpcyBhIHZhbGlkIHdlYnNpdGVcbiAgICAgIHRoaXMucHJvcHMuc2V0V2Vic2l0ZSh3ZWJzaXRlX2lkKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8vIFBhdGggaWQgaXMgbm90IGEgdmFsaWQgd2Vic2l0ZVxuICAgICAgdGhpcy5wcm9wcy5zZXRQb3MoXCJ3ZWJzaXRlc1wiLCBcIldlYnNpdGVzXCIpO1xuXG4gICAgfVxuXG4gIH1cbn0sXG5cbnJvdXRlV2Vic2l0ZXM6IGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB0aGlzLnByb3BzLnNldFBvcyhcIndlYnNpdGVzXCIsIFwiV2Vic2l0ZXNcIik7XG59LFxuXG5kZWxldGVXZWJzaXRlOiBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc29sZS5sb2coXCJkZWxldGluZy4uXCIpO1xuXG52YXIgY29va2llID0gSlNPTi5wYXJzZSgkLmNvb2tpZShcImFwcGxpY2F0aW9uXCIpKTtcbnZhciBzZWxmID0gdGhpcztcbiAgdmFyIHRva2VuID0gY29va2llLnNlc3Npb25JZDtcblxuXG4gIHN1cGVyYWdlbnRcbiAgLnBvc3QoQ09ORklHLlVSTFMuZGVsZXRlV2Vic2l0ZSlcbiAgLnNldCgnWC1BUEktS2V5JywgdG9rZW4pXG4gIC5xdWVyeSh7aWQ6IHRoaXMucHJvcHMuYWN0aXZlX3dlYnNpdGV9KVxuICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gIC5lbmQoZnVuY3Rpb24oZXJyb3IsIHJlcyl7XG5cbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgaWYocmVzLm9rKSB7XG5cbiAgICAgIHNlbGYucHJvcHMuc2V0UG9zKFwid2Vic2l0ZXNcIiwgXCJXZWJzaXRlc1wiKTtcbiAgICAgIHNlbGYucHJvcHMuc2V0QWxlcnQoXCJXZWJzaXRlIGhhcyBiZWVuIGRlbGV0ZWQhXCIsIFwic3VjY2Vzc1wiKTtcblxuICAgIH1cblxuICB9KTtcblxuXG59LFxuXG5cbnNhdmVXZWJzaXRlOiBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc29sZS5sb2coXCJzYXZpbmcuLlwiKTtcblxuXG52YXIgY29va2llID0gJC5jb29raWUoXCJhcHBsaWNhdGlvblwiKTtcbnZhciB3ZWJzaXRlcyA9IHRoaXMucHJvcHMud2Vic2l0ZXM7XG5cblxuICB2YXIgYWN0aXZlX3dlYnNpdGUgPSBfLmZpbmQod2Vic2l0ZXMsIHsgXCJpZFwiIDogcGFyc2VJbnQoSlNPTi5wYXJzZShjb29raWUpLmFjdGl2ZV93ZWJzaXRlKX0pO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdmFyIG5hbWUgPSAkKCdpbnB1dCNuYW1lJykudmFsKCk7XG4gIHZhciB1cmwgPSAkKCdpbnB1dCN1cmwnKS52YWwoKTtcbiAgdmFyIHNlbmRlcl9uYW1lID0gJCgnaW5wdXQjc2VuZGVyX25hbWUnKS52YWwoKTtcbiAgdmFyIHNlbmRlcl9lbWFpbCA9ICQoJ2lucHV0I3NlbmRlcl9lbWFpbCcpLnZhbCgpO1xuXG5cbiAgICAvLyBWYWxpZGF0ZSAtIGZpZWxkcyBtdXN0IG5vdCBiZSBlbXB0eVxuICAgIGlmKF8uaXNFbXB0eShuYW1lKSkge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7bmFtZV9lcnJvcjogXCJOYW1lIGNhbm5vdCBiZSBibGFua1wifSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe25hbWVfZXJyb3I6IGZhbHNlfSk7XG4gICAgfTtcblxuICAgIGlmKF8uaXNFbXB0eSh1cmwpKSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHt1cmxfZXJyb3I6IFwiVVJMIGNhbm5vdCBiZSBibGFua1wifSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe3VybF9lcnJvcjogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgaWYoXy5pc0VtcHR5KHNlbmRlcl9uYW1lKSkge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VuZGVyX25hbWVfZXJyb3I6IFwiU2VuZGVyIE5hbWUgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VuZGVyX25hbWVfZXJyb3I6IGZhbHNlfSk7XG4gICAgfTtcblxuICAgIGlmKF8uaXNFbXB0eShzZW5kZXJfZW1haWwpKSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtzZW5kZXJfZW1haWxfZXJyb3I6IFwiU2VuZGVyIEVtYWlsIGNhbm5vdCBiZSBibGFua1wifSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe3NlbmRlcl9lbWFpbF9lcnJvcjogZmFsc2V9KTtcbiAgICB9O1xuXG4vLyBzZW5kIHRvIHNlcnZlciBpZiBjbGllbnQgdmFsaWRhdGlvbiBwYXNzZXNcbmlmKCFfLnNvbWUoW18uaXNFbXB0eShuYW1lKSwgXy5pc0VtcHR5KHVybCksIF8uaXNFbXB0eShzZW5kZXJfbmFtZSksIF8uaXNFbXB0eShzZW5kZXJfZW1haWwpXSkpIHtcblxuICB2YXIgdXBkYXRlZF93ZWJzaXRlID0ge307XG5cbiAgdXBkYXRlZF93ZWJzaXRlLmlkID0gYWN0aXZlX3dlYnNpdGUuaWQ7XG4gIHVwZGF0ZWRfd2Vic2l0ZS5uYW1lID0gbmFtZTtcbiAgdXBkYXRlZF93ZWJzaXRlLnVybCA9IHVybDtcbiAgdXBkYXRlZF93ZWJzaXRlLnNlbmRlcl9uYW1lID0gc2VuZGVyX25hbWU7XG4gIHVwZGF0ZWRfd2Vic2l0ZS5zZW5kZXJfZW1haWwgPSBzZW5kZXJfZW1haWw7XG5cbiAgY29uc29sZS5sb2codXBkYXRlZF93ZWJzaXRlKTtcblxuICB2YXIgY29va2llID0gSlNPTi5wYXJzZSgkLmNvb2tpZShcImFwcGxpY2F0aW9uXCIpKTtcbiAgdmFyIHRva2VuID0gY29va2llLnNlc3Npb25JZDtcblxuXG4gIHN1cGVyYWdlbnRcbiAgLnBvc3QoQ09ORklHLlVSTFMudXBkYXRlV2Vic2l0ZSlcbiAgLnNldCgnWC1BUEktS2V5JywgdG9rZW4pXG4gIC5xdWVyeSh1cGRhdGVkX3dlYnNpdGUpXG4gIC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgLmVuZChmdW5jdGlvbihlcnJvciwgcmVzKXtcblxuICAgIGNvbnNvbGUubG9nKHJlcyk7XG5cbiAgICBpZihyZXMub2spIHtcblxuICAgICAgc2VsZi5wcm9wcy5zZXRQb3MoXCJ3ZWJzaXRlc1wiLCBcIldlYnNpdGVzXCIpO1xuICAgICAgc2VsZi5wcm9wcy5zZXRBbGVydChuYW1lICsgXCIgaGFzIGJlZW4gdXBkYXRlZCFcIiwgXCJzdWNjZXNzXCIpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICAgIC8vIGEgdmFsaWRhdGlvbiBlcnJvciBvY2N1cnJlZFxuICAgICAgICAgIGlmKEpTT04ucGFyc2UocmVzLnRleHQpLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICB2YXIgZXJyb3JzID0gSlNPTi5wYXJzZShyZXMudGV4dCkucmVzcG9uc2UuZXJyb3I7XG5cblxuICAgICAgICAgICAgaWYoIV8uaXNVbmRlZmluZWQoZXJyb3JzLm5hbWUpKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe25hbWVfZXJyb3I6IGVycm9ycy5uYW1lLmVycm9yfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIV8uaXNVbmRlZmluZWQoZXJyb3JzLnVybCkpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7dXJsX2Vycm9yOiBlcnJvcnMudXJsLmVycm9yfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIV8uaXNVbmRlZmluZWQoZXJyb3JzLnNlbmRlcl9uYW1lKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtzZW5kZXJfbmFtZV9lcnJvcjogZXJyb3JzLnNlbmRlcl9uYW1lLmVycm9yfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIV8uaXNVbmRlZmluZWQoZXJyb3JzLnNlbmRlcl9lbWFpbCkpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VuZGVyX2VtYWlsX2Vycm9yOiBlcnJvcnMuc2VuZGVyX2VtYWlsLmVycm9yfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhIHRva2VuIGVycm9yIG9jY3VycmVkXG4gICAgICAgICAgICBpZihKU09OLnBhcnNlKHJlcy50ZXh0KS5lcnJvcikge1xuICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS5lcnJvcjtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VydmVyX2Vycm9yOiBlcnJvcn0pO1xuXG4gICAgICAgICAgICAgIGlmKEpTT04ucGFyc2UocmVzLnRleHQpLnNlc3Npb25faW52YWxpZCkge1xuICAgICAgICAgICAgICBzZWxmLnByb3BzLnNldExvZ2dlZEluKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuXG4gICAgICB9KVxuXG59XG5cbn0sXG5cblxucmVuZGVyOiBmdW5jdGlvbigpIHtcblxudmFyIGNvb2tpZSA9ICQuY29va2llKFwiYXBwbGljYXRpb25cIik7XG52YXIgd2Vic2l0ZXMgPSB0aGlzLnByb3BzLndlYnNpdGVzO1xuXG5cbiAgdmFyIGFjdGl2ZV93ZWJzaXRlID0gXy5maW5kKHdlYnNpdGVzLCB7IFwiaWRcIiA6IHBhcnNlSW50KEpTT04ucGFyc2UoY29va2llKS5hY3RpdmVfd2Vic2l0ZSl9KTtcbiAgdmFyIHdlYnNpdGVfaWQgPSBCYWNrYm9uZS5oaXN0b3J5LmZyYWdtZW50LnJlcGxhY2UoXCJ3ZWJzaXRlcy9lZGl0L1wiLCBcIlwiKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHZhciBzZXJ2ZXJfZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzZWxmLnN0YXRlLnNlcnZlcl9lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS5zZXJ2ZXJfZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgdmFyIG5hbWVfZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzZWxmLnN0YXRlLm5hbWVfZXJyb3IgIT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS5uYW1lX2Vycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gIHZhciB1cmxfZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzZWxmLnN0YXRlLnVybF9lcnJvciAhPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLnVybF9lcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuICB2YXIgc2VuZGVyX25hbWVfZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzZWxmLnN0YXRlLnNlbmRlcl9uYW1lX2Vycm9yICE9PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUuc2VuZGVyX25hbWVfZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNlbmRlcl9lbWFpbF9lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUuc2VuZGVyX2VtYWlsX2Vycm9yICE9PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUuc2VuZGVyX2VtYWlsX2Vycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG5cbiAgaWYoIV8uaXNFbXB0eShhY3RpdmVfd2Vic2l0ZSkpIHtcbiAgICBpZihhY3RpdmVfd2Vic2l0ZS5pZCA9PT0gcGFyc2VJbnQod2Vic2l0ZV9pZCkpIHtcblxuICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwidGV4dC1jZW50ZXJcIn0sIFxuXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS51bCgge2NsYXNzTmFtZTpcImJyZWFkY3J1bWJzXCJ9LCBcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmxpKG51bGwsIFJlYWN0LkRPTS5hKCB7b25DbGljazp0aGlzLnJvdXRlV2Vic2l0ZXN9LCBcIldlYnNpdGVzXCIpKSxcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmxpKCB7Y2xhc3NOYW1lOlwiY3VycmVudFwifSwgXCJFZGl0IFdlYnNpdGVcIiksXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5saSgge2NsYXNzTmFtZTpcImN1cnJlbnRcIn0sIGFjdGl2ZV93ZWJzaXRlLm5hbWUpXG4gICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmgyKG51bGwsIFwiRWRpdGluZyBcIiwgYWN0aXZlX3dlYnNpdGUubmFtZSksXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInJvd1wifSwgXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5mb3JtKG51bGwsIFxuICAgICAgICAgICAgICBSZWFjdC5ET00uZmllbGRzZXQobnVsbCwgXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5sZWdlbmQobnVsbCwgXCJVcGRhdGUgRGV0YWlsc1wiKSxcbiAgICAgICAgICAgICAgc2VydmVyX2Vycm9yKCksXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIldlYnNpdGUgTmFtZVwiLFxuICAgICAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoIHtpZDpcIm5hbWVcIiwgdHlwZTpcInRleHRcIiwgcGxhY2Vob2xkZXI6XCJXZWJzaXRlIE5hbWVcIiwgZGVmYXVsdFZhbHVlOmFjdGl2ZV93ZWJzaXRlLm5hbWV9ICksXG4gICAgICAgICAgICAgIG5hbWVfZXJyb3IoKVxuICAgICAgICAgICAgICApLFxuXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIlVSTFwiLFxuICAgICAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoIHtpZDpcInVybFwiLCB0eXBlOlwidGV4dFwiLCBwbGFjZWhvbGRlcjpcIldlYnNpdGUgVVJMXCIsIGRlZmF1bHRWYWx1ZTphY3RpdmVfd2Vic2l0ZS51cmx9ICksXG4gICAgICAgICAgICAgIHVybF9lcnJvcigpXG4gICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiU2VuZGVyIE5hbWVcIixcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJzZW5kZXJfbmFtZVwiLCB0eXBlOlwidGV4dFwiLCBwbGFjZWhvbGRlcjpcIlNlbmRlciBOYW1lXCIsIGRlZmF1bHRWYWx1ZTphY3RpdmVfd2Vic2l0ZS5zZW5kZXJfbmFtZX0gKSxcbiAgICAgICAgICAgICAgc2VuZGVyX25hbWVfZXJyb3IoKVxuICAgICAgICAgICAgICApLFxuXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIlNlbmRlciBFbWFpbFwiLFxuICAgICAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoIHtpZDpcInNlbmRlcl9lbWFpbFwiLCB0eXBlOlwidGV4dFwiLCBwbGFjZWhvbGRlcjpcIlNlbmRlciBFbWFpbFwiLCBkZWZhdWx0VmFsdWU6YWN0aXZlX3dlYnNpdGUuc2VuZGVyX2VtYWlsfSApLFxuICAgICAgICAgICAgICBzZW5kZXJfZW1haWxfZXJyb3IoKVxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgICBSZWFjdC5ET00uYnV0dG9uKCB7b25DbGljazp0aGlzLnNhdmVXZWJzaXRlLCBjbGFzc05hbWU6XCJidXR0b24gcmFkaXVzIGV4cGFuZFwifSwgXCJVcGRhdGVcIilcbiAgICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgICBSZWFjdC5ET00uaHIobnVsbCApLFxuICAgICAgICAgICAgICBSZWFjdC5ET00uaDMobnVsbCwgXCJQZXJtZW5hbnRseSBEZWxldGUgV2Vic2l0ZVwiKSxcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5wKG51bGwsIFwiQ2xpY2sgdGhlIGJ1dHRvbiBiZWxvdyB0byBcIiwgUmVhY3QuRE9NLnN0cm9uZyhudWxsLCBcInBlcm1lbmFudGx5IHJlbW92ZSB0aGUgXCIsIGFjdGl2ZV93ZWJzaXRlLm5hbWUsIFwiIHdlYnNpdGUgYW5kIGFsbCBvZiBpdHMgZGF0YVwiKSwgXCIgZnJvbSB0aGUgc3lzdGVtLlwiKSxcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmJ1dHRvbigge29uQ2xpY2s6dGhpcy5kZWxldGVXZWJzaXRlLCBjbGFzc05hbWU6XCJidXR0b24gcmFkaXVzIGFsZXJ0IGV4cGFuZFwifSwgXCJEZWxldGVcIilcbiAgICAgICAgICAgICAgKVxuXG5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG59IGVsc2Uge1xuICByZXR1cm4gKFxuICAgICAgICAgIFJlYWN0LkRPTS5kaXYobnVsbCwgXG4gICAgICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCJcbiAgICAgICAgICApKVxufSBcbn0gZWxzZSB7XG4gIHJldHVybiAoXG4gICAgICAgICAgUmVhY3QuRE9NLmRpdihudWxsLCBcbiAgICAgICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIlxuICAgICAgICAgICkpXG59XG59XG5cbn0pO1xuXG5leHBvcnRzLldlYnNpdGVzID0gV2Vic2l0ZXM7XG5leHBvcnRzLkFkZFdlYnNpdGUgPSBBZGRXZWJzaXRlO1xuZXhwb3J0cy5FZGl0V2Vic2l0ZSA9IEVkaXRXZWJzaXRlO1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29tcG9uZW50cy93ZWJzaXRlLmpzeFwiLFwiL2NvbXBvbmVudHNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKipcbiAqXG4gKiBUaGlzIGZpbGUgaXMgdXNlZCB0byBjb25maWd1cmUgc2V0dGluZ3MgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAqXG4gKiBAYXV0aG9yIERocnV2IEJoYXRpYSA8ZGhydXZAZGhydXZiaGF0aWEuY29tPlxuICpcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgV0VCU0lURV9OQU1FIDogXCJSZWFjdCBEZW1vXCIsXG5cbiAgUk9VVEVTIDogW1xuICAgIHtuYW1lOiBcIkRhc2hib2FyZFwiLCB1cmw6IFwiXCIsIHNob3dfaW5fbWVudTogdHJ1ZSwgYWxsb3dfcGFyYW1ldGVyczogZmFsc2V9LFxuICAgIHtuYW1lOiBcIldlYnNpdGVzXCIsIHVybDogXCJ3ZWJzaXRlc1wiLCBzdWJyb3V0ZXM6IFwiQWRkIFdlYnNpdGUsIEVkaXQgV2Vic2l0ZVwiLCBzaG93X2luX21lbnU6IHRydWUsIGFsbG93X3BhcmFtZXRlcnM6IGZhbHNlfSxcbiAgICB7bmFtZTogXCJBZGQgV2Vic2l0ZVwiLCB1cmw6IFwid2Vic2l0ZXMvYWRkXCIsIHNob3dfaW5fbWVudTogZmFsc2UsIGFsbG93X3BhcmFtZXRlcnM6IGZhbHNlfSxcbiAgICB7bmFtZTogXCJFZGl0IFdlYnNpdGVcIiwgdXJsOiBcIndlYnNpdGVzL2VkaXRcIiwgc2hvd19pbl9tZW51OiBmYWxzZSwgYWxsb3dfcGFyYW1ldGVyczogdHJ1ZX0sXG4gICAge25hbWU6IFwiQ2FtcGFpZ25zXCIsIHVybDogXCJjYW1wYWlnbnNcIiwgc2hvd19pbl9tZW51OiB0cnVlLCBhbGxvd19wYXJhbWV0ZXJzOiBmYWxzZX0sXG4gICAge25hbWU6IFwiTXkgQWNjb3VudFwiLCB1cmw6IFwiYWNjb3VudFwiLCBzdWJyb3V0ZXM6IFwiRWRpdCBBY2NvdW50XCIsIHNob3dfaW5fbWVudTogdHJ1ZSwgYWxsb3dfcGFyYW1ldGVyczogZmFsc2V9LFxuICAgIHtuYW1lOiBcIkVkaXQgQWNjb3VudFwiLCB1cmw6IFwiYWNjb3VudC9lZGl0XCIsIHNob3dfaW5fbWVudTogZmFsc2UsIGFsbG93X3BhcmFtZXRlcnM6IGZhbHNlfSxcbiAgICB7bmFtZTogXCJTdXBwb3J0XCIsIHVybDogXCJzdXBwb3J0XCIsIHNob3dfaW5fbWVudTogdHJ1ZSwgYWxsb3dfcGFyYW1ldGVyczogZmFsc2V9XG4gIF0sXG5cbiAgVVJMUyA6IHtcblxuICAgIFwidmFsaWRhdGVcIiA6IFwiaHR0cDovLzE5Mi4xNjguMTc4LjIwOjkwMDAvYXBpL3YxL2F1dGgvdmFsaWRhdGUvXCIsXG4gICAgXCJ1cGRhdGVXZWJzaXRlXCIgOiBcImh0dHA6Ly8xOTIuMTY4LjE3OC4yMDo5MDAwL2FwaS92MS93ZWJzaXRlL3VwZGF0ZVwiLFxuICAgIFwiYWRkV2Vic2l0ZVwiIDogXCJodHRwOi8vMTkyLjE2OC4xNzguMjA6OTAwMC9hcGkvdjEvd2Vic2l0ZS9hZGRcIixcbiAgICBcImRlbGV0ZVdlYnNpdGVcIiA6IFwiaHR0cDovLzE5Mi4xNjguMTc4LjIwOjkwMDAvYXBpL3YxL3dlYnNpdGUvZGVsZXRlXCIsXG4gICAgXCJsb2dpblwiIDogJ2h0dHA6Ly8xOTIuMTY4LjE3OC4yMDo5MDAwL2FwaS92MS9hdXRoL2xvZ2luJyxcbiAgICBcInVwZGF0ZVVzZXJcIiA6IFwiaHR0cDovLzE5Mi4xNjguMTc4LjIwOjkwMDAvYXBpL3YxL3VzZXIvdXBkYXRlXCJcblxuICB9LFxuXG5cbiAgTU9ERSA6IFwiRGVidWdcIlxuXG59O1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2NvbmZpZy5qc1wiLFwiL1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbnZhciBjb25maWcgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XG52YXIgQmFja2JvbmVSb3V0ZXIgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL3JvdXRlclwiKTtcblxuQXBwbGljYXRpb24gPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2xheW91dFwiKS5MYXlvdXQ7XG5cbi8vIExvZ2luID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9sYXlvdXRcIikuTG9naW47XG4vLyBUb3BCYXIgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2xheW91dFwiKS5Ub3BCYXI7XG4vLyBMZWZ0TWVudSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbGF5b3V0XCIpLkxlZnRNZW51O1xuLy8gV2Vic2l0ZVNlbGVjdG9yID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9sYXlvdXRcIikuV2Vic2l0ZVNlbGVjdG9yO1xuLy8gQ29udGVudCA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbGF5b3V0XCIpLkNvbnRlbnQ7XG4vLyBSb3V0ZXIgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2xheW91dFwiKS5Sb3V0ZXI7XG5cblxuXG5cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICQoZG9jdW1lbnQpLmZvdW5kYXRpb24oKTtcblxufSgpO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2Zha2VfMWVjY2RhNDguanNcIixcIi9cIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKipcbiAqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgY29tbW9uIGhlbHBlciBmdW5jdGlvbnMgd2hpY2ggZXh0ZW5kIExvLURhc2gncyBfIG5hbWVzcGFjZS5cbiAqXG4gKiBAbmFtZXNwYWNlIF9cbiAqIEBhdXRob3IgRGhydXYgQmhhdGlhIDxkaHJ1dkBkaHJ1dmJoYXRpYS5jb20+XG4gKlxuICovXG5cbnZhciBDT05GSUcgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XG5cbl8ubWl4aW4oe1xuXG4gIC8qKlxuICAgKlxuICAgKiBDaGVja3MgZm9yIGEgdmFsaWQgc2Vzc2lvbiBjb29raWUgJiBwdWxscyBkb3duIGFueSB1cGRhdGVzIGZyb20gdGhlIHNlcnZlcixcbiAgICogb3RoZXJ3aXNlIGtpbGxzIHRoZSBjdXJyZW50IHNlc3Npb24gd2hpY2ggc2hvd3MgdGhlIExvZ2luIHNjcmVlbi5cbiAgICpcbiAgICovXG4gIGdldFNlc3Npb246IGZ1bmN0aW9uKCkge1xuXG5cbiAgICB2YXIgY29va2llID0gJC5jb29raWUoXCJhcHBsaWNhdGlvblwiKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoY29va2llKSkge1xuXG4gICAgICB2YXIgdG9rZW4gPSBKU09OLnBhcnNlKGNvb2tpZSkuc2Vzc2lvbklkO1xuXG4gICAgICBzdXBlcmFnZW50XG4gICAgICAgIC5nZXQoQ09ORklHLlVSTFMudmFsaWRhdGUgKyB0b2tlbilcbiAgICAgICAgLnNldCgnWC1BUEktS2V5JywgdG9rZW4pXG4gICAgICAgIC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgICAgICAgLmVuZChmdW5jdGlvbihlcnJvciwgcmVzKSB7XG5cbiAgICAgICAgICBpZiAocmVzLm9rID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIHZhciBzZXNzaW9uSWQgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS5zZXNzaW9uSWRcbiAgICAgICAgICAgIHZhciB1c2VyID0gSlNPTi5wYXJzZShyZXMudGV4dCkudXNlclxuXG4gICAgICAgICAgICB2YXIgdXNlcl93ZWJzaXRlcyA9IEpTT04ucGFyc2UocmVzLnRleHQpLndlYnNpdGVzXG5cbiAgICAgICAgICAgIHZhciBhY3RpdmVfd2Vic2l0ZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgaWYgKCFfLmlzRW1wdHkodXNlcl93ZWJzaXRlcykpIHtcbiAgICAgICAgICAgICAgLy8gc2V0IGFjdGl2ZSB3ZWJzaXRlIHRvIHRoZSBsYXN0IHNlbGVjdGVkIHdlYnNpdGUgaW4gdGhlIGNvb2tpZSwgZWxzZSBmaXJzdCB3ZWJzaXRlIGluIHRoZSB1c2VyJ3MgbGlzdFxuICAgICAgICAgICAgICBhY3RpdmVfd2Vic2l0ZSA9IEpTT04ucGFyc2UoY29va2llKS5hY3RpdmVfd2Vic2l0ZTtcblxuXG5cbiAgICAgICAgICAgICAgaWYgKF8uaXNFbXB0eShfLmZpbmQodXNlcl93ZWJzaXRlcywge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogcGFyc2VJbnQoYWN0aXZlX3dlYnNpdGUpXG4gICAgICAgICAgICAgIH0pKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZV93ZWJzaXRlKVxuICAgICAgICAgICAgICAgIGFjdGl2ZV93ZWJzaXRlID0gXy5maXJzdCh1c2VyX3dlYnNpdGVzKS5pZDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQuY29va2llKFwiYXBwbGljYXRpb25cIiwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBcInNlc3Npb25JZFwiOiBzZXNzaW9uSWQsXG4gICAgICAgICAgICAgIFwiYWN0aXZlX3dlYnNpdGVcIjogYWN0aXZlX3dlYnNpdGVcbiAgICAgICAgICAgIH0pLCB7XG4gICAgICAgICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICAgICAgICBleHBpcmVzOiAxMjBcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIHNlbGYuc2V0V2Vic2l0ZShhY3RpdmVfd2Vic2l0ZSk7XG5cbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB1c2VyOiB1c2VyLFxuICAgICAgICAgICAgICBhY3RpdmVfd2Vic2l0ZTogYWN0aXZlX3dlYnNpdGUsXG4gICAgICAgICAgICAgIHdlYnNpdGVzOiB1c2VyX3dlYnNpdGVzLFxuICAgICAgICAgICAgICByZW5kZXI6IHRydWVcbiAgICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIENvb2tpZSBubyBsb25nZXIgdmFsaWQgLSByZW5kZXIgbG9naW4gZm9ybVxuICAgICAgICAgICAgc2VsZi5zZXRVc2VyKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgcmVuZGVyOiB0cnVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG5cbiAgICAgICAgfSk7XG5cblxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gTm8gcHJldiBjb29raWUgLSByZW5kZXIgbG9naW4gZm9ybVxuICAgICAgc2VsZi5zZXRVc2VyKHVuZGVmaW5lZCk7XG4gICAgICBzZWxmLnNldFN0YXRlKHtcbiAgICAgICAgcmVuZGVyOiB0cnVlXG4gICAgICB9KTtcblxuICAgIH1cbiAgfVxuXG59KTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi91dGlsLmpzXCIsXCIvXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuQnVmZmVyLnBvb2xTaXplID0gODE5MlxuXG4vKipcbiAqIElmIGBCdWZmZXIuX3VzZVR5cGVkQXJyYXlzYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKGNvbXBhdGlibGUgZG93biB0byBJRTYpXG4gKi9cbkJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBEZXRlY3QgaWYgYnJvd3NlciBzdXBwb3J0cyBUeXBlZCBBcnJheXMuIFN1cHBvcnRlZCBicm93c2VycyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLFxuICAvLyBDaHJvbWUgNyssIFNhZmFyaSA1LjErLCBPcGVyYSAxMS42KywgaU9TIDQuMisuIElmIHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgYWRkaW5nXG4gIC8vIHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcywgdGhlbiB0aGF0J3MgdGhlIHNhbWUgYXMgbm8gYFVpbnQ4QXJyYXlgIHN1cHBvcnRcbiAgLy8gYmVjYXVzZSB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gYWRkIGFsbCB0aGUgbm9kZSBCdWZmZXIgQVBJIG1ldGhvZHMuIFRoaXMgaXMgYW4gaXNzdWVcbiAgLy8gaW4gRmlyZWZveCA0LTI5LiBOb3cgZml4ZWQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOFxuICB0cnkge1xuICAgIHZhciBidWYgPSBuZXcgQXJyYXlCdWZmZXIoMClcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIGFyci5mb28gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9XG4gICAgcmV0dXJuIDQyID09PSBhcnIuZm9vKCkgJiZcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAvLyBDaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59KSgpXG5cbi8qKlxuICogQ2xhc3M6IEJ1ZmZlclxuICogPT09PT09PT09PT09PVxuICpcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgYXJlIGF1Z21lbnRlZFxuICogd2l0aCBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvciBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgQVBJIGZ1bmN0aW9ucy4gV2UgdXNlXG4gKiBgVWludDhBcnJheWAgc28gdGhhdCBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdCByZXR1cm5zXG4gKiBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBCeSBhdWdtZW50aW5nIHRoZSBpbnN0YW5jZXMsIHdlIGNhbiBhdm9pZCBtb2RpZnlpbmcgdGhlIGBVaW50OEFycmF5YFxuICogcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBCdWZmZXIgKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpXG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybylcblxuICB2YXIgdHlwZSA9IHR5cGVvZiBzdWJqZWN0XG5cbiAgLy8gV29ya2Fyb3VuZDogbm9kZSdzIGJhc2U2NCBpbXBsZW1lbnRhdGlvbiBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgc3RyaW5nc1xuICAvLyB3aGlsZSBiYXNlNjQtanMgZG9lcyBub3QuXG4gIGlmIChlbmNvZGluZyA9PT0gJ2Jhc2U2NCcgJiYgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBzdWJqZWN0ID0gc3RyaW5ndHJpbShzdWJqZWN0KVxuICAgIHdoaWxlIChzdWJqZWN0Lmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICAgIHN1YmplY3QgPSBzdWJqZWN0ICsgJz0nXG4gICAgfVxuICB9XG5cbiAgLy8gRmluZCB0aGUgbGVuZ3RoXG4gIHZhciBsZW5ndGhcbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKVxuICAgIGxlbmd0aCA9IGNvZXJjZShzdWJqZWN0KVxuICBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICBsZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChzdWJqZWN0LCBlbmNvZGluZylcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpXG4gICAgbGVuZ3RoID0gY29lcmNlKHN1YmplY3QubGVuZ3RoKSAvLyBhc3N1bWUgdGhhdCBvYmplY3QgaXMgYXJyYXktbGlrZVxuICBlbHNlXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCBuZWVkcyB0byBiZSBhIG51bWJlciwgYXJyYXkgb3Igc3RyaW5nLicpXG5cbiAgdmFyIGJ1ZlxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIC8vIFByZWZlcnJlZDogUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICBidWYgPSBCdWZmZXIuX2F1Z21lbnQobmV3IFVpbnQ4QXJyYXkobGVuZ3RoKSlcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIFRISVMgaW5zdGFuY2Ugb2YgQnVmZmVyIChjcmVhdGVkIGJ5IGBuZXdgKVxuICAgIGJ1ZiA9IHRoaXNcbiAgICBidWYubGVuZ3RoID0gbGVuZ3RoXG4gICAgYnVmLl9pc0J1ZmZlciA9IHRydWVcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzICYmIHR5cGVvZiBzdWJqZWN0LmJ5dGVMZW5ndGggPT09ICdudW1iZXInKSB7XG4gICAgLy8gU3BlZWQgb3B0aW1pemF0aW9uIC0tIHVzZSBzZXQgaWYgd2UncmUgY29weWluZyBmcm9tIGEgdHlwZWQgYXJyYXlcbiAgICBidWYuX3NldChzdWJqZWN0KVxuICB9IGVsc2UgaWYgKGlzQXJyYXlpc2goc3ViamVjdCkpIHtcbiAgICAvLyBUcmVhdCBhcnJheS1pc2ggb2JqZWN0cyBhcyBhIGJ5dGUgYXJyYXlcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkpXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3QucmVhZFVJbnQ4KGkpXG4gICAgICBlbHNlXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3RbaV1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBidWYud3JpdGUoc3ViamVjdCwgMCwgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgIUJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgJiYgIW5vWmVybykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYnVmW2ldID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuLy8gU1RBVElDIE1FVEhPRFNcbi8vID09PT09PT09PT09PT09XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICdyYXcnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiAoYikge1xuICByZXR1cm4gISEoYiAhPT0gbnVsbCAmJiBiICE9PSB1bmRlZmluZWQgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gZnVuY3Rpb24gKHN0ciwgZW5jb2RpbmcpIHtcbiAgdmFyIHJldFxuICBzdHIgPSBzdHIgKyAnJ1xuICBzd2l0Y2ggKGVuY29kaW5nIHx8ICd1dGY4Jykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoIC8gMlxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdyYXcnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAqIDJcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gKGxpc3QsIHRvdGFsTGVuZ3RoKSB7XG4gIGFzc2VydChpc0FycmF5KGxpc3QpLCAnVXNhZ2U6IEJ1ZmZlci5jb25jYXQobGlzdCwgW3RvdGFsTGVuZ3RoXSlcXG4nICtcbiAgICAgICdsaXN0IHNob3VsZCBiZSBhbiBBcnJheS4nKVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKDApXG4gIH0gZWxzZSBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gbGlzdFswXVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB0b3RhbExlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICB0b3RhbExlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdG90YWxMZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcih0b3RhbExlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICBpdGVtLmNvcHkoYnVmLCBwb3MpXG4gICAgcG9zICs9IGl0ZW0ubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG4vLyBCVUZGRVIgSU5TVEFOQ0UgTUVUSE9EU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gX2hleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgYXNzZXJ0KHN0ckxlbiAlIDIgPT09IDAsICdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYnl0ZSA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBhc3NlcnQoIWlzTmFOKGJ5dGUpLCAnSW52YWxpZCBoZXggc3RyaW5nJylcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlXG4gIH1cbiAgQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPSBpICogMlxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBfdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX2FzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX2JpbmFyeVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIF9hc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gX2Jhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfdXRmMTZsZVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBTdXBwb3J0IGJvdGggKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKVxuICAvLyBhbmQgdGhlIGxlZ2FjeSAoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpXG4gIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgaWYgKCFpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICB9IGVsc2UgeyAgLy8gbGVnYWN5XG4gICAgdmFyIHN3YXAgPSBlbmNvZGluZ1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgb2Zmc2V0ID0gbGVuZ3RoXG4gICAgbGVuZ3RoID0gc3dhcFxuICB9XG5cbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gX2hleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IF91dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gX2FzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IF9iaW5hcnlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gX2Jhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBfdXRmMTZsZVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcbiAgc3RhcnQgPSBOdW1iZXIoc3RhcnQpIHx8IDBcbiAgZW5kID0gKGVuZCAhPT0gdW5kZWZpbmVkKVxuICAgID8gTnVtYmVyKGVuZClcbiAgICA6IGVuZCA9IHNlbGYubGVuZ3RoXG5cbiAgLy8gRmFzdHBhdGggZW1wdHkgc3RyaW5nc1xuICBpZiAoZW5kID09PSBzdGFydClcbiAgICByZXR1cm4gJydcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gX2hleFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IF91dGY4U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gX2FzY2lpU2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IF9iaW5hcnlTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gX2Jhc2U2NFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBfdXRmMTZsZVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0X3N0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzXG5cbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKCF0YXJnZXRfc3RhcnQpIHRhcmdldF9zdGFydCA9IDBcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCBzb3VyY2UubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGFzc2VydChlbmQgPj0gc3RhcnQsICdzb3VyY2VFbmQgPCBzb3VyY2VTdGFydCcpXG4gIGFzc2VydCh0YXJnZXRfc3RhcnQgPj0gMCAmJiB0YXJnZXRfc3RhcnQgPCB0YXJnZXQubGVuZ3RoLFxuICAgICAgJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoc3RhcnQgPj0gMCAmJiBzdGFydCA8IHNvdXJjZS5sZW5ndGgsICdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSBzb3VyY2UubGVuZ3RoLCAnc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aClcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCA8IGVuZCAtIHN0YXJ0KVxuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgKyBzdGFydFxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmIChsZW4gPCAxMDAgfHwgIUJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRfc3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0Ll9zZXQodGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLCB0YXJnZXRfc3RhcnQpXG4gIH1cbn1cblxuZnVuY3Rpb24gX2Jhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiBfdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJlcyA9ICcnXG4gIHZhciB0bXAgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBpZiAoYnVmW2ldIDw9IDB4N0YpIHtcbiAgICAgIHJlcyArPSBkZWNvZGVVdGY4Q2hhcih0bXApICsgU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gICAgICB0bXAgPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXAgKz0gJyUnICsgYnVmW2ldLnRvU3RyaW5nKDE2KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXMgKyBkZWNvZGVVdGY4Q2hhcih0bXApXG59XG5cbmZ1bmN0aW9uIF9hc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKylcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gX2JpbmFyeVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIF9hc2NpaVNsaWNlKGJ1Ziwgc3RhcnQsIGVuZClcbn1cblxuZnVuY3Rpb24gX2hleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gX3V0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSsxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSBjbGFtcChzdGFydCwgbGVuLCAwKVxuICBlbmQgPSBjbGFtcChlbmQsIGxlbiwgbGVuKVxuXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5fYXVnbWVudCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpKVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgdmFyIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyBpKyspIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgICByZXR1cm4gbmV3QnVmXG4gIH1cbn1cblxuLy8gYGdldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLmdldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMucmVhZFVJbnQ4KG9mZnNldClcbn1cblxuLy8gYHNldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHYsIG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLnNldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMud3JpdGVVSW50OCh2LCBvZmZzZXQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbmZ1bmN0aW9uIF9yZWFkVUludDE2IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbFxuICBpZiAobGl0dGxlRW5kaWFuKSB7XG4gICAgdmFsID0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV0gPDwgOFxuICB9IGVsc2Uge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV1cbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDE2KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDE2KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZFVJbnQzMiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIGlmIChvZmZzZXQgKyAyIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDJdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgICB2YWwgfD0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0ICsgM10gPDwgMjQgPj4+IDApXG4gIH0gZWxzZSB7XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgPSBidWZbb2Zmc2V0ICsgMV0gPDwgMTZcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMl0gPDwgOFxuICAgIGlmIChvZmZzZXQgKyAzIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAzXVxuICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0XSA8PCAyNCA+Pj4gMClcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDMyKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDMyKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsXG4gICAgICAgICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICB2YXIgbmVnID0gdGhpc1tvZmZzZXRdICYgMHg4MFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuZnVuY3Rpb24gX3JlYWRJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWwgPSBfcmVhZFVJbnQxNihidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCB0cnVlKVxuICB2YXIgbmVnID0gdmFsICYgMHg4MDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQxNih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MTYodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gX3JlYWRVSW50MzIoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgdHJ1ZSlcbiAgdmFyIG5lZyA9IHZhbCAmIDB4ODAwMDAwMDBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmZmZmZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQzMih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MzIodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkRmxvYXQgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgcmV0dXJuIGllZWU3NTQucmVhZChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEZsb2F0KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWREb3VibGUgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCArIDcgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgcmV0dXJuIGllZWU3NTQucmVhZChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWREb3VibGUodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWREb3VibGUodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuXG5cbiAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbn1cblxuZnVuY3Rpb24gX3dyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZilcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4obGVuIC0gb2Zmc2V0LCAyKTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9XG4gICAgICAgICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAgICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZmZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgNCk7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2YsIC0weDgwKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICB0aGlzLndyaXRlVUludDgodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICB0aGlzLndyaXRlVUludDgoMHhmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZmZmLCAtMHg4MDAwKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgX3dyaXRlVUludDE2KGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbiAgZWxzZVxuICAgIF93cml0ZVVJbnQxNihidWYsIDB4ZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIF93cml0ZVVJbnQzMihidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICBfd3JpdGVVSW50MzIoYnVmLCAweGZmZmZmZmZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZklFRUU3NTQodmFsdWUsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyA3IDwgYnVmLmxlbmd0aCxcbiAgICAgICAgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZJRUVFNzU0KHZhbHVlLCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBmaWxsKHZhbHVlLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXZhbHVlKSB2YWx1ZSA9IDBcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kKSBlbmQgPSB0aGlzLmxlbmd0aFxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5jaGFyQ29kZUF0KDApXG4gIH1cblxuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpLCAndmFsdWUgaXMgbm90IGEgbnVtYmVyJylcbiAgYXNzZXJ0KGVuZCA+PSBzdGFydCwgJ2VuZCA8IHN0YXJ0JylcblxuICAvLyBGaWxsIDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGFzc2VydChzdGFydCA+PSAwICYmIHN0YXJ0IDwgdGhpcy5sZW5ndGgsICdzdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSB0aGlzLmxlbmd0aCwgJ2VuZCBvdXQgb2YgYm91bmRzJylcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHRoaXNbaV0gPSB2YWx1ZVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG91dCA9IFtdXG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgb3V0W2ldID0gdG9IZXgodGhpc1tpXSlcbiAgICBpZiAoaSA9PT0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUykge1xuICAgICAgb3V0W2kgKyAxXSA9ICcuLi4nXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIG91dC5qb2luKCcgJykgKyAnPidcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBBcnJheUJ1ZmZlcmAgd2l0aCB0aGUgKmNvcGllZCogbWVtb3J5IG9mIHRoZSBidWZmZXIgaW5zdGFuY2UuXG4gKiBBZGRlZCBpbiBOb2RlIDAuMTIuIE9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBBcnJheUJ1ZmZlci5cbiAqL1xuQnVmZmVyLnByb3RvdHlwZS50b0FycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICAgIHJldHVybiAobmV3IEJ1ZmZlcih0aGlzKSkuYnVmZmVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBidWYgPSBuZXcgVWludDhBcnJheSh0aGlzLmxlbmd0aClcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidWYubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpXG4gICAgICAgIGJ1ZltpXSA9IHRoaXNbaV1cbiAgICAgIHJldHVybiBidWYuYnVmZmVyXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQnVmZmVyLnRvQXJyYXlCdWZmZXIgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInKVxuICB9XG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxudmFyIEJQID0gQnVmZmVyLnByb3RvdHlwZVxuXG4vKipcbiAqIEF1Z21lbnQgYSBVaW50OEFycmF5ICppbnN0YW5jZSogKG5vdCB0aGUgVWludDhBcnJheSBjbGFzcyEpIHdpdGggQnVmZmVyIG1ldGhvZHNcbiAqL1xuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX2lzQnVmZmVyID0gdHJ1ZVxuXG4gIC8vIHNhdmUgcmVmZXJlbmNlIHRvIG9yaWdpbmFsIFVpbnQ4QXJyYXkgZ2V0L3NldCBtZXRob2RzIGJlZm9yZSBvdmVyd3JpdGluZ1xuICBhcnIuX2dldCA9IGFyci5nZXRcbiAgYXJyLl9zZXQgPSBhcnIuc2V0XG5cbiAgLy8gZGVwcmVjYXRlZCwgd2lsbCBiZSByZW1vdmVkIGluIG5vZGUgMC4xMytcbiAgYXJyLmdldCA9IEJQLmdldFxuICBhcnIuc2V0ID0gQlAuc2V0XG5cbiAgYXJyLndyaXRlID0gQlAud3JpdGVcbiAgYXJyLnRvU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvTG9jYWxlU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvSlNPTiA9IEJQLnRvSlNPTlxuICBhcnIuY29weSA9IEJQLmNvcHlcbiAgYXJyLnNsaWNlID0gQlAuc2xpY2VcbiAgYXJyLnJlYWRVSW50OCA9IEJQLnJlYWRVSW50OFxuICBhcnIucmVhZFVJbnQxNkxFID0gQlAucmVhZFVJbnQxNkxFXG4gIGFyci5yZWFkVUludDE2QkUgPSBCUC5yZWFkVUludDE2QkVcbiAgYXJyLnJlYWRVSW50MzJMRSA9IEJQLnJlYWRVSW50MzJMRVxuICBhcnIucmVhZFVJbnQzMkJFID0gQlAucmVhZFVJbnQzMkJFXG4gIGFyci5yZWFkSW50OCA9IEJQLnJlYWRJbnQ4XG4gIGFyci5yZWFkSW50MTZMRSA9IEJQLnJlYWRJbnQxNkxFXG4gIGFyci5yZWFkSW50MTZCRSA9IEJQLnJlYWRJbnQxNkJFXG4gIGFyci5yZWFkSW50MzJMRSA9IEJQLnJlYWRJbnQzMkxFXG4gIGFyci5yZWFkSW50MzJCRSA9IEJQLnJlYWRJbnQzMkJFXG4gIGFyci5yZWFkRmxvYXRMRSA9IEJQLnJlYWRGbG9hdExFXG4gIGFyci5yZWFkRmxvYXRCRSA9IEJQLnJlYWRGbG9hdEJFXG4gIGFyci5yZWFkRG91YmxlTEUgPSBCUC5yZWFkRG91YmxlTEVcbiAgYXJyLnJlYWREb3VibGVCRSA9IEJQLnJlYWREb3VibGVCRVxuICBhcnIud3JpdGVVSW50OCA9IEJQLndyaXRlVUludDhcbiAgYXJyLndyaXRlVUludDE2TEUgPSBCUC53cml0ZVVJbnQxNkxFXG4gIGFyci53cml0ZVVJbnQxNkJFID0gQlAud3JpdGVVSW50MTZCRVxuICBhcnIud3JpdGVVSW50MzJMRSA9IEJQLndyaXRlVUludDMyTEVcbiAgYXJyLndyaXRlVUludDMyQkUgPSBCUC53cml0ZVVJbnQzMkJFXG4gIGFyci53cml0ZUludDggPSBCUC53cml0ZUludDhcbiAgYXJyLndyaXRlSW50MTZMRSA9IEJQLndyaXRlSW50MTZMRVxuICBhcnIud3JpdGVJbnQxNkJFID0gQlAud3JpdGVJbnQxNkJFXG4gIGFyci53cml0ZUludDMyTEUgPSBCUC53cml0ZUludDMyTEVcbiAgYXJyLndyaXRlSW50MzJCRSA9IEJQLndyaXRlSW50MzJCRVxuICBhcnIud3JpdGVGbG9hdExFID0gQlAud3JpdGVGbG9hdExFXG4gIGFyci53cml0ZUZsb2F0QkUgPSBCUC53cml0ZUZsb2F0QkVcbiAgYXJyLndyaXRlRG91YmxlTEUgPSBCUC53cml0ZURvdWJsZUxFXG4gIGFyci53cml0ZURvdWJsZUJFID0gQlAud3JpdGVEb3VibGVCRVxuICBhcnIuZmlsbCA9IEJQLmZpbGxcbiAgYXJyLmluc3BlY3QgPSBCUC5pbnNwZWN0XG4gIGFyci50b0FycmF5QnVmZmVyID0gQlAudG9BcnJheUJ1ZmZlclxuXG4gIHJldHVybiBhcnJcbn1cblxuLy8gc2xpY2Uoc3RhcnQsIGVuZClcbmZ1bmN0aW9uIGNsYW1wIChpbmRleCwgbGVuLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgaW5kZXggPSB+fmluZGV4OyAgLy8gQ29lcmNlIHRvIGludGVnZXIuXG4gIGlmIChpbmRleCA+PSBsZW4pIHJldHVybiBsZW5cbiAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleFxuICBpbmRleCArPSBsZW5cbiAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleFxuICByZXR1cm4gMFxufVxuXG5mdW5jdGlvbiBjb2VyY2UgKGxlbmd0aCkge1xuICAvLyBDb2VyY2UgbGVuZ3RoIHRvIGEgbnVtYmVyIChwb3NzaWJseSBOYU4pLCByb3VuZCB1cFxuICAvLyBpbiBjYXNlIGl0J3MgZnJhY3Rpb25hbCAoZS5nLiAxMjMuNDU2KSB0aGVuIGRvIGFcbiAgLy8gZG91YmxlIG5lZ2F0ZSB0byBjb2VyY2UgYSBOYU4gdG8gMC4gRWFzeSwgcmlnaHQ/XG4gIGxlbmd0aCA9IH5+TWF0aC5jZWlsKCtsZW5ndGgpXG4gIHJldHVybiBsZW5ndGggPCAwID8gMCA6IGxlbmd0aFxufVxuXG5mdW5jdGlvbiBpc0FycmF5IChzdWJqZWN0KSB7XG4gIHJldHVybiAoQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoc3ViamVjdCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ViamVjdCkgPT09ICdbb2JqZWN0IEFycmF5XSdcbiAgfSkoc3ViamVjdClcbn1cblxuZnVuY3Rpb24gaXNBcnJheWlzaCAoc3ViamVjdCkge1xuICByZXR1cm4gaXNBcnJheShzdWJqZWN0KSB8fCBCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkgfHxcbiAgICAgIHN1YmplY3QgJiYgdHlwZW9mIHN1YmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICB0eXBlb2Ygc3ViamVjdC5sZW5ndGggPT09ICdudW1iZXInXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYiA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaWYgKGIgPD0gMHg3RilcbiAgICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKVxuICAgIGVsc2Uge1xuICAgICAgdmFyIHN0YXJ0ID0gaVxuICAgICAgaWYgKGIgPj0gMHhEODAwICYmIGIgPD0gMHhERkZGKSBpKytcbiAgICAgIHZhciBoID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0ci5zbGljZShzdGFydCwgaSsxKSkuc3Vic3RyKDEpLnNwbGl0KCclJylcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaC5sZW5ndGg7IGorKylcbiAgICAgICAgYnl0ZUFycmF5LnB1c2gocGFyc2VJbnQoaFtqXSwgMTYpKVxuICAgIH1cbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShzdHIpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgcG9zXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpXG4gICAgICBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGRlY29kZVV0ZjhDaGFyIChzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhGRkZEKSAvLyBVVEYgOCBpbnZhbGlkIGNoYXJcbiAgfVxufVxuXG4vKlxuICogV2UgaGF2ZSB0byBtYWtlIHN1cmUgdGhhdCB0aGUgdmFsdWUgaXMgYSB2YWxpZCBpbnRlZ2VyLiBUaGlzIG1lYW5zIHRoYXQgaXRcbiAqIGlzIG5vbi1uZWdhdGl2ZS4gSXQgaGFzIG5vIGZyYWN0aW9uYWwgY29tcG9uZW50IGFuZCB0aGF0IGl0IGRvZXMgbm90XG4gKiBleGNlZWQgdGhlIG1heGltdW0gYWxsb3dlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gdmVyaWZ1aW50ICh2YWx1ZSwgbWF4KSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA+PSAwLCAnc3BlY2lmaWVkIGEgbmVnYXRpdmUgdmFsdWUgZm9yIHdyaXRpbmcgYW4gdW5zaWduZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgaXMgbGFyZ2VyIHRoYW4gbWF4aW11bSB2YWx1ZSBmb3IgdHlwZScpXG4gIGFzc2VydChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUsICd2YWx1ZSBoYXMgYSBmcmFjdGlvbmFsIGNvbXBvbmVudCcpXG59XG5cbmZ1bmN0aW9uIHZlcmlmc2ludCAodmFsdWUsIG1heCwgbWluKSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBsYXJnZXIgdGhhbiBtYXhpbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPj0gbWluLCAndmFsdWUgc21hbGxlciB0aGFuIG1pbmltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUsICd2YWx1ZSBoYXMgYSBmcmFjdGlvbmFsIGNvbXBvbmVudCcpXG59XG5cbmZ1bmN0aW9uIHZlcmlmSUVFRTc1NCAodmFsdWUsIG1heCwgbWluKSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBsYXJnZXIgdGhhbiBtYXhpbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPj0gbWluLCAndmFsdWUgc21hbGxlciB0aGFuIG1pbmltdW0gYWxsb3dlZCB2YWx1ZScpXG59XG5cbmZ1bmN0aW9uIGFzc2VydCAodGVzdCwgbWVzc2FnZSkge1xuICBpZiAoIXRlc3QpIHRocm93IG5ldyBFcnJvcihtZXNzYWdlIHx8ICdGYWlsZWQgYXNzZXJ0aW9uJylcbn1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanNcIixcIi8uLi8uLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xudmFyIGxvb2t1cCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxuOyhmdW5jdGlvbiAoZXhwb3J0cykge1xuXHQndXNlIHN0cmljdCc7XG5cbiAgdmFyIEFyciA9ICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgPyBVaW50OEFycmF5XG4gICAgOiBBcnJheVxuXG5cdHZhciBaRVJPICAgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgUExVUyAgID0gJysnLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIICA9ICcvJy5jaGFyQ29kZUF0KDApXG5cdHZhciBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgTE9XRVIgID0gJ2EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFVQUEVSICA9ICdBJy5jaGFyQ29kZUF0KDApXG5cblx0ZnVuY3Rpb24gZGVjb2RlIChlbHQpIHtcblx0XHR2YXIgY29kZSA9IGVsdC5jaGFyQ29kZUF0KDApXG5cdFx0aWYgKGNvZGUgPT09IFBMVVMpXG5cdFx0XHRyZXR1cm4gNjIgLy8gJysnXG5cdFx0aWYgKGNvZGUgPT09IFNMQVNIKVxuXHRcdFx0cmV0dXJuIDYzIC8vICcvJ1xuXHRcdGlmIChjb2RlIDwgTlVNQkVSKVxuXHRcdFx0cmV0dXJuIC0xIC8vbm8gbWF0Y2hcblx0XHRpZiAoY29kZSA8IE5VTUJFUiArIDEwKVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBOVU1CRVIgKyAyNiArIDI2XG5cdFx0aWYgKGNvZGUgPCBVUFBFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBVUFBFUlxuXHRcdGlmIChjb2RlIDwgTE9XRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gTE9XRVIgKyAyNlxuXHR9XG5cblx0ZnVuY3Rpb24gYjY0VG9CeXRlQXJyYXkgKGI2NCkge1xuXHRcdHZhciBpLCBqLCBsLCB0bXAsIHBsYWNlSG9sZGVycywgYXJyXG5cblx0XHRpZiAoYjY0Lmxlbmd0aCAlIDQgPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuXHRcdH1cblxuXHRcdC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHR3byBwbGFjZWhvbGRlcnMsIHRoYW4gdGhlIHR3byBjaGFyYWN0ZXJzIGJlZm9yZSBpdFxuXHRcdC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuXHRcdC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuXHRcdC8vIHRoaXMgaXMganVzdCBhIGNoZWFwIGhhY2sgdG8gbm90IGRvIGluZGV4T2YgdHdpY2Vcblx0XHR2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXHRcdHBsYWNlSG9sZGVycyA9ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAyKSA/IDIgOiAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMSkgPyAxIDogMFxuXG5cdFx0Ly8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5cdFx0YXJyID0gbmV3IEFycihiNjQubGVuZ3RoICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpXG5cblx0XHQvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG5cdFx0bCA9IHBsYWNlSG9sZGVycyA+IDAgPyBiNjQubGVuZ3RoIC0gNCA6IGI2NC5sZW5ndGhcblxuXHRcdHZhciBMID0gMFxuXG5cdFx0ZnVuY3Rpb24gcHVzaCAodikge1xuXHRcdFx0YXJyW0wrK10gPSB2XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgaiA9IDA7IGkgPCBsOyBpICs9IDQsIGogKz0gMykge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxOCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCAxMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA8PCA2KSB8IGRlY29kZShiNjQuY2hhckF0KGkgKyAzKSlcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMDAwKSA+PiAxNilcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMCkgPj4gOClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPj4gNClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxMCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCA0KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpID4+IDIpXG5cdFx0XHRwdXNoKCh0bXAgPj4gOCkgJiAweEZGKVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdHJldHVybiBhcnJcblx0fVxuXG5cdGZ1bmN0aW9uIHVpbnQ4VG9CYXNlNjQgKHVpbnQ4KSB7XG5cdFx0dmFyIGksXG5cdFx0XHRleHRyYUJ5dGVzID0gdWludDgubGVuZ3RoICUgMywgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcblx0XHRcdG91dHB1dCA9IFwiXCIsXG5cdFx0XHR0ZW1wLCBsZW5ndGhcblxuXHRcdGZ1bmN0aW9uIGVuY29kZSAobnVtKSB7XG5cdFx0XHRyZXR1cm4gbG9va3VwLmNoYXJBdChudW0pXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcblx0XHRcdHJldHVybiBlbmNvZGUobnVtID4+IDE4ICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDEyICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDYgJiAweDNGKSArIGVuY29kZShudW0gJiAweDNGKVxuXHRcdH1cblxuXHRcdC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcblx0XHRmb3IgKGkgPSAwLCBsZW5ndGggPSB1aW50OC5sZW5ndGggLSBleHRyYUJ5dGVzOyBpIDwgbGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdHRlbXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pXG5cdFx0XHRvdXRwdXQgKz0gdHJpcGxldFRvQmFzZTY0KHRlbXApXG5cdFx0fVxuXG5cdFx0Ly8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuXHRcdHN3aXRjaCAoZXh0cmFCeXRlcykge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0ZW1wID0gdWludDhbdWludDgubGVuZ3RoIC0gMV1cblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDIpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz09J1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0ZW1wID0gKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDJdIDw8IDgpICsgKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMTApXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPj4gNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDIpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9J1xuXHRcdFx0XHRicmVha1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXRcblx0fVxuXG5cdG1vZHVsZS5leHBvcnRzLnRvQnl0ZUFycmF5ID0gYjY0VG9CeXRlQXJyYXlcblx0bW9kdWxlLmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IHVpbnQ4VG9CYXNlNjRcbn0oKSlcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWIvYjY0LmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYlwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgbkJpdHMgPSAtNyxcbiAgICAgIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMCxcbiAgICAgIGQgPSBpc0xFID8gLTEgOiAxLFxuICAgICAgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXTtcblxuICBpICs9IGQ7XG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIHMgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBlTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgZSA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IG1MZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhcztcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpO1xuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbik7XG4gICAgZSA9IGUgLSBlQmlhcztcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKTtcbn07XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbihidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgYyxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMCksXG4gICAgICBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSksXG4gICAgICBkID0gaXNMRSA/IDEgOiAtMSxcbiAgICAgIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDA7XG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSk7XG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDA7XG4gICAgZSA9IGVNYXg7XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpO1xuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLTtcbiAgICAgIGMgKj0gMjtcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKys7XG4gICAgICBjIC89IDI7XG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMDtcbiAgICAgIGUgPSBlTWF4O1xuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSBlICsgZUJpYXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSAwO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpO1xuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG07XG4gIGVMZW4gKz0gbUxlbjtcbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KTtcblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjg7XG59O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2llZWU3NTRcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5wcm9jZXNzLm5leHRUaWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FuU2V0SW1tZWRpYXRlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuc2V0SW1tZWRpYXRlO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIGlmIChjYW5Qb3N0KSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IFtdO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV2LnNvdXJjZTtcbiAgICAgICAgICAgIGlmICgoc291cmNlID09PSB3aW5kb3cgfHwgc291cmNlID09PSBudWxsKSAmJiBldi5kYXRhID09PSAncHJvY2Vzcy10aWNrJykge1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdwcm9jZXNzLXRpY2snLCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSkoKTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn1cblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzc1wiKSJdfQ==
