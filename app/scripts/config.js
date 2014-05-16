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
    {name: "Dashboard", url: "", show_in_menu: true, allow_parameters: false},
    {name: "Users", url: "users", show_in_menu: true, allow_parameters: false},
    {name: "Websites", url: "websites", subroutes: "Add Website, Edit Website", show_in_menu: true, allow_parameters: false},
    {name: "Add Website", url: "websites/add", show_in_menu: false, allow_parameters: false},
    {name: "Edit Website", url: "websites/edit", show_in_menu: false, allow_parameters: true},
    {name: "Campaigns", url: "campaigns", show_in_menu: true, allow_parameters: false},
    {name: "My Account", url: "account", subroutes: "Edit Account", show_in_menu: true, allow_parameters: false},
    {name: "Edit Account", url: "account/edit", show_in_menu: false, allow_parameters: false},
    {name: "Support", url: "support", show_in_menu: true, allow_parameters: false}
  ],

  URLS : {

    "validate" : "http://192.168.178.20:9000/api/v1/auth/validate/",
    "updateWebsite" : "http://192.168.178.20:9000/api/v1/website/update",
    "addWebsite" : "http://192.168.178.20:9000/api/v1/website/add",
    "deleteWebsite" : "http://192.168.178.20:9000/api/v1/website/delete",
    "login" : 'http://192.168.178.20:9000/api/v1/auth/login',
    "register" : "http://192.168.178.20:9000/api/v1/account/add",
    "updateAccount" : "http://192.168.178.20:9000/api/v1/account/update"

  },


  MODE : "Debug"

};