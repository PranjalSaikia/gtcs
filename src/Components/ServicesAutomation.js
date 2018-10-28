import React, { Component } from 'react';
import ServicesCardAutomation from './ServicesCardAutomation';

class Services extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            services: []
        }
    }

    componentDidMount() {
        let initialState = [];
        initialState = [
            {
                "id": 1,
                "name": "CCTV Surveillance System",
                "tag": "We will placed surveillance system in locations like perimeter, entry & exit, sensitive and strategic locations for safety & security of the residents. The objective of every investment is towards have better surveillance and detecting early signs of danger and to provide the visual proof in case of any security breaches"
            },
            {
                "id": 2,
                "name": "Fire Alarm System",
                "tag": "We provide FAS (Fire Alarm System) either automatically actuated, manually actuated, or both. We shall suggest the right FAS solutions based on the need of the project)"
            },
            {
                "id": 3,
                "name": "Entry Management System",
                "tag": "Automated Car Entry gives you the flexibility of entry to your premises without being pulling the rolling shutter or sliding gate or boom barrier. It’s the most needed convenience for you. Allowing the authorized vehicles inside the parking lot gives various benefits to the Residential Apartments or Gated community."
            },
            {
                "id": 4,
                "name": "Automated Car Parking System",
                "tag": "Access Control systems include Card, Biometric, Special Electronic Locks, Photo ID systems, Protection management systems. Provides integrated building security and access control systems for interior and exterior doors in buildings through following identifiers:"
            },
            {
                "id": 5,
                "name": "Guard Patrolling System",
                "tag": "Guard patrolling is essential to make sure that the gated community or the premises is safe and secure through the security personals periodical movement."
            },
            {
                "id": 6,
                "name": "Water Metering System",
                "tag": "We provide the right water metering solution for the requirement of the high-rise buildings, Multi Dwelling Units and Gated Communities. the solution is an integrated platform that enables Measurement, Monitoring, Prediction and Billing of Home User's water consumption. Water Metering is a unique combination of Electronics and Mechanics combining together to provide the most accurate Water Measurement and Metering solution."
            },
            {
                "id": 7,
                "name": "Common Area Lighting & Gardening Automation",
                "tag": "In gated community setups we provide Lighting Automation that provides energy harvesting by turning ON/OFF the lights as required or reduces the intensity of light to match the Day Light thereby benefitting the nature’s Sun Light usage."
            },
            {
                "id": 8,
                "name": "Lighting (Led) & Energy Saving Solution",
                "tag": "Energy saving Sensors, Switches and Modules Turns on / off Lightings based on the presence and natural lighting. Also, the scheduled lighting shall make sure the common area lights are turned ON / OFF at the right time thereby making it a system dependent than a person dependent and also in these process saves the energy. We bring you the latest & best of the light fittings from leading brands across the world which suits your unique decor requirement."
            },
            {
                "id": 9,
                "name": "Building Solutions(SS & Glass Works)",
                "tag": "Smart Solutions should provide ‘safety, security and lifestyle products’ to fulfil this it is important to use the Steel & Glass materials apart from the Technological Solution"
            }

        ];
        this.setState({services: initialState});
    }
  render() {
      let i = this.state.services;
      let items = i.map((item) => 
          <ServicesCardAutomation 
            key={item.id}
            name={item.name}
            tag={item.tag}
            more={item.more}
            image={item.image}
                    />
    );
    return (
        <div className="service-card-grid">   
            {items}
        </div>
    )
  }
}

export default Services;