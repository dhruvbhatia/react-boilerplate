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
    // Look up the current route against CONFIG.ROUTES so that we can populate Layout with the pretty navPos name.
    // If the current path isn't defined in CONFIG.ROUTES, send to the Dashboard
    var navPos = _.find(CONFIG.ROUTES, { 'url': pos });


    // If no path, then use the first route.
    if(_.isEmpty(pos)) {
      navPos = _.first(CONFIG.ROUTES);
    }

    // Current path isn't found. Check if it's a route with parameters
    if(_.isEmpty(navPos)) {

      navPos = _.last(_.filter(CONFIG.ROUTES, function(route) {
        return _.contains(pos, route.url) && route.allowParameters;
      }));

    }


    if(_.has(navPos, "name")) {
      navPos = navPos.name
    } else {
      navPos = "Dashboard"
    }

    React.renderComponent(
                          <Layout navLinks={CONFIG.ROUTES} navPos={navPos} />,
                          document.getElementById('application')
                          );
  }
});

router = new Router();

Backbone.history.start({pushState: true});