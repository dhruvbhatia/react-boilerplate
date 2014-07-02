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

  var activeWebsite = _.find(this.props.websites, { "id" : parseInt(this.props.activeWebsite)});

  var contactAttributes = _.sortBy(_.uniq(_.flatten(_.map(_.filter(_.pluck(_.flatten(_.pluck(this.props.websites, "contacts")), "customAttributes"), function(a) { return !_.isEmpty(a); }), function(element) { return _.keys(element); } ))));

  var tree =
  {
    'id' : 1,
    type: 'start',
    text: 'All Users within ' + activeWebsite.name,
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
        type: 'conditionBranch',
        logic: { type: 'user', key: 'user_location', operator: '=', value: 'Melbourne', match: 'fuzzy' },
        text: 'From Melbourne',
        children:
        [

        {
          'id' : 5,
          type: 'sendEmail',
          templateId: 1,
          children:
          [
          {
            'id' : 6,
            type: 'delay',
            delay: {'amount' : 7, 'unit' : 'days' },
            children: []
          }
          ]
        }

        ]
      },
      {
        'id' : 4,
        type: 'conditionBranch',
        logic: { type: 'user', key: 'user_location', operator: '=', value: 'Sydney', match: 'fuzzy' },
        text: 'From Sydney',
        children:
        [
        {
          'id' : 7,
          type: 'sendEmail',
          templateId: 2,
          children: []
        }
        ]
      }

      ]
    }
    ]

  };

  console.log(tree);
  console.log(contactAttributes);


  return {modal: undefined, activeWidget: {}, tree: tree, contactAttributes: contactAttributes};

},

openModal: function(e) {

  e.preventDefault();

  var modalType = $(e.target).attr('data-modal');
  var widgetId = parseInt($(e.target).attr('data-widget-id'));

  console.log(modalType);

  var activeWidget = _.findDeep([this.state.tree], {'id' : widgetId});

  activeWidget.editing = false;


  this.setState({modal: modalType, activeWidget: activeWidget });

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
          if(newElement.templateId) { tree.templateId = newElement.templateId; }
          if(newElement.delay) { tree.delay = newElement.delay; }
          if(newElement.logic) { tree.logic = newElement.logic; }
          if(newElement.text) { tree.text = newElement.text; }
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

    validateConditionBranchElement: function(e) {

      e.preventDefault();

      var widgetId = this.state.activeWidget.id;
      var editingExistingWidget = this.state.activeWidget.editing;
      var name = $('#conditionBranchName').val();
      var logicType = $('#conditionBranchLogicType option:selected').val();
      var logicKey = $('#conditionBranchLogicKey').val();
      var logicOperator = $('#conditionBranchLogicOperator option:selected').val();
      var logicValue = $('#conditionBranchLogicValue').val();

      var newElement = {
        type: 'conditionBranch',
        logic: { type: logicType,  key: logicKey, operator: logicOperator, value: logicValue, match: 'fuzzy' },
        text: name,
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

    validateDelayElement: function(e) {

      e.preventDefault();

      var widgetId = this.state.activeWidget.id;
      var editingExistingWidget = this.state.activeWidget.editing;
      var delayAmount = $('#delayAmount').val();
      var delayUnit = $('#delayUnit option:selected').val();

      var newElement = {
        type: 'delay',
        delay: { amount: delayAmount, unit: delayUnit },
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

      var activeWidget = _.findDeep(this.state.tree, {'id' : widgetId});

      activeWidget.editing = true;

      this.setState({modal: modalType, activeWidget: activeWidget});

    },


    removeLateralElement: function(e) {
      e.preventDefault();

      var elementKey = parseInt($(e.target).attr('data-widget-id'));
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

      this.closeModal();

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
          top: '5%'
        };

        var modalBackgroundStyle = {
          display: 'block'
        };

        if(self.state.modal === 'widgets') {

          return (
                  <div>

                  <div className="reveal-modal-bg" style={modalBackgroundStyle} onClick={self.closeModal}></div>

                  <div id="designerModal" className="reveal-modal small open" style={modalStyle}>
                  <h2>Awesome. I have it.</h2>
                  <p className="lead">Your couch.  It is mine.</p>
                  <p>Im a cool paragraph that lives inside of an even cooler modal. Wins</p>
                  <button id="sendEmailButton" className="button radius" data-modal="sendEmail" data-widget-id={self.state.activeWidget.id} onClick={self.openModal}>Send Email</button>
                  <button id="delayButton" className="button radius" data-modal="delay" data-widget-id={self.state.activeWidget.id} onClick={self.openModal}>Delay</button>
                  <button id="conditionalButton" className="button radius" data-modal="condition" data-widget-id={self.state.activeWidget.id} onClick={self.openModal}>Conditional</button>
                  <a className="close-reveal-modal" onClick={self.closeModal}>&#215;</a>
                  </div>
                  </div>
                  );
} else if ( self.state.modal === 'condition') {

  var button = function() {

    if(self.state.activeWidget.editing) {
      // TODO
      return( <button id="delayButton" className="button radius" onClick={self.validateDelayElement}>Edit</button>);
    } else {
      return( <button id="delayButton" className="button radius" onClick={self.validateDelayElement}>Add</button>);
    }
  };

  var branchTable = function() {

    var rows = _.chain(self.state.activeWidget.children).filter({'type' : 'conditionBranch'}).map( function(condition) {
      console.log(condition);
      return(
             <tr id={condition.id} key={condition.id}>
             <td>{condition.text}</td>
             <td><a data-modal="conditionBranch" data-widget-id={condition.id} onClick={self.editElement}>Edit</a> | <a data-widget-id={condition.id} onClick={self.removeLateralElement}>&#215;</a></td>
             </tr>
             );
    });

    return(
           <table width="100%">
           <thead>
           <tr>
           <th>Name</th>
           <th>Actions</th>
           </tr>
           </thead>
           <tbody>
           {rows}
           </tbody>
           </table>
           );

  };

  return (
          <div>

          <div className="reveal-modal-bg" style={modalBackgroundStyle} onClick={self.closeModal}></div>

          <div id="delayModal" className="reveal-modal small" style={modalStyle}>
          <h2>Conditions</h2>
          <p>Add logic to this stream.</p>


          {branchTable()}



          {button()}

          <a className="close-reveal-modal" onClick={self.closeModal}>&#215;</a>
          </div>
          </div>
          );


} else if ( self.state.modal === 'conditionBranch') {

  var button = function() {

    if(self.state.activeWidget.editing) {
      return( <button id="delayButton" className="button radius" onClick={self.validateConditionBranchElement}>Edit</button>);
    } else {
      return( <button id="delayButton" className="button radius" onClick={self.validateConditionBranchElement}>Add</button>);
    }
  };


  var currentConditionBranchName = function() {
    if(self.state.activeWidget.type === "conditionBranch") {
      return self.state.activeWidget.text;
    } else {
      return '';
    }
  };

  var currentConditionBranchLogicType = function() {
    if(self.state.activeWidget.type === "conditionBranch") {
      return self.state.activeWidget.logic.type;
    } else {
      return 'user';
    }
  };

  var conditionBranchLogicKey = function() {
    if(self.state.contactAttributes) {
      return self.state.activeWidget.logic.key;
      // return _.first(self.state.contactAttributes);
    } else {
      return '';
    }
  };

  var conditionBranchLogicOperator = function() {
    if(self.state.activeWidget.type === "conditionBranch") {
      return self.state.activeWidget.logic.operator;
    } else {
      return '=';
    }
  };

  var conditionBranchLogicValue = function() {
    if(self.state.activeWidget.type === "conditionBranch") {
      return self.state.activeWidget.logic.value;
    } else {
      return '';
    }
  };

  return (
          <div>

          <div className="reveal-modal-bg" style={modalBackgroundStyle} onClick={self.closeModal}></div>

          <div id="conditionBranchModal" className="reveal-modal small" style={modalStyle}>
          <h2>Condition Branch</h2>
          <p>Define a conditional branch.</p>

          <label>Condition Name
          <input id="conditionBranchName" type="text" defaultValue={currentConditionBranchName()} />
          </label>

          <label>Condition Type
          <select id="conditionBranchLogicType" defaultValue={currentConditionBranchLogicType()}>
          <option value="user">User Attribute</option>
          <option value="event">Event</option>
          <option value="email">Email</option>
          </select>
          </label>

          <label>Condition Key
          <input id="conditionBranchLogicKey" type="text" defaultValue={conditionBranchLogicKey()} />
          </label>

          <label>Condition Operator
          <select id="conditionBranchLogicOperator" defaultValue={conditionBranchLogicOperator()}>
          <optgroup label="Basic">
          <option value="equals">Equals (&#61;)</option>
          <option value="notEquals">Not Equals (!&#61;)</option>
          <option value="notSet">Not Set (null)</option>
          </optgroup>
          <optgroup label="Numeric">
          <option value="lt">Less Than (&lt;)</option>
          <option value="lte">Less Than or Equal To (&lt;=)</option>
          <option value="gt">Greater Than (&gt;)</option>
          <option value="gte">Greater Than or Equal To (&#61;&gt;)</option>
          </optgroup>
          <optgroup label="Fuzzy">
          <option value="starts">Starts With (*_)</option>
          <option value="contains">Contains (*)</option>
          <option value="notContains">Does Not Contain (!*)</option>
          <option value="ends">Ends With (_*)</option>
          </optgroup>
          </select>
          </label>

          <label>Condition Value
          <input id="conditionBranchLogicValue" type="text" defaultValue={conditionBranchLogicValue()} />
          </label>

          {button()}

          <a className="close-reveal-modal" onClick={self.closeModal}>&#215;</a>
          </div>
          </div>
          );


} else if ( self.state.modal === 'delay') {

  var button = function() {

    if(self.state.activeWidget.editing) {
      return( <button id="delayButton" className="button radius" onClick={self.validateDelayElement}>Edit</button>);
    } else {
      return( <button id="delayButton" className="button radius" onClick={self.validateDelayElement}>Add</button>);
    }
  };

  var currentDelayAmount = function() {
    if(self.state.activeWidget.type === "delay") {
      return self.state.activeWidget.delay.amount;
    } else {
      return '2';
    }


  };


  var currentDelayUnit = function() {
    if(self.state.activeWidget.type === "delay") {
      return self.state.activeWidget.delay.unit;
    } else {
      return 'days';
    }


  };

  return (
          <div>

          <div className="reveal-modal-bg" style={modalBackgroundStyle} onClick={self.closeModal}></div>

          <div id="delayModal" className="reveal-modal small" style={modalStyle}>
          <h2>Add a Delay</h2>
          <p>Add a delay to this stream.</p>

          <input type="text" id="delayAmount" defaultValue={currentDelayAmount()} />

          <select id="delayUnit" defaultValue={currentDelayUnit()}>
          <option value="minutes">Minute(s)</option>
          <option value="hours">Hour(s)</option>
          <option value="days">Day(s)</option>
          <option value="weeks">Week(s)</option>
          <option value="months">Month(s)</option>
          </select>

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

                  <div id="sendEmailModal" className="reveal-modal small" style={modalStyle}>
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
          if(self.state.activeWidget.type === 'sendEmail') {
            return self.state.activeWidget.templateId;
          } else {
            return 1;
          }
          

        };

        return (
                <div>

                <div className="reveal-modal-bg" style={modalBackgroundStyle} onClick={self.closeModal}></div>

                <div id="sendEmailModal" className="reveal-modal small" style={modalStyle}>
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


          if(root.children[connection].type === "conditionBranch") {
            return (
                    <div key={connection} style={connectionStyle}>
                    <div className="connector" data-parent-id={root.id}></div>
                    <span className="label radius">{root.children[connection].text}</span>
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

          return(<div>Condition: {widget.text}<br /><button className="button tiny radius noBottomMargin">Add Condition</button></div>);

        } 


        else if (widget.type === "delay") {

          return(<div>Delay: {widget.delay.amount} {widget.delay.unit}</div>);

        } else {
          return(<div>Other: {widget.text}</div>);
        }

      };

      return(
             <div style={elementStyle}>
             <div id={root.id} key={root.id} className={classString}>
             <div className="right widgetControls">
             <a className="right" data-widget-id={root.id} onClick={self.removeLateralElement}>&#215;</a>
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