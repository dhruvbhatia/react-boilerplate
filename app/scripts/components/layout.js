/** @jsx React.DOM */

var navigation_data = [
  {name: "Dashboard", url: ""},
  {name: "Campaigns", url: "#campaigns"},
  {name: "My Account", url: "#myaccount"}
];

var Layout = React.createClass({
  getInitialState: function() {
    return {navPos: "Dashboard"};
  },

  setPos: function(pos) {
    this.setState({navPos: pos})
  },

  render: function() {
    return (
      <div>
      <LeftMenu navLinks={this.props.navLinks} navPos={this.state.navPos} setPos={this.setPos} />
      <Content navPos={this.state.navPos} setPos={this.setPos} />
      </div>
    );
  }

});

var LeftMenu = React.createClass({

route: function(event) {
    event.preventDefault();
    var url = $(event.target).attr('data-nav');
    var pos = $(event.target).text();

    this.props.setPos(pos);
  },

  render: function() {

    var self = this;
    
    var links = _.map(this.props.navLinks, function(link) {
      return <a href={link.url} onClick={self.route}><li data-nav={link.url}>{link.name}</li></a>
    });

    return (
      <div id="leftMenu">
      <ul>{links}</ul>
      </div>
    );
  }

});

var Content = React.createClass({

  render: function() {
    if(this.props.navPos === "Dashboard") {
      return (
        <div id="content">
        <p>{this.props.navPos}</p>
        </div>
      )
    } else {
      return (
        <div id="content">
        <p>{this.props.navPos}</p>
        </div>
      );
  }
  }

});

React.renderComponent(
  <Layout navLinks={navigation_data} />,
  document.getElementById('application')
);