import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './css/navbar.css';

class SideNav extends Component {
  render() {
    return (
      <div className="sidenav-own">
        <div className="sidenav-contents">
            <ul className="list-unstyled" id="list_sidenav">
                <li><NavLink to="/about">About us</NavLink></li>
                <li><NavLink to="/affordablehousing">Affordable Housing</NavLink></li>
                <li><NavLink to="/civilengineering">Civil Engineering Laboratory</NavLink></li>
                <li><NavLink to="/housekeeping">Housekeeping Services</NavLink></li>
                <li><NavLink to="/homeautomation">Home Automation & Electrical Services</NavLink></li>
            </ul>
        </div>
      </div>
    )
  }
}

export default SideNav;