/** @jsx React.DOM */
'use strict';

var Campaigns = React.createClass({

  componentDidMount: function() {

    var self = this;

    $(document).foundation('reveal', {animation: 'fade', animation_speed: 50});

  },

  getInitialState: function() {

    return {elements : [], counter : 0, modal: false};

  },

  addLateralElement: function(e) {

    e.preventDefault();
    var elementArray = this.state.elements;
    var counter = this.state.counter + 1;
    if(elementArray.length === 0) {
      counter = 1;
    }

    elementArray.push(counter);

    this.setState({elements : elementArray, counter: counter});

  },

  blah: function() {

    console.log("asd");

  },

  removeLateralElement: function(e) {
    e.preventDefault();

    var elementKey = parseInt($(e.target).closest('div').parent().attr('id'));

    var filtered = _.filter(this.state.elements, function(element, key) {
      return key !== elementKey;
    });

    this.setState({'elements' : filtered});

  },

  render: function() {

    var self = this;

    var elementChain = _.map(self.state.elements, function(element, key) {

      return(
             <div key={key} id={key}>
             <div className="panel radius noBottomMargin">
             {element}
             <a onClick={self.removeLateralElement} className="right">&times;</a>
             </div>
             <div className="connector"></div>
             </div>

             );

    });

    return (
            <div>
            <p>{this.props.path}</p>
            <a href="#" data-reveal-id="myModal">Click Me For A Modal</a>
            

            <div className="panel chart tall" id="ruleBuilder">
            <div className="panel radius noBottomMargin">Users</div>
            <div className="connector"></div>
            {elementChain}
            <button className="button radius" onClick={self.addLateralElement}>+</button>

            </div>


            <div key="4" id="myModal" className="reveal-modal tiny" data-reveal>
            <h2>Awesome. I have it.</h2>
            <p className="lead">Your couch.  It is mine.</p>
            <p>Im a cool paragraph that lives inside of an even cooler modal. Wins</p>
            <button className="button radius" onClick={self.blah}>+</button>
            <a className="close-reveal-modal">&#215;</a>
            </div>

            </div>
            );
  }

});

exports.Campaigns = Campaigns;