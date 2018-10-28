import React, { Component } from 'react';
import './css/footer.css';

class Footer extends Component {
  render() {
    return (
        <div>
            <div className="footer-own">
                <div className="footer-div">
                    <h4>Contact us</h4>
                    <p>Namghar Path, House No.4,<br/>Khanapara,Guwahati-22,<br/>Assam</p>
                
                    <p>admingtcs@geotechno.info</p>
                    <p>+91 96788 39793</p>
                </div>
                <div className="footer-div">
                    <h4>Our Services</h4>
                    <ul className="list-unstyled">
                        <li>Affordable Housing</li>
                        <li>Civil Engineering Laboratory</li>
                        <li>Housekeeping Services</li>
                        <li>Home Automation & Electrical Services</li>
                    </ul>
                </div>
                <div className="footer-div">
                    <h4>Connect with us</h4>
                    <div className="social-link">
                        <a href="https://www.facebook.com/geotechno2017/"><i className="fa fa-facebook"></i></a>
                        <a href="mailto:admingtcs@geotechno.info"><i className="fa fa-envelope"></i></a>
                    </div>
                </div>
            </div>

            <div className="small-footer">
                Developed by <a href="www.corexx.in">corexx.in</a>
            </div>
      </div>
    )
  }
}

export default  Footer;