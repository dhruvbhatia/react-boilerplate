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

            user.websites = JSON.parse(res.text).websites

            // set active website to the last selected website in the cookie, else first website in the user's list
            var active_website = JSON.parse(cookie).user.website || _.pick(_.first(user.websites), "id").id;

            if (_.isEmpty(_.first(_.filter(user.websites, {
              'id': JSON.parse(cookie).user.website
            })))) {
              if (_.first(user.websites) === undefined) {
                active_website = undefined;
              } else {
                active_website = _.first(user.websites).id;
              }
            }

            $.cookie("application", JSON.stringify({
              "sessionId": sessionId,
              "user": user
            }), {
              path: "/",
              expires: 120
            });

            self.setWebsite(active_website);

            self.setState({
              loggedIn: user,
              render: true
            });

            if (_.isEmpty(user.websites)) {
              self.setState({
                navPos: "Add Website"
              });
              router.navigate("websites/add");
            }

          } else {

            // Cookie no longer valid - render login form
            self.setLoggedIn(undefined);
            self.setState({
              render: true
            });

          }

          console.log(res);

        });



    } else {

      // No prev cookie - render login form
      self.setLoggedIn(undefined);
      self.setState({
        render: true
      });

    }
  }

});