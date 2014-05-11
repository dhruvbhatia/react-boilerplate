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

  getInitialState: function() {

    return {name_error: false, url_error: false, sender_name_error: false, sender_email_error: false, server_error: undefined};

  },

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
  var self = this;

  var name = $('input#name').val();
  var url = $('input#url').val();
  var sender_name = $('input#sender_name').val();
  var sender_email = $('input#sender_email').val();


    // Validate - fields must not be empty
    if(_.isEmpty(name)) {
      self.setState({name_error: "Name cannot be blank"});
    } else {
      self.setState({name_error: false});
    };

    if(_.isEmpty(url)) {
      self.setState({url_error: true});
    } else {
      self.setState({url_error: false});
    };

    if(_.isEmpty(sender_name)) {
      self.setState({sender_name_error: true});
    } else {
      self.setState({sender_name_error: false});
    };

    if(_.isEmpty(sender_email)) {
      self.setState({sender_email_error: true});
    } else {
      self.setState({sender_email_error: false});
    };

// send to server if client validation passes
if(!_.some([_.isEmpty(name), _.isEmpty(url), _.isEmpty(sender_name), _.isEmpty(sender_email)])) {
  active_website.name = name;
  active_website.url = url;
  active_website.sender_name = sender_name;
  active_website.sender_email = sender_email;

  console.log(active_website);

  var cookie = JSON.parse($.cookie("application"));
  var token = cookie.sessionId;


  superagent
  .post(CONFIG.URLS.updateWebsite)
  .set('X-API-Key', token)
  .query(active_website)
  .set('Accept', 'application/json')
  .end(function(error, res){

    console.log(res);

    if(res.ok) {



    } else {

          // a validation error occurred
          if(JSON.parse(res.text).response) {
            var errors = JSON.parse(res.text).response.error;


            if(!_.isUndefined(errors.name)) {
              self.setState({name_error: errors.name.error})
            }

          } else {
            // a token error occurred
            if(JSON.parse(res.text).error) {
              var error = JSON.parse(res.text).error;
              self.setState({server_error: error});

              self.props.setLoggedIn(undefined);
            }
          }

        }


      })

}

},


render: function() {

  var active_website = _.getActiveWebsite();
  var website_id = Backbone.history.fragment.replace("websites/edit/", "");
  var self = this;

  var server_error = function() {
    if(self.state.server_error !== undefined) {
      return (
              <small className="error">{self.state.server_error}</small>
              )
    }
  };

  var name_error = function() {
    if(self.state.name_error !== false) {
      return (
              <small className="error">{self.state.name_error}</small>
              )
    }
  };


  if(!_.isEmpty(active_website)) {
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
              {server_error()}
              <label>Website Name
              <input id="name" type="text" placeholder="Website Name" defaultValue={active_website.name} />
              {name_error()}
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
