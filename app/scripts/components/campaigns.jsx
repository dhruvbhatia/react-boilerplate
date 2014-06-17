/** @jsx React.DOM */
'use strict';

var Campaigns = React.createClass({

  componentDidMount: function() {

    var self = this;

    $(document).foundation('reveal', {animation: 'fade', animation_speed: 50});

    $(document).on('click', '.reveal-modal button', function (e) {


      if(e.target.id === 'addSendEmailButton') {


        $('#sendEmailModal').foundation('reveal', 'close');

        self.addLateralElement(e.target.id);

      }

    });

  },

  componentWillUnmount: function() {

    $(document).off('click', '.reveal-modal button');

  },

  getInitialState: function() {

    return {elements : [], counter : 0, modal: false};

  },

  addLateralElement: function(message) {

    //e.preventDefault();
    var elementArray = this.state.elements;
    var counter = this.state.counter + 1;
    if(elementArray.length === 0) {
      counter = 1;
    }

    elementArray.push({id: counter, message: message});

    this.setState({elements : elementArray, counter: counter});

  },

  blah: function() {

    console.log("asd");

  },

  removeLateralElement: function(e) {
    e.preventDefault();

    var elementKey = parseInt($(e.target).closest('div').parent().attr('id') - 1);

    var filtered = _.filter(this.state.elements, function(element, key) {
      return key !== elementKey;
    });

    this.setState({'elements' : filtered});

  },

  render: function() {

    var self = this;

    var elementChain = _.map(self.state.elements, function(element, key) {

      return(
             <div key={key+1} id={key+1}>
             <div className="panel radius noBottomMargin">
             {element.message}
             <a onClick={self.removeLateralElement} className="right">&times;</a>
             </div>
             <div className="connector"></div>
             </div>

             );

    });

    return (
            <div>
            <p>{this.props.path}</p>
            <a href="#" data-reveal-id="designerModal">Click Me For A Modal</a>
            

            <div className="panel chart tall" id="ruleBuilder">
            <div className="panel radius noBottomMargin">Users</div>
            <div className="connector"></div>
            {elementChain}
            <button className="button radius" data-reveal-id="designerModal">+</button>

            </div>

            <div id="designerModal" className="reveal-modal tiny" data-reveal>
            <h2>Awesome. I have it.</h2>
            <p className="lead">Your couch.  It is mine.</p>
            <p>Im a cool paragraph that lives inside of an even cooler modal. Wins</p>
            <button id="sendEmailButton" className="button radius" data-reveal-id="sendEmailModal">Send Email</button>
            <button id="waitButton" className="button radius">Wait</button>
            <a className="close-reveal-modal">&#215;</a>
            </div>

            <div id="sendEmailModal" className="reveal-modal tiny" data-reveal>
            <h2>Send email.</h2>
            <p>Which Email to send</p>
            <label>Template
            <input id="template" type="text" placeholder="Template" />
            </label>

            <button id="addSendEmailButton" className="button radius">Add</button>
            <a className="close-reveal-modal">&#215;</a>
            </div>


            </div>
            );
}

});

exports.Campaigns = Campaigns;