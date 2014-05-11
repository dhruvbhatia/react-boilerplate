/** @jsx React.DOM */

var CONFIG = require('../config');

var Websites = React.createClass({

  routeAddWebsite: function(e) {
    e.preventDefault();
    console.log("button clicked");
    this.props.setWebsite(undefined);
    this.props.setPos("websites/add", "Add Website");
  },

  routeEditWebsite: function(e) {
    e.preventDefault();
    var website_id = $(e.target).closest("tr").attr("id");
    console.log(website_id);
    this.props.setWebsite(website_id);
    this.props.setPos("websites/edit/" + website_id, "Edit Website");
  },

  render: function() {

    var websites = _.getWebsites();
    var self = this;


    var website_rows = _.map(websites, function(website) {

      return(
             <tr id={website.id}>
             <td>{website.name}</td>
             <td>{website.sender_name} ({website.sender_email})</td>
             <td>{moment(website.created_at).fromNow()}</td>
             <td><button onClick={self.routeEditWebsite} className="button radius">Edit</button></td>
             </tr>

             )

    });

    return (

            <div>
            <h2>Websites</h2>

            <table width="100%">
            <thead>
            <tr>
            <th>Website Name</th>
            <th>Sender Details</th>
            <th>Created</th>
            <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {website_rows}
            </tbody>
            </table>




            <div className="text-center">
            <button onClick={this.routeAddWebsite} className="button radius">Add New Website</button>

            <br />
            {websites}

            </div>
            </div>
            )

  }

});


var AddWebsite = React.createClass({

  componentDidMount: function() {

    this.props.setWebsite(undefined);

  },

  routeWebsites: function(e) {
    e.preventDefault();
    this.props.setPos("websites", "Websites");
  },

  render: function() {

    return (

            <div className="text-center">

            <ul className="breadcrumbs">
            <li><a onClick={this.routeWebsites}>Websites</a></li>
            <li className="current">Add Website</li>
            </ul>


            Add Website

            </div>
            )

  }

});

var EditWebsite = React.createClass({

  componentDidMount: function() {


    // Ensure current path references a website that the user owns
    var website_id = Backbone.history.fragment.replace("websites/edit/", "");
    var websites = _.getWebsites();

    console.log(website_id)

    if(this.props.website !== website_id) {
    var match = _.find(websites, {"id" : parseInt(website_id)});

    if(!_.isEmpty(match)) {

      // Path id is a valid website
      this.props.setWebsite(website_id);

    } else {

      // Path id is not a valid website
      this.props.setPos("websites", "Websites");

    }

}
  },

  routeWebsites: function(e) {
    e.preventDefault();
    this.props.setPos("websites", "Websites");
  },

  saveWebsite: function(e) {
    e.preventDefault();
    console.log("saving..");

    var active_website = _.getActiveWebsite();

    var name = $('input#name').val();
    var url = $('input#url').val();
    var sender_name = $('input#sender_name').val();
    var sender_email = $('input#sender_email').val();

    active_website.name = name;
    active_website.url = url;
    active_website.sender_name = sender_name;
    active_website.sender_email = sender_email;

    console.log(active_website);

    var cookie = JSON.parse($.cookie("application"));
    var token = cookie.sessionId;


    superagent
      .post(CONFIG.URLS.updateWebsite + token)
      .send(active_website)
      .set('Accept', 'application/json')
      .end(function(error, res){

        console.log(res);

      })

    },


    render: function() {

      var active_website = _.getActiveWebsite();
      var website_id = Backbone.history.fragment.replace("websites/edit/", "");
      var self = this;

      if(active_website.id === parseInt(website_id)) {

      return (

              <div className="text-center">

              <ul className="breadcrumbs">
              <li><a onClick={this.routeWebsites}>Websites</a></li>
              <li className="current">Edit Website</li>
              </ul>

              <h2>Editing {active_website.name}</h2>

              <div className="row">
              <form>
              <fieldset>
              <legend>Update Details</legend>

              <label>Website Name
              <input id="name" type="text" placeholder="Website Name" defaultValue={active_website.name} />
              </label>

              <label>URL
              <input id="url" type="text" placeholder="Website URL" defaultValue={active_website.url} />
              </label>

              <label>Sender Name
              <input id="sender_name" type="text" placeholder="Sender Name" defaultValue={active_website.sender_name} />
              </label>

              <label>Sender Email
              <input id="sender_email" type="text" placeholder="Sender Name" defaultValue={active_website.sender_email} />
              </label>

              </fieldset>

              <button onClick={this.saveWebsite} className="button radius expand">Update</button>
              </form>
              </div>


              </div>
              )
} else {
  return (
          <div>
          An unexpected error occurred
          </div>)
}
}

});

exports.Websites = Websites;
exports.AddWebsite = AddWebsite;
exports.EditWebsite = EditWebsite;
