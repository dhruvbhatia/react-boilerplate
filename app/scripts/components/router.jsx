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
                          <Layout routes={CONFIG.ROUTES} />,
                          document.getElementById('application')
                          );
    /*jshint ignore:end */
  }
});

window.router = new Router();

Backbone.history.start({pushState: true});