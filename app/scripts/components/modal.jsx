/** @jsx React.DOM */
'use strict';

var Modal = React.createClass({

  getInitialState: function() {

    return {show: this.props.show, title: 'Test Title', content: 'asd'};

  },

  closeModal: function() {

    this.setState({show: false, title: undefined, content: undefined});

  },

  render: function() {

    var modalStyle = {
      display: 'block',
      opacity: 1,
      visibility: 'visible',
      top: '5%'
    };

    var modalBackgroundStyle = {
      display: 'block'
    };


    if(this.state.show) {

      // Show modal
      return (

              <div>

              <div className="reveal-modal-bg" style={modalBackgroundStyle} onClick={this.closeModal}></div>

              <div id="designerModal" className="reveal-modal small radius open" style={modalStyle}>
              <h2>{this.state.title}</h2>
              <p dangerouslySetInnerHTML={{__html: this.state.content}} />
              <a className="close-reveal-modal" onClick={this.closeModal}>&#215;</a>
              </div>
              </div>


              );

    } else {

      // Modal is hidden
      return null;

    }



  }

});

exports.Modal = Modal;