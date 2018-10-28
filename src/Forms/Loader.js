import React, { Component } from 'react';
import './css/loader.css';

class Loader extends Component {
  render() {
    return (
      <div className="loader-body">
        <div className="loader-overlay"></div>
        <div className="loader-text">
                <div className="close-tag"><span onClick={this.props.onClickClose}>x</span></div><br/>
            <div className="text">Uploading data & Files.....Please wait</div>
        </div>
      </div>
    )
  }
}

export default Loader;