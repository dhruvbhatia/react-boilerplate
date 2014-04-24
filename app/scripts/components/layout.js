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
    
    var links = _.map(this.props.navLinks, function(link, key) {

      var classString = "";
      if(self.props.navPos===link.name){classString = "active"};
      
      return <a href={link.url} onClick={self.route} key={key} className={classString}><li data-nav={link.url}>{link.name}</li></a>
    });

    return (
      <div id="leftMenu" className="small-4 large-2 columns">
      <ul className="no-bullet">{links}</ul>
      </div>
    );
  }

});

var Content = React.createClass({

  render: function() {
    
    var section = null;
    if(this.props.navPos === "Dashboard") {
      section = (
        <Dashboard navPos={this.props.navPos} setPos={this.props.setPos} />
      )
    } else {
      section = (
        <p>{this.props.navPos}</p>
      )
    }

    return (
      <div id="content" className="small-8 large-10 columns">
      {section}
      </div>
    )

  }

});

React.renderComponent(
  <Layout navLinks={navigation_data} />,
  document.getElementById('application')
);