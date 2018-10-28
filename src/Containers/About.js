import React, { Component } from 'react';
import NavBar from './../Components/Navbar';
import Footer from './../Components/Footer';
import './css/about.css';

class About extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <BannerAbout />
          <AboutBody />
          <Footer />
      </div>
    )
  }
}

export default About;

export const BannerAbout = () => (
    <div className="banner-about">
        <img src={require('./../assets/images/2.jpg')} alt="" className="banner-about-image" />
    </div>
);


export const AboutBody = () => (
    <div className="container" id="about_body">
        <h1>About Us</h1>

        <hr />

        <h2>Background</h2>
        <p>GEO TECHNO CONSULTING SOLUTIONS was formed in 2015 as an engineering consulting solution firm in Guwahati, Assam, India. Our primary objective is to provide consultancy services for engineering solutions. Initially we start providing consultancy services in the field of civil survey including field data collection, designing of road and preparation Details Project Report(DPR). Now Geo Techno Consulting Solutions have key activities in the field of Civil Design,Research based project for industrial design, automation and IT solutions at the same time we are venturing in the field of agricultural products. Our motive is to make this world for better living place by using the modern and green technology for upliftment of people’s living standards. We are addressing the opportunities and challenges in building a future that will empower, enable and enrich. As a young technology engineering construction, projects and services conglomerate, we are leveraging new age technologies to transform ourselves, and virtually every aspect of the lives of people we touch.</p>
        <p>Geo Techno Consulting Solutions employs qualified and innovative individuals who have the necessary skills and years of experience to respond to today’s, challenging engineering needs. Exceeding client satisfaction motivates Geo Techno Consulting Solutions.</p>

        <hr/>

        <h2>Our Journey</h2>
        <p>We start our journey as a road survey and design firm initially and in the years passed we took the opportunity to expand our working field to building design, bridge design,Water Reservoir, Dam Design and Solution for river Training Work,Sports Infrastructure Design,Electrical Engineering Consultancy Services for Infrastructure Development,Web Design, Android app Development, Database Management, Software Development etc. Along with in the field of Geo Technical Solutions with Modern Laboratory.</p>

        <hr/>

        <h2>Our Values</h2>
        <p>The company upholds the following values as a guideline to its operation and business transactions:

            <ul className="list-unstyled">
                <li>Commitment</li>
                <li>Customer Value</li>
                <li>Team Work</li>
                <li>Professionalism</li>
                <li>Flexibility/Adaptability</li>
                <li>Social Responsibility</li>
            </ul>

        </p>

        <hr/>

        <h2>General Information</h2>
        <table className="table table-bordered" id="about_table">
            <tr>
                <td>
                    <h4>Primary Contact</h4>
                </td>
                <td>
                    Phanindra Nath<br/>Tel: +91 7002027327/+91 9678839793<br/>E-mail: admingtcs@geotechno.info
                </td>
            </tr>

            <tr>
                <td>
                    <h4>Address</h4>
                </td>
                <td>
                    Geo Techno Consulting Solutions<br/>Village & P.O- Habibarangabari<br/>District-Morigaon, Assam<br/>Pin-782106
                </td>
            </tr>

            <tr>
                <td>
                    <h4>Type of Business</h4>
                </td>
                <td>
                    Engineering consultancy services
                </td>
            </tr>
        </table>
        

        <hr/>


        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <h2>Key Technical Persons</h2>
                <ul className="list-unstyled">
                    <li><i className="fa fa-angle-right"></i> PHANINDRA NATH (FOUNDER), B.E IN CIVIL </li>
                    <li><i className="fa fa-angle-right"></i> NABA JYOTI SARKAR, B. E IN CIVIL, M. TECH IN GEO TECH</li>
                    <li><i className="fa fa-angle-right"></i> ANUP DAS, B.E IN CIVIL, MBA</li>
                    <li><i className="fa fa-angle-right"></i> KARISHMA CHETIA, B. TECH IN CIVIL, M. E IN WATER RESOURCE </li>
                    <li><i className="fa fa-angle-right"></i> NISHIMON KONWAR, B. E, M.E IN STRUCTURE</li>
                    <li><i className="fa fa-angle-right"></i> PARISMITA BORA, BE, M.E IN WATER RESOURCE</li>
                    <li><i className="fa fa-angle-right"></i> PAUJEBE KUAME, B.E IN CIVIL </li>
                    <li><i className="fa fa-angle-right"></i> MANAS SAIKIA, B.E IN CIVIL </li>
                    <li><i className="fa fa-angle-right"></i> SOMNATH SAHA, B. TECH IN CIVIL </li>
                    <li><i className="fa fa-angle-right"></i> RAHUL KAKATI, B.E IN CIVIL</li>
                    <li><i className="fa fa-angle-right"></i> DEBAJIT BORAH, B.E, M. TECH IN CONTROL AND INSTRUMENTATION </li>
                    <li><i className="fa fa-angle-right"></i> PANKAJ NATH BORDOLOI, BSC, MCA</li>
                    <li><i className="fa fa-angle-right"></i> SHRUTIMALLIKA SARMA M.A IN CULTURAL STUDIES AND MASS COMMUNICATION</li>
                    <li><i className="fa fa-angle-right"></i> MANDEEP KONWAR, DIPLOMA IN CIVIL </li>
                    <li><i className="fa fa-angle-right"></i> PRITOMJIT DAWKA, DIPLOMA IN CIVIL </li>
                    <li><i className="fa fa-angle-right"></i> BARNALI BARMAN, DIPLOMA IN ARCHITECT </li>
                    <li><i className="fa fa-angle-right"></i> BISHAL MILI, DIPLOMA IN CIVIL ENGINEERING </li>
                </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <h2>OVERVIEW</h2>
                <p>We have specialization in following fields</p>
                <ul className="list-unstyled">
                    <li><i className="fa fa-angle-right"></i> Building Design.</li>
                    <li><i className="fa fa-angle-right"></i> Survey, Road/Bridge Design.</li>
                    <li><i className="fa fa-angle-right"></i> Water Resource Management.</li>
                    <li><i className="fa fa-angle-right"></i> Sports Infrastructure Design.</li>
                    <li><i className="fa fa-angle-right"></i> Contour Survey and GIS Mapping.</li>
                    <li><i className="fa fa-angle-right"></i> Slope Stability Analysis and Design.</li>
                    <li><i className="fa fa-angle-right"></i> Water Reservoir, Dam Design.</li>
                    <li><i className="fa fa-angle-right"></i> Soil and Concrete Testing Service (Modern Laboratory).</li>
                    <li><i className="fa fa-angle-right"></i> Electrical Engineering Consultancy Services for Infrastructure Development.</li>
                    <li><i className="fa fa-angle-right"></i> Web Design, Android App Development, Database Management, Software Development etc.</li>
                    <li><i className="fa fa-angle-right"></i> Home Automation Service.</li>
                    <li><i className="fa fa-angle-right"></i> Housekeeping Service.</li>
                </ul>
            </div>
        </div>

        <hr />

        <h2>Conclusion</h2>
        <p>Experience and expertise is a very powerful combination. Our experience in understanding clients’ requirements, coupled with our technical expertise has enabled us to provide engineering solutions to many satisfied customers.</p>

    </div>
);
