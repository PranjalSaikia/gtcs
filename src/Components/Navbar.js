import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
import './css/navbar.css';
import SideNav from './Sidenav';

class NavBar extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      sidenav: false
    }
  }

  sideNavOpen() {
    if(this.state.sidenav === true){
      this.setState({ sidenav: false });
    }else{
      this.setState({ sidenav: true });
    }
  }
  
  
  render() {
    return (
      <div className="navbar-own">
        <header className="navbar-own-brand">
               <Link to="/" ><h1>GTCS</h1></Link>
        </header>

        <div className="list-own-container">
            <ul className="list-own">
            <li><NavLink to="/about" style={style.SimpleStyle} activeStyle={style.active}>About</NavLink></li>
            <li><NavLink to="/affordablehousing" style={style.SimpleStyle} activeStyle={style.active}>Affordable Housing</NavLink></li>
            <li><NavLink to="/civilengineering" style={style.SimpleStyle} activeStyle={style.active}>Civil Engineering Laboratory</NavLink></li>
            <li><NavLink to="/housekeeping" style={style.SimpleStyle} activeStyle={style.active}>Housekeeping Services</NavLink></li>
            <li><NavLink to="/homeautomation" style={style.SimpleStyle} activeStyle={style.active}>Home Automation & Electrical Services</NavLink></li>
            </ul>
        </div>

        <div className="small-nav" onClick={this.sideNavOpen.bind(this)}>{this.state.sidenav ? (<i className="fa fa-close fa-2x"></i>) : (<i className="fa fa-bars fa-2x"></i>) }</div>
        {this.state.sidenav ? (<SideNav />) : null }
      </div>
    )
  }
}

export default  NavBar;


export const style = {
    "SimpleStyle": {
      color: "white",
      fontSize: "1.05em"
    },
    "active":{
      fontWeight: "700"
    }
}