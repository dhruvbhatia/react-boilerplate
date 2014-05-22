/** @jsx React.DOM */
'use strict';

var Users = React.createClass({

  render: function() {
    
    return (
            <div>
            <p>{this.props.path}</p>
            <p>Blah</p>
            {_.pluck(this.props.websites, 'contacts')}
            </div>
            );

  }

});

exports.Users = Users;