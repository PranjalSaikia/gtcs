import React, { Component } from 'react';
import NavBar from './../Components/Navbar';
import ServicesAutomation from './../Components/ServicesAutomation';
import Footer from './../Components/Footer';
import AutomationForm from './../Forms/AutomationForm';
import './css/housekeeping.css';


class AutomationService extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <BannerAfford />
        <AffordBody />
        <Footer />
      </div>
    )
  }
}

export default AutomationService;

export const BannerAfford = () => (
    <div className="banner-about" align="center">
        <img src={require('./../assets/images/automation.jpg')} alt="" className="housekeeping-image"  />
    </div>
);

export const AffordBody = () => 
(
    <div className="container" id = "about_body">
        <div className="container" align="center">
            <h1>Home Automation & Electrical Services</h1>
            
        </div>
        <br/>

        <ServicesAutomation />
        

        <hr/>

        <h2>Please fill up the form for any need</h2>

        <AutomationForm />
        <br/>
    </div>
);