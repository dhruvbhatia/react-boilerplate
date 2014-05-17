(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/** @jsx React.DOM */
'use strict';

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
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":14,"buffer":11}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/** @jsx React.DOM */
'use strict';

var CONFIG = require('../config');
require('../util');

/*jshint ignore:start */
var Dashboard = require('./dashboard').Dashboard;
var Login = require('./login').Login;
var MyAccount = require('./my-account').MyAccount;
var EditAccount = require('./my-account').EditAccount;
var Websites = require('./website').Websites;
var AddWebsite = require('./website').AddWebsite;
var EditWebsite = require('./website').EditWebsite;
var Users = require('./users').Users;
/*jshint ignore:end */



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
        return _.contains(pos, route.url) && route.allowParameters;
      }));

    }


    if(_.has(path, 'name')) {
      path = path.name;
    } else {
      path = 'Dashboard';
    }



    if(path === 'Dashboard') {
      router.navigate('');
    }

    document.title = path + ' | ' + CONFIG.WEBSITE_NAME;

    return {path: path, user: undefined, render: false, activeWebsite: undefined, websites: undefined, alert: {'message' : null, 'type' : null}};
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
        return _.contains(pos, route.url) && route.allowParameters;
      }));

    }


    if(_.has(path, 'name')) {
      path = path.name;
    } else {
      path = 'Dashboard';
    }



    if(path === 'Dashboard') {
      router.navigate('');
    }

    this.setPos(pos, path);
    //this.setState({path: path})

    

  },

  componentDidMount: function() {

    _.getSession.call(this);

  },

  setPos: function(url, pos) {

    _.getSession.call(this);

    // Onboarding screen if no websites exist

      document.title = pos + ' | ' + CONFIG.WEBSITE_NAME;
      this.setState({path: pos});

      router.navigate(url);
    

    this.setState({alert: {'message' : null, 'type' : null}});

  },

  setWebsite: function(website) {

    console.log(website);

    // if this is called with 'default' as an argument, then set the active website to the first one in the user's list
    var websites = this.state.websites;

    if(_.isEmpty(websites)) {
      return this.setState({activeWebsite: 'default'});
    }


    var firstWebsite = _.first(websites).id;

    if( (!_.isEmpty(websites)) && (website === 'default')) {

      this.setState({activeWebsite: firstWebsite});

    } else {


      var cookie = JSON.parse($.cookie('application'));

      cookie.activeWebsite = website;

      $.cookie('application', JSON.stringify(cookie), {path: '/', expires: 120});

      this.setState({activeWebsite: website});

    }



  },

  setUser: function(state) {
    this.setState({user: state});

    // Kill cookie if user is logging out
    if(state === undefined) {
      $.removeCookie('application');
    }

  },

  setAlert: function(message, type) {

    this.setState({alert: {'message' : message, 'type' : type}});

  },

  setWebsites: function(websites) {

    this.setState({websites: websites});

  },

  render: function() {
    /*jshint ignore:start */
    // Defer rendering while checking if cookie is valid
    if(this.state.render) {

        // Login view if not logged in
        if(this.state.user === undefined) {

          return (
                  React.DOM.div(null, 
                  Login( {path:this.state.path, setPos:this.setPos, user:this.state.user, setUser:this.setUser, setWebsite:this.setWebsite, websites:this.state.websites, setWebsites:this.setWebsites, alert:this.state.alert, setAlert:this.setAlert} )
                  )
                  );
        } else {

        // User is logged in
        return (
                React.DOM.div(null, 
                TopBar( {path:this.state.path, setPos:this.setPos, user:this.state.user, setUser:this.setUser, activeWebsite:this.state.activeWebsite, setWebsite:this.setWebsite, websites:this.state.websites, setWebsites:this.setWebsites, alert:this.state.alert, setAlert:this.setAlert} ),
                LeftMenu( {routes:this.props.routes, path:this.state.path, setPos:this.setPos, user:this.state.user, setUser:this.setUser, activeWebsite:this.state.activeWebsite, setWebsite:this.setWebsite, websites:this.state.websites, setWebsites:this.setWebsites, alert:this.state.alert, setAlert:this.setAlert} ),
                Content( {path:this.state.path, setPos:this.setPos, user:this.state.user, setUser:this.setUser, activeWebsite:this.state.activeWebsite, setWebsite:this.setWebsite, websites:this.state.websites, setWebsites:this.setWebsites, alert:this.state.alert, setAlert:this.setAlert} )
                )
                );
      }
    } else {

      var loadingMsgStyle = {
       position: 'relative',
       top: '30%'
     };

     return(

            React.DOM.div( {className:"row text-center", style:loadingMsgStyle}, 
            React.DOM.h1(null, "Loading...")
            )
            );

   }

   /*jshint ignore:end */
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
    this.props.setPos('', 'Dashboard');

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
    //this.props.setWebsite('default');

  },

  render: function() {
    /*jshint ignore:start */
    var self = this;
    
    var links = _.map(_.filter(this.props.routes, 'showInMenu'), function(link, key) {

      var classString = '';
      if((self.props.path===link.name) || (_.contains(link.subroutes,self.props.path))){classString = 'active';}

      return React.DOM.li( {key:key}, React.DOM.a( {href:link.url, onClick:self.route, 'data-nav':link.url, className:classString}, link.name));
    });

    return (
            React.DOM.div( {id:"leftMenu", className:"small-4 large-2 columns"}, 
            WebsiteSelector( {activeWebsite:this.props.activeWebsite, setWebsite:this.props.setWebsite, setPos:this.props.setPos, websites:this.props.websites, setWebsites:this.props.setWebsites, alert:this.props.alert, setAlert:this.props.setAlert} ),
            React.DOM.ul( {className:"side-nav"}, links)
            )
            );

    /*jshint ignore:end */
  }

});


var WebsiteSelector = React.createClass({displayName: 'WebsiteSelector',

  websiteSelected: function(e) {

    var websites = this.props.websites;

    if(parseInt(e.target.value) === 0) {

      this.props.setWebsite(undefined);

      // todo: review
      this.props.setPos('websites/add', 'Add Website');

    } else {

      var website = _.first(_.filter(websites, { 'id': parseInt(e.target.value) })).id;

      this.props.setWebsite(website);

      this.props.setPos('', 'Dashboard');

    }

  },

  render: function() {

    /*jshint ignore:start */

    var value = 0;
    // Select default option where value = 0 if website isn't defined
    if(this.props.activeWebsite !== undefined) {
      value = this.props.activeWebsite;
    }

    if($.cookie('application')) {
      var websites = this.props.websites;


      var links = _.map(websites, function(site, key) {

        return (React.DOM.option( {key:site.id, value:site.id}, site.name));

      });

    }

    return (

            React.DOM.div(null, 

            React.DOM.select( {id:"websiteSelector", onChange:this.websiteSelected, value:value}, 

            React.DOM.option( {key:"0", value:"0"}, "Add New Website"),
            links
            )

            )
            );


    /*jshint ignore:end */
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

      var element = eval(this.props.path.replace(' ',''));

      section = (element( {path:this.props.path, setPos:this.props.setPos, user:this.props.user, setUser:this.props.setUser, setWebsite:this.props.setWebsite, activeWebsite:this.props.activeWebsite, websites:this.props.websites, setWebsites:this.props.setWebsites, alert:this.props.alert, setAlert:this.props.setAlert} ));

    } else {
      section = (
                 React.DOM.p(null, this.props.path)
                 );
    }


    var alerts = function() {

      if(!_.isEmpty(self.props.alert.message)) {
        var classString = 'alert-box ' + self.props.alert.type;
        return (

                React.DOM.div( {'data-alert':true, className:classString}, 
                self.props.alert.message
                )
                );
      }

    };

    return (
            React.DOM.div( {id:"content", className:"small-8 large-10 columns"}, 

            alerts(),

            section
            )
            );

  }

});


exports.Layout = Layout;
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components/layout.jsx","/components")
},{"../config":8,"../util":10,"./dashboard":1,"./login":3,"./my-account":4,"./users":6,"./website":7,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":14,"buffer":11}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/** @jsx React.DOM */
'use strict';

var CONFIG = require('../config');

var Login = React.createClass({displayName: 'Login',

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

      /*jshint ignore:start */
      register.first_name = firstName;
      register.last_name = lastName;
      register.email = email;
      register.password = password;
      /*jshint ignore:end */

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

              /*jshint ignore:start */
              if(!_.isUndefined(errors.first_name)) {
                self.setState({registerFirstNameError: errors.first_name.error});
              }

              if(!_.isUndefined(errors.last_name)) {
                self.setState({registerLastNameError: errors.last_name.error});
              }

              if(!_.isUndefined(errors.email)) {
                self.setState({registerEmailError: errors.email.error});
              }

              if(!_.isUndefined(errors.password)) {
                self.setState({registerPasswordError: errors.password.error});
              }
              /*jshint ignore:end */

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
              React.DOM.small( {className:"error"}, field)
              );
    }

  };

  return (
          React.DOM.div( {id:"login", className:"row"}, 

          React.DOM.div( {className:"panel"}, 
          React.DOM.h1(null, "Login to ", CONFIG.WEBSITE_NAME),
          "Please login to access ", CONFIG.WEBSITE_NAME,".",
          React.DOM.hr(null ),
          validationError(this.state.loginServerError),
          React.DOM.form(null, 
          React.DOM.label(null, "Email",
          React.DOM.input( {id:"login_email", type:"email", placeholder:"Email"} ),
          validationError(this.state.loginEmailError)

          ),
          React.DOM.label(null, "Password",
          React.DOM.input( {id:"login_password", type:"password", placeholder:"Password"} ),
          validationError(this.state.loginPasswordError)
          ),
          React.DOM.button( {id:"login_button", onClick:this.login, className:"button radius expand"}, "Login")
          ),

          "Forgot Password",

          React.DOM.hr(null ),
          React.DOM.h1(null, "Don't have an account?"),
          "Register a new account at ", CONFIG.WEBSITE_NAME,".",
          React.DOM.hr(null ),
          validationError(this.state.registerServerError),
          React.DOM.form(null, 

          React.DOM.label(null, "First Name",
          React.DOM.input( {id:"register_firstName", type:"text", placeholder:"First Name"} ),
          validationError(this.state.registerFirstNameError)
          ),

          React.DOM.label(null, "Last Name",
          React.DOM.input( {id:"register_lastName", type:"text", placeholder:"Last Name"} ),
          validationError(this.state.registerLastNameError)
          ),

          React.DOM.label(null, "Email",
          React.DOM.input( {id:"register_email", type:"email", placeholder:"Email"} ),
          validationError(this.state.registerEmailError)
          ),

          React.DOM.label(null, "Password",
          React.DOM.input( {id:"register_password", type:"password", placeholder:"Password"} ),
          validationError(this.state.registerPasswordError)
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
},{"../config":8,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":14,"buffer":11}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/** @jsx React.DOM */
'use strict';

var CONFIG = require('../config');

var MyAccount = React.createClass({displayName: 'MyAccount',

  routeEditAccount: function(e) {
    e.preventDefault();
    console.log("button clicked");
    this.props.setPos("account/edit", "Edit Account");
  },

  render: function() {
    /*jshint ignore:start */
    return (

            React.DOM.div( {className:"text-center"}, 

            React.DOM.img( {className:"th", src:"http://gravatar.com/avatar/f00161c7b35f0084d390f785e015b9ca.jpg"} ),
            React.DOM.h1(null, this.props.user.fullName),
            React.DOM.h3(null, this.props.user.email),
            React.DOM.h4(null, "Registered ", moment(this.props.user.createdAt).fromNow()),

            React.DOM.button( {onClick:this.routeEditAccount, className:"button radius"}, "Edit Account")

            )
            );
    /*jshint ignore:end */
  }

});


var EditAccount = React.createClass({displayName: 'EditAccount',

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
              React.DOM.small( {className:"error"}, self.state.serverError)
              )
    }
  };

  var firstNameError = function() {
    if(self.state.firstNameError !== undefined) {
      return (
              React.DOM.small( {className:"error"}, self.state.firstNameError)
              )
    }
  };

  var lastNameError = function() {
    if(self.state.lastNameError !== undefined) {
      return (
              React.DOM.small( {className:"error"}, self.state.lastNameError)
              )
    }
  };

  var emailError = function() {
    if(self.state.emailError !== undefined) {
      return (
              React.DOM.small( {className:"error"}, self.state.emailError)
              )
    }
  };

  var passwordError = function() {
    if(self.state.passwordError !== undefined) {
      return (
              React.DOM.small( {className:"error"}, self.state.passwordError)
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
          serverError(),
          React.DOM.label(null, "First Name",
          React.DOM.input( {id:"firstName", type:"text", placeholder:"First Name", defaultValue:this.props.user.firstName} ),
          firstNameError()
          ),

          React.DOM.label(null, "Last Name",
          React.DOM.input( {id:"lastName", type:"text", placeholder:"Last Name", defaultValue:this.props.user.lastName} ),
          lastNameError()
          ),

          React.DOM.label(null, "Email Address",
          React.DOM.input( {id:"email", type:"text", placeholder:"Email Address", defaultValue:this.props.user.email} ),
          emailError()
          ),

          React.DOM.label(null, "Password",
          React.DOM.input( {id:"password", type:"password", placeholder:"Password"} ),
          passwordError()
          )

          ),

          React.DOM.button( {onClick:this.saveUser, className:"button radius expand"}, "Update")
          )
          )



          )
          )

/*jshint ignore:end */
}

});


exports.MyAccount = MyAccount;
exports.EditAccount = EditAccount;
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components/my-account.jsx","/components")
},{"../config":8,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":14,"buffer":11}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/** @jsx React.DOM */
'use strict';

var CONFIG = require('../config');
var Layout = require("./layout").Layout;

var Router = Backbone.Router.extend({

  // Routes are defined in CONFIG.ROUTES, so send any path to showLayout
  routes : {
    "*splat" : "showLayout"
  },
  showLayout : function(pos) {
    console.log(pos);

    /*jshint ignore:start */

    React.renderComponent(
                          Layout( {routes:CONFIG.ROUTES} ),
                          document.getElementById('application')
                          );
    /*jshint ignore:end */
  }
});

window.router = new Router();

Backbone.history.start({pushState: true});
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components/router.jsx","/components")
},{"../config":8,"./layout":2,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":14,"buffer":11}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/** @jsx React.DOM */
'use strict';

var Users = React.createClass({displayName: 'Users',

  render: function() {
    
    return (
            React.DOM.div(null, 
            React.DOM.p(null, this.props.path),
            React.DOM.p(null, "Blah")
            )
            );

  }

});

exports.Users = Users;
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/components/users.jsx","/components")
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":14,"buffer":11}],7:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/** @jsx React.DOM */
'use strict';

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
             React.DOM.td(null, website.contact_count),
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
            React.DOM.th(null, "Users"),
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

    if(this.props.activeWebsite !== website_id) {
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
  .query({id: this.props.activeWebsite})
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


  var activeWebsite = _.find(websites, { "id" : parseInt(JSON.parse(cookie).activeWebsite)});
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

  updated_website.id = activeWebsite.id;
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


  var activeWebsite = _.find(websites, { "id" : parseInt(JSON.parse(cookie).activeWebsite)});
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


  if(!_.isEmpty(activeWebsite)) {
    if(activeWebsite.id === parseInt(website_id)) {

      return (

              React.DOM.div( {className:"text-center"}, 

              React.DOM.ul( {className:"breadcrumbs"}, 
              React.DOM.li(null, React.DOM.a( {onClick:this.routeWebsites}, "Websites")),
              React.DOM.li( {className:"current"}, "Edit Website"),
              React.DOM.li( {className:"current"}, activeWebsite.name)
              ),

              React.DOM.h2(null, "Editing ", activeWebsite.name),

              React.DOM.div( {className:"row"}, 
              React.DOM.form(null, 
              React.DOM.fieldset(null, 
              React.DOM.legend(null, "Update Details"),
              server_error(),
              React.DOM.label(null, "Website Name",
              React.DOM.input( {id:"name", type:"text", placeholder:"Website Name", defaultValue:activeWebsite.name} ),
              name_error()
              ),

              React.DOM.label(null, "URL",
              React.DOM.input( {id:"url", type:"text", placeholder:"Website URL", defaultValue:activeWebsite.url} ),
              url_error()
              ),

              React.DOM.label(null, "Sender Name",
              React.DOM.input( {id:"sender_name", type:"text", placeholder:"Sender Name", defaultValue:activeWebsite.sender_name} ),
              sender_name_error()
              ),

              React.DOM.label(null, "Sender Email",
              React.DOM.input( {id:"sender_email", type:"text", placeholder:"Sender Email", defaultValue:activeWebsite.sender_email} ),
              sender_email_error()
              )

              ),

              React.DOM.button( {onClick:this.saveWebsite, className:"button radius expand"}, "Update")
              ),

              React.DOM.hr(null ),
              React.DOM.h3(null, "Permenantly Delete Website"),
              
              React.DOM.p(null, "Click the button below to ", React.DOM.strong(null, "permenantly remove the ", activeWebsite.name, " website and all of its data"), " from the system."),
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
},{"../config":8,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":14,"buffer":11}],8:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 *
 * This file is used to configure settings for the application.
 *
 * @author Dhruv Bhatia <dhruv@dhruvbhatia.com>
 *
 */
module.exports = {

  WEBSITE_NAME : 'React Demo',

  ROUTES : [
    {name: 'Dashboard', url: '', showInMenu: true, allowParameters: false},
    {name: 'Users', url: 'users', showInMenu: true, allowParameters: false},
    {name: 'Websites', url: 'websites', subroutes: 'Add Website, Edit Website', showInMenu: true, allowParameters: false},
    {name: 'Add Website', url: 'websites/add', showInMenu: false, allowParameters: false},
    {name: 'Edit Website', url: 'websites/edit', showInMenu: false, allowParameters: true},
    {name: 'Campaigns', url: 'campaigns', showInMenu: true, allowParameters: false},
    {name: 'My Account', url: 'account', subroutes: 'Edit Account', showInMenu: true, allowParameters: false},
    {name: 'Edit Account', url: 'account/edit', showInMenu: false, allowParameters: false},
    {name: 'Support', url: 'support', showInMenu: true, allowParameters: false}
  ],

  URLS : {

    'validate' : 'http://192.168.178.20:9000/api/v1/auth/validate/',
    'updateWebsite' : 'http://192.168.178.20:9000/api/v1/website/update',
    'addWebsite' : 'http://192.168.178.20:9000/api/v1/website/add',
    'deleteWebsite' : 'http://192.168.178.20:9000/api/v1/website/delete',
    'login' : 'http://192.168.178.20:9000/api/v1/auth/login',
    'register' : 'http://192.168.178.20:9000/api/v1/account/add',
    'updateAccount' : 'http://192.168.178.20:9000/api/v1/account/update'

  },


  MODE : 'Debug'

};
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/config.js","/")
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":14,"buffer":11}],9:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';




$( document ).ready(function() {

  require("./components/router");
  require("./components/layout").Layout;

  $(document).foundation();

});
}).call(this,require("/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9947d909.js","/")
},{"./components/layout":2,"./components/router":5,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":14,"buffer":11}],10:[function(require,module,exports){
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

            var activeWebsite = undefined;

            if (!_.isEmpty(user_websites)) {
              // set active website to the last selected website in the cookie, else first website in the user's list
              activeWebsite = JSON.parse(cookie).activeWebsite;



              if (_.isEmpty(_.find(user_websites, {
                "id": parseInt(activeWebsite)
              }))) {
                console.log(activeWebsite)
                activeWebsite = _.first(user_websites).id;
              }

            }

            $.cookie("application", JSON.stringify({
              "sessionId": sessionId,
              "activeWebsite": activeWebsite
            }), {
              path: "/",
              expires: 120
            });


            self.setWebsite(activeWebsite);

            self.setState({
              user: user,
              activeWebsite: activeWebsite,
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
},{"./config":8,"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":14,"buffer":11}],11:[function(require,module,exports){
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
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":14,"base64-js":12,"buffer":11,"ieee754":13}],12:[function(require,module,exports){
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
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":14,"buffer":11}],13:[function(require,module,exports){
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
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":14,"buffer":11}],14:[function(require,module,exports){
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
},{"/Users/dhruvbhatia/Documents/projects/react-boilerplate/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":14,"buffer":11}]},{},[9])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL2FwcC9zY3JpcHRzL2NvbXBvbmVudHMvZGFzaGJvYXJkLmpzeCIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvYXBwL3NjcmlwdHMvY29tcG9uZW50cy9sYXlvdXQuanN4IiwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9hcHAvc2NyaXB0cy9jb21wb25lbnRzL2xvZ2luLmpzeCIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvYXBwL3NjcmlwdHMvY29tcG9uZW50cy9teS1hY2NvdW50LmpzeCIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvYXBwL3NjcmlwdHMvY29tcG9uZW50cy9yb3V0ZXIuanN4IiwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9hcHAvc2NyaXB0cy9jb21wb25lbnRzL3VzZXJzLmpzeCIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvYXBwL3NjcmlwdHMvY29tcG9uZW50cy93ZWJzaXRlLmpzeCIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvYXBwL3NjcmlwdHMvY29uZmlnLmpzIiwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9hcHAvc2NyaXB0cy9mYWtlXzk5NDdkOTA5LmpzIiwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9hcHAvc2NyaXB0cy91dGlsLmpzIiwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qcyIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9tQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKiogQGpzeCBSZWFjdC5ET00gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIERhc2hib2FyZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ0Rhc2hib2FyZCcsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuRE9NLmRpdihudWxsLCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5wKG51bGwsIHRoaXMucHJvcHMucGF0aCksXG5cbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRG9uZWMgbnVsbGEgbmlzbCwgZmVybWVudHVtIHNpdCBhbWV0IGp1c3RvIHZlbCwgY29tbW9kbyBoZW5kcmVyaXQgbWV0dXMuIFF1aXNxdWUgZGlnbmlzc2ltIGV1IHNhcGllbiB2ZWwgb3JuYXJlLiBOdWxsYSB2dWxwdXRhdGUgZHVpIGV0IGxvcmVtIHZ1bHB1dGF0ZSBmZXJtZW50dW0uIE1hdXJpcyB2dWxwdXRhdGUgZmFjaWxpc2lzIHVybmEgdmVsIGZyaW5naWxsYS4gU3VzcGVuZGlzc2UgY29uZ3VlIGdyYXZpZGEgcmlzdXMgZWdldCBhbGlxdWV0LiBDcmFzIGEgaW1wZXJkaWV0IG51bGxhLCBzaXQgYW1ldCBjb252YWxsaXMgb2Rpby4gQWVuZWFuIGVyYXQgZXJhdCwgZWxlbWVudHVtIHNpdCBhbWV0IGFyY3UgcXVpcywgYWNjdW1zYW4gY29tbW9kbyBzYXBpZW4uIE1hZWNlbmFzIGxhY2luaWEgZXN0IHF1aXMgbWFzc2EgdWx0cmljaWVzIHVsdHJpY2llcy4gRG9uZWMgbWF1cmlzIG1pLCBhY2N1bXNhbiBhYyBlcmF0IGV0LCBzb2xsaWNpdHVkaW4gZnJpbmdpbGxhIG1hdXJpcy4gTnVuYyB2YXJpdXMgZmVybWVudHVtIGNvbnNlY3RldHVyLiBTdXNwZW5kaXNzZSBtYXR0aXMgZHVpIG5lYyBlZ2VzdGFzIHVsdHJpY2VzLiBTZWQgc29kYWxlcyBpZCB0dXJwaXMgdXQgc2FnaXR0aXMuIFN1c3BlbmRpc3NlIGludGVyZHVtIHRyaXN0aXF1ZSBlbGl0LiBQaGFzZWxsdXMgc2l0IGFtZXQgbWF1cmlzIGRpYW0uXCIrJyAnK1xuXG5cIkNyYXMgdmVsIHBlbGxlbnRlc3F1ZSBuaXNpLCBub24gYWxpcXVhbSBlbmltLiBQcmFlc2VudCByaG9uY3VzIHF1aXMgbGFjdXMgZXUgdml2ZXJyYS4gVmVzdGlidWx1bSBzb2xsaWNpdHVkaW4gc2l0IGFtZXQgbnVuYyBhIHZ1bHB1dGF0ZS4gSW4gZXQgZGlnbmlzc2ltIHJpc3VzLiBJbnRlZ2VyIHN1c2NpcGl0IGF1Z3VlIHNpdCBhbWV0IGVzdCBzb2xsaWNpdHVkaW4sIGVnZXQgcGxhY2VyYXQgbGVjdHVzIGZyaW5naWxsYS4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLiBQZWxsZW50ZXNxdWUgbG9ib3J0aXMsIG1pIGV0IGFkaXBpc2NpbmcgcGhhcmV0cmEsIGVyb3Mgc2VtIHNjZWxlcmlzcXVlIHRlbGx1cywgZXUgdml2ZXJyYSBzZW0ganVzdG8gdmVzdGlidWx1bSB0ZWxsdXMuIFByb2luIHBoYXJldHJhIG1ldHVzIGlkIGF1Z3VlIGltcGVyZGlldCwgZWdldCB1bHRyaWNlcyBhcmN1IGNvbW1vZG8uIEV0aWFtIGR1aSBsaWd1bGEsIGFjY3Vtc2FuIGF1Y3RvciBhbGlxdWFtIG5lYywgdHJpc3RpcXVlIGF0IGVzdC4gU2VkIGVnZXQgdmVuZW5hdGlzIHRvcnRvciwgcXVpcyBwdWx2aW5hciBzZW0uIFBoYXNlbGx1cyBpbiBsaWd1bGEgbWFzc2EuIE51bGxhbSBhIGVyb3MgZXQgbGFjdXMgZGFwaWJ1cyBwb3N1ZXJlLlwiKycgJytcblxuXCJNb3JiaSBpZCBlZ2VzdGFzIGRvbG9yLiBEb25lYyBub24gcG9zdWVyZSBtYXNzYS4gSW4gdmFyaXVzIGhlbmRyZXJpdCBhdWd1ZSwgcXVpcyBmZXVnaWF0IGRpYW0gcHVsdmluYXIgZWdldC4gTnVuYyBub24gZ3JhdmlkYSBsYWN1cy4gRHVpcyBpYWN1bGlzIGp1c3RvIGFjIGVuaW0gdm9sdXRwYXQgY29tbW9kby4gTW9yYmkgc2FnaXR0aXMgb3JjaSBpbiBuaWJoIGJsYW5kaXQsIGFjIHB1bHZpbmFyIG5pYmggY29udmFsbGlzLiBQcm9pbiBhYyBuaXNsIGR1aS4gTmFtIGNvbmRpbWVudHVtIGN1cnN1cyBvZGlvIHNpdCBhbWV0IHRlbXB1cy4gQWVuZWFuIHZlc3RpYnVsdW0gZWxpdCBhIGxvcmVtIGRpZ25pc3NpbSwgaW4gYWRpcGlzY2luZyBhcmN1IHJ1dHJ1bS4gVmVzdGlidWx1bSBub24gdmFyaXVzIG5pc2wsIGEgcG9ydGEgZWxpdC5cIisnICcrXG5cblwiTWFlY2VuYXMgc2l0IGFtZXQgZXJvcyBlZ2V0IGR1aSBibGFuZGl0IGNvbnNlcXVhdC4gRG9uZWMgZXQgc29sbGljaXR1ZGluIHJpc3VzLiBWaXZhbXVzIGFjY3Vtc2FuIGFudGUgdmVsIG1hdHRpcyB2ZWhpY3VsYS4gVmVzdGlidWx1bSBlZ2V0IGRvbG9yIGEgdmVsaXQgdWx0cmljaWVzIHVsdHJpY2llcy4gQ3VyYWJpdHVyIHR1cnBpcyBzYXBpZW4sIHRlbXB1cyBldSBjb25zZWN0ZXR1ciBhLCB0ZW1wdXMgc2VkIGxhY3VzLiBQcm9pbiBzb2RhbGVzIGlhY3VsaXMgbG9yZW0sIGJpYmVuZHVtIGxvYm9ydGlzIG1hdXJpcyBpbXBlcmRpZXQgdmVsLiBNYWVjZW5hcyBhIGJpYmVuZHVtIGVyYXQuIE1vcmJpIHBlbGxlbnRlc3F1ZSBwdXJ1cyBzaXQgYW1ldCBlbmltIHB1bHZpbmFyIHVsbGFtY29ycGVyLiBOdW5jIHZpdGFlIGN1cnN1cyBqdXN0by4gU3VzcGVuZGlzc2UgZWdlc3RhcyBuaWJoIGVnZXQgbmVxdWUgdnVscHV0YXRlIG1vbGVzdGllLiBBZW5lYW4gc2l0IGFtZXQgdmVsaXQgYSBmZWxpcyBwZWxsZW50ZXNxdWUgY29tbW9kbyBldSB1dCBuaWJoLiBQZWxsZW50ZXNxdWUgYXQgdmVoaWN1bGEgbWV0dXMuIE1vcmJpIGFsaXF1ZXQganVzdG8gbm9uIHRlbGx1cyBwcmV0aXVtIGJpYmVuZHVtLiBNYWVjZW5hcyBwb3J0dGl0b3IgZXQgdG9ydG9yIGlkIGludGVyZHVtLiBDcmFzIGZlcm1lbnR1bSB0ZWxsdXMgbmVjIHBvcnR0aXRvciBmZXVnaWF0LiBWZXN0aWJ1bHVtIGZhY2lsaXNpcyBuZWMgZG9sb3IgdmVsIHZvbHV0cGF0LlwiKycgJytcblxuXCJBZW5lYW4gY29tbW9kbyBudW5jIGVyb3MsIGEgcGhhcmV0cmEgc2VtIGF1Y3RvciBuZWMuIFF1aXNxdWUgYXQgdWxsYW1jb3JwZXIgbGVjdHVzLCBub24gc2FnaXR0aXMgZXN0LiBNb3JiaSBzYWdpdHRpcyBiaWJlbmR1bSBlbmltIG5vbiBncmF2aWRhLiBTZWQgYWMgc2VtIHZpdmVycmEsIGNvbW1vZG8gZG9sb3IgdXQsIHRlbXB1cyBsZWN0dXMuIE51bmMgc2l0IGFtZXQgYWxpcXVhbSBuaWJoLiBQcmFlc2VudCB1bHRyaWNlcyB0b3J0b3IgYXQgdmVsaXQgaW50ZXJkdW0gdml2ZXJyYS4gRHVpcyBzdXNjaXBpdCBlcmF0IGFjIHR1cnBpcyBwaGFyZXRyYSBiaWJlbmR1bS4gVml2YW11cyBtb2xlc3RpZSBuZWMgbGVjdHVzIHNjZWxlcmlzcXVlIGNvbnZhbGxpcy4gQ3VyYWJpdHVyIG1ldHVzIHB1cnVzLCBmYXVjaWJ1cyB0ZW1wb3IgbmVxdWUgYWMsIGNvbnZhbGxpcyBsYWNpbmlhIHRvcnRvci4gTW9yYmkgaW4gbmVxdWUgcHJldGl1bSwgcGxhY2VyYXQgb3JjaSBpbnRlcmR1bSwgb3JuYXJlIHNhcGllbi4gUXVpc3F1ZSBvcm5hcmUgZGlhbSBhYyBlcm9zIG1vbGVzdGllLCB1dCBwZWxsZW50ZXNxdWUgZW5pbSBlbGVpZmVuZC5cIisnICcrXG5cblwiSW50ZWdlciBkYXBpYnVzLCBzYXBpZW4gaW4gc3VzY2lwaXQgdHJpc3RpcXVlLCByaXN1cyBlcm9zIHRlbXBvciBsaWd1bGEsIGEgbWFsZXN1YWRhIHRlbGx1cyBlbGl0IGVnZXQgZmVsaXMuIE1vcmJpIHZpdmVycmEgZWxpdCBsZWN0dXMuIE51bGxhIGVsZWlmZW5kIGxlbyBhbnRlLCBzaXQgYW1ldCBzZW1wZXIgbmliaCBhdWN0b3Igbm9uLiBWZXN0aWJ1bHVtIGxhb3JlZXQgYW50ZSB2aXRhZSBqdXN0byBmcmluZ2lsbGEsIGZhY2lsaXNpcyBwdWx2aW5hciBudW5jIGRpZ25pc3NpbS4gRG9uZWMgdmVuZW5hdGlzIG5pc2wgYSBuZXF1ZSBwdWx2aW5hciB2aXZlcnJhLiBQaGFzZWxsdXMgYWMgYW50ZSBldCBuaXNpIHB1bHZpbmFyIGZyaW5naWxsYS4gTnVuYyBkaWN0dW0gZXVpc21vZCBpcHN1bSBzaXQgYW1ldCBlbGVtZW50dW0uXCIrJyAnK1xuXG5cIkFlbmVhbiBlbGVpZmVuZCBub24gbmlzaSBub24gdmVuZW5hdGlzLiBTZWQgYWMgdHVycGlzIGF0IG5pc2kgc29kYWxlcyBoZW5kcmVyaXQgdml0YWUgcXVpcyB2ZWxpdC4gTWF1cmlzIGVnZXQgdGluY2lkdW50IGVyb3MsIG5lYyBtb2xlc3RpZSBudWxsYS4gUHJvaW4gZmF1Y2lidXMgZGljdHVtIHZlc3RpYnVsdW0uIFNlZCBhIG5lcXVlIHF1YW0uIFBlbGxlbnRlc3F1ZSBhbGlxdWV0IGxvYm9ydGlzIGp1c3RvLCB2aXRhZSBhbGlxdWFtIHZlbGl0IGNvbmd1ZSBhLiBTdXNwZW5kaXNzZSB2b2x1dHBhdCBncmF2aWRhIGFyY3UgdmVsIGV1aXNtb2QuXCIrJyAnK1xuXG5cIlZpdmFtdXMgaW4gdXJuYSBldCBsZWN0dXMgcG9zdWVyZSBzdXNjaXBpdC4gQ3VyYWJpdHVyIHVsdHJpY2llcyBlcmF0IGRpYW0sIHZlbCB0cmlzdGlxdWUgbmVxdWUgdGVtcHVzIGx1Y3R1cy4gU2VkIHRlbXB1cyBpYWN1bGlzIG1pIGluIHNvbGxpY2l0dWRpbi4gTnVsbGFtIHZlc3RpYnVsdW0gcXVhbSBsZW8sIHNlZCBpbXBlcmRpZXQgbmlzaSBjb25ndWUgYXQuIE1hdXJpcyB2b2x1dHBhdCBhcmN1IHNlZCB1cm5hIGhlbmRyZXJpdCwgc2l0IGFtZXQgY29tbW9kbyBhcmN1IHNjZWxlcmlzcXVlLiBJbnRlZ2VyIG1vbGVzdGllIGN1cnN1cyBtaSBpZCBvcm5hcmUuIFBoYXNlbGx1cyB1dCBtYWxlc3VhZGEgYXJjdSwgc2l0IGFtZXQgZGFwaWJ1cyBvZGlvLiBQaGFzZWxsdXMgaW4gY29udmFsbGlzIGp1c3RvLiBFdGlhbSBoZW5kcmVyaXQgY29tbW9kbyBudWxsYSBhYyB2ZWhpY3VsYS4gRHVpcyBsb3JlbSBlc3QsIHNvZGFsZXMgYXQgdmVuZW5hdGlzIG5lYywgY29tbW9kbyBhYyBuZXF1ZS4gQWxpcXVhbSB0aW5jaWR1bnQgZmFjaWxpc2lzIG51bmMuIE51bGxhbSBydXRydW0gYmliZW5kdW0gb3JjaSwgc2l0IGFtZXQgc2VtcGVyIHRvcnRvciBjb25zZWN0ZXR1ciBhdC5cIisnICcrXG5cblwiRG9uZWMgaW4gdXJuYSBsYW9yZWV0LCB1bGxhbWNvcnBlciBsaWJlcm8gZWdldCwgY29udmFsbGlzIGRvbG9yLiBOdWxsYW0gc29kYWxlcyBjb21tb2RvIGxlY3R1cyBuZWMgZGljdHVtLiBTdXNwZW5kaXNzZSBldCBmYWNpbGlzaXMgbmVxdWUsIHF1aXMgdWxsYW1jb3JwZXIgbGliZXJvLiBOdWxsYW0gaW4gc2FwaWVuIG1hdHRpcywgdm9sdXRwYXQgYXJjdSBldSwgdml2ZXJyYSBhdWd1ZS4gTnVsbGFtIGRpY3R1bSBsb3JlbSB1dCBvcmNpIGVsZWlmZW5kLCBzZW1wZXIgZ3JhdmlkYSBuaXNsIGNvbmd1ZS4gQWVuZWFuIHRlbXBvciBydXRydW0ganVzdG8gdml0YWUgbGFjaW5pYS4gVXQgc3VzY2lwaXQgaXBzdW0gYSBuaXNpIHVsdHJpY2llcyBtb2xsaXMuIE1hZWNlbmFzIGFjIGF1Y3RvciBqdXN0by4gRnVzY2Ugc2l0IGFtZXQgaXBzdW0gdm9sdXRwYXQsIGhlbmRyZXJpdCBkb2xvciBwb3J0dGl0b3IsIHJob25jdXMgbmVxdWUuIERvbmVjIHF1aXMgY29uZGltZW50dW0gZW5pbS4gUHJhZXNlbnQgdml0YWUgbGVjdHVzIG5lYyBkb2xvciB2ZXN0aWJ1bHVtIG1hdHRpcy5cIisnICcrXG5cblwiSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLiBFdGlhbSBwaGFyZXRyYSB2aXZlcnJhIGVyb3MgcXVpcyBkaWduaXNzaW0uIEZ1c2NlIHZlbCBkdWkgbWF1cmlzLiBQZWxsZW50ZXNxdWUgbW9sbGlzIGFudGUgYWMgZmVybWVudHVtIHBlbGxlbnRlc3F1ZS4gUHJvaW4gdWx0cmljZXMsIG51bGxhIHV0IHZlbmVuYXRpcyBkYXBpYnVzLCBtaSB2ZWxpdCBjb21tb2RvIHB1cnVzLCBpbiBpbXBlcmRpZXQgb2RpbyBtYXVyaXMgbmVjIGZlbGlzLiBQcmFlc2VudCBzY2VsZXJpc3F1ZSBlcm9zIGlkIHNvbGxpY2l0dWRpbiBsYW9yZWV0LiBQcmFlc2VudCB1bHRyaWNpZXMsIHB1cnVzIHNpdCBhbWV0IGJpYmVuZHVtIGltcGVyZGlldCwgbGlndWxhIGFyY3UgaW1wZXJkaWV0IGp1c3RvLCBhIHVsbGFtY29ycGVyIHR1cnBpcyBsZWN0dXMgc2VkIGRvbG9yLiBNYWVjZW5hcyBuZWMgdGVtcHVzIG1hdXJpcywgcXVpcyBhY2N1bXNhbiBuaWJoLlwiKycgJytcblxuXCJWZXN0aWJ1bHVtIGVsZWlmZW5kIGJsYW5kaXQgbG9ib3J0aXMuIFNlZCBpbnRlcmR1bSBzZW1wZXIgc2FwaWVuLCBldCBsYWNpbmlhIGR1aSBzdXNjaXBpdCBzaXQgYW1ldC4gSW50ZWdlciBlbGVtZW50dW0gZmVsaXMgdXQgZGlhbSB0ZW1wdXMsIGFjIGZhY2lsaXNpcyBlcm9zIHBvc3VlcmUuIE51bGxhbSBwbGFjZXJhdCB0cmlzdGlxdWUgbWV0dXMsIGVnZXQgdmVuZW5hdGlzIGF1Z3VlIG1vbGVzdGllIGVnZXQuIFBlbGxlbnRlc3F1ZSBoYWJpdGFudCBtb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzLiBVdCBlZ2VzdGFzIG1hdXJpcyBuZWMgbGFjdXMgdmVoaWN1bGEsIHB1bHZpbmFyIGZyaW5naWxsYSBsZWN0dXMgdGVtcG9yLiBTZWQgdXQgYW50ZSBhcmN1LlwiKycgJytcblxuXCJVdCBjb252YWxsaXMgY29tbW9kbyBpcHN1bSBxdWlzIHRlbXB1cy4gU2VkIHBoYXJldHJhIHZlbGl0IGVnZXQgc29sbGljaXR1ZGluIHByZXRpdW0uIEZ1c2NlIG1vbGVzdGllIGF0IHB1cnVzIGEgc2NlbGVyaXNxdWUuIE51bGxhIGZhY2lsaXNpLiBNb3JiaSBmZWxpcyBuZXF1ZSwgZ3JhdmlkYSBzZWQgY29uZ3VlIHNlZCwgZGFwaWJ1cyB2ZWwgYXVndWUuIFZpdmFtdXMgdml2ZXJyYSBjb25kaW1lbnR1bSBsdWN0dXMuIFV0IGF0IHRlbGx1cyBuZWMgYXVndWUgY29udmFsbGlzIGNvbmd1ZS4gTWFlY2VuYXMgcGxhY2VyYXQgdWx0cmljZXMgbG9yZW0sIG5vbiBjb252YWxsaXMgbmliaCBtYWxlc3VhZGEgdmVsLiBQcmFlc2VudCBub24gaGVuZHJlcml0IHZlbGl0LCBzaXQgYW1ldCBydXRydW0gbWFzc2EuIEN1cmFiaXR1ciBxdWlzIGVsZW1lbnR1bSBlc3QuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gRHVpcyBwdWx2aW5hciB0ZWxsdXMgYSBjb25zZXF1YXQgYXVjdG9yLiBTZWQgaWFjdWxpcyBzZWQgbGlndWxhIHF1aXMgaGVuZHJlcml0LiBGdXNjZSBjb25zZXF1YXQgZmFjaWxpc2lzIGVyb3MsIGluIHRlbXB1cyB0ZWxsdXMgdmVoaWN1bGEgZXUuXCIrJyAnK1xuXG5cIkR1aXMgY29uZGltZW50dW0gYXQgbWF1cmlzIHF1aXMgaW50ZXJkdW0uIFBoYXNlbGx1cyBpbXBlcmRpZXQgc29kYWxlcyBtYXNzYSwgcXVpcyBsb2JvcnRpcyBzZW0gYmxhbmRpdCBuZWMuIEFsaXF1YW0gbmVjIHNhcGllbiBtYXVyaXMuIEFsaXF1YW0gZ3JhdmlkYSBjdXJzdXMgZG9sb3Igdml0YWUgaW50ZXJkdW0uIENyYXMgYXQgdWx0cmljZXMgbWksIHV0IGxhY2luaWEgcHVydXMuIE1vcmJpIGdyYXZpZGEgc2FwaWVuIGluIGxlY3R1cyBydXRydW0gdmVoaWN1bGEuIFNlZCB2b2x1dHBhdCBjb25kaW1lbnR1bSBsaWd1bGEuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gUGhhc2VsbHVzIGFsaXF1ZXQgdmVsaXQgZmVsaXMsIG5vbiBmYXVjaWJ1cyBudW5jIGhlbmRyZXJpdCBub24uIEZ1c2NlIHNlbXBlciB1cm5hIGlkIG5pYmggbW9sbGlzLCBzaXQgYW1ldCB2aXZlcnJhIG5pYmggZGljdHVtLiBTZWQgZGlnbmlzc2ltIHZlbCBsb3JlbSB2ZWwgY29uc2VxdWF0LiBTdXNwZW5kaXNzZSBjb252YWxsaXMgbmliaCB0b3J0b3IsIGEgc3VzY2lwaXQgbWV0dXMgdGluY2lkdW50IGEuXCIrJyAnK1xuXG5cIlZpdmFtdXMgaW50ZXJkdW0gc2VkIGRpYW0gdml0YWUgZXVpc21vZC4gU2VkIGRpZ25pc3NpbSBhIG1hdXJpcyBub24gY3Vyc3VzLiBRdWlzcXVlIHZlc3RpYnVsdW0sIG51bmMgZXUgcHJldGl1bSBmcmluZ2lsbGEsIGxhY3VzIGFudGUgZmV1Z2lhdCBuaWJoLCBldSBkaWN0dW0gc2FwaWVuIHZlbGl0IGluIGR1aS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQ3VyYWJpdHVyIHF1aXMgc2VtIG1hc3NhLiBTdXNwZW5kaXNzZSB2ZWwgYmliZW5kdW0gbWFzc2EsIGEgbWF0dGlzIGR1aS4gUHJhZXNlbnQgbWFzc2EgZXJvcywgcHJldGl1bSBxdWlzIHZlaGljdWxhIHF1aXMsIGJsYW5kaXQgc2l0IGFtZXQgbGliZXJvLiBFdGlhbSBzZWQgZG9sb3IgbWkuIFBlbGxlbnRlc3F1ZSBmcmluZ2lsbGEgdGVtcHVzIG51bGxhLCBhdCBoZW5kcmVyaXQgbWFnbmEgdml2ZXJyYSB1dC4gUHJhZXNlbnQgZGFwaWJ1cyB0ZW1wb3Igb3JjaSwgdXQgdmVoaWN1bGEganVzdG8gbHVjdHVzIHNpdCBhbWV0LiBGdXNjZSBtYXR0aXMgZmVsaXMgdHVycGlzLCBhdCBydXRydW0gZXJvcyBjdXJzdXMgZXQuXCIrJyAnK1xuXG5cIlN1c3BlbmRpc3NlIHNlZCBzZW1wZXIgbGFjdXMuIEFlbmVhbiBsb2JvcnRpcyBwZWxsZW50ZXNxdWUgbWF0dGlzLiBGdXNjZSBsdWN0dXMgc2FnaXR0aXMgbGVvLCBhYyBjb21tb2RvIG1hZ25hIHBoYXJldHJhIHV0LiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gRG9uZWMgaW4gb3JuYXJlIHNlbSwgcnV0cnVtIHVsbGFtY29ycGVyIG1hZ25hLiBOdWxsYSBudWxsYSBuaWJoLCB1bGxhbWNvcnBlciBpbiBsYWN1cyBhLCBzb2RhbGVzIGdyYXZpZGEgbGliZXJvLiBJbnRlcmR1bSBldCBtYWxlc3VhZGEgZmFtZXMgYWMgYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMuIFZlc3RpYnVsdW0gYWNjdW1zYW4gaWFjdWxpcyBlcm9zIGluIGFsaXF1YW0uIFByYWVzZW50IGxpZ3VsYSByaXN1cywgZmFjaWxpc2lzIHNlZCBwaGFyZXRyYSBpYWN1bGlzLCBsb2JvcnRpcyBhdCBtaS4gQ3VyYWJpdHVyIG9ybmFyZSBlZ2VzdGFzIGVzdCwgZXUgdWx0cmljaWVzIHJpc3VzLiBDcmFzIG9ybmFyZSB2b2x1dHBhdCByaXN1cyBldWlzbW9kIHRyaXN0aXF1ZS4gTWF1cmlzIGNvbmRpbWVudHVtIGVnZXQgbnVsbGEgdml0YWUgdm9sdXRwYXQuIEN1cmFiaXR1ciB2ZWwgcHVydXMgYWMgZXJhdCBjb21tb2RvIHZpdmVycmEuXCJcblxuICAgICAgKVxuICAgICk7XG4gIH1cblxufSk7XG5cbmV4cG9ydHMuRGFzaGJvYXJkID0gRGFzaGJvYXJkO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2NvbXBvbmVudHMvZGFzaGJvYXJkLmpzeFwiLFwiL2NvbXBvbmVudHNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKiogQGpzeCBSZWFjdC5ET00gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIENPTkZJRyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xucmVxdWlyZSgnLi4vdXRpbCcpO1xuXG4vKmpzaGludCBpZ25vcmU6c3RhcnQgKi9cbnZhciBEYXNoYm9hcmQgPSByZXF1aXJlKCcuL2Rhc2hib2FyZCcpLkRhc2hib2FyZDtcbnZhciBMb2dpbiA9IHJlcXVpcmUoJy4vbG9naW4nKS5Mb2dpbjtcbnZhciBNeUFjY291bnQgPSByZXF1aXJlKCcuL215LWFjY291bnQnKS5NeUFjY291bnQ7XG52YXIgRWRpdEFjY291bnQgPSByZXF1aXJlKCcuL215LWFjY291bnQnKS5FZGl0QWNjb3VudDtcbnZhciBXZWJzaXRlcyA9IHJlcXVpcmUoJy4vd2Vic2l0ZScpLldlYnNpdGVzO1xudmFyIEFkZFdlYnNpdGUgPSByZXF1aXJlKCcuL3dlYnNpdGUnKS5BZGRXZWJzaXRlO1xudmFyIEVkaXRXZWJzaXRlID0gcmVxdWlyZSgnLi93ZWJzaXRlJykuRWRpdFdlYnNpdGU7XG52YXIgVXNlcnMgPSByZXF1aXJlKCcuL3VzZXJzJykuVXNlcnM7XG4vKmpzaGludCBpZ25vcmU6ZW5kICovXG5cblxuXG52YXIgTGF5b3V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnTGF5b3V0JyxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblxuICAgIC8vIHNldCB0aGUgcHVzaFN0YXRlIHRvIGJsYW5rIGlmIHRoZSB1c2VyIGFycml2ZXMgdG8gdGhlIGRhc2hib2FyZCwgZWl0aGVyIGJ5IGdvaW5nIHRvIHRoZSByb290IG9yIGVudGVyaW5nIGFuIGludmFsaWQgcm91dGVcbiAgICB2YXIgcG9zID0gQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcblxuICAgICAgICAvLyBMb29rIHVwIHRoZSBjdXJyZW50IHJvdXRlIGFnYWluc3QgQ09ORklHLlJPVVRFUyBzbyB0aGF0IHdlIGNhbiBwb3B1bGF0ZSBMYXlvdXQgd2l0aCB0aGUgcHJldHR5IHBhdGggbmFtZS5cbiAgICAvLyBJZiB0aGUgY3VycmVudCBwYXRoIGlzbid0IGRlZmluZWQgaW4gQ09ORklHLlJPVVRFUywgc2VuZCB0byB0aGUgRGFzaGJvYXJkXG4gICAgdmFyIHBhdGggPSBfLmZpbmQoQ09ORklHLlJPVVRFUywgeyAndXJsJzogcG9zIH0pO1xuXG5cbiAgICAvLyBJZiBubyBwYXRoLCB0aGVuIHVzZSB0aGUgZmlyc3Qgcm91dGUuXG4gICAgaWYoXy5pc0VtcHR5KHBvcykpIHtcbiAgICAgIHBhdGggPSBfLmZpcnN0KENPTkZJRy5ST1VURVMpO1xuICAgIH1cblxuICAgIC8vIEN1cnJlbnQgcGF0aCBpc24ndCBmb3VuZC4gQ2hlY2sgaWYgaXQncyBhIHJvdXRlIHdpdGggcGFyYW1ldGVyc1xuICAgIGlmKF8uaXNFbXB0eShwYXRoKSkge1xuXG4gICAgICBwYXRoID0gXy5sYXN0KF8uZmlsdGVyKENPTkZJRy5ST1VURVMsIGZ1bmN0aW9uKHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBfLmNvbnRhaW5zKHBvcywgcm91dGUudXJsKSAmJiByb3V0ZS5hbGxvd1BhcmFtZXRlcnM7XG4gICAgICB9KSk7XG5cbiAgICB9XG5cblxuICAgIGlmKF8uaGFzKHBhdGgsICduYW1lJykpIHtcbiAgICAgIHBhdGggPSBwYXRoLm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGggPSAnRGFzaGJvYXJkJztcbiAgICB9XG5cblxuXG4gICAgaWYocGF0aCA9PT0gJ0Rhc2hib2FyZCcpIHtcbiAgICAgIHJvdXRlci5uYXZpZ2F0ZSgnJyk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQudGl0bGUgPSBwYXRoICsgJyB8ICcgKyBDT05GSUcuV0VCU0lURV9OQU1FO1xuXG4gICAgcmV0dXJuIHtwYXRoOiBwYXRoLCB1c2VyOiB1bmRlZmluZWQsIHJlbmRlcjogZmFsc2UsIGFjdGl2ZVdlYnNpdGU6IHVuZGVmaW5lZCwgd2Vic2l0ZXM6IHVuZGVmaW5lZCwgYWxlcnQ6IHsnbWVzc2FnZScgOiBudWxsLCAndHlwZScgOiBudWxsfX07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24oKSB7XG5cbi8vIHNldCB0aGUgcHVzaFN0YXRlIHRvIGJsYW5rIGlmIHRoZSB1c2VyIGFycml2ZXMgdG8gdGhlIGRhc2hib2FyZCwgZWl0aGVyIGJ5IGdvaW5nIHRvIHRoZSByb290IG9yIGVudGVyaW5nIGFuIGludmFsaWQgcm91dGVcbiAgICB2YXIgcG9zID0gQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcblxuICAgICAgICAvLyBMb29rIHVwIHRoZSBjdXJyZW50IHJvdXRlIGFnYWluc3QgQ09ORklHLlJPVVRFUyBzbyB0aGF0IHdlIGNhbiBwb3B1bGF0ZSBMYXlvdXQgd2l0aCB0aGUgcHJldHR5IHBhdGggbmFtZS5cbiAgICAvLyBJZiB0aGUgY3VycmVudCBwYXRoIGlzbid0IGRlZmluZWQgaW4gQ09ORklHLlJPVVRFUywgc2VuZCB0byB0aGUgRGFzaGJvYXJkXG4gICAgdmFyIHBhdGggPSBfLmZpbmQoQ09ORklHLlJPVVRFUywgeyAndXJsJzogcG9zIH0pO1xuXG5cbiAgICAvLyBJZiBubyBwYXRoLCB0aGVuIHVzZSB0aGUgZmlyc3Qgcm91dGUuXG4gICAgaWYoXy5pc0VtcHR5KHBvcykpIHtcbiAgICAgIHBhdGggPSBfLmZpcnN0KENPTkZJRy5ST1VURVMpO1xuICAgIH1cblxuICAgIC8vIEN1cnJlbnQgcGF0aCBpc24ndCBmb3VuZC4gQ2hlY2sgaWYgaXQncyBhIHJvdXRlIHdpdGggcGFyYW1ldGVyc1xuICAgIGlmKF8uaXNFbXB0eShwYXRoKSkge1xuXG4gICAgICBwYXRoID0gXy5sYXN0KF8uZmlsdGVyKENPTkZJRy5ST1VURVMsIGZ1bmN0aW9uKHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBfLmNvbnRhaW5zKHBvcywgcm91dGUudXJsKSAmJiByb3V0ZS5hbGxvd1BhcmFtZXRlcnM7XG4gICAgICB9KSk7XG5cbiAgICB9XG5cblxuICAgIGlmKF8uaGFzKHBhdGgsICduYW1lJykpIHtcbiAgICAgIHBhdGggPSBwYXRoLm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGggPSAnRGFzaGJvYXJkJztcbiAgICB9XG5cblxuXG4gICAgaWYocGF0aCA9PT0gJ0Rhc2hib2FyZCcpIHtcbiAgICAgIHJvdXRlci5uYXZpZ2F0ZSgnJyk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRQb3MocG9zLCBwYXRoKTtcbiAgICAvL3RoaXMuc2V0U3RhdGUoe3BhdGg6IHBhdGh9KVxuXG4gICAgXG5cbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG5cbiAgICBfLmdldFNlc3Npb24uY2FsbCh0aGlzKTtcblxuICB9LFxuXG4gIHNldFBvczogZnVuY3Rpb24odXJsLCBwb3MpIHtcblxuICAgIF8uZ2V0U2Vzc2lvbi5jYWxsKHRoaXMpO1xuXG4gICAgLy8gT25ib2FyZGluZyBzY3JlZW4gaWYgbm8gd2Vic2l0ZXMgZXhpc3RcblxuICAgICAgZG9jdW1lbnQudGl0bGUgPSBwb3MgKyAnIHwgJyArIENPTkZJRy5XRUJTSVRFX05BTUU7XG4gICAgICB0aGlzLnNldFN0YXRlKHtwYXRoOiBwb3N9KTtcblxuICAgICAgcm91dGVyLm5hdmlnYXRlKHVybCk7XG4gICAgXG5cbiAgICB0aGlzLnNldFN0YXRlKHthbGVydDogeydtZXNzYWdlJyA6IG51bGwsICd0eXBlJyA6IG51bGx9fSk7XG5cbiAgfSxcblxuICBzZXRXZWJzaXRlOiBmdW5jdGlvbih3ZWJzaXRlKSB7XG5cbiAgICBjb25zb2xlLmxvZyh3ZWJzaXRlKTtcblxuICAgIC8vIGlmIHRoaXMgaXMgY2FsbGVkIHdpdGggJ2RlZmF1bHQnIGFzIGFuIGFyZ3VtZW50LCB0aGVuIHNldCB0aGUgYWN0aXZlIHdlYnNpdGUgdG8gdGhlIGZpcnN0IG9uZSBpbiB0aGUgdXNlcidzIGxpc3RcbiAgICB2YXIgd2Vic2l0ZXMgPSB0aGlzLnN0YXRlLndlYnNpdGVzO1xuXG4gICAgaWYoXy5pc0VtcHR5KHdlYnNpdGVzKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVdlYnNpdGU6ICdkZWZhdWx0J30pO1xuICAgIH1cblxuXG4gICAgdmFyIGZpcnN0V2Vic2l0ZSA9IF8uZmlyc3Qod2Vic2l0ZXMpLmlkO1xuXG4gICAgaWYoICghXy5pc0VtcHR5KHdlYnNpdGVzKSkgJiYgKHdlYnNpdGUgPT09ICdkZWZhdWx0JykpIHtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlV2Vic2l0ZTogZmlyc3RXZWJzaXRlfSk7XG5cbiAgICB9IGVsc2Uge1xuXG5cbiAgICAgIHZhciBjb29raWUgPSBKU09OLnBhcnNlKCQuY29va2llKCdhcHBsaWNhdGlvbicpKTtcblxuICAgICAgY29va2llLmFjdGl2ZVdlYnNpdGUgPSB3ZWJzaXRlO1xuXG4gICAgICAkLmNvb2tpZSgnYXBwbGljYXRpb24nLCBKU09OLnN0cmluZ2lmeShjb29raWUpLCB7cGF0aDogJy8nLCBleHBpcmVzOiAxMjB9KTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlV2Vic2l0ZTogd2Vic2l0ZX0pO1xuXG4gICAgfVxuXG5cblxuICB9LFxuXG4gIHNldFVzZXI6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dXNlcjogc3RhdGV9KTtcblxuICAgIC8vIEtpbGwgY29va2llIGlmIHVzZXIgaXMgbG9nZ2luZyBvdXRcbiAgICBpZihzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAkLnJlbW92ZUNvb2tpZSgnYXBwbGljYXRpb24nKTtcbiAgICB9XG5cbiAgfSxcblxuICBzZXRBbGVydDogZnVuY3Rpb24obWVzc2FnZSwgdHlwZSkge1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7YWxlcnQ6IHsnbWVzc2FnZScgOiBtZXNzYWdlLCAndHlwZScgOiB0eXBlfX0pO1xuXG4gIH0sXG5cbiAgc2V0V2Vic2l0ZXM6IGZ1bmN0aW9uKHdlYnNpdGVzKSB7XG5cbiAgICB0aGlzLnNldFN0YXRlKHt3ZWJzaXRlczogd2Vic2l0ZXN9KTtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgLypqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG4gICAgLy8gRGVmZXIgcmVuZGVyaW5nIHdoaWxlIGNoZWNraW5nIGlmIGNvb2tpZSBpcyB2YWxpZFxuICAgIGlmKHRoaXMuc3RhdGUucmVuZGVyKSB7XG5cbiAgICAgICAgLy8gTG9naW4gdmlldyBpZiBub3QgbG9nZ2VkIGluXG4gICAgICAgIGlmKHRoaXMuc3RhdGUudXNlciA9PT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgUmVhY3QuRE9NLmRpdihudWxsLCBcbiAgICAgICAgICAgICAgICAgIExvZ2luKCB7cGF0aDp0aGlzLnN0YXRlLnBhdGgsIHNldFBvczp0aGlzLnNldFBvcywgdXNlcjp0aGlzLnN0YXRlLnVzZXIsIHNldFVzZXI6dGhpcy5zZXRVc2VyLCBzZXRXZWJzaXRlOnRoaXMuc2V0V2Vic2l0ZSwgd2Vic2l0ZXM6dGhpcy5zdGF0ZS53ZWJzaXRlcywgc2V0V2Vic2l0ZXM6dGhpcy5zZXRXZWJzaXRlcywgYWxlcnQ6dGhpcy5zdGF0ZS5hbGVydCwgc2V0QWxlcnQ6dGhpcy5zZXRBbGVydH0gKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAvLyBVc2VyIGlzIGxvZ2dlZCBpblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYobnVsbCwgXG4gICAgICAgICAgICAgICAgVG9wQmFyKCB7cGF0aDp0aGlzLnN0YXRlLnBhdGgsIHNldFBvczp0aGlzLnNldFBvcywgdXNlcjp0aGlzLnN0YXRlLnVzZXIsIHNldFVzZXI6dGhpcy5zZXRVc2VyLCBhY3RpdmVXZWJzaXRlOnRoaXMuc3RhdGUuYWN0aXZlV2Vic2l0ZSwgc2V0V2Vic2l0ZTp0aGlzLnNldFdlYnNpdGUsIHdlYnNpdGVzOnRoaXMuc3RhdGUud2Vic2l0ZXMsIHNldFdlYnNpdGVzOnRoaXMuc2V0V2Vic2l0ZXMsIGFsZXJ0OnRoaXMuc3RhdGUuYWxlcnQsIHNldEFsZXJ0OnRoaXMuc2V0QWxlcnR9ICksXG4gICAgICAgICAgICAgICAgTGVmdE1lbnUoIHtyb3V0ZXM6dGhpcy5wcm9wcy5yb3V0ZXMsIHBhdGg6dGhpcy5zdGF0ZS5wYXRoLCBzZXRQb3M6dGhpcy5zZXRQb3MsIHVzZXI6dGhpcy5zdGF0ZS51c2VyLCBzZXRVc2VyOnRoaXMuc2V0VXNlciwgYWN0aXZlV2Vic2l0ZTp0aGlzLnN0YXRlLmFjdGl2ZVdlYnNpdGUsIHNldFdlYnNpdGU6dGhpcy5zZXRXZWJzaXRlLCB3ZWJzaXRlczp0aGlzLnN0YXRlLndlYnNpdGVzLCBzZXRXZWJzaXRlczp0aGlzLnNldFdlYnNpdGVzLCBhbGVydDp0aGlzLnN0YXRlLmFsZXJ0LCBzZXRBbGVydDp0aGlzLnNldEFsZXJ0fSApLFxuICAgICAgICAgICAgICAgIENvbnRlbnQoIHtwYXRoOnRoaXMuc3RhdGUucGF0aCwgc2V0UG9zOnRoaXMuc2V0UG9zLCB1c2VyOnRoaXMuc3RhdGUudXNlciwgc2V0VXNlcjp0aGlzLnNldFVzZXIsIGFjdGl2ZVdlYnNpdGU6dGhpcy5zdGF0ZS5hY3RpdmVXZWJzaXRlLCBzZXRXZWJzaXRlOnRoaXMuc2V0V2Vic2l0ZSwgd2Vic2l0ZXM6dGhpcy5zdGF0ZS53ZWJzaXRlcywgc2V0V2Vic2l0ZXM6dGhpcy5zZXRXZWJzaXRlcywgYWxlcnQ6dGhpcy5zdGF0ZS5hbGVydCwgc2V0QWxlcnQ6dGhpcy5zZXRBbGVydH0gKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHZhciBsb2FkaW5nTXNnU3R5bGUgPSB7XG4gICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgdG9wOiAnMzAlJ1xuICAgICB9O1xuXG4gICAgIHJldHVybihcblxuICAgICAgICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInJvdyB0ZXh0LWNlbnRlclwiLCBzdHlsZTpsb2FkaW5nTXNnU3R5bGV9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5oMShudWxsLCBcIkxvYWRpbmcuLi5cIilcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG5cbiAgIH1cblxuICAgLypqc2hpbnQgaWdub3JlOmVuZCAqL1xuIH1cblxufSk7XG5cblxudmFyIFRvcEJhciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ1RvcEJhcicsXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgJChkb2N1bWVudCkuZm91bmRhdGlvbigpO1xuXG4gIH0sXG5cbiAgcm91dGU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdXJsID0gJChldmVudC50YXJnZXQpLmF0dHIoJ2RhdGEtbmF2Jyk7XG4gICAgdmFyIHBvcyA9ICQoZXZlbnQudGFyZ2V0KS50ZXh0KCk7XG5cbiAgICB0aGlzLnByb3BzLnNldFBvcyh1cmwsIHBvcyk7XG4gIH0sXG5cbiAgbG9nb3V0OiBmdW5jdGlvbihlKSB7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcm91dGVyLm5hdmlnYXRlKCcnLCB7dHJpZ2dlcjogZmFsc2UsIHJlcGxhY2U6IHRydWV9KTtcbiAgICB0aGlzLnByb3BzLnNldFVzZXIodW5kZWZpbmVkKTtcbiAgICB0aGlzLnByb3BzLnNldFdlYnNpdGVzKHVuZGVmaW5lZCk7XG4gICAgdGhpcy5wcm9wcy5zZXRQb3MoJycsICdEYXNoYm9hcmQnKTtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuRE9NLmRpdigge2lkOlwidG9wQmFyXCIsIGNsYXNzTmFtZTpcInN0aWNreVwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00ubmF2KCB7Y2xhc3NOYW1lOlwidG9wLWJhclwiLCAnZGF0YS10b3BiYXInOnRydWUsICdkYXRhLW9wdGlvbnMnOlwiaXNfaG92ZXI6IGZhbHNlXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS51bCgge2NsYXNzTmFtZTpcInRpdGxlLWFyZWFcIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmxpKCB7Y2xhc3NOYW1lOlwibmFtZVwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00uaDEobnVsbCwgUmVhY3QuRE9NLmEoIHtocmVmOlwiI1wifSwgXCJXZWIgQXBwIE5hbWVcIikpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuRE9NLmxpKCB7Y2xhc3NOYW1lOlwidG9nZ2xlLXRvcGJhciBtZW51LWljb25cIn0sIFJlYWN0LkRPTS5hKCB7aHJlZjpcIiNcIn0sIFwiTWVudVwiKSlcbiAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS5zZWN0aW9uKCB7Y2xhc3NOYW1lOlwidG9wLWJhci1zZWN0aW9uXCJ9LCBcblxuICAgICAgICAgICAgUmVhY3QuRE9NLnVsKCB7Y2xhc3NOYW1lOlwicmlnaHRcIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmxpKCB7Y2xhc3NOYW1lOlwiYWN0aXZlIGhhcy1kcm9wZG93blwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00uYSgge2hyZWY6XCIjXCJ9LCBcIkxvZ2dlZCBpbiBhcyBcIiwgdGhpcy5wcm9wcy51c2VyLmZ1bGxOYW1lKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS51bCgge2NsYXNzTmFtZTpcImRyb3Bkb3duXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5saShudWxsLCBSZWFjdC5ET00uYSggeydkYXRhLW5hdic6XCJhY2NvdW50XCIsIG9uQ2xpY2s6dGhpcy5yb3V0ZX0sIFwiTXkgQWNjb3VudFwiKSksXG4gICAgICAgICAgICBSZWFjdC5ET00ubGkobnVsbCwgUmVhY3QuRE9NLmEoIHtvbkNsaWNrOnRoaXMubG9nb3V0fSwgXCJMb2dvdXRcIikpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuRE9NLmxpKCB7Y2xhc3NOYW1lOlwiaGFzLWRyb3Bkb3duXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5hKCB7aHJlZjpcIiNcIn0sIFwiSGVscFwiKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS51bCgge2NsYXNzTmFtZTpcImRyb3Bkb3duXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5saShudWxsLCBSZWFjdC5ET00uYSgge2hyZWY6XCIjXCJ9LCBcIkdldHRpbmcgU3RhcnRlZCBHdWlkZVwiKSksXG4gICAgICAgICAgICBSZWFjdC5ET00ubGkobnVsbCwgUmVhY3QuRE9NLmEoIHtocmVmOlwiI1wifSwgXCJBUEkgRG9jdW1lbnRhdGlvblwiKSksXG4gICAgICAgICAgICBSZWFjdC5ET00ubGkobnVsbCwgUmVhY3QuRE9NLmEoIHtocmVmOlwiI1wifSwgXCJDb250YWN0IFVzXCIpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApO1xufVxuXG59KTtcblxuXG52YXIgTGVmdE1lbnUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdMZWZ0TWVudScsXG5cbiAgcm91dGU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdXJsID0gJChldmVudC50YXJnZXQpLmF0dHIoJ2RhdGEtbmF2Jyk7XG4gICAgdmFyIHBvcyA9ICQoZXZlbnQudGFyZ2V0KS50ZXh0KCk7XG5cbiAgICB0aGlzLnByb3BzLnNldFBvcyh1cmwsIHBvcyk7XG5cbiAgICAvLyBUTyBSRVZJRVc6IHNldCB0aGUgd2Vic2l0ZSBjb250ZXh0IGJhY2sgdG8gZGVmYXVsdCB3aGVuIGEgbWVudSBsaW5rIGlzIGNsaWNrZWRcbiAgICAvL3RoaXMucHJvcHMuc2V0V2Vic2l0ZSgnZGVmYXVsdCcpO1xuXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAvKmpzaGludCBpZ25vcmU6c3RhcnQgKi9cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgdmFyIGxpbmtzID0gXy5tYXAoXy5maWx0ZXIodGhpcy5wcm9wcy5yb3V0ZXMsICdzaG93SW5NZW51JyksIGZ1bmN0aW9uKGxpbmssIGtleSkge1xuXG4gICAgICB2YXIgY2xhc3NTdHJpbmcgPSAnJztcbiAgICAgIGlmKChzZWxmLnByb3BzLnBhdGg9PT1saW5rLm5hbWUpIHx8IChfLmNvbnRhaW5zKGxpbmsuc3Vicm91dGVzLHNlbGYucHJvcHMucGF0aCkpKXtjbGFzc1N0cmluZyA9ICdhY3RpdmUnO31cblxuICAgICAgcmV0dXJuIFJlYWN0LkRPTS5saSgge2tleTprZXl9LCBSZWFjdC5ET00uYSgge2hyZWY6bGluay51cmwsIG9uQ2xpY2s6c2VsZi5yb3V0ZSwgJ2RhdGEtbmF2JzpsaW5rLnVybCwgY2xhc3NOYW1lOmNsYXNzU3RyaW5nfSwgbGluay5uYW1lKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuRE9NLmRpdigge2lkOlwibGVmdE1lbnVcIiwgY2xhc3NOYW1lOlwic21hbGwtNCBsYXJnZS0yIGNvbHVtbnNcIn0sIFxuICAgICAgICAgICAgV2Vic2l0ZVNlbGVjdG9yKCB7YWN0aXZlV2Vic2l0ZTp0aGlzLnByb3BzLmFjdGl2ZVdlYnNpdGUsIHNldFdlYnNpdGU6dGhpcy5wcm9wcy5zZXRXZWJzaXRlLCBzZXRQb3M6dGhpcy5wcm9wcy5zZXRQb3MsIHdlYnNpdGVzOnRoaXMucHJvcHMud2Vic2l0ZXMsIHNldFdlYnNpdGVzOnRoaXMucHJvcHMuc2V0V2Vic2l0ZXMsIGFsZXJ0OnRoaXMucHJvcHMuYWxlcnQsIHNldEFsZXJ0OnRoaXMucHJvcHMuc2V0QWxlcnR9ICksXG4gICAgICAgICAgICBSZWFjdC5ET00udWwoIHtjbGFzc05hbWU6XCJzaWRlLW5hdlwifSwgbGlua3MpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuXG4gICAgLypqc2hpbnQgaWdub3JlOmVuZCAqL1xuICB9XG5cbn0pO1xuXG5cbnZhciBXZWJzaXRlU2VsZWN0b3IgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdXZWJzaXRlU2VsZWN0b3InLFxuXG4gIHdlYnNpdGVTZWxlY3RlZDogZnVuY3Rpb24oZSkge1xuXG4gICAgdmFyIHdlYnNpdGVzID0gdGhpcy5wcm9wcy53ZWJzaXRlcztcblxuICAgIGlmKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSA9PT0gMCkge1xuXG4gICAgICB0aGlzLnByb3BzLnNldFdlYnNpdGUodW5kZWZpbmVkKTtcblxuICAgICAgLy8gdG9kbzogcmV2aWV3XG4gICAgICB0aGlzLnByb3BzLnNldFBvcygnd2Vic2l0ZXMvYWRkJywgJ0FkZCBXZWJzaXRlJyk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB2YXIgd2Vic2l0ZSA9IF8uZmlyc3QoXy5maWx0ZXIod2Vic2l0ZXMsIHsgJ2lkJzogcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIH0pKS5pZDtcblxuICAgICAgdGhpcy5wcm9wcy5zZXRXZWJzaXRlKHdlYnNpdGUpO1xuXG4gICAgICB0aGlzLnByb3BzLnNldFBvcygnJywgJ0Rhc2hib2FyZCcpO1xuXG4gICAgfVxuXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICAgIC8qanNoaW50IGlnbm9yZTpzdGFydCAqL1xuXG4gICAgdmFyIHZhbHVlID0gMDtcbiAgICAvLyBTZWxlY3QgZGVmYXVsdCBvcHRpb24gd2hlcmUgdmFsdWUgPSAwIGlmIHdlYnNpdGUgaXNuJ3QgZGVmaW5lZFxuICAgIGlmKHRoaXMucHJvcHMuYWN0aXZlV2Vic2l0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucHJvcHMuYWN0aXZlV2Vic2l0ZTtcbiAgICB9XG5cbiAgICBpZigkLmNvb2tpZSgnYXBwbGljYXRpb24nKSkge1xuICAgICAgdmFyIHdlYnNpdGVzID0gdGhpcy5wcm9wcy53ZWJzaXRlcztcblxuXG4gICAgICB2YXIgbGlua3MgPSBfLm1hcCh3ZWJzaXRlcywgZnVuY3Rpb24oc2l0ZSwga2V5KSB7XG5cbiAgICAgICAgcmV0dXJuIChSZWFjdC5ET00ub3B0aW9uKCB7a2V5OnNpdGUuaWQsIHZhbHVlOnNpdGUuaWR9LCBzaXRlLm5hbWUpKTtcblxuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KG51bGwsIFxuXG4gICAgICAgICAgICBSZWFjdC5ET00uc2VsZWN0KCB7aWQ6XCJ3ZWJzaXRlU2VsZWN0b3JcIiwgb25DaGFuZ2U6dGhpcy53ZWJzaXRlU2VsZWN0ZWQsIHZhbHVlOnZhbHVlfSwgXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS5vcHRpb24oIHtrZXk6XCIwXCIsIHZhbHVlOlwiMFwifSwgXCJBZGQgTmV3IFdlYnNpdGVcIiksXG4gICAgICAgICAgICBsaW5rc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuXG5cbiAgICAvKmpzaGludCBpZ25vcmU6ZW5kICovXG4gIH1cblxufSk7XG5cbnZhciBDb250ZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnQ29udGVudCcsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuXG4gICAgdmFyIHNlY3Rpb24gPSBudWxsO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIHNjcm9sbCB0byB0b3BcbiAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKDApO1xuXG4gICAgLy8gVGhlIGNvZGUgYmVsb3cgY2hlY2tzIGlmIHRoZXJlIGlzIGEgUmVhY3QgY29tcG9uZW50IHRoYXQgbWF0Y2hlcyB0aGUgY3VycmVudCBwYXRoJ3MgbmFtZS5cbiAgICAvLyBJZiB0aGVyZSBpcywgdGhlbiByZW5kZXIgaXQsIG90aGVyd2lzZSBqdXN0IHJlbmRlciB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBwYXRoLlxuICAgIGlmICggZXZhbChcInR5cGVvZiBcIiArIHRoaXMucHJvcHMucGF0aC5yZXBsYWNlKFwiIFwiLFwiXCIpICsgXCIgPT09ICdmdW5jdGlvbidcIikgKXtcblxuICAgICAgdmFyIGVsZW1lbnQgPSBldmFsKHRoaXMucHJvcHMucGF0aC5yZXBsYWNlKCcgJywnJykpO1xuXG4gICAgICBzZWN0aW9uID0gKGVsZW1lbnQoIHtwYXRoOnRoaXMucHJvcHMucGF0aCwgc2V0UG9zOnRoaXMucHJvcHMuc2V0UG9zLCB1c2VyOnRoaXMucHJvcHMudXNlciwgc2V0VXNlcjp0aGlzLnByb3BzLnNldFVzZXIsIHNldFdlYnNpdGU6dGhpcy5wcm9wcy5zZXRXZWJzaXRlLCBhY3RpdmVXZWJzaXRlOnRoaXMucHJvcHMuYWN0aXZlV2Vic2l0ZSwgd2Vic2l0ZXM6dGhpcy5wcm9wcy53ZWJzaXRlcywgc2V0V2Vic2l0ZXM6dGhpcy5wcm9wcy5zZXRXZWJzaXRlcywgYWxlcnQ6dGhpcy5wcm9wcy5hbGVydCwgc2V0QWxlcnQ6dGhpcy5wcm9wcy5zZXRBbGVydH0gKSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgc2VjdGlvbiA9IChcbiAgICAgICAgICAgICAgICAgUmVhY3QuRE9NLnAobnVsbCwgdGhpcy5wcm9wcy5wYXRoKVxuICAgICAgICAgICAgICAgICApO1xuICAgIH1cblxuXG4gICAgdmFyIGFsZXJ0cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICBpZighXy5pc0VtcHR5KHNlbGYucHJvcHMuYWxlcnQubWVzc2FnZSkpIHtcbiAgICAgICAgdmFyIGNsYXNzU3RyaW5nID0gJ2FsZXJ0LWJveCAnICsgc2VsZi5wcm9wcy5hbGVydC50eXBlO1xuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgICAgUmVhY3QuRE9NLmRpdiggeydkYXRhLWFsZXJ0Jzp0cnVlLCBjbGFzc05hbWU6Y2xhc3NTdHJpbmd9LCBcbiAgICAgICAgICAgICAgICBzZWxmLnByb3BzLmFsZXJ0Lm1lc3NhZ2VcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgIH1cblxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuRE9NLmRpdigge2lkOlwiY29udGVudFwiLCBjbGFzc05hbWU6XCJzbWFsbC04IGxhcmdlLTEwIGNvbHVtbnNcIn0sIFxuXG4gICAgICAgICAgICBhbGVydHMoKSxcblxuICAgICAgICAgICAgc2VjdGlvblxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcblxuICB9XG5cbn0pO1xuXG5cbmV4cG9ydHMuTGF5b3V0ID0gTGF5b3V0O1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2NvbXBvbmVudHMvbGF5b3V0LmpzeFwiLFwiL2NvbXBvbmVudHNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKiogQGpzeCBSZWFjdC5ET00gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIENPTkZJRyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xuXG52YXIgTG9naW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdMb2dpbicsXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblxuICAgIGRvY3VtZW50LnRpdGxlID0gJ0xvZ2luIHwgJyArIENPTkZJRy5XRUJTSVRFX05BTUU7XG5cbiAgICByZXR1cm4ge2xvZ2luRW1haWxFcnJvcjogdW5kZWZpbmVkLCBsb2dpblBhc3N3b3JkRXJyb3I6IHVuZGVmaW5lZCwgbG9naW5TZXJ2ZXJFcnJvcjogdW5kZWZpbmVkLCByZWdpc3RlckZpcnN0TmFtZUVycm9yOiB1bmRlZmluZWQsIHJlZ2lzdGVyTGFzdE5hbWVFcnJvcjogdW5kZWZpbmVkLCByZWdpc3RlckVtYWlsRXJyb3I6IHVuZGVmaW5lZCwgcmVnaXN0ZXJQYXNzd29yZEVycm9yOiB1bmRlZmluZWQsIHJlZ2lzdGVyU2VydmVyRXJyb3I6IHVuZGVmaW5lZH07XG5cbiAgfSxcblxuICByZWdpc3RlcjogZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyU2VydmVyRXJyb3I6IHVuZGVmaW5lZH0pO1xuXG4gICAgdmFyIGZpcnN0TmFtZSA9ICQoJyNyZWdpc3Rlcl9maXJzdE5hbWUnKS52YWwoKTtcbiAgICB2YXIgbGFzdE5hbWUgPSAkKCcjcmVnaXN0ZXJfbGFzdE5hbWUnKS52YWwoKTtcbiAgICB2YXIgZW1haWwgPSAkKCcjcmVnaXN0ZXJfZW1haWwnKS52YWwoKTtcbiAgICB2YXIgcGFzc3dvcmQgPSAkKCcjcmVnaXN0ZXJfcGFzc3dvcmQnKS52YWwoKTtcblxuICAgIC8vIFZhbGlkYXRlIGZpZWxkc1xuICAgIGlmKF8uaXNFbXB0eShmaXJzdE5hbWUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3RlckZpcnN0TmFtZUVycm9yOiAnRmlyc3QgTmFtZSBjYW5ub3QgYmUgYmxhbmsnfSk7XG4gICAgfSBcblxuICAgIGlmKF8uaXNFbXB0eShsYXN0TmFtZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyTGFzdE5hbWVFcnJvcjogJ0xhc3QgTmFtZSBjYW5ub3QgYmUgYmxhbmsnfSk7XG4gICAgfSBcblxuICAgIGlmKF8uaXNFbXB0eShlbWFpbCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyRW1haWxFcnJvcjogJ0VtYWlsIGNhbm5vdCBiZSBibGFuayd9KTtcbiAgICB9IGVsc2UgaWYoZW1haWwuaW5kZXhPZignQCcpID09PSAtMSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXJFbWFpbEVycm9yOiAnUGxlYXNlIGlucHV0IGEgdmFsaWQgZW1haWwgYWRkcmVzcyd9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXJFbWFpbEVycm9yOiB1bmRlZmluZWR9KTtcbiAgICB9XG4gICAgXG4gICAgaWYoXy5pc0VtcHR5KHBhc3N3b3JkKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXJQYXNzd29yZEVycm9yOiAnUGFzc3dvcmQgY2Fubm90IGJlIGJsYW5rJ30pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3RlclBhc3N3b3JkRXJyb3I6IHVuZGVmaW5lZH0pO1xuICAgIH1cblxuICAgIC8vIGZpZWxkcyBhcmUgcG9wdWxhdGVkXG4gICAgaWYoIV8uc29tZShbdGhpcy5fcGVuZGluZ1N0YXRlLnJlZ2lzdGVyRmlyc3ROYW1lRXJyb3IsIHRoaXMuX3BlbmRpbmdTdGF0ZS5yZWdpc3Rlckxhc3ROYW1lRXJyb3IsIHRoaXMuX3BlbmRpbmdTdGF0ZS5yZWdpc3RlckVtYWlsRXJyb3IsIHRoaXMuX3BlbmRpbmdTdGF0ZS5yZWdpc3RlclBhc3N3b3JkRXJyb3JdKSkge1xuXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgcmVnaXN0ZXIgPSB7fTtcblxuICAgICAgLypqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG4gICAgICByZWdpc3Rlci5maXJzdF9uYW1lID0gZmlyc3ROYW1lO1xuICAgICAgcmVnaXN0ZXIubGFzdF9uYW1lID0gbGFzdE5hbWU7XG4gICAgICByZWdpc3Rlci5lbWFpbCA9IGVtYWlsO1xuICAgICAgcmVnaXN0ZXIucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgICAgIC8qanNoaW50IGlnbm9yZTplbmQgKi9cblxuICAgICAgc3VwZXJhZ2VudFxuICAgICAgLnBvc3QoQ09ORklHLlVSTFMucmVnaXN0ZXIpXG4gICAgICAucXVlcnkocmVnaXN0ZXIpXG4gICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgICAuZW5kKGZ1bmN0aW9uKGVycm9yLCByZXMpe1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50ZXh0KTtcblxuICAgICAgICBpZihyZXMub2sgPT09IHRydWUpIHtcblxuICAgICAgICAgIC8vIGxvZ2luXG4gICAgICAgICAgJCgnI2xvZ2luX2VtYWlsJykudmFsKGVtYWlsKTtcbiAgICAgICAgICAkKCcjbG9naW5fcGFzc3dvcmQnKS52YWwocGFzc3dvcmQpO1xuICAgICAgICAgICQoJyNsb2dpbl9idXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAvLyB2YWxpZGF0aW9uIGVycm9yIG1zZ1xuICAgICAgICAgIGlmKEpTT04ucGFyc2UocmVzLnRleHQpLmhhc093blByb3BlcnR5KCdyZXNwb25zZScpKSB7XG5cbiAgICAgICAgICAgIGlmKEpTT04ucGFyc2UocmVzLnRleHQpLnJlc3BvbnNlLmhhc093blByb3BlcnR5KCdlcnJvcicpKSB7XG5cbiAgICAgICAgICAgICAgdmFyIGVycm9ycyA9IEpTT04ucGFyc2UocmVzLnRleHQpLnJlc3BvbnNlLmVycm9yO1xuXG4gICAgICAgICAgICAgIC8qanNoaW50IGlnbm9yZTpzdGFydCAqL1xuICAgICAgICAgICAgICBpZighXy5pc1VuZGVmaW5lZChlcnJvcnMuZmlyc3RfbmFtZSkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtyZWdpc3RlckZpcnN0TmFtZUVycm9yOiBlcnJvcnMuZmlyc3RfbmFtZS5lcnJvcn0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYoIV8uaXNVbmRlZmluZWQoZXJyb3JzLmxhc3RfbmFtZSkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtyZWdpc3Rlckxhc3ROYW1lRXJyb3I6IGVycm9ycy5sYXN0X25hbWUuZXJyb3J9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGVycm9ycy5lbWFpbCkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtyZWdpc3RlckVtYWlsRXJyb3I6IGVycm9ycy5lbWFpbC5lcnJvcn0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYoIV8uaXNVbmRlZmluZWQoZXJyb3JzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3JlZ2lzdGVyUGFzc3dvcmRFcnJvcjogZXJyb3JzLnBhc3N3b3JkLmVycm9yfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLypqc2hpbnQgaWdub3JlOmVuZCAqL1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IFxuICAgICAgICAgIC8vIGN1c3RvbSBlcnJvciBtc2dcbiAgICAgICAgICBlbHNlIGlmKEpTT04ucGFyc2UocmVzLnRleHQpLmhhc093blByb3BlcnR5KCdlcnJvcicpKSB7XG5cbiAgICAgICAgICAgIHZhciBvdGhlclNlcnZlckVycm9yID0gSlNPTi5wYXJzZShyZXMudGV4dCkuZXJyb3I7XG5cbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3JlZ2lzdGVyU2VydmVyRXJyb3I6IG90aGVyU2VydmVyRXJyb3J9KTtcblxuXG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuXG4gICAgICB9KTtcblxuXG59XG5cblxuXG59LFxuXG5cbmxvZ2luOiBmdW5jdGlvbihlKSB7XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIHRoaXMuc2V0U3RhdGUoe2xvZ2luU2VydmVyRXJyb3I6IHVuZGVmaW5lZH0pO1xuXG4gIHZhciBlbWFpbCA9ICQoJyNsb2dpbl9lbWFpbCcpLnZhbCgpO1xuICB2YXIgcGFzc3dvcmQgPSAkKCcjbG9naW5fcGFzc3dvcmQnKS52YWwoKTtcblxuXG4gICAgLy8gVmFsaWRhdGUgLSBmaWVsZHMgbXVzdCBub3QgYmUgZW1wdHlcbiAgICBpZihfLmlzRW1wdHkoZW1haWwpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2dpbkVtYWlsRXJyb3I6ICdFbWFpbCBjYW5ub3QgYmUgYmxhbmsnfSk7XG4gICAgfSBlbHNlIGlmKGVtYWlsLmluZGV4T2YoJ0AnKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvZ2luRW1haWxFcnJvcjogJ1BsZWFzZSBpbnB1dCBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvZ2luRW1haWxFcnJvcjogdW5kZWZpbmVkfSk7XG4gICAgfVxuICAgIC8vIGFsZXJ0KHRoaXMuX3BlbmRpbmdTdGF0ZS5sb2dpbkVtYWlsRXJyb3IpXG4gICAgLy8gYWxlcnQodGhpcy5zdGF0ZS5sb2dpbkVtYWlsRXJyb3IpXG4gICAgXG4gICAgaWYoXy5pc0VtcHR5KHBhc3N3b3JkKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9naW5QYXNzd29yZEVycm9yOiAnUGFzc3dvcmQgY2Fubm90IGJlIGJsYW5rJ30pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2dpblBhc3N3b3JkRXJyb3I6IHVuZGVmaW5lZH0pO1xuICAgIH1cblxuXG4gICAgLy8gZmllbGRzIGFyZSBwb3B1bGF0ZWRcbiAgICBpZighXy5zb21lKFt0aGlzLl9wZW5kaW5nU3RhdGUubG9naW5FbWFpbEVycm9yLCB0aGlzLl9wZW5kaW5nU3RhdGUubG9naW5QYXNzd29yZEVycm9yXSkpIHtcblxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBzdXBlcmFnZW50XG4gICAgICAucG9zdChDT05GSUcuVVJMUy5sb2dpbilcbiAgICAgIC5zZXQoJ1gtQVBJLUVtYWlsJywgZW1haWwpXG4gICAgICAuc2V0KCdYLUFQSS1QYXNzd29yZCcsIHBhc3N3b3JkKVxuICAgICAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAgICAgLmVuZChmdW5jdGlvbihlcnJvciwgcmVzKXtcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGV4dCk7XG5cbiAgICAgICAgaWYocmVzLm9rID09PSB0cnVlKSB7XG5cbiAgICAgICAgICB2YXIgc2Vzc2lvbklkID0gSlNPTi5wYXJzZShyZXMudGV4dCkuc2Vzc2lvbklkO1xuICAgICAgICAgIHZhciB1c2VyID0gSlNPTi5wYXJzZShyZXMudGV4dCkudXNlcjtcblxuXG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhzZXNzaW9uSWQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuXG4gICAgICAgICAgdmFyIHVzZXJXZWJzaXRlcyA9IEpTT04ucGFyc2UocmVzLnRleHQpLndlYnNpdGVzO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJXZWJzaXRlcyk7XG5cbiAgICAgICAgICBpZighXy5pc0VtcHR5KHVzZXJXZWJzaXRlcykpIHtcbiAgICAgICAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKF8uZmlyc3QodXNlcldlYnNpdGVzKSkpIHtcbiAgICAgICAgICAgICAgdmFyIGFjdGl2ZVdlYnNpdGUgPSBfLmZpcnN0KHVzZXJXZWJzaXRlcykuaWQ7XG5cblxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVXZWJzaXRlKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG5cblxuXG5cblxuXG4gICAgICAgICAgLy8gc2V0IGNvb2tpZVxuICAgICAgICAgICQuY29va2llKCdhcHBsaWNhdGlvbicsIEpTT04uc3RyaW5naWZ5KHsgJ3Nlc3Npb25JZCc6IHNlc3Npb25JZCwgJ3VzZXInOiB1c2VyIH0pLCB7cGF0aDogJy8nLCBleHBpcmVzOiAxMjB9KTtcblxuICAgICAgICAgIHNlbGYucHJvcHMuc2V0VXNlcih1c2VyKTtcblxuICAgICAgICAgIHNlbGYucHJvcHMuc2V0V2Vic2l0ZXModXNlcldlYnNpdGVzKTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuXG4gICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBzZWxmLnByb3BzLnBhdGggKyAnIHwgJyArIENPTkZJRy5XRUJTSVRFX05BTUU7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIC8vIFJldHVybiBlcnJvciBmcm9tIHNlcnZlclxuICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe2xvZ2luU2VydmVyRXJyb3I6IEpTT04ucGFyc2UocmVzLnRleHQpLmVycm9yfSk7XG5cblxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG59XG5cbn0sXG5cbnJlbmRlcjogZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICB2YXIgdmFsaWRhdGlvbkVycm9yID0gZnVuY3Rpb24oZmllbGQpIHtcblxuICAgIGlmKGZpZWxkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBmaWVsZClcbiAgICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgfTtcblxuICByZXR1cm4gKFxuICAgICAgICAgIFJlYWN0LkRPTS5kaXYoIHtpZDpcImxvZ2luXCIsIGNsYXNzTmFtZTpcInJvd1wifSwgXG5cbiAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwicGFuZWxcIn0sIFxuICAgICAgICAgIFJlYWN0LkRPTS5oMShudWxsLCBcIkxvZ2luIHRvIFwiLCBDT05GSUcuV0VCU0lURV9OQU1FKSxcbiAgICAgICAgICBcIlBsZWFzZSBsb2dpbiB0byBhY2Nlc3MgXCIsIENPTkZJRy5XRUJTSVRFX05BTUUsXCIuXCIsXG4gICAgICAgICAgUmVhY3QuRE9NLmhyKG51bGwgKSxcbiAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IodGhpcy5zdGF0ZS5sb2dpblNlcnZlckVycm9yKSxcbiAgICAgICAgICBSZWFjdC5ET00uZm9ybShudWxsLCBcbiAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJFbWFpbFwiLFxuICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwibG9naW5fZW1haWxcIiwgdHlwZTpcImVtYWlsXCIsIHBsYWNlaG9sZGVyOlwiRW1haWxcIn0gKSxcbiAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IodGhpcy5zdGF0ZS5sb2dpbkVtYWlsRXJyb3IpXG5cbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJsb2dpbl9wYXNzd29yZFwiLCB0eXBlOlwicGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6XCJQYXNzd29yZFwifSApLFxuICAgICAgICAgIHZhbGlkYXRpb25FcnJvcih0aGlzLnN0YXRlLmxvZ2luUGFzc3dvcmRFcnJvcilcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LkRPTS5idXR0b24oIHtpZDpcImxvZ2luX2J1dHRvblwiLCBvbkNsaWNrOnRoaXMubG9naW4sIGNsYXNzTmFtZTpcImJ1dHRvbiByYWRpdXMgZXhwYW5kXCJ9LCBcIkxvZ2luXCIpXG4gICAgICAgICAgKSxcblxuICAgICAgICAgIFwiRm9yZ290IFBhc3N3b3JkXCIsXG5cbiAgICAgICAgICBSZWFjdC5ET00uaHIobnVsbCApLFxuICAgICAgICAgIFJlYWN0LkRPTS5oMShudWxsLCBcIkRvbid0IGhhdmUgYW4gYWNjb3VudD9cIiksXG4gICAgICAgICAgXCJSZWdpc3RlciBhIG5ldyBhY2NvdW50IGF0IFwiLCBDT05GSUcuV0VCU0lURV9OQU1FLFwiLlwiLFxuICAgICAgICAgIFJlYWN0LkRPTS5ocihudWxsICksXG4gICAgICAgICAgdmFsaWRhdGlvbkVycm9yKHRoaXMuc3RhdGUucmVnaXN0ZXJTZXJ2ZXJFcnJvciksXG4gICAgICAgICAgUmVhY3QuRE9NLmZvcm0obnVsbCwgXG5cbiAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJGaXJzdCBOYW1lXCIsXG4gICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJyZWdpc3Rlcl9maXJzdE5hbWVcIiwgdHlwZTpcInRleHRcIiwgcGxhY2Vob2xkZXI6XCJGaXJzdCBOYW1lXCJ9ICksXG4gICAgICAgICAgdmFsaWRhdGlvbkVycm9yKHRoaXMuc3RhdGUucmVnaXN0ZXJGaXJzdE5hbWVFcnJvcilcbiAgICAgICAgICApLFxuXG4gICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiTGFzdCBOYW1lXCIsXG4gICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJyZWdpc3Rlcl9sYXN0TmFtZVwiLCB0eXBlOlwidGV4dFwiLCBwbGFjZWhvbGRlcjpcIkxhc3QgTmFtZVwifSApLFxuICAgICAgICAgIHZhbGlkYXRpb25FcnJvcih0aGlzLnN0YXRlLnJlZ2lzdGVyTGFzdE5hbWVFcnJvcilcbiAgICAgICAgICApLFxuXG4gICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiRW1haWxcIixcbiAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoIHtpZDpcInJlZ2lzdGVyX2VtYWlsXCIsIHR5cGU6XCJlbWFpbFwiLCBwbGFjZWhvbGRlcjpcIkVtYWlsXCJ9ICksXG4gICAgICAgICAgdmFsaWRhdGlvbkVycm9yKHRoaXMuc3RhdGUucmVnaXN0ZXJFbWFpbEVycm9yKVxuICAgICAgICAgICksXG5cbiAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJQYXNzd29yZFwiLFxuICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwicmVnaXN0ZXJfcGFzc3dvcmRcIiwgdHlwZTpcInBhc3N3b3JkXCIsIHBsYWNlaG9sZGVyOlwiUGFzc3dvcmRcIn0gKSxcbiAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IodGhpcy5zdGF0ZS5yZWdpc3RlclBhc3N3b3JkRXJyb3IpXG4gICAgICAgICAgKSxcblxuICAgICAgICAgIFJlYWN0LkRPTS5idXR0b24oIHtvbkNsaWNrOnRoaXMucmVnaXN0ZXIsIGNsYXNzTmFtZTpcImJ1dHRvbiByYWRpdXMgZXhwYW5kXCJ9LCBcIlJlZ2lzdGVyXCIpXG4gICAgICAgICAgKVxuXG5cblxuICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICAgKTtcbn1cbn0pO1xuXG5cblxuZXhwb3J0cy5Mb2dpbiA9IExvZ2luO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2NvbXBvbmVudHMvbG9naW4uanN4XCIsXCIvY29tcG9uZW50c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKiBAanN4IFJlYWN0LkRPTSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ09ORklHID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG5cbnZhciBNeUFjY291bnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdNeUFjY291bnQnLFxuXG4gIHJvdXRlRWRpdEFjY291bnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJidXR0b24gY2xpY2tlZFwiKTtcbiAgICB0aGlzLnByb3BzLnNldFBvcyhcImFjY291bnQvZWRpdFwiLCBcIkVkaXQgQWNjb3VudFwiKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIC8qanNoaW50IGlnbm9yZTpzdGFydCAqL1xuICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJ0ZXh0LWNlbnRlclwifSwgXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS5pbWcoIHtjbGFzc05hbWU6XCJ0aFwiLCBzcmM6XCJodHRwOi8vZ3JhdmF0YXIuY29tL2F2YXRhci9mMDAxNjFjN2IzNWYwMDg0ZDM5MGY3ODVlMDE1YjljYS5qcGdcIn0gKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS5oMShudWxsLCB0aGlzLnByb3BzLnVzZXIuZnVsbE5hbWUpLFxuICAgICAgICAgICAgUmVhY3QuRE9NLmgzKG51bGwsIHRoaXMucHJvcHMudXNlci5lbWFpbCksXG4gICAgICAgICAgICBSZWFjdC5ET00uaDQobnVsbCwgXCJSZWdpc3RlcmVkIFwiLCBtb21lbnQodGhpcy5wcm9wcy51c2VyLmNyZWF0ZWRBdCkuZnJvbU5vdygpKSxcblxuICAgICAgICAgICAgUmVhY3QuRE9NLmJ1dHRvbigge29uQ2xpY2s6dGhpcy5yb3V0ZUVkaXRBY2NvdW50LCBjbGFzc05hbWU6XCJidXR0b24gcmFkaXVzXCJ9LCBcIkVkaXQgQWNjb3VudFwiKVxuXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgIC8qanNoaW50IGlnbm9yZTplbmQgKi9cbiAgfVxuXG59KTtcblxuXG52YXIgRWRpdEFjY291bnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdFZGl0QWNjb3VudCcsXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblxuICAgIHJldHVybiB7Zmlyc3ROYW1lRXJyb3I6IHVuZGVmaW5lZCwgbGFzdE5hbWVFcnJvcjogdW5kZWZpbmVkLCBlbWFpbEVycm9yOiB1bmRlZmluZWQsIHBhc3N3b3JkRXJyb3I6IHVuZGVmaW5lZCwgc2VydmVyRXJyb3I6IHVuZGVmaW5lZH07XG5cbiAgfSxcblxuICByb3V0ZU15QWNjb3VudDogZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnNldFBvcyhcImFjY291bnRcIiwgXCJNeSBBY2NvdW50XCIpO1xuICB9LFxuXG4gIHNhdmVVc2VyOiBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwic2F2aW5nLi5cIik7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgZmlyc3ROYW1lID0gJCgnaW5wdXQjZmlyc3ROYW1lJykudmFsKCk7XG4gICAgdmFyIGxhc3ROYW1lID0gJCgnaW5wdXQjbGFzdE5hbWUnKS52YWwoKTtcbiAgICB2YXIgZW1haWwgPSAkKCdpbnB1dCNlbWFpbCcpLnZhbCgpO1xuICAgIHZhciBwYXNzd29yZCA9ICQoJ2lucHV0I3Bhc3N3b3JkJykudmFsKCk7XG5cblxuICAgIC8vIFZhbGlkYXRlIC0gZmllbGRzIG11c3Qgbm90IGJlIGVtcHR5XG4gICAgaWYoXy5pc0VtcHR5KGZpcnN0TmFtZSkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe2ZpcnN0TmFtZUVycm9yOiBcIkZpcnN0IE5hbWUgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7Zmlyc3ROYW1lRXJyb3I6IHVuZGVmaW5lZH0pO1xuICAgIH1cblxuICAgIGlmKF8uaXNFbXB0eShsYXN0TmFtZSkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe2xhc3ROYW1lRXJyb3I6IFwiTGFzdCBOYW1lIGNhbm5vdCBiZSBibGFua1wifSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe2xhc3ROYW1lRXJyb3I6IHVuZGVmaW5lZH0pO1xuICAgIH1cblxuICAgIGlmKF8uaXNFbXB0eShlbWFpbCkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe2VtYWlsRXJyb3I6IFwiRW1haWwgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2UgaWYoZW1haWwuaW5kZXhPZihcIkBcIikgPT09IC0xKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtlbWFpbEVycm9yOiBcIlBsZWFzZSBpbnB1dCBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIn0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtlbWFpbEVycm9yOiB1bmRlZmluZWR9KTtcbiAgICB9XG5cbiAgICBpZihfLmlzRW1wdHkocGFzc3dvcmQpKSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtwYXNzd29yZEVycm9yOiBcIlBhc3N3b3JkIGNhbm5vdCBiZSBibGFua1wifSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe3Bhc3N3b3JkRXJyb3I6IHVuZGVmaW5lZH0pO1xuICAgIH1cblxuLy8gc2VuZCB0byBzZXJ2ZXIgaWYgY2xpZW50IHZhbGlkYXRpb24gcGFzc2VzXG5pZighXy5zb21lKFt0aGlzLl9wZW5kaW5nU3RhdGUuZmlyc3ROYW1lRXJyb3IsIHRoaXMuX3BlbmRpbmdTdGF0ZS5sYXN0TmFtZUVycm9yLCB0aGlzLl9wZW5kaW5nU3RhdGUuZW1haWxFcnJvciwgdGhpcy5fcGVuZGluZ1N0YXRlLnBhc3N3b3JkRXJyb3JdKSkge1xuXG4gIHZhciB1cGRhdGVkVXNlciA9IHt9O1xuXG4gIC8qanNoaW50IGlnbm9yZTpzdGFydCAqL1xuICB1cGRhdGVkVXNlci51aWQgPSB0aGlzLnByb3BzLnVzZXIudWlkO1xuICB1cGRhdGVkVXNlci5maXJzdF9uYW1lID0gZmlyc3ROYW1lO1xuICB1cGRhdGVkVXNlci5sYXN0X25hbWUgPSBsYXN0TmFtZTtcbiAgdXBkYXRlZFVzZXIuZW1haWwgPSBlbWFpbDtcbiAgdXBkYXRlZFVzZXIucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgLypqc2hpbnQgaWdub3JlOmVuZCAqL1xuXG4gIGNvbnNvbGUubG9nKHVwZGF0ZWRVc2VyKTtcblxuICB2YXIgY29va2llID0gSlNPTi5wYXJzZSgkLmNvb2tpZShcImFwcGxpY2F0aW9uXCIpKTtcbiAgdmFyIHRva2VuID0gY29va2llLnNlc3Npb25JZDtcblxuXG4gIHN1cGVyYWdlbnRcbiAgLnBvc3QoQ09ORklHLlVSTFMudXBkYXRlQWNjb3VudClcbiAgLnNldCgnWC1BUEktS2V5JywgdG9rZW4pXG4gIC5xdWVyeSh1cGRhdGVkVXNlcilcbiAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAuZW5kKGZ1bmN0aW9uKGVycm9yLCByZXMpe1xuXG4gICAgY29uc29sZS5sb2cocmVzKTtcblxuICAgIGlmKHJlcy5vaykge1xuXG4gICAgICBzZWxmLnByb3BzLnNldFBvcyhcImFjY291bnRcIiwgXCJNeSBBY2NvdW50XCIpO1xuICAgICAgc2VsZi5wcm9wcy5zZXRBbGVydChcIllvdXIgYWNjb3VudCBoYXMgYmVlbiB1cGRhdGVkIVwiLCBcInN1Y2Nlc3NcIik7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLypqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG4gICAgICAgICAgLy8gYSB2YWxpZGF0aW9uIGVycm9yIG9jY3VycmVkXG4gICAgICAgICAgaWYoSlNPTi5wYXJzZShyZXMudGV4dCkucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciBlcnJvcnMgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS5yZXNwb25zZS5lcnJvcjtcblxuXG4gICAgICAgICAgICBpZighXy5pc1VuZGVmaW5lZChlcnJvcnMuZmlyc3RfbmFtZSkpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7Zmlyc3ROYW1lRXJyb3I6IGVycm9ycy5maXJzdF9uYW1lLmVycm9yfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGVycm9ycy5sYXN0X25hbWUpKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe2xhc3ROYW1lRXJyb3I6IGVycm9ycy5sYXN0X25hbWUuZXJyb3J9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIV8uaXNVbmRlZmluZWQoZXJyb3JzLmVtYWlsKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtlbWFpbEVycm9yOiBlcnJvcnMuZW1haWwuZXJyb3J9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIV8uaXNVbmRlZmluZWQoZXJyb3JzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtwYXNzd29yZEVycm9yOiBlcnJvcnMucGFzc3dvcmQuZXJyb3J9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhIHRva2VuIGVycm9yIG9jY3VycmVkXG4gICAgICAgICAgICBpZihKU09OLnBhcnNlKHJlcy50ZXh0KS5lcnJvcikge1xuICAgICAgICAgICAgICB2YXIgc2VydmVyRXJyb3IgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS5lcnJvcjtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VydmVyRXJyb3I6IHNlcnZlckVycm9yfSk7XG5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGlmKEpTT04ucGFyc2UocmVzLnRleHQpLnNlc3Npb25faW52YWxpZCkge1xuICAgICAgICAgICAgICAgIHNlbGYucHJvcHMuc2V0VXNlcih1bmRlZmluZWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvKmpzaGludCBpZ25vcmU6ZW5kICovXG4gICAgICAgIH1cblxuXG4gICAgICB9KTtcblxufVxuXG59LFxuXG5yZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gIC8qanNoaW50IGlnbm9yZTpzdGFydCAqL1xuXG4gIHZhciBzZWxmID0gdGhpcztcblxuICB2YXIgc2VydmVyRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzZWxmLnN0YXRlLnNlcnZlckVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLnNlcnZlckVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gIHZhciBmaXJzdE5hbWVFcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUuZmlyc3ROYW1lRXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUuZmlyc3ROYW1lRXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgdmFyIGxhc3ROYW1lRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzZWxmLnN0YXRlLmxhc3ROYW1lRXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUubGFzdE5hbWVFcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuICB2YXIgZW1haWxFcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUuZW1haWxFcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS5lbWFpbEVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gIHZhciBwYXNzd29yZEVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5wYXNzd29yZEVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLnBhc3N3b3JkRXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcblxuICAgICAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJ0ZXh0LWNlbnRlclwifSwgXG5cbiAgICAgICAgICBSZWFjdC5ET00udWwoIHtjbGFzc05hbWU6XCJicmVhZGNydW1ic1wifSwgXG4gICAgICAgICAgUmVhY3QuRE9NLmxpKG51bGwsIFJlYWN0LkRPTS5hKCB7b25DbGljazp0aGlzLnJvdXRlTXlBY2NvdW50fSwgXCJNeSBBY2NvdW50XCIpKSxcbiAgICAgICAgICBSZWFjdC5ET00ubGkoIHtjbGFzc05hbWU6XCJjdXJyZW50XCJ9LCBcIkVkaXQgQWNjb3VudFwiKSxcbiAgICAgICAgICBSZWFjdC5ET00ubGkoIHtjbGFzc05hbWU6XCJjdXJyZW50XCJ9LCB0aGlzLnByb3BzLnVzZXIuZnVsbE5hbWUpXG4gICAgICAgICAgKSxcblxuICAgICAgICAgIFJlYWN0LkRPTS5oMihudWxsLCBcIkVkaXQgWW91ciBBY2NvdW50XCIpLFxuXG4gICAgICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInJvd1wifSwgXG4gICAgICAgICAgUmVhY3QuRE9NLmZvcm0obnVsbCwgXG4gICAgICAgICAgUmVhY3QuRE9NLmZpZWxkc2V0KG51bGwsIFxuICAgICAgICAgIFJlYWN0LkRPTS5sZWdlbmQobnVsbCwgXCJVcGRhdGUgVXNlciBEZXRhaWxzXCIpLFxuICAgICAgICAgIHNlcnZlckVycm9yKCksXG4gICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiRmlyc3QgTmFtZVwiLFxuICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwiZmlyc3ROYW1lXCIsIHR5cGU6XCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOlwiRmlyc3QgTmFtZVwiLCBkZWZhdWx0VmFsdWU6dGhpcy5wcm9wcy51c2VyLmZpcnN0TmFtZX0gKSxcbiAgICAgICAgICBmaXJzdE5hbWVFcnJvcigpXG4gICAgICAgICAgKSxcblxuICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIkxhc3QgTmFtZVwiLFxuICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwibGFzdE5hbWVcIiwgdHlwZTpcInRleHRcIiwgcGxhY2Vob2xkZXI6XCJMYXN0IE5hbWVcIiwgZGVmYXVsdFZhbHVlOnRoaXMucHJvcHMudXNlci5sYXN0TmFtZX0gKSxcbiAgICAgICAgICBsYXN0TmFtZUVycm9yKClcbiAgICAgICAgICApLFxuXG4gICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiRW1haWwgQWRkcmVzc1wiLFxuICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwiZW1haWxcIiwgdHlwZTpcInRleHRcIiwgcGxhY2Vob2xkZXI6XCJFbWFpbCBBZGRyZXNzXCIsIGRlZmF1bHRWYWx1ZTp0aGlzLnByb3BzLnVzZXIuZW1haWx9ICksXG4gICAgICAgICAgZW1haWxFcnJvcigpXG4gICAgICAgICAgKSxcblxuICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJwYXNzd29yZFwiLCB0eXBlOlwicGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6XCJQYXNzd29yZFwifSApLFxuICAgICAgICAgIHBhc3N3b3JkRXJyb3IoKVxuICAgICAgICAgIClcblxuICAgICAgICAgICksXG5cbiAgICAgICAgICBSZWFjdC5ET00uYnV0dG9uKCB7b25DbGljazp0aGlzLnNhdmVVc2VyLCBjbGFzc05hbWU6XCJidXR0b24gcmFkaXVzIGV4cGFuZFwifSwgXCJVcGRhdGVcIilcbiAgICAgICAgICApXG4gICAgICAgICAgKVxuXG5cblxuICAgICAgICAgIClcbiAgICAgICAgICApXG5cbi8qanNoaW50IGlnbm9yZTplbmQgKi9cbn1cblxufSk7XG5cblxuZXhwb3J0cy5NeUFjY291bnQgPSBNeUFjY291bnQ7XG5leHBvcnRzLkVkaXRBY2NvdW50ID0gRWRpdEFjY291bnQ7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29tcG9uZW50cy9teS1hY2NvdW50LmpzeFwiLFwiL2NvbXBvbmVudHNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKiogQGpzeCBSZWFjdC5ET00gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIENPTkZJRyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xudmFyIExheW91dCA9IHJlcXVpcmUoXCIuL2xheW91dFwiKS5MYXlvdXQ7XG5cbnZhciBSb3V0ZXIgPSBCYWNrYm9uZS5Sb3V0ZXIuZXh0ZW5kKHtcblxuICAvLyBSb3V0ZXMgYXJlIGRlZmluZWQgaW4gQ09ORklHLlJPVVRFUywgc28gc2VuZCBhbnkgcGF0aCB0byBzaG93TGF5b3V0XG4gIHJvdXRlcyA6IHtcbiAgICBcIipzcGxhdFwiIDogXCJzaG93TGF5b3V0XCJcbiAgfSxcbiAgc2hvd0xheW91dCA6IGZ1bmN0aW9uKHBvcykge1xuICAgIGNvbnNvbGUubG9nKHBvcyk7XG5cbiAgICAvKmpzaGludCBpZ25vcmU6c3RhcnQgKi9cblxuICAgIFJlYWN0LnJlbmRlckNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5b3V0KCB7cm91dGVzOkNPTkZJRy5ST1VURVN9ICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBsaWNhdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgLypqc2hpbnQgaWdub3JlOmVuZCAqL1xuICB9XG59KTtcblxud2luZG93LnJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcblxuQmFja2JvbmUuaGlzdG9yeS5zdGFydCh7cHVzaFN0YXRlOiB0cnVlfSk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29tcG9uZW50cy9yb3V0ZXIuanN4XCIsXCIvY29tcG9uZW50c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKiBAanN4IFJlYWN0LkRPTSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgVXNlcnMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdVc2VycycsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuRE9NLmRpdihudWxsLCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5wKG51bGwsIHRoaXMucHJvcHMucGF0aCksXG4gICAgICAgICAgICBSZWFjdC5ET00ucChudWxsLCBcIkJsYWhcIilcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG5cbiAgfVxuXG59KTtcblxuZXhwb3J0cy5Vc2VycyA9IFVzZXJzO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2NvbXBvbmVudHMvdXNlcnMuanN4XCIsXCIvY29tcG9uZW50c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKiBAanN4IFJlYWN0LkRPTSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ09ORklHID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG5cbnZhciBXZWJzaXRlcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ1dlYnNpdGVzJyxcblxuICByb3V0ZUFkZFdlYnNpdGU6IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJidXR0b24gY2xpY2tlZFwiKTtcbiAgICB0aGlzLnByb3BzLnNldFdlYnNpdGUodW5kZWZpbmVkKTtcbiAgICB0aGlzLnByb3BzLnNldFBvcyhcIndlYnNpdGVzL2FkZFwiLCBcIkFkZCBXZWJzaXRlXCIpO1xuICB9LFxuXG4gIHJvdXRlRWRpdFdlYnNpdGU6IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHdlYnNpdGVfaWQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KFwidHJcIikuYXR0cihcImlkXCIpO1xuICAgIGNvbnNvbGUubG9nKHdlYnNpdGVfaWQpO1xuICAgIHRoaXMucHJvcHMuc2V0V2Vic2l0ZSh3ZWJzaXRlX2lkKTtcbiAgICB0aGlzLnByb3BzLnNldFBvcyhcIndlYnNpdGVzL2VkaXQvXCIgKyB3ZWJzaXRlX2lkLCBcIkVkaXQgV2Vic2l0ZVwiKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHdlYnNpdGVzID0gdGhpcy5wcm9wcy53ZWJzaXRlcztcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cblxuICAgIHZhciB3ZWJzaXRlX3Jvd3MgPSBfLm1hcCh3ZWJzaXRlcywgZnVuY3Rpb24od2Vic2l0ZSkge1xuXG4gICAgICByZXR1cm4oXG4gICAgICAgICAgICAgUmVhY3QuRE9NLnRyKCB7aWQ6d2Vic2l0ZS5pZCwga2V5OndlYnNpdGUuaWR9LCBcbiAgICAgICAgICAgICBSZWFjdC5ET00udGQobnVsbCwgd2Vic2l0ZS5uYW1lKSxcbiAgICAgICAgICAgICBSZWFjdC5ET00udGQobnVsbCwgd2Vic2l0ZS5jb250YWN0X2NvdW50KSxcbiAgICAgICAgICAgICBSZWFjdC5ET00udGQobnVsbCwgd2Vic2l0ZS5zZW5kZXJfbmFtZSwgXCIgKFwiLHdlYnNpdGUuc2VuZGVyX2VtYWlsLFwiKVwiKSxcbiAgICAgICAgICAgICBSZWFjdC5ET00udGQobnVsbCwgbW9tZW50KHdlYnNpdGUuY3JlYXRlZF9hdCkuZnJvbU5vdygpKSxcbiAgICAgICAgICAgICBSZWFjdC5ET00udGQobnVsbCwgUmVhY3QuRE9NLmJ1dHRvbigge29uQ2xpY2s6c2VsZi5yb3V0ZUVkaXRXZWJzaXRlLCBjbGFzc05hbWU6XCJidXR0b24gcmFkaXVzXCJ9LCBcIkVkaXRcIikpXG4gICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgKVxuXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYobnVsbCwgXG4gICAgICAgICAgICBSZWFjdC5ET00uaDIobnVsbCwgXCJXZWJzaXRlc1wiKSxcblxuICAgICAgICAgICAgUmVhY3QuRE9NLnRhYmxlKCB7d2lkdGg6XCIxMDAlXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS50aGVhZChudWxsLCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS50cihudWxsLCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS50aChudWxsLCBcIldlYnNpdGUgTmFtZVwiKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS50aChudWxsLCBcIlVzZXJzXCIpLFxuICAgICAgICAgICAgUmVhY3QuRE9NLnRoKG51bGwsIFwiU2VuZGVyIERldGFpbHNcIiksXG4gICAgICAgICAgICBSZWFjdC5ET00udGgobnVsbCwgXCJDcmVhdGVkXCIpLFxuICAgICAgICAgICAgUmVhY3QuRE9NLnRoKG51bGwsIFwiQWN0aW9uc1wiKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS50Ym9keShudWxsLCBcbiAgICAgICAgICAgIHdlYnNpdGVfcm93c1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcblxuXG5cblxuICAgICAgICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInRleHQtY2VudGVyXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LkRPTS5idXR0b24oIHtvbkNsaWNrOnRoaXMucm91dGVBZGRXZWJzaXRlLCBjbGFzc05hbWU6XCJidXR0b24gcmFkaXVzXCJ9LCBcIkFkZCBOZXcgV2Vic2l0ZVwiKVxuXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICApXG5cbiAgfVxuXG59KTtcblxuXG52YXIgQWRkV2Vic2l0ZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ0FkZFdlYnNpdGUnLFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cbiAgICByZXR1cm4ge25hbWVfZXJyb3I6IHVuZGVmaW5lZCwgdXJsX2Vycm9yOiB1bmRlZmluZWQsIHNlbmRlcl9uYW1lX2Vycm9yOiB1bmRlZmluZWQsIHNlbmRlcl9lbWFpbF9lcnJvcjogdW5kZWZpbmVkLCBzZXJ2ZXJfZXJyb3I6IHVuZGVmaW5lZH07XG5cbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLnByb3BzLnNldFdlYnNpdGUodW5kZWZpbmVkKTtcblxuICB9LFxuXG4gIHJvdXRlV2Vic2l0ZXM6IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5zZXRQb3MoXCJ3ZWJzaXRlc1wiLCBcIldlYnNpdGVzXCIpO1xuICB9LFxuXG5zYXZlV2Vic2l0ZTogZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnNvbGUubG9nKFwic2F2aW5nLi5cIik7XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHZhciBuYW1lID0gJCgnaW5wdXQjbmFtZScpLnZhbCgpO1xuICB2YXIgdXJsID0gJCgnaW5wdXQjdXJsJykudmFsKCk7XG4gIHZhciBzZW5kZXJfbmFtZSA9ICQoJ2lucHV0I3NlbmRlcl9uYW1lJykudmFsKCk7XG4gIHZhciBzZW5kZXJfZW1haWwgPSAkKCdpbnB1dCNzZW5kZXJfZW1haWwnKS52YWwoKTtcblxuXG4gICAgLy8gVmFsaWRhdGUgLSBmaWVsZHMgbXVzdCBub3QgYmUgZW1wdHlcbiAgICBpZihfLmlzRW1wdHkobmFtZSkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe25hbWVfZXJyb3I6IFwiTmFtZSBjYW5ub3QgYmUgYmxhbmtcIn0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtuYW1lX2Vycm9yOiB1bmRlZmluZWR9KTtcbiAgICB9O1xuXG4gICAgaWYoXy5pc0VtcHR5KHVybCkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe3VybF9lcnJvcjogXCJVUkwgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7dXJsX2Vycm9yOiB1bmRlZmluZWR9KTtcbiAgICB9O1xuXG4gICAgaWYoXy5pc0VtcHR5KHNlbmRlcl9uYW1lKSkge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VuZGVyX25hbWVfZXJyb3I6IFwiU2VuZGVyIE5hbWUgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VuZGVyX25hbWVfZXJyb3I6IHVuZGVmaW5lZH0pO1xuICAgIH07XG5cbiAgICBpZihfLmlzRW1wdHkoc2VuZGVyX2VtYWlsKSkge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VuZGVyX2VtYWlsX2Vycm9yOiBcIlNlbmRlciBFbWFpbCBjYW5ub3QgYmUgYmxhbmtcIn0pO1xuICAgIH0gZWxzZSBpZihzZW5kZXJfZW1haWwuaW5kZXhPZihcIkBcIikgPT09IC0xKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzZW5kZXJfZW1haWxfZXJyb3I6IFwiUGxlYXNlIGlucHV0IGEgdmFsaWQgZW1haWwgYWRkcmVzc1wifSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe3NlbmRlcl9lbWFpbF9lcnJvcjogdW5kZWZpbmVkfSk7XG4gICAgfTtcblxuLy8gc2VuZCB0byBzZXJ2ZXIgaWYgY2xpZW50IHZhbGlkYXRpb24gcGFzc2VzXG5pZighXy5zb21lKFt0aGlzLl9wZW5kaW5nU3RhdGUubmFtZV9lcnJvciwgdGhpcy5fcGVuZGluZ1N0YXRlLnVybF9lcnJvciwgdGhpcy5fcGVuZGluZ1N0YXRlLnNlbmRlcl9uYW1lX2Vycm9yLCB0aGlzLl9wZW5kaW5nU3RhdGUuc2VuZGVyX2VtYWlsX2Vycm9yXSkpIHtcblxuICB2YXIgbmV3X3dlYnNpdGUgPSB7fTtcblxuICBuZXdfd2Vic2l0ZS5uYW1lID0gbmFtZTtcbiAgbmV3X3dlYnNpdGUudXJsID0gdXJsO1xuICBuZXdfd2Vic2l0ZS5zZW5kZXJfbmFtZSA9IHNlbmRlcl9uYW1lO1xuICBuZXdfd2Vic2l0ZS5zZW5kZXJfZW1haWwgPSBzZW5kZXJfZW1haWw7XG5cbiAgY29uc29sZS5sb2cobmV3X3dlYnNpdGUpO1xuXG4gIHZhciBjb29raWUgPSBKU09OLnBhcnNlKCQuY29va2llKFwiYXBwbGljYXRpb25cIikpO1xuICB2YXIgdG9rZW4gPSBjb29raWUuc2Vzc2lvbklkO1xuXG5cbiAgc3VwZXJhZ2VudFxuICAucG9zdChDT05GSUcuVVJMUy5hZGRXZWJzaXRlKVxuICAuc2V0KCdYLUFQSS1LZXknLCB0b2tlbilcbiAgLnF1ZXJ5KG5ld193ZWJzaXRlKVxuICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gIC5lbmQoZnVuY3Rpb24oZXJyb3IsIHJlcyl7XG5cbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgaWYocmVzLm9rKSB7XG5cbiAgICAgIHNlbGYucHJvcHMuc2V0UG9zKFwid2Vic2l0ZXNcIiwgXCJXZWJzaXRlc1wiKTtcbiAgICAgIHNlbGYucHJvcHMuc2V0QWxlcnQobmFtZSArIFwiIGhhcyBiZWVuIGFkZGVkIVwiLCBcInN1Y2Nlc3NcIik7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgLy8gYSB2YWxpZGF0aW9uIGVycm9yIG9jY3VycmVkXG4gICAgICAgICAgaWYoSlNPTi5wYXJzZShyZXMudGV4dCkucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciBlcnJvcnMgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS5yZXNwb25zZS5lcnJvcjtcblxuXG4gICAgICAgICAgICBpZighXy5pc1VuZGVmaW5lZChlcnJvcnMubmFtZSkpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7bmFtZV9lcnJvcjogZXJyb3JzLm5hbWUuZXJyb3J9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighXy5pc1VuZGVmaW5lZChlcnJvcnMudXJsKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHt1cmxfZXJyb3I6IGVycm9ycy51cmwuZXJyb3J9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighXy5pc1VuZGVmaW5lZChlcnJvcnMuc2VuZGVyX25hbWUpKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3NlbmRlcl9uYW1lX2Vycm9yOiBlcnJvcnMuc2VuZGVyX25hbWUuZXJyb3J9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighXy5pc1VuZGVmaW5lZChlcnJvcnMuc2VuZGVyX2VtYWlsKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtzZW5kZXJfZW1haWxfZXJyb3I6IGVycm9ycy5zZW5kZXJfZW1haWwuZXJyb3J9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGEgdG9rZW4gZXJyb3Igb2NjdXJyZWRcbiAgICAgICAgICAgIGlmKEpTT04ucGFyc2UocmVzLnRleHQpLmVycm9yKSB7XG4gICAgICAgICAgICAgIHZhciBlcnJvciA9IEpTT04ucGFyc2UocmVzLnRleHQpLmVycm9yO1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtzZXJ2ZXJfZXJyb3I6IGVycm9yfSk7XG5cbiAgICAgICAgICAgICAgaWYoSlNPTi5wYXJzZShyZXMudGV4dCkuc2Vzc2lvbl9pbnZhbGlkKSB7XG4gICAgICAgICAgICAgIHNlbGYucHJvcHMuc2V0VXNlcih1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuICAgICAgfSlcblxufVxuXG59LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdmFyIHNlcnZlcl9lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUuc2VydmVyX2Vycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLnNlcnZlcl9lcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuICB2YXIgbmFtZV9lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUubmFtZV9lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS5uYW1lX2Vycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gIHZhciB1cmxfZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzZWxmLnN0YXRlLnVybF9lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS51cmxfZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNlbmRlcl9uYW1lX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5zZW5kZXJfbmFtZV9lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS5zZW5kZXJfbmFtZV9lcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuICB2YXIgc2VuZGVyX2VtYWlsX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5zZW5kZXJfZW1haWxfZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUuc2VuZGVyX2VtYWlsX2Vycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInRleHQtY2VudGVyXCJ9LCBcblxuICAgICAgICAgICAgUmVhY3QuRE9NLnVsKCB7Y2xhc3NOYW1lOlwiYnJlYWRjcnVtYnNcIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmxpKG51bGwsIFJlYWN0LkRPTS5hKCB7b25DbGljazp0aGlzLnJvdXRlV2Vic2l0ZXN9LCBcIldlYnNpdGVzXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS5saSgge2NsYXNzTmFtZTpcImN1cnJlbnRcIn0sIFwiQWRkIFdlYnNpdGVcIilcbiAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgIFJlYWN0LkRPTS5oMihudWxsLCBcIkFkZCBXZWJzaXRlXCIpLFxuXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJyb3dcIn0sIFxuICAgICAgICAgICAgICBSZWFjdC5ET00uZm9ybShudWxsLCBcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmZpZWxkc2V0KG51bGwsIFxuICAgICAgICAgICAgICBSZWFjdC5ET00ubGVnZW5kKG51bGwsIFwiV2Vic2l0ZSBEZXRhaWxzXCIpLFxuICAgICAgICAgICAgICBzZXJ2ZXJfZXJyb3IoKSxcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiV2Vic2l0ZSBOYW1lXCIsXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwibmFtZVwiLCB0eXBlOlwidGV4dFwiLCBwbGFjZWhvbGRlcjpcIldlYnNpdGUgTmFtZVwifSApLFxuICAgICAgICAgICAgICBuYW1lX2Vycm9yKClcbiAgICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJVUkxcIixcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJ1cmxcIiwgdHlwZTpcInRleHRcIiwgcGxhY2Vob2xkZXI6XCJXZWJzaXRlIFVSTFwifSApLFxuICAgICAgICAgICAgICB1cmxfZXJyb3IoKVxuICAgICAgICAgICAgICApLFxuXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChudWxsLCBcIlNlbmRlciBOYW1lXCIsXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwic2VuZGVyX25hbWVcIiwgdHlwZTpcInRleHRcIiwgcGxhY2Vob2xkZXI6XCJTZW5kZXIgTmFtZVwifSApLFxuICAgICAgICAgICAgICBzZW5kZXJfbmFtZV9lcnJvcigpXG4gICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiU2VuZGVyIEVtYWlsXCIsXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwic2VuZGVyX2VtYWlsXCIsIHR5cGU6XCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOlwiU2VuZGVyIEVtYWlsXCJ9ICksXG4gICAgICAgICAgICAgIHNlbmRlcl9lbWFpbF9lcnJvcigpXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICApLFxuXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5idXR0b24oIHtvbkNsaWNrOnRoaXMuc2F2ZVdlYnNpdGUsIGNsYXNzTmFtZTpcImJ1dHRvbiByYWRpdXMgZXhwYW5kXCJ9LCBcIkFkZFwiKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuXG4gIH1cblxufSk7XG5cbnZhciBFZGl0V2Vic2l0ZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ0VkaXRXZWJzaXRlJyxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuXG4gICAgcmV0dXJuIHtuYW1lX2Vycm9yOiB1bmRlZmluZWQsIHVybF9lcnJvcjogdW5kZWZpbmVkLCBzZW5kZXJfbmFtZV9lcnJvcjogdW5kZWZpbmVkLCBzZW5kZXJfZW1haWxfZXJyb3I6IHVuZGVmaW5lZCwgc2VydmVyX2Vycm9yOiB1bmRlZmluZWR9O1xuXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuXG5cbiAgICAvLyBFbnN1cmUgY3VycmVudCBwYXRoIHJlZmVyZW5jZXMgYSB3ZWJzaXRlIHRoYXQgdGhlIHVzZXIgb3duc1xuICAgIHZhciB3ZWJzaXRlX2lkID0gQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudC5yZXBsYWNlKFwid2Vic2l0ZXMvZWRpdC9cIiwgXCJcIik7XG4gICAgdmFyIHdlYnNpdGVzID0gdGhpcy5wcm9wcy53ZWJzaXRlcztcblxuICAgIGNvbnNvbGUubG9nKHdlYnNpdGVfaWQpXG5cbiAgICBpZih0aGlzLnByb3BzLmFjdGl2ZVdlYnNpdGUgIT09IHdlYnNpdGVfaWQpIHtcbiAgICAgIHZhciBtYXRjaCA9IF8uZmluZCh3ZWJzaXRlcywge1wiaWRcIiA6IHBhcnNlSW50KHdlYnNpdGVfaWQpfSk7XG5cbiAgICAgIGlmKCFfLmlzRW1wdHkobWF0Y2gpKSB7XG5cbiAgICAgIC8vIFBhdGggaWQgaXMgYSB2YWxpZCB3ZWJzaXRlXG4gICAgICB0aGlzLnByb3BzLnNldFdlYnNpdGUod2Vic2l0ZV9pZCk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyBQYXRoIGlkIGlzIG5vdCBhIHZhbGlkIHdlYnNpdGVcbiAgICAgIHRoaXMucHJvcHMuc2V0UG9zKFwid2Vic2l0ZXNcIiwgXCJXZWJzaXRlc1wiKTtcblxuICAgIH1cblxuICB9XG59LFxuXG5yb3V0ZVdlYnNpdGVzOiBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdGhpcy5wcm9wcy5zZXRQb3MoXCJ3ZWJzaXRlc1wiLCBcIldlYnNpdGVzXCIpO1xufSxcblxuZGVsZXRlV2Vic2l0ZTogZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnNvbGUubG9nKFwiZGVsZXRpbmcuLlwiKTtcblxudmFyIGNvb2tpZSA9IEpTT04ucGFyc2UoJC5jb29raWUoXCJhcHBsaWNhdGlvblwiKSk7XG52YXIgc2VsZiA9IHRoaXM7XG4gIHZhciB0b2tlbiA9IGNvb2tpZS5zZXNzaW9uSWQ7XG5cblxuICBzdXBlcmFnZW50XG4gIC5wb3N0KENPTkZJRy5VUkxTLmRlbGV0ZVdlYnNpdGUpXG4gIC5zZXQoJ1gtQVBJLUtleScsIHRva2VuKVxuICAucXVlcnkoe2lkOiB0aGlzLnByb3BzLmFjdGl2ZVdlYnNpdGV9KVxuICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gIC5lbmQoZnVuY3Rpb24oZXJyb3IsIHJlcyl7XG5cbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgaWYocmVzLm9rKSB7XG5cbiAgICAgIHNlbGYucHJvcHMuc2V0UG9zKFwid2Vic2l0ZXNcIiwgXCJXZWJzaXRlc1wiKTtcbiAgICAgIHNlbGYucHJvcHMuc2V0QWxlcnQoXCJXZWJzaXRlIGhhcyBiZWVuIGRlbGV0ZWQhXCIsIFwic3VjY2Vzc1wiKTtcblxuICAgIH1cblxuICB9KTtcblxuXG59LFxuXG5cbnNhdmVXZWJzaXRlOiBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc29sZS5sb2coXCJzYXZpbmcuLlwiKTtcblxuXG52YXIgY29va2llID0gJC5jb29raWUoXCJhcHBsaWNhdGlvblwiKTtcbnZhciB3ZWJzaXRlcyA9IHRoaXMucHJvcHMud2Vic2l0ZXM7XG5cblxuICB2YXIgYWN0aXZlV2Vic2l0ZSA9IF8uZmluZCh3ZWJzaXRlcywgeyBcImlkXCIgOiBwYXJzZUludChKU09OLnBhcnNlKGNvb2tpZSkuYWN0aXZlV2Vic2l0ZSl9KTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHZhciBuYW1lID0gJCgnaW5wdXQjbmFtZScpLnZhbCgpO1xuICB2YXIgdXJsID0gJCgnaW5wdXQjdXJsJykudmFsKCk7XG4gIHZhciBzZW5kZXJfbmFtZSA9ICQoJ2lucHV0I3NlbmRlcl9uYW1lJykudmFsKCk7XG4gIHZhciBzZW5kZXJfZW1haWwgPSAkKCdpbnB1dCNzZW5kZXJfZW1haWwnKS52YWwoKTtcblxuXG4gICAgLy8gVmFsaWRhdGUgLSBmaWVsZHMgbXVzdCBub3QgYmUgZW1wdHlcbiAgICBpZihfLmlzRW1wdHkobmFtZSkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe25hbWVfZXJyb3I6IFwiTmFtZSBjYW5ub3QgYmUgYmxhbmtcIn0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHtuYW1lX2Vycm9yOiB1bmRlZmluZWR9KTtcbiAgICB9O1xuXG4gICAgaWYoXy5pc0VtcHR5KHVybCkpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe3VybF9lcnJvcjogXCJVUkwgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7dXJsX2Vycm9yOiB1bmRlZmluZWR9KTtcbiAgICB9O1xuXG4gICAgaWYoXy5pc0VtcHR5KHNlbmRlcl9uYW1lKSkge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VuZGVyX25hbWVfZXJyb3I6IFwiU2VuZGVyIE5hbWUgY2Fubm90IGJlIGJsYW5rXCJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VuZGVyX25hbWVfZXJyb3I6IHVuZGVmaW5lZH0pO1xuICAgIH07XG5cbiAgICBpZihfLmlzRW1wdHkoc2VuZGVyX2VtYWlsKSkge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7c2VuZGVyX2VtYWlsX2Vycm9yOiBcIlNlbmRlciBFbWFpbCBjYW5ub3QgYmUgYmxhbmtcIn0pO1xuICAgIH0gZWxzZSBpZihzZW5kZXJfZW1haWwuaW5kZXhPZihcIkBcIikgPT09IC0xKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzZW5kZXJfZW1haWxfZXJyb3I6IFwiUGxlYXNlIGlucHV0IGEgdmFsaWQgZW1haWwgYWRkcmVzc1wifSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe3NlbmRlcl9lbWFpbF9lcnJvcjogdW5kZWZpbmVkfSk7XG4gICAgfTtcblxuLy8gc2VuZCB0byBzZXJ2ZXIgaWYgY2xpZW50IHZhbGlkYXRpb24gcGFzc2VzXG5pZighXy5zb21lKFt0aGlzLl9wZW5kaW5nU3RhdGUubmFtZV9lcnJvciwgdGhpcy5fcGVuZGluZ1N0YXRlLnVybF9lcnJvciwgdGhpcy5fcGVuZGluZ1N0YXRlLnNlbmRlcl9uYW1lX2Vycm9yLCB0aGlzLl9wZW5kaW5nU3RhdGUuc2VuZGVyX2VtYWlsX2Vycm9yXSkpIHtcblxuICB2YXIgdXBkYXRlZF93ZWJzaXRlID0ge307XG5cbiAgdXBkYXRlZF93ZWJzaXRlLmlkID0gYWN0aXZlV2Vic2l0ZS5pZDtcbiAgdXBkYXRlZF93ZWJzaXRlLm5hbWUgPSBuYW1lO1xuICB1cGRhdGVkX3dlYnNpdGUudXJsID0gdXJsO1xuICB1cGRhdGVkX3dlYnNpdGUuc2VuZGVyX25hbWUgPSBzZW5kZXJfbmFtZTtcbiAgdXBkYXRlZF93ZWJzaXRlLnNlbmRlcl9lbWFpbCA9IHNlbmRlcl9lbWFpbDtcblxuICBjb25zb2xlLmxvZyh1cGRhdGVkX3dlYnNpdGUpO1xuXG4gIHZhciBjb29raWUgPSBKU09OLnBhcnNlKCQuY29va2llKFwiYXBwbGljYXRpb25cIikpO1xuICB2YXIgdG9rZW4gPSBjb29raWUuc2Vzc2lvbklkO1xuXG5cbiAgc3VwZXJhZ2VudFxuICAucG9zdChDT05GSUcuVVJMUy51cGRhdGVXZWJzaXRlKVxuICAuc2V0KCdYLUFQSS1LZXknLCB0b2tlbilcbiAgLnF1ZXJ5KHVwZGF0ZWRfd2Vic2l0ZSlcbiAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAuZW5kKGZ1bmN0aW9uKGVycm9yLCByZXMpe1xuXG4gICAgY29uc29sZS5sb2cocmVzKTtcblxuICAgIGlmKHJlcy5vaykge1xuXG4gICAgICBzZWxmLnByb3BzLnNldFBvcyhcIndlYnNpdGVzXCIsIFwiV2Vic2l0ZXNcIik7XG4gICAgICBzZWxmLnByb3BzLnNldEFsZXJ0KG5hbWUgKyBcIiBoYXMgYmVlbiB1cGRhdGVkIVwiLCBcInN1Y2Nlc3NcIik7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgLy8gYSB2YWxpZGF0aW9uIGVycm9yIG9jY3VycmVkXG4gICAgICAgICAgaWYoSlNPTi5wYXJzZShyZXMudGV4dCkucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHZhciBlcnJvcnMgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS5yZXNwb25zZS5lcnJvcjtcblxuXG4gICAgICAgICAgICBpZighXy5pc1VuZGVmaW5lZChlcnJvcnMubmFtZSkpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7bmFtZV9lcnJvcjogZXJyb3JzLm5hbWUuZXJyb3J9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighXy5pc1VuZGVmaW5lZChlcnJvcnMudXJsKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHt1cmxfZXJyb3I6IGVycm9ycy51cmwuZXJyb3J9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighXy5pc1VuZGVmaW5lZChlcnJvcnMuc2VuZGVyX25hbWUpKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3NlbmRlcl9uYW1lX2Vycm9yOiBlcnJvcnMuc2VuZGVyX25hbWUuZXJyb3J9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighXy5pc1VuZGVmaW5lZChlcnJvcnMuc2VuZGVyX2VtYWlsKSkge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtzZW5kZXJfZW1haWxfZXJyb3I6IGVycm9ycy5zZW5kZXJfZW1haWwuZXJyb3J9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGEgdG9rZW4gZXJyb3Igb2NjdXJyZWRcbiAgICAgICAgICAgIGlmKEpTT04ucGFyc2UocmVzLnRleHQpLmVycm9yKSB7XG4gICAgICAgICAgICAgIHZhciBlcnJvciA9IEpTT04ucGFyc2UocmVzLnRleHQpLmVycm9yO1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtzZXJ2ZXJfZXJyb3I6IGVycm9yfSk7XG5cbiAgICAgICAgICAgICAgaWYoSlNPTi5wYXJzZShyZXMudGV4dCkuc2Vzc2lvbl9pbnZhbGlkKSB7XG4gICAgICAgICAgICAgIHNlbGYucHJvcHMuc2V0VXNlcih1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuICAgICAgfSlcblxufVxuXG59LFxuXG5cbnJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbnZhciBjb29raWUgPSAkLmNvb2tpZShcImFwcGxpY2F0aW9uXCIpO1xudmFyIHdlYnNpdGVzID0gdGhpcy5wcm9wcy53ZWJzaXRlcztcblxuXG4gIHZhciBhY3RpdmVXZWJzaXRlID0gXy5maW5kKHdlYnNpdGVzLCB7IFwiaWRcIiA6IHBhcnNlSW50KEpTT04ucGFyc2UoY29va2llKS5hY3RpdmVXZWJzaXRlKX0pO1xuICB2YXIgd2Vic2l0ZV9pZCA9IEJhY2tib25lLmhpc3RvcnkuZnJhZ21lbnQucmVwbGFjZShcIndlYnNpdGVzL2VkaXQvXCIsIFwiXCIpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdmFyIHNlcnZlcl9lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUuc2VydmVyX2Vycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5zbWFsbCgge2NsYXNzTmFtZTpcImVycm9yXCJ9LCBzZWxmLnN0YXRlLnNlcnZlcl9lcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuICB2YXIgbmFtZV9lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHNlbGYuc3RhdGUubmFtZV9lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS5uYW1lX2Vycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG4gIHZhciB1cmxfZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzZWxmLnN0YXRlLnVybF9lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS51cmxfZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNlbmRlcl9uYW1lX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5zZW5kZXJfbmFtZV9lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5ET00uc21hbGwoIHtjbGFzc05hbWU6XCJlcnJvclwifSwgc2VsZi5zdGF0ZS5zZW5kZXJfbmFtZV9lcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgIH1cbiAgfTtcblxuICB2YXIgc2VuZGVyX2VtYWlsX2Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc2VsZi5zdGF0ZS5zZW5kZXJfZW1haWxfZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLnNtYWxsKCB7Y2xhc3NOYW1lOlwiZXJyb3JcIn0sIHNlbGYuc3RhdGUuc2VuZGVyX2VtYWlsX2Vycm9yKVxuICAgICAgICAgICAgICApXG4gICAgfVxuICB9O1xuXG5cbiAgaWYoIV8uaXNFbXB0eShhY3RpdmVXZWJzaXRlKSkge1xuICAgIGlmKGFjdGl2ZVdlYnNpdGUuaWQgPT09IHBhcnNlSW50KHdlYnNpdGVfaWQpKSB7XG5cbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInRleHQtY2VudGVyXCJ9LCBcblxuICAgICAgICAgICAgICBSZWFjdC5ET00udWwoIHtjbGFzc05hbWU6XCJicmVhZGNydW1ic1wifSwgXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5saShudWxsLCBSZWFjdC5ET00uYSgge29uQ2xpY2s6dGhpcy5yb3V0ZVdlYnNpdGVzfSwgXCJXZWJzaXRlc1wiKSksXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5saSgge2NsYXNzTmFtZTpcImN1cnJlbnRcIn0sIFwiRWRpdCBXZWJzaXRlXCIpLFxuICAgICAgICAgICAgICBSZWFjdC5ET00ubGkoIHtjbGFzc05hbWU6XCJjdXJyZW50XCJ9LCBhY3RpdmVXZWJzaXRlLm5hbWUpXG4gICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmgyKG51bGwsIFwiRWRpdGluZyBcIiwgYWN0aXZlV2Vic2l0ZS5uYW1lKSxcblxuICAgICAgICAgICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwicm93XCJ9LCBcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmZvcm0obnVsbCwgXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5maWVsZHNldChudWxsLCBcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmxlZ2VuZChudWxsLCBcIlVwZGF0ZSBEZXRhaWxzXCIpLFxuICAgICAgICAgICAgICBzZXJ2ZXJfZXJyb3IoKSxcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiV2Vic2l0ZSBOYW1lXCIsXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwibmFtZVwiLCB0eXBlOlwidGV4dFwiLCBwbGFjZWhvbGRlcjpcIldlYnNpdGUgTmFtZVwiLCBkZWZhdWx0VmFsdWU6YWN0aXZlV2Vic2l0ZS5uYW1lfSApLFxuICAgICAgICAgICAgICBuYW1lX2Vycm9yKClcbiAgICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgICBSZWFjdC5ET00ubGFiZWwobnVsbCwgXCJVUkxcIixcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJ1cmxcIiwgdHlwZTpcInRleHRcIiwgcGxhY2Vob2xkZXI6XCJXZWJzaXRlIFVSTFwiLCBkZWZhdWx0VmFsdWU6YWN0aXZlV2Vic2l0ZS51cmx9ICksXG4gICAgICAgICAgICAgIHVybF9lcnJvcigpXG4gICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiU2VuZGVyIE5hbWVcIixcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmlucHV0KCB7aWQ6XCJzZW5kZXJfbmFtZVwiLCB0eXBlOlwidGV4dFwiLCBwbGFjZWhvbGRlcjpcIlNlbmRlciBOYW1lXCIsIGRlZmF1bHRWYWx1ZTphY3RpdmVXZWJzaXRlLnNlbmRlcl9uYW1lfSApLFxuICAgICAgICAgICAgICBzZW5kZXJfbmFtZV9lcnJvcigpXG4gICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKG51bGwsIFwiU2VuZGVyIEVtYWlsXCIsXG4gICAgICAgICAgICAgIFJlYWN0LkRPTS5pbnB1dCgge2lkOlwic2VuZGVyX2VtYWlsXCIsIHR5cGU6XCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOlwiU2VuZGVyIEVtYWlsXCIsIGRlZmF1bHRWYWx1ZTphY3RpdmVXZWJzaXRlLnNlbmRlcl9lbWFpbH0gKSxcbiAgICAgICAgICAgICAgc2VuZGVyX2VtYWlsX2Vycm9yKClcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmJ1dHRvbigge29uQ2xpY2s6dGhpcy5zYXZlV2Vic2l0ZSwgY2xhc3NOYW1lOlwiYnV0dG9uIHJhZGl1cyBleHBhbmRcIn0sIFwiVXBkYXRlXCIpXG4gICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmhyKG51bGwgKSxcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmgzKG51bGwsIFwiUGVybWVuYW50bHkgRGVsZXRlIFdlYnNpdGVcIiksXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBSZWFjdC5ET00ucChudWxsLCBcIkNsaWNrIHRoZSBidXR0b24gYmVsb3cgdG8gXCIsIFJlYWN0LkRPTS5zdHJvbmcobnVsbCwgXCJwZXJtZW5hbnRseSByZW1vdmUgdGhlIFwiLCBhY3RpdmVXZWJzaXRlLm5hbWUsIFwiIHdlYnNpdGUgYW5kIGFsbCBvZiBpdHMgZGF0YVwiKSwgXCIgZnJvbSB0aGUgc3lzdGVtLlwiKSxcbiAgICAgICAgICAgICAgUmVhY3QuRE9NLmJ1dHRvbigge29uQ2xpY2s6dGhpcy5kZWxldGVXZWJzaXRlLCBjbGFzc05hbWU6XCJidXR0b24gcmFkaXVzIGFsZXJ0IGV4cGFuZFwifSwgXCJEZWxldGVcIilcbiAgICAgICAgICAgICAgKVxuXG5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG59IGVsc2Uge1xuICByZXR1cm4gKFxuICAgICAgICAgIFJlYWN0LkRPTS5kaXYobnVsbCwgXG4gICAgICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCJcbiAgICAgICAgICApKVxufSBcbn0gZWxzZSB7XG4gIHJldHVybiAoXG4gICAgICAgICAgUmVhY3QuRE9NLmRpdihudWxsLCBcbiAgICAgICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIlxuICAgICAgICAgICkpXG59XG59XG5cbn0pO1xuXG5leHBvcnRzLldlYnNpdGVzID0gV2Vic2l0ZXM7XG5leHBvcnRzLkFkZFdlYnNpdGUgPSBBZGRXZWJzaXRlO1xuZXhwb3J0cy5FZGl0V2Vic2l0ZSA9IEVkaXRXZWJzaXRlO1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29tcG9uZW50cy93ZWJzaXRlLmpzeFwiLFwiL2NvbXBvbmVudHNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKipcbiAqXG4gKiBUaGlzIGZpbGUgaXMgdXNlZCB0byBjb25maWd1cmUgc2V0dGluZ3MgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAqXG4gKiBAYXV0aG9yIERocnV2IEJoYXRpYSA8ZGhydXZAZGhydXZiaGF0aWEuY29tPlxuICpcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgV0VCU0lURV9OQU1FIDogJ1JlYWN0IERlbW8nLFxuXG4gIFJPVVRFUyA6IFtcbiAgICB7bmFtZTogJ0Rhc2hib2FyZCcsIHVybDogJycsIHNob3dJbk1lbnU6IHRydWUsIGFsbG93UGFyYW1ldGVyczogZmFsc2V9LFxuICAgIHtuYW1lOiAnVXNlcnMnLCB1cmw6ICd1c2VycycsIHNob3dJbk1lbnU6IHRydWUsIGFsbG93UGFyYW1ldGVyczogZmFsc2V9LFxuICAgIHtuYW1lOiAnV2Vic2l0ZXMnLCB1cmw6ICd3ZWJzaXRlcycsIHN1YnJvdXRlczogJ0FkZCBXZWJzaXRlLCBFZGl0IFdlYnNpdGUnLCBzaG93SW5NZW51OiB0cnVlLCBhbGxvd1BhcmFtZXRlcnM6IGZhbHNlfSxcbiAgICB7bmFtZTogJ0FkZCBXZWJzaXRlJywgdXJsOiAnd2Vic2l0ZXMvYWRkJywgc2hvd0luTWVudTogZmFsc2UsIGFsbG93UGFyYW1ldGVyczogZmFsc2V9LFxuICAgIHtuYW1lOiAnRWRpdCBXZWJzaXRlJywgdXJsOiAnd2Vic2l0ZXMvZWRpdCcsIHNob3dJbk1lbnU6IGZhbHNlLCBhbGxvd1BhcmFtZXRlcnM6IHRydWV9LFxuICAgIHtuYW1lOiAnQ2FtcGFpZ25zJywgdXJsOiAnY2FtcGFpZ25zJywgc2hvd0luTWVudTogdHJ1ZSwgYWxsb3dQYXJhbWV0ZXJzOiBmYWxzZX0sXG4gICAge25hbWU6ICdNeSBBY2NvdW50JywgdXJsOiAnYWNjb3VudCcsIHN1YnJvdXRlczogJ0VkaXQgQWNjb3VudCcsIHNob3dJbk1lbnU6IHRydWUsIGFsbG93UGFyYW1ldGVyczogZmFsc2V9LFxuICAgIHtuYW1lOiAnRWRpdCBBY2NvdW50JywgdXJsOiAnYWNjb3VudC9lZGl0Jywgc2hvd0luTWVudTogZmFsc2UsIGFsbG93UGFyYW1ldGVyczogZmFsc2V9LFxuICAgIHtuYW1lOiAnU3VwcG9ydCcsIHVybDogJ3N1cHBvcnQnLCBzaG93SW5NZW51OiB0cnVlLCBhbGxvd1BhcmFtZXRlcnM6IGZhbHNlfVxuICBdLFxuXG4gIFVSTFMgOiB7XG5cbiAgICAndmFsaWRhdGUnIDogJ2h0dHA6Ly8xOTIuMTY4LjE3OC4yMDo5MDAwL2FwaS92MS9hdXRoL3ZhbGlkYXRlLycsXG4gICAgJ3VwZGF0ZVdlYnNpdGUnIDogJ2h0dHA6Ly8xOTIuMTY4LjE3OC4yMDo5MDAwL2FwaS92MS93ZWJzaXRlL3VwZGF0ZScsXG4gICAgJ2FkZFdlYnNpdGUnIDogJ2h0dHA6Ly8xOTIuMTY4LjE3OC4yMDo5MDAwL2FwaS92MS93ZWJzaXRlL2FkZCcsXG4gICAgJ2RlbGV0ZVdlYnNpdGUnIDogJ2h0dHA6Ly8xOTIuMTY4LjE3OC4yMDo5MDAwL2FwaS92MS93ZWJzaXRlL2RlbGV0ZScsXG4gICAgJ2xvZ2luJyA6ICdodHRwOi8vMTkyLjE2OC4xNzguMjA6OTAwMC9hcGkvdjEvYXV0aC9sb2dpbicsXG4gICAgJ3JlZ2lzdGVyJyA6ICdodHRwOi8vMTkyLjE2OC4xNzguMjA6OTAwMC9hcGkvdjEvYWNjb3VudC9hZGQnLFxuICAgICd1cGRhdGVBY2NvdW50JyA6ICdodHRwOi8vMTkyLjE2OC4xNzguMjA6OTAwMC9hcGkvdjEvYWNjb3VudC91cGRhdGUnXG5cbiAgfSxcblxuXG4gIE1PREUgOiAnRGVidWcnXG5cbn07XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29uZmlnLmpzXCIsXCIvXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuJ3VzZSBzdHJpY3QnO1xuXG5cblxuXG4kKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gIHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvcm91dGVyXCIpO1xuICByZXF1aXJlKFwiLi9jb21wb25lbnRzL2xheW91dFwiKS5MYXlvdXQ7XG5cbiAgJChkb2N1bWVudCkuZm91bmRhdGlvbigpO1xuXG59KTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9mYWtlXzk5NDdkOTA5LmpzXCIsXCIvXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXG4gKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGNvbW1vbiBoZWxwZXIgZnVuY3Rpb25zIHdoaWNoIGV4dGVuZCBMby1EYXNoJ3MgXyBuYW1lc3BhY2UuXG4gKlxuICogQG5hbWVzcGFjZSBfXG4gKiBAYXV0aG9yIERocnV2IEJoYXRpYSA8ZGhydXZAZGhydXZiaGF0aWEuY29tPlxuICpcbiAqL1xuXG52YXIgQ09ORklHID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xuXG5fLm1peGluKHtcblxuICAvKipcbiAgICpcbiAgICogQ2hlY2tzIGZvciBhIHZhbGlkIHNlc3Npb24gY29va2llICYgcHVsbHMgZG93biBhbnkgdXBkYXRlcyBmcm9tIHRoZSBzZXJ2ZXIsXG4gICAqIG90aGVyd2lzZSBraWxscyB0aGUgY3VycmVudCBzZXNzaW9uIHdoaWNoIHNob3dzIHRoZSBMb2dpbiBzY3JlZW4uXG4gICAqXG4gICAqL1xuICBnZXRTZXNzaW9uOiBmdW5jdGlvbigpIHtcblxuXG4gICAgdmFyIGNvb2tpZSA9ICQuY29va2llKFwiYXBwbGljYXRpb25cIik7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKGNvb2tpZSkpIHtcblxuICAgICAgdmFyIHRva2VuID0gSlNPTi5wYXJzZShjb29raWUpLnNlc3Npb25JZDtcblxuICAgICAgc3VwZXJhZ2VudFxuICAgICAgICAuZ2V0KENPTkZJRy5VUkxTLnZhbGlkYXRlICsgdG9rZW4pXG4gICAgICAgIC5zZXQoJ1gtQVBJLUtleScsIHRva2VuKVxuICAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgICAgIC5lbmQoZnVuY3Rpb24oZXJyb3IsIHJlcykge1xuXG4gICAgICAgICAgaWYgKHJlcy5vayA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICB2YXIgc2Vzc2lvbklkID0gSlNPTi5wYXJzZShyZXMudGV4dCkuc2Vzc2lvbklkXG4gICAgICAgICAgICB2YXIgdXNlciA9IEpTT04ucGFyc2UocmVzLnRleHQpLnVzZXJcblxuICAgICAgICAgICAgdmFyIHVzZXJfd2Vic2l0ZXMgPSBKU09OLnBhcnNlKHJlcy50ZXh0KS53ZWJzaXRlc1xuXG4gICAgICAgICAgICB2YXIgYWN0aXZlV2Vic2l0ZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgaWYgKCFfLmlzRW1wdHkodXNlcl93ZWJzaXRlcykpIHtcbiAgICAgICAgICAgICAgLy8gc2V0IGFjdGl2ZSB3ZWJzaXRlIHRvIHRoZSBsYXN0IHNlbGVjdGVkIHdlYnNpdGUgaW4gdGhlIGNvb2tpZSwgZWxzZSBmaXJzdCB3ZWJzaXRlIGluIHRoZSB1c2VyJ3MgbGlzdFxuICAgICAgICAgICAgICBhY3RpdmVXZWJzaXRlID0gSlNPTi5wYXJzZShjb29raWUpLmFjdGl2ZVdlYnNpdGU7XG5cblxuXG4gICAgICAgICAgICAgIGlmIChfLmlzRW1wdHkoXy5maW5kKHVzZXJfd2Vic2l0ZXMsIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IHBhcnNlSW50KGFjdGl2ZVdlYnNpdGUpXG4gICAgICAgICAgICAgIH0pKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVdlYnNpdGUpXG4gICAgICAgICAgICAgICAgYWN0aXZlV2Vic2l0ZSA9IF8uZmlyc3QodXNlcl93ZWJzaXRlcykuaWQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkLmNvb2tpZShcImFwcGxpY2F0aW9uXCIsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgXCJzZXNzaW9uSWRcIjogc2Vzc2lvbklkLFxuICAgICAgICAgICAgICBcImFjdGl2ZVdlYnNpdGVcIjogYWN0aXZlV2Vic2l0ZVxuICAgICAgICAgICAgfSksIHtcbiAgICAgICAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgICAgICAgIGV4cGlyZXM6IDEyMFxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgc2VsZi5zZXRXZWJzaXRlKGFjdGl2ZVdlYnNpdGUpO1xuXG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgICAgICAgYWN0aXZlV2Vic2l0ZTogYWN0aXZlV2Vic2l0ZSxcbiAgICAgICAgICAgICAgd2Vic2l0ZXM6IHVzZXJfd2Vic2l0ZXMsXG4gICAgICAgICAgICAgIHJlbmRlcjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG5cblxuXG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gQ29va2llIG5vIGxvbmdlciB2YWxpZCAtIHJlbmRlciBsb2dpbiBmb3JtXG4gICAgICAgICAgICBzZWxmLnNldFVzZXIodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICByZW5kZXI6IHRydWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcblxuICAgICAgICB9KTtcblxuXG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyBObyBwcmV2IGNvb2tpZSAtIHJlbmRlciBsb2dpbiBmb3JtXG4gICAgICBzZWxmLnNldFVzZXIodW5kZWZpbmVkKTtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICByZW5kZXI6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgfVxuICB9XG5cbn0pO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCIvVXNlcnMvZGhydXZiaGF0aWEvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LWJvaWxlcnBsYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3V0aWwuanNcIixcIi9cIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5fdXNlVHlwZWRBcnJheXNgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAoY29tcGF0aWJsZSBkb3duIHRvIElFNilcbiAqL1xuQnVmZmVyLl91c2VUeXBlZEFycmF5cyA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIERldGVjdCBpZiBicm93c2VyIHN1cHBvcnRzIFR5cGVkIEFycmF5cy4gU3VwcG9ydGVkIGJyb3dzZXJzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssXG4gIC8vIENocm9tZSA3KywgU2FmYXJpIDUuMSssIE9wZXJhIDExLjYrLCBpT1MgNC4yKy4gSWYgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBhZGRpbmdcbiAgLy8gcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLCB0aGVuIHRoYXQncyB0aGUgc2FtZSBhcyBubyBgVWludDhBcnJheWAgc3VwcG9ydFxuICAvLyBiZWNhdXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBhZGQgYWxsIHRoZSBub2RlIEJ1ZmZlciBBUEkgbWV0aG9kcy4gVGhpcyBpcyBhbiBpc3N1ZVxuICAvLyBpbiBGaXJlZm94IDQtMjkuIE5vdyBmaXhlZDogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4XG4gIHRyeSB7XG4gICAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigwKVxuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgYXJyLmZvbyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH1cbiAgICByZXR1cm4gNDIgPT09IGFyci5mb28oKSAmJlxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nIC8vIENocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn0pKClcblxuLyoqXG4gKiBDbGFzczogQnVmZmVyXG4gKiA9PT09PT09PT09PT09XG4gKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBhcmUgYXVnbWVudGVkXG4gKiB3aXRoIGZ1bmN0aW9uIHByb3BlcnRpZXMgZm9yIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBBUEkgZnVuY3Rpb25zLiBXZSB1c2VcbiAqIGBVaW50OEFycmF5YCBzbyB0aGF0IHNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0IHJldHVybnNcbiAqIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIEJ5IGF1Z21lbnRpbmcgdGhlIGluc3RhbmNlcywgd2UgY2FuIGF2b2lkIG1vZGlmeWluZyB0aGUgYFVpbnQ4QXJyYXlgXG4gKiBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIEJ1ZmZlciAoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSlcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKVxuXG4gIHZhciB0eXBlID0gdHlwZW9mIHN1YmplY3RcblxuICAvLyBXb3JrYXJvdW5kOiBub2RlJ3MgYmFzZTY0IGltcGxlbWVudGF0aW9uIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBzdHJpbmdzXG4gIC8vIHdoaWxlIGJhc2U2NC1qcyBkb2VzIG5vdC5cbiAgaWYgKGVuY29kaW5nID09PSAnYmFzZTY0JyAmJiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHN1YmplY3QgPSBzdHJpbmd0cmltKHN1YmplY3QpXG4gICAgd2hpbGUgKHN1YmplY3QubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgICAgc3ViamVjdCA9IHN1YmplY3QgKyAnPSdcbiAgICB9XG4gIH1cblxuICAvLyBGaW5kIHRoZSBsZW5ndGhcbiAgdmFyIGxlbmd0aFxuICBpZiAodHlwZSA9PT0gJ251bWJlcicpXG4gICAgbGVuZ3RoID0gY29lcmNlKHN1YmplY3QpXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKVxuICAgIGxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKHN1YmplY3QsIGVuY29kaW5nKVxuICBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JylcbiAgICBsZW5ndGggPSBjb2VyY2Uoc3ViamVjdC5sZW5ndGgpIC8vIGFzc3VtZSB0aGF0IG9iamVjdCBpcyBhcnJheS1saWtlXG4gIGVsc2VcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG5lZWRzIHRvIGJlIGEgbnVtYmVyLCBhcnJheSBvciBzdHJpbmcuJylcblxuICB2YXIgYnVmXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgLy8gUHJlZmVycmVkOiBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIGJ1ZiA9IEJ1ZmZlci5fYXVnbWVudChuZXcgVWludDhBcnJheShsZW5ndGgpKVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gVEhJUyBpbnN0YW5jZSBvZiBCdWZmZXIgKGNyZWF0ZWQgYnkgYG5ld2ApXG4gICAgYnVmID0gdGhpc1xuICAgIGJ1Zi5sZW5ndGggPSBsZW5ndGhcbiAgICBidWYuX2lzQnVmZmVyID0gdHJ1ZVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgJiYgdHlwZW9mIHN1YmplY3QuYnl0ZUxlbmd0aCA9PT0gJ251bWJlcicpIHtcbiAgICAvLyBTcGVlZCBvcHRpbWl6YXRpb24gLS0gdXNlIHNldCBpZiB3ZSdyZSBjb3B5aW5nIGZyb20gYSB0eXBlZCBhcnJheVxuICAgIGJ1Zi5fc2V0KHN1YmplY3QpXG4gIH0gZWxzZSBpZiAoaXNBcnJheWlzaChzdWJqZWN0KSkge1xuICAgIC8vIFRyZWF0IGFycmF5LWlzaCBvYmplY3RzIGFzIGEgYnl0ZSBhcnJheVxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSlcbiAgICAgICAgYnVmW2ldID0gc3ViamVjdC5yZWFkVUludDgoaSlcbiAgICAgIGVsc2VcbiAgICAgICAgYnVmW2ldID0gc3ViamVjdFtpXVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGJ1Zi53cml0ZShzdWJqZWN0LCAwLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiAhQnVmZmVyLl91c2VUeXBlZEFycmF5cyAmJiAhbm9aZXJvKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBidWZbaV0gPSAwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG4vLyBTVEFUSUMgTUVUSE9EU1xuLy8gPT09PT09PT09PT09PT1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIChiKSB7XG4gIHJldHVybiAhIShiICE9PSBudWxsICYmIGIgIT09IHVuZGVmaW5lZCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmJ5dGVMZW5ndGggPSBmdW5jdGlvbiAoc3RyLCBlbmNvZGluZykge1xuICB2YXIgcmV0XG4gIHN0ciA9IHN0ciArICcnXG4gIHN3aXRjaCAoZW5jb2RpbmcgfHwgJ3V0ZjgnKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggLyAyXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IHV0ZjhUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBiYXNlNjRUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoICogMlxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiAobGlzdCwgdG90YWxMZW5ndGgpIHtcbiAgYXNzZXJ0KGlzQXJyYXkobGlzdCksICdVc2FnZTogQnVmZmVyLmNvbmNhdChsaXN0LCBbdG90YWxMZW5ndGhdKVxcbicgK1xuICAgICAgJ2xpc3Qgc2hvdWxkIGJlIGFuIEFycmF5LicpXG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoMClcbiAgfSBlbHNlIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBsaXN0WzBdXG4gIH1cblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHRvdGFsTGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgIHRvdGFsTGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b3RhbExlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWYgPSBuZXcgQnVmZmVyKHRvdGFsTGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIGl0ZW0uY29weShidWYsIHBvcylcbiAgICBwb3MgKz0gaXRlbS5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cbi8vIEJVRkZFUiBJTlNUQU5DRSBNRVRIT0RTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBfaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBhc3NlcnQoc3RyTGVuICUgMiA9PT0gMCwgJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBieXRlID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGFzc2VydCghaXNOYU4oYnl0ZSksICdJbnZhbGlkIGhleCBzdHJpbmcnKVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVcbiAgfVxuICBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9IGkgKiAyXG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIF91dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfYmluYXJ5V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gX2FzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBfYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF91dGYxNmxlV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIFN1cHBvcnQgYm90aCAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpXG4gIC8vIGFuZCB0aGUgbGVnYWN5IChzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBpZiAoIWlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIH0gZWxzZSB7ICAvLyBsZWdhY3lcbiAgICB2YXIgc3dhcCA9IGVuY29kaW5nXG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBvZmZzZXQgPSBsZW5ndGhcbiAgICBsZW5ndGggPSBzd2FwXG4gIH1cblxuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuXG4gIHZhciByZXRcbiAgc3dpdGNoIChlbmNvZGluZykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBfaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gX3V0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBfYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiaW5hcnknOlxuICAgICAgcmV0ID0gX2JpbmFyeVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBfYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IF91dGYxNmxlV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuICBzdGFydCA9IE51bWJlcihzdGFydCkgfHwgMFxuICBlbmQgPSAoZW5kICE9PSB1bmRlZmluZWQpXG4gICAgPyBOdW1iZXIoZW5kKVxuICAgIDogZW5kID0gc2VsZi5sZW5ndGhcblxuICAvLyBGYXN0cGF0aCBlbXB0eSBzdHJpbmdzXG4gIGlmIChlbmQgPT09IHN0YXJ0KVxuICAgIHJldHVybiAnJ1xuXG4gIHZhciByZXRcbiAgc3dpdGNoIChlbmNvZGluZykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBfaGV4U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gX3V0ZjhTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBfYXNjaWlTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiaW5hcnknOlxuICAgICAgcmV0ID0gX2JpbmFyeVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBfYmFzZTY0U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IF91dGYxNmxlU2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRfc3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNvdXJjZSA9IHRoaXNcblxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAoIXRhcmdldF9zdGFydCkgdGFyZ2V0X3N0YXJ0ID0gMFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHNvdXJjZS5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgYXNzZXJ0KGVuZCA+PSBzdGFydCwgJ3NvdXJjZUVuZCA8IHNvdXJjZVN0YXJ0JylcbiAgYXNzZXJ0KHRhcmdldF9zdGFydCA+PSAwICYmIHRhcmdldF9zdGFydCA8IHRhcmdldC5sZW5ndGgsXG4gICAgICAndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChzdGFydCA+PSAwICYmIHN0YXJ0IDwgc291cmNlLmxlbmd0aCwgJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoZW5kID49IDAgJiYgZW5kIDw9IHNvdXJjZS5sZW5ndGgsICdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKVxuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0IDwgZW5kIC0gc3RhcnQpXG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCArIHN0YXJ0XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG5cbiAgaWYgKGxlbiA8IDEwMCB8fCAhQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICB0YXJnZXRbaSArIHRhcmdldF9zdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuX3NldCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksIHRhcmdldF9zdGFydClcbiAgfVxufVxuXG5mdW5jdGlvbiBfYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIF91dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmVzID0gJydcbiAgdmFyIHRtcCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIGlmIChidWZbaV0gPD0gMHg3Rikge1xuICAgICAgcmVzICs9IGRlY29kZVV0ZjhDaGFyKHRtcCkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgICAgIHRtcCA9ICcnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcCArPSAnJScgKyBidWZbaV0udG9TdHJpbmcoMTYpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcyArIGRlY29kZVV0ZjhDaGFyKHRtcClcbn1cblxuZnVuY3Rpb24gX2FzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKVxuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBfYmluYXJ5U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICByZXR1cm4gX2FzY2lpU2xpY2UoYnVmLCBzdGFydCwgZW5kKVxufVxuXG5mdW5jdGlvbiBfaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiBfdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpKzFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IGNsYW1wKHN0YXJ0LCBsZW4sIDApXG4gIGVuZCA9IGNsYW1wKGVuZCwgbGVuLCBsZW4pXG5cbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICByZXR1cm4gQnVmZmVyLl9hdWdtZW50KHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCkpXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICB2YXIgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkLCB0cnVlKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47IGkrKykge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICAgIHJldHVybiBuZXdCdWZcbiAgfVxufVxuXG4vLyBgZ2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuZ2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy5yZWFkVUludDgob2Zmc2V0KVxufVxuXG4vLyBgc2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodiwgb2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuc2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy53cml0ZVVJbnQ4KHYsIG9mZnNldClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuZnVuY3Rpb24gX3JlYWRVSW50MTYgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsXG4gIGlmIChsaXR0bGVFbmRpYW4pIHtcbiAgICB2YWwgPSBidWZbb2Zmc2V0XVxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXSA8PCA4XG4gIH0gZWxzZSB7XG4gICAgdmFsID0gYnVmW29mZnNldF0gPDwgOFxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MTYodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MTYodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkVUludDMyIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbFxuICBpZiAobGl0dGxlRW5kaWFuKSB7XG4gICAgaWYgKG9mZnNldCArIDIgPCBsZW4pXG4gICAgICB2YWwgPSBidWZbb2Zmc2V0ICsgMl0gPDwgMTZcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV0gPDwgOFxuICAgIHZhbCB8PSBidWZbb2Zmc2V0XVxuICAgIGlmIChvZmZzZXQgKyAzIDwgbGVuKVxuICAgICAgdmFsID0gdmFsICsgKGJ1ZltvZmZzZXQgKyAzXSA8PCAyNCA+Pj4gMClcbiAgfSBlbHNlIHtcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCA9IGJ1ZltvZmZzZXQgKyAxXSA8PCAxNlxuICAgIGlmIChvZmZzZXQgKyAyIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAyXSA8PCA4XG4gICAgaWYgKG9mZnNldCArIDMgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDNdXG4gICAgdmFsID0gdmFsICsgKGJ1ZltvZmZzZXRdIDw8IDI0ID4+PiAwKVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MzIodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRVSW50MzIodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCxcbiAgICAgICAgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIHZhciBuZWcgPSB0aGlzW29mZnNldF0gJiAweDgwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5mdW5jdGlvbiBfcmVhZEludDE2IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbCA9IF9yZWFkVUludDE2KGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIHRydWUpXG4gIHZhciBuZWcgPSB2YWwgJiAweDgwMDBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmZmZiAtIHZhbCArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDE2KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQxNih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRJbnQzMiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWwgPSBfcmVhZFVJbnQzMihidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCB0cnVlKVxuICB2YXIgbmVnID0gdmFsICYgMHg4MDAwMDAwMFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZmZmZmZmZiAtIHZhbCArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDMyKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQzMih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRGbG9hdCAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICByZXR1cm4gaWVlZTc1NC5yZWFkKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRmxvYXQodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEZsb2F0KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZERvdWJsZSAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICsgNyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICByZXR1cm4gaWVlZTc1NC5yZWFkKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZERvdWJsZSh0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZERvdWJsZSh0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmYpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKSByZXR1cm5cblxuICB0aGlzW29mZnNldF0gPSB2YWx1ZVxufVxuXG5mdW5jdGlvbiBfd3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZmZmKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihsZW4gLSBvZmZzZXQsIDIpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID1cbiAgICAgICAgKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgICAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZmZmZmZmZilcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4obGVuIC0gb2Zmc2V0LCA0KTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9XG4gICAgICAgICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZiwgLTB4ODApXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIHRoaXMud3JpdGVVSW50OCh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydClcbiAgZWxzZVxuICAgIHRoaXMud3JpdGVVSW50OCgweGZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmZmYsIC0weDgwMDApXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICBfd3JpdGVVSW50MTYoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgX3dyaXRlVUludDE2KGJ1ZiwgMHhmZmZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgX3dyaXRlVUludDMyKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbiAgZWxzZVxuICAgIF93cml0ZVVJbnQzMihidWYsIDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmSUVFRTc1NCh2YWx1ZSwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDcgPCBidWYubGVuZ3RoLFxuICAgICAgICAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZklFRUU3NTQodmFsdWUsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGZpbGwodmFsdWUsIHN0YXJ0PTAsIGVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKHZhbHVlLCBzdGFydCwgZW5kKSB7XG4gIGlmICghdmFsdWUpIHZhbHVlID0gMFxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQpIGVuZCA9IHRoaXMubGVuZ3RoXG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLmNoYXJDb2RlQXQoMClcbiAgfVxuXG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFpc05hTih2YWx1ZSksICd2YWx1ZSBpcyBub3QgYSBudW1iZXInKVxuICBhc3NlcnQoZW5kID49IHN0YXJ0LCAnZW5kIDwgc3RhcnQnKVxuXG4gIC8vIEZpbGwgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgYXNzZXJ0KHN0YXJ0ID49IDAgJiYgc3RhcnQgPCB0aGlzLmxlbmd0aCwgJ3N0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoZW5kID49IDAgJiYgZW5kIDw9IHRoaXMubGVuZ3RoLCAnZW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgdGhpc1tpXSA9IHZhbHVlXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb3V0ID0gW11cbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBvdXRbaV0gPSB0b0hleCh0aGlzW2ldKVxuICAgIGlmIChpID09PSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTKSB7XG4gICAgICBvdXRbaSArIDFdID0gJy4uLidcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgb3V0LmpvaW4oJyAnKSArICc+J1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYEFycmF5QnVmZmVyYCB3aXRoIHRoZSAqY29waWVkKiBtZW1vcnkgb2YgdGhlIGJ1ZmZlciBpbnN0YW5jZS5cbiAqIEFkZGVkIGluIE5vZGUgMC4xMi4gT25seSBhdmFpbGFibGUgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IEFycmF5QnVmZmVyLlxuICovXG5CdWZmZXIucHJvdG90eXBlLnRvQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgICAgcmV0dXJuIChuZXcgQnVmZmVyKHRoaXMpKS5idWZmZXJcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KHRoaXMubGVuZ3RoKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJ1Zi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSlcbiAgICAgICAgYnVmW2ldID0gdGhpc1tpXVxuICAgICAgcmV0dXJuIGJ1Zi5idWZmZXJcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCdWZmZXIudG9BcnJheUJ1ZmZlciBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicpXG4gIH1cbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG52YXIgQlAgPSBCdWZmZXIucHJvdG90eXBlXG5cbi8qKlxuICogQXVnbWVudCBhIFVpbnQ4QXJyYXkgKmluc3RhbmNlKiAobm90IHRoZSBVaW50OEFycmF5IGNsYXNzISkgd2l0aCBCdWZmZXIgbWV0aG9kc1xuICovXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5faXNCdWZmZXIgPSB0cnVlXG5cbiAgLy8gc2F2ZSByZWZlcmVuY2UgdG8gb3JpZ2luYWwgVWludDhBcnJheSBnZXQvc2V0IG1ldGhvZHMgYmVmb3JlIG92ZXJ3cml0aW5nXG4gIGFyci5fZ2V0ID0gYXJyLmdldFxuICBhcnIuX3NldCA9IGFyci5zZXRcblxuICAvLyBkZXByZWNhdGVkLCB3aWxsIGJlIHJlbW92ZWQgaW4gbm9kZSAwLjEzK1xuICBhcnIuZ2V0ID0gQlAuZ2V0XG4gIGFyci5zZXQgPSBCUC5zZXRcblxuICBhcnIud3JpdGUgPSBCUC53cml0ZVxuICBhcnIudG9TdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9Mb2NhbGVTdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9KU09OID0gQlAudG9KU09OXG4gIGFyci5jb3B5ID0gQlAuY29weVxuICBhcnIuc2xpY2UgPSBCUC5zbGljZVxuICBhcnIucmVhZFVJbnQ4ID0gQlAucmVhZFVJbnQ4XG4gIGFyci5yZWFkVUludDE2TEUgPSBCUC5yZWFkVUludDE2TEVcbiAgYXJyLnJlYWRVSW50MTZCRSA9IEJQLnJlYWRVSW50MTZCRVxuICBhcnIucmVhZFVJbnQzMkxFID0gQlAucmVhZFVJbnQzMkxFXG4gIGFyci5yZWFkVUludDMyQkUgPSBCUC5yZWFkVUludDMyQkVcbiAgYXJyLnJlYWRJbnQ4ID0gQlAucmVhZEludDhcbiAgYXJyLnJlYWRJbnQxNkxFID0gQlAucmVhZEludDE2TEVcbiAgYXJyLnJlYWRJbnQxNkJFID0gQlAucmVhZEludDE2QkVcbiAgYXJyLnJlYWRJbnQzMkxFID0gQlAucmVhZEludDMyTEVcbiAgYXJyLnJlYWRJbnQzMkJFID0gQlAucmVhZEludDMyQkVcbiAgYXJyLnJlYWRGbG9hdExFID0gQlAucmVhZEZsb2F0TEVcbiAgYXJyLnJlYWRGbG9hdEJFID0gQlAucmVhZEZsb2F0QkVcbiAgYXJyLnJlYWREb3VibGVMRSA9IEJQLnJlYWREb3VibGVMRVxuICBhcnIucmVhZERvdWJsZUJFID0gQlAucmVhZERvdWJsZUJFXG4gIGFyci53cml0ZVVJbnQ4ID0gQlAud3JpdGVVSW50OFxuICBhcnIud3JpdGVVSW50MTZMRSA9IEJQLndyaXRlVUludDE2TEVcbiAgYXJyLndyaXRlVUludDE2QkUgPSBCUC53cml0ZVVJbnQxNkJFXG4gIGFyci53cml0ZVVJbnQzMkxFID0gQlAud3JpdGVVSW50MzJMRVxuICBhcnIud3JpdGVVSW50MzJCRSA9IEJQLndyaXRlVUludDMyQkVcbiAgYXJyLndyaXRlSW50OCA9IEJQLndyaXRlSW50OFxuICBhcnIud3JpdGVJbnQxNkxFID0gQlAud3JpdGVJbnQxNkxFXG4gIGFyci53cml0ZUludDE2QkUgPSBCUC53cml0ZUludDE2QkVcbiAgYXJyLndyaXRlSW50MzJMRSA9IEJQLndyaXRlSW50MzJMRVxuICBhcnIud3JpdGVJbnQzMkJFID0gQlAud3JpdGVJbnQzMkJFXG4gIGFyci53cml0ZUZsb2F0TEUgPSBCUC53cml0ZUZsb2F0TEVcbiAgYXJyLndyaXRlRmxvYXRCRSA9IEJQLndyaXRlRmxvYXRCRVxuICBhcnIud3JpdGVEb3VibGVMRSA9IEJQLndyaXRlRG91YmxlTEVcbiAgYXJyLndyaXRlRG91YmxlQkUgPSBCUC53cml0ZURvdWJsZUJFXG4gIGFyci5maWxsID0gQlAuZmlsbFxuICBhcnIuaW5zcGVjdCA9IEJQLmluc3BlY3RcbiAgYXJyLnRvQXJyYXlCdWZmZXIgPSBCUC50b0FycmF5QnVmZmVyXG5cbiAgcmV0dXJuIGFyclxufVxuXG4vLyBzbGljZShzdGFydCwgZW5kKVxuZnVuY3Rpb24gY2xhbXAgKGluZGV4LCBsZW4sIGRlZmF1bHRWYWx1ZSkge1xuICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykgcmV0dXJuIGRlZmF1bHRWYWx1ZVxuICBpbmRleCA9IH5+aW5kZXg7ICAvLyBDb2VyY2UgdG8gaW50ZWdlci5cbiAgaWYgKGluZGV4ID49IGxlbikgcmV0dXJuIGxlblxuICBpZiAoaW5kZXggPj0gMCkgcmV0dXJuIGluZGV4XG4gIGluZGV4ICs9IGxlblxuICBpZiAoaW5kZXggPj0gMCkgcmV0dXJuIGluZGV4XG4gIHJldHVybiAwXG59XG5cbmZ1bmN0aW9uIGNvZXJjZSAobGVuZ3RoKSB7XG4gIC8vIENvZXJjZSBsZW5ndGggdG8gYSBudW1iZXIgKHBvc3NpYmx5IE5hTiksIHJvdW5kIHVwXG4gIC8vIGluIGNhc2UgaXQncyBmcmFjdGlvbmFsIChlLmcuIDEyMy40NTYpIHRoZW4gZG8gYVxuICAvLyBkb3VibGUgbmVnYXRlIHRvIGNvZXJjZSBhIE5hTiB0byAwLiBFYXN5LCByaWdodD9cbiAgbGVuZ3RoID0gfn5NYXRoLmNlaWwoK2xlbmd0aClcbiAgcmV0dXJuIGxlbmd0aCA8IDAgPyAwIDogbGVuZ3RoXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkgKHN1YmplY3QpIHtcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChzdWJqZWN0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzdWJqZWN0KSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICB9KShzdWJqZWN0KVxufVxuXG5mdW5jdGlvbiBpc0FycmF5aXNoIChzdWJqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5KHN1YmplY3QpIHx8IEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSB8fFxuICAgICAgc3ViamVjdCAmJiB0eXBlb2Ygc3ViamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIHR5cGVvZiBzdWJqZWN0Lmxlbmd0aCA9PT0gJ251bWJlcidcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIHZhciBiID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBpZiAoYiA8PSAweDdGKVxuICAgICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpXG4gICAgZWxzZSB7XG4gICAgICB2YXIgc3RhcnQgPSBpXG4gICAgICBpZiAoYiA+PSAweEQ4MDAgJiYgYiA8PSAweERGRkYpIGkrK1xuICAgICAgdmFyIGggPSBlbmNvZGVVUklDb21wb25lbnQoc3RyLnNsaWNlKHN0YXJ0LCBpKzEpKS5zdWJzdHIoMSkuc3BsaXQoJyUnKVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBoLmxlbmd0aDsgaisrKVxuICAgICAgICBieXRlQXJyYXkucHVzaChwYXJzZUludChoW2pdLCAxNikpXG4gICAgfVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KHN0cilcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBwb3NcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSlcbiAgICAgIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gZGVjb2RlVXRmOENoYXIgKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweEZGRkQpIC8vIFVURiA4IGludmFsaWQgY2hhclxuICB9XG59XG5cbi8qXG4gKiBXZSBoYXZlIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSB2YWx1ZSBpcyBhIHZhbGlkIGludGVnZXIuIFRoaXMgbWVhbnMgdGhhdCBpdFxuICogaXMgbm9uLW5lZ2F0aXZlLiBJdCBoYXMgbm8gZnJhY3Rpb25hbCBjb21wb25lbnQgYW5kIHRoYXQgaXQgZG9lcyBub3RcbiAqIGV4Y2VlZCB0aGUgbWF4aW11bSBhbGxvd2VkIHZhbHVlLlxuICovXG5mdW5jdGlvbiB2ZXJpZnVpbnQgKHZhbHVlLCBtYXgpIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlID49IDAsICdzcGVjaWZpZWQgYSBuZWdhdGl2ZSB2YWx1ZSBmb3Igd3JpdGluZyBhbiB1bnNpZ25lZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBpcyBsYXJnZXIgdGhhbiBtYXhpbXVtIHZhbHVlIGZvciB0eXBlJylcbiAgYXNzZXJ0KE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZSwgJ3ZhbHVlIGhhcyBhIGZyYWN0aW9uYWwgY29tcG9uZW50Jylcbn1cblxuZnVuY3Rpb24gdmVyaWZzaW50ICh2YWx1ZSwgbWF4LCBtaW4pIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGxhcmdlciB0aGFuIG1heGltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA+PSBtaW4sICd2YWx1ZSBzbWFsbGVyIHRoYW4gbWluaW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZSwgJ3ZhbHVlIGhhcyBhIGZyYWN0aW9uYWwgY29tcG9uZW50Jylcbn1cblxuZnVuY3Rpb24gdmVyaWZJRUVFNzU0ICh2YWx1ZSwgbWF4LCBtaW4pIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGxhcmdlciB0aGFuIG1heGltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA+PSBtaW4sICd2YWx1ZSBzbWFsbGVyIHRoYW4gbWluaW11bSBhbGxvd2VkIHZhbHVlJylcbn1cblxuZnVuY3Rpb24gYXNzZXJ0ICh0ZXN0LCBtZXNzYWdlKSB7XG4gIGlmICghdGVzdCkgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgfHwgJ0ZhaWxlZCBhc3NlcnRpb24nKVxufVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXJcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG52YXIgbG9va3VwID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXG47KGZ1bmN0aW9uIChleHBvcnRzKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuICB2YXIgQXJyID0gKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJylcbiAgICA/IFVpbnQ4QXJyYXlcbiAgICA6IEFycmF5XG5cblx0dmFyIFpFUk8gICA9ICcwJy5jaGFyQ29kZUF0KDApXG5cdHZhciBQTFVTICAgPSAnKycuY2hhckNvZGVBdCgwKVxuXHR2YXIgU0xBU0ggID0gJy8nLmNoYXJDb2RlQXQoMClcblx0dmFyIE5VTUJFUiA9ICcwJy5jaGFyQ29kZUF0KDApXG5cdHZhciBMT1dFUiAgPSAnYScuY2hhckNvZGVBdCgwKVxuXHR2YXIgVVBQRVIgID0gJ0EnLmNoYXJDb2RlQXQoMClcblxuXHRmdW5jdGlvbiBkZWNvZGUgKGVsdCkge1xuXHRcdHZhciBjb2RlID0gZWx0LmNoYXJDb2RlQXQoMClcblx0XHRpZiAoY29kZSA9PT0gUExVUylcblx0XHRcdHJldHVybiA2MiAvLyAnKydcblx0XHRpZiAoY29kZSA9PT0gU0xBU0gpXG5cdFx0XHRyZXR1cm4gNjMgLy8gJy8nXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIpXG5cdFx0XHRyZXR1cm4gLTEgLy9ubyBtYXRjaFxuXHRcdGlmIChjb2RlIDwgTlVNQkVSICsgMTApXG5cdFx0XHRyZXR1cm4gY29kZSAtIE5VTUJFUiArIDI2ICsgMjZcblx0XHRpZiAoY29kZSA8IFVQUEVSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIFVQUEVSXG5cdFx0aWYgKGNvZGUgPCBMT1dFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBMT1dFUiArIDI2XG5cdH1cblxuXHRmdW5jdGlvbiBiNjRUb0J5dGVBcnJheSAoYjY0KSB7XG5cdFx0dmFyIGksIGosIGwsIHRtcCwgcGxhY2VIb2xkZXJzLCBhcnJcblxuXHRcdGlmIChiNjQubGVuZ3RoICUgNCA+IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG5cdFx0fVxuXG5cdFx0Ly8gdGhlIG51bWJlciBvZiBlcXVhbCBzaWducyAocGxhY2UgaG9sZGVycylcblx0XHQvLyBpZiB0aGVyZSBhcmUgdHdvIHBsYWNlaG9sZGVycywgdGhhbiB0aGUgdHdvIGNoYXJhY3RlcnMgYmVmb3JlIGl0XG5cdFx0Ly8gcmVwcmVzZW50IG9uZSBieXRlXG5cdFx0Ly8gaWYgdGhlcmUgaXMgb25seSBvbmUsIHRoZW4gdGhlIHRocmVlIGNoYXJhY3RlcnMgYmVmb3JlIGl0IHJlcHJlc2VudCAyIGJ5dGVzXG5cdFx0Ly8gdGhpcyBpcyBqdXN0IGEgY2hlYXAgaGFjayB0byBub3QgZG8gaW5kZXhPZiB0d2ljZVxuXHRcdHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cdFx0cGxhY2VIb2xkZXJzID0gJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDIpID8gMiA6ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAxKSA/IDEgOiAwXG5cblx0XHQvLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcblx0XHRhcnIgPSBuZXcgQXJyKGI2NC5sZW5ndGggKiAzIC8gNCAtIHBsYWNlSG9sZGVycylcblxuXHRcdC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcblx0XHRsID0gcGxhY2VIb2xkZXJzID4gMCA/IGI2NC5sZW5ndGggLSA0IDogYjY0Lmxlbmd0aFxuXG5cdFx0dmFyIEwgPSAwXG5cblx0XHRmdW5jdGlvbiBwdXNoICh2KSB7XG5cdFx0XHRhcnJbTCsrXSA9IHZcblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBqID0gMDsgaSA8IGw7IGkgKz0gNCwgaiArPSAzKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDE4KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpIDw8IDEyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpIDw8IDYpIHwgZGVjb2RlKGI2NC5jaGFyQXQoaSArIDMpKVxuXHRcdFx0cHVzaCgodG1wICYgMHhGRjAwMDApID4+IDE2KVxuXHRcdFx0cHVzaCgodG1wICYgMHhGRjAwKSA+PiA4KVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdGlmIChwbGFjZUhvbGRlcnMgPT09IDIpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA+PiA0KVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH0gZWxzZSBpZiAocGxhY2VIb2xkZXJzID09PSAxKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDEwKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpIDw8IDQpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPj4gMilcblx0XHRcdHB1c2goKHRtcCA+PiA4KSAmIDB4RkYpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFyclxuXHR9XG5cblx0ZnVuY3Rpb24gdWludDhUb0Jhc2U2NCAodWludDgpIHtcblx0XHR2YXIgaSxcblx0XHRcdGV4dHJhQnl0ZXMgPSB1aW50OC5sZW5ndGggJSAzLCAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuXHRcdFx0b3V0cHV0ID0gXCJcIixcblx0XHRcdHRlbXAsIGxlbmd0aFxuXG5cdFx0ZnVuY3Rpb24gZW5jb2RlIChudW0pIHtcblx0XHRcdHJldHVybiBsb29rdXAuY2hhckF0KG51bSlcblx0XHR9XG5cblx0XHRmdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuXHRcdFx0cmV0dXJuIGVuY29kZShudW0gPj4gMTggJiAweDNGKSArIGVuY29kZShudW0gPj4gMTIgJiAweDNGKSArIGVuY29kZShudW0gPj4gNiAmIDB4M0YpICsgZW5jb2RlKG51bSAmIDB4M0YpXG5cdFx0fVxuXG5cdFx0Ly8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuXHRcdGZvciAoaSA9IDAsIGxlbmd0aCA9IHVpbnQ4Lmxlbmd0aCAtIGV4dHJhQnl0ZXM7IGkgPCBsZW5ndGg7IGkgKz0gMykge1xuXHRcdFx0dGVtcCA9ICh1aW50OFtpXSA8PCAxNikgKyAodWludDhbaSArIDFdIDw8IDgpICsgKHVpbnQ4W2kgKyAyXSlcblx0XHRcdG91dHB1dCArPSB0cmlwbGV0VG9CYXNlNjQodGVtcClcblx0XHR9XG5cblx0XHQvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG5cdFx0c3dpdGNoIChleHRyYUJ5dGVzKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRlbXAgPSB1aW50OFt1aW50OC5sZW5ndGggLSAxXVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCA0KSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPT0nXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRlbXAgPSAodWludDhbdWludDgubGVuZ3RoIC0gMl0gPDwgOCkgKyAodWludDhbdWludDgubGVuZ3RoIC0gMV0pXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAxMClcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA+PiA0KSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgMikgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz0nXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dHB1dFxuXHR9XG5cblx0bW9kdWxlLmV4cG9ydHMudG9CeXRlQXJyYXkgPSBiNjRUb0J5dGVBcnJheVxuXHRtb2R1bGUuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gdWludDhUb0Jhc2U2NFxufSgpKVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIi9Vc2Vycy9kaHJ1dmJoYXRpYS9Eb2N1bWVudHMvcHJvamVjdHMvcmVhY3QtYm9pbGVycGxhdGUvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luc2VydC1tb2R1bGUtZ2xvYmFscy9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanNcIixcIi8uLi8uLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24oYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBuQml0cyA9IC03LFxuICAgICAgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwLFxuICAgICAgZCA9IGlzTEUgPyAtMSA6IDEsXG4gICAgICBzID0gYnVmZmVyW29mZnNldCArIGldO1xuXG4gIGkgKz0gZDtcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgcyA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IGVMZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBlID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gbUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzO1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSk7XG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICBlID0gZSAtIGVCaWFzO1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pO1xufTtcblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKSxcbiAgICAgIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKSxcbiAgICAgIGQgPSBpc0xFID8gMSA6IC0xLFxuICAgICAgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMDtcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKTtcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMDtcbiAgICBlID0gZU1heDtcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMik7XG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tO1xuICAgICAgYyAqPSAyO1xuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrKztcbiAgICAgIGMgLz0gMjtcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwO1xuICAgICAgZSA9IGVNYXg7XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IGUgKyBlQmlhcztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCk7XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbTtcbiAgZUxlbiArPSBtTGVuO1xuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpO1xuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyODtcbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NFwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gZXYuc291cmNlO1xuICAgICAgICAgICAgaWYgKChzb3VyY2UgPT09IHdpbmRvdyB8fCBzb3VyY2UgPT09IG51bGwpICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufVxuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiL1VzZXJzL2RocnV2YmhhdGlhL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC1ib2lsZXJwbGF0ZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIixcIi8uLi8uLi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzXCIpIl19
