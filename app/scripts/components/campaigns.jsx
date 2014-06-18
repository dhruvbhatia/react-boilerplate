/** @jsx React.DOM */
'use strict';

var Campaigns = React.createClass({

  componentDidMount: function() {

    var self = this;

    //$(document).foundation('reveal', {animation: 'fade', animation_speed: 50});

    // $(document).on('click', '.reveal-modal button', function (e) {


    //   if(e.target.id === 'addSendEmailButton') {


    //     $('#sendEmailModal').foundation('reveal', 'close');

    //     self.addLateralElement(e.target.id);

    //   }

    // });

},

componentWillUnmount: function() {

  $(document).off('click', '.reveal-modal button');

},

getInitialState: function() {

  return {elements : [], counter : 0, modal: undefined};

},

openModal: function(modalName) {

  console.log(modalName);
  this.setState({modal: modalName});

},

closeModal: function() {

  this.setState({modal: undefined});

},

addLateralElement: function(message) {

    //e.preventDefault();
    var elementArray = this.state.elements;
    var counter = this.state.counter + 1;
    if(elementArray.length === 0) {
      counter = 1;
    }

    elementArray.push({id: counter, message: message});

    this.setState({elements : elementArray, counter: counter, modal: undefined});

  },

  validateSendEmailElement: function() {

    var template = $('#template').val();

    console.log(template);

    this.addLateralElement(template);

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

    var showModal = function() {

      var modalStyle = {
        display: 'block',
        opacity: 1,
        visibility: 'visible',
        top: '100px'
      };

      var modalBackgroundStyle = {
        display: 'block'
      };

      if(self.state.modal === 'widgets') {

        return (
                <div>

                <div className="reveal-modal-bg" style={modalBackgroundStyle} onClick={self.closeModal}></div>

                <div id="designerModal" className="reveal-modal tiny open" style={modalStyle}>
                <h2>Awesome. I have it.</h2>
                <p className="lead">Your couch.  It is mine.</p>
                <p>Im a cool paragraph that lives inside of an even cooler modal. Wins</p>
                <button id="sendEmailButton" className="button radius" onClick={self.openModal.bind(self, 'sendEmail')}>Send Email</button>
                <button id="waitButton" className="button radius">Wait</button>
                <a className="close-reveal-modal" onClick={self.closeModal}>&#215;</a>
                </div>
                </div>
                );
      } else if ( self.state.modal === 'sendEmail') {

        return (
                <div>

                <div className="reveal-modal-bg" style={modalBackgroundStyle} onClick={self.closeModal}></div>

                <div id="sendEmailModal" className="reveal-modal tiny" style={modalStyle}>
                <h2>Send email.</h2>
                <p>Which Email to send</p>
                <label>Template
                <input id="template" type="text" placeholder="Template" />
                </label>

                <button id="addSendEmailButton" className="button radius" onClick={self.validateSendEmailElement}>Add</button>
                <a className="close-reveal-modal" onClick={self.closeModal}>&#215;</a>
                </div>
                </div>
                );


      }


      else {

        return (<div></div>);

      }

    };

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

            <div className="panel chart tall" id="ruleBuilder">
            <div className="panel radius noBottomMargin">Users</div>
            <div className="connector"></div>
            {elementChain}
            <button className="button radius" onClick={self.openModal.bind(self, 'widgets')}>+</button>

            </div>

            {showModal()}


            </div>
            );
  }

});

exports.Campaigns = Campaigns;