/**
 *
 * This file is used to configure settings for the application.
 *
 * @author Dhruv Bhatia <dhruv@dhruvbhatia.com>
 *
 */
module.exports = {

  WEBSITE_NAME : "React Demo",

  ROUTES : [
    {name: "Dashboard", url: "", showInMenu: true, allowParameters: false},
    {name: "Websites", url: "websites", subroutes: "Add Website, Edit Website", showInMenu: true, allowParameters: false},
    {name: "Add Website", url: "websites/add", showInMenu: false, allowParameters: false},
    {name: "Edit Website", url: "websites/edit", showInMenu: false, allowParameters: true},
    {name: "Campaigns", url: "campaigns", showInMenu: true, allowParameters: false},
    {name: "My Account", url: "account", subroutes: "Edit Account", showInMenu: true, allowParameters: false},
    {name: "Edit Account", url: "account/edit", showInMenu: false, allowParameters: false},
    {name: "Support", url: "support", showInMenu: true, allowParameters: false}
  ],

  URLS : {

    "validate" : "http://192.168.178.20:9000/api/v1/auth/validate/",
    "updateWebsite" : "http://192.168.178.20:9000/api/v1/website/update",
    "addWebsite" : "http://192.168.178.20:9000/api/v1/website/add",
    "deleteWebsite" : "http://192.168.178.20:9000/api/v1/website/delete",
    "login" : 'http://192.168.178.20:9000/api/v1/auth/login'

  },


  MODE : "Debug"

};