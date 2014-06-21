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

  var activeWebsiteName = _.find(this.props.websites, { "id" : parseInt(this.props.activeWebsite)}).name;

  var tree =
  {
    id: 1,
    type: 'start',
    text: 'All Users within ' + activeWebsiteName,
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


  return {elements : [], counter : 0, modal: undefined, activeWidget: undefined, widgetEditMode: undefined, treeCount: undefined, tree: tree};

},

openModal: function(e) {

  e.preventDefault();

  var modalType = $(e.target).attr('data-modal');
  var widgetId = $(e.target).attr('data-widget-id');

  console.log(modalType);
  console.log(widgetId);
  this.setState({modal: modalType, activeWidget: widgetId});

},

closeModal: function() {

  this.setState({modal: undefined, activeWidget: undefined, editWidgetMode: undefined});

},

addLateralElement: function(newElement, parentId) {

    //e.preventDefault();

    var tree = this.state.tree;
    var lastElementId = 0;


    $(".panel").each(function () {
      var id = parseInt(this.id, 10);
      if (id > lastElementId) {
        lastElementId = id;
      }
    });

    newElement.id = lastElementId + 1;

    // traverse tree and find the element with id === parentId, then insert newElement as it's child
    var insertNewChild = function(tree, depth) {

      var depth = depth || 0;

      if(tree.id === parentId) {
        tree.children.push(newElement);
        return depth;
      } else {

        _.forEach(tree.children, function(child) {
          console.log(child);
          insertNewChild(child, depth + 1);
        });

        
      }

    };

    insertNewChild(tree);

    this.setState({tree: tree});

    this.closeModal();


  },

  validateSendEmailElement: function(e) {

    e.preventDefault();

    var widgetId = parseInt($(e.target).attr('data-widget-id'));
    var template = $('#template').val();

    console.log(template);


    var newElement = {
      type: 'sendEmail',
      text: 'Send email: ' + template,
      children:
      []
    };

    this.addLateralElement(newElement, widgetId);

  },

  editElement: function(e) {
    e.preventDefault();

    var modalType = $(e.target).attr('data-modal');
    var widgetId = $(e.target).attr('data-widget-id');

    console.log(modalType);

    this.setState({modal: modalType, activeWidget: widgetId, editWidgetMode: true});

  },


  removeLateralElement: function(e) {
    e.preventDefault();

    var elementKey = parseInt($(e.target).closest('.widget').attr('id'));
    var currentTree = this.state.tree;

    console.log(elementKey);

    var deleteChildren = function(tree) {

      if(tree.id === elementKey) {
        tree.children = [];
        return;
      } else {

        if(_.find(tree.children, {'id': elementKey})) {

          var index = _.chain(tree.children).indexOf(_.find(tree.children, {'id': elementKey}));

          tree.children.splice(index, 1);

        } else {


          _.forEach(tree.children, function(child) {

            deleteChildren(child);
          });

        }

        
      }

    };

    deleteChildren(currentTree);

    this.setState({tree: currentTree});

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
                <button id="sendEmailButton" className="button radius" data-modal="sendEmail" data-widget-id={self.state.activeWidget} onClick={self.openModal}>Send Email</button>
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


var button = function() {

if(self.state.editWidgetMode) {
  return( <button id="editSendEmailButton" className="button radius" data-widget-id={self.state.activeWidget} onClick={self.validateSendEmailElement}>Edit</button>);
} else {
  return( <button id="addSendEmailButton" className="button radius" data-widget-id={self.state.activeWidget} onClick={self.validateSendEmailElement}>Add</button>);
}


};

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

                {button()}
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
                    <div className="connector" data-parent-id={root.id}></div>
                    <span className="label radius">{root.children[connection].parentConnectionLabel}</span>
                    <div className="connector" data-parent-id={root.id}></div>
                    ▼
                    </div>
                    );
          } else {
            return (
                    <div style={connectionStyle}>
                    <div className="connector" data-parent-id={root.id}></div>
                    <div className="connector" data-parent-id={root.id}></div>
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
                  <div className="connector" data-parent-id={root.id}></div>
                  <button className="button radius" data-modal="widgets" data-widget-id={root.id} onClick={self.openModal}>+</button>
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

      var classString = "panel radius noBottomMargin widget " + root.type;

      return(
             <div style={elementStyle}>
             <div id={root.id} key={root.id} className={classString}>
             <div className="right widgetControls">
             <a className="right" onClick={self.removeLateralElement}>&#215;</a>
             <span className="right separator"> | </span>
             <a className="right" data-modal={root.type} data-widget-id={root.id} onClick={self.editElement}>Edit</a>
             </div>
             <div>{root.text}</div>
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