import React, { Component } from 'react'
import NavBar from '../Components/Navbar';
import './css/banner.css';
import './css/homepage.css';
import Footer from '../Components/Footer';

class HomePage extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <Banner />
          <Wrw />
          <Footer />
      </div>
    )
  }
}
export default HomePage;


export const Banner = () => (
    <div className="banner">
    
            <div className="banner-text">
                GEO TECHNO <br/>
                CONSULTING<br/>
                SOLUTIONS
                
            </div>
        <div className="banner-text-small">ISO 9001:2015 Standard Organisation</div>

            <div className="banner-image">
                <img alt="" src={require('./../assets/images/banner-home.png')} className="banner-image-tag" />
            </div>
    
    </div>
);


export const Wrw = () => (
    <div className="who-are-we">
        <h1>Who we are</h1>
        <br/>

        <p>GEO TECHNO CONSULTING SOLUTIONS was formed in 2015 as an engineering consulting solution firm in Guwahati, Assam, India. Our primary objective is to provide consultancy services for engineering solutions. Initially we start providing consultancy services in the field of civil survey including field data collection, designing of road and preparation Details Project Report(DPR). Now Geo Techno Consulting Solutions have key activities in the field of Civil Design, Research based project for industrial design, automation and IT solutions at the same time we are venturing in the field of agricultural products. Our motive is to make this world for better living place by using the modern and green technology for upliftment of people’s living standards. We are addressing the opportunities and challenges in building a future that will empower, enable and enrich. As a young technology engineering construction, projects and services conglomerate, we are leveraging new age technologies to transform ourselves, and virtually every aspect of the lives of people we touch.</p>

        <p>Geo Techno Consulting Solutions employs qualified and innovative individuals who have the necessary skills and years of experience to respond to today’s, challenging engineering needs. Exceeding client satisfaction motivates Geo Techno Consulting Solutions.</p>
    </div>
)