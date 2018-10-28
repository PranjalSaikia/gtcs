import React, { Component } from 'react';
import NavBar from './../Components/Navbar';
import Footer from './../Components/Footer';
import './css/geolab.css';
import CivilEngineeringForm from './../Forms/CivilEngineeringForm';

class GeoLab extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <BannerLab />
        <LabBody />
        <Footer />
      </div>
    )
  }
}

export default GeoLab;


export const BannerLab = () => (
    <div className="banner-about">
        <img src={require('./../assets/images/lab.jpg')} alt="" className="banner-about-image" />
    </div>
);


export const LabBody = () => (
    <div className="container" id="about_body">
        <div className="container" align="center"><br/>
            <h1>Civil Engineering Laboratory</h1>
            
        </div>
        <p>The laboratory is equipped with modern standard instruments which are operated by our distinguished & experienced personals. This lab enables to carry various experiments related to soil laboratory experiments carried out in lab intended to determine the best results as far as possible.</p>

        <hr />

        <h1>Soil Mechanics Laboratory Pricing</h1>

        <table class="table table-bordered" id="table_soil">
            <thead>
                <tr>
                    <th>Sl. No.</th>
                    <th>Item</th>
                    <th>Weight of Sample Required</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Liquid Limit, Plastic Limit & Plasticity Index</td>
                    <td>10 kg</td>
                    <td>&#8377; 600.00</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Compaction | MDD & OMC(Modified Proctor)</td>
                    <td>60 kg</td>
                    <td>&#8377; 2,500.00</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>C.B.R Test</td>
                    <td>30 kg</td>
                    <td>&#8377; 3,500.00</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Grading</td>
                    <td>1 kg</td>
                    <td>&#8377; 500.00</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Specific Gravity</td>
                    <td>1 kg</td>
                    <td>&#8377; 500.00</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Bulk Density</td>
                    <td></td>
                    <td>&#8377; 250.00</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Moisture Content</td>
                    <td></td>
                    <td>&#8377; 250.00</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Permeability Test</td>
                    <td>10 kg</td>
                    <td>&#8377; 2,000.00</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Direct Shear Test(Small)</td>
                    <td>5 kg</td>
                    <td>&#8377; 3,000.00</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Direct Shear Test(Large)</td>
                    <td>70 kg</td>
                    <td>&#8377; 10,000.00</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>SSI Per 15m Depth of Bore Hole(Excluding Transportation etc.)</td>
                    <td></td>
                    <td>&#8377; 15,000.00</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Triaxial Test For Soil</td>
                    <td></td>
                    <td>&#8377; 6,000.00</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Field Density By Core Cutter Method, Per Location(Excluding Transportation etc.)</td>
                    <td></td>
                    <td>&#8377; 1,000.00</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Field Density By Sand Replacement Cutter, Per Location(Excluding Transportation etc.)</td>
                    <td></td>
                    <td>&#8377; 5,000.00</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Electrical Resistivity Test, Per Location(Excluding Transportation etc.)</td>
                    <td></td>
                    <td>&#8377; 10,000.00</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Static Cone Penetration Test, Per Location(Excluding Transportation etc.)</td>
                    <td></td>
                    <td>&#8377; 10,000.00</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>Sedimentation Analysis</td>
                    <td>2 kg</td>
                    <td>&#8377; 1,000.00</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>Grain Size Test By Plammet Balance</td>
                    <td>2 kg</td>
                    <td>&#8377; 1,000.00</td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>Bulking Factors</td>
                    <td></td>
                    <td>&#8377; 300.00</td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>Unconfined Compression Strenth Test</td>
                    <td>Diameter 36mm & Length 76mm</td>
                    <td>&#8377; 3,500.00</td>
                </tr>
                <tr>
                    <td>21</td>
                    <td>Consolidation Test</td>
                    <td>Diameter 4" & Length 15 to 10 cm</td>
                    <td>&#8377; 2,000.00</td>
                </tr>
                <tr>
                    <td>22</td>
                    <td>Relative Density Test</td>
                    <td>20 kg</td>
                    <td>&#8377; 3,000.00</td>
                </tr>
                <tr>
                    <td>23</td>
                    <td>Field Vane Shear Test, Per Location</td>
                    <td></td>
                    <td>&#8377; 2,000.00</td>
                </tr>
            </tbody>
        </table>

        <hr/>
        <h2 >You can send us samples for test</h2>

        <CivilEngineeringForm />

        <br/>


    </div>
);