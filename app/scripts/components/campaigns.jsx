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
      type: 'condition',
      text: 'Has Purchased?',
      children:
      [
      {
        id: 3,
        parentConnectionLabel: 'Yes',
        type: 'sendEmail',
        text: 'Thanks for Purchasing',
        children:
        [
        {
          id: 5,
          type: 'wait',
          text: 'Wait 5 days',
          children: []
        }
        ]
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


  return {elements : [], counter : 0, modal: undefined, modalStarterNode: undefined, treeCount: undefined, tree: tree};

},

openModal: function(e) {

  e.preventDefault();

  var modalName = $(e.target).attr('data-modal');
  var treeId = $(e.target).attr('data-modal-starter-id');

  console.log(modalName);
  console.log(treeId);
  this.setState({modal: modalName, modalStarterNode: treeId});

},

closeModal: function() {

  this.setState({modal: undefined, modalStarterNode: undefined});

},

addLateralElement: function(element, parentId) {

    //e.preventDefault();

    var tree = this.state.tree;
    var lastElementId = 0;


    $(".panel").each(function () {
      var id = parseInt(this.id, 10);
      if (id > lastElementId) {
        lastElementId = id;
      }
    });

    element.id = lastElementId + 1;

    window.blah = tree;

    // traverse tree and find the elemnt with id === parentId
    var findParentElement = function(tree, depth, childIndex) {

      var depth = depth;
      var childIndex = childIndex;
      console.log(depth);

      if(tree.id === parentId) {
        console.log("found at depth: " + depth + " and child length: " + childIndex);
        tree.children.push(element);
        return depth;
      } else {

        _.forEach(tree.children, function(child) {
          childIndex = _.indexOf(tree.children, child);
          console.log(child);
          findParentElement(child, depth + 1, childIndex);
        });

        
      }

    };

    var found = findParentElement(tree, 0);

    this.setState({tree: tree});

    this.closeModal();


  },

  validateSendEmailElement: function(e) {

    e.preventDefault();

    var treeId = parseInt($(e.target).attr('data-modal-starter-id'));
    var template = $('#template').val();

    console.log(template);


    var newElement = {
      type: 'sendEmail',
      text: 'Send email: ' + template,
      children:
      []
    };

    this.addLateralElement(newElement, treeId);

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
                <button id="sendEmailButton" className="button radius" data-modal="sendEmail" data-modal-starter-id={self.state.modalStarterNode} onClick={self.openModal}>Send Email</button>
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

        console.log(self.state);

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

                <button id="addSendEmailButton" className="button radius" data-modal-starter-id={self.state.modalStarterNode} onClick={self.validateSendEmailElement}>Add</button>
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


          if(root.children[connection].parentConnectionLabel) {
            return (
                    <div style={connectionStyle}>
                    <div className="connector"></div>
                    <span className="label radius">{root.children[connection].parentConnectionLabel}</span>
                    <div className="connector"></div>
                    ▼
                    </div>
                    );
          } else {
            return (
                    <div style={connectionStyle}>
                    <div className="connector"></div>
                    <div className="connector"></div>
                    ▼
                    </div>
                    );
          }

        });

        return (
                <div>{connections}</div>
                );

      };

      var buildChildren = function(length) {

        if(_.isEmpty(root.children)) {
          return (
                  <div>
                  <div className="connector"></div>
                  <button className="button radius" data-modal="widgets" data-modal-starter-id={root.id} onClick={self.openModal}>+</button>
                  </div>
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
             <div id={root.id} key={root.id} className="panel radius noBottomMargin">
             {root.text}
             </div>
             {buildConnections(root.children.length)}
             {buildChildren(root.children.length)}
             </div>
             );

    };

    return (
            <div>
            <p>{this.props.path}</p>

            <div className="panel chart tall" id="ruleBuilder">
            {buildTreeNodes(self.state.tree)}
            <p>Tree Status: </p>

            </div>

            {showModal()}


            </div>
            );
  }

});

exports.Campaigns = Campaigns;