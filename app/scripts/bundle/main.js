(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/** @jsx React.DOM */

var Dashboard = React.createClass({displayName: 'Dashboard',

  render: function() {
    return (
            React.DOM.div(null, 
            React.DOM.p(null, this.props.navPos),


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
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":10,"buffer":7}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/** @jsx React.DOM */


var Dashboard = require('./dashboard').Dashboard;
var MyAccount = require("./my-account").MyAccount;
var Website = require("./website").Website;
var AddWebsite = require("./website").AddWebsite;

var Layout = React.createClass({displayName: 'Layout',
  getInitialState: function() {

    // set the pushState to blank if the user arrives to the dashboard, either by going to the root or entering an invalid route
    if(this.props.navPos === "Dashboard") {
      router.navigate("");
    };

    return {navPos: this.props.navPos, loggedIn: undefined, render: false, website: undefined};
  },

  componentDidMount: function() {

    // todo: review this
    if(_.isEmpty(JSON.parse($.cookie("application")).user.websites)) {
      this.setState({navPos: "Add Website"});
      router.navigate("websites/add");
    }

    // figure out if a cookie exists and is a valid session
    self = this;
    var cookie = $.cookie("application");

    if(!_.isUndefined(cookie)) {

      var token = JSON.parse(cookie).sessionId;

      superagent
      .get('http://192.168.178.20:9000/api/v1/auth/validate/' + token)
      .set('X-API-Key', token)
      .set('Accept', 'application/json')
      .end(function(error, res){

        if(res.ok === true) {

          var sessionId = JSON.parse(res.text).sessionId
          var user = JSON.parse(res.text).user

          user.websites = JSON.parse(res.text).websites

        // set active website to the last selected website in the cookie, else first website in the user's list
        var active_website = JSON.parse(cookie).user.website || _.pick(_.first(user.websites), "id").id;

        if(_.isEmpty(_.first(_.filter(user.websites , { 'id': JSON.parse(cookie).user.website })))) {
          if(_.first(user.websites) === undefined) {
            active_website = undefined;
          } else {
            active_website = _.first(user.websites).id;
          }
        }

        $.cookie("application", JSON.stringify({ "sessionId": sessionId, "user": user }), {path: "/", expires: 120});

        self.setWebsite(active_website);

        self.setState({loggedIn: user, render: true});

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


    // if this is called with "default" as an argument, then set the active website to the first one in the user's list
    var websites = JSON.parse($.cookie("application")).user.websites;

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
              React.DOM.div(null, 
              Login( {navPos:this.state.navPos, setPos:this.setPos, loggedIn:this.state.loggedIn, setLoggedIn:this.setLoggedIn} )
              )
              )
    } else {

    // User is logged in
    return (
            React.DOM.div(null, 
            TopBar( {navPos:this.state.navPos, setPos:this.setPos, loggedIn:this.state.loggedIn, setLoggedIn:this.setLoggedIn, website:this.state.website, setWebsite:this.setWebsite} ),
            LeftMenu( {navLinks:this.props.navLinks, navPos:this.state.navPos, setPos:this.setPos, loggedIn:this.state.loggedIn, setLoggedIn:this.setLoggedIn, website:this.state.website, setWebsite:this.setWebsite} ),
            Content( {navPos:this.state.navPos, setPos:this.setPos, loggedIn:this.state.loggedIn, setLoggedIn:this.setLoggedIn, website:this.state.website, setWebsite:this.setWebsite} )
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
      .post('http://192.168.178.20:9000/api/v1/auth/login')
      //.send({ name: 'Manny', species: 'cat' })
      .set('X-API-Email', email)
      .set('X-API-Password', password)
      .set('Accept', 'application/json')
      .end(function(error, res){

        var sessionId = JSON.parse(res.text).sessionId
        var user = JSON.parse(res.text).user
        user.websites = JSON.parse(res.text).websites

        console.log(res)
        console.log(sessionId)
        //console.log(document.cookie)

        if(res.ok === true) {

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
    this.props.setLoggedIn(undefined);

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
            React.DOM.a( {href:"#"}, "Logged in as ", this.props.loggedIn.fullName),
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
    this.props.setWebsite("default");

  },

  render: function() {

    var self = this;
    
    var links = _.map(_.filter(this.props.navLinks, "showInMenu"), function(link, key) {

      var classString = "";
      if((self.props.navPos===link.name) || (_.contains(self.props.navPos,link.subroutes))){classString = "active"};

      return React.DOM.li( {key:key}, React.DOM.a( {href:link.url, onClick:self.route, 'data-nav':link.url, className:classString}, link.name))
    });

    return (
            React.DOM.div( {id:"leftMenu", className:"small-4 large-2 columns"}, 
            WebsiteSelector( {website:this.props.website, setWebsite:this.props.setWebsite, setPos:this.props.setPos} ),
            React.DOM.ul( {className:"side-nav"}, links)
            )
            );
  }

});


var WebsiteSelector = React.createClass({displayName: 'WebsiteSelector',

  websiteSelected: function(e) {

    var websites = JSON.parse($.cookie("application")).user.websites;

    if(parseInt(e.target.value) === 0) {

      this.props.setWebsite(undefined);

      // todo: review
      this.props.setPos("websites/add", "Add Website");

    } else {

      var website = _.first(_.filter(websites, { 'id': parseInt(e.target.value) })).id;

      console.log(website);

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
    if(this.props.navPos === "Dashboard") {
      section = (
                 Dashboard( {navPos:this.props.navPos, setPos:this.props.setPos, loggedIn:this.props.loggedIn, setLoggedIn:this.props.setLoggedIn, setWebsite:this.props.setWebsite} )
                 )
    } else if(this.props.navPos === "My Account") {
      section = (
                 MyAccount( {navPos:this.props.navPos, setPos:this.props.setPos, loggedIn:this.props.loggedIn, setLoggedIn:this.props.setLoggedIn, setWebsite:this.props.setWebsite} )
                 )

    } else if(this.props.navPos === "Edit Account") {
      section = (
                 EditAccount( {navPos:this.props.navPos, setPos:this.props.setPos, loggedIn:this.props.loggedIn, setLoggedIn:this.props.setLoggedIn, setWebsite:this.props.setWebsite} )
                 )

    } else if(this.props.navPos === "Websites") {
      section = (
                 Website( {navPos:this.props.navPos, setPos:this.props.setPos, loggedIn:this.props.loggedIn, setLoggedIn:this.props.setLoggedIn, setWebsite:this.props.setWebsite} )
                 )

    } else if(this.props.navPos === "Add Website") {
      section = (
                 AddWebsite( {navPos:this.props.navPos, setPos:this.props.setPos, loggedIn:this.props.loggedIn, setLoggedIn:this.props.setLoggedIn, setWebsite:this.props.setWebsite} )
                 )

    } else {
      section = (
                 React.DOM.p(null, this.props.navPos)
                 )
    }

    return (
            React.DOM.div( {id:"content", className:"small-8 large-10 columns"}, 
            section
            )
            )

  }

});

var Router = Backbone.Router.extend({
  routes : {
    ""    : "index",
    "websites" : "websites",
    "websites/add" : "websitesAdd",
    "campaigns" : "campaigns",
    "account" : "account",
    "account/edit" : "accountEdit",
    "*splat" : "index"
  },
  clearLayout : function() {
    React.renderComponent(
                          React.DOM.div(null),
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
                          Layout( {navLinks:navigation_data, navPos:navPos} ),
                          document.getElementById('application')
                          );
  },
  index : function() {
    this.clearLayout();
    this.showLayout("dashboard");
  },
  websites : function() {
    this.clearLayout();
    this.showLayout("websites");
  },
  websitesAdd : function() {
    this.clearLayout();
    this.showLayout("websites/add");
  },
  campaigns : function() {
    this.clearLayout();
    this.showLayout("campaigns");
  },
  account : function() {
    this.clearLayout();
    this.showLayout("account");
  },
  accountEdit : function() {
    this.clearLayout();
    this.showLayout("account/edit");
  }
});

var router = new Router();

Backbone.history.start({pushState: true});


exports.Layout = Layout;
exports.Login = Login;
exports.TopBar = TopBar;
exports.LeftMenu = LeftMenu;
exports.WebsiteSelector = WebsiteSelector;
exports.Content = Content;
exports.Router = Router;
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components/layout.jsx","/components")
},{"./dashboard":1,"./my-account":3,"./website":4,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":10,"buffer":7}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/** @jsx React.DOM */

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
      React.DOM.h1(null, this.props.loggedIn.fullName),
      React.DOM.h3(null, this.props.loggedIn.email),
      React.DOM.h4(null, "Registered ", moment(this.props.loggedIn.createdAt).fromNow()),

      React.DOM.button( {onClick:this.routeEditAccount, className:"button radius"}, "Edit Account")

      )
    )

  }

});


var EditAccount = React.createClass({displayName: 'EditAccount',

  routeMyAccount: function(e) {
    e.preventDefault();
    this.props.setPos("account", "My Account");
  },

  render: function() {

    return (

      React.DOM.div( {className:"text-center"}, 

        React.DOM.ul( {className:"breadcrumbs"}, 
          React.DOM.li(null, React.DOM.a( {onClick:this.routeMyAccount}, "My Account")),
          React.DOM.li( {className:"current"}, "Edit Account")
        ),


        "Edit Account"

      )
    )

  }

});


exports.MyAccount = MyAccount;
exports.EditAccount = EditAccount;
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components/my-account.jsx","/components")
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":10,"buffer":7}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/** @jsx React.DOM */

var Website = React.createClass({displayName: 'Website',

  routeAddWebsite: function(e) {
    e.preventDefault();
    console.log("button clicked");
    this.props.setWebsite(undefined);
    this.props.setPos("websites/add", "Add Website");
  },

  render: function() {

    return (

      React.DOM.div( {className:"text-center"}, 

      React.DOM.button( {onClick:this.routeAddWebsite, className:"button radius"}, "Add Website")

      )
    )

  }

});


var AddWebsite = React.createClass({displayName: 'AddWebsite',

  routeWebsites: function(e) {
    e.preventDefault();
    this.props.setPos("websites", "Websites");
  },

  render: function() {

    return (

      React.DOM.div( {className:"text-center"}, 

        React.DOM.ul( {className:"breadcrumbs"}, 
          React.DOM.li(null, React.DOM.a( {onClick:this.routeWebsites}, "Websites")),
          React.DOM.li( {className:"current"}, "Add Website")
        ),


        "Add Website"

      )
    )

  }

});

exports.Website = Website;
exports.AddWebsite = AddWebsite;

}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components/website.jsx","/components")
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":10,"buffer":7}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
navigation_data = [
{name: "Dashboard", url: "", showInMenu: true},
{name: "Websites", url: "websites", subroutes: "Add Website", showInMenu: true},
{name: "Add Website", url: "websites/add", showInMenu: false},
{name: "Campaigns", url: "campaigns", showInMenu: true},
{name: "My Account", url: "account", subroutes: "Edit Account", showInMenu: true},
{name: "Edit Account", url: "account/edit", showInMenu: false}
];
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/config.js","/")
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":10,"buffer":7}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var config = require("./config");

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
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_98e05700.js","/")
},{"./components/layout":2,"./config":5,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":10,"buffer":7}],7:[function(require,module,exports){
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
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":10,"base64-js":8,"buffer":7,"ieee754":9}],8:[function(require,module,exports){
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
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":10,"buffer":7}],9:[function(require,module,exports){
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
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":10,"buffer":7}],10:[function(require,module,exports){
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
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":10,"buffer":7}]},{},[6])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL2FwcC9zY3JpcHRzL2NvbXBvbmVudHMvZGFzaGJvYXJkLmpzeCIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvYXBwL3NjcmlwdHMvY29tcG9uZW50cy9sYXlvdXQuanN4IiwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9hcHAvc2NyaXB0cy9jb21wb25lbnRzL215LWFjY291bnQuanN4IiwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9hcHAvc2NyaXB0cy9jb21wb25lbnRzL3dlYnNpdGUuanN4IiwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9hcHAvc2NyaXB0cy9jb25maWcuanMiLCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL2FwcC9zY3JpcHRzL2Zha2VfOThlMDU3MDAuanMiLCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWIvYjY0LmpzIiwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKiogQGpzeCBSZWFjdC5ET00gKi9cblxudmFyIERhc2hib2FyZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ0Rhc2hib2FyZCcsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuRE9NLmRpdihudWxsLCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5wKG51bGwsIHRoaXMucHJvcHMubmF2UG9zKSxcblxuXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIERvbmVjIG51bGxhIG5pc2wsIGZlcm1lbnR1bSBzaXQgYW1ldCBqdXN0byB2ZWwsIGNvbW1vZG8gaGVuZHJlcml0IG1ldHVzLiBRdWlzcXVlIGRpZ25pc3NpbSBldSBzYXBpZW4gdmVsIG9ybmFyZS4gTnVsbGEgdnVscHV0YXRlIGR1aSBldCBsb3JlbSB2dWxwdXRhdGUgZmVybWVudHVtLiBNYXVyaXMgdnVscHV0YXRlIGZhY2lsaXNpcyB1cm5hIHZlbCBmcmluZ2lsbGEuIFN1c3BlbmRpc3NlIGNvbmd1ZSBncmF2aWRhIHJpc3VzIGVnZXQgYWxpcXVldC4gQ3JhcyBhIGltcGVyZGlldCBudWxsYSwgc2l0IGFtZXQgY29udmFsbGlzIG9kaW8uIEFlbmVhbiBlcmF0IGVyYXQsIGVsZW1lbnR1bSBzaXQgYW1ldCBhcmN1IHF1aXMsIGFjY3Vtc2FuIGNvbW1vZG8gc2FwaWVuLiBNYWVjZW5hcyBsYWNpbmlhIGVzdCBxdWlzIG1hc3NhIHVsdHJpY2llcyB1bHRyaWNpZXMuIERvbmVjIG1hdXJpcyBtaSwgYWNjdW1zYW4gYWMgZXJhdCBldCwgc29sbGljaXR1ZGluIGZyaW5naWxsYSBtYXVyaXMuIE51bmMgdmFyaXVzIGZlcm1lbnR1bSBjb25zZWN0ZXR1ci4gU3VzcGVuZGlzc2UgbWF0dGlzIGR1aSBuZWMgZWdlc3RhcyB1bHRyaWNlcy4gU2VkIHNvZGFsZXMgaWQgdHVycGlzIHV0IHNhZ2l0dGlzLiBTdXNwZW5kaXNzZSBpbnRlcmR1bSB0cmlzdGlxdWUgZWxpdC4gUGhhc2VsbHVzIHNpdCBhbWV0IG1hdXJpcyBkaWFtLlwiKycgJytcblxuXCJDcmFzIHZlbCBwZWxsZW50ZXNxdWUgbmlzaSwgbm9uIGFsaXF1YW0gZW5pbS4gUHJhZXNlbnQgcmhvbmN1cyBxdWlzIGxhY3VzIGV1IHZpdmVycmEuIFZlc3RpYnVsdW0gc29sbGljaXR1ZGluIHNpdCBhbWV0IG51bmMgYSB2dWxwdXRhdGUuIEluIGV0IGRpZ25pc3NpbSByaXN1cy4gSW50ZWdlciBzdXNjaXBpdCBhdWd1ZSBzaXQgYW1ldCBlc3Qgc29sbGljaXR1ZGluLCBlZ2V0IHBsYWNlcmF0IGxlY3R1cyBmcmluZ2lsbGEuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy4gUGVsbGVudGVzcXVlIGxvYm9ydGlzLCBtaSBldCBhZGlwaXNjaW5nIHBoYXJldHJhLCBlcm9zIHNlbSBzY2VsZXJpc3F1ZSB0ZWxsdXMsIGV1IHZpdmVycmEgc2VtIGp1c3RvIHZlc3RpYnVsdW0gdGVsbHVzLiBQcm9pbiBwaGFyZXRyYSBtZXR1cyBpZCBhdWd1ZSBpbXBlcmRpZXQsIGVnZXQgdWx0cmljZXMgYXJjdSBjb21tb2RvLiBFdGlhbSBkdWkgbGlndWxhLCBhY2N1bXNhbiBhdWN0b3IgYWxpcXVhbSBuZWMsIHRyaXN0aXF1ZSBhdCBlc3QuIFNlZCBlZ2V0IHZlbmVuYXRpcyB0b3J0b3IsIHF1aXMgcHVsdmluYXIgc2VtLiBQaGFzZWxsdXMgaW4gbGlndWxhIG1hc3NhLiBOdWxsYW0gYSBlcm9zIGV0IGxhY3VzIGRhcGlidXMgcG9zdWVyZS5cIisnICcrXG5cblwiTW9yYmkgaWQgZWdlc3RhcyBkb2xvci4gRG9uZWMgbm9uIHBvc3VlcmUgbWFzc2EuIEluIHZhcml1cyBoZW5kcmVyaXQgYXVndWUsIHF1aXMgZmV1Z2lhdCBkaWFtIHB1bHZpbmFyIGVnZXQuIE51bmMgbm9uIGdyYXZpZGEgbGFjdXMuIER1aXMgaWFjdWxpcyBqdXN0byBhYyBlbmltIHZvbHV0cGF0IGNvbW1vZG8uIE1vcmJpIHNhZ2l0dGlzIG9yY2kgaW4gbmliaCBibGFuZGl0LCBhYyBwdWx2aW5hciBuaWJoIGNvbnZhbGxpcy4gUHJvaW4gYWMgbmlzbCBkdWkuIE5hbSBjb25kaW1lbnR1bSBjdXJzdXMgb2RpbyBzaXQgYW1ldCB0ZW1wdXMuIEFlbmVhbiB2ZXN0aWJ1bHVtIGVsaXQgYSBsb3JlbSBkaWduaXNzaW0sIGluIGFkaXBpc2NpbmcgYXJjdSBydXRydW0uIFZlc3RpYnVsdW0gbm9uIHZhcml1cyBuaXNsLCBhIHBvcnRhIGVsaXQuXCIrJyAnK1xuXG5cIk1hZWNlbmFzIHNpdCBhbWV0IGVyb3MgZWdldCBkdWkgYmxhbmRpdCBjb25zZXF1YXQuIERvbmVjIGV0IHNvbGxpY2l0dWRpbiByaXN1cy4gVml2YW11cyBhY2N1bXNhbiBhbnRlIHZlbCBtYXR0aXMgdmVoaWN1bGEuIFZlc3RpYnVsdW0gZWdldCBkb2xvciBhIHZlbGl0IHVsdHJpY2llcyB1bHRyaWNpZXMuIEN1cmFiaXR1ciB0dXJwaXMgc2FwaWVuLCB0ZW1wdXMgZXUgY29uc2VjdGV0dXIgYSwgdGVtcHVzIHNlZCBsYWN1cy4gUHJvaW4gc29kYWxlcyBpYWN1bGlzIGxvcmVtLCBiaWJlbmR1bSBsb2JvcnRpcyBtYXVyaXMgaW1wZXJkaWV0IHZlbC4gTWFlY2VuYXMgYSBiaWJlbmR1bSBlcmF0LiBNb3JiaSBwZWxsZW50ZXNxdWUgcHVydXMgc2l0IGFtZXQgZW5pbSBwdWx2aW5hciB1bGxhbWNvcnBlci4gTnVuYyB2aXRhZSBjdXJzdXMganVzdG8uIFN1c3BlbmRpc3NlIGVnZXN0YXMgbmliaCBlZ2V0IG5lcXVlIHZ1bHB1dGF0ZSBtb2xlc3RpZS4gQWVuZWFuIHNpdCBhbWV0IHZlbGl0IGEgZmVsaXMgcGVsbGVudGVzcXVlIGNvbW1vZG8gZXUgdXQgbmliaC4gUGVsbGVudGVzcXVlIGF0IHZlaGljdWxhIG1ldHVzLiBNb3JiaSBhbGlxdWV0IGp1c3RvIG5vbiB0ZWxsdXMgcHJldGl1bSBiaWJlbmR1bS4gTWFlY2VuYXMgcG9ydHRpdG9yIGV0IHRvcnRvciBpZCBpbnRlcmR1bS4gQ3JhcyBmZXJtZW50dW0gdGVsbHVzIG5lYyBwb3J0dGl0b3IgZmV1Z2lhdC4gVmVzdGlidWx1bSBmYWNpbGlzaXMgbmVjIGRvbG9yIHZlbCB2b2x1dHBhdC5cIisnICcrXG5cblwiQWVuZWFuIGNvbW1vZG8gbnVuYyBlcm9zLCBhIHBoYXJldHJhIHNlbSBhdWN0b3IgbmVjLiBRdWlzcXVlIGF0IHVsbGFtY29ycGVyIGxlY3R1cywgbm9uIHNhZ2l0dGlzIGVzdC4gTW9yYmkgc2FnaXR0aXMgYmliZW5kdW0gZW5pbSBub24gZ3JhdmlkYS4gU2VkIGFjIHNlbSB2aXZlcnJhLCBjb21tb2RvIGRvbG9yIHV0LCB0ZW1wdXMgbGVjdHVzLiBOdW5jIHNpdCBhbWV0IGFsaXF1YW0gbmliaC4gUHJhZXNlbnQgdWx0cmljZXMgdG9ydG9yIGF0IHZlbGl0IGludGVyZHVtIHZpdmVycmEuIER1aXMgc3VzY2lwaXQgZXJhdCBhYyB0dXJwaXMgcGhhcmV0cmEgYmliZW5kdW0uIFZpdmFtdXMgbW9sZXN0aWUgbmVjIGxlY3R1cyBzY2VsZXJpc3F1ZSBjb252YWxsaXMuIEN1cmFiaXR1ciBtZXR1cyBwdXJ1cywgZmF1Y2lidXMgdGVtcG9yIG5lcXVlIGFjLCBjb252YWxsaXMgbGFjaW5pYSB0b3J0b3IuIE1vcmJpIGluIG5lcXVlIHByZXRpdW0sIHBsYWNlcmF0IG9yY2kgaW50ZXJkdW0sIG9ybmFyZSBzYXBpZW4uIFF1aXNxdWUgb3JuYXJlIGRpYW0gYWMgZXJvcyBtb2xlc3RpZSwgdXQgcGVsbGVudGVzcXVlIGVuaW0gZWxlaWZlbmQuXCIrJyAnK1xuXG5cIkludGVnZXIgZGFwaWJ1cywgc2FwaWVuIGluIHN1c2NpcGl0IHRyaXN0aXF1ZSwgcmlzdXMgZXJvcyB0ZW1wb3IgbGlndWxhLCBhIG1hbGVzdWFkYSB0ZWxsdXMgZWxpdCBlZ2V0IGZlbGlzLiBNb3JiaSB2aXZlcnJhIGVsaXQgbGVjdHVzLiBOdWxsYSBlbGVpZmVuZCBsZW8gYW50ZSwgc2l0IGFtZXQgc2VtcGVyIG5pYmggYXVjdG9yIG5vbi4gVmVzdGlidWx1bSBsYW9yZWV0IGFudGUgdml0YWUganVzdG8gZnJpbmdpbGxhLCBmYWNpbGlzaXMgcHVsdmluYXIgbnVuYyBkaWduaXNzaW0uIERvbmVjIHZlbmVuYXRpcyBuaXNsIGEgbmVxdWUgcHVsdmluYXIgdml2ZXJyYS4gUGhhc2VsbHVzIGFjIGFudGUgZXQgbmlzaSBwdWx2aW5hciBmcmluZ2lsbGEuIE51bmMgZGljdHVtIGV1aXNtb2QgaXBzdW0gc2l0IGFtZXQgZWxlbWVudHVtLlwiKycgJytcblxuXCJBZW5lYW4gZWxlaWZlbmQgbm9uIG5pc2kgbm9uIHZlbmVuYXRpcy4gU2VkIGFjIHR1cnBpcyBhdCBuaXNpIHNvZGFsZXMgaGVuZHJlcml0IHZpdGFlIHF1aXMgdmVsaXQuIE1hdXJpcyBlZ2V0IHRpbmNpZHVudCBlcm9zLCBuZWMgbW9sZXN0aWUgbnVsbGEuIFByb2luIGZhdWNpYnVzIGRpY3R1bSB2ZXN0aWJ1bHVtLiBTZWQgYSBuZXF1ZSBxdWFtLiBQZWxsZW50ZXNxdWUgYWxpcXVldCBsb2JvcnRpcyBqdXN0bywgdml0YWUgYWxpcXVhbSB2ZWxpdCBjb25ndWUgYS4gU3VzcGVuZGlzc2Ugdm9sdXRwYXQgZ3JhdmlkYSBhcmN1IHZlbCBldWlzbW9kLlwiKycgJytcblxuXCJWaXZhbXVzIGluIHVybmEgZXQgbGVjdHVzIHBvc3VlcmUgc3VzY2lwaXQuIEN1cmFiaXR1ciB1bHRyaWNpZXMgZXJhdCBkaWFtLCB2ZWwgdHJpc3RpcXVlIG5lcXVlIHRlbXB1cyBsdWN0dXMuIFNlZCB0ZW1wdXMgaWFjdWxpcyBtaSBpbiBzb2xsaWNpdHVkaW4uIE51bGxhbSB2ZXN0aWJ1bHVtIHF1YW0gbGVvLCBzZWQgaW1wZXJkaWV0IG5pc2kgY29uZ3VlIGF0LiBNYXVyaXMgdm9sdXRwYXQgYXJjdSBzZWQgdXJuYSBoZW5kcmVyaXQsIHNpdCBhbWV0IGNvbW1vZG8gYXJjdSBzY2VsZXJpc3F1ZS4gSW50ZWdlciBtb2xlc3RpZSBjdXJzdXMgbWkgaWQgb3JuYXJlLiBQaGFzZWxsdXMgdXQgbWFsZXN1YWRhIGFyY3UsIHNpdCBhbWV0IGRhcGlidXMgb2Rpby4gUGhhc2VsbHVzIGluIGNvbnZhbGxpcyBqdXN0by4gRXRpYW0gaGVuZHJlcml0IGNvbW1vZG8gbnVsbGEgYWMgdmVoaWN1bGEuIER1aXMgbG9yZW0gZXN0LCBzb2RhbGVzIGF0IHZlbmVuYXRpcyBuZWMsIGNvbW1vZG8gYWMgbmVxdWUuIEFsaXF1YW0gdGluY2lkdW50IGZhY2lsaXNpcyBudW5jLiBOdWxsYW0gcnV0cnVtIGJpYmVuZHVtIG9yY2ksIHNpdCBhbWV0IHNlbXBlciB0b3J0b3IgY29uc2VjdGV0dXIgYXQuXCIrJyAnK1xuXG5cIkRvbmVjIGluIHVybmEgbGFvcmVldCwgdWxsYW1jb3JwZXIgbGliZXJvIGVnZXQsIGNvbnZhbGxpcyBkb2xvci4gTnVsbGFtIHNvZGFsZXMgY29tbW9kbyBsZWN0dXMgbmVjIGRpY3R1bS4gU3VzcGVuZGlzc2UgZXQgZmFjaWxpc2lzIG5lcXVlLCBxdWlzIHVsbGFtY29ycGVyIGxpYmVyby4gTnVsbGFtIGluIHNhcGllbiBtYXR0aXMsIHZvbHV0cGF0IGFyY3UgZXUsIHZpdmVycmEgYXVndWUuIE51bGxhbSBkaWN0dW0gbG9yZW0gdXQgb3JjaSBlbGVpZmVuZCwgc2VtcGVyIGdyYXZpZGEgbmlzbCBjb25ndWUuIEFlbmVhbiB0ZW1wb3IgcnV0cnVtIGp1c3RvIHZpdGFlIGxhY2luaWEuIFV0IHN1c2NpcGl0IGlwc3VtIGEgbmlzaSB1bHRyaWNpZXMgbW9sbGlzLiBNYWVjZW5hcyBhYyBhdWN0b3IganVzdG8uIEZ1c2NlIHNpdCBhbWV0IGlwc3VtIHZvbHV0cGF0LCBoZW5kcmVyaXQgZG9sb3IgcG9ydHRpdG9yLCByaG9uY3VzIG5lcXVlLiBEb25lYyBxdWlzIGNvbmRpbWVudHVtIGVuaW0uIFByYWVzZW50IHZpdGFlIGxlY3R1cyBuZWMgZG9sb3IgdmVzdGlidWx1bSBtYXR0aXMuXCIrJyAnK1xuXG5cIkludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gRXRpYW0gcGhhcmV0cmEgdml2ZXJyYSBlcm9zIHF1aXMgZGlnbmlzc2ltLiBGdXNjZSB2ZWwgZHVpIG1hdXJpcy4gUGVsbGVudGVzcXVlIG1vbGxpcyBhbnRlIGFjIGZlcm1lbnR1bSBwZWxsZW50ZXNxdWUuIFByb2luIHVsdHJpY2VzLCBudWxsYSB1dCB2ZW5lbmF0aXMgZGFwaWJ1cywgbWkgdmVsaXQgY29tbW9kbyBwdXJ1cywgaW4gaW1wZXJkaWV0IG9kaW8gbWF1cmlzIG5lYyBmZWxpcy4gUHJhZXNlbnQgc2NlbGVyaXNxdWUgZXJvcyBpZCBzb2xsaWNpdHVkaW4gbGFvcmVldC4gUHJhZXNlbnQgdWx0cmljaWVzLCBwdXJ1cyBzaXQgYW1ldCBiaWJlbmR1bSBpbXBlcmRpZXQsIGxpZ3VsYSBhcmN1IGltcGVyZGlldCBqdXN0bywgYSB1bGxhbWNvcnBlciB0dXJwaXMgbGVjdHVzIHNlZCBkb2xvci4gTWFlY2VuYXMgbmVjIHRlbXB1cyBtYXVyaXMsIHF1aXMgYWNjdW1zYW4gbmliaC5cIisnICcrXG5cblwiVmVzdGlidWx1bSBlbGVpZmVuZCBibGFuZGl0IGxvYm9ydGlzLiBTZWQgaW50ZXJkdW0gc2VtcGVyIHNhcGllbiwgZXQgbGFjaW5pYSBkdWkgc3VzY2lwaXQgc2l0IGFtZXQuIEludGVnZXIgZWxlbWVudHVtIGZlbGlzIHV0IGRpYW0gdGVtcHVzLCBhYyBmYWNpbGlzaXMgZXJvcyBwb3N1ZXJlLiBOdWxsYW0gcGxhY2VyYXQgdHJpc3RpcXVlIG1ldHVzLCBlZ2V0IHZlbmVuYXRpcyBhdWd1ZSBtb2xlc3RpZSBlZ2V0LiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gVXQgZWdlc3RhcyBtYXVyaXMgbmVjIGxhY3VzIHZlaGljdWxhLCBwdWx2aW5hciBmcmluZ2lsbGEgbGVjdHVzIHRlbXBvci4gU2VkIHV0IGFudGUgYXJjdS5cIisnICcrXG5cblwiVXQgY29udmFsbGlzIGNvbW1vZG8gaXBzdW0gcXVpcyB0ZW1wdXMuIFNlZCBwaGFyZXRyYSB2ZWxpdCBlZ2V0IHNvbGxpY2l0dWRpbiBwcmV0aXVtLiBGdXNjZSBtb2xlc3RpZSBhdCBwdXJ1cyBhIHNjZWxlcmlzcXVlLiBOdWxsYSBmYWNpbGlzaS4gTW9yYmkgZmVsaXMgbmVxdWUsIGdyYXZpZGEgc2VkIGNvbmd1ZSBzZWQsIGRhcGlidXMgdmVsIGF1Z3VlLiBWaXZhbXVzIHZpdmVycmEgY29uZGltZW50dW0gbHVjdHVzLiBVdCBhdCB0ZWxsdXMgbmVjIGF1Z3VlIGNvbnZhbGxpcyBjb25ndWUuIE1hZWNlbmFzIHBsYWNlcmF0IHVsdHJpY2VzIGxvcmVtLCBub24gY29udmFsbGlzIG5pYmggbWFsZXN1YWRhIHZlbC4gUHJhZXNlbnQgbm9uIGhlbmRyZXJpdCB2ZWxpdCwgc2l0IGFtZXQgcnV0cnVtIG1hc3NhLiBDdXJhYml0dXIgcXVpcyBlbGVtZW50dW0gZXN0LiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuIER1aXMgcHVsdmluYXIgdGVsbHVzIGEgY29uc2VxdWF0IGF1Y3Rvci4gU2VkIGlhY3VsaXMgc2VkIGxpZ3VsYSBxdWlzIGhlbmRyZXJpdC4gRnVzY2UgY29uc2VxdWF0IGZhY2lsaXNpcyBlcm9zLCBpbiB0ZW1wdXMgdGVsbHVzIHZlaGljdWxhIGV1LlwiKycgJytcblxuXCJEdWlzIGNvbmRpbWVudHVtIGF0IG1hdXJpcyBxdWlzIGludGVyZHVtLiBQaGFzZWxsdXMgaW1wZXJkaWV0IHNvZGFsZXMgbWFzc2EsIHF1aXMgbG9ib3J0aXMgc2VtIGJsYW5kaXQgbmVjLiBBbGlxdWFtIG5lYyBzYXBpZW4gbWF1cmlzLiBBbGlxdWFtIGdyYXZpZGEgY3Vyc3VzIGRvbG9yIHZpdGFlIGludGVyZHVtLiBDcmFzIGF0IHVsdHJpY2VzIG1pLCB1dCBsYWNpbmlhIHB1cnVzLiBNb3JiaSBncmF2aWRhIHNhcGllbiBpbiBsZWN0dXMgcnV0cnVtIHZlaGljdWxhLiBTZWQgdm9sdXRwYXQgY29uZGltZW50dW0gbGlndWxhLiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuIFBoYXNlbGx1cyBhbGlxdWV0IHZlbGl0IGZlbGlzLCBub24gZmF1Y2lidXMgbnVuYyBoZW5kcmVyaXQgbm9uLiBGdXNjZSBzZW1wZXIgdXJuYSBpZCBuaWJoIG1vbGxpcywgc2l0IGFtZXQgdml2ZXJyYSBuaWJoIGRpY3R1bS4gU2VkIGRpZ25pc3NpbSB2ZWwgbG9yZW0gdmVsIGNvbnNlcXVhdC4gU3VzcGVuZGlzc2UgY29udmFsbGlzIG5pYmggdG9ydG9yLCBhIHN1c2NpcGl0IG1ldHVzIHRpbmNpZHVudCBhLlwiKycgJytcblxuXCJWaXZhbXVzIGludGVyZHVtIHNlZCBkaWFtIHZpdGFlIGV1aXNtb2QuIFNlZCBkaWduaXNzaW0gYSBtYXVyaXMgbm9uIGN1cnN1cy4gUXVpc3F1ZSB2ZXN0aWJ1bHVtLCBudW5jIGV1IHByZXRpdW0gZnJpbmdpbGxhLCBsYWN1cyBhbnRlIGZldWdpYXQgbmliaCwgZXUgZGljdHVtIHNhcGllbiB2ZWxpdCBpbiBkdWkuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEN1cmFiaXR1ciBxdWlzIHNlbSBtYXNzYS4gU3VzcGVuZGlzc2UgdmVsIGJpYmVuZHVtIG1hc3NhLCBhIG1hdHRpcyBkdWkuIFByYWVzZW50IG1hc3NhIGVyb3MsIHByZXRpdW0gcXVpcyB2ZWhpY3VsYSBxdWlzLCBibGFuZGl0IHNpdCBhbWV0IGxpYmVyby4gRXRpYW0gc2VkIGRvbG9yIG1pLiBQZWxsZW50ZXNxdWUgZnJpbmdpbGxhIHRlbXB1cyBudWxsYSwgYXQgaGVuZHJlcml0IG1hZ25hIHZpdmVycmEgdXQuIFByYWVzZW50IGRhcGlidXMgdGVtcG9yIG9yY2ksIHV0IHZlaGljdWxhIGp1c3RvIGx1Y3R1cyBzaXQgYW1ldC4gRnVzY2UgbWF0dGlzIGZlbGlzIHR1cnBpcywgYXQgcnV0cnVtIGVyb3MgY3Vyc3VzIGV0LlwiKycgJytcblxuXCJTdXNwZW5kaXNzZSBzZWQgc2VtcGVyIGxhY3VzLiBBZW5lYW4gbG9ib3J0aXMgcGVsbGVudGVzcXVlIG1hdHRpcy4gRnVzY2UgbHVjdHVzIHNhZ2l0dGlzIGxlbywgYWMgY29tbW9kbyBtYWduYSBwaGFyZXRyYSB1dC4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIERvbmVjIGluIG9ybmFyZSBzZW0sIHJ1dHJ1bSB1bGxhbWNvcnBlciBtYWduYS4gTnVsbGEgbnVsbGEgbmliaCwgdWxsYW1jb3JwZXIgaW4gbGFjdXMgYSwgc29kYWxlcyBncmF2aWRhIGxpYmVyby4gSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLiBWZXN0aWJ1bHVtIGFjY3Vtc2FuIGlhY3VsaXMgZXJvcyBpbiBhbGlxdWFtLiBQcmFlc2VudCBsaWd1bGEgcmlzdXMsIGZhY2lsaXNpcyBzZWQgcGhhcmV0cmEgaWFjdWxpcywgbG9ib3J0aXMgYXQgbWkuIEN1cmFiaXR1ciBvcm5hcmUgZWdlc3RhcyBlc3QsIGV1IHVsdHJpY2llcyByaXN1cy4gQ3JhcyBvcm5hcmUgdm9sdXRwYXQgcmlzdXMgZXVpc21vZCB0cmlzdGlxdWUuIE1hdXJpcyBjb25kaW1lbnR1bSBlZ2V0IG51bGxhIHZpdGFlIHZvbHV0cGF0LiBDdXJhYml0dXIgdmVsIHB1cnVzIGFjIGVyYXQgY29tbW9kbyB2aXZlcnJhLlwiXG5cbiAgICAgIClcbiAgICApO1xuICB9XG5cbn0pO1xuXG5leHBvcnRzLkRhc2hib2FyZCA9IERhc2hib2FyZDtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb21wb25lbnRzL2Rhc2hib2FyZC5qc3hcIixcIi9jb21wb25lbnRzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqIEBqc3ggUmVhY3QuRE9NICovXG5cblxudmFyIERhc2hib2FyZCA9IHJlcXVpcmUoJy4vZGFzaGJvYXJkJykuRGFzaGJvYXJkO1xudmFyIE15QWNjb3VudCA9IHJlcXVpcmUoXCIuL215LWFjY291bnRcIikuTXlBY2NvdW50O1xudmFyIFdlYnNpdGUgPSByZXF1aXJlKFwiLi93ZWJzaXRlXCIpLldlYnNpdGU7XG52YXIgQWRkV2Vic2l0ZSA9IHJlcXVpcmUoXCIuL3dlYnNpdGVcIikuQWRkV2Vic2l0ZTtcblxudmFyIExheW91dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ0xheW91dCcsXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBzZXQgdGhlIHB1c2hTdGF0ZSB0byBibGFuayBpZiB0aGUgdXNlciBhcnJpdmVzIHRvIHRoZSBkYXNoYm9hcmQsIGVpdGhlciBieSBnb2luZyB0byB0aGUgcm9vdCBvciBlbnRlcmluZyBhbiBpbnZhbGlkIHJvdXRlXG4gICAgaWYodGhpcy5wcm9wcy5uYXZQb3MgPT09IFwiRGFzaGJvYXJkXCIpIHtcbiAgICAgIHJvdXRlci5uYXZpZ2F0ZShcIlwiKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtuYXZQb3M6IHRoaXMucHJvcHMubmF2UG9zLCBsb2dnZWRJbjogdW5kZWZpbmVkLCByZW5kZXI6IGZhbHNlLCB3ZWJzaXRlOiB1bmRlZmluZWR9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcblxuICAgIC8vIHRvZG86IHJldmlldyB0aGlzXG4gICAgaWYoXy5pc0VtcHR5KEpTT04ucGFyc2UoJC5jb29raWUoXCJhcHBsaWNhdGlvblwiKSkudXNlci53ZWJzaXRlcykpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe25hdlBvczogXCJBZGQgV2Vic2l0ZVwifSk7XG4gICAgICByb3V0ZXIubmF2aWdhdGUoXCJ3ZWJzaXRlcy9hZGRcIik7XG4gICAgfVxuXG4gICAgLy8gZmlndXJlIG91dCBpZiBhIGNvb2tpZSBleGlzdHMgYW5kIGlzIGEgdmFsaWQgc2Vzc2lvblxuICAgIHNlbGYgPSB0aGlzO1xuICAgIHZhciBjb29raWUgPSAkLmNvb2tpZShcImFwcGxpY2F0aW9uXCIpO1xuXG4gICAgaWYoIV8uaXNVbmRlZmluZWQoY29va2llKSkge1xuXG4gICAgICB2YXIgdG9rZW4gPSBKU09OLnBhcnNlKGNvb2tpZSkuc2Vzc2lvbklkO1xuXG4gICAgICBzdXBlcmFnZW50XG4gICAgICAuZ2V0KCdodHRwOi8vMTkyLjE2OC4xNzguMjA6OTAwMC9hcGkvdjEvYXV0aC92YWxpZGF0ZS8nICsgdG9rZW4pXG4gICAgICAuc2V0KCdYLUFQSS1LZXknLCB0b2tlbilcbiAgICAgIC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgICAgIC5lbmQoZnVuY3Rpb24oZXJyb3IsIHJlcyl7XG5cbiAgICAgICAgaWYocmVzLm9rID09PSB0cnVlKSB7XG5cbiAgICAgICAgICB2YXIgc2Vzc2lvbklkID0gSlNPTi5wYXJzZShyZXMudGV4dCkuc2Vzc2lvbklkXG4gICAgICAgICAgdmFyIHVzZXIgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS51c2VyXG5cbiAgICAgICAgICB1c2VyLndlYnNpdGVzID0gSlNPTi5wYXJzZShyZXMudGV4dCkud2Vic2l0ZXNcblxuICAgICAgICAvLyBzZXQgYWN0aXZlIHdlYnNpdGUgdG8gdGhlIGxhc3Qgc2VsZWN0ZWQgd2Vic2l0ZSBpbiB0aGUgY29va2llLCBlbHNlIGZpcnN0IHdlYnNpdGUgaW4gdGhlIHVzZXIncyBsaXN0XG4gICAgICAgIHZhciBhY3RpdmVfd2Vic2l0ZSA9IEpTT04ucGFyc2UoY29va2llKS51c2VyLndlYnNpdGUgfHwgXy5waWNrKF8uZmlyc3QodXNlci53ZWJzaXRlcyksIFwiaWRcIikuaWQ7XG5cbiAgICAgICAgaWYoXy5pc0VtcHR5KF8uZmlyc3QoXy5maWx0ZXIodXNlci53ZWJzaXRlcyAsIHsgJ2lkJzogSlNPTi5wYXJzZShjb29raWUpLnVzZXIud2Vic2l0ZSB9KSkpKSB7XG4gICAgICAgICAgaWYoXy5maXJzdCh1c2VyLndlYnNpdGVzKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhY3RpdmVfd2Vic2l0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlX3dlYnNpdGUgPSBfLmZpcnN0KHVzZXIud2Vic2l0ZXMpLmlkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQuY29va2llKFwiYXBwbGljYXRpb25cIiwgSlNPTi5zdHJpbmdpZnkoeyBcInNlc3Npb25JZFwiOiBzZXNzaW9uSWQsIFwidXNlclwiOiB1c2VyIH0pLCB7cGF0aDogXCIvXCIsIGV4cGlyZXM6IDEyMH0pO1xuXG4gICAgICAgIHNlbGYuc2V0V2Vic2l0ZShhY3RpdmVfd2Vic2l0ZSk7XG5cbiAgICAgICAgc2VsZi5zZXRTdGF0ZSh7bG9nZ2VkSW46IHVzZXIsIHJlbmRlcjogdHJ1ZX0pO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgLy8gQ29va2llIG5vIGxvbmdlciB2YWxpZCAtIHJlbmRlciBsb2dpbiBmb3JtXG4gICAgICAgICAgc2VsZi5zZXRMb2dnZWRJbih1bmRlZmluZWQpO1xuICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3JlbmRlcjogdHJ1ZX0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgICB9KTtcblxufSBlbHNlIHtcblxuICAgICAgLy8gTm8gcHJldiBjb29raWUgLSByZW5kZXIgbG9naW4gZm9ybVxuICAgICAgc2VsZi5zZXRMb2dnZWRJbih1bmRlZmluZWQpO1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7cmVuZGVyOiB0cnVlfSk7XG5cbiAgICB9XG5cbiAgfSxcblxuICBzZXRQb3M6IGZ1bmN0aW9uKHVybCwgcG9zKSB7XG5cbiAgICAgICAgLy8gT25ib2FyZGluZyBzY3JlZW4gaWYgbm8gd2Vic2l0ZXMgZXhpc3RcbiAgICAgICAgaWYoXy5pc0VtcHR5KEpTT04ucGFyc2UoJC5jb29raWUoXCJhcHBsaWNhdGlvblwiKSkudXNlci53ZWJzaXRlcykpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtuYXZQb3M6IFwiQWRkIFdlYnNpdGVcIn0pO1xuICAgICAgICAgIHJvdXRlci5uYXZpZ2F0ZShcIndlYnNpdGVzL2FkZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25hdlBvczogcG9zfSk7XG5cbiAgICAgICAgICByb3V0ZXIubmF2aWdhdGUodXJsKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgc2V0V2Vic2l0ZTogZnVuY3Rpb24od2Vic2l0ZSkge1xuXG5cbiAgICAvLyBpZiB0aGlzIGlzIGNhbGxlZCB3aXRoIFwiZGVmYXVsdFwiIGFzIGFuIGFyZ3VtZW50LCB0aGVuIHNldCB0aGUgYWN0aXZlIHdlYnNpdGUgdG8gdGhlIGZpcnN0IG9uZSBpbiB0aGUgdXNlcidzIGxpc3RcbiAgICB2YXIgd2Vic2l0ZXMgPSBKU09OLnBhcnNlKCQuY29va2llKFwiYXBwbGljYXRpb25cIikpLnVzZXIud2Vic2l0ZXM7XG5cbiAgICB2YXIgZmlyc3Rfd2Vic2l0ZSA9IF8uZmlyc3Qod2Vic2l0ZXMpLmlkO1xuXG4gICAgaWYoICghXy5pc0VtcHR5KHdlYnNpdGVzKSkgJiYgKHdlYnNpdGUgPT09IFwiZGVmYXVsdFwiKSkge1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHt3ZWJzaXRlOiBmaXJzdF93ZWJzaXRlfSk7XG5cbiAgICB9IGVsc2Uge1xuXG5cbiAgICAgIHZhciBjb29raWUgPSBKU09OLnBhcnNlKCQuY29va2llKFwiYXBwbGljYXRpb25cIikpO1xuXG4gICAgICBjb29raWUudXNlci53ZWJzaXRlID0gd2Vic2l0ZTtcblxuICAgICAgJC5jb29raWUoXCJhcHBsaWNhdGlvblwiLCBKU09OLnN0cmluZ2lmeShjb29raWUpLCB7cGF0aDogXCIvXCIsIGV4cGlyZXM6IDEyMH0pO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHt3ZWJzaXRlOiB3ZWJzaXRlfSk7XG5cbiAgICB9O1xuXG5cbiAgfSxcblxuICBzZXRMb2dnZWRJbjogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtsb2dnZWRJbjogc3RhdGV9KTtcblxuICAgIC8vIEtpbGwgY29va2llIGlmIHVzZXIgaXMgbG9nZ2luZyBvdXRcbiAgICBpZihzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAkLnJlbW92ZUNvb2tpZShcImFwcGxpY2F0aW9uXCIpO1xuICAgIH07XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4vLyBEZWZlciByZW5kZXJpbmcgd2hpbGUgY2hlY2tpbmcgaWYgY29va2llIGlzIHZhbGlkXG5pZih0aGlzLnN0YXRlLnJlbmRlcikge1xuXG4gICAgLy8gTG9naW4gdmlldyBpZiBub3QgbG9nZ2VkIGluXG4gICAgaWYodGhpcy5zdGF0ZS5sb2dnZWRJbiA9PT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYobnVsbCwgXG4gICAgICAgICAgICAgIExvZ2luKCB7bmF2UG9zOnRoaXMuc3RhdGUubmF2UG9zLCBzZXRQb3M6dGhpcy5zZXRQb3MsIGxvZ2dlZEluOnRoaXMuc3RhdGUubG9nZ2VkSW4sIHNldExvZ2dlZEluOnRoaXMuc2V0TG9nZ2VkSW59IClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgfSBlbHNlIHtcblxuICAgIC8vIFVzZXIgaXMgbG9nZ2VkIGluXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYobnVsbCwgXG4gICAgICAgICAgICBUb3BCYXIoIHtuYXZQb3M6dGhpcy5zdGF0ZS5uYXZQb3MsIHNldFBvczp0aGlzLnNldFBvcywgbG9nZ2VkSW46dGhpcy5zdGF0ZS5sb2dnZWRJbiwgc2V0TG9nZ2VkSW46dGhpcy5zZXRMb2dnZWRJbiwgd2Vic2l0ZTp0aGlzLnN0YXRlLndlYnNpdGUsIHNldFdlYnNpdGU6dGhpcy5zZXRXZWJzaXRlfSApLFxuICAgICAgICAgICAgTGVmdE1lbnUoIHtuYXZMaW5rczp0aGlzLnByb3BzLm5hdkxpbmtzLCBuYXZQb3M6dGhpcy5zdGF0ZS5uYXZQb3MsIHNldFBvczp0aGlzLnNldFBvcywgbG9nZ2VkSW46dGhpcy5zdGF0ZS5sb2dnZWRJbiwgc2V0TG9nZ2VkSW46dGhpcy5zZXRMb2dnZWRJbiwgd2Vic2l0ZTp0aGlzLnN0YXRlLndlYnNpdGUsIHNldFdlYnNpdGU6dGhpcy5zZXRXZWJzaXRlfSApLFxuICAgICAgICAgICAgQ29udGVudCgge25hdlBvczp0aGlzLnN0YXRlLm5hdlBvcywgc2V0UG9zOnRoaXMuc2V0UG9zLCBsb2dnZWRJbjp0aGlzLnN0YXRlLmxvZ2dlZEluLCBzZXRMb2dnZWRJbjp0aGlzLnNldExvZ2dlZEluLCB3ZWJzaXRlOnRoaXMuc3RhdGUud2Vic2l0ZSwgc2V0V2Vic2l0ZTp0aGlzLnNldFdlYnNpdGV9IClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gIH1cbn0gZWxzZSB7XG5cbiAgdmFyIGxvYWRpbmdNc2dTdHlsZSA9IHtcbiAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICB0b3A6IFwiMzAlXCJcbiB9O1xuXG4gcmV0dXJuKFxuXG4gICAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJyb3cgdGV4dC1jZW50ZXJcIiwgc3R5bGU6bG9hZGluZ01zZ1N0eWxlfSwgXG4gICAgICAgIFJlYWN0LkRPTS5oMShudWxsLCBcIkxvYWRpbmcuLi5cIilcbiAgICAgICAgKVxuICAgICAgICApXG5cbn1cbn1cblxufSk7XG5cbnZhciBMb2dpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ0xvZ2luJyxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuXG4gICAgcmV0dXJuIHtlbWFpbF9ibGFuazogZmFsc2UsIHBhc3N3b3JkX2JsYW5rOiBmYWxzZSwgc2VydmVyX2Vycm9yOiB1bmRlZmluZWR9O1xuXG4gIH0sXG5cbiAgbG9naW46IGZ1bmN0aW9uKGUpIHtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe3NlcnZlcl9lcnJvcjogdW5kZWZpbmVkfSk7XG5cbiAgICB2YXIgZW1haWwgPSAkKFwiI2VtYWlsXCIpLnZhbCgpO1xuICAgIHZhciBwYXNzd29yZCA9ICQoXCIjcGFzc3dvcmRcIikudmFsKCk7XG5cblxuICAgIC8vIFZhbGlkYXRlIC0gZmllbGRzIG11c3Qgbm90IGJlIGVtcHR5XG4gICAgaWYoXy5pc0VtcHR5KGVtYWlsKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW1haWxfYmxhbms6IHRydWV9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW1haWxfYmxhbms6IGZhbHNlfSk7XG4gICAgfTtcbiAgICBcbiAgICBpZihfLmlzRW1wdHkocGFzc3dvcmQpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZF9ibGFuazogdHJ1ZX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZF9ibGFuazogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgLy8gZmllbGRzIGFyZSBwb3B1bGF0ZWRcbiAgICBpZighXy5pc0VtcHR5KGVtYWlsKSAmJiAhXy5pc0VtcHR5KHBhc3N3b3JkKSkge1xuICAgICAgLy8gVE9ETzogY2hlY2sgaWYgY3JlZGVudGlhbHMgYXJlIHZhbGlkXG5cbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgc3VwZXJhZ2VudFxuICAgICAgLnBvc3QoJ2h0dHA6Ly8xOTIuMTY4LjE3OC4yMDo5MDAwL2FwaS92MS9hdXRoL2xvZ2luJylcbiAgICAgIC8vLnNlbmQoeyBuYW1lOiAnTWFubnknLCBzcGVjaWVzOiAnY2F0JyB9KVxuICAgICAgLnNldCgnWC1BUEktRW1haWwnLCBlbWFpbClcbiAgICAgIC5zZXQoJ1gtQVBJLVBhc3N3b3JkJywgcGFzc3dvcmQpXG4gICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgICAuZW5kKGZ1bmN0aW9uKGVycm9yLCByZXMpe1xuXG4gICAgICAgIHZhciBzZXNzaW9uSWQgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS5zZXNzaW9uSWRcbiAgICAgICAgdmFyIHVzZXIgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS51c2VyXG4gICAgICAgIHVzZXIud2Vic2l0ZXMgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS53ZWJzaXRlc1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgY29uc29sZS5sb2coc2Vzc2lvbklkKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGRvY3VtZW50LmNvb2tpZSlcblxuICAgICAgICBpZihyZXMub2sgPT09IHRydWUpIHtcblxuICAgICAgICAgIC8vIHNldCBjb29raWVcbiAgICAgICAgICAkLmNvb2tpZShcImFwcGxpY2F0aW9uXCIsIEpTT04uc3RyaW5naWZ5KHsgXCJzZXNzaW9uSWRcIjogc2Vzc2lvbklkLCBcInVzZXJcIjogdXNlciB9KSwge3BhdGg6IFwiL1wiLCBleHBpcmVzOiAxMjB9KTtcblxuICAgICAgICAgIHNlbGYucHJvcHMuc2V0TG9nZ2VkSW4odXNlcik7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIC8vIFJldHVybiBlcnJvciBmcm9tIHNlcnZlclxuICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3NlcnZlcl9lcnJvcjogSlNPTi5wYXJzZShyZXMudGV4dCkuZXJyb3J9KTtcblxuXG4gICAgICAgIH1cblxuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBlbWFpbF9ibGFuayA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYoc2VsZi5zdGF0ZS5lbWFpbF9ibGFuayA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBcIkVtYWlsIGNhbm5vdCBiZSBibGFua1wiKVxuICAgICAgICAgICAgICAgIClcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHBhc3N3b3JkX2JsYW5rID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZihzZWxmLnN0YXRlLnBhc3N3b3JkX2JsYW5rID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIFwiUGFzc3dvcmQgY2Fubm90IGJlIGJsYW5rXCIpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgc2VydmVyX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZihzZWxmLnN0YXRlLnNlcnZlcl9lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUuc2VydmVyX2Vycm9yKVxuICAgICAgICAgICAgICAgIClcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYoIHtpZDpcImxvZ2luXCIsIGNsYXNzTmFtZTpcInJvd1wifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwicGFuZWxcIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmgxKG51bGwsIFwiTG9naW4gdG8gV2ViIEFwcFwiKSxcbiAgICAgICAgICAgIFwiUGxlYXNlIGxvZ2luIHRvIGFjY2VzcyBXZWIgQXBwLlwiLFxuICAgICAgICAgICAgUmVhY3QuRE9NLmhyKG51bGwgKSxcbiAgICAgICAgICAgIHNlcnZlcl9lcnJvcigpLFxuICAgICAgICAgICAgUmVhY3QuRE9NLmZvcm0obnVsbCwgXG4gICAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJFbWFpbFwiLFxuICAgICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJlbWFpbFwiLCB0eXBlOlwidGV4dFwiLCBwbGFjZWhvbGRlcjpcIkVtYWlsXCJ9ICksXG4gICAgICAgICAgICBlbWFpbF9ibGFuaygpXG5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJQYXNzd29yZFwiLFxuICAgICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJwYXNzd29yZFwiLCB0eXBlOlwicGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6XCJQYXNzd29yZFwifSApLFxuICAgICAgICAgICAgcGFzc3dvcmRfYmxhbmsoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS5idXR0b24oIHtvbkNsaWNrOnRoaXMubG9naW4sIGNsYXNzTmFtZTpcImJ1dHRvbiByYWRpdXMgZXhwYW5kXCJ9LCBcIkxvZ2luXCIpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICB9XG59KTtcblxuXG52YXIgVG9wQmFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnVG9wQmFyJyxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG5cbiAgICAkKGRvY3VtZW50KS5mb3VuZGF0aW9uKCk7XG5cbiAgfSxcblxuICByb3V0ZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciB1cmwgPSAkKGV2ZW50LnRhcmdldCkuYXR0cignZGF0YS1uYXYnKTtcbiAgICB2YXIgcG9zID0gJChldmVudC50YXJnZXQpLnRleHQoKTtcblxuICAgIHRoaXMucHJvcHMuc2V0UG9zKHVybCwgcG9zKTtcbiAgfSxcblxuICBsb2dvdXQ6IGZ1bmN0aW9uKGUpIHtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnNldExvZ2dlZEluKHVuZGVmaW5lZCk7XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYoIHtpZDpcInRvcEJhclwiLCBjbGFzc05hbWU6XCJzdGlja3lcIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLm5hdigge2NsYXNzTmFtZTpcInRvcC1iYXJcIiwgJ2RhdGEtdG9wYmFyJzp0cnVlLCAnZGF0YS1vcHRpb25zJzpcImlzX2hvdmVyOiBmYWxzZVwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00udWwoIHtjbGFzc05hbWU6XCJ0aXRsZS1hcmVhXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5saSgge2NsYXNzTmFtZTpcIm5hbWVcIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmgxKG51bGwsIFJlYWN0LkRPTS5hKCB7aHJlZjpcIiNcIn0sIFwiV2ViIEFwcCBOYW1lXCIpKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS5saSgge2NsYXNzTmFtZTpcInRvZ2dsZS10b3BiYXIgbWVudS1pY29uXCJ9LCBSZWFjdC5ET00uYSgge2hyZWY6XCIjXCJ9LCBcIk1lbnVcIikpXG4gICAgICAgICAgICApLFxuXG4gICAgICAgICAgICBSZWFjdC5ET00uc2VjdGlvbigge2NsYXNzTmFtZTpcInRvcC1iYXItc2VjdGlvblwifSwgXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS51bCgge2NsYXNzTmFtZTpcInJpZ2h0XCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5saSgge2NsYXNzTmFtZTpcImFjdGl2ZSBoYXMtZHJvcGRvd25cIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmEoIHtocmVmOlwiI1wifSwgXCJMb2dnZWQgaW4gYXMgXCIsIHRoaXMucHJvcHMubG9nZ2VkSW4uZnVsbE5hbWUpLFxuICAgICAgICAgICAgUmVhY3QuRE9NLnVsKCB7Y2xhc3NOYW1lOlwiZHJvcGRvd25cIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmxpKG51bGwsIFJlYWN0LkRPTS5hKCB7J2RhdGEtbmF2JzpcImFjY291bnRcIiwgb25DbGljazp0aGlzLnJvdXRlfSwgXCJNeSBBY2NvdW50XCIpKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS5saShudWxsLCBSZWFjdC5ET00uYSgge29uQ2xpY2s6dGhpcy5sb2dvdXR9LCBcIkxvZ291dFwiKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5ET00ubGkoIHtjbGFzc05hbWU6XCJoYXMtZHJvcGRvd25cIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmEoIHtocmVmOlwiI1wifSwgXCJIZWxwXCIpLFxuICAgICAgICAgICAgUmVhY3QuRE9NLnVsKCB7Y2xhc3NOYW1lOlwiZHJvcGRvd25cIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmxpKG51bGwsIFJlYWN0LkRPTS5hKCB7aHJlZjpcIiNcIn0sIFwiR2V0dGluZyBTdGFydGVkIEd1aWRlXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS5saShudWxsLCBSZWFjdC5ET00uYSgge2hyZWY6XCIjXCJ9LCBcIkFQSSBEb2N1bWVudGF0aW9uXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS5saShudWxsLCBSZWFjdC5ET00uYSgge2hyZWY6XCIjXCJ9LCBcIkNvbnRhY3QgVXNcIikpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG59XG5cbn0pO1xuXG5cbnZhciBMZWZ0TWVudSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ0xlZnRNZW51JyxcblxuICByb3V0ZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciB1cmwgPSAkKGV2ZW50LnRhcmdldCkuYXR0cignZGF0YS1uYXYnKTtcbiAgICB2YXIgcG9zID0gJChldmVudC50YXJnZXQpLnRleHQoKTtcblxuICAgIHRoaXMucHJvcHMuc2V0UG9zKHVybCwgcG9zKTtcblxuICAgIC8vIFRPIFJFVklFVzogc2V0IHRoZSB3ZWJzaXRlIGNvbnRleHQgYmFjayB0byBkZWZhdWx0IHdoZW4gYSBtZW51IGxpbmsgaXMgY2xpY2tlZFxuICAgIHRoaXMucHJvcHMuc2V0V2Vic2l0ZShcImRlZmF1bHRcIik7XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIFxuICAgIHZhciBsaW5rcyA9IF8ubWFwKF8uZmlsdGVyKHRoaXMucHJvcHMubmF2TGlua3MsIFwic2hvd0luTWVudVwiKSwgZnVuY3Rpb24obGluaywga2V5KSB7XG5cbiAgICAgIHZhciBjbGFzc1N0cmluZyA9IFwiXCI7XG4gICAgICBpZigoc2VsZi5wcm9wcy5uYXZQb3M9PT1saW5rLm5hbWUpIHx8IChfLmNvbnRhaW5zKHNlbGYucHJvcHMubmF2UG9zLGxpbmsuc3Vicm91dGVzKSkpe2NsYXNzU3RyaW5nID0gXCJhY3RpdmVcIn07XG5cbiAgICAgIHJldHVybiBSZWFjdC5ET00ubGkoIHtrZXk6a2V5fSwgUmVhY3QuRE9NLmEoIHtocmVmOmxpbmsudXJsLCBvbkNsaWNrOnNlbGYucm91dGUsICdkYXRhLW5hdic6bGluay51cmwsIGNsYXNzTmFtZTpjbGFzc1N0cmluZ30sIGxpbmsubmFtZSkpXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuRE9NLmRpdigge2lkOlwibGVmdE1lbnVcIiwgY2xhc3NOYW1lOlwic21hbGwtNCBsYXJnZS0yIGNvbHVtbnNcIn0sIFxuICAgICAgICAgICAgV2Vic2l0ZVNlbGVjdG9yKCB7d2Vic2l0ZTp0aGlzLnByb3BzLndlYnNpdGUsIHNldFdlYnNpdGU6dGhpcy5wcm9wcy5zZXRXZWJzaXRlLCBzZXRQb3M6dGhpcy5wcm9wcy5zZXRQb3N9ICksXG4gICAgICAgICAgICBSZWFjdC5ET00udWwoIHtjbGFzc05hbWU6XCJzaWRlLW5hdlwifSwgbGlua3MpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICB9XG5cbn0pO1xuXG5cbnZhciBXZWJzaXRlU2VsZWN0b3IgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdXZWJzaXRlU2VsZWN0b3InLFxuXG4gIHdlYnNpdGVTZWxlY3RlZDogZnVuY3Rpb24oZSkge1xuXG4gICAgdmFyIHdlYnNpdGVzID0gSlNPTi5wYXJzZSgkLmNvb2tpZShcImFwcGxpY2F0aW9uXCIpKS51c2VyLndlYnNpdGVzO1xuXG4gICAgaWYocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpID09PSAwKSB7XG5cbiAgICAgIHRoaXMucHJvcHMuc2V0V2Vic2l0ZSh1bmRlZmluZWQpO1xuXG4gICAgICAvLyB0b2RvOiByZXZpZXdcbiAgICAgIHRoaXMucHJvcHMuc2V0UG9zKFwid2Vic2l0ZXMvYWRkXCIsIFwiQWRkIFdlYnNpdGVcIik7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB2YXIgd2Vic2l0ZSA9IF8uZmlyc3QoXy5maWx0ZXIod2Vic2l0ZXMsIHsgJ2lkJzogcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIH0pKS5pZDtcblxuICAgICAgY29uc29sZS5sb2cod2Vic2l0ZSk7XG5cbiAgICAgIHRoaXMucHJvcHMuc2V0V2Vic2l0ZSh3ZWJzaXRlKTtcblxuICAgICAgdGhpcy5wcm9wcy5zZXRQb3MoXCJcIiwgXCJEYXNoYm9hcmRcIik7XG5cbiAgICB9XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciB2YWx1ZSA9IDA7XG4gICAgLy8gU2VsZWN0IGRlZmF1bHQgb3B0aW9uIHdoZXJlIHZhbHVlID0gMCBpZiB3ZWJzaXRlIGlzbid0IGRlZmluZWRcbiAgICBpZih0aGlzLnByb3BzLndlYnNpdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFsdWUgPSB0aGlzLnByb3BzLndlYnNpdGU7XG4gICAgfTtcblxuICAgIGlmKCQuY29va2llKFwiYXBwbGljYXRpb25cIikpIHtcbiAgICAgIHZhciB3ZWJzaXRlcyA9IEpTT04ucGFyc2UoJC5jb29raWUoXCJhcHBsaWNhdGlvblwiKSkudXNlci53ZWJzaXRlc1xuXG5cbiAgICAgIHZhciBsaW5rcyA9IF8ubWFwKHdlYnNpdGVzLCBmdW5jdGlvbihzaXRlLCBrZXkpIHtcblxuICAgICAgICByZXR1cm4gUmVhY3QuRE9NLm9wdGlvbigge2tleTpzaXRlLmlkLCB2YWx1ZTpzaXRlLmlkfSwgc2l0ZS5uYW1lKVxuXG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KG51bGwsIFxuXG4gICAgICAgICAgICBSZWFjdC5ET00uc2VsZWN0KCB7aWQ6XCJ3ZWJzaXRlU2VsZWN0b3JcIiwgb25DaGFuZ2U6dGhpcy53ZWJzaXRlU2VsZWN0ZWQsIHZhbHVlOnZhbHVlfSwgXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS5vcHRpb24oIHtrZXk6XCIwXCIsIHZhbHVlOlwiMFwifSwgXCJBZGQgTmV3IFdlYnNpdGVcIiksXG4gICAgICAgICAgICBsaW5rc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApXG5cbiAgfVxuXG59KTtcblxudmFyIENvbnRlbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdDb250ZW50JyxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHNlY3Rpb24gPSBudWxsO1xuICAgIGlmKHRoaXMucHJvcHMubmF2UG9zID09PSBcIkRhc2hib2FyZFwiKSB7XG4gICAgICBzZWN0aW9uID0gKFxuICAgICAgICAgICAgICAgICBEYXNoYm9hcmQoIHtuYXZQb3M6dGhpcy5wcm9wcy5uYXZQb3MsIHNldFBvczp0aGlzLnByb3BzLnNldFBvcywgbG9nZ2VkSW46dGhpcy5wcm9wcy5sb2dnZWRJbiwgc2V0TG9nZ2VkSW46dGhpcy5wcm9wcy5zZXRMb2dnZWRJbiwgc2V0V2Vic2l0ZTp0aGlzLnByb3BzLnNldFdlYnNpdGV9IClcbiAgICAgICAgICAgICAgICAgKVxuICAgIH0gZWxzZSBpZih0aGlzLnByb3BzLm5hdlBvcyA9PT0gXCJNeSBBY2NvdW50XCIpIHtcbiAgICAgIHNlY3Rpb24gPSAoXG4gICAgICAgICAgICAgICAgIE15QWNjb3VudCgge25hdlBvczp0aGlzLnByb3BzLm5hdlBvcywgc2V0UG9zOnRoaXMucHJvcHMuc2V0UG9zLCBsb2dnZWRJbjp0aGlzLnByb3BzLmxvZ2dlZEluLCBzZXRMb2dnZWRJbjp0aGlzLnByb3BzLnNldExvZ2dlZEluLCBzZXRXZWJzaXRlOnRoaXMucHJvcHMuc2V0V2Vic2l0ZX0gKVxuICAgICAgICAgICAgICAgICApXG5cbiAgICB9IGVsc2UgaWYodGhpcy5wcm9wcy5uYXZQb3MgPT09IFwiRWRpdCBBY2NvdW50XCIpIHtcbiAgICAgIHNlY3Rpb24gPSAoXG4gICAgICAgICAgICAgICAgIEVkaXRBY2NvdW50KCB7bmF2UG9zOnRoaXMucHJvcHMubmF2UG9zLCBzZXRQb3M6dGhpcy5wcm9wcy5zZXRQb3MsIGxvZ2dlZEluOnRoaXMucHJvcHMubG9nZ2VkSW4sIHNldExvZ2dlZEluOnRoaXMucHJvcHMuc2V0TG9nZ2VkSW4sIHNldFdlYnNpdGU6dGhpcy5wcm9wcy5zZXRXZWJzaXRlfSApXG4gICAgICAgICAgICAgICAgIClcblxuICAgIH0gZWxzZSBpZih0aGlzLnByb3BzLm5hdlBvcyA9PT0gXCJXZWJzaXRlc1wiKSB7XG4gICAgICBzZWN0aW9uID0gKFxuICAgICAgICAgICAgICAgICBXZWJzaXRlKCB7bmF2UG9zOnRoaXMucHJvcHMubmF2UG9zLCBzZXRQb3M6dGhpcy5wcm9wcy5zZXRQb3MsIGxvZ2dlZEluOnRoaXMucHJvcHMubG9nZ2VkSW4sIHNldExvZ2dlZEluOnRoaXMucHJvcHMuc2V0TG9nZ2VkSW4sIHNldFdlYnNpdGU6dGhpcy5wcm9wcy5zZXRXZWJzaXRlfSApXG4gICAgICAgICAgICAgICAgIClcblxuICAgIH0gZWxzZSBpZih0aGlzLnByb3BzLm5hdlBvcyA9PT0gXCJBZGQgV2Vic2l0ZVwiKSB7XG4gICAgICBzZWN0aW9uID0gKFxuICAgICAgICAgICAgICAgICBBZGRXZWJzaXRlKCB7bmF2UG9zOnRoaXMucHJvcHMubmF2UG9zLCBzZXRQb3M6dGhpcy5wcm9wcy5zZXRQb3MsIGxvZ2dlZEluOnRoaXMucHJvcHMubG9nZ2VkSW4sIHNldExvZ2dlZEluOnRoaXMucHJvcHMuc2V0TG9nZ2VkSW4sIHNldFdlYnNpdGU6dGhpcy5wcm9wcy5zZXRXZWJzaXRlfSApXG4gICAgICAgICAgICAgICAgIClcblxuICAgIH0gZWxzZSB7XG4gICAgICBzZWN0aW9uID0gKFxuICAgICAgICAgICAgICAgICBSZWFjdC5ET00ucChudWxsLCB0aGlzLnByb3BzLm5hdlBvcylcbiAgICAgICAgICAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7aWQ6XCJjb250ZW50XCIsIGNsYXNzTmFtZTpcInNtYWxsLTggbGFyZ2UtMTAgY29sdW1uc1wifSwgXG4gICAgICAgICAgICBzZWN0aW9uXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApXG5cbiAgfVxuXG59KTtcblxudmFyIFJvdXRlciA9IEJhY2tib25lLlJvdXRlci5leHRlbmQoe1xuICByb3V0ZXMgOiB7XG4gICAgXCJcIiAgICA6IFwiaW5kZXhcIixcbiAgICBcIndlYnNpdGVzXCIgOiBcIndlYnNpdGVzXCIsXG4gICAgXCJ3ZWJzaXRlcy9hZGRcIiA6IFwid2Vic2l0ZXNBZGRcIixcbiAgICBcImNhbXBhaWduc1wiIDogXCJjYW1wYWlnbnNcIixcbiAgICBcImFjY291bnRcIiA6IFwiYWNjb3VudFwiLFxuICAgIFwiYWNjb3VudC9lZGl0XCIgOiBcImFjY291bnRFZGl0XCIsXG4gICAgXCIqc3BsYXRcIiA6IFwiaW5kZXhcIlxuICB9LFxuICBjbGVhckxheW91dCA6IGZ1bmN0aW9uKCkge1xuICAgIFJlYWN0LnJlbmRlckNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuRE9NLmRpdihudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGxpY2F0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgfSxcbiAgc2hvd0xheW91dCA6IGZ1bmN0aW9uKHBvcykge1xuXG4gICAgLy8gTG9vayB1cCB0aGUgY3VycmVudCByb3V0ZSBhZ2FpbnN0IG5hdmlnYXRpb25fZGF0YSBzbyB0aGF0IHdlIGNhbiBwb3B1bGF0ZSBMYXlvdXQgd2l0aCB0aGUgcHJldHR5IG5hdlBvcyBuYW1lLlxuICAgIHZhciBuYXZQb3MgPSBfLmZpbmQobmF2aWdhdGlvbl9kYXRhLCB7ICd1cmwnOiBwb3MgfSk7XG4gICAgaWYoXy5oYXMobmF2UG9zLCBcIm5hbWVcIikpIHtcbiAgICAgIG5hdlBvcyA9IG5hdlBvcy5uYW1lXG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdlBvcyA9IFwiRGFzaGJvYXJkXCJcbiAgICB9XG5cbiAgICBSZWFjdC5yZW5kZXJDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExheW91dCgge25hdkxpbmtzOm5hdmlnYXRpb25fZGF0YSwgbmF2UG9zOm5hdlBvc30gKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGxpY2F0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgfSxcbiAgaW5kZXggOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNsZWFyTGF5b3V0KCk7XG4gICAgdGhpcy5zaG93TGF5b3V0KFwiZGFzaGJvYXJkXCIpO1xuICB9LFxuICB3ZWJzaXRlcyA6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY2xlYXJMYXlvdXQoKTtcbiAgICB0aGlzLnNob3dMYXlvdXQoXCJ3ZWJzaXRlc1wiKTtcbiAgfSxcbiAgd2Vic2l0ZXNBZGQgOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNsZWFyTGF5b3V0KCk7XG4gICAgdGhpcy5zaG93TGF5b3V0KFwid2Vic2l0ZXMvYWRkXCIpO1xuICB9LFxuICBjYW1wYWlnbnMgOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNsZWFyTGF5b3V0KCk7XG4gICAgdGhpcy5zaG93TGF5b3V0KFwiY2FtcGFpZ25zXCIpO1xuICB9LFxuICBhY2NvdW50IDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jbGVhckxheW91dCgpO1xuICAgIHRoaXMuc2hvd0xheW91dChcImFjY291bnRcIik7XG4gIH0sXG4gIGFjY291bnRFZGl0IDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jbGVhckxheW91dCgpO1xuICAgIHRoaXMuc2hvd0xheW91dChcImFjY291bnQvZWRpdFwiKTtcbiAgfVxufSk7XG5cbnZhciByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cbkJhY2tib25lLmhpc3Rvcnkuc3RhcnQoe3B1c2hTdGF0ZTogdHJ1ZX0pO1xuXG5cbmV4cG9ydHMuTGF5b3V0ID0gTGF5b3V0O1xuZXhwb3J0cy5Mb2dpbiA9IExvZ2luO1xuZXhwb3J0cy5Ub3BCYXIgPSBUb3BCYXI7XG5leHBvcnRzLkxlZnRNZW51ID0gTGVmdE1lbnU7XG5leHBvcnRzLldlYnNpdGVTZWxlY3RvciA9IFdlYnNpdGVTZWxlY3RvcjtcbmV4cG9ydHMuQ29udGVudCA9IENvbnRlbnQ7XG5leHBvcnRzLlJvdXRlciA9IFJvdXRlcjtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb21wb25lbnRzL2xheW91dC5qc3hcIixcIi9jb21wb25lbnRzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqIEBqc3ggUmVhY3QuRE9NICovXG5cbnZhciBNeUFjY291bnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdNeUFjY291bnQnLFxuXG4gIHJvdXRlRWRpdEFjY291bnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJidXR0b24gY2xpY2tlZFwiKTtcbiAgICB0aGlzLnByb3BzLnNldFBvcyhcImFjY291bnQvZWRpdFwiLCBcIkVkaXQgQWNjb3VudFwiKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInRleHQtY2VudGVyXCJ9LCBcblxuICAgICAgUmVhY3QuRE9NLmltZygge2NsYXNzTmFtZTpcInRoXCIsIHNyYzpcImh0dHA6Ly9ncmF2YXRhci5jb20vYXZhdGFyL2YwMDE2MWM3YjM1ZjAwODRkMzkwZjc4NWUwMTViOWNhLmpwZ1wifSApLFxuICAgICAgUmVhY3QuRE9NLmgxKG51bGwsIHRoaXMucHJvcHMubG9nZ2VkSW4uZnVsbE5hbWUpLFxuICAgICAgUmVhY3QuRE9NLmgzKG51bGwsIHRoaXMucHJvcHMubG9nZ2VkSW4uZW1haWwpLFxuICAgICAgUmVhY3QuRE9NLmg0KG51bGwsIFwiUmVnaXN0ZXJlZCBcIiwgbW9tZW50KHRoaXMucHJvcHMubG9nZ2VkSW4uY3JlYXRlZEF0KS5mcm9tTm93KCkpLFxuXG4gICAgICBSZWFjdC5ET00uYnV0dG9uKCB7b25DbGljazp0aGlzLnJvdXRlRWRpdEFjY291bnQsIGNsYXNzTmFtZTpcImJ1dHRvbiByYWRpdXNcIn0sIFwiRWRpdCBBY2NvdW50XCIpXG5cbiAgICAgIClcbiAgICApXG5cbiAgfVxuXG59KTtcblxuXG52YXIgRWRpdEFjY291bnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdFZGl0QWNjb3VudCcsXG5cbiAgcm91dGVNeUFjY291bnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5zZXRQb3MoXCJhY2NvdW50XCIsIFwiTXkgQWNjb3VudFwiKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInRleHQtY2VudGVyXCJ9LCBcblxuICAgICAgICBSZWFjdC5ET00udWwoIHtjbGFzc05hbWU6XCJicmVhZGNydW1ic1wifSwgXG4gICAgICAgICAgUmVhY3QuRE9NLmxpKG51bGwsIFJlYWN0LkRPTS5hKCB7b25DbGljazp0aGlzLnJvdXRlTXlBY2NvdW50fSwgXCJNeSBBY2NvdW50XCIpKSxcbiAgICAgICAgICBSZWFjdC5ET00ubGkoIHtjbGFzc05hbWU6XCJjdXJyZW50XCJ9LCBcIkVkaXQgQWNjb3VudFwiKVxuICAgICAgICApLFxuXG5cbiAgICAgICAgXCJFZGl0IEFjY291bnRcIlxuXG4gICAgICApXG4gICAgKVxuXG4gIH1cblxufSk7XG5cblxuZXhwb3J0cy5NeUFjY291bnQgPSBNeUFjY291bnQ7XG5leHBvcnRzLkVkaXRBY2NvdW50ID0gRWRpdEFjY291bnQ7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29tcG9uZW50cy9teS1hY2NvdW50LmpzeFwiLFwiL2NvbXBvbmVudHNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKiogQGpzeCBSZWFjdC5ET00gKi9cblxudmFyIFdlYnNpdGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdXZWJzaXRlJyxcblxuICByb3V0ZUFkZFdlYnNpdGU6IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJidXR0b24gY2xpY2tlZFwiKTtcbiAgICB0aGlzLnByb3BzLnNldFdlYnNpdGUodW5kZWZpbmVkKTtcbiAgICB0aGlzLnByb3BzLnNldFBvcyhcIndlYnNpdGVzL2FkZFwiLCBcIkFkZCBXZWJzaXRlXCIpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwidGV4dC1jZW50ZXJcIn0sIFxuXG4gICAgICBSZWFjdC5ET00uYnV0dG9uKCB7b25DbGljazp0aGlzLnJvdXRlQWRkV2Vic2l0ZSwgY2xhc3NOYW1lOlwiYnV0dG9uIHJhZGl1c1wifSwgXCJBZGQgV2Vic2l0ZVwiKVxuXG4gICAgICApXG4gICAgKVxuXG4gIH1cblxufSk7XG5cblxudmFyIEFkZFdlYnNpdGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdBZGRXZWJzaXRlJyxcblxuICByb3V0ZVdlYnNpdGVzOiBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuc2V0UG9zKFwid2Vic2l0ZXNcIiwgXCJXZWJzaXRlc1wiKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInRleHQtY2VudGVyXCJ9LCBcblxuICAgICAgICBSZWFjdC5ET00udWwoIHtjbGFzc05hbWU6XCJicmVhZGNydW1ic1wifSwgXG4gICAgICAgICAgUmVhY3QuRE9NLmxpKG51bGwsIFJlYWN0LkRPTS5hKCB7b25DbGljazp0aGlzLnJvdXRlV2Vic2l0ZXN9LCBcIldlYnNpdGVzXCIpKSxcbiAgICAgICAgICBSZWFjdC5ET00ubGkoIHtjbGFzc05hbWU6XCJjdXJyZW50XCJ9LCBcIkFkZCBXZWJzaXRlXCIpXG4gICAgICAgICksXG5cblxuICAgICAgICBcIkFkZCBXZWJzaXRlXCJcblxuICAgICAgKVxuICAgIClcblxuICB9XG5cbn0pO1xuXG5leHBvcnRzLldlYnNpdGUgPSBXZWJzaXRlO1xuZXhwb3J0cy5BZGRXZWJzaXRlID0gQWRkV2Vic2l0ZTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2NvbXBvbmVudHMvd2Vic2l0ZS5qc3hcIixcIi9jb21wb25lbnRzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xubmF2aWdhdGlvbl9kYXRhID0gW1xue25hbWU6IFwiRGFzaGJvYXJkXCIsIHVybDogXCJcIiwgc2hvd0luTWVudTogdHJ1ZX0sXG57bmFtZTogXCJXZWJzaXRlc1wiLCB1cmw6IFwid2Vic2l0ZXNcIiwgc3Vicm91dGVzOiBcIkFkZCBXZWJzaXRlXCIsIHNob3dJbk1lbnU6IHRydWV9LFxue25hbWU6IFwiQWRkIFdlYnNpdGVcIiwgdXJsOiBcIndlYnNpdGVzL2FkZFwiLCBzaG93SW5NZW51OiBmYWxzZX0sXG57bmFtZTogXCJDYW1wYWlnbnNcIiwgdXJsOiBcImNhbXBhaWduc1wiLCBzaG93SW5NZW51OiB0cnVlfSxcbntuYW1lOiBcIk15IEFjY291bnRcIiwgdXJsOiBcImFjY291bnRcIiwgc3Vicm91dGVzOiBcIkVkaXQgQWNjb3VudFwiLCBzaG93SW5NZW51OiB0cnVlfSxcbntuYW1lOiBcIkVkaXQgQWNjb3VudFwiLCB1cmw6IFwiYWNjb3VudC9lZGl0XCIsIHNob3dJbk1lbnU6IGZhbHNlfVxuXTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb25maWcuanNcIixcIi9cIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG52YXIgY29uZmlnID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xuXG5BcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbGF5b3V0XCIpLkxheW91dDtcbi8vIExvZ2luID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9sYXlvdXRcIikuTG9naW47XG4vLyBUb3BCYXIgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2xheW91dFwiKS5Ub3BCYXI7XG4vLyBMZWZ0TWVudSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbGF5b3V0XCIpLkxlZnRNZW51O1xuLy8gV2Vic2l0ZVNlbGVjdG9yID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9sYXlvdXRcIikuV2Vic2l0ZVNlbGVjdG9yO1xuLy8gQ29udGVudCA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbGF5b3V0XCIpLkNvbnRlbnQ7XG4vLyBSb3V0ZXIgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2xheW91dFwiKS5Sb3V0ZXI7XG5cblxuXG5cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICQoZG9jdW1lbnQpLmZvdW5kYXRpb24oKTtcblxufSgpO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2Zha2VfOThlMDU3MDAuanNcIixcIi9cIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5fdXNlVHlwZWRBcnJheXNgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAoY29tcGF0aWJsZSBkb3duIHRvIElFNilcbiAqL1xuQnVmZmVyLl91c2VUeXBlZEFycmF5cyA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIERldGVjdCBpZiBicm93c2VyIHN1cHBvcnRzIFR5cGVkIEFycmF5cy4gU3VwcG9ydGVkIGJyb3dzZXJzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssXG4gIC8vIENocm9tZSA3KywgU2FmYXJpIDUuMSssIE9wZXJhIDExLjYrLCBpT1MgNC4yKy4gSWYgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBhZGRpbmdcbiAgLy8gcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLCB0aGVuIHRoYXQncyB0aGUgc2FtZSBhcyBubyBgVWludDhBcnJheWAgc3VwcG9ydFxuICAvLyBiZWNhdXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBhZGQgYWxsIHRoZSBub2RlIEJ1ZmZlciBBUEkgbWV0aG9kcy4gVGhpcyBpcyBhbiBpc3N1ZVxuICAvLyBpbiBGaXJlZm94IDQtMjkuIE5vdyBmaXhlZDogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4XG4gIHRyeSB7XG4gICAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigwKVxuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgYXJyLmZvbyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH1cbiAgICByZXR1cm4gNDIgPT09IGFyci5mb28oKSAmJlxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nIC8vIENocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn0pKClcblxuLyoqXG4gKiBDbGFzczogQnVmZmVyXG4gKiA9PT09PT09PT09PT09XG4gKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBhcmUgYXVnbWVudGVkXG4gKiB3aXRoIGZ1bmN0aW9uIHByb3BlcnRpZXMgZm9yIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBBUEkgZnVuY3Rpb25zLiBXZSB1c2VcbiAqIGBVaW50OEFycmF5YCBzbyB0aGF0IHNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0IHJldHVybnNcbiAqIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIEJ5IGF1Z21lbnRpbmcgdGhlIGluc3RhbmNlcywgd2UgY2FuIGF2b2lkIG1vZGlmeWluZyB0aGUgYFVpbnQ4QXJyYXlgXG4gKiBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIEJ1ZmZlciAoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSlcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKVxuXG4gIHZhciB0eXBlID0gdHlwZW9mIHN1YmplY3RcblxuICAvLyBXb3JrYXJvdW5kOiBub2RlJ3MgYmFzZTY0IGltcGxlbWVudGF0aW9uIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBzdHJpbmdzXG4gIC8vIHdoaWxlIGJhc2U2NC1qcyBkb2VzIG5vdC5cbiAgaWYgKGVuY29kaW5nID09PSAnYmFzZTY0JyAmJiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHN1YmplY3QgPSBzdHJpbmd0cmltKHN1YmplY3QpXG4gICAgd2hpbGUgKHN1YmplY3QubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgICAgc3ViamVjdCA9IHN1YmplY3QgKyAnPSdcbiAgICB9XG4gIH1cblxuICAvLyBGaW5kIHRoZSBsZW5ndGhcbiAgdmFyIGxlbmd0aFxuICBpZiAodHlwZSA9PT0gJ251bWJlcicpXG4gICAgbGVuZ3RoID0gY29lcmNlKHN1YmplY3QpXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKVxuICAgIGxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKHN1YmplY3QsIGVuY29kaW5nKVxuICBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JylcbiAgICBsZW5ndGggPSBjb2VyY2Uoc3ViamVjdC5sZW5ndGgpIC8vIGFzc3VtZSB0aGF0IG9iamVjdCBpcyBhcnJheS1saWtlXG4gIGVsc2VcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG5lZWRzIHRvIGJlIGEgbnVtYmVyLCBhcnJheSBvciBzdHJpbmcuJylcblxuICB2YXIgYnVmXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgLy8gUHJlZmVycmVkOiBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIGJ1ZiA9IEJ1ZmZlci5fYXVnbWVudChuZXcgVWludDhBcnJheShsZW5ndGgpKVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gVEhJUyBpbnN0YW5jZSBvZiBCdWZmZXIgKGNyZWF0ZWQgYnkgYG5ld2ApXG4gICAgYnVmID0gdGhpc1xuICAgIGJ1Zi5sZW5ndGggPSBsZW5ndGhcbiAgICBidWYuX2lzQnVmZmVyID0gdHJ1ZVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgJiYgdHlwZW9mIHN1YmplY3QuYnl0ZUxlbmd0aCA9PT0gJ251bWJlcicpIHtcbiAgICAvLyBTcGVlZCBvcHRpbWl6YXRpb24gLS0gdXNlIHNldCBpZiB3ZSdyZSBjb3B5aW5nIGZyb20gYSB0eXBlZCBhcnJheVxuICAgIGJ1Zi5fc2V0KHN1YmplY3QpXG4gIH0gZWxzZSBpZiAoaXNBcnJheWlzaChzdWJqZWN0KSkge1xuICAgIC8vIFRyZWF0IGFycmF5LWlzaCBvYmplY3RzIGFzIGEgYnl0ZSBhcnJheVxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSlcbiAgICAgICAgYnVmW2ldID0gc3ViamVjdC5yZWFkVUludDgoaSlcbiAgICAgIGVsc2VcbiAgICAgICAgYnVmW2ldID0gc3ViamVjdFtpXVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGJ1Zi53cml0ZShzdWJqZWN0LCAwLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiAhQnVmZmVyLl91c2VUeXBlZEFycmF5cyAmJiAhbm9aZXJvKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBidWZbaV0gPSAwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG4vLyBTVEFUSUMgTUVUSE9EU1xuLy8gPT09PT09PT09PT09PT1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIChiKSB7XG4gIHJldHVybiAhIShiICE9PSBudWxsICYmIGIgIT09IHVuZGVmaW5lZCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmJ5dGVMZW5ndGggPSBmdW5jdGlvbiAoc3RyLCBlbmNvZGluZykge1xuICB2YXIgcmV0XG4gIHN0ciA9IHN0ciArICcnXG4gIHN3aXRjaCAoZW5jb2RpbmcgfHwgJ3V0ZjgnKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggLyAyXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IHV0ZjhUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBiYXNlNjRUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoICogMlxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiAobGlzdCwgdG90YWxMZW5ndGgpIHtcbiAgYXNzZXJ0KGlzQXJyYXkobGlzdCksICdVc2FnZTogQnVmZmVyLmNvbmNhdChsaXN0LCBbdG90YWxMZW5ndGhdKVxcbicgK1xuICAgICAgJ2xpc3Qgc2hvdWxkIGJlIGFuIEFycmF5LicpXG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoMClcbiAgfSBlbHNlIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBsaXN0WzBdXG4gIH1cblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHRvdGFsTGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgIHRvdGFsTGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b3RhbExlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWYgPSBuZXcgQnVmZmVyKHRvdGFsTGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIGl0ZW0uY29weShidWYsIHBvcylcbiAgICBwb3MgKz0gaXRlbS5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cbi8vIEJVRkZFUiBJTlNUQU5DRSBNRVRIT0RTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBfaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBhc3NlcnQoc3RyTGVuICUgMiA9PT0gMCwgJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBieXRlID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGFzc2VydCghaXNOYU4oYnl0ZSksICdJbnZhbGlkIGhleCBzdHJpbmcnKVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVcbiAgfVxuICBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9IGkgKiAyXG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIF91dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfYmluYXJ5V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gX2FzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBfYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF91dGYxNmxlV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIFN1cHBvcnQgYm90aCAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpXG4gIC8vIGFuZCB0aGUgbGVnYWN5IChzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBpZiAoIWlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIH0gZWxzZSB7ICAvLyBsZWdhY3lcbiAgICB2YXIgc3dhcCA9IGVuY29kaW5nXG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBvZmZzZXQgPSBsZW5ndGhcbiAgICBsZW5ndGggPSBzd2FwXG4gIH1cblxuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuXG4gIHZhciByZXRcbiAgc3dpdGNoIChlbmNvZGluZykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBfaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gX3V0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBfYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiaW5hcnknOlxuICAgICAgcmV0ID0gX2JpbmFyeVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBfYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IF91dGYxNmxlV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuICBzdGFydCA9IE51bWJlcihzdGFydCkgfHwgMFxuICBlbmQgPSAoZW5kICE9PSB1bmRlZmluZWQpXG4gICAgPyBOdW1iZXIoZW5kKVxuICAgIDogZW5kID0gc2VsZi5sZW5ndGhcblxuICAvLyBGYXN0cGF0aCBlbXB0eSBzdHJpbmdzXG4gIGlmIChlbmQgPT09IHN0YXJ0KVxuICAgIHJldHVybiAnJ1xuXG4gIHZhciByZXRcbiAgc3dpdGNoIChlbmNvZGluZykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBfaGV4U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gX3V0ZjhTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBfYXNjaWlTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiaW5hcnknOlxuICAgICAgcmV0ID0gX2JpbmFyeVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBfYmFzZTY0U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IF91dGYxNmxlU2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRfc3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNvdXJjZSA9IHRoaXNcblxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAoIXRhcmdldF9zdGFydCkgdGFyZ2V0X3N0YXJ0ID0gMFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHNvdXJjZS5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgYXNzZXJ0KGVuZCA+PSBzdGFydCwgJ3NvdXJjZUVuZCA8IHNvdXJjZVN0YXJ0JylcbiAgYXNzZXJ0KHRhcmdldF9zdGFydCA+PSAwICYmIHRhcmdldF9zdGFydCA8IHRhcmdldC5sZW5ndGgsXG4gICAgICAndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChzdGFydCA+PSAwICYmIHN0YXJ0IDwgc291cmNlLmxlbmd0aCwgJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoZW5kID49IDAgJiYgZW5kIDw9IHNvdXJjZS5sZW5ndGgsICdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKVxuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0IDwgZW5kIC0gc3RhcnQpXG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCArIHN0YXJ0XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG5cbiAgaWYgKGxlbiA8IDEwMCB8fCAhQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICB0YXJnZXRbaSArIHRhcmdldF9zdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuX3NldCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksIHRhcmdldF9zdGFydClcbiAgfVxufVxuXG5mdW5jdGlvbiBfYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIF91dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmVzID0gJydcbiAgdmFyIHRtcCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIGlmIChidWZbaV0gPD0gMHg3Rikge1xuICAgICAgcmVzICs9IGRlY29kZVV0ZjhDaGFyKHRtcCkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgICAgIHRtcCA9ICcnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcCArPSAnJScgKyBidWZbaV0udG9TdHJpbmcoMTYpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcyArIGRlY29kZVV0ZjhDaGFyKHRtcClcbn1cblxuZnVuY3Rpb24gX2FzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKVxuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBfYmluYXJ5U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICByZXR1cm4gX2FzY2lpU2xpY2UoYnVmLCBzdGFydCwgZW5kKVxufVxuXG5mdW5jdGlvbiBfaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiBfdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpKzFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IGNsYW1wKHN0YXJ0LCBsZW4sIDApXG4gIGVuZCA9IGNsYW1wKGVuZCwgbGVuLCBsZW4pXG5cbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICByZXR1cm4gQnVmZmVyLl9hdWdtZW50KHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCkpXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICB2YXIgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkLCB0cnVlKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47IGkrKykge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICAgIHJldHVybiBuZXdCdWZcbiAgfVxufVxuXG4vLyBgZ2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuZ2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy5yZWFkVUludDgob2Zmc2V0KVxufVxuXG4vLyBgc2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodiwgb2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuc2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy53cml0ZVVJbnQ4KHYsIG9mZnNldClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuZnVuY3Rpb24gX3JlYWRVSW50MTYgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsXG4gIGlmIChsaXR0bGVFbmRpYW4pIHtcbiAgICB2YWwgPSBidWZbb2Zmc2V0XVxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXSA8PCA4XG4gIH0gZWxzZSB7XG4gICAgdmFsID0gYnVmW29mZnNldF0gPDwgOFxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MTYodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MTYodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkVUludDMyIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbFxuICBpZiAobGl0dGxlRW5kaWFuKSB7XG4gICAgaWYgKG9mZnNldCArIDIgPCBsZW4pXG4gICAgICB2YWwgPSBidWZbb2Zmc2V0ICsgMl0gPDwgMTZcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV0gPDwgOFxuICAgIHZhbCB8PSBidWZbb2Zmc2V0XVxuICAgIGlmIChvZmZzZXQgKyAzIDwgbGVuKVxuICAgICAgdmFsID0gdmFsICsgKGJ1ZltvZmZzZXQgKyAzXSA8PCAyNCA+Pj4gMClcbiAgfSBlbHNlIHtcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCA9IGJ1ZltvZmZzZXQgKyAxXSA8PCAxNlxuICAgIGlmIChvZmZzZXQgKyAyIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAyXSA8PCA4XG4gICAgaWYgKG9mZnNldCArIDMgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDNdXG4gICAgdmFsID0gdmFsICsgKGJ1ZltvZmZzZXRdIDw8IDI0ID4+PiAwKVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MzIodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MzIodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCxcbiAgICAgICAgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIHZhciBuZWcgPSB0aGlzW29mZnNldF0gJiAweDgwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5mdW5jdGlvbiBfcmVhZEludDE2IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbCA9IF9yZWFkVUludDE2KGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIHRydWUpXG4gIHZhciBuZWcgPSB2YWwgJiAweDgwMDBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmZmZiAtIHZhbCArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDE2KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQxNih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRJbnQzMiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWwgPSBfcmVhZFVJbnQzMihidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCB0cnVlKVxuICB2YXIgbmVnID0gdmFsICYgMHg4MDAwMDAwMFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZmZmZmZmZiAtIHZhbCArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDMyKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQzMih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRGbG9hdCAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICByZXR1cm4gaWVlZTc1NC5yZWFkKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRmxvYXQodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEZsb2F0KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZERvdWJsZSAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICsgNyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICByZXR1cm4gaWVlZTc1NC5yZWFkKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZERvdWJsZSh0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZERvdWJsZSh0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmYpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKSByZXR1cm5cblxuICB0aGlzW29mZnNldF0gPSB2YWx1ZVxufVxuXG5mdW5jdGlvbiBfd3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZmZmKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihsZW4gLSBvZmZzZXQsIDIpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID1cbiAgICAgICAgKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgICAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZmZmZmZmZilcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4obGVuIC0gb2Zmc2V0LCA0KTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9XG4gICAgICAgICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZiwgLTB4ODApXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIHRoaXMud3JpdGVVSW50OCh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydClcbiAgZWxzZVxuICAgIHRoaXMud3JpdGVVSW50OCgweGZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmZmYsIC0weDgwMDApXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICBfd3JpdGVVSW50MTYoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgX3dyaXRlVUludDE2KGJ1ZiwgMHhmZmZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgX3dyaXRlVUludDMyKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbiAgZWxzZVxuICAgIF93cml0ZVVJbnQzMihidWYsIDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmSUVFRTc1NCh2YWx1ZSwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDcgPCBidWYubGVuZ3RoLFxuICAgICAgICAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZklFRUU3NTQodmFsdWUsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGZpbGwodmFsdWUsIHN0YXJ0PTAsIGVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKHZhbHVlLCBzdGFydCwgZW5kKSB7XG4gIGlmICghdmFsdWUpIHZhbHVlID0gMFxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQpIGVuZCA9IHRoaXMubGVuZ3RoXG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLmNoYXJDb2RlQXQoMClcbiAgfVxuXG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFpc05hTih2YWx1ZSksICd2YWx1ZSBpcyBub3QgYSBudW1iZXInKVxuICBhc3NlcnQoZW5kID49IHN0YXJ0LCAnZW5kIDwgc3RhcnQnKVxuXG4gIC8vIEZpbGwgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgYXNzZXJ0KHN0YXJ0ID49IDAgJiYgc3RhcnQgPCB0aGlzLmxlbmd0aCwgJ3N0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoZW5kID49IDAgJiYgZW5kIDw9IHRoaXMubGVuZ3RoLCAnZW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgdGhpc1tpXSA9IHZhbHVlXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb3V0ID0gW11cbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBvdXRbaV0gPSB0b0hleCh0aGlzW2ldKVxuICAgIGlmIChpID09PSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTKSB7XG4gICAgICBvdXRbaSArIDFdID0gJy4uLidcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgb3V0LmpvaW4oJyAnKSArICc+J1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYEFycmF5QnVmZmVyYCB3aXRoIHRoZSAqY29waWVkKiBtZW1vcnkgb2YgdGhlIGJ1ZmZlciBpbnN0YW5jZS5cbiAqIEFkZGVkIGluIE5vZGUgMC4xMi4gT25seSBhdmFpbGFibGUgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IEFycmF5QnVmZmVyLlxuICovXG5CdWZmZXIucHJvdG90eXBlLnRvQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgICAgcmV0dXJuIChuZXcgQnVmZmVyKHRoaXMpKS5idWZmZXJcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KHRoaXMubGVuZ3RoKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJ1Zi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSlcbiAgICAgICAgYnVmW2ldID0gdGhpc1tpXVxuICAgICAgcmV0dXJuIGJ1Zi5idWZmZXJcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCdWZmZXIudG9BcnJheUJ1ZmZlciBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicpXG4gIH1cbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG52YXIgQlAgPSBCdWZmZXIucHJvdG90eXBlXG5cbi8qKlxuICogQXVnbWVudCBhIFVpbnQ4QXJyYXkgKmluc3RhbmNlKiAobm90IHRoZSBVaW50OEFycmF5IGNsYXNzISkgd2l0aCBCdWZmZXIgbWV0aG9kc1xuICovXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5faXNCdWZmZXIgPSB0cnVlXG5cbiAgLy8gc2F2ZSByZWZlcmVuY2UgdG8gb3JpZ2luYWwgVWludDhBcnJheSBnZXQvc2V0IG1ldGhvZHMgYmVmb3JlIG92ZXJ3cml0aW5nXG4gIGFyci5fZ2V0ID0gYXJyLmdldFxuICBhcnIuX3NldCA9IGFyci5zZXRcblxuICAvLyBkZXByZWNhdGVkLCB3aWxsIGJlIHJlbW92ZWQgaW4gbm9kZSAwLjEzK1xuICBhcnIuZ2V0ID0gQlAuZ2V0XG4gIGFyci5zZXQgPSBCUC5zZXRcblxuICBhcnIud3JpdGUgPSBCUC53cml0ZVxuICBhcnIudG9TdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9Mb2NhbGVTdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9KU09OID0gQlAudG9KU09OXG4gIGFyci5jb3B5ID0gQlAuY29weVxuICBhcnIuc2xpY2UgPSBCUC5zbGljZVxuICBhcnIucmVhZFVJbnQ4ID0gQlAucmVhZFVJbnQ4XG4gIGFyci5yZWFkVUludDE2TEUgPSBCUC5yZWFkVUludDE2TEVcbiAgYXJyLnJlYWRVSW50MTZCRSA9IEJQLnJlYWRVSW50MTZCRVxuICBhcnIucmVhZFVJbnQzMkxFID0gQlAucmVhZFVJbnQzMkxFXG4gIGFyci5yZWFkVUludDMyQkUgPSBCUC5yZWFkVUludDMyQkVcbiAgYXJyLnJlYWRJbnQ4ID0gQlAucmVhZEludDhcbiAgYXJyLnJlYWRJbnQxNkxFID0gQlAucmVhZEludDE2TEVcbiAgYXJyLnJlYWRJbnQxNkJFID0gQlAucmVhZEludDE2QkVcbiAgYXJyLnJlYWRJbnQzMkxFID0gQlAucmVhZEludDMyTEVcbiAgYXJyLnJlYWRJbnQzMkJFID0gQlAucmVhZEludDMyQkVcbiAgYXJyLnJlYWRGbG9hdExFID0gQlAucmVhZEZsb2F0TEVcbiAgYXJyLnJlYWRGbG9hdEJFID0gQlAucmVhZEZsb2F0QkVcbiAgYXJyLnJlYWREb3VibGVMRSA9IEJQLnJlYWREb3VibGVMRVxuICBhcnIucmVhZERvdWJsZUJFID0gQlAucmVhZERvdWJsZUJFXG4gIGFyci53cml0ZVVJbnQ4ID0gQlAud3JpdGVVSW50OFxuICBhcnIud3JpdGVVSW50MTZMRSA9IEJQLndyaXRlVUludDE2TEVcbiAgYXJyLndyaXRlVUludDE2QkUgPSBCUC53cml0ZVVJbnQxNkJFXG4gIGFyci53cml0ZVVJbnQzMkxFID0gQlAud3JpdGVVSW50MzJMRVxuICBhcnIud3JpdGVVSW50MzJCRSA9IEJQLndyaXRlVUludDMyQkVcbiAgYXJyLndyaXRlSW50OCA9IEJQLndyaXRlSW50OFxuICBhcnIud3JpdGVJbnQxNkxFID0gQlAud3JpdGVJbnQxNkxFXG4gIGFyci53cml0ZUludDE2QkUgPSBCUC53cml0ZUludDE2QkVcbiAgYXJyLndyaXRlSW50MzJMRSA9IEJQLndyaXRlSW50MzJMRVxuICBhcnIud3JpdGVJbnQzMkJFID0gQlAud3JpdGVJbnQzMkJFXG4gIGFyci53cml0ZUZsb2F0TEUgPSBCUC53cml0ZUZsb2F0TEVcbiAgYXJyLndyaXRlRmxvYXRCRSA9IEJQLndyaXRlRmxvYXRCRVxuICBhcnIud3JpdGVEb3VibGVMRSA9IEJQLndyaXRlRG91YmxlTEVcbiAgYXJyLndyaXRlRG91YmxlQkUgPSBCUC53cml0ZURvdWJsZUJFXG4gIGFyci5maWxsID0gQlAuZmlsbFxuICBhcnIuaW5zcGVjdCA9IEJQLmluc3BlY3RcbiAgYXJyLnRvQXJyYXlCdWZmZXIgPSBCUC50b0FycmF5QnVmZmVyXG5cbiAgcmV0dXJuIGFyclxufVxuXG4vLyBzbGljZShzdGFydCwgZW5kKVxuZnVuY3Rpb24gY2xhbXAgKGluZGV4LCBsZW4sIGRlZmF1bHRWYWx1ZSkge1xuICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykgcmV0dXJuIGRlZmF1bHRWYWx1ZVxuICBpbmRleCA9IH5+aW5kZXg7ICAvLyBDb2VyY2UgdG8gaW50ZWdlci5cbiAgaWYgKGluZGV4ID49IGxlbikgcmV0dXJuIGxlblxuICBpZiAoaW5kZXggPj0gMCkgcmV0dXJuIGluZGV4XG4gIGluZGV4ICs9IGxlblxuICBpZiAoaW5kZXggPj0gMCkgcmV0dXJuIGluZGV4XG4gIHJldHVybiAwXG59XG5cbmZ1bmN0aW9uIGNvZXJjZSAobGVuZ3RoKSB7XG4gIC8vIENvZXJjZSBsZW5ndGggdG8gYSBudW1iZXIgKHBvc3NpYmx5IE5hTiksIHJvdW5kIHVwXG4gIC8vIGluIGNhc2UgaXQncyBmcmFjdGlvbmFsIChlLmcuIDEyMy40NTYpIHRoZW4gZG8gYVxuICAvLyBkb3VibGUgbmVnYXRlIHRvIGNvZXJjZSBhIE5hTiB0byAwLiBFYXN5LCByaWdodD9cbiAgbGVuZ3RoID0gfn5NYXRoLmNlaWwoK2xlbmd0aClcbiAgcmV0dXJuIGxlbmd0aCA8IDAgPyAwIDogbGVuZ3RoXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkgKHN1YmplY3QpIHtcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChzdWJqZWN0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzdWJqZWN0KSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICB9KShzdWJqZWN0KVxufVxuXG5mdW5jdGlvbiBpc0FycmF5aXNoIChzdWJqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5KHN1YmplY3QpIHx8IEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSB8fFxuICAgICAgc3ViamVjdCAmJiB0eXBlb2Ygc3ViamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIHR5cGVvZiBzdWJqZWN0Lmxlbmd0aCA9PT0gJ251bWJlcidcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIHZhciBiID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBpZiAoYiA8PSAweDdGKVxuICAgICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpXG4gICAgZWxzZSB7XG4gICAgICB2YXIgc3RhcnQgPSBpXG4gICAgICBpZiAoYiA+PSAweEQ4MDAgJiYgYiA8PSAweERGRkYpIGkrK1xuICAgICAgdmFyIGggPSBlbmNvZGVVUklDb21wb25lbnQoc3RyLnNsaWNlKHN0YXJ0LCBpKzEpKS5zdWJzdHIoMSkuc3BsaXQoJyUnKVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBoLmxlbmd0aDsgaisrKVxuICAgICAgICBieXRlQXJyYXkucHVzaChwYXJzZUludChoW2pdLCAxNikpXG4gICAgfVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KHN0cilcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBwb3NcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSlcbiAgICAgIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gZGVjb2RlVXRmOENoYXIgKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweEZGRkQpIC8vIFVURiA4IGludmFsaWQgY2hhclxuICB9XG59XG5cbi8qXG4gKiBXZSBoYXZlIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSB2YWx1ZSBpcyBhIHZhbGlkIGludGVnZXIuIFRoaXMgbWVhbnMgdGhhdCBpdFxuICogaXMgbm9uLW5lZ2F0aXZlLiBJdCBoYXMgbm8gZnJhY3Rpb25hbCBjb21wb25lbnQgYW5kIHRoYXQgaXQgZG9lcyBub3RcbiAqIGV4Y2VlZCB0aGUgbWF4aW11bSBhbGxvd2VkIHZhbHVlLlxuICovXG5mdW5jdGlvbiB2ZXJpZnVpbnQgKHZhbHVlLCBtYXgpIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlID49IDAsICdzcGVjaWZpZWQgYSBuZWdhdGl2ZSB2YWx1ZSBmb3Igd3JpdGluZyBhbiB1bnNpZ25lZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBpcyBsYXJnZXIgdGhhbiBtYXhpbXVtIHZhbHVlIGZvciB0eXBlJylcbiAgYXNzZXJ0KE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZSwgJ3ZhbHVlIGhhcyBhIGZyYWN0aW9uYWwgY29tcG9uZW50Jylcbn1cblxuZnVuY3Rpb24gdmVyaWZzaW50ICh2YWx1ZSwgbWF4LCBtaW4pIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGxhcmdlciB0aGFuIG1heGltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA+PSBtaW4sICd2YWx1ZSBzbWFsbGVyIHRoYW4gbWluaW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZSwgJ3ZhbHVlIGhhcyBhIGZyYWN0aW9uYWwgY29tcG9uZW50Jylcbn1cblxuZnVuY3Rpb24gdmVyaWZJRUVFNzU0ICh2YWx1ZSwgbWF4LCBtaW4pIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGxhcmdlciB0aGFuIG1heGltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA+PSBtaW4sICd2YWx1ZSBzbWFsbGVyIHRoYW4gbWluaW11bSBhbGxvd2VkIHZhbHVlJylcbn1cblxuZnVuY3Rpb24gYXNzZXJ0ICh0ZXN0LCBtZXNzYWdlKSB7XG4gIGlmICghdGVzdCkgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgfHwgJ0ZhaWxlZCBhc3NlcnRpb24nKVxufVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXJcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG52YXIgbG9va3VwID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXG47KGZ1bmN0aW9uIChleHBvcnRzKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuICB2YXIgQXJyID0gKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJylcbiAgICA/IFVpbnQ4QXJyYXlcbiAgICA6IEFycmF5XG5cblx0dmFyIFpFUk8gICA9ICcwJy5jaGFyQ29kZUF0KDApXG5cdHZhciBQTFVTICAgPSAnKycuY2hhckNvZGVBdCgwKVxuXHR2YXIgU0xBU0ggID0gJy8nLmNoYXJDb2RlQXQoMClcblx0dmFyIE5VTUJFUiA9ICcwJy5jaGFyQ29kZUF0KDApXG5cdHZhciBMT1dFUiAgPSAnYScuY2hhckNvZGVBdCgwKVxuXHR2YXIgVVBQRVIgID0gJ0EnLmNoYXJDb2RlQXQoMClcblxuXHRmdW5jdGlvbiBkZWNvZGUgKGVsdCkge1xuXHRcdHZhciBjb2RlID0gZWx0LmNoYXJDb2RlQXQoMClcblx0XHRpZiAoY29kZSA9PT0gUExVUylcblx0XHRcdHJldHVybiA2MiAvLyAnKydcblx0XHRpZiAoY29kZSA9PT0gU0xBU0gpXG5cdFx0XHRyZXR1cm4gNjMgLy8gJy8nXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIpXG5cdFx0XHRyZXR1cm4gLTEgLy9ubyBtYXRjaFxuXHRcdGlmIChjb2RlIDwgTlVNQkVSICsgMTApXG5cdFx0XHRyZXR1cm4gY29kZSAtIE5VTUJFUiArIDI2ICsgMjZcblx0XHRpZiAoY29kZSA8IFVQUEVSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIFVQUEVSXG5cdFx0aWYgKGNvZGUgPCBMT1dFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBMT1dFUiArIDI2XG5cdH1cblxuXHRmdW5jdGlvbiBiNjRUb0J5dGVBcnJheSAoYjY0KSB7XG5cdFx0dmFyIGksIGosIGwsIHRtcCwgcGxhY2VIb2xkZXJzLCBhcnJcblxuXHRcdGlmIChiNjQubGVuZ3RoICUgNCA+IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG5cdFx0fVxuXG5cdFx0Ly8gdGhlIG51bWJlciBvZiBlcXVhbCBzaWducyAocGxhY2UgaG9sZGVycylcblx0XHQvLyBpZiB0aGVyZSBhcmUgdHdvIHBsYWNlaG9sZGVycywgdGhhbiB0aGUgdHdvIGNoYXJhY3RlcnMgYmVmb3JlIGl0XG5cdFx0Ly8gcmVwcmVzZW50IG9uZSBieXRlXG5cdFx0Ly8gaWYgdGhlcmUgaXMgb25seSBvbmUsIHRoZW4gdGhlIHRocmVlIGNoYXJhY3RlcnMgYmVmb3JlIGl0IHJlcHJlc2VudCAyIGJ5dGVzXG5cdFx0Ly8gdGhpcyBpcyBqdXN0IGEgY2hlYXAgaGFjayB0byBub3QgZG8gaW5kZXhPZiB0d2ljZVxuXHRcdHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cdFx0cGxhY2VIb2xkZXJzID0gJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDIpID8gMiA6ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAxKSA/IDEgOiAwXG5cblx0XHQvLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcblx0XHRhcnIgPSBuZXcgQXJyKGI2NC5sZW5ndGggKiAzIC8gNCAtIHBsYWNlSG9sZGVycylcblxuXHRcdC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcblx0XHRsID0gcGxhY2VIb2xkZXJzID4gMCA/IGI2NC5sZW5ndGggLSA0IDogYjY0Lmxlbmd0aFxuXG5cdFx0dmFyIEwgPSAwXG5cblx0XHRmdW5jdGlvbiBwdXNoICh2KSB7XG5cdFx0XHRhcnJbTCsrXSA9IHZcblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBqID0gMDsgaSA8IGw7IGkgKz0gNCwgaiArPSAzKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDE4KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpIDw8IDEyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpIDw8IDYpIHwgZGVjb2RlKGI2NC5jaGFyQXQoaSArIDMpKVxuXHRcdFx0cHVzaCgodG1wICYgMHhGRjAwMDApID4+IDE2KVxuXHRcdFx0cHVzaCgodG1wICYgMHhGRjAwKSA+PiA4KVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdGlmIChwbGFjZUhvbGRlcnMgPT09IDIpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA+PiA0KVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH0gZWxzZSBpZiAocGxhY2VIb2xkZXJzID09PSAxKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDEwKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpIDw8IDQpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPj4gMilcblx0XHRcdHB1c2goKHRtcCA+PiA4KSAmIDB4RkYpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFyclxuXHR9XG5cblx0ZnVuY3Rpb24gdWludDhUb0Jhc2U2NCAodWludDgpIHtcblx0XHR2YXIgaSxcblx0XHRcdGV4dHJhQnl0ZXMgPSB1aW50OC5sZW5ndGggJSAzLCAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuXHRcdFx0b3V0cHV0ID0gXCJcIixcblx0XHRcdHRlbXAsIGxlbmd0aFxuXG5cdFx0ZnVuY3Rpb24gZW5jb2RlIChudW0pIHtcblx0XHRcdHJldHVybiBsb29rdXAuY2hhckF0KG51bSlcblx0XHR9XG5cblx0XHRmdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuXHRcdFx0cmV0dXJuIGVuY29kZShudW0gPj4gMTggJiAweDNGKSArIGVuY29kZShudW0gPj4gMTIgJiAweDNGKSArIGVuY29kZShudW0gPj4gNiAmIDB4M0YpICsgZW5jb2RlKG51bSAmIDB4M0YpXG5cdFx0fVxuXG5cdFx0Ly8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuXHRcdGZvciAoaSA9IDAsIGxlbmd0aCA9IHVpbnQ4Lmxlbmd0aCAtIGV4dHJhQnl0ZXM7IGkgPCBsZW5ndGg7IGkgKz0gMykge1xuXHRcdFx0dGVtcCA9ICh1aW50OFtpXSA8PCAxNikgKyAodWludDhbaSArIDFdIDw8IDgpICsgKHVpbnQ4W2kgKyAyXSlcblx0XHRcdG91dHB1dCArPSB0cmlwbGV0VG9CYXNlNjQodGVtcClcblx0XHR9XG5cblx0XHQvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG5cdFx0c3dpdGNoIChleHRyYUJ5dGVzKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRlbXAgPSB1aW50OFt1aW50OC5sZW5ndGggLSAxXVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCA0KSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPT0nXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRlbXAgPSAodWludDhbdWludDgubGVuZ3RoIC0gMl0gPDwgOCkgKyAodWludDhbdWludDgubGVuZ3RoIC0gMV0pXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAxMClcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA+PiA0KSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgMikgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz0nXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dHB1dFxuXHR9XG5cblx0bW9kdWxlLmV4cG9ydHMudG9CeXRlQXJyYXkgPSBiNjRUb0J5dGVBcnJheVxuXHRtb2R1bGUuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gdWludDhUb0Jhc2U2NFxufSgpKVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanNcIixcIi8uLi8uLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24oYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBuQml0cyA9IC03LFxuICAgICAgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwLFxuICAgICAgZCA9IGlzTEUgPyAtMSA6IDEsXG4gICAgICBzID0gYnVmZmVyW29mZnNldCArIGldO1xuXG4gIGkgKz0gZDtcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgcyA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IGVMZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBlID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gbUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzO1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSk7XG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICBlID0gZSAtIGVCaWFzO1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pO1xufTtcblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKSxcbiAgICAgIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKSxcbiAgICAgIGQgPSBpc0xFID8gMSA6IC0xLFxuICAgICAgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMDtcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKTtcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMDtcbiAgICBlID0gZU1heDtcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMik7XG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tO1xuICAgICAgYyAqPSAyO1xuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrKztcbiAgICAgIGMgLz0gMjtcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwO1xuICAgICAgZSA9IGVNYXg7XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IGUgKyBlQmlhcztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCk7XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbTtcbiAgZUxlbiArPSBtTGVuO1xuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpO1xuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyODtcbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NFwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gZXYuc291cmNlO1xuICAgICAgICAgICAgaWYgKChzb3VyY2UgPT09IHdpbmRvdyB8fCBzb3VyY2UgPT09IG51bGwpICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufVxuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIixcIi8uLi8uLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzXCIpIl19
