/** @jsx React.DOM */

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

  componentWillMount: function() {

    // Ensure current path references a valid website



  },

  routeWebsites: function(e) {
    e.preventDefault();
    this.props.setPos("websites", "Websites");
  },

  render: function() {

    var website = _.getActiveWebsite();
    var self = this;

    return (

            <div className="text-center">

            <ul className="breadcrumbs">
            <li><a onClick={this.routeWebsites}>Websites</a></li>
            <li className="current">Edit Website</li>
            </ul>

            <h2>Editing {website.name}</h2>

            </div>
            )

  }

});

exports.Websites = Websites;
exports.AddWebsite = AddWebsite;
exports.EditWebsite = EditWebsite;
