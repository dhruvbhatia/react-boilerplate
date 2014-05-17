/** @jsx React.DOM */
'use strict';

var Users = React.createClass({

  render: function() {
    
    return (
            <div>
            <p>{this.props.path}</p>
            <p>Blah</p>
            </div>
            );

  }

});

exports.Users = Users;