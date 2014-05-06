/** @jsx React.DOM */

var MyAccount = React.createClass({

  routeEditAccount: function(e) {
    e.preventDefault();
    console.log("button clicked");
    this.props.setPos("account/edit", "Edit Account");
  },

  render: function() {

    return (

      <div className="text-center">

      <img className="th" src="http://gravatar.com/avatar/f00161c7b35f0084d390f785e015b9ca.jpg" />
      <h1>{this.props.loggedIn.fullName}</h1>
      <h3>{this.props.loggedIn.email}</h3>
      <h4>Registered {moment(this.props.loggedIn.createdAt).fromNow()}</h4>

      <button onClick={this.routeEditAccount} className="button radius">Edit Account</button>

      </div>
    )

  }

});


var EditAccount = React.createClass({

  routeMyAccount: function(e) {
    e.preventDefault();
    this.props.setPos("account", "My Account");
  },

  render: function() {

    return (

      <div className="text-center">

        <ul className="breadcrumbs">
          <li><a onClick={this.routeMyAccount}>My Account</a></li>
          <li className="current">Edit Account</li>
        </ul>


        Edit Account

      </div>
    )

  }

});


