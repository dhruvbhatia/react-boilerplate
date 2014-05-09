/**
 *
 * This file is used to configure settings for the application.
 *
 * @author Dhruv Bhatia <dhruv@dhruvbhatia.com>
 *
 */
module.exports = {

  ROUTES : [
    {name: "Dashboard", url: "", showInMenu: true},
    {name: "Websites", url: "websites", subroutes: "Add Website", showInMenu: true},
    {name: "Add Website", url: "websites/add", showInMenu: false},
    {name: "Campaigns", url: "campaigns", showInMenu: true},
    {name: "My Account", url: "account", subroutes: "Edit Account", showInMenu: true},
    {name: "Edit Account", url: "account/edit", showInMenu: false}
  ],

  MODE : "Debug"

};