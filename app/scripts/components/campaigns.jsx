/** @jsx React.DOM */
'use strict';

var Campaigns = React.createClass({

  getInitialState: function() {

    return {'elements' : []};

  },

  addElement: function(e) {

    e.preventDefault();
    var elementArray = this.state.elements;
    console.log(elementArray);
    elementArray.push(elementArray.length);

    this.setState({'elements' : elementArray});

  },

  render: function() {

    var self = this;

    var elementChain = _.map(self.state.elements, function(element) {

            return(
                   <div>
                   <div className="panel radius noBottomMargin">{element}</div>
                   <div className="connector"></div>
                   </div>

             );

    });

    return (
            <div>
            <p>{this.props.path}</p>
            

            <div className="panel chart tall" id="ruleBuilder">
            <div className="panel radius noBottomMargin">Users</div>
            <div className="connector"></div>
            {elementChain}
            <button className="button radius" onClick={this.addElement}>+</button>

            </div>

            </div>
            );
  }

});

exports.Campaigns = Campaigns;