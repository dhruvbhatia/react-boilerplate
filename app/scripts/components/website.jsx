/** @jsx React.DOM */

var Website = React.createClass({

  routeAddWebsite: function(e) {
    e.preventDefault();
    console.log("button clicked");
    this.props.setWebsite(undefined);
    this.props.setPos("websites/add", "Add Website");
  },

  render: function() {

    return (

      <div className="text-center">

      <button onClick={this.routeAddWebsite} className="button radius">Add Website</button>

      </div>
    )

  }

});


var AddWebsite = React.createClass({

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