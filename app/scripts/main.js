var config = require("./config");
Layout = require("./components/layout").Layout;
Login = require("./components/layout").Login;
TopBar = require("./components/layout").TopBar;
LeftMenu = require("./components/layout").LeftMenu;
WebsiteSelector = require("./components/layout").WebsiteSelector;
Content = require("./components/layout").Content;
Router = require("./components/layout").Router;



Dashboard = require("./components/dashboard").Dashboard;
MyAccount = require("./components/my-account").MyAccount;
Website = require("./components/website").Website;
AddWebsite = require("./components/website").AddWebsite;





window.onload = function() {

  $(document).foundation();

}();