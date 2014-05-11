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
                          <Layout routes={CONFIG.ROUTES} />,
                          document.getElementById('application')
                          );
  }
});

router = new Router();

Backbone.history.start({pushState: true});