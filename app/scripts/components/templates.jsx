/** @jsx React.DOM */
'use strict';

var CONFIG = require('../config');

var Templates = React.createClass({

  routePreviewTemplate: function(e) {

    e.preventDefault();
    var id = $(e.target).closest("tr").attr("id");
    console.log(id);
    //this.props.setWebsite(id);
    this.props.setPos("templates/preview/" + id, "Preview Template");

  },

  render: function() {

    var self = this;

    var templates = _.chain(this.props.websites).where({'id' : this.props.activeWebsite}).pluck('templates').flatten().sortBy(function(template) { return -template.createdAt;}).map(function(template) {

      return(
             <tr id={template.id} key={template.id}>
             <td>{template.name}</td>
             <td>{moment(template.createdAt).fromNow()}</td>
             <td>
             <a onClick={self.routePreviewTemplate}>Preview</a> | <a onClick={self.routeTemplateEdit}>Edit</a>
             </td>
             </tr>

             );


    });

    if(!_.isEmpty(templates.value())) {

      return (
              <div>
              <h2>Templates</h2>

              <table width="100%">
              <thead>
              <tr>
              <th>Name</th>
              <th>Created At ▾</th>
              <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              {templates}
              </tbody>
              </table>

              <hr />
              Add button

              </div>

              );

    } else {

      return (
              <div>
              Add Template
              </div>
              );

    }

  }

});

var PreviewTemplate = React.createClass({

  getInitialState: function() {

    return {template: undefined};

  },

  componentDidMount: function() {


    // Ensure current path references a website that the user owns
    var id = Backbone.history.fragment.replace("templates/preview/", "");

    var templates = _.chain(this.props.websites).where({'id' : this.props.activeWebsite}).pluck('templates').flatten().value();

    var match = _.find(templates, {"id" : parseInt(id)});


    // Redirect if id is non numeric
    if (!/^\d+$/.test(id)) {

      match = undefined;

    }


    if(_.isUndefined(match)) {

      // Path id is an invalid user
      this.props.setPos("templates", "Templates");

    } else {
      this.setState({template: match});
    }

  },

  render: function() {

    if(!_.isUndefined(this.state.template)) {

      return (
              <div id="resizable">
                <iframe width="100%" height="400px" srcDoc={this.state.template.htmlVersion} />
              </div>
              );

    } else {


      return (
              <div>
              An unexpected error occurred
              </div>);

    }


  }

});

exports.Templates = Templates;
exports.PreviewTemplate = PreviewTemplate;