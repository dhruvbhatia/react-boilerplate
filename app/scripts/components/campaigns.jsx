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

  var tree =
  {
    id: 1,
    type: 'start',
    text: 'All Users',
    children:
    [
    {
      id: 2,
      parentConnectionLabel: 'Conditon',
      type: 'condition',
      text: 'Has Purchased?',
      children:
      [
      {
        id: 3,
        parentConnectionLabel: 'Yes',
        type: 'sendEmail',
        text: 'Thanks for Purchasing',
        children: []
      },
      {
        id: 4,
        parentConnectionLabel: 'No',
        type: 'sendEmail',
        text: '5% Discount Code',
        children: []
      }
      ]
    }
    ]

  };

  console.log(tree);


  return {elements : [], counter : 0, modal: undefined, tree: tree};

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

    this.addLateralElement('Send Email: ' + template);

  },

  removeLateralElement: function(e) {
    e.preventDefault();

    var elementKey = parseInt($(e.target).closest('div').parent().attr('id') - 1);

    var filtered = _.filter(this.state.elements, function(element, key) {
      return key !== elementKey;
    });

    this.setState({'elements' : filtered});

  },

  addConditionalElement: function(e) {

    e.preventDefault();




  },

  render: function() {

    var self = this;

    var templates = _.chain(this.props.websites).where({'id' : this.props.activeWebsite}).pluck('templates').flatten().value();

    var templateOptions = _.map(templates, function(template, key) {

      return (<option key={template.id} value={template.name}>{template.name}</option>);

    });

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
                <button id="conditionalButton" className="button radius" onClick={self.addConditionalElement}>Conditional</button>
                <a className="close-reveal-modal" onClick={self.closeModal}>&#215;</a>
                </div>
                </div>
                );
      } else if ( self.state.modal === 'sendEmail') {

        // if no templates
        if(_.isEmpty(templates)) {
          return (
                  <div>

                  <div className="reveal-modal-bg" style={modalBackgroundStyle} onClick={self.closeModal}></div>

                  <div id="sendEmailModal" className="reveal-modal tiny" style={modalStyle}>
                  <h2>Send email.</h2>
                  <p>No templates found</p>
                  <a className="close-reveal-modal" onClick={self.closeModal}>&#215;</a>
                  </div>

                  </div>
                  );
        }

        return (
                <div>

                <div className="reveal-modal-bg" style={modalBackgroundStyle} onClick={self.closeModal}></div>

                <div id="sendEmailModal" className="reveal-modal tiny" style={modalStyle}>
                <h2>Send email.</h2>
                <p>Which Email to send</p>
                <label>Template
                <select id="template">
                {templateOptions}
                </select>
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

    var buildTreeNodes = function(root, size) {

      var buildConnections = function(length) {
        // TODO

        var connections = _.map(_.range(length), function(connection) {

          var connectionStyle = {
            float: 'left',
            width: (100/length) + '%'
          };

          return (
                  <div style={connectionStyle}>
                  <div className="connector"></div>
                  <span className="label radius">{root.children[connection].parentConnectionLabel}</span>
                  <div className="connector"></div>
                  ▼
                  </div>
                  );
        });

        return (
                <div>{connections}</div>
                );

      };

      var buildChildren = function(length) {

        if(_.isEmpty(root.children)) {
          return (
                  <div className="connector"></div>
                  );
        } else {
          var result = _.map(root.children, function(child) {
            return buildTreeNodes(child, length);
          } );
          return(result);
        }
      };

      if(size > 0) {
        var elementStyle = {
          float: 'left',
          width: (100/size) + '%'
        };
      }

      return(
             <div style={elementStyle}>
             <div id="1" key="1" className="panel radius noBottomMargin">
             {root.text}
             </div>
             {buildConnections(root.children.length)}
             {buildChildren(root.children.length)}
             </div>
             );

    };


    var renderTree = _.map(self.state.tree, function(element, key) {

      var elementChildren = _.map(element.children, function(child, childKey) {

        return(
               <div key={childKey} className="panel radius noBottomMargin">
               {child.text}
               <a onClick={self.removeLateralElement} className="right">&times;</a>
               </div>
               );

      });

      return(
             <div key={key} id={key}>
             <div className="panel radius noBottomMargin">
             {element.text}
             </div>

             
             {elementChildren}


             </div>

             );

    });


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
            {buildTreeNodes(self.state.tree)}
            <button className="button radius" onClick={self.openModal.bind(self, 'widgets')}>+</button>

            </div>

            {showModal()}


            </div>
            );
  }

});

exports.Campaigns = Campaigns;