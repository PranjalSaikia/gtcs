import React, { Component } from 'react';
import './css/servicecard.css';

class ServicesCard extends Component {
    createMarkup(value) {
        return { __html: value };
    }
  render() {
    return (
      <div className="service-card">
        <img  alt="" src={require('./../assets/images/services/'+ this.props.image)} className="service-card-image" />
        <header>
            <h3>{this.props.name}</h3>
        </header>
        <p>{this.props.tag}</p>

        <div className="more-card" dangerouslySetInnerHTML={this.createMarkup(this.props.more)}>
            
        </div>
      </div>
    )
  }
}

export default ServicesCard;