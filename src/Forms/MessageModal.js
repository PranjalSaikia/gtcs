import React, { Component } from 'react';
import './css/Modal.css';

class MessageModal extends Component {
  render() {
    return (
      <div className="modal-own">
       <div className="modal-own-body">
        <header>
            <h3>SuccessFully Submitted</h3>
        </header>
        <hr/>
        <div className="modal-contents">
            <p>
                {this.props.message}
            </p>
        </div>

        <div className="modal-footer">
                    <button className="btn btn-default" onClick={this.props.onClickCloseModal}>Close</button>
        </div>
        </div>
      </div>
    )
  }
}

export default MessageModal;