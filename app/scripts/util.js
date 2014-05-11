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

            if (_.isEmpty(user_websites)) {
              self.setState({
                path: "Add Website"
              });
              router.navigate("websites/add");
            }

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