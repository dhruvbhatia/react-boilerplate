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
    'id' : 1,
    type: 'start',
    text: 'All Users within ' + activeWebsiteName,
    children:
    [
    {
      'id' : 2,
      type: 'condition',
      text: 'Has Purchased?',
      children:
      [
      {
        'id' : 3,
        parentConnectionLabel: 'Yes',
        type: 'sendEmail',
        templateId: 1,
        children:
        [
        {
          'id' : 5,
          type: 'wait',
          text: 'Wait 5 days',
          children: []
        }
        ]
      },
      {
        'id' : 4,
        parentConnectionLabel: 'No',
        type: 'sendEmail',
        templateId: 2,
        children: []
      }
      ]
    }
    ]

  };

  console.log(tree);


  return {modal: undefined, activeWidget: {}, tree: tree};

},

openModal: function(e) {

  e.preventDefault();

  var modalType = $(e.target).attr('data-modal');
  var widgetId = parseInt($(e.target).attr('data-widget-id'));

  console.log(modalType);
  console.log(widgetId);
  this.setState({modal: modalType, activeWidget: {'id' : widgetId} });

},

closeModal: function() {

  this.setState({modal: undefined, activeWidget: {}});

},

addLateralElement: function(newElement, parentId) {

    //e.preventDefault();

    var tree = this.state.tree;
    var lastElementId = 0;


    $(".widget").each(function () {
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

  updateExistingWidget: function(newElement, widgetId) {

    //e.preventDefault();

    var tree = this.state.tree;

      // traverse tree and find the element with id === parentId, then insert newElement as it's child
      var findAndUpdate = function(tree, depth) {

        var depth = depth || 0;

        if(tree.id === newElement.id) {
          tree.templateId = newElement.templateId;
          return depth;
        } else {

          _.forEach(tree.children, function(child) {
            console.log(child);
            findAndUpdate(child, depth + 1);
          });


        }

      };

      findAndUpdate(tree);

      this.setState({tree: tree});

      this.closeModal();

    },

    validateSendEmailElement: function(e) {

      e.preventDefault();

      var widgetId = this.state.activeWidget.id;
      var editingExistingWidget = this.state.activeWidget.editing;
      var templateId = parseInt($('#template option:selected').val());


      var newElement = {
        type: 'sendEmail',
        templateId: templateId,
        children:
        []
      };

      if(editingExistingWidget) {

        console.log("update existing");
        newElement.id = widgetId;
        this.updateExistingWidget(newElement, widgetId);

      } else {
        this.addLateralElement(newElement, widgetId);
      }

    },

    validateWaitElement: function(e) {

      e.preventDefault();

      var widgetId = this.state.activeWidget.id;
      var editingExistingWidget = this.state.activeWidget.editing;
      var waitInput = $('#waitInput').val();

      var newElement = {
        type: 'wait',
        text: waitInput,
        children:
        []
      };

      if(editingExistingWidget) {

        console.log("update existing");
        newElement.id = widgetId;
        this.updateExistingWidget(newElement, widgetId);

      } else {
        this.addLateralElement(newElement, widgetId);
      }


    },

    editElement: function(e) {
      e.preventDefault();

      var modalType = $(e.target).attr('data-modal');
      var widgetId = parseInt($(e.target).attr('data-widget-id'));

      console.log(modalType);

      this.setState({modal: modalType, activeWidget: {'id' : widgetId, 'editing' : true }});

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

    render: function() {

      var self = this;

      var templates = _.chain(this.props.websites).where({'id' : this.props.activeWebsite}).pluck('templates').flatten().value();

      var templateOptions = _.map(templates, function(template, key) {

        return (<option key={template.id} value={template.id}>{template.name}</option>);

      });

      var showModal = function() {

        var modalStyle = {
          display: 'block',
          opacity: 1,
          visibility: 'visible',
          top: '20%'
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
                  <button id="sendEmailButton" className="button radius" data-modal="sendEmail" data-widget-id={self.state.activeWidget.id} onClick={self.openModal}>Send Email</button>
                  <button id="waitButton" className="button radius" data-modal="wait" data-widget-id={self.state.activeWidget.id} onClick={self.openModal}>Wait</button>
                  <button id="conditionalButton" className="button radius" data-modal="condition" data-widget-id={self.state.activeWidget.id} onClick={self.openModal}>Conditional</button>
                  <a className="close-reveal-modal" onClick={self.closeModal}>&#215;</a>
                  </div>
                  </div>
                  );
} else if ( self.state.modal === 'wait') {

  var button = function() {

    if(self.state.activeWidget.editing) {
      return( <button id="waitButton" className="button radius" onClick={self.validateWaitElement}>Edit</button>);
    } else {
      return( <button id="waitButton" className="button radius" onClick={self.validateWaitElement}>Add</button>);
    }
  };

  return (
          <div>

          <div className="reveal-modal-bg" style={modalBackgroundStyle} onClick={self.closeModal}></div>

          <div id="waitModal" className="reveal-modal tiny" style={modalStyle}>
          <h2>Add a Delay</h2>
          <p>Add a delay to this stream.</p>

          <input type="text" id="waitInput" />

          {button()}

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

          if(self.state.activeWidget.editing) {
            return( <button id="editSendEmailButton" className="button radius" onClick={self.validateSendEmailElement}>Edit</button>);
          } else {
            return( <button id="addSendEmailButton" className="button radius" onClick={self.validateSendEmailElement}>Add</button>);
          }


        };

        var currentTemplateId = function() {
          if(self.state.activeWidget.editing && _.findDeep(self.state.tree, {'id' : self.state.activeWidget.id})) {
            return _.findDeep(self.state.tree, {'id' : self.state.activeWidget.id}).templateId;
          } else {
            return 1;
          }
          

        };

        return (
                <div>

                <div className="reveal-modal-bg" style={modalBackgroundStyle} onClick={self.closeModal}></div>

                <div id="sendEmailModal" className="reveal-modal tiny" style={modalStyle}>
                <h2>Send email.</h2>
                <p>Which Email to send</p>
                <label>Template
                <select id="template" defaultValue={currentTemplateId()}>
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
                    <div key={connection} style={connectionStyle}>
                    <div className="connector" data-parent-id={root.id}></div>
                    <span className="label radius">{root.children[connection].parentConnectionLabel}</span>
                    <div className="connector" data-parent-id={root.id}></div>
                    ▼
                    </div>
                    );
          } else {
            return (
                    <div key={connection} style={connectionStyle}>
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
      var nodes = buildTreeNodes(child, length);
      return (<div key={child.id}>{nodes}</div>);
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

var widgetText = function(widget) {

  if(widget.type === "sendEmail") {

    var templates = _.chain(self.props.websites).where({'id' : self.props.activeWebsite}).pluck('templates').flatten().value();
    var template = _.find(templates, {'id' : widget.templateId});

    return(<div>Send Email: {template.name}</div>);
  }

  else if (widget.type === "condition") {

    return(<div>Condition: {widget.text}</div>);

  } 


  else if (widget.type === "wait") {

    return(<div>Delay: {widget.text}</div>);

  } else {
    return(<div>Other: {widget.text}</div>);
  }

};

return(
       <div style={elementStyle}>
       <div id={root.id} key={root.id} className={classString}>
       <div className="right widgetControls">
       <a className="right" onClick={self.removeLateralElement}>&#215;</a>
       <span className="right separator"> | </span>
       <a className="right" data-modal={root.type} data-widget-id={root.id} onClick={self.editElement}>Edit</a>
       </div>
       {widgetText(root)}
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