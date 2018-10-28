import React, { Component } from 'react';
import NavBar from './../Components/Navbar';
import Services from './../Components/Services';
import Footer from './../Components/Footer';
import HousekeepingForm from './../Forms/HousekeepingForm';
import './css/housekeeping.css';


class HousekeepingService extends Component {
    
    
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
export default HousekeepingService;

export const BannerAfford = () => (
    <div className="banner-about" align="center">
        <img src={require('./../assets/images/house.png')} alt="" className="housekeeping-image"  />
    </div>
);

export const AffordBody = () => 
(
    <div className="container" id = "about_body">
        <div className="container" align="center">
            <h1>Housekeeping Services</h1>
            <div>We will provide all Housekeeping Services to maintain your adobe.</div>
        </div>
        <br/>

        <Services />
        

        <hr/>

        <h2>Please fill up the form for any need</h2>

        <HousekeepingForm />
        <br/>
    </div>
);