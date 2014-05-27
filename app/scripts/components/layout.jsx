/** @jsx React.DOM */
'use strict';

var CONFIG = require('../config');
require('../util');

/*jshint ignore:start */
var Dashboard = require('./dashboard').Dashboard;
var Login = require('./login').Login;
var Settings = require('./settings').Settings;
var EditAccount = require('./settings').EditAccount;
var Websites = require('./website').Websites;
var AddWebsite = require('./website').AddWebsite;
var EditWebsite = require('./website').EditWebsite;
var Users = require('./users').Users;
var EditUser = require('./users').EditUser;
var UserProfile = require('./users').UserProfile;
var Campaigns = require('./campaigns').Campaigns;
/*jshint ignore:end */



var Layout = React.createClass({
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

    return {path: path, user: undefined, render: false, activeWebsite: undefined, websites: undefined, alert: {'message' : 'Test message', 'type' : 'success'}, websiteContacts: undefined};
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


  setWebsiteContacts: function(contacts) {

    this.setState({websiteContacts: contacts});

  },

  setWebsite: function(website) {

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

      website = parseInt(website);

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
                  <div>
                  <Login path={this.state.path} setPos={this.setPos} user={this.state.user} setUser={this.setUser} setWebsite={this.setWebsite} websites={this.state.websites} setWebsites={this.setWebsites} alert={this.state.alert} setAlert={this.setAlert} />
                  </div>
                  );
        } else {

        // User is logged in
        return (
                <div>
                <LeftMenu routes={this.props.routes} path={this.state.path} setPos={this.setPos} user={this.state.user} setUser={this.setUser} activeWebsite={this.state.activeWebsite} setWebsite={this.setWebsite} websites={this.state.websites} setWebsites={this.setWebsites} alert={this.state.alert} setAlert={this.setAlert} />
                <Content path={this.state.path} setPos={this.setPos} user={this.state.user} setUser={this.setUser} activeWebsite={this.state.activeWebsite} setWebsite={this.setWebsite} websites={this.state.websites} setWebsites={this.setWebsites} alert={this.state.alert} setAlert={this.setAlert} websiteContacts={this.state.websiteContacts} setWebsiteContacts={this.setWebsiteContacts} />
                </div>
                );
      }
    } else {

      var loadingMsgStyle = {
       position: 'relative',
       top: '30%'
     };

     return(

            <div className='row text-center' style={loadingMsgStyle}>
            <h1>Loading...</h1>
            </div>
            );

   }

   /*jshint ignore:end */
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
    router.navigate('', {trigger: false, replace: true});
    this.props.setUser(undefined);
    this.props.setWebsites(undefined);
    this.props.setPos('', 'Dashboard');

  },

  render: function() {

    return (
            <div id='topBar' className='sticky'>
            <nav className='top-bar' data-topbar data-options='is_hover: false'>
            <ul className='title-area'>
            <li className='name'>
            <h1><a href='#'>Web App Name</a></h1>
            </li>
            <li className='toggle-topbar menu-icon'><a href='#'>Menu</a></li>
            </ul>

            <section className='top-bar-section'>

            <ul className='right'>
            <li className='active has-dropdown'>
            <a href='#'>Logged in as {this.props.user.fullName}</a>
            <ul className='dropdown'>
            <li><a data-nav='settings' onClick={this.route}>Settings</a></li>
            <li><a onClick={this.logout}>Logout</a></li>
            </ul>
            </li>
            <li className='has-dropdown'>
            <a href='#'>Help</a>
            <ul className='dropdown'>
            <li><a href='#'>Getting Started Guide</a></li>
            <li><a href='#'>API Documentation</a></li>
            <li><a href='#'>Contact Us</a></li>
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
    //this.props.setWebsite('default');

  },

  render: function() {
    /*jshint ignore:start */
    var self = this;
    
    var links = _.map(_.filter(this.props.routes, 'showInMenu'), function(link, key) {

      var classString = '';
      var icon = '/images/icon-' + link.name.toLowerCase() + '.png';
      if((self.props.path===link.name) || (_.contains(link.subroutes,self.props.path))){classString = 'active';}

      return <li key={key}><a href={link.url} onClick={self.route} data-nav={link.url} className={classString}><img src={icon} />{link.name}</a></li>;
    });

    return (
            <div id='leftMenu'>
            <WebsiteSelector activeWebsite={this.props.activeWebsite} setWebsite={this.props.setWebsite} setPos={this.props.setPos} websites={this.props.websites} setWebsites={this.props.setWebsites} alert={this.props.alert} setAlert={this.props.setAlert} />
            <ul className='side-nav'>{links}</ul>
            </div>
            );

    /*jshint ignore:end */
  }

});


var WebsiteSelector = React.createClass({

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

        return (<option key={site.id} value={site.id}>{site.name}</option>);

      });

    }

    return (

            <div>

            <select id='websiteSelector' onChange={this.websiteSelected} value={value}>

            <option key='0' value='0'>Add New Website</option>
            {links}
            </select>

            </div>
            );


    /*jshint ignore:end */
  }

});

var Content = React.createClass({

  logout: function(e) {

    e.preventDefault();
    router.navigate('', {trigger: false, replace: true});
    this.props.setUser(undefined);
    this.props.setWebsites(undefined);
    this.props.setPos('', 'Dashboard');

  },

  render: function() {


    var section = null;
    var self = this;

    // scroll to top
    $(window).scrollTop(0);

    // The code below checks if there is a React component that matches the current path's name.
    // If there is, then render it, otherwise just render the name of the current path.
    if ( eval("typeof " + this.props.path.replace(" ","") + " === 'function'") ){

      var element = eval(this.props.path.replace(' ',''));

      section = (<element path={this.props.path} setPos={this.props.setPos} user={this.props.user} setUser={this.props.setUser} setWebsite={this.props.setWebsite} activeWebsite={this.props.activeWebsite} websites={this.props.websites} setWebsites={this.props.setWebsites} alert={this.props.alert} setAlert={this.props.setAlert} websiteContacts={this.props.websiteContacts} setWebsiteContacts={this.props.setWebsiteContacts} />);

    } else {
      section = (
                 <p>{this.props.path}</p>
                 );
    }


    var alerts = function() {

      if(!_.isEmpty(self.props.alert.message)) {
        var classString = 'alert-box radius ' + self.props.alert.type;
        return (

                <div data-alert className={classString}>
                {self.props.alert.message}
                </div>
                );
      }

    };

    return (
            <div id='content'>

            <div id='userInfo'>
            Logged in as <span className='gotham'>{this.props.user.fullName}</span>
            <button onClick={this.logout} className="button radius small">Logout</button>
            </div>
            {alerts()}

            {section}
            </div>
            );

  }

});


exports.Layout = Layout;