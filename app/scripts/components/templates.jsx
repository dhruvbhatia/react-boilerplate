/** @jsx React.DOM */
'use strict';

var CONFIG = require('../config');

var Templates = React.createClass({

  routeTemplatePreview: function(e) {

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
             <a onClick={self.routeTemplatePreview}>Preview</a> | <a onClick={self.routeTemplateEdit}>Edit</a>
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

exports.Templates = Templates;