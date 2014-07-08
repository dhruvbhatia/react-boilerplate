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
  },

  findDeep: function(items, attrs) {

    function match(value) {
      for (var key in attrs) {
        if(!_.isUndefined(value)) {
          if (attrs[key] !== value[key]) {
            return false;
          }
        }
      }

      return true;
    }

    function traverse(value) {
      var result;

      _.forEach(value, function (val) {
        if (match(val)) {
          result = val;
          return false;
        }

        if (_.isObject(val) || _.isArray(val)) {
          result = traverse(val);
        }

        if (result) {
          return false;
        }
      });

      return result;
    }

    return traverse(items);

  }

});