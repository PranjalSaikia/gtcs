import React, { Component } from 'react';
import NavBar from './../Components/Navbar';
import Footer from './../Components/Footer';
import AffordableHousingForm from './../Forms/AffordableHousingForm';


class AffordableHousing extends Component {
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
export default  AffordableHousing;

export const BannerAfford = () => (
    <div className="banner-about">
        <img src={require('./../assets/images/Technical.png')} alt="" className="banner-about-image" />
    </div>
);

export const AffordBody = () => (
    <div className="container" id = "about_body">
        <div className="container" align="center">
            <h1>Affordable Housing</h1>
            <div>Make your dream come true</div>
        </div>


        <h2>Housing at Affordable Price</h2>
        <p>Being on a seismic zone there is always a chance of earthquake so affordable housing will give you maximum safety with optimum cost to safe guard your houses against seismic activities and moreover keeping in mind the aesthetic view of the structure and the colour combination which will give a pleasant appearance to the structure. So, this affordable housing will make your house stand still up to centuries.</p>

        <hr/>

        <h2 align="center">Please fill up the form for more details</h2>

        <AffordableHousingForm />
    </div>
);