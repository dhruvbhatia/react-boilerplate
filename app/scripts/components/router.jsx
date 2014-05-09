/** @jsx React.DOM */

var CONFIG = require('../config');
var Layout = require("./layout").Layout;

Router = Backbone.Router.extend({
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
                          <div></div>,
                          document.getElementById('application')
                          );
  },
  showLayout : function(pos) {

    // Look up the current route against CONFIG.ROUTES so that we can populate Layout with the pretty navPos name.
    var navPos = _.find(CONFIG.ROUTES, { 'url': pos });
    if(_.has(navPos, "name")) {
      navPos = navPos.name
    } else {
      navPos = "Dashboard"
    }

    React.renderComponent(
                          <Layout navLinks={CONFIG.ROUTES} navPos={navPos} />,
                          document.getElementById('application')
                          );
  },
  index : function() {
    //this.clearLayout();
    this.showLayout("dashboard");
  },
  websites : function() {
    //this.clearLayout();
    this.showLayout("websites");
  },
  websitesAdd : function() {
    //this.clearLayout();
    this.showLayout("websites/add");
  },
  campaigns : function() {
    //this.clearLayout();
    this.showLayout("campaigns");
  },
  account : function() {
    //this.clearLayout();
    this.showLayout("account");
  },
  accountEdit : function() {
    //this.clearLayout();
    this.showLayout("account/edit");
  }
});

router = new Router();

Backbone.history.start({pushState: true});