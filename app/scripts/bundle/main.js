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
    "updateAccount" : "http://192.168.178.20:9000/api/v1/account/update"

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
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_1ddfaddc.js","/")
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL2FwcC9zY3JpcHRzL2NvbXBvbmVudHMvZGFzaGJvYXJkLmpzeCIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvYXBwL3NjcmlwdHMvY29tcG9uZW50cy9sYXlvdXQuanN4IiwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9hcHAvc2NyaXB0cy9jb21wb25lbnRzL215LWFjY291bnQuanN4IiwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9hcHAvc2NyaXB0cy9jb21wb25lbnRzL3JvdXRlci5qc3giLCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL2FwcC9zY3JpcHRzL2NvbXBvbmVudHMvd2Vic2l0ZS5qc3giLCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL2FwcC9zY3JpcHRzL2NvbmZpZy5qcyIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvYXBwL3NjcmlwdHMvZmFrZV8xZGRmYWRkYy5qcyIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvYXBwL3NjcmlwdHMvdXRpbC5qcyIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanMiLCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOWxCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdm1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKiogQGpzeCBSZWFjdC5ET00gKi9cblxudmFyIERhc2hib2FyZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ0Rhc2hib2FyZCcsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuRE9NLmRpdihudWxsLCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5wKG51bGwsIHRoaXMucHJvcHMucGF0aCksXG5cbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRG9uZWMgbnVsbGEgbmlzbCwgZmVybWVudHVtIHNpdCBhbWV0IGp1c3RvIHZlbCwgY29tbW9kbyBoZW5kcmVyaXQgbWV0dXMuIFF1aXNxdWUgZGlnbmlzc2ltIGV1IHNhcGllbiB2ZWwgb3JuYXJlLiBOdWxsYSB2dWxwdXRhdGUgZHVpIGV0IGxvcmVtIHZ1bHB1dGF0ZSBmZXJtZW50dW0uIE1hdXJpcyB2dWxwdXRhdGUgZmFjaWxpc2lzIHVybmEgdmVsIGZyaW5naWxsYS4gU3VzcGVuZGlzc2UgY29uZ3VlIGdyYXZpZGEgcmlzdXMgZWdldCBhbGlxdWV0LiBDcmFzIGEgaW1wZXJkaWV0IG51bGxhLCBzaXQgYW1ldCBjb252YWxsaXMgb2Rpby4gQWVuZWFuIGVyYXQgZXJhdCwgZWxlbWVudHVtIHNpdCBhbWV0IGFyY3UgcXVpcywgYWNjdW1zYW4gY29tbW9kbyBzYXBpZW4uIE1hZWNlbmFzIGxhY2luaWEgZXN0IHF1aXMgbWFzc2EgdWx0cmljaWVzIHVsdHJpY2llcy4gRG9uZWMgbWF1cmlzIG1pLCBhY2N1bXNhbiBhYyBlcmF0IGV0LCBzb2xsaWNpdHVkaW4gZnJpbmdpbGxhIG1hdXJpcy4gTnVuYyB2YXJpdXMgZmVybWVudHVtIGNvbnNlY3RldHVyLiBTdXNwZW5kaXNzZSBtYXR0aXMgZHVpIG5lYyBlZ2VzdGFzIHVsdHJpY2VzLiBTZWQgc29kYWxlcyBpZCB0dXJwaXMgdXQgc2FnaXR0aXMuIFN1c3BlbmRpc3NlIGludGVyZHVtIHRyaXN0aXF1ZSBlbGl0LiBQaGFzZWxsdXMgc2l0IGFtZXQgbWF1cmlzIGRpYW0uXCIrJyAnK1xuXG5cIkNyYXMgdmVsIHBlbGxlbnRlc3F1ZSBuaXNpLCBub24gYWxpcXVhbSBlbmltLiBQcmFlc2VudCByaG9uY3VzIHF1aXMgbGFjdXMgZXUgdml2ZXJyYS4gVmVzdGlidWx1bSBzb2xsaWNpdHVkaW4gc2l0IGFtZXQgbnVuYyBhIHZ1bHB1dGF0ZS4gSW4gZXQgZGlnbmlzc2ltIHJpc3VzLiBJbnRlZ2VyIHN1c2NpcGl0IGF1Z3VlIHNpdCBhbWV0IGVzdCBzb2xsaWNpdHVkaW4sIGVnZXQgcGxhY2VyYXQgbGVjdHVzIGZyaW5naWxsYS4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLiBQZWxsZW50ZXNxdWUgbG9ib3J0aXMsIG1pIGV0IGFkaXBpc2NpbmcgcGhhcmV0cmEsIGVyb3Mgc2VtIHNjZWxlcmlzcXVlIHRlbGx1cywgZXUgdml2ZXJyYSBzZW0ganVzdG8gdmVzdGlidWx1bSB0ZWxsdXMuIFByb2luIHBoYXJldHJhIG1ldHVzIGlkIGF1Z3VlIGltcGVyZGlldCwgZWdldCB1bHRyaWNlcyBhcmN1IGNvbW1vZG8uIEV0aWFtIGR1aSBsaWd1bGEsIGFjY3Vtc2FuIGF1Y3RvciBhbGlxdWFtIG5lYywgdHJpc3RpcXVlIGF0IGVzdC4gU2VkIGVnZXQgdmVuZW5hdGlzIHRvcnRvciwgcXVpcyBwdWx2aW5hciBzZW0uIFBoYXNlbGx1cyBpbiBsaWd1bGEgbWFzc2EuIE51bGxhbSBhIGVyb3MgZXQgbGFjdXMgZGFwaWJ1cyBwb3N1ZXJlLlwiKycgJytcblxuXCJNb3JiaSBpZCBlZ2VzdGFzIGRvbG9yLiBEb25lYyBub24gcG9zdWVyZSBtYXNzYS4gSW4gdmFyaXVzIGhlbmRyZXJpdCBhdWd1ZSwgcXVpcyBmZXVnaWF0IGRpYW0gcHVsdmluYXIgZWdldC4gTnVuYyBub24gZ3JhdmlkYSBsYWN1cy4gRHVpcyBpYWN1bGlzIGp1c3RvIGFjIGVuaW0gdm9sdXRwYXQgY29tbW9kby4gTW9yYmkgc2FnaXR0aXMgb3JjaSBpbiBuaWJoIGJsYW5kaXQsIGFjIHB1bHZpbmFyIG5pYmggY29udmFsbGlzLiBQcm9pbiBhYyBuaXNsIGR1aS4gTmFtIGNvbmRpbWVudHVtIGN1cnN1cyBvZGlvIHNpdCBhbWV0IHRlbXB1cy4gQWVuZWFuIHZlc3RpYnVsdW0gZWxpdCBhIGxvcmVtIGRpZ25pc3NpbSwgaW4gYWRpcGlzY2luZyBhcmN1IHJ1dHJ1bS4gVmVzdGlidWx1bSBub24gdmFyaXVzIG5pc2wsIGEgcG9ydGEgZWxpdC5cIisnICcrXG5cblwiTWFlY2VuYXMgc2l0IGFtZXQgZXJvcyBlZ2V0IGR1aSBibGFuZGl0IGNvbnNlcXVhdC4gRG9uZWMgZXQgc29sbGljaXR1ZGluIHJpc3VzLiBWaXZhbXVzIGFjY3Vtc2FuIGFudGUgdmVsIG1hdHRpcyB2ZWhpY3VsYS4gVmVzdGlidWx1bSBlZ2V0IGRvbG9yIGEgdmVsaXQgdWx0cmljaWVzIHVsdHJpY2llcy4gQ3VyYWJpdHVyIHR1cnBpcyBzYXBpZW4sIHRlbXB1cyBldSBjb25zZWN0ZXR1ciBhLCB0ZW1wdXMgc2VkIGxhY3VzLiBQcm9pbiBzb2RhbGVzIGlhY3VsaXMgbG9yZW0sIGJpYmVuZHVtIGxvYm9ydGlzIG1hdXJpcyBpbXBlcmRpZXQgdmVsLiBNYWVjZW5hcyBhIGJpYmVuZHVtIGVyYXQuIE1vcmJpIHBlbGxlbnRlc3F1ZSBwdXJ1cyBzaXQgYW1ldCBlbmltIHB1bHZpbmFyIHVsbGFtY29ycGVyLiBOdW5jIHZpdGFlIGN1cnN1cyBqdXN0by4gU3VzcGVuZGlzc2UgZWdlc3RhcyBuaWJoIGVnZXQgbmVxdWUgdnVscHV0YXRlIG1vbGVzdGllLiBBZW5lYW4gc2l0IGFtZXQgdmVsaXQgYSBmZWxpcyBwZWxsZW50ZXNxdWUgY29tbW9kbyBldSB1dCBuaWJoLiBQZWxsZW50ZXNxdWUgYXQgdmVoaWN1bGEgbWV0dXMuIE1vcmJpIGFsaXF1ZXQganVzdG8gbm9uIHRlbGx1cyBwcmV0aXVtIGJpYmVuZHVtLiBNYWVjZW5hcyBwb3J0dGl0b3IgZXQgdG9ydG9yIGlkIGludGVyZHVtLiBDcmFzIGZlcm1lbnR1bSB0ZWxsdXMgbmVjIHBvcnR0aXRvciBmZXVnaWF0LiBWZXN0aWJ1bHVtIGZhY2lsaXNpcyBuZWMgZG9sb3IgdmVsIHZvbHV0cGF0LlwiKycgJytcblxuXCJBZW5lYW4gY29tbW9kbyBudW5jIGVyb3MsIGEgcGhhcmV0cmEgc2VtIGF1Y3RvciBuZWMuIFF1aXNxdWUgYXQgdWxsYW1jb3JwZXIgbGVjdHVzLCBub24gc2FnaXR0aXMgZXN0LiBNb3JiaSBzYWdpdHRpcyBiaWJlbmR1bSBlbmltIG5vbiBncmF2aWRhLiBTZWQgYWMgc2VtIHZpdmVycmEsIGNvbW1vZG8gZG9sb3IgdXQsIHRlbXB1cyBsZWN0dXMuIE51bmMgc2l0IGFtZXQgYWxpcXVhbSBuaWJoLiBQcmFlc2VudCB1bHRyaWNlcyB0b3J0b3IgYXQgdmVsaXQgaW50ZXJkdW0gdml2ZXJyYS4gRHVpcyBzdXNjaXBpdCBlcmF0IGFjIHR1cnBpcyBwaGFyZXRyYSBiaWJlbmR1bS4gVml2YW11cyBtb2xlc3RpZSBuZWMgbGVjdHVzIHNjZWxlcmlzcXVlIGNvbnZhbGxpcy4gQ3VyYWJpdHVyIG1ldHVzIHB1cnVzLCBmYXVjaWJ1cyB0ZW1wb3IgbmVxdWUgYWMsIGNvbnZhbGxpcyBsYWNpbmlhIHRvcnRvci4gTW9yYmkgaW4gbmVxdWUgcHJldGl1bSwgcGxhY2VyYXQgb3JjaSBpbnRlcmR1bSwgb3JuYXJlIHNhcGllbi4gUXVpc3F1ZSBvcm5hcmUgZGlhbSBhYyBlcm9zIG1vbGVzdGllLCB1dCBwZWxsZW50ZXNxdWUgZW5pbSBlbGVpZmVuZC5cIisnICcrXG5cblwiSW50ZWdlciBkYXBpYnVzLCBzYXBpZW4gaW4gc3VzY2lwaXQgdHJpc3RpcXVlLCByaXN1cyBlcm9zIHRlbXBvciBsaWd1bGEsIGEgbWFsZXN1YWRhIHRlbGx1cyBlbGl0IGVnZXQgZmVsaXMuIE1vcmJpIHZpdmVycmEgZWxpdCBsZWN0dXMuIE51bGxhIGVsZWlmZW5kIGxlbyBhbnRlLCBzaXQgYW1ldCBzZW1wZXIgbmliaCBhdWN0b3Igbm9uLiBWZXN0aWJ1bHVtIGxhb3JlZXQgYW50ZSB2aXRhZSBqdXN0byBmcmluZ2lsbGEsIGZhY2lsaXNpcyBwdWx2aW5hciBudW5jIGRpZ25pc3NpbS4gRG9uZWMgdmVuZW5hdGlzIG5pc2wgYSBuZXF1ZSBwdWx2aW5hciB2aXZlcnJhLiBQaGFzZWxsdXMgYWMgYW50ZSBldCBuaXNpIHB1bHZpbmFyIGZyaW5naWxsYS4gTnVuYyBkaWN0dW0gZXVpc21vZCBpcHN1bSBzaXQgYW1ldCBlbGVtZW50dW0uXCIrJyAnK1xuXG5cIkFlbmVhbiBlbGVpZmVuZCBub24gbmlzaSBub24gdmVuZW5hdGlzLiBTZWQgYWMgdHVycGlzIGF0IG5pc2kgc29kYWxlcyBoZW5kcmVyaXQgdml0YWUgcXVpcyB2ZWxpdC4gTWF1cmlzIGVnZXQgdGluY2lkdW50IGVyb3MsIG5lYyBtb2xlc3RpZSBudWxsYS4gUHJvaW4gZmF1Y2lidXMgZGljdHVtIHZlc3RpYnVsdW0uIFNlZCBhIG5lcXVlIHF1YW0uIFBlbGxlbnRlc3F1ZSBhbGlxdWV0IGxvYm9ydGlzIGp1c3RvLCB2aXRhZSBhbGlxdWFtIHZlbGl0IGNvbmd1ZSBhLiBTdXNwZW5kaXNzZSB2b2x1dHBhdCBncmF2aWRhIGFyY3UgdmVsIGV1aXNtb2QuXCIrJyAnK1xuXG5cIlZpdmFtdXMgaW4gdXJuYSBldCBsZWN0dXMgcG9zdWVyZSBzdXNjaXBpdC4gQ3VyYWJpdHVyIHVsdHJpY2llcyBlcmF0IGRpYW0sIHZlbCB0cmlzdGlxdWUgbmVxdWUgdGVtcHVzIGx1Y3R1cy4gU2VkIHRlbXB1cyBpYWN1bGlzIG1pIGluIHNvbGxpY2l0dWRpbi4gTnVsbGFtIHZlc3RpYnVsdW0gcXVhbSBsZW8sIHNlZCBpbXBlcmRpZXQgbmlzaSBjb25ndWUgYXQuIE1hdXJpcyB2b2x1dHBhdCBhcmN1IHNlZCB1cm5hIGhlbmRyZXJpdCwgc2l0IGFtZXQgY29tbW9kbyBhcmN1IHNjZWxlcmlzcXVlLiBJbnRlZ2VyIG1vbGVzdGllIGN1cnN1cyBtaSBpZCBvcm5hcmUuIFBoYXNlbGx1cyB1dCBtYWxlc3VhZGEgYXJjdSwgc2l0IGFtZXQgZGFwaWJ1cyBvZGlvLiBQaGFzZWxsdXMgaW4gY29udmFsbGlzIGp1c3RvLiBFdGlhbSBoZW5kcmVyaXQgY29tbW9kbyBudWxsYSBhYyB2ZWhpY3VsYS4gRHVpcyBsb3JlbSBlc3QsIHNvZGFsZXMgYXQgdmVuZW5hdGlzIG5lYywgY29tbW9kbyBhYyBuZXF1ZS4gQWxpcXVhbSB0aW5jaWR1bnQgZmFjaWxpc2lzIG51bmMuIE51bGxhbSBydXRydW0gYmliZW5kdW0gb3JjaSwgc2l0IGFtZXQgc2VtcGVyIHRvcnRvciBjb25zZWN0ZXR1ciBhdC5cIisnICcrXG5cblwiRG9uZWMgaW4gdXJuYSBsYW9yZWV0LCB1bGxhbWNvcnBlciBsaWJlcm8gZWdldCwgY29udmFsbGlzIGRvbG9yLiBOdWxsYW0gc29kYWxlcyBjb21tb2RvIGxlY3R1cyBuZWMgZGljdHVtLiBTdXNwZW5kaXNzZSBldCBmYWNpbGlzaXMgbmVxdWUsIHF1aXMgdWxsYW1jb3JwZXIgbGliZXJvLiBOdWxsYW0gaW4gc2FwaWVuIG1hdHRpcywgdm9sdXRwYXQgYXJjdSBldSwgdml2ZXJyYSBhdWd1ZS4gTnVsbGFtIGRpY3R1bSBsb3JlbSB1dCBvcmNpIGVsZWlmZW5kLCBzZW1wZXIgZ3JhdmlkYSBuaXNsIGNvbmd1ZS4gQWVuZWFuIHRlbXBvciBydXRydW0ganVzdG8gdml0YWUgbGFjaW5pYS4gVXQgc3VzY2lwaXQgaXBzdW0gYSBuaXNpIHVsdHJpY2llcyBtb2xsaXMuIE1hZWNlbmFzIGFjIGF1Y3RvciBqdXN0by4gRnVzY2Ugc2l0IGFtZXQgaXBzdW0gdm9sdXRwYXQsIGhlbmRyZXJpdCBkb2xvciBwb3J0dGl0b3IsIHJob25jdXMgbmVxdWUuIERvbmVjIHF1aXMgY29uZGltZW50dW0gZW5pbS4gUHJhZXNlbnQgdml0YWUgbGVjdHVzIG5lYyBkb2xvciB2ZXN0aWJ1bHVtIG1hdHRpcy5cIisnICcrXG5cblwiSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLiBFdGlhbSBwaGFyZXRyYSB2aXZlcnJhIGVyb3MgcXVpcyBkaWduaXNzaW0uIEZ1c2NlIHZlbCBkdWkgbWF1cmlzLiBQZWxsZW50ZXNxdWUgbW9sbGlzIGFudGUgYWMgZmVybWVudHVtIHBlbGxlbnRlc3F1ZS4gUHJvaW4gdWx0cmljZXMsIG51bGxhIHV0IHZlbmVuYXRpcyBkYXBpYnVzLCBtaSB2ZWxpdCBjb21tb2RvIHB1cnVzLCBpbiBpbXBlcmRpZXQgb2RpbyBtYXVyaXMgbmVjIGZlbGlzLiBQcmFlc2VudCBzY2VsZXJpc3F1ZSBlcm9zIGlkIHNvbGxpY2l0dWRpbiBsYW9yZWV0LiBQcmFlc2VudCB1bHRyaWNpZXMsIHB1cnVzIHNpdCBhbWV0IGJpYmVuZHVtIGltcGVyZGlldCwgbGlndWxhIGFyY3UgaW1wZXJkaWV0IGp1c3RvLCBhIHVsbGFtY29ycGVyIHR1cnBpcyBsZWN0dXMgc2VkIGRvbG9yLiBNYWVjZW5hcyBuZWMgdGVtcHVzIG1hdXJpcywgcXVpcyBhY2N1bXNhbiBuaWJoLlwiKycgJytcblxuXCJWZXN0aWJ1bHVtIGVsZWlmZW5kIGJsYW5kaXQgbG9ib3J0aXMuIFNlZCBpbnRlcmR1bSBzZW1wZXIgc2FwaWVuLCBldCBsYWNpbmlhIGR1aSBzdXNjaXBpdCBzaXQgYW1ldC4gSW50ZWdlciBlbGVtZW50dW0gZmVsaXMgdXQgZGlhbSB0ZW1wdXMsIGFjIGZhY2lsaXNpcyBlcm9zIHBvc3VlcmUuIE51bGxhbSBwbGFjZXJhdCB0cmlzdGlxdWUgbWV0dXMsIGVnZXQgdmVuZW5hdGlzIGF1Z3VlIG1vbGVzdGllIGVnZXQuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLiBVdCBlZ2VzdGFzIG1hdXJpcyBuZWMgbGFjdXMgdmVoaWN1bGEsIHB1bHZpbmFyIGZyaW5naWxsYSBsZWN0dXMgdGVtcG9yLiBTZWQgdXQgYW50ZSBhcmN1LlwiKycgJytcblxuXCJVdCBjb252YWxsaXMgY29tbW9kbyBpcHN1bSBxdWlzIHRlbXB1cy4gU2VkIHBoYXJldHJhIHZlbGl0IGVnZXQgc29sbGljaXR1ZGluIHByZXRpdW0uIEZ1c2NlIG1vbGVzdGllIGF0IHB1cnVzIGEgc2NlbGVyaXNxdWUuIE51bGxhIGZhY2lsaXNpLiBNb3JiaSBmZWxpcyBuZXF1ZSwgZ3JhdmlkYSBzZWQgY29uZ3VlIHNlZCwgZGFwaWJ1cyB2ZWwgYXVndWUuIFZpdmFtdXMgdml2ZXJyYSBjb25kaW1lbnR1bSBsdWN0dXMuIFV0IGF0IHRlbGx1cyBuZWMgYXVndWUgY29udmFsbGlzIGNvbmd1ZS4gTWFlY2VuYXMgcGxhY2VyYXQgdWx0cmljZXMgbG9yZW0sIG5vbiBjb252YWxsaXMgbmliaCBtYWxlc3VhZGEgdmVsLiBQcmFlc2VudCBub24gaGVuZHJlcml0IHZlbGl0LCBzaXQgYW1ldCBydXRydW0gbWFzc2EuIEN1cmFiaXR1ciBxdWlzIGVsZW1lbnR1bSBlc3QuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gRHVpcyBwdWx2aW5hciB0ZWxsdXMgYSBjb25zZXF1YXQgYXVjdG9yLiBTZWQgaWFjdWxpcyBzZWQgbGlndWxhIHF1aXMgaGVuZHJlcml0LiBGdXNjZSBjb25zZXF1YXQgZmFjaWxpc2lzIGVyb3MsIGluIHRlbXB1cyB0ZWxsdXMgdmVoaWN1bGEgZXUuXCIrJyAnK1xuXG5cIkR1aXMgY29uZGltZW50dW0gYXQgbWF1cmlzIHF1aXMgaW50ZXJkdW0uIFBoYXNlbGx1cyBpbXBlcmRpZXQgc29kYWxlcyBtYXNzYSwgcXVpcyBsb2JvcnRpcyBzZW0gYmxhbmRpdCBuZWMuIEFsaXF1YW0gbmVjIHNhcGllbiBtYXVyaXMuIEFsaXF1YW0gZ3JhdmlkYSBjdXJzdXMgZG9sb3Igdml0YWUgaW50ZXJkdW0uIENyYXMgYXQgdWx0cmljZXMgbWksIHV0IGxhY2luaWEgcHVydXMuIE1vcmJpIGdyYXZpZGEgc2FwaWVuIGluIGxlY3R1cyBydXRydW0gdmVoaWN1bGEuIFNlZCB2b2x1dHBhdCBjb25kaW1lbnR1bSBsaWd1bGEuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gUGhhc2VsbHVzIGFsaXF1ZXQgdmVsaXQgZmVsaXMsIG5vbiBmYXVjaWJ1cyBudW5jIGhlbmRyZXJpdCBub24uIEZ1c2NlIHNlbXBlciB1cm5hIGlkIG5pYmggbW9sbGlzLCBzaXQgYW1ldCB2aXZlcnJhIG5pYmggZGljdHVtLiBTZWQgZGlnbmlzc2ltIHZlbCBsb3JlbSB2ZWwgY29uc2VxdWF0LiBTdXNwZW5kaXNzZSBjb252YWxsaXMgbmliaCB0b3J0b3IsIGEgc3VzY2lwaXQgbWV0dXMgdGluY2lkdW50IGEuXCIrJyAnK1xuXG5cIlZpdmFtdXMgaW50ZXJkdW0gc2VkIGRpYW0gdml0YWUgZXVpc21vZC4gU2VkIGRpZ25pc3NpbSBhIG1hdXJpcyBub24gY3Vyc3VzLiBRdWlzcXVlIHZlc3RpYnVsdW0sIG51bmMgZXUgcHJldGl1bSBmcmluZ2lsbGEsIGxhY3VzIGFudGUgZmV1Z2lhdCBuaWJoLCBldSBkaWN0dW0gc2FwaWVuIHZlbGl0IGluIGR1aS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQ3VyYWJpdHVyIHF1aXMgc2VtIG1hc3NhLiBTdXNwZW5kaXNzZSB2ZWwgYmliZW5kdW0gbWFzc2EsIGEgbWF0dGlzIGR1aS4gUHJhZXNlbnQgbWFzc2EgZXJvcywgcHJldGl1bSBxdWlzIHZlaGljdWxhIHF1aXMsIGJsYW5kaXQgc2l0IGFtZXQgbGliZXJvLiBFdGlhbSBzZWQgZG9sb3IgbWkuIFBlbGxlbnRlc3F1ZSBmcmluZ2lsbGEgdGVtcHVzIG51bGxhLCBhdCBoZW5kcmVyaXQgbWFnbmEgdml2ZXJyYSB1dC4gUHJhZXNlbnQgZGFwaWJ1cyB0ZW1wb3Igb3JjaSwgdXQgdmVoaWN1bGEganVzdG8gbHVjdHVzIHNpdCBhbWV0LiBGdXNjZSBtYXR0aXMgZmVsaXMgdHVycGlzLCBhdCBydXRydW0gZXJvcyBjdXJzdXMgZXQuXCIrJyAnK1xuXG5cIlN1c3BlbmRpc3NlIHNlZCBzZW1wZXIgbGFjdXMuIEFlbmVhbiBsb2JvcnRpcyBwZWxsZW50ZXNxdWUgbWF0dGlzLiBGdXNjZSBsdWN0dXMgc2FnaXR0aXMgbGVvLCBhYyBjb21tb2RvIG1hZ25hIHBoYXJldHJhIHV0LiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gRG9uZWMgaW4gb3JuYXJlIHNlbSwgcnV0cnVtIHVsbGFtY29ycGVyIG1hZ25hLiBOdWxsYSBudWxsYSBuaWJoLCB1bGxhbWNvcnBlciBpbiBsYWN1cyBhLCBzb2RhbGVzIGdyYXZpZGEgbGliZXJvLiBJbnRlcmR1bSBldCBtYWxlc3VhZGEgZmFtZXMgYWMgYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMuIFZlc3RpYnVsdW0gYWNjdW1zYW4gaWFjdWxpcyBlcm9zIGluIGFsaXF1YW0uIFByYWVzZW50IGxpZ3VsYSByaXN1cywgZmFjaWxpc2lzIHNlZCBwaGFyZXRyYSBpYWN1bGlzLCBsb2JvcnRpcyBhdCBtaS4gQ3VyYWJpdHVyIG9ybmFyZSBlZ2VzdGFzIGVzdCwgZXUgdWx0cmljaWVzIHJpc3VzLiBDcmFzIG9ybmFyZSB2b2x1dHBhdCByaXN1cyBldWlzbW9kIHRyaXN0aXF1ZS4gTWF1cmlzIGNvbmRpbWVudHVtIGVnZXQgbnVsbGEgdml0YWUgdm9sdXRwYXQuIEN1cmFiaXR1ciB2ZWwgcHVydXMgYWMgZXJhdCBjb21tb2RvIHZpdmVycmEuXCJcblxuICAgICAgKVxuICAgICk7XG4gIH1cblxufSk7XG5cbmV4cG9ydHMuRGFzaGJvYXJkID0gRGFzaGJvYXJkO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2NvbXBvbmVudHMvZGFzaGJvYXJkLmpzeFwiLFwiL2NvbXBvbmVudHNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKiogQGpzeCBSZWFjdC5ET00gKi9cblxuXG52YXIgQ09ORklHID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG52YXIgVVRJTCA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcblxudmFyIERhc2hib2FyZCA9IHJlcXVpcmUoJy4vZGFzaGJvYXJkJykuRGFzaGJvYXJkO1xudmFyIE15QWNjb3VudCA9IHJlcXVpcmUoXCIuL215LWFjY291bnRcIikuTXlBY2NvdW50O1xudmFyIEVkaXRBY2NvdW50ID0gcmVxdWlyZShcIi4vbXktYWNjb3VudFwiKS5FZGl0QWNjb3VudDtcbnZhciBXZWJzaXRlcyA9IHJlcXVpcmUoXCIuL3dlYnNpdGVcIikuV2Vic2l0ZXM7XG52YXIgQWRkV2Vic2l0ZSA9IHJlcXVpcmUoXCIuL3dlYnNpdGVcIikuQWRkV2Vic2l0ZTtcbnZhciBFZGl0V2Vic2l0ZSA9IHJlcXVpcmUoXCIuL3dlYnNpdGVcIikuRWRpdFdlYnNpdGU7XG5cblxudmFyIExheW91dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ0xheW91dCcsXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBzZXQgdGhlIHB1c2hTdGF0ZSB0byBibGFuayBpZiB0aGUgdXNlciBhcnJpdmVzIHRvIHRoZSBkYXNoYm9hcmQsIGVpdGhlciBieSBnb2luZyB0byB0aGUgcm9vdCBvciBlbnRlcmluZyBhbiBpbnZhbGlkIHJvdXRlXG4gICAgdmFyIHBvcyA9IEJhY2tib25lLmhpc3RvcnkuZnJhZ21lbnQ7XG5cbiAgICAgICAgLy8gTG9vayB1cCB0aGUgY3VycmVudCByb3V0ZSBhZ2FpbnN0IENPTkZJRy5ST1VURVMgc28gdGhhdCB3ZSBjYW4gcG9wdWxhdGUgTGF5b3V0IHdpdGggdGhlIHByZXR0eSBwYXRoIG5hbWUuXG4gICAgLy8gSWYgdGhlIGN1cnJlbnQgcGF0aCBpc24ndCBkZWZpbmVkIGluIENPTkZJRy5ST1VURVMsIHNlbmQgdG8gdGhlIERhc2hib2FyZFxuICAgIHZhciBwYXRoID0gXy5maW5kKENPTkZJRy5ST1VURVMsIHsgJ3VybCc6IHBvcyB9KTtcblxuXG4gICAgLy8gSWYgbm8gcGF0aCwgdGhlbiB1c2UgdGhlIGZpcnN0IHJvdXRlLlxuICAgIGlmKF8uaXNFbXB0eShwb3MpKSB7XG4gICAgICBwYXRoID0gXy5maXJzdChDT05GSUcuUk9VVEVTKTtcbiAgICB9XG5cbiAgICAvLyBDdXJyZW50IHBhdGggaXNuJ3QgZm91bmQuIENoZWNrIGlmIGl0J3MgYSByb3V0ZSB3aXRoIHBhcmFtZXRlcnNcbiAgICBpZihfLmlzRW1wdHkocGF0aCkpIHtcblxuICAgICAgcGF0aCA9IF8ubGFzdChfLmZpbHRlcihDT05GSUcuUk9VVEVTLCBmdW5jdGlvbihyb3V0ZSkge1xuICAgICAgICByZXR1cm4gXy5jb250YWlucyhwb3MsIHJvdXRlLnVybCkgJiYgcm91dGUuYWxsb3dfcGFyYW1ldGVycztcbiAgICAgIH0pKTtcblxuICAgIH1cblxuXG4gICAgaWYoXy5oYXMocGF0aCwgXCJuYW1lXCIpKSB7XG4gICAgICBwYXRoID0gcGF0aC5uYW1lXG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGggPSBcIkRhc2hib2FyZFwiXG4gICAgfVxuXG5cblxuICAgIGlmKHBhdGggPT09IFwiRGFzaGJvYXJkXCIpIHtcbiAgICAgIHJvdXRlci5uYXZpZ2F0ZShcIlwiKTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQudGl0bGUgPSBwYXRoICsgXCIgfCBcIiArIENPTkZJRy5XRUJTSVRFX05BTUU7XG5cbiAgICByZXR1cm4ge3BhdGg6IHBhdGgsIHVzZXI6IHVuZGVmaW5lZCwgcmVuZGVyOiBmYWxzZSwgYWN0aXZlX3dlYnNpdGU6IHVuZGVmaW5lZCwgd2Vic2l0ZXM6IHVuZGVmaW5lZCwgYWxlcnQ6IHsnbWVzc2FnZScgOiBudWxsLCAndHlwZScgOiBudWxsfX07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24oKSB7XG5cbi8vIHNldCB0aGUgcHVzaFN0YXRlIHRvIGJsYW5rIGlmIHRoZSB1c2VyIGFycml2ZXMgdG8gdGhlIGRhc2hib2FyZCwgZWl0aGVyIGJ5IGdvaW5nIHRvIHRoZSByb290IG9yIGVudGVyaW5nIGFuIGludmFsaWQgcm91dGVcbiAgICB2YXIgcG9zID0gQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcblxuICAgICAgICAvLyBMb29rIHVwIHRoZSBjdXJyZW50IHJvdXRlIGFnYWluc3QgQ09ORklHLlJPVVRFUyBzbyB0aGF0IHdlIGNhbiBwb3B1bGF0ZSBMYXlvdXQgd2l0aCB0aGUgcHJldHR5IHBhdGggbmFtZS5cbiAgICAvLyBJZiB0aGUgY3VycmVudCBwYXRoIGlzbid0IGRlZmluZWQgaW4gQ09ORklHLlJPVVRFUywgc2VuZCB0byB0aGUgRGFzaGJvYXJkXG4gICAgdmFyIHBhdGggPSBfLmZpbmQoQ09ORklHLlJPVVRFUywgeyAndXJsJzogcG9zIH0pO1xuXG5cbiAgICAvLyBJZiBubyBwYXRoLCB0aGVuIHVzZSB0aGUgZmlyc3Qgcm91dGUuXG4gICAgaWYoXy5pc0VtcHR5KHBvcykpIHtcbiAgICAgIHBhdGggPSBfLmZpcnN0KENPTkZJRy5ST1VURVMpO1xuICAgIH1cblxuICAgIC8vIEN1cnJlbnQgcGF0aCBpc24ndCBmb3VuZC4gQ2hlY2sgaWYgaXQncyBhIHJvdXRlIHdpdGggcGFyYW1ldGVyc1xuICAgIGlmKF8uaXNFbXB0eShwYXRoKSkge1xuXG4gICAgICBwYXRoID0gXy5sYXN0KF8uZmlsdGVyKENPTkZJRy5ST1VURVMsIGZ1bmN0aW9uKHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBfLmNvbnRhaW5zKHBvcywgcm91dGUudXJsKSAmJiByb3V0ZS5hbGxvd19wYXJhbWV0ZXJzO1xuICAgICAgfSkpO1xuXG4gICAgfVxuXG5cbiAgICBpZihfLmhhcyhwYXRoLCBcIm5hbWVcIikpIHtcbiAgICAgIHBhdGggPSBwYXRoLm5hbWVcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aCA9IFwiRGFzaGJvYXJkXCJcbiAgICB9XG5cblxuXG4gICAgaWYocGF0aCA9PT0gXCJEYXNoYm9hcmRcIikge1xuICAgICAgcm91dGVyLm5hdmlnYXRlKFwiXCIpO1xuICAgIH07XG5cbiAgICB0aGlzLnNldFBvcyhwb3MsIHBhdGgpXG4gICAgLy90aGlzLnNldFN0YXRlKHtwYXRoOiBwYXRofSlcblxuICAgIFxuXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgXy5nZXRTZXNzaW9uLmNhbGwodGhpcyk7XG5cbiAgfSxcblxuICBzZXRQb3M6IGZ1bmN0aW9uKHVybCwgcG9zKSB7XG5cbiAgICBfLmdldFNlc3Npb24uY2FsbCh0aGlzKTtcblxuICAgIC8vIE9uYm9hcmRpbmcgc2NyZWVuIGlmIG5vIHdlYnNpdGVzIGV4aXN0XG5cbiAgICAgIGRvY3VtZW50LnRpdGxlID0gcG9zICsgXCIgfCBcIiArIENPTkZJRy5XRUJTSVRFX05BTUU7XG4gICAgICB0aGlzLnNldFN0YXRlKHtwYXRoOiBwb3N9KTtcblxuICAgICAgcm91dGVyLm5hdmlnYXRlKHVybCk7XG4gICAgXG5cbiAgICB0aGlzLnNldFN0YXRlKHthbGVydDogeydtZXNzYWdlJyA6IG51bGwsICd0eXBlJyA6IG51bGx9fSk7XG5cbiAgfSxcblxuICBzZXRXZWJzaXRlOiBmdW5jdGlvbih3ZWJzaXRlKSB7XG5cbiAgICBjb25zb2xlLmxvZyh3ZWJzaXRlKVxuXG4gICAgLy8gaWYgdGhpcyBpcyBjYWxsZWQgd2l0aCBcImRlZmF1bHRcIiBhcyBhbiBhcmd1bWVudCwgdGhlbiBzZXQgdGhlIGFjdGl2ZSB3ZWJzaXRlIHRvIHRoZSBmaXJzdCBvbmUgaW4gdGhlIHVzZXIncyBsaXN0XG4gICAgdmFyIHdlYnNpdGVzID0gdGhpcy5zdGF0ZS53ZWJzaXRlcztcblxuICAgIGlmKF8uaXNFbXB0eSh3ZWJzaXRlcykpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHthY3RpdmVfd2Vic2l0ZTogXCJkZWZhdWx0XCJ9KTtcbiAgICB9O1xuXG5cbiAgICB2YXIgZmlyc3Rfd2Vic2l0ZSA9IF8uZmlyc3Qod2Vic2l0ZXMpLmlkO1xuXG4gICAgaWYoICghXy5pc0VtcHR5KHdlYnNpdGVzKSkgJiYgKHdlYnNpdGUgPT09IFwiZGVmYXVsdFwiKSkge1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVfd2Vic2l0ZTogZmlyc3Rfd2Vic2l0ZX0pO1xuXG4gICAgfSBlbHNlIHtcblxuXG4gICAgICB2YXIgY29va2llID0gSlNPTi5wYXJzZSgkLmNvb2tpZShcImFwcGxpY2F0aW9uXCIpKTtcblxuICAgICAgY29va2llLmFjdGl2ZV93ZWJzaXRlID0gd2Vic2l0ZTtcblxuICAgICAgJC5jb29raWUoXCJhcHBsaWNhdGlvblwiLCBKU09OLnN0cmluZ2lmeShjb29raWUpLCB7cGF0aDogXCIvXCIsIGV4cGlyZXM6IDEyMH0pO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVfd2Vic2l0ZTogd2Vic2l0ZX0pO1xuXG4gICAgfTtcblxuXG5cbiAgfSxcblxuICBzZXRVc2VyOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3VzZXI6IHN0YXRlfSk7XG5cbiAgICAvLyBLaWxsIGNvb2tpZSBpZiB1c2VyIGlzIGxvZ2dpbmcgb3V0XG4gICAgaWYoc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgJC5yZW1vdmVDb29raWUoXCJhcHBsaWNhdGlvblwiKTtcbiAgICB9O1xuXG4gIH0sXG5cbiAgc2V0QWxlcnQ6IGZ1bmN0aW9uKG1lc3NhZ2UsIHR5cGUpIHtcblxuICAgIHRoaXMuc2V0U3RhdGUoe2FsZXJ0OiB7J21lc3NhZ2UnIDogbWVzc2FnZSwgJ3R5cGUnIDogdHlwZX19KTtcblxuICB9LFxuXG4gIHNldFdlYnNpdGVzOiBmdW5jdGlvbih3ZWJzaXRlcykge1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7d2Vic2l0ZXM6IHdlYnNpdGVzfSk7XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gRGVmZXIgcmVuZGVyaW5nIHdoaWxlIGNoZWNraW5nIGlmIGNvb2tpZSBpcyB2YWxpZFxuICAgIGlmKHRoaXMuc3RhdGUucmVuZGVyKSB7XG5cbiAgICAgICAgLy8gTG9naW4gdmlldyBpZiBub3QgbG9nZ2VkIGluXG4gICAgICAgIGlmKHRoaXMuc3RhdGUudXNlciA9PT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgUmVhY3QuRE9NLmRpdihudWxsLCBcbiAgICAgICAgICAgICAgICAgIExvZ2luKCB7cGF0aDp0aGlzLnN0YXRlLnBhdGgsIHNldFBvczp0aGlzLnNldFBvcywgdXNlcjp0aGlzLnN0YXRlLnVzZXIsIHNldFVzZXI6dGhpcy5zZXRVc2VyLCBzZXRXZWJzaXRlOnRoaXMuc2V0V2Vic2l0ZSwgd2Vic2l0ZXM6dGhpcy5zdGF0ZS53ZWJzaXRlcywgc2V0V2Vic2l0ZXM6dGhpcy5zZXRXZWJzaXRlcywgYWxlcnQ6dGhpcy5zdGF0ZS5hbGVydCwgc2V0QWxlcnQ6dGhpcy5zZXRBbGVydH0gKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIFVzZXIgaXMgbG9nZ2VkIGluXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuRE9NLmRpdihudWxsLCBcbiAgICAgICAgICAgICAgICBUb3BCYXIoIHtwYXRoOnRoaXMuc3RhdGUucGF0aCwgc2V0UG9zOnRoaXMuc2V0UG9zLCB1c2VyOnRoaXMuc3RhdGUudXNlciwgc2V0VXNlcjp0aGlzLnNldFVzZXIsIGFjdGl2ZV93ZWJzaXRlOnRoaXMuc3RhdGUuYWN0aXZlX3dlYnNpdGUsIHNldFdlYnNpdGU6dGhpcy5zZXRXZWJzaXRlLCB3ZWJzaXRlczp0aGlzLnN0YXRlLndlYnNpdGVzLCBzZXRXZWJzaXRlczp0aGlzLnNldFdlYnNpdGVzLCBhbGVydDp0aGlzLnN0YXRlLmFsZXJ0LCBzZXRBbGVydDp0aGlzLnNldEFsZXJ0fSApLFxuICAgICAgICAgICAgICAgIExlZnRNZW51KCB7cm91dGVzOnRoaXMucHJvcHMucm91dGVzLCBwYXRoOnRoaXMuc3RhdGUucGF0aCwgc2V0UG9zOnRoaXMuc2V0UG9zLCB1c2VyOnRoaXMuc3RhdGUudXNlciwgc2V0VXNlcjp0aGlzLnNldFVzZXIsIGFjdGl2ZV93ZWJzaXRlOnRoaXMuc3RhdGUuYWN0aXZlX3dlYnNpdGUsIHNldFdlYnNpdGU6dGhpcy5zZXRXZWJzaXRlLCB3ZWJzaXRlczp0aGlzLnN0YXRlLndlYnNpdGVzLCBzZXRXZWJzaXRlczp0aGlzLnNldFdlYnNpdGVzLCBhbGVydDp0aGlzLnN0YXRlLmFsZXJ0LCBzZXRBbGVydDp0aGlzLnNldEFsZXJ0fSApLFxuICAgICAgICAgICAgICAgIENvbnRlbnQoIHtwYXRoOnRoaXMuc3RhdGUucGF0aCwgc2V0UG9zOnRoaXMuc2V0UG9zLCB1c2VyOnRoaXMuc3RhdGUudXNlciwgc2V0VXNlcjp0aGlzLnNldFVzZXIsIGFjdGl2ZV93ZWJzaXRlOnRoaXMuc3RhdGUuYWN0aXZlX3dlYnNpdGUsIHNldFdlYnNpdGU6dGhpcy5zZXRXZWJzaXRlLCB3ZWJzaXRlczp0aGlzLnN0YXRlLndlYnNpdGVzLCBzZXRXZWJzaXRlczp0aGlzLnNldFdlYnNpdGVzLCBhbGVydDp0aGlzLnN0YXRlLmFsZXJ0LCBzZXRBbGVydDp0aGlzLnNldEFsZXJ0fSApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcblxuICAgICAgdmFyIGxvYWRpbmdNc2dTdHlsZSA9IHtcbiAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgIHRvcDogXCIzMCVcIlxuICAgICB9O1xuXG4gICAgIHJldHVybihcblxuICAgICAgICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInJvdyB0ZXh0LWNlbnRlclwiLCBzdHlsZTpsb2FkaW5nTXNnU3R5bGV9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5oMShudWxsLCBcIkxvYWRpbmcuLi5cIilcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcblxuICAgfVxuIH1cblxufSk7XG5cbnZhciBMb2dpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ0xvZ2luJyxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuXG4gICAgcmV0dXJuIHtlbWFpbF9ibGFuazogZmFsc2UsIHBhc3N3b3JkX2JsYW5rOiBmYWxzZSwgc2VydmVyX2Vycm9yOiB1bmRlZmluZWR9O1xuXG4gIH0sXG5cbiAgbG9naW46IGZ1bmN0aW9uKGUpIHtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe3NlcnZlcl9lcnJvcjogdW5kZWZpbmVkfSk7XG5cbiAgICB2YXIgZW1haWwgPSAkKFwiI2VtYWlsXCIpLnZhbCgpO1xuICAgIHZhciBwYXNzd29yZCA9ICQoXCIjcGFzc3dvcmRcIikudmFsKCk7XG5cblxuICAgIC8vIFZhbGlkYXRlIC0gZmllbGRzIG11c3Qgbm90IGJlIGVtcHR5XG4gICAgaWYoXy5pc0VtcHR5KGVtYWlsKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW1haWxfYmxhbms6IHRydWV9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW1haWxfYmxhbms6IGZhbHNlfSk7XG4gICAgfTtcbiAgICBcbiAgICBpZihfLmlzRW1wdHkocGFzc3dvcmQpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZF9ibGFuazogdHJ1ZX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZF9ibGFuazogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgLy8gZmllbGRzIGFyZSBwb3B1bGF0ZWRcbiAgICBpZighXy5pc0VtcHR5KGVtYWlsKSAmJiAhXy5pc0VtcHR5KHBhc3N3b3JkKSkge1xuICAgICAgLy8gVE9ETzogY2hlY2sgaWYgY3JlZGVudGlhbHMgYXJlIHZhbGlkXG5cbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgc3VwZXJhZ2VudFxuICAgICAgLnBvc3QoQ09ORklHLlVSTFMubG9naW4pXG4gICAgICAvLy5zZW5kKHsgbmFtZTogJ01hbm55Jywgc3BlY2llczogJ2NhdCcgfSlcbiAgICAgIC5zZXQoJ1gtQVBJLUVtYWlsJywgZW1haWwpXG4gICAgICAuc2V0KCdYLUFQSS1QYXNzd29yZCcsIHBhc3N3b3JkKVxuICAgICAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAgICAgLmVuZChmdW5jdGlvbihlcnJvciwgcmVzKXtcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGV4dCk7XG5cbiAgICAgICAgaWYocmVzLm9rID09PSB0cnVlKSB7XG5cbiAgICAgICAgICB2YXIgc2Vzc2lvbklkID0gSlNPTi5wYXJzZShyZXMudGV4dCkuc2Vzc2lvbklkXG4gICAgICAgICAgdmFyIHVzZXIgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS51c2VyXG5cblxuXG4gICAgICAgICAgY29uc29sZS5sb2coc2Vzc2lvbklkKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgICAgIC8vY29uc29sZS5sb2coZG9jdW1lbnQuY29va2llKVxuXG4gICAgICAgIFxuXG4gICAgICAgIHZhciB1c2VyX3dlYnNpdGVzID0gSlNPTi5wYXJzZShyZXMudGV4dCkud2Vic2l0ZXM7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJfd2Vic2l0ZXMpXG4gICAgICAgIFxuICAgICAgICBpZighXy5pc0VtcHR5KHVzZXJfd2Vic2l0ZXMpKSB7XG4gICAgICAgICAgaWYoIV8uaXNVbmRlZmluZWQoXy5maXJzdCh1c2VyX3dlYnNpdGVzKSkpIHtcbiAgICAgICAgICAgIGFjdGl2ZV93ZWJzaXRlID0gXy5maXJzdCh1c2VyX3dlYnNpdGVzKS5pZDtcblxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVfd2Vic2l0ZSlcblxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuICAgICAgICBcblxuXG4gICAgICAgIFxuXG4gICAgICAgICAgLy8gc2V0IGNvb2tpZVxuICAgICAgICAgICQuY29va2llKFwiYXBwbGljYXRpb25cIiwgSlNPTi5zdHJpbmdpZnkoeyBcInNlc3Npb25JZFwiOiBzZXNzaW9uSWQsIFwidXNlclwiOiB1c2VyIH0pLCB7cGF0aDogXCIvXCIsIGV4cGlyZXM6IDEyMH0pO1xuXG4gICAgICAgICAgc2VsZi5wcm9wcy5zZXRVc2VyKHVzZXIpO1xuXG4gICAgICAgICAgc2VsZi5wcm9wcy5zZXRXZWJzaXRlcyh1c2VyX3dlYnNpdGVzKTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpXG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIC8vIFJldHVybiBlcnJvciBmcm9tIHNlcnZlclxuICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3NlcnZlcl9lcnJvcjogSlNPTi5wYXJzZShyZXMudGV4dCkuZXJyb3J9KTtcblxuXG4gICAgICAgIH1cblxuICAgICAgfSk7XG5cbn1cblxufSxcblxucmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHZhciBlbWFpbF9ibGFuayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUuZW1haWxfYmxhbmsgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBcIkVtYWlsIGNhbm5vdCBiZSBibGFua1wiKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gIHZhciBwYXNzd29yZF9ibGFuayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUucGFzc3dvcmRfYmxhbmsgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBcIlBhc3N3b3JkIGNhbm5vdCBiZSBibGFua1wiKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gIHZhciBzZXJ2ZXJfZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzZWxmLnN0YXRlLnNlcnZlcl9lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS5zZXJ2ZXJfZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7aWQ6XCJsb2dpblwiLCBjbGFzc05hbWU6XCJyb3dcIn0sIFxuICAgICAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJwYW5lbFwifSwgXG4gICAgICAgICAgUmVhY3QuRE9NLmgxKG51bGwsIFwiTG9naW4gdG8gV2ViIEFwcFwiKSxcbiAgICAgICAgICBcIlBsZWFzZSBsb2dpbiB0byBhY2Nlc3MgV2ViIEFwcC5cIixcbiAgICAgICAgICBSZWFjdC5ET00uaHIobnVsbCApLFxuICAgICAgICAgIHNlcnZlcl9lcnJvcigpLFxuICAgICAgICAgIFJlYWN0LkRPTS5mb3JtKG51bGwsIFxuICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIkVtYWlsXCIsXG4gICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJlbWFpbFwiLCB0eXBlOlwidGV4dFwiLCBwbGFjZWhvbGRlcjpcIkVtYWlsXCJ9ICksXG4gICAgICAgICAgZW1haWxfYmxhbmsoKVxuXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJQYXNzd29yZFwiLFxuICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwicGFzc3dvcmRcIiwgdHlwZTpcInBhc3N3b3JkXCIsIHBsYWNlaG9sZGVyOlwiUGFzc3dvcmRcIn0gKSxcbiAgICAgICAgICBwYXNzd29yZF9ibGFuaygpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5ET00uYnV0dG9uKCB7b25DbGljazp0aGlzLmxvZ2luLCBjbGFzc05hbWU6XCJidXR0b24gcmFkaXVzIGV4cGFuZFwifSwgXCJMb2dpblwiKVxuICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgICk7XG59XG59KTtcblxuXG52YXIgVG9wQmFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnVG9wQmFyJyxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG5cbiAgICAkKGRvY3VtZW50KS5mb3VuZGF0aW9uKCk7XG5cbiAgfSxcblxuICByb3V0ZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciB1cmwgPSAkKGV2ZW50LnRhcmdldCkuYXR0cignZGF0YS1uYXYnKTtcbiAgICB2YXIgcG9zID0gJChldmVudC50YXJnZXQpLnRleHQoKTtcblxuICAgIHRoaXMucHJvcHMuc2V0UG9zKHVybCwgcG9zKTtcbiAgfSxcblxuICBsb2dvdXQ6IGZ1bmN0aW9uKGUpIHtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnNldFVzZXIodW5kZWZpbmVkKTtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuRE9NLmRpdigge2lkOlwidG9wQmFyXCIsIGNsYXNzTmFtZTpcInN0aWNreVwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00ubmF2KCB7Y2xhc3NOYW1lOlwidG9wLWJhclwiLCAnZGF0YS10b3BiYXInOnRydWUsICdkYXRhLW9wdGlvbnMnOlwiaXNfaG92ZXI6IGZhbHNlXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS51bCgge2NsYXNzTmFtZTpcInRpdGxlLWFyZWFcIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmxpKCB7Y2xhc3NOYW1lOlwibmFtZVwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00uaDEobnVsbCwgUmVhY3QuRE9NLmEoIHtocmVmOlwiI1wifSwgXCJXZWIgQXBwIE5hbWVcIikpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuRE9NLmxpKCB7Y2xhc3NOYW1lOlwidG9nZ2xlLXRvcGJhciBtZW51LWljb25cIn0sIFJlYWN0LkRPTS5hKCB7aHJlZjpcIiNcIn0sIFwiTWVudVwiKSlcbiAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS5zZWN0aW9uKCB7Y2xhc3NOYW1lOlwidG9wLWJhci1zZWN0aW9uXCJ9LCBcblxuICAgICAgICAgICAgUmVhY3QuRE9NLnVsKCB7Y2xhc3NOYW1lOlwicmlnaHRcIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmxpKCB7Y2xhc3NOYW1lOlwiYWN0aXZlIGhhcy1kcm9wZG93blwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00uYSgge2hyZWY6XCIjXCJ9LCBcIkxvZ2dlZCBpbiBhcyBcIiwgdGhpcy5wcm9wcy51c2VyLmZ1bGxOYW1lKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS51bCgge2NsYXNzTmFtZTpcImRyb3Bkb3duXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5saShudWxsLCBSZWFjdC5ET00uYSggeydkYXRhLW5hdic6XCJhY2NvdW50XCIsIG9uQ2xpY2s6dGhpcy5yb3V0ZX0sIFwiTXkgQWNjb3VudFwiKSksXG4gICAgICAgICAgICBSZWFjdC5ET00ubGkobnVsbCwgUmVhY3QuRE9NLmEoIHtvbkNsaWNrOnRoaXMubG9nb3V0fSwgXCJMb2dvdXRcIikpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuRE9NLmxpKCB7Y2xhc3NOYW1lOlwiaGFzLWRyb3Bkb3duXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5hKCB7aHJlZjpcIiNcIn0sIFwiSGVscFwiKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS51bCgge2NsYXNzTmFtZTpcImRyb3Bkb3duXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5saShudWxsLCBSZWFjdC5ET00uYSgge2hyZWY6XCIjXCJ9LCBcIkdldHRpbmcgU3RhcnRlZCBHdWlkZVwiKSksXG4gICAgICAgICAgICBSZWFjdC5ET00ubGkobnVsbCwgUmVhY3QuRE9NLmEoIHtocmVmOlwiI1wifSwgXCJBUEkgRG9jdW1lbnRhdGlvblwiKSksXG4gICAgICAgICAgICBSZWFjdC5ET00ubGkobnVsbCwgUmVhY3QuRE9NLmEoIHtocmVmOlwiI1wifSwgXCJDb250YWN0IFVzXCIpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApO1xufVxuXG59KTtcblxuXG52YXIgTGVmdE1lbnUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdMZWZ0TWVudScsXG5cbiAgcm91dGU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdXJsID0gJChldmVudC50YXJnZXQpLmF0dHIoJ2RhdGEtbmF2Jyk7XG4gICAgdmFyIHBvcyA9ICQoZXZlbnQudGFyZ2V0KS50ZXh0KCk7XG5cbiAgICB0aGlzLnByb3BzLnNldFBvcyh1cmwsIHBvcyk7XG5cbiAgICAvLyBUTyBSRVZJRVc6IHNldCB0aGUgd2Vic2l0ZSBjb250ZXh0IGJhY2sgdG8gZGVmYXVsdCB3aGVuIGEgbWVudSBsaW5rIGlzIGNsaWNrZWRcbiAgICAvL3RoaXMucHJvcHMuc2V0V2Vic2l0ZShcImRlZmF1bHRcIik7XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIFxuICAgIHZhciBsaW5rcyA9IF8ubWFwKF8uZmlsdGVyKHRoaXMucHJvcHMucm91dGVzLCBcInNob3dfaW5fbWVudVwiKSwgZnVuY3Rpb24obGluaywga2V5KSB7XG5cbiAgICAgIHZhciBjbGFzc1N0cmluZyA9IFwiXCI7XG4gICAgICBpZigoc2VsZi5wcm9wcy5wYXRoPT09bGluay5uYW1lKSB8fCAoXy5jb250YWlucyhsaW5rLnN1YnJvdXRlcyxzZWxmLnByb3BzLnBhdGgpKSl7Y2xhc3NTdHJpbmcgPSBcImFjdGl2ZVwifTtcblxuICAgICAgcmV0dXJuIFJlYWN0LkRPTS5saSgge2tleTprZXl9LCBSZWFjdC5ET00uYSgge2hyZWY6bGluay51cmwsIG9uQ2xpY2s6c2VsZi5yb3V0ZSwgJ2RhdGEtbmF2JzpsaW5rLnVybCwgY2xhc3NOYW1lOmNsYXNzU3RyaW5nfSwgbGluay5uYW1lKSlcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7aWQ6XCJsZWZ0TWVudVwiLCBjbGFzc05hbWU6XCJzbWFsbC00IGxhcmdlLTIgY29sdW1uc1wifSwgXG4gICAgICAgICAgICBXZWJzaXRlU2VsZWN0b3IoIHthY3RpdmVfd2Vic2l0ZTp0aGlzLnByb3BzLmFjdGl2ZV93ZWJzaXRlLCBzZXRXZWJzaXRlOnRoaXMucHJvcHMuc2V0V2Vic2l0ZSwgc2V0UG9zOnRoaXMucHJvcHMuc2V0UG9zLCB3ZWJzaXRlczp0aGlzLnByb3BzLndlYnNpdGVzLCBzZXRXZWJzaXRlczp0aGlzLnByb3BzLnNldFdlYnNpdGVzLCBhbGVydDp0aGlzLnByb3BzLmFsZXJ0LCBzZXRBbGVydDp0aGlzLnByb3BzLnNldEFsZXJ0fSApLFxuICAgICAgICAgICAgUmVhY3QuRE9NLnVsKCB7Y2xhc3NOYW1lOlwic2lkZS1uYXZcIn0sIGxpbmtzKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgfVxuXG59KTtcblxuXG52YXIgV2Vic2l0ZVNlbGVjdG9yID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnV2Vic2l0ZVNlbGVjdG9yJyxcblxuICB3ZWJzaXRlU2VsZWN0ZWQ6IGZ1bmN0aW9uKGUpIHtcblxuICAgIHZhciB3ZWJzaXRlcyA9IHRoaXMucHJvcHMud2Vic2l0ZXM7XG5cbiAgICBpZihwYXJzZUludChlLnRhcmdldC52YWx1ZSkgPT09IDApIHtcblxuICAgICAgdGhpcy5wcm9wcy5zZXRXZWJzaXRlKHVuZGVmaW5lZCk7XG5cbiAgICAgIC8vIHRvZG86IHJldmlld1xuICAgICAgdGhpcy5wcm9wcy5zZXRQb3MoXCJ3ZWJzaXRlcy9hZGRcIiwgXCJBZGQgV2Vic2l0ZVwiKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHZhciB3ZWJzaXRlID0gXy5maXJzdChfLmZpbHRlcih3ZWJzaXRlcywgeyAnaWQnOiBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgfSkpLmlkO1xuXG4gICAgICB0aGlzLnByb3BzLnNldFdlYnNpdGUod2Vic2l0ZSk7XG5cbiAgICAgIHRoaXMucHJvcHMuc2V0UG9zKFwiXCIsIFwiRGFzaGJvYXJkXCIpO1xuXG4gICAgfVxuXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgdmFsdWUgPSAwO1xuICAgIC8vIFNlbGVjdCBkZWZhdWx0IG9wdGlvbiB3aGVyZSB2YWx1ZSA9IDAgaWYgd2Vic2l0ZSBpc24ndCBkZWZpbmVkXG4gICAgaWYodGhpcy5wcm9wcy5hY3RpdmVfd2Vic2l0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucHJvcHMuYWN0aXZlX3dlYnNpdGU7XG4gICAgfTtcblxuICAgIGlmKCQuY29va2llKFwiYXBwbGljYXRpb25cIikpIHtcbiAgICAgIHZhciB3ZWJzaXRlcyA9IHRoaXMucHJvcHMud2Vic2l0ZXM7XG5cblxuICAgICAgdmFyIGxpbmtzID0gXy5tYXAod2Vic2l0ZXMsIGZ1bmN0aW9uKHNpdGUsIGtleSkge1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5ET00ub3B0aW9uKCB7a2V5OnNpdGUuaWQsIHZhbHVlOnNpdGUuaWR9LCBzaXRlLm5hbWUpXG5cbiAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYobnVsbCwgXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS5zZWxlY3QoIHtpZDpcIndlYnNpdGVTZWxlY3RvclwiLCBvbkNoYW5nZTp0aGlzLndlYnNpdGVTZWxlY3RlZCwgdmFsdWU6dmFsdWV9LCBcblxuICAgICAgICAgICAgUmVhY3QuRE9NLm9wdGlvbigge2tleTpcIjBcIiwgdmFsdWU6XCIwXCJ9LCBcIkFkZCBOZXcgV2Vic2l0ZVwiKSxcbiAgICAgICAgICAgIGxpbmtzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcblxuICB9XG5cbn0pO1xuXG52YXIgQ29udGVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ0NvbnRlbnQnLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cblxuICAgIHZhciBzZWN0aW9uID0gbnVsbDtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBzY3JvbGwgdG8gdG9wXG4gICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgwKTtcblxuICAgIC8vIFRoZSBjb2RlIGJlbG93IGNoZWNrcyBpZiB0aGVyZSBpcyBhIFJlYWN0IGNvbXBvbmVudCB0aGF0IG1hdGNoZXMgdGhlIGN1cnJlbnQgcGF0aCdzIG5hbWUuXG4gICAgLy8gSWYgdGhlcmUgaXMsIHRoZW4gcmVuZGVyIGl0LCBvdGhlcndpc2UganVzdCByZW5kZXIgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnQgcGF0aC5cbiAgICBpZiAoIGV2YWwoXCJ0eXBlb2YgXCIgKyB0aGlzLnByb3BzLnBhdGgucmVwbGFjZShcIiBcIixcIlwiKSArIFwiID09PSAnZnVuY3Rpb24nXCIpICl7IFxuXG4gICAgICB2YXIgZWxlbWVudCA9IGV2YWwodGhpcy5wcm9wcy5wYXRoLnJlcGxhY2UoXCIgXCIsXCJcIikpO1xuXG4gICAgICBzZWN0aW9uID0gZWxlbWVudCgge3BhdGg6dGhpcy5wcm9wcy5wYXRoLCBzZXRQb3M6dGhpcy5wcm9wcy5zZXRQb3MsIHVzZXI6dGhpcy5wcm9wcy51c2VyLCBzZXRVc2VyOnRoaXMucHJvcHMuc2V0VXNlciwgc2V0V2Vic2l0ZTp0aGlzLnByb3BzLnNldFdlYnNpdGUsIGFjdGl2ZV93ZWJzaXRlOnRoaXMucHJvcHMuYWN0aXZlX3dlYnNpdGUsIHdlYnNpdGVzOnRoaXMucHJvcHMud2Vic2l0ZXMsIHNldFdlYnNpdGVzOnRoaXMucHJvcHMuc2V0V2Vic2l0ZXMsIGFsZXJ0OnRoaXMucHJvcHMuYWxlcnQsIHNldEFsZXJ0OnRoaXMucHJvcHMuc2V0QWxlcnR9IClcblxuICAgIH0gZWxzZSB7XG4gICAgICBzZWN0aW9uID0gKFxuICAgICAgICAgICAgICAgICBSZWFjdC5ET00ucChudWxsLCB0aGlzLnByb3BzLnBhdGgpXG4gICAgICAgICAgICAgICAgIClcbiAgICB9XG5cblxuICAgIHZhciBhbGVydHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgaWYoIV8uaXNFbXB0eShzZWxmLnByb3BzLmFsZXJ0Lm1lc3NhZ2UpKSB7XG4gICAgICAgIHZhciBjbGFzc1N0cmluZyA9IFwiYWxlcnQtYm94IFwiICsgc2VsZi5wcm9wcy5hbGVydC50eXBlXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7J2RhdGEtYWxlcnQnOnRydWUsIGNsYXNzTmFtZTpjbGFzc1N0cmluZ30sIFxuICAgICAgICAgICAgICAgIHNlbGYucHJvcHMuYWxlcnQubWVzc2FnZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYoIHtpZDpcImNvbnRlbnRcIiwgY2xhc3NOYW1lOlwic21hbGwtOCBsYXJnZS0xMCBjb2x1bW5zXCJ9LCBcblxuICAgICAgICAgICAgYWxlcnRzKCksXG5cbiAgICAgICAgICAgIHNlY3Rpb25cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcblxuICB9XG5cbn0pO1xuXG5cbmV4cG9ydHMuTGF5b3V0ID0gTGF5b3V0O1xuZXhwb3J0cy5Mb2dpbiA9IExvZ2luO1xuZXhwb3J0cy5Ub3BCYXIgPSBUb3BCYXI7XG5leHBvcnRzLkxlZnRNZW51ID0gTGVmdE1lbnU7XG5leHBvcnRzLldlYnNpdGVTZWxlY3RvciA9IFdlYnNpdGVTZWxlY3RvcjtcbmV4cG9ydHMuQ29udGVudCA9IENvbnRlbnQ7XG5leHBvcnRzLlJvdXRlciA9IFJvdXRlcjtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb21wb25lbnRzL2xheW91dC5qc3hcIixcIi9jb21wb25lbnRzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqIEBqc3ggUmVhY3QuRE9NICovXG5cbnZhciBDT05GSUcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxudmFyIE15QWNjb3VudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ015QWNjb3VudCcsXG5cbiAgcm91dGVFZGl0QWNjb3VudDogZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcImJ1dHRvbiBjbGlja2VkXCIpO1xuICAgIHRoaXMucHJvcHMuc2V0UG9zKFwiYWNjb3VudC9lZGl0XCIsIFwiRWRpdCBBY2NvdW50XCIpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwidGV4dC1jZW50ZXJcIn0sIFxuXG4gICAgICAgICAgICBSZWFjdC5ET00uaW1nKCB7Y2xhc3NOYW1lOlwidGhcIiwgc3JjOlwiaHR0cDovL2dyYXZhdGFyLmNvbS9hdmF0YXIvZjAwMTYxYzdiMzVmMDA4NGQzOTBmNzg1ZTAxNWI5Y2EuanBnXCJ9ICksXG4gICAgICAgICAgICBSZWFjdC5ET00uaDEobnVsbCwgdGhpcy5wcm9wcy51c2VyLmZ1bGxOYW1lKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS5oMyhudWxsLCB0aGlzLnByb3BzLnVzZXIuZW1haWwpLFxuICAgICAgICAgICAgUmVhY3QuRE9NLmg0KG51bGwsIFwiUmVnaXN0ZXJlZCBcIiwgbW9tZW50KHRoaXMucHJvcHMudXNlci5jcmVhdGVkQXQpLmZyb21Ob3coKSksXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS5idXR0b24oIHtvbkNsaWNrOnRoaXMucm91dGVFZGl0QWNjb3VudCwgY2xhc3NOYW1lOlwiYnV0dG9uIHJhZGl1c1wifSwgXCJFZGl0IEFjY291bnRcIilcblxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuXG4gIH1cblxufSk7XG5cblxudmFyIEVkaXRBY2NvdW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnRWRpdEFjY291bnQnLFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cbiAgICByZXR1cm4ge2ZpcnN0X25hbWVfZXJyb3I6IHVuZGVmaW5lZCwgbGFzdF9uYW1lX2Vycm9yOiB1bmRlZmluZWQsIGVtYWlsX2Vycm9yOiB1bmRlZmluZWQsIHBhc3N3b3JkX2Vycm9yOiB1bmRlZmluZWQsIHNlcnZlcl9lcnJvcjogdW5kZWZpbmVkfTtcblxuICB9LFxuXG4gIHJvdXRlTXlBY2NvdW50OiBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuc2V0UG9zKFwiYWNjb3VudFwiLCBcIk15IEFjY291bnRcIik7XG4gIH0sXG5cbnNhdmVVc2VyOiBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc29sZS5sb2coXCJzYXZpbmcuLlwiKTtcblxuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdmFyIGZpcnN0X25hbWUgPSAkKCdpbnB1dCNmaXJzdF9uYW1lJykudmFsKCk7XG4gIHZhciBsYXN0X25hbWUgPSAkKCdpbnB1dCNsYXN0X25hbWUnKS52YWwoKTtcbiAgdmFyIGVtYWlsID0gJCgnaW5wdXQjZW1haWwnKS52YWwoKTtcbiAgdmFyIHBhc3N3b3JkID0gJCgnaW5wdXQjcGFzc3dvcmQnKS52YWwoKTtcblxuXG4gICAgLy8gVmFsaWRhdGUgLSBmaWVsZHMgbXVzdCBub3QgYmUgZW1wdHlcbiAgICBpZihfLmlzRW1wdHkoZmlyc3RfbmFtZSkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe2ZpcnN0X25hbWVfZXJyb3I6IFwiRmlyc3QgTmFtZSBjYW5ub3QgYmUgYmxhbmtcIn0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtmaXJzdF9uYW1lX2Vycm9yOiB1bmRlZmluZWR9KTtcbiAgICB9O1xuXG4gICAgaWYoXy5pc0VtcHR5KGxhc3RfbmFtZSkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe2xhc3RfbmFtZV9lcnJvcjogXCJMYXN0IE5hbWUgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7bGFzdF9uYW1lX2Vycm9yOiB1bmRlZmluZWR9KTtcbiAgICB9O1xuXG4gICAgaWYoXy5pc0VtcHR5KGVtYWlsKSkge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7ZW1haWxfZXJyb3I6IFwiRW1haWwgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7ZW1haWxfZXJyb3I6IHVuZGVmaW5lZH0pO1xuICAgIH07XG5cbiAgICBpZihfLmlzRW1wdHkocGFzc3dvcmQpKSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtwYXNzd29yZF9lcnJvcjogXCJQYXNzd29yZCBjYW5ub3QgYmUgYmxhbmtcIn0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtwYXNzd29yZF9lcnJvcjogdW5kZWZpbmVkfSk7XG4gICAgfTtcblxuLy8gc2VuZCB0byBzZXJ2ZXIgaWYgY2xpZW50IHZhbGlkYXRpb24gcGFzc2VzXG5pZighXy5zb21lKFtfLmlzRW1wdHkoZmlyc3RfbmFtZSksIF8uaXNFbXB0eShsYXN0X25hbWUpLCBfLmlzRW1wdHkoZW1haWwpLCBfLmlzRW1wdHkocGFzc3dvcmQpXSkpIHtcblxuICB2YXIgdXBkYXRlZF91c2VyID0ge307XG5cbiAgdXBkYXRlZF91c2VyLnVpZCA9IHRoaXMucHJvcHMudXNlci51aWQ7XG4gIHVwZGF0ZWRfdXNlci5maXJzdF9uYW1lID0gZmlyc3RfbmFtZTtcbiAgdXBkYXRlZF91c2VyLmxhc3RfbmFtZSA9IGxhc3RfbmFtZTtcbiAgdXBkYXRlZF91c2VyLmVtYWlsID0gZW1haWw7XG4gIHVwZGF0ZWRfdXNlci5wYXNzd29yZCA9IHBhc3N3b3JkO1xuXG4gIGNvbnNvbGUubG9nKHVwZGF0ZWRfdXNlcik7XG5cbiAgdmFyIGNvb2tpZSA9IEpTT04ucGFyc2UoJC5jb29raWUoXCJhcHBsaWNhdGlvblwiKSk7XG4gIHZhciB0b2tlbiA9IGNvb2tpZS5zZXNzaW9uSWQ7XG5cblxuICBzdXBlcmFnZW50XG4gIC5wb3N0KENPTkZJRy5VUkxTLnVwZGF0ZUFjY291bnQpXG4gIC5zZXQoJ1gtQVBJLUtleScsIHRva2VuKVxuICAucXVlcnkodXBkYXRlZF91c2VyKVxuICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gIC5lbmQoZnVuY3Rpb24oZXJyb3IsIHJlcyl7XG5cbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgaWYocmVzLm9rKSB7XG5cbiAgICAgIHNlbGYucHJvcHMuc2V0UG9zKFwiYWNjb3VudFwiLCBcIk15IEFjY291bnRcIik7XG4gICAgICBzZWxmLnByb3BzLnNldEFsZXJ0KFwiWW91ciBhY2NvdW50IGhhcyBiZWVuIHVwZGF0ZWQhXCIsIFwic3VjY2Vzc1wiKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAvLyBhIHZhbGlkYXRpb24gZXJyb3Igb2NjdXJyZWRcbiAgICAgICAgICBpZihKU09OLnBhcnNlKHJlcy50ZXh0KS5yZXNwb25zZSkge1xuICAgICAgICAgICAgdmFyIGVycm9ycyA9IEpTT04ucGFyc2UocmVzLnRleHQpLnJlc3BvbnNlLmVycm9yO1xuXG5cbiAgICAgICAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGVycm9ycy5maXJzdF9uYW1lKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtmaXJzdF9uYW1lX2Vycm9yOiBlcnJvcnMuZmlyc3RfbmFtZS5lcnJvcn0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGVycm9ycy5sYXN0X25hbWUpKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe2xhc3RfbmFtZV9lcnJvcjogZXJyb3JzLmxhc3RfbmFtZS5lcnJvcn0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGVycm9ycy5lbWFpbCkpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7ZW1haWxfZXJyb3I6IGVycm9ycy5lbWFpbC5lcnJvcn0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGVycm9ycy5wYXNzd29yZCkpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7cGFzc3dvcmRfZXJyb3I6IGVycm9ycy5wYXNzd29yZF9lcnJvci5lcnJvcn0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYSB0b2tlbiBlcnJvciBvY2N1cnJlZFxuICAgICAgICAgICAgaWYoSlNPTi5wYXJzZShyZXMudGV4dCkuZXJyb3IpIHtcbiAgICAgICAgICAgICAgdmFyIGVycm9yID0gSlNPTi5wYXJzZShyZXMudGV4dCkuZXJyb3I7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3NlcnZlcl9lcnJvcjogZXJyb3J9KTtcblxuICAgICAgICAgICAgICBpZihKU09OLnBhcnNlKHJlcy50ZXh0KS5zZXNzaW9uX2ludmFsaWQpIHtcbiAgICAgICAgICAgICAgc2VsZi5wcm9wcy5zZXRVc2VyKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuXG4gICAgICB9KVxuXG59XG5cbn0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICB2YXIgc2VydmVyX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5zZXJ2ZXJfZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUuc2VydmVyX2Vycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gIHZhciBmaXJzdF9uYW1lX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5maXJzdF9uYW1lX2Vycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLmZpcnN0X25hbWVfZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgdmFyIGxhc3RfbmFtZV9lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUubGFzdF9uYW1lX2Vycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLmxhc3RfbmFtZV9lcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuICB2YXIgZW1haWxfZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzZWxmLnN0YXRlLmVtYWlsX2Vycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLmVtYWlsX2Vycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gIHZhciBwYXNzd29yZF9lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUucGFzc3dvcmRfZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUucGFzc3dvcmRfZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcblxuICAgICAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJ0ZXh0LWNlbnRlclwifSwgXG5cbiAgICAgICAgICBSZWFjdC5ET00udWwoIHtjbGFzc05hbWU6XCJicmVhZGNydW1ic1wifSwgXG4gICAgICAgICAgUmVhY3QuRE9NLmxpKG51bGwsIFJlYWN0LkRPTS5hKCB7b25DbGljazp0aGlzLnJvdXRlTXlBY2NvdW50fSwgXCJNeSBBY2NvdW50XCIpKSxcbiAgICAgICAgICBSZWFjdC5ET00ubGkoIHtjbGFzc05hbWU6XCJjdXJyZW50XCJ9LCBcIkVkaXQgQWNjb3VudFwiKSxcbiAgICAgICAgICBSZWFjdC5ET00ubGkoIHtjbGFzc05hbWU6XCJjdXJyZW50XCJ9LCB0aGlzLnByb3BzLnVzZXIuZnVsbE5hbWUpXG4gICAgICAgICAgKSxcblxuICAgICAgICAgIFJlYWN0LkRPTS5oMihudWxsLCBcIkVkaXQgWW91ciBBY2NvdW50XCIpLFxuXG4gICAgICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInJvd1wifSwgXG4gICAgICAgICAgUmVhY3QuRE9NLmZvcm0obnVsbCwgXG4gICAgICAgICAgUmVhY3QuRE9NLmZpZWxkc2V0KG51bGwsIFxuICAgICAgICAgIFJlYWN0LkRPTS5sZWdlbmQobnVsbCwgXCJVcGRhdGUgVXNlciBEZXRhaWxzXCIpLFxuICAgICAgICAgIHNlcnZlcl9lcnJvcigpLFxuICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIkZpcnN0IE5hbWVcIixcbiAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoIHtpZDpcImZpcnN0X25hbWVcIiwgdHlwZTpcInRleHRcIiwgcGxhY2Vob2xkZXI6XCJGaXJzdCBOYW1lXCIsIGRlZmF1bHRWYWx1ZTp0aGlzLnByb3BzLnVzZXIuZmlyc3ROYW1lfSApLFxuICAgICAgICAgIGZpcnN0X25hbWVfZXJyb3IoKVxuICAgICAgICAgICksXG5cbiAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJMYXN0IE5hbWVcIixcbiAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoIHtpZDpcImxhc3RfbmFtZVwiLCB0eXBlOlwidGV4dFwiLCBwbGFjZWhvbGRlcjpcIkxhc3QgTmFtZVwiLCBkZWZhdWx0VmFsdWU6dGhpcy5wcm9wcy51c2VyLmxhc3ROYW1lfSApLFxuICAgICAgICAgIGxhc3RfbmFtZV9lcnJvcigpXG4gICAgICAgICAgKSxcblxuICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIkVtYWlsIEFkZHJlc3NcIixcbiAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoIHtpZDpcImVtYWlsXCIsIHR5cGU6XCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOlwiRW1haWwgQWRkcmVzc1wiLCBkZWZhdWx0VmFsdWU6dGhpcy5wcm9wcy51c2VyLmVtYWlsfSApLFxuICAgICAgICAgIGVtYWlsX2Vycm9yKClcbiAgICAgICAgICApLFxuXG4gICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiUGFzc3dvcmRcIixcbiAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoIHtpZDpcInBhc3N3b3JkXCIsIHR5cGU6XCJwYXNzd29yZFwiLCBwbGFjZWhvbGRlcjpcIlBhc3N3b3JkXCJ9ICksXG4gICAgICAgICAgcGFzc3dvcmRfZXJyb3IoKVxuICAgICAgICAgIClcblxuICAgICAgICAgICksXG5cbiAgICAgICAgICBSZWFjdC5ET00uYnV0dG9uKCB7b25DbGljazp0aGlzLnNhdmVVc2VyLCBjbGFzc05hbWU6XCJidXR0b24gcmFkaXVzIGV4cGFuZFwifSwgXCJVcGRhdGVcIilcbiAgICAgICAgICApXG4gICAgICAgICAgKVxuXG5cblxuICAgICAgICAgIClcbiAgICAgICAgICApXG5cbn1cblxufSk7XG5cblxuZXhwb3J0cy5NeUFjY291bnQgPSBNeUFjY291bnQ7XG5leHBvcnRzLkVkaXRBY2NvdW50ID0gRWRpdEFjY291bnQ7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29tcG9uZW50cy9teS1hY2NvdW50LmpzeFwiLFwiL2NvbXBvbmVudHNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKiogQGpzeCBSZWFjdC5ET00gKi9cblxudmFyIENPTkZJRyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xudmFyIExheW91dCA9IHJlcXVpcmUoXCIuL2xheW91dFwiKS5MYXlvdXQ7XG5cblJvdXRlciA9IEJhY2tib25lLlJvdXRlci5leHRlbmQoe1xuXG4gIC8vIFJvdXRlcyBhcmUgZGVmaW5lZCBpbiBDT05GSUcuUk9VVEVTLCBzbyBzZW5kIGFueSBwYXRoIHRvIHNob3dMYXlvdXRcbiAgcm91dGVzIDoge1xuICAgIFwiKnNwbGF0XCIgOiBcInNob3dMYXlvdXRcIlxuICB9LFxuICBzaG93TGF5b3V0IDogZnVuY3Rpb24ocG9zKSB7XG4gICAgY29uc29sZS5sb2cocG9zKVxuXG4gICAgUmVhY3QucmVuZGVyQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlvdXQoIHtyb3V0ZXM6Q09ORklHLlJPVVRFU30gKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGxpY2F0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgfVxufSk7XG5cbnJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcblxuQmFja2JvbmUuaGlzdG9yeS5zdGFydCh7cHVzaFN0YXRlOiB0cnVlfSk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29tcG9uZW50cy9yb3V0ZXIuanN4XCIsXCIvY29tcG9uZW50c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKiBAanN4IFJlYWN0LkRPTSAqL1xuXG52YXIgQ09ORklHID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG5cbnZhciBXZWJzaXRlcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ1dlYnNpdGVzJyxcblxuICByb3V0ZUFkZFdlYnNpdGU6IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJidXR0b24gY2xpY2tlZFwiKTtcbiAgICB0aGlzLnByb3BzLnNldFdlYnNpdGUodW5kZWZpbmVkKTtcbiAgICB0aGlzLnByb3BzLnNldFBvcyhcIndlYnNpdGVzL2FkZFwiLCBcIkFkZCBXZWJzaXRlXCIpO1xuICB9LFxuXG4gIHJvdXRlRWRpdFdlYnNpdGU6IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHdlYnNpdGVfaWQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KFwidHJcIikuYXR0cihcImlkXCIpO1xuICAgIGNvbnNvbGUubG9nKHdlYnNpdGVfaWQpO1xuICAgIHRoaXMucHJvcHMuc2V0V2Vic2l0ZSh3ZWJzaXRlX2lkKTtcbiAgICB0aGlzLnByb3BzLnNldFBvcyhcIndlYnNpdGVzL2VkaXQvXCIgKyB3ZWJzaXRlX2lkLCBcIkVkaXQgV2Vic2l0ZVwiKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHdlYnNpdGVzID0gdGhpcy5wcm9wcy53ZWJzaXRlcztcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cblxuICAgIHZhciB3ZWJzaXRlX3Jvd3MgPSBfLm1hcCh3ZWJzaXRlcywgZnVuY3Rpb24od2Vic2l0ZSkge1xuXG4gICAgICByZXR1cm4oXG4gICAgICAgICAgICAgUmVhY3QuRE9NLnRyKCB7aWQ6d2Vic2l0ZS5pZCwga2V5OndlYnNpdGUuaWR9LCBcbiAgICAgICAgICAgICBSZWFjdC5ET00udGQobnVsbCwgd2Vic2l0ZS5uYW1lKSxcbiAgICAgICAgICAgICBSZWFjdC5ET00udGQobnVsbCwgd2Vic2l0ZS5zZW5kZXJfbmFtZSwgXCIgKFwiLHdlYnNpdGUuc2VuZGVyX2VtYWlsLFwiKVwiKSxcbiAgICAgICAgICAgICBSZWFjdC5ET00udGQobnVsbCwgbW9tZW50KHdlYnNpdGUuY3JlYXRlZF9hdCkuZnJvbU5vdygpKSxcbiAgICAgICAgICAgICBSZWFjdC5ET00udGQobnVsbCwgUmVhY3QuRE9NLmJ1dHRvbigge29uQ2xpY2s6c2VsZi5yb3V0ZUVkaXRXZWJzaXRlLCBjbGFzc05hbWU6XCJidXR0b24gcmFkaXVzXCJ9LCBcIkVkaXRcIikpXG4gICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgKVxuXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KG51bGwsIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmgyKG51bGwsIFwiV2Vic2l0ZXNcIiksXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS50YWJsZSgge3dpZHRoOlwiMTAwJVwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00udGhlYWQobnVsbCwgXG4gICAgICAgICAgICBSZWFjdC5ET00udHIobnVsbCwgXG4gICAgICAgICAgICBSZWFjdC5ET00udGgobnVsbCwgXCJXZWJzaXRlIE5hbWVcIiksXG4gICAgICAgICAgICBSZWFjdC5ET00udGgobnVsbCwgXCJTZW5kZXIgRGV0YWlsc1wiKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS50aChudWxsLCBcIkNyZWF0ZWRcIiksXG4gICAgICAgICAgICBSZWFjdC5ET00udGgobnVsbCwgXCJBY3Rpb25zXCIpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuRE9NLnRib2R5KG51bGwsIFxuICAgICAgICAgICAgd2Vic2l0ZV9yb3dzXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuXG5cblxuXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwidGV4dC1jZW50ZXJcIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmJ1dHRvbigge29uQ2xpY2s6dGhpcy5yb3V0ZUFkZFdlYnNpdGUsIGNsYXNzTmFtZTpcImJ1dHRvbiByYWRpdXNcIn0sIFwiQWRkIE5ldyBXZWJzaXRlXCIpXG5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcblxuICB9XG5cbn0pO1xuXG5cbnZhciBBZGRXZWJzaXRlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnQWRkV2Vic2l0ZScsXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblxuICAgIHJldHVybiB7bmFtZV9lcnJvcjogZmFsc2UsIHVybF9lcnJvcjogZmFsc2UsIHNlbmRlcl9uYW1lX2Vycm9yOiBmYWxzZSwgc2VuZGVyX2VtYWlsX2Vycm9yOiBmYWxzZSwgc2VydmVyX2Vycm9yOiB1bmRlZmluZWR9O1xuXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5wcm9wcy5zZXRXZWJzaXRlKHVuZGVmaW5lZCk7XG5cbiAgfSxcblxuICByb3V0ZVdlYnNpdGVzOiBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuc2V0UG9zKFwid2Vic2l0ZXNcIiwgXCJXZWJzaXRlc1wiKTtcbiAgfSxcblxuc2F2ZVdlYnNpdGU6IGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zb2xlLmxvZyhcInNhdmluZy4uXCIpO1xuXG4gIHZhciBzZWxmID0gdGhpcztcblxuICB2YXIgbmFtZSA9ICQoJ2lucHV0I25hbWUnKS52YWwoKTtcbiAgdmFyIHVybCA9ICQoJ2lucHV0I3VybCcpLnZhbCgpO1xuICB2YXIgc2VuZGVyX25hbWUgPSAkKCdpbnB1dCNzZW5kZXJfbmFtZScpLnZhbCgpO1xuICB2YXIgc2VuZGVyX2VtYWlsID0gJCgnaW5wdXQjc2VuZGVyX2VtYWlsJykudmFsKCk7XG5cblxuICAgIC8vIFZhbGlkYXRlIC0gZmllbGRzIG11c3Qgbm90IGJlIGVtcHR5XG4gICAgaWYoXy5pc0VtcHR5KG5hbWUpKSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtuYW1lX2Vycm9yOiBcIk5hbWUgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7bmFtZV9lcnJvcjogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgaWYoXy5pc0VtcHR5KHVybCkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe3VybF9lcnJvcjogXCJVUkwgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7dXJsX2Vycm9yOiBmYWxzZX0pO1xuICAgIH07XG5cbiAgICBpZihfLmlzRW1wdHkoc2VuZGVyX25hbWUpKSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtzZW5kZXJfbmFtZV9lcnJvcjogXCJTZW5kZXIgTmFtZSBjYW5ub3QgYmUgYmxhbmtcIn0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtzZW5kZXJfbmFtZV9lcnJvcjogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgaWYoXy5pc0VtcHR5KHNlbmRlcl9lbWFpbCkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe3NlbmRlcl9lbWFpbF9lcnJvcjogXCJTZW5kZXIgRW1haWwgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VuZGVyX2VtYWlsX2Vycm9yOiBmYWxzZX0pO1xuICAgIH07XG5cbi8vIHNlbmQgdG8gc2VydmVyIGlmIGNsaWVudCB2YWxpZGF0aW9uIHBhc3Nlc1xuaWYoIV8uc29tZShbXy5pc0VtcHR5KG5hbWUpLCBfLmlzRW1wdHkodXJsKSwgXy5pc0VtcHR5KHNlbmRlcl9uYW1lKSwgXy5pc0VtcHR5KHNlbmRlcl9lbWFpbCldKSkge1xuXG4gIHZhciBuZXdfd2Vic2l0ZSA9IHt9O1xuXG4gIG5ld193ZWJzaXRlLm5hbWUgPSBuYW1lO1xuICBuZXdfd2Vic2l0ZS51cmwgPSB1cmw7XG4gIG5ld193ZWJzaXRlLnNlbmRlcl9uYW1lID0gc2VuZGVyX25hbWU7XG4gIG5ld193ZWJzaXRlLnNlbmRlcl9lbWFpbCA9IHNlbmRlcl9lbWFpbDtcblxuICBjb25zb2xlLmxvZyhuZXdfd2Vic2l0ZSk7XG5cbiAgdmFyIGNvb2tpZSA9IEpTT04ucGFyc2UoJC5jb29raWUoXCJhcHBsaWNhdGlvblwiKSk7XG4gIHZhciB0b2tlbiA9IGNvb2tpZS5zZXNzaW9uSWQ7XG5cblxuICBzdXBlcmFnZW50XG4gIC5wb3N0KENPTkZJRy5VUkxTLmFkZFdlYnNpdGUpXG4gIC5zZXQoJ1gtQVBJLUtleScsIHRva2VuKVxuICAucXVlcnkobmV3X3dlYnNpdGUpXG4gIC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgLmVuZChmdW5jdGlvbihlcnJvciwgcmVzKXtcblxuICAgIGNvbnNvbGUubG9nKHJlcyk7XG5cbiAgICBpZihyZXMub2spIHtcblxuICAgICAgc2VsZi5wcm9wcy5zZXRQb3MoXCJ3ZWJzaXRlc1wiLCBcIldlYnNpdGVzXCIpO1xuICAgICAgc2VsZi5wcm9wcy5zZXRBbGVydChuYW1lICsgXCIgaGFzIGJlZW4gYWRkZWQhXCIsIFwic3VjY2Vzc1wiKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAvLyBhIHZhbGlkYXRpb24gZXJyb3Igb2NjdXJyZWRcbiAgICAgICAgICBpZihKU09OLnBhcnNlKHJlcy50ZXh0KS5yZXNwb25zZSkge1xuICAgICAgICAgICAgdmFyIGVycm9ycyA9IEpTT04ucGFyc2UocmVzLnRleHQpLnJlc3BvbnNlLmVycm9yO1xuXG5cbiAgICAgICAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGVycm9ycy5uYW1lKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtuYW1lX2Vycm9yOiBlcnJvcnMubmFtZS5lcnJvcn0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGVycm9ycy51cmwpKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3VybF9lcnJvcjogZXJyb3JzLnVybC5lcnJvcn0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGVycm9ycy5zZW5kZXJfbmFtZSkpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VuZGVyX25hbWVfZXJyb3I6IGVycm9ycy5zZW5kZXJfbmFtZS5lcnJvcn0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGVycm9ycy5zZW5kZXJfZW1haWwpKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3NlbmRlcl9lbWFpbF9lcnJvcjogZXJyb3JzLnNlbmRlcl9lbWFpbC5lcnJvcn0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYSB0b2tlbiBlcnJvciBvY2N1cnJlZFxuICAgICAgICAgICAgaWYoSlNPTi5wYXJzZShyZXMudGV4dCkuZXJyb3IpIHtcbiAgICAgICAgICAgICAgdmFyIGVycm9yID0gSlNPTi5wYXJzZShyZXMudGV4dCkuZXJyb3I7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3NlcnZlcl9lcnJvcjogZXJyb3J9KTtcblxuICAgICAgICAgICAgICBpZihKU09OLnBhcnNlKHJlcy50ZXh0KS5zZXNzaW9uX2ludmFsaWQpIHtcbiAgICAgICAgICAgICAgc2VsZi5wcm9wcy5zZXRVc2VyKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuXG4gICAgICB9KVxuXG59XG5cbn0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuIHZhciBzZWxmID0gdGhpcztcblxuICB2YXIgc2VydmVyX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5zZXJ2ZXJfZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUuc2VydmVyX2Vycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gIHZhciBuYW1lX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5uYW1lX2Vycm9yICE9PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUubmFtZV9lcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuICB2YXIgdXJsX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS51cmxfZXJyb3IgIT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS51cmxfZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNlbmRlcl9uYW1lX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5zZW5kZXJfbmFtZV9lcnJvciAhPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLnNlbmRlcl9uYW1lX2Vycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gIHZhciBzZW5kZXJfZW1haWxfZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzZWxmLnN0YXRlLnNlbmRlcl9lbWFpbF9lcnJvciAhPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLnNlbmRlcl9lbWFpbF9lcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJ0ZXh0LWNlbnRlclwifSwgXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS51bCgge2NsYXNzTmFtZTpcImJyZWFkY3J1bWJzXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5saShudWxsLCBSZWFjdC5ET00uYSgge29uQ2xpY2s6dGhpcy5yb3V0ZVdlYnNpdGVzfSwgXCJXZWJzaXRlc1wiKSksXG4gICAgICAgICAgICBSZWFjdC5ET00ubGkoIHtjbGFzc05hbWU6XCJjdXJyZW50XCJ9LCBcIkFkZCBXZWJzaXRlXCIpXG4gICAgICAgICAgICApLFxuXG4gICAgICAgICAgICBSZWFjdC5ET00uaDIobnVsbCwgXCJBZGQgV2Vic2l0ZVwiKSxcblxuICAgICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwicm93XCJ9LCBcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmZvcm0obnVsbCwgXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5maWVsZHNldChudWxsLCBcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmxlZ2VuZChudWxsLCBcIldlYnNpdGUgRGV0YWlsc1wiKSxcbiAgICAgICAgICAgICAgc2VydmVyX2Vycm9yKCksXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIldlYnNpdGUgTmFtZVwiLFxuICAgICAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoIHtpZDpcIm5hbWVcIiwgdHlwZTpcInRleHRcIiwgcGxhY2Vob2xkZXI6XCJXZWJzaXRlIE5hbWVcIn0gKSxcbiAgICAgICAgICAgICAgbmFtZV9lcnJvcigpXG4gICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiVVJMXCIsXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwidXJsXCIsIHR5cGU6XCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOlwiV2Vic2l0ZSBVUkxcIn0gKSxcbiAgICAgICAgICAgICAgdXJsX2Vycm9yKClcbiAgICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJTZW5kZXIgTmFtZVwiLFxuICAgICAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoIHtpZDpcInNlbmRlcl9uYW1lXCIsIHR5cGU6XCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOlwiU2VuZGVyIE5hbWVcIn0gKSxcbiAgICAgICAgICAgICAgc2VuZGVyX25hbWVfZXJyb3IoKVxuICAgICAgICAgICAgICApLFxuXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIlNlbmRlciBFbWFpbFwiLFxuICAgICAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoIHtpZDpcInNlbmRlcl9lbWFpbFwiLCB0eXBlOlwidGV4dFwiLCBwbGFjZWhvbGRlcjpcIlNlbmRlciBFbWFpbFwifSApLFxuICAgICAgICAgICAgICBzZW5kZXJfZW1haWxfZXJyb3IoKVxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgICBSZWFjdC5ET00uYnV0dG9uKCB7b25DbGljazp0aGlzLnNhdmVXZWJzaXRlLCBjbGFzc05hbWU6XCJidXR0b24gcmFkaXVzIGV4cGFuZFwifSwgXCJBZGRcIilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcblxuICB9XG5cbn0pO1xuXG52YXIgRWRpdFdlYnNpdGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdFZGl0V2Vic2l0ZScsXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblxuICAgIHJldHVybiB7bmFtZV9lcnJvcjogZmFsc2UsIHVybF9lcnJvcjogZmFsc2UsIHNlbmRlcl9uYW1lX2Vycm9yOiBmYWxzZSwgc2VuZGVyX2VtYWlsX2Vycm9yOiBmYWxzZSwgc2VydmVyX2Vycm9yOiB1bmRlZmluZWR9O1xuXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuXG5cbiAgICAvLyBFbnN1cmUgY3VycmVudCBwYXRoIHJlZmVyZW5jZXMgYSB3ZWJzaXRlIHRoYXQgdGhlIHVzZXIgb3duc1xuICAgIHZhciB3ZWJzaXRlX2lkID0gQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudC5yZXBsYWNlKFwid2Vic2l0ZXMvZWRpdC9cIiwgXCJcIik7XG4gICAgdmFyIHdlYnNpdGVzID0gdGhpcy5wcm9wcy53ZWJzaXRlcztcblxuICAgIGNvbnNvbGUubG9nKHdlYnNpdGVfaWQpXG5cbiAgICBpZih0aGlzLnByb3BzLmFjdGl2ZV93ZWJzaXRlICE9PSB3ZWJzaXRlX2lkKSB7XG4gICAgICB2YXIgbWF0Y2ggPSBfLmZpbmQod2Vic2l0ZXMsIHtcImlkXCIgOiBwYXJzZUludCh3ZWJzaXRlX2lkKX0pO1xuXG4gICAgICBpZighXy5pc0VtcHR5KG1hdGNoKSkge1xuXG4gICAgICAvLyBQYXRoIGlkIGlzIGEgdmFsaWQgd2Vic2l0ZVxuICAgICAgdGhpcy5wcm9wcy5zZXRXZWJzaXRlKHdlYnNpdGVfaWQpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gUGF0aCBpZCBpcyBub3QgYSB2YWxpZCB3ZWJzaXRlXG4gICAgICB0aGlzLnByb3BzLnNldFBvcyhcIndlYnNpdGVzXCIsIFwiV2Vic2l0ZXNcIik7XG5cbiAgICB9XG5cbiAgfVxufSxcblxucm91dGVXZWJzaXRlczogZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHRoaXMucHJvcHMuc2V0UG9zKFwid2Vic2l0ZXNcIiwgXCJXZWJzaXRlc1wiKTtcbn0sXG5cbmRlbGV0ZVdlYnNpdGU6IGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zb2xlLmxvZyhcImRlbGV0aW5nLi5cIik7XG5cbnZhciBjb29raWUgPSBKU09OLnBhcnNlKCQuY29va2llKFwiYXBwbGljYXRpb25cIikpO1xudmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgdG9rZW4gPSBjb29raWUuc2Vzc2lvbklkO1xuXG5cbiAgc3VwZXJhZ2VudFxuICAucG9zdChDT05GSUcuVVJMUy5kZWxldGVXZWJzaXRlKVxuICAuc2V0KCdYLUFQSS1LZXknLCB0b2tlbilcbiAgLnF1ZXJ5KHtpZDogdGhpcy5wcm9wcy5hY3RpdmVfd2Vic2l0ZX0pXG4gIC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgLmVuZChmdW5jdGlvbihlcnJvciwgcmVzKXtcblxuICAgIGNvbnNvbGUubG9nKHJlcyk7XG5cbiAgICBpZihyZXMub2spIHtcblxuICAgICAgc2VsZi5wcm9wcy5zZXRQb3MoXCJ3ZWJzaXRlc1wiLCBcIldlYnNpdGVzXCIpO1xuICAgICAgc2VsZi5wcm9wcy5zZXRBbGVydChcIldlYnNpdGUgaGFzIGJlZW4gZGVsZXRlZCFcIiwgXCJzdWNjZXNzXCIpO1xuXG4gICAgfVxuXG4gIH0pO1xuXG5cbn0sXG5cblxuc2F2ZVdlYnNpdGU6IGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zb2xlLmxvZyhcInNhdmluZy4uXCIpO1xuXG5cbnZhciBjb29raWUgPSAkLmNvb2tpZShcImFwcGxpY2F0aW9uXCIpO1xudmFyIHdlYnNpdGVzID0gdGhpcy5wcm9wcy53ZWJzaXRlcztcblxuXG4gIHZhciBhY3RpdmVfd2Vic2l0ZSA9IF8uZmluZCh3ZWJzaXRlcywgeyBcImlkXCIgOiBwYXJzZUludChKU09OLnBhcnNlKGNvb2tpZSkuYWN0aXZlX3dlYnNpdGUpfSk7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICB2YXIgbmFtZSA9ICQoJ2lucHV0I25hbWUnKS52YWwoKTtcbiAgdmFyIHVybCA9ICQoJ2lucHV0I3VybCcpLnZhbCgpO1xuICB2YXIgc2VuZGVyX25hbWUgPSAkKCdpbnB1dCNzZW5kZXJfbmFtZScpLnZhbCgpO1xuICB2YXIgc2VuZGVyX2VtYWlsID0gJCgnaW5wdXQjc2VuZGVyX2VtYWlsJykudmFsKCk7XG5cblxuICAgIC8vIFZhbGlkYXRlIC0gZmllbGRzIG11c3Qgbm90IGJlIGVtcHR5XG4gICAgaWYoXy5pc0VtcHR5KG5hbWUpKSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtuYW1lX2Vycm9yOiBcIk5hbWUgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7bmFtZV9lcnJvcjogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgaWYoXy5pc0VtcHR5KHVybCkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe3VybF9lcnJvcjogXCJVUkwgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7dXJsX2Vycm9yOiBmYWxzZX0pO1xuICAgIH07XG5cbiAgICBpZihfLmlzRW1wdHkoc2VuZGVyX25hbWUpKSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtzZW5kZXJfbmFtZV9lcnJvcjogXCJTZW5kZXIgTmFtZSBjYW5ub3QgYmUgYmxhbmtcIn0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtzZW5kZXJfbmFtZV9lcnJvcjogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgaWYoXy5pc0VtcHR5KHNlbmRlcl9lbWFpbCkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe3NlbmRlcl9lbWFpbF9lcnJvcjogXCJTZW5kZXIgRW1haWwgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VuZGVyX2VtYWlsX2Vycm9yOiBmYWxzZX0pO1xuICAgIH07XG5cbi8vIHNlbmQgdG8gc2VydmVyIGlmIGNsaWVudCB2YWxpZGF0aW9uIHBhc3Nlc1xuaWYoIV8uc29tZShbXy5pc0VtcHR5KG5hbWUpLCBfLmlzRW1wdHkodXJsKSwgXy5pc0VtcHR5KHNlbmRlcl9uYW1lKSwgXy5pc0VtcHR5KHNlbmRlcl9lbWFpbCldKSkge1xuXG4gIHZhciB1cGRhdGVkX3dlYnNpdGUgPSB7fTtcblxuICB1cGRhdGVkX3dlYnNpdGUuaWQgPSBhY3RpdmVfd2Vic2l0ZS5pZDtcbiAgdXBkYXRlZF93ZWJzaXRlLm5hbWUgPSBuYW1lO1xuICB1cGRhdGVkX3dlYnNpdGUudXJsID0gdXJsO1xuICB1cGRhdGVkX3dlYnNpdGUuc2VuZGVyX25hbWUgPSBzZW5kZXJfbmFtZTtcbiAgdXBkYXRlZF93ZWJzaXRlLnNlbmRlcl9lbWFpbCA9IHNlbmRlcl9lbWFpbDtcblxuICBjb25zb2xlLmxvZyh1cGRhdGVkX3dlYnNpdGUpO1xuXG4gIHZhciBjb29raWUgPSBKU09OLnBhcnNlKCQuY29va2llKFwiYXBwbGljYXRpb25cIikpO1xuICB2YXIgdG9rZW4gPSBjb29raWUuc2Vzc2lvbklkO1xuXG5cbiAgc3VwZXJhZ2VudFxuICAucG9zdChDT05GSUcuVVJMUy51cGRhdGVXZWJzaXRlKVxuICAuc2V0KCdYLUFQSS1LZXknLCB0b2tlbilcbiAgLnF1ZXJ5KHVwZGF0ZWRfd2Vic2l0ZSlcbiAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAuZW5kKGZ1bmN0aW9uKGVycm9yLCByZXMpe1xuXG4gICAgY29uc29sZS5sb2cocmVzKTtcblxuICAgIGlmKHJlcy5vaykge1xuXG4gICAgICBzZWxmLnByb3BzLnNldFBvcyhcIndlYnNpdGVzXCIsIFwiV2Vic2l0ZXNcIik7XG4gICAgICBzZWxmLnByb3BzLnNldEFsZXJ0KG5hbWUgKyBcIiBoYXMgYmVlbiB1cGRhdGVkIVwiLCBcInN1Y2Nlc3NcIik7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgLy8gYSB2YWxpZGF0aW9uIGVycm9yIG9jY3VycmVkXG4gICAgICAgICAgaWYoSlNPTi5wYXJzZShyZXMudGV4dCkucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciBlcnJvcnMgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS5yZXNwb25zZS5lcnJvcjtcblxuXG4gICAgICAgICAgICBpZighXy5pc1VuZGVmaW5lZChlcnJvcnMubmFtZSkpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7bmFtZV9lcnJvcjogZXJyb3JzLm5hbWUuZXJyb3J9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighXy5pc1VuZGVmaW5lZChlcnJvcnMudXJsKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHt1cmxfZXJyb3I6IGVycm9ycy51cmwuZXJyb3J9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighXy5pc1VuZGVmaW5lZChlcnJvcnMuc2VuZGVyX25hbWUpKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3NlbmRlcl9uYW1lX2Vycm9yOiBlcnJvcnMuc2VuZGVyX25hbWUuZXJyb3J9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighXy5pc1VuZGVmaW5lZChlcnJvcnMuc2VuZGVyX2VtYWlsKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtzZW5kZXJfZW1haWxfZXJyb3I6IGVycm9ycy5zZW5kZXJfZW1haWwuZXJyb3J9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGEgdG9rZW4gZXJyb3Igb2NjdXJyZWRcbiAgICAgICAgICAgIGlmKEpTT04ucGFyc2UocmVzLnRleHQpLmVycm9yKSB7XG4gICAgICAgICAgICAgIHZhciBlcnJvciA9IEpTT04ucGFyc2UocmVzLnRleHQpLmVycm9yO1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtzZXJ2ZXJfZXJyb3I6IGVycm9yfSk7XG5cbiAgICAgICAgICAgICAgaWYoSlNPTi5wYXJzZShyZXMudGV4dCkuc2Vzc2lvbl9pbnZhbGlkKSB7XG4gICAgICAgICAgICAgIHNlbGYucHJvcHMuc2V0VXNlcih1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuICAgICAgfSlcblxufVxuXG59LFxuXG5cbnJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbnZhciBjb29raWUgPSAkLmNvb2tpZShcImFwcGxpY2F0aW9uXCIpO1xudmFyIHdlYnNpdGVzID0gdGhpcy5wcm9wcy53ZWJzaXRlcztcblxuXG4gIHZhciBhY3RpdmVfd2Vic2l0ZSA9IF8uZmluZCh3ZWJzaXRlcywgeyBcImlkXCIgOiBwYXJzZUludChKU09OLnBhcnNlKGNvb2tpZSkuYWN0aXZlX3dlYnNpdGUpfSk7XG4gIHZhciB3ZWJzaXRlX2lkID0gQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudC5yZXBsYWNlKFwid2Vic2l0ZXMvZWRpdC9cIiwgXCJcIik7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICB2YXIgc2VydmVyX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5zZXJ2ZXJfZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUuc2VydmVyX2Vycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gIHZhciBuYW1lX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5uYW1lX2Vycm9yICE9PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUubmFtZV9lcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuICB2YXIgdXJsX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS51cmxfZXJyb3IgIT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS51cmxfZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNlbmRlcl9uYW1lX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5zZW5kZXJfbmFtZV9lcnJvciAhPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLnNlbmRlcl9uYW1lX2Vycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gIHZhciBzZW5kZXJfZW1haWxfZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzZWxmLnN0YXRlLnNlbmRlcl9lbWFpbF9lcnJvciAhPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLnNlbmRlcl9lbWFpbF9lcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuXG4gIGlmKCFfLmlzRW1wdHkoYWN0aXZlX3dlYnNpdGUpKSB7XG4gICAgaWYoYWN0aXZlX3dlYnNpdGUuaWQgPT09IHBhcnNlSW50KHdlYnNpdGVfaWQpKSB7XG5cbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInRleHQtY2VudGVyXCJ9LCBcblxuICAgICAgICAgICAgICBSZWFjdC5ET00udWwoIHtjbGFzc05hbWU6XCJicmVhZGNydW1ic1wifSwgXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5saShudWxsLCBSZWFjdC5ET00uYSgge29uQ2xpY2s6dGhpcy5yb3V0ZVdlYnNpdGVzfSwgXCJXZWJzaXRlc1wiKSksXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5saSgge2NsYXNzTmFtZTpcImN1cnJlbnRcIn0sIFwiRWRpdCBXZWJzaXRlXCIpLFxuICAgICAgICAgICAgICBSZWFjdC5ET00ubGkoIHtjbGFzc05hbWU6XCJjdXJyZW50XCJ9LCBhY3RpdmVfd2Vic2l0ZS5uYW1lKVxuICAgICAgICAgICAgICApLFxuXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5oMihudWxsLCBcIkVkaXRpbmcgXCIsIGFjdGl2ZV93ZWJzaXRlLm5hbWUpLFxuXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJyb3dcIn0sIFxuICAgICAgICAgICAgICBSZWFjdC5ET00uZm9ybShudWxsLCBcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmZpZWxkc2V0KG51bGwsIFxuICAgICAgICAgICAgICBSZWFjdC5ET00ubGVnZW5kKG51bGwsIFwiVXBkYXRlIERldGFpbHNcIiksXG4gICAgICAgICAgICAgIHNlcnZlcl9lcnJvcigpLFxuICAgICAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJXZWJzaXRlIE5hbWVcIixcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJuYW1lXCIsIHR5cGU6XCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOlwiV2Vic2l0ZSBOYW1lXCIsIGRlZmF1bHRWYWx1ZTphY3RpdmVfd2Vic2l0ZS5uYW1lfSApLFxuICAgICAgICAgICAgICBuYW1lX2Vycm9yKClcbiAgICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJVUkxcIixcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJ1cmxcIiwgdHlwZTpcInRleHRcIiwgcGxhY2Vob2xkZXI6XCJXZWJzaXRlIFVSTFwiLCBkZWZhdWx0VmFsdWU6YWN0aXZlX3dlYnNpdGUudXJsfSApLFxuICAgICAgICAgICAgICB1cmxfZXJyb3IoKVxuICAgICAgICAgICAgICApLFxuXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIlNlbmRlciBOYW1lXCIsXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwic2VuZGVyX25hbWVcIiwgdHlwZTpcInRleHRcIiwgcGxhY2Vob2xkZXI6XCJTZW5kZXIgTmFtZVwiLCBkZWZhdWx0VmFsdWU6YWN0aXZlX3dlYnNpdGUuc2VuZGVyX25hbWV9ICksXG4gICAgICAgICAgICAgIHNlbmRlcl9uYW1lX2Vycm9yKClcbiAgICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJTZW5kZXIgRW1haWxcIixcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJzZW5kZXJfZW1haWxcIiwgdHlwZTpcInRleHRcIiwgcGxhY2Vob2xkZXI6XCJTZW5kZXIgRW1haWxcIiwgZGVmYXVsdFZhbHVlOmFjdGl2ZV93ZWJzaXRlLnNlbmRlcl9lbWFpbH0gKSxcbiAgICAgICAgICAgICAgc2VuZGVyX2VtYWlsX2Vycm9yKClcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmJ1dHRvbigge29uQ2xpY2s6dGhpcy5zYXZlV2Vic2l0ZSwgY2xhc3NOYW1lOlwiYnV0dG9uIHJhZGl1cyBleHBhbmRcIn0sIFwiVXBkYXRlXCIpXG4gICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmhyKG51bGwgKSxcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmgzKG51bGwsIFwiUGVybWVuYW50bHkgRGVsZXRlIFdlYnNpdGVcIiksXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBSZWFjdC5ET00ucChudWxsLCBcIkNsaWNrIHRoZSBidXR0b24gYmVsb3cgdG8gXCIsIFJlYWN0LkRPTS5zdHJvbmcobnVsbCwgXCJwZXJtZW5hbnRseSByZW1vdmUgdGhlIFwiLCBhY3RpdmVfd2Vic2l0ZS5uYW1lLCBcIiB3ZWJzaXRlIGFuZCBhbGwgb2YgaXRzIGRhdGFcIiksIFwiIGZyb20gdGhlIHN5c3RlbS5cIiksXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5idXR0b24oIHtvbkNsaWNrOnRoaXMuZGVsZXRlV2Vic2l0ZSwgY2xhc3NOYW1lOlwiYnV0dG9uIHJhZGl1cyBhbGVydCBleHBhbmRcIn0sIFwiRGVsZXRlXCIpXG4gICAgICAgICAgICAgIClcblxuXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxufSBlbHNlIHtcbiAgcmV0dXJuIChcbiAgICAgICAgICBSZWFjdC5ET00uZGl2KG51bGwsIFxuICAgICAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiXG4gICAgICAgICAgKSlcbn0gXG59IGVsc2Uge1xuICByZXR1cm4gKFxuICAgICAgICAgIFJlYWN0LkRPTS5kaXYobnVsbCwgXG4gICAgICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCJcbiAgICAgICAgICApKVxufVxufVxuXG59KTtcblxuZXhwb3J0cy5XZWJzaXRlcyA9IFdlYnNpdGVzO1xuZXhwb3J0cy5BZGRXZWJzaXRlID0gQWRkV2Vic2l0ZTtcbmV4cG9ydHMuRWRpdFdlYnNpdGUgPSBFZGl0V2Vic2l0ZTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2NvbXBvbmVudHMvd2Vic2l0ZS5qc3hcIixcIi9jb21wb25lbnRzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXG4gKlxuICogVGhpcyBmaWxlIGlzIHVzZWQgdG8gY29uZmlndXJlIHNldHRpbmdzIGZvciB0aGUgYXBwbGljYXRpb24uXG4gKlxuICogQGF1dGhvciBEaHJ1diBCaGF0aWEgPGRocnV2QGRocnV2YmhhdGlhLmNvbT5cbiAqXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIFdFQlNJVEVfTkFNRSA6IFwiUmVhY3QgRGVtb1wiLFxuXG4gIFJPVVRFUyA6IFtcbiAgICB7bmFtZTogXCJEYXNoYm9hcmRcIiwgdXJsOiBcIlwiLCBzaG93X2luX21lbnU6IHRydWUsIGFsbG93X3BhcmFtZXRlcnM6IGZhbHNlfSxcbiAgICB7bmFtZTogXCJXZWJzaXRlc1wiLCB1cmw6IFwid2Vic2l0ZXNcIiwgc3Vicm91dGVzOiBcIkFkZCBXZWJzaXRlLCBFZGl0IFdlYnNpdGVcIiwgc2hvd19pbl9tZW51OiB0cnVlLCBhbGxvd19wYXJhbWV0ZXJzOiBmYWxzZX0sXG4gICAge25hbWU6IFwiQWRkIFdlYnNpdGVcIiwgdXJsOiBcIndlYnNpdGVzL2FkZFwiLCBzaG93X2luX21lbnU6IGZhbHNlLCBhbGxvd19wYXJhbWV0ZXJzOiBmYWxzZX0sXG4gICAge25hbWU6IFwiRWRpdCBXZWJzaXRlXCIsIHVybDogXCJ3ZWJzaXRlcy9lZGl0XCIsIHNob3dfaW5fbWVudTogZmFsc2UsIGFsbG93X3BhcmFtZXRlcnM6IHRydWV9LFxuICAgIHtuYW1lOiBcIkNhbXBhaWduc1wiLCB1cmw6IFwiY2FtcGFpZ25zXCIsIHNob3dfaW5fbWVudTogdHJ1ZSwgYWxsb3dfcGFyYW1ldGVyczogZmFsc2V9LFxuICAgIHtuYW1lOiBcIk15IEFjY291bnRcIiwgdXJsOiBcImFjY291bnRcIiwgc3Vicm91dGVzOiBcIkVkaXQgQWNjb3VudFwiLCBzaG93X2luX21lbnU6IHRydWUsIGFsbG93X3BhcmFtZXRlcnM6IGZhbHNlfSxcbiAgICB7bmFtZTogXCJFZGl0IEFjY291bnRcIiwgdXJsOiBcImFjY291bnQvZWRpdFwiLCBzaG93X2luX21lbnU6IGZhbHNlLCBhbGxvd19wYXJhbWV0ZXJzOiBmYWxzZX0sXG4gICAge25hbWU6IFwiU3VwcG9ydFwiLCB1cmw6IFwic3VwcG9ydFwiLCBzaG93X2luX21lbnU6IHRydWUsIGFsbG93X3BhcmFtZXRlcnM6IGZhbHNlfVxuICBdLFxuXG4gIFVSTFMgOiB7XG5cbiAgICBcInZhbGlkYXRlXCIgOiBcImh0dHA6Ly8xOTIuMTY4LjE3OC4yMDo5MDAwL2FwaS92MS9hdXRoL3ZhbGlkYXRlL1wiLFxuICAgIFwidXBkYXRlV2Vic2l0ZVwiIDogXCJodHRwOi8vMTkyLjE2OC4xNzguMjA6OTAwMC9hcGkvdjEvd2Vic2l0ZS91cGRhdGVcIixcbiAgICBcImFkZFdlYnNpdGVcIiA6IFwiaHR0cDovLzE5Mi4xNjguMTc4LjIwOjkwMDAvYXBpL3YxL3dlYnNpdGUvYWRkXCIsXG4gICAgXCJkZWxldGVXZWJzaXRlXCIgOiBcImh0dHA6Ly8xOTIuMTY4LjE3OC4yMDo5MDAwL2FwaS92MS93ZWJzaXRlL2RlbGV0ZVwiLFxuICAgIFwibG9naW5cIiA6ICdodHRwOi8vMTkyLjE2OC4xNzguMjA6OTAwMC9hcGkvdjEvYXV0aC9sb2dpbicsXG4gICAgXCJ1cGRhdGVBY2NvdW50XCIgOiBcImh0dHA6Ly8xOTIuMTY4LjE3OC4yMDo5MDAwL2FwaS92MS9hY2NvdW50L3VwZGF0ZVwiXG5cbiAgfSxcblxuXG4gIE1PREUgOiBcIkRlYnVnXCJcblxufTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb25maWcuanNcIixcIi9cIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG52YXIgY29uZmlnID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xudmFyIEJhY2tib25lUm91dGVyID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9yb3V0ZXJcIik7XG5cbkFwcGxpY2F0aW9uID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9sYXlvdXRcIikuTGF5b3V0O1xuXG4vLyBMb2dpbiA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbGF5b3V0XCIpLkxvZ2luO1xuLy8gVG9wQmFyID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9sYXlvdXRcIikuVG9wQmFyO1xuLy8gTGVmdE1lbnUgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2xheW91dFwiKS5MZWZ0TWVudTtcbi8vIFdlYnNpdGVTZWxlY3RvciA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbGF5b3V0XCIpLldlYnNpdGVTZWxlY3Rvcjtcbi8vIENvbnRlbnQgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2xheW91dFwiKS5Db250ZW50O1xuLy8gUm91dGVyID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9sYXlvdXRcIikuUm91dGVyO1xuXG5cblxuXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAkKGRvY3VtZW50KS5mb3VuZGF0aW9uKCk7XG5cbn0oKTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9mYWtlXzFkZGZhZGRjLmpzXCIsXCIvXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXG4gKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGNvbW1vbiBoZWxwZXIgZnVuY3Rpb25zIHdoaWNoIGV4dGVuZCBMby1EYXNoJ3MgXyBuYW1lc3BhY2UuXG4gKlxuICogQG5hbWVzcGFjZSBfXG4gKiBAYXV0aG9yIERocnV2IEJoYXRpYSA8ZGhydXZAZGhydXZiaGF0aWEuY29tPlxuICpcbiAqL1xuXG52YXIgQ09ORklHID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xuXG5fLm1peGluKHtcblxuICAvKipcbiAgICpcbiAgICogQ2hlY2tzIGZvciBhIHZhbGlkIHNlc3Npb24gY29va2llICYgcHVsbHMgZG93biBhbnkgdXBkYXRlcyBmcm9tIHRoZSBzZXJ2ZXIsXG4gICAqIG90aGVyd2lzZSBraWxscyB0aGUgY3VycmVudCBzZXNzaW9uIHdoaWNoIHNob3dzIHRoZSBMb2dpbiBzY3JlZW4uXG4gICAqXG4gICAqL1xuICBnZXRTZXNzaW9uOiBmdW5jdGlvbigpIHtcblxuXG4gICAgdmFyIGNvb2tpZSA9ICQuY29va2llKFwiYXBwbGljYXRpb25cIik7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKGNvb2tpZSkpIHtcblxuICAgICAgdmFyIHRva2VuID0gSlNPTi5wYXJzZShjb29raWUpLnNlc3Npb25JZDtcblxuICAgICAgc3VwZXJhZ2VudFxuICAgICAgICAuZ2V0KENPTkZJRy5VUkxTLnZhbGlkYXRlICsgdG9rZW4pXG4gICAgICAgIC5zZXQoJ1gtQVBJLUtleScsIHRva2VuKVxuICAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgICAgIC5lbmQoZnVuY3Rpb24oZXJyb3IsIHJlcykge1xuXG4gICAgICAgICAgaWYgKHJlcy5vayA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICB2YXIgc2Vzc2lvbklkID0gSlNPTi5wYXJzZShyZXMudGV4dCkuc2Vzc2lvbklkXG4gICAgICAgICAgICB2YXIgdXNlciA9IEpTT04ucGFyc2UocmVzLnRleHQpLnVzZXJcblxuICAgICAgICAgICAgdmFyIHVzZXJfd2Vic2l0ZXMgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS53ZWJzaXRlc1xuXG4gICAgICAgICAgICB2YXIgYWN0aXZlX3dlYnNpdGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIGlmICghXy5pc0VtcHR5KHVzZXJfd2Vic2l0ZXMpKSB7XG4gICAgICAgICAgICAgIC8vIHNldCBhY3RpdmUgd2Vic2l0ZSB0byB0aGUgbGFzdCBzZWxlY3RlZCB3ZWJzaXRlIGluIHRoZSBjb29raWUsIGVsc2UgZmlyc3Qgd2Vic2l0ZSBpbiB0aGUgdXNlcidzIGxpc3RcbiAgICAgICAgICAgICAgYWN0aXZlX3dlYnNpdGUgPSBKU09OLnBhcnNlKGNvb2tpZSkuYWN0aXZlX3dlYnNpdGU7XG5cblxuXG4gICAgICAgICAgICAgIGlmIChfLmlzRW1wdHkoXy5maW5kKHVzZXJfd2Vic2l0ZXMsIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IHBhcnNlSW50KGFjdGl2ZV93ZWJzaXRlKVxuICAgICAgICAgICAgICB9KSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVfd2Vic2l0ZSlcbiAgICAgICAgICAgICAgICBhY3RpdmVfd2Vic2l0ZSA9IF8uZmlyc3QodXNlcl93ZWJzaXRlcykuaWQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkLmNvb2tpZShcImFwcGxpY2F0aW9uXCIsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgXCJzZXNzaW9uSWRcIjogc2Vzc2lvbklkLFxuICAgICAgICAgICAgICBcImFjdGl2ZV93ZWJzaXRlXCI6IGFjdGl2ZV93ZWJzaXRlXG4gICAgICAgICAgICB9KSwge1xuICAgICAgICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgICAgICAgZXhwaXJlczogMTIwXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBzZWxmLnNldFdlYnNpdGUoYWN0aXZlX3dlYnNpdGUpO1xuXG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgICAgICAgYWN0aXZlX3dlYnNpdGU6IGFjdGl2ZV93ZWJzaXRlLFxuICAgICAgICAgICAgICB3ZWJzaXRlczogdXNlcl93ZWJzaXRlcyxcbiAgICAgICAgICAgICAgcmVuZGVyOiB0cnVlXG4gICAgICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAvLyBDb29raWUgbm8gbG9uZ2VyIHZhbGlkIC0gcmVuZGVyIGxvZ2luIGZvcm1cbiAgICAgICAgICAgIHNlbGYuc2V0VXNlcih1bmRlZmluZWQpO1xuICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHJlbmRlcjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgICAgIH0pO1xuXG5cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8vIE5vIHByZXYgY29va2llIC0gcmVuZGVyIGxvZ2luIGZvcm1cbiAgICAgIHNlbGYuc2V0VXNlcih1bmRlZmluZWQpO1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgIHJlbmRlcjogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICB9XG4gIH1cblxufSk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvdXRpbC5qc1wiLFwiL1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTJcblxuLyoqXG4gKiBJZiBgQnVmZmVyLl91c2VUeXBlZEFycmF5c2A6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChjb21wYXRpYmxlIGRvd24gdG8gSUU2KVxuICovXG5CdWZmZXIuX3VzZVR5cGVkQXJyYXlzID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gRGV0ZWN0IGlmIGJyb3dzZXIgc3VwcG9ydHMgVHlwZWQgQXJyYXlzLiBTdXBwb3J0ZWQgYnJvd3NlcnMgYXJlIElFIDEwKywgRmlyZWZveCA0KyxcbiAgLy8gQ2hyb21lIDcrLCBTYWZhcmkgNS4xKywgT3BlcmEgMTEuNissIGlPUyA0LjIrLiBJZiB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGFkZGluZ1xuICAvLyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsIHRoZW4gdGhhdCdzIHRoZSBzYW1lIGFzIG5vIGBVaW50OEFycmF5YCBzdXBwb3J0XG4gIC8vIGJlY2F1c2Ugd2UgbmVlZCB0byBiZSBhYmxlIHRvIGFkZCBhbGwgdGhlIG5vZGUgQnVmZmVyIEFQSSBtZXRob2RzLiBUaGlzIGlzIGFuIGlzc3VlXG4gIC8vIGluIEZpcmVmb3ggNC0yOS4gTm93IGZpeGVkOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzhcbiAgdHJ5IHtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKDApXG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICBhcnIuZm9vID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfVxuICAgIHJldHVybiA0MiA9PT0gYXJyLmZvbygpICYmXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgLy8gQ2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSkoKVxuXG4vKipcbiAqIENsYXNzOiBCdWZmZXJcbiAqID09PT09PT09PT09PT1cbiAqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGFyZSBhdWdtZW50ZWRcbiAqIHdpdGggZnVuY3Rpb24gcHJvcGVydGllcyBmb3IgYWxsIHRoZSBub2RlIGBCdWZmZXJgIEFQSSBmdW5jdGlvbnMuIFdlIHVzZVxuICogYFVpbnQ4QXJyYXlgIHNvIHRoYXQgc3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXQgcmV0dXJuc1xuICogYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogQnkgYXVnbWVudGluZyB0aGUgaW5zdGFuY2VzLCB3ZSBjYW4gYXZvaWQgbW9kaWZ5aW5nIHRoZSBgVWludDhBcnJheWBcbiAqIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gQnVmZmVyIChzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKVxuICAgIHJldHVybiBuZXcgQnVmZmVyKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pXG5cbiAgdmFyIHR5cGUgPSB0eXBlb2Ygc3ViamVjdFxuXG4gIC8vIFdvcmthcm91bmQ6IG5vZGUncyBiYXNlNjQgaW1wbGVtZW50YXRpb24gYWxsb3dzIGZvciBub24tcGFkZGVkIHN0cmluZ3NcbiAgLy8gd2hpbGUgYmFzZTY0LWpzIGRvZXMgbm90LlxuICBpZiAoZW5jb2RpbmcgPT09ICdiYXNlNjQnICYmIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgc3ViamVjdCA9IHN0cmluZ3RyaW0oc3ViamVjdClcbiAgICB3aGlsZSAoc3ViamVjdC5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgICBzdWJqZWN0ID0gc3ViamVjdCArICc9J1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbmQgdGhlIGxlbmd0aFxuICB2YXIgbGVuZ3RoXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJylcbiAgICBsZW5ndGggPSBjb2VyY2Uoc3ViamVjdClcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpXG4gICAgbGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoc3ViamVjdCwgZW5jb2RpbmcpXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKVxuICAgIGxlbmd0aCA9IGNvZXJjZShzdWJqZWN0Lmxlbmd0aCkgLy8gYXNzdW1lIHRoYXQgb2JqZWN0IGlzIGFycmF5LWxpa2VcbiAgZWxzZVxuICAgIHRocm93IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgbmVlZHMgdG8gYmUgYSBudW1iZXIsIGFycmF5IG9yIHN0cmluZy4nKVxuXG4gIHZhciBidWZcbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICAvLyBQcmVmZXJyZWQ6IFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgYnVmID0gQnVmZmVyLl9hdWdtZW50KG5ldyBVaW50OEFycmF5KGxlbmd0aCkpXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBUSElTIGluc3RhbmNlIG9mIEJ1ZmZlciAoY3JlYXRlZCBieSBgbmV3YClcbiAgICBidWYgPSB0aGlzXG4gICAgYnVmLmxlbmd0aCA9IGxlbmd0aFxuICAgIGJ1Zi5faXNCdWZmZXIgPSB0cnVlXG4gIH1cblxuICB2YXIgaVxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cyAmJiB0eXBlb2Ygc3ViamVjdC5ieXRlTGVuZ3RoID09PSAnbnVtYmVyJykge1xuICAgIC8vIFNwZWVkIG9wdGltaXphdGlvbiAtLSB1c2Ugc2V0IGlmIHdlJ3JlIGNvcHlpbmcgZnJvbSBhIHR5cGVkIGFycmF5XG4gICAgYnVmLl9zZXQoc3ViamVjdClcbiAgfSBlbHNlIGlmIChpc0FycmF5aXNoKHN1YmplY3QpKSB7XG4gICAgLy8gVHJlYXQgYXJyYXktaXNoIG9iamVjdHMgYXMgYSBieXRlIGFycmF5XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpKVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0LnJlYWRVSW50OChpKVxuICAgICAgZWxzZVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0W2ldXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgYnVmLndyaXRlKHN1YmplY3QsIDAsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmICFCdWZmZXIuX3VzZVR5cGVkQXJyYXlzICYmICFub1plcm8pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1ZltpXSA9IDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmXG59XG5cbi8vIFNUQVRJQyBNRVRIT0RTXG4vLyA9PT09PT09PT09PT09PVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAncmF3JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gKGIpIHtcbiAgcmV0dXJuICEhKGIgIT09IG51bGwgJiYgYiAhPT0gdW5kZWZpbmVkICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGZ1bmN0aW9uIChzdHIsIGVuY29kaW5nKSB7XG4gIHZhciByZXRcbiAgc3RyID0gc3RyICsgJydcbiAgc3dpdGNoIChlbmNvZGluZyB8fCAndXRmOCcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAvIDJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gdXRmOFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAncmF3JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggKiAyXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIChsaXN0LCB0b3RhbExlbmd0aCkge1xuICBhc3NlcnQoaXNBcnJheShsaXN0KSwgJ1VzYWdlOiBCdWZmZXIuY29uY2F0KGxpc3QsIFt0b3RhbExlbmd0aF0pXFxuJyArXG4gICAgICAnbGlzdCBzaG91bGQgYmUgYW4gQXJyYXkuJylcblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcigwKVxuICB9IGVsc2UgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGxpc3RbMF1cbiAgfVxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdG90YWxMZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgdG90YWxMZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvdGFsTGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIodG90YWxMZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgaXRlbS5jb3B5KGJ1ZiwgcG9zKVxuICAgIHBvcyArPSBpdGVtLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZcbn1cblxuLy8gQlVGRkVSIElOU1RBTkNFIE1FVEhPRFNcbi8vID09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIF9oZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGFzc2VydChzdHJMZW4gJSAyID09PSAwLCAnSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGJ5dGUgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgYXNzZXJ0KCFpc05hTihieXRlKSwgJ0ludmFsaWQgaGV4IHN0cmluZycpXG4gICAgYnVmW29mZnNldCArIGldID0gYnl0ZVxuICB9XG4gIEJ1ZmZlci5fY2hhcnNXcml0dGVuID0gaSAqIDJcbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gX3V0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF9hc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF9iaW5hcnlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBfYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIF9iYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX3V0ZjE2bGVXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gU3VwcG9ydCBib3RoIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZylcbiAgLy8gYW5kIHRoZSBsZWdhY3kgKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIGlmICghaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHsgIC8vIGxlZ2FjeVxuICAgIHZhciBzd2FwID0gZW5jb2RpbmdcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIG9mZnNldCA9IGxlbmd0aFxuICAgIGxlbmd0aCA9IHN3YXBcbiAgfVxuXG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IF9oZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSBfdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IF9hc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBfYmluYXJ5V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IF9iYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gX3V0ZjE2bGVXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG4gIHN0YXJ0ID0gTnVtYmVyKHN0YXJ0KSB8fCAwXG4gIGVuZCA9IChlbmQgIT09IHVuZGVmaW5lZClcbiAgICA/IE51bWJlcihlbmQpXG4gICAgOiBlbmQgPSBzZWxmLmxlbmd0aFxuXG4gIC8vIEZhc3RwYXRoIGVtcHR5IHN0cmluZ3NcbiAgaWYgKGVuZCA9PT0gc3RhcnQpXG4gICAgcmV0dXJuICcnXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IF9oZXhTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSBfdXRmOFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IF9hc2NpaVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBfYmluYXJ5U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IF9iYXNlNjRTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gX3V0ZjE2bGVTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldF9zdGFydCwgc3RhcnQsIGVuZCkge1xuICB2YXIgc291cmNlID0gdGhpc1xuXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICghdGFyZ2V0X3N0YXJ0KSB0YXJnZXRfc3RhcnQgPSAwXG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgc291cmNlLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBhc3NlcnQoZW5kID49IHN0YXJ0LCAnc291cmNlRW5kIDwgc291cmNlU3RhcnQnKVxuICBhc3NlcnQodGFyZ2V0X3N0YXJ0ID49IDAgJiYgdGFyZ2V0X3N0YXJ0IDwgdGFyZ2V0Lmxlbmd0aCxcbiAgICAgICd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KHN0YXJ0ID49IDAgJiYgc3RhcnQgPCBzb3VyY2UubGVuZ3RoLCAnc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChlbmQgPj0gMCAmJiBlbmQgPD0gc291cmNlLmxlbmd0aCwgJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpXG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgPCBlbmQgLSBzdGFydClcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0ICsgc3RhcnRcblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcblxuICBpZiAobGVuIDwgMTAwIHx8ICFCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0X3N0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5fc2V0KHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSwgdGFyZ2V0X3N0YXJ0KVxuICB9XG59XG5cbmZ1bmN0aW9uIF9iYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gX3V0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXMgPSAnJ1xuICB2YXIgdG1wID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgaWYgKGJ1ZltpXSA8PSAweDdGKSB7XG4gICAgICByZXMgKz0gZGVjb2RlVXRmOENoYXIodG1wKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICAgICAgdG1wID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgdG1wICs9ICclJyArIGJ1ZltpXS50b1N0cmluZygxNilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzICsgZGVjb2RlVXRmOENoYXIodG1wKVxufVxuXG5mdW5jdGlvbiBfYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspXG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIF9iaW5hcnlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHJldHVybiBfYXNjaWlTbGljZShidWYsIHN0YXJ0LCBlbmQpXG59XG5cbmZ1bmN0aW9uIF9oZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIF91dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2krMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gY2xhbXAoc3RhcnQsIGxlbiwgMClcbiAgZW5kID0gY2xhbXAoZW5kLCBsZW4sIGxlbilcblxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIHJldHVybiBCdWZmZXIuX2F1Z21lbnQodGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSlcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIHZhciBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQsIHRydWUpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgaSsrKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0J1ZlxuICB9XG59XG5cbi8vIGBnZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5nZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLnJlYWRVSW50OChvZmZzZXQpXG59XG5cbi8vIGBzZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2LCBvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5zZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLndyaXRlVUludDgodiwgb2Zmc2V0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5mdW5jdGlvbiBfcmVhZFVJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdXG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgfSBlbHNlIHtcbiAgICB2YWwgPSBidWZbb2Zmc2V0XSA8PCA4XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQxNih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQxNih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRVSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsXG4gIGlmIChsaXR0bGVFbmRpYW4pIHtcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCA9IGJ1ZltvZmZzZXQgKyAyXSA8PCAxNlxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXSA8PCA4XG4gICAgdmFsIHw9IGJ1ZltvZmZzZXRdXG4gICAgaWYgKG9mZnNldCArIDMgPCBsZW4pXG4gICAgICB2YWwgPSB2YWwgKyAoYnVmW29mZnNldCArIDNdIDw8IDI0ID4+PiAwKVxuICB9IGVsc2Uge1xuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDFdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDIgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDJdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgM11cbiAgICB2YWwgPSB2YWwgKyAoYnVmW29mZnNldF0gPDwgMjQgPj4+IDApXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQzMih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQzMih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLFxuICAgICAgICAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgdmFyIG5lZyA9IHRoaXNbb2Zmc2V0XSAmIDB4ODBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbmZ1bmN0aW9uIF9yZWFkSW50MTYgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gX3JlYWRVSW50MTYoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgdHJ1ZSlcbiAgdmFyIG5lZyA9IHZhbCAmIDB4ODAwMFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZmZmIC0gdmFsICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MTYodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDE2KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZEludDMyIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbCA9IF9yZWFkVUludDMyKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIHRydWUpXG4gIHZhciBuZWcgPSB2YWwgJiAweDgwMDAwMDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmZmZmZmIC0gdmFsICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MzIodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDMyKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZEZsb2F0IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHJldHVybiBpZWVlNzU0LnJlYWQoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRmxvYXQodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkRG91YmxlIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgKyA3IDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHJldHVybiBpZWVlNzU0LnJlYWQoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRG91YmxlKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRG91YmxlKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZilcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpIHJldHVyblxuXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG59XG5cbmZ1bmN0aW9uIF93cml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgMik7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmZmZmZmZmKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihsZW4gLSBvZmZzZXQsIDQpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID1cbiAgICAgICAgKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmLCAtMHg4MClcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgdGhpcy53cml0ZVVJbnQ4KHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgdGhpcy53cml0ZVVJbnQ4KDB4ZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2ZmZiwgLTB4ODAwMClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIF93cml0ZVVJbnQxNihidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICBfd3JpdGVVSW50MTYoYnVmLCAweGZmZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICBfd3JpdGVVSW50MzIoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgX3dyaXRlVUludDMyKGJ1ZiwgMHhmZmZmZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZJRUVFNzU0KHZhbHVlLCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgNyA8IGJ1Zi5sZW5ndGgsXG4gICAgICAgICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmSUVFRTc1NCh2YWx1ZSwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gZmlsbCh2YWx1ZSwgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAodmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCF2YWx1ZSkgdmFsdWUgPSAwXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCkgZW5kID0gdGhpcy5sZW5ndGhcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHZhbHVlID0gdmFsdWUuY2hhckNvZGVBdCgwKVxuICB9XG5cbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbHVlKSwgJ3ZhbHVlIGlzIG5vdCBhIG51bWJlcicpXG4gIGFzc2VydChlbmQgPj0gc3RhcnQsICdlbmQgPCBzdGFydCcpXG5cbiAgLy8gRmlsbCAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICBhc3NlcnQoc3RhcnQgPj0gMCAmJiBzdGFydCA8IHRoaXMubGVuZ3RoLCAnc3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChlbmQgPj0gMCAmJiBlbmQgPD0gdGhpcy5sZW5ndGgsICdlbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICB0aGlzW2ldID0gdmFsdWVcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvdXQgPSBbXVxuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIG91dFtpXSA9IHRvSGV4KHRoaXNbaV0pXG4gICAgaWYgKGkgPT09IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMpIHtcbiAgICAgIG91dFtpICsgMV0gPSAnLi4uJ1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBvdXQuam9pbignICcpICsgJz4nXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlCdWZmZXJgIHdpdGggdGhlICpjb3BpZWQqIG1lbW9yeSBvZiB0aGUgYnVmZmVyIGluc3RhbmNlLlxuICogQWRkZWQgaW4gTm9kZSAwLjEyLiBPbmx5IGF2YWlsYWJsZSBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgQXJyYXlCdWZmZXIuXG4gKi9cbkJ1ZmZlci5wcm90b3R5cGUudG9BcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgICByZXR1cm4gKG5ldyBCdWZmZXIodGhpcykpLmJ1ZmZlclxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYnVmID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5sZW5ndGgpXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnVmLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKVxuICAgICAgICBidWZbaV0gPSB0aGlzW2ldXG4gICAgICByZXR1cm4gYnVmLmJ1ZmZlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0J1ZmZlci50b0FycmF5QnVmZmVyIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJylcbiAgfVxufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbnZhciBCUCA9IEJ1ZmZlci5wcm90b3R5cGVcblxuLyoqXG4gKiBBdWdtZW50IGEgVWludDhBcnJheSAqaW5zdGFuY2UqIChub3QgdGhlIFVpbnQ4QXJyYXkgY2xhc3MhKSB3aXRoIEJ1ZmZlciBtZXRob2RzXG4gKi9cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9pc0J1ZmZlciA9IHRydWVcblxuICAvLyBzYXZlIHJlZmVyZW5jZSB0byBvcmlnaW5hbCBVaW50OEFycmF5IGdldC9zZXQgbWV0aG9kcyBiZWZvcmUgb3ZlcndyaXRpbmdcbiAgYXJyLl9nZXQgPSBhcnIuZ2V0XG4gIGFyci5fc2V0ID0gYXJyLnNldFxuXG4gIC8vIGRlcHJlY2F0ZWQsIHdpbGwgYmUgcmVtb3ZlZCBpbiBub2RlIDAuMTMrXG4gIGFyci5nZXQgPSBCUC5nZXRcbiAgYXJyLnNldCA9IEJQLnNldFxuXG4gIGFyci53cml0ZSA9IEJQLndyaXRlXG4gIGFyci50b1N0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0xvY2FsZVN0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0pTT04gPSBCUC50b0pTT05cbiAgYXJyLmNvcHkgPSBCUC5jb3B5XG4gIGFyci5zbGljZSA9IEJQLnNsaWNlXG4gIGFyci5yZWFkVUludDggPSBCUC5yZWFkVUludDhcbiAgYXJyLnJlYWRVSW50MTZMRSA9IEJQLnJlYWRVSW50MTZMRVxuICBhcnIucmVhZFVJbnQxNkJFID0gQlAucmVhZFVJbnQxNkJFXG4gIGFyci5yZWFkVUludDMyTEUgPSBCUC5yZWFkVUludDMyTEVcbiAgYXJyLnJlYWRVSW50MzJCRSA9IEJQLnJlYWRVSW50MzJCRVxuICBhcnIucmVhZEludDggPSBCUC5yZWFkSW50OFxuICBhcnIucmVhZEludDE2TEUgPSBCUC5yZWFkSW50MTZMRVxuICBhcnIucmVhZEludDE2QkUgPSBCUC5yZWFkSW50MTZCRVxuICBhcnIucmVhZEludDMyTEUgPSBCUC5yZWFkSW50MzJMRVxuICBhcnIucmVhZEludDMyQkUgPSBCUC5yZWFkSW50MzJCRVxuICBhcnIucmVhZEZsb2F0TEUgPSBCUC5yZWFkRmxvYXRMRVxuICBhcnIucmVhZEZsb2F0QkUgPSBCUC5yZWFkRmxvYXRCRVxuICBhcnIucmVhZERvdWJsZUxFID0gQlAucmVhZERvdWJsZUxFXG4gIGFyci5yZWFkRG91YmxlQkUgPSBCUC5yZWFkRG91YmxlQkVcbiAgYXJyLndyaXRlVUludDggPSBCUC53cml0ZVVJbnQ4XG4gIGFyci53cml0ZVVJbnQxNkxFID0gQlAud3JpdGVVSW50MTZMRVxuICBhcnIud3JpdGVVSW50MTZCRSA9IEJQLndyaXRlVUludDE2QkVcbiAgYXJyLndyaXRlVUludDMyTEUgPSBCUC53cml0ZVVJbnQzMkxFXG4gIGFyci53cml0ZVVJbnQzMkJFID0gQlAud3JpdGVVSW50MzJCRVxuICBhcnIud3JpdGVJbnQ4ID0gQlAud3JpdGVJbnQ4XG4gIGFyci53cml0ZUludDE2TEUgPSBCUC53cml0ZUludDE2TEVcbiAgYXJyLndyaXRlSW50MTZCRSA9IEJQLndyaXRlSW50MTZCRVxuICBhcnIud3JpdGVJbnQzMkxFID0gQlAud3JpdGVJbnQzMkxFXG4gIGFyci53cml0ZUludDMyQkUgPSBCUC53cml0ZUludDMyQkVcbiAgYXJyLndyaXRlRmxvYXRMRSA9IEJQLndyaXRlRmxvYXRMRVxuICBhcnIud3JpdGVGbG9hdEJFID0gQlAud3JpdGVGbG9hdEJFXG4gIGFyci53cml0ZURvdWJsZUxFID0gQlAud3JpdGVEb3VibGVMRVxuICBhcnIud3JpdGVEb3VibGVCRSA9IEJQLndyaXRlRG91YmxlQkVcbiAgYXJyLmZpbGwgPSBCUC5maWxsXG4gIGFyci5pbnNwZWN0ID0gQlAuaW5zcGVjdFxuICBhcnIudG9BcnJheUJ1ZmZlciA9IEJQLnRvQXJyYXlCdWZmZXJcblxuICByZXR1cm4gYXJyXG59XG5cbi8vIHNsaWNlKHN0YXJ0LCBlbmQpXG5mdW5jdGlvbiBjbGFtcCAoaW5kZXgsIGxlbiwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSByZXR1cm4gZGVmYXVsdFZhbHVlXG4gIGluZGV4ID0gfn5pbmRleDsgIC8vIENvZXJjZSB0byBpbnRlZ2VyLlxuICBpZiAoaW5kZXggPj0gbGVuKSByZXR1cm4gbGVuXG4gIGlmIChpbmRleCA+PSAwKSByZXR1cm4gaW5kZXhcbiAgaW5kZXggKz0gbGVuXG4gIGlmIChpbmRleCA+PSAwKSByZXR1cm4gaW5kZXhcbiAgcmV0dXJuIDBcbn1cblxuZnVuY3Rpb24gY29lcmNlIChsZW5ndGgpIHtcbiAgLy8gQ29lcmNlIGxlbmd0aCB0byBhIG51bWJlciAocG9zc2libHkgTmFOKSwgcm91bmQgdXBcbiAgLy8gaW4gY2FzZSBpdCdzIGZyYWN0aW9uYWwgKGUuZy4gMTIzLjQ1NikgdGhlbiBkbyBhXG4gIC8vIGRvdWJsZSBuZWdhdGUgdG8gY29lcmNlIGEgTmFOIHRvIDAuIEVhc3ksIHJpZ2h0P1xuICBsZW5ndGggPSB+fk1hdGguY2VpbCgrbGVuZ3RoKVxuICByZXR1cm4gbGVuZ3RoIDwgMCA/IDAgOiBsZW5ndGhcbn1cblxuZnVuY3Rpb24gaXNBcnJheSAoc3ViamVjdCkge1xuICByZXR1cm4gKEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHN1YmplY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN1YmplY3QpID09PSAnW29iamVjdCBBcnJheV0nXG4gIH0pKHN1YmplY3QpXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlpc2ggKHN1YmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc3ViamVjdCkgfHwgQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpIHx8XG4gICAgICBzdWJqZWN0ICYmIHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIHN1YmplY3QubGVuZ3RoID09PSAnbnVtYmVyJ1xufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGIgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGlmIChiIDw9IDB4N0YpXG4gICAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSlcbiAgICBlbHNlIHtcbiAgICAgIHZhciBzdGFydCA9IGlcbiAgICAgIGlmIChiID49IDB4RDgwMCAmJiBiIDw9IDB4REZGRikgaSsrXG4gICAgICB2YXIgaCA9IGVuY29kZVVSSUNvbXBvbmVudChzdHIuc2xpY2Uoc3RhcnQsIGkrMSkpLnN1YnN0cigxKS5zcGxpdCgnJScpXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGgubGVuZ3RoOyBqKyspXG4gICAgICAgIGJ5dGVBcnJheS5wdXNoKHBhcnNlSW50KGhbal0sIDE2KSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoc3RyKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIHBvc1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKVxuICAgICAgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBkZWNvZGVVdGY4Q2hhciAoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCkgLy8gVVRGIDggaW52YWxpZCBjaGFyXG4gIH1cbn1cblxuLypcbiAqIFdlIGhhdmUgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHZhbHVlIGlzIGEgdmFsaWQgaW50ZWdlci4gVGhpcyBtZWFucyB0aGF0IGl0XG4gKiBpcyBub24tbmVnYXRpdmUuIEl0IGhhcyBubyBmcmFjdGlvbmFsIGNvbXBvbmVudCBhbmQgdGhhdCBpdCBkb2VzIG5vdFxuICogZXhjZWVkIHRoZSBtYXhpbXVtIGFsbG93ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHZlcmlmdWludCAodmFsdWUsIG1heCkge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPj0gMCwgJ3NwZWNpZmllZCBhIG5lZ2F0aXZlIHZhbHVlIGZvciB3cml0aW5nIGFuIHVuc2lnbmVkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGlzIGxhcmdlciB0aGFuIG1heGltdW0gdmFsdWUgZm9yIHR5cGUnKVxuICBhc3NlcnQoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlLCAndmFsdWUgaGFzIGEgZnJhY3Rpb25hbCBjb21wb25lbnQnKVxufVxuXG5mdW5jdGlvbiB2ZXJpZnNpbnQgKHZhbHVlLCBtYXgsIG1pbikge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgbGFyZ2VyIHRoYW4gbWF4aW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlID49IG1pbiwgJ3ZhbHVlIHNtYWxsZXIgdGhhbiBtaW5pbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlLCAndmFsdWUgaGFzIGEgZnJhY3Rpb25hbCBjb21wb25lbnQnKVxufVxuXG5mdW5jdGlvbiB2ZXJpZklFRUU3NTQgKHZhbHVlLCBtYXgsIG1pbikge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgbGFyZ2VyIHRoYW4gbWF4aW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlID49IG1pbiwgJ3ZhbHVlIHNtYWxsZXIgdGhhbiBtaW5pbXVtIGFsbG93ZWQgdmFsdWUnKVxufVxuXG5mdW5jdGlvbiBhc3NlcnQgKHRlc3QsIG1lc3NhZ2UpIHtcbiAgaWYgKCF0ZXN0KSB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSB8fCAnRmFpbGVkIGFzc2VydGlvbicpXG59XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlclwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbnZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbjsoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBBcnIgPSAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgID8gVWludDhBcnJheVxuICAgIDogQXJyYXlcblxuXHR2YXIgWkVSTyAgID0gJzAnLmNoYXJDb2RlQXQoMClcblx0dmFyIFBMVVMgICA9ICcrJy5jaGFyQ29kZUF0KDApXG5cdHZhciBTTEFTSCAgPSAnLycuY2hhckNvZGVBdCgwKVxuXHR2YXIgTlVNQkVSID0gJzAnLmNoYXJDb2RlQXQoMClcblx0dmFyIExPV0VSICA9ICdhJy5jaGFyQ29kZUF0KDApXG5cdHZhciBVUFBFUiAgPSAnQScuY2hhckNvZGVBdCgwKVxuXG5cdGZ1bmN0aW9uIGRlY29kZSAoZWx0KSB7XG5cdFx0dmFyIGNvZGUgPSBlbHQuY2hhckNvZGVBdCgwKVxuXHRcdGlmIChjb2RlID09PSBQTFVTKVxuXHRcdFx0cmV0dXJuIDYyIC8vICcrJ1xuXHRcdGlmIChjb2RlID09PSBTTEFTSClcblx0XHRcdHJldHVybiA2MyAvLyAnLydcblx0XHRpZiAoY29kZSA8IE5VTUJFUilcblx0XHRcdHJldHVybiAtMSAvL25vIG1hdGNoXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIgKyAxMClcblx0XHRcdHJldHVybiBjb2RlIC0gTlVNQkVSICsgMjYgKyAyNlxuXHRcdGlmIChjb2RlIDwgVVBQRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gVVBQRVJcblx0XHRpZiAoY29kZSA8IExPV0VSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIExPV0VSICsgMjZcblx0fVxuXG5cdGZ1bmN0aW9uIGI2NFRvQnl0ZUFycmF5IChiNjQpIHtcblx0XHR2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuXG5cdFx0aWYgKGI2NC5sZW5ndGggJSA0ID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0Jylcblx0XHR9XG5cblx0XHQvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuXHRcdC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcblx0XHQvLyByZXByZXNlbnQgb25lIGJ5dGVcblx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcblx0XHQvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG5cdFx0dmFyIGxlbiA9IGI2NC5sZW5ndGhcblx0XHRwbGFjZUhvbGRlcnMgPSAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMikgPyAyIDogJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDEpID8gMSA6IDBcblxuXHRcdC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuXHRcdGFyciA9IG5ldyBBcnIoYjY0Lmxlbmd0aCAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuXHRcdGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gYjY0Lmxlbmd0aCAtIDQgOiBiNjQubGVuZ3RoXG5cblx0XHR2YXIgTCA9IDBcblxuXHRcdGZ1bmN0aW9uIHB1c2ggKHYpIHtcblx0XHRcdGFycltMKytdID0gdlxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTgpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPDwgNikgfCBkZWNvZGUoYjY0LmNoYXJBdChpICsgMykpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDAwMCkgPj4gMTYpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDApID4+IDgpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpID4+IDQpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTApIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA+PiAyKVxuXHRcdFx0cHVzaCgodG1wID4+IDgpICYgMHhGRilcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyXG5cdH1cblxuXHRmdW5jdGlvbiB1aW50OFRvQmFzZTY0ICh1aW50OCkge1xuXHRcdHZhciBpLFxuXHRcdFx0ZXh0cmFCeXRlcyA9IHVpbnQ4Lmxlbmd0aCAlIDMsIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG5cdFx0XHRvdXRwdXQgPSBcIlwiLFxuXHRcdFx0dGVtcCwgbGVuZ3RoXG5cblx0XHRmdW5jdGlvbiBlbmNvZGUgKG51bSkge1xuXHRcdFx0cmV0dXJuIGxvb2t1cC5jaGFyQXQobnVtKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKG51bSA+PiAxOCAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiAxMiAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiA2ICYgMHgzRikgKyBlbmNvZGUobnVtICYgMHgzRilcblx0XHR9XG5cblx0XHQvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG5cdFx0Zm9yIChpID0gMCwgbGVuZ3RoID0gdWludDgubGVuZ3RoIC0gZXh0cmFCeXRlczsgaSA8IGxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHR0ZW1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuXHRcdFx0b3V0cHV0ICs9IHRyaXBsZXRUb0Jhc2U2NCh0ZW1wKVxuXHRcdH1cblxuXHRcdC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcblx0XHRzd2l0Y2ggKGV4dHJhQnl0ZXMpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGVtcCA9IHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAyKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9PSdcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGVtcCA9ICh1aW50OFt1aW50OC5sZW5ndGggLSAyXSA8PCA4KSArICh1aW50OFt1aW50OC5sZW5ndGggLSAxXSlcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDEwKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wID4+IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCAyKSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPSdcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cblxuXHRtb2R1bGUuZXhwb3J0cy50b0J5dGVBcnJheSA9IGI2NFRvQnl0ZUFycmF5XG5cdG1vZHVsZS5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSB1aW50OFRvQmFzZTY0XG59KCkpXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWJcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5leHBvcnRzLnJlYWQgPSBmdW5jdGlvbihidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIG5CaXRzID0gLTcsXG4gICAgICBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDAsXG4gICAgICBkID0gaXNMRSA/IC0xIDogMSxcbiAgICAgIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV07XG5cbiAgaSArPSBkO1xuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBzID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gZUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIGUgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBtTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXM7XG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KTtcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pO1xuICAgIGUgPSBlIC0gZUJpYXM7XG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbik7XG59O1xuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24oYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGMsXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApLFxuICAgICAgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpLFxuICAgICAgZCA9IGlzTEUgPyAxIDogLTEsXG4gICAgICBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwO1xuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpO1xuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwO1xuICAgIGUgPSBlTWF4O1xuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKTtcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS07XG4gICAgICBjICo9IDI7XG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcyk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrO1xuICAgICAgYyAvPSAyO1xuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDA7XG4gICAgICBlID0gZU1heDtcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gZSArIGVCaWFzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gMDtcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KTtcblxuICBlID0gKGUgPDwgbUxlbikgfCBtO1xuICBlTGVuICs9IG1MZW47XG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCk7XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4O1xufTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanNcIixcIi8uLi8uLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0XCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB2YXIgcXVldWUgPSBbXTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3NcIikiXX0=
