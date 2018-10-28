import React, { Component } from 'react';
import './css/servicecard.css';

class ServicesCard extends Component {
    createMarkup(value) {
        return { __html: value };
    }
  render() {
    return (
      <div className="service-card">
        <header>
            <h3>{this.props.name}</h3>
        </header>
        <p>{this.props.tag}</p>

      </div>
    )
  }
}

export default ServicesCard;