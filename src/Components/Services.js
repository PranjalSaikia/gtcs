import React, { Component } from 'react';
import ServicesCard from './ServicesCard';

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
                "name": "Electrician",
                "tag": "Do proper electrical connection, make your home safe and sound.",
                "image": "electrician.jpg",
                "more": "<ul><li> Geyser Installation Repair</li><li>MCB Repair</li><li>TV/LCD/LED Installation and Repair</li><li>Inverter Installation and Repair</li><li>Light Fitting</li><li>Any other Electrical Installation and Repair Work</li></ul>"
            },
            {
                "id": 2,
                "name": "House Cleaner",
                "tag": "We will clean your house at low cost and minimum duration.",
                "image": "cleaning.jpg",
                "more": "<ul><li>Complete House Cleaning</li><li>Normal Dusting</li><li>Deep House Cleaning</li><li>Kitchen Cleaning</li><li>Bathroom Cleaning</li><li>Overhead Water Storage Tank Cleaning</li><li>Dining Chair Shampooing</li><li>Office Chair Shampooing</li><li>Carpet Shampooing</li><li>Fabric Sofa Shampooing</li><li>Floor Scrubbing and Polishing</li><li>Mattress Shampooing</li></ul>"
            },
            {
                "id": 3,
                "name": "Laundry Service",
                "tag": "Cleaning clothes at affordable price and very quick.",
                "image": "laundry.jpg",
                "more": ""
            },
            {
                "id": 4,
                "name": "Child care",
                "tag": "Look after your kids and be tension free. And enjoy at work.",
                "image": "child_care.jpg",
                "more": ""
            },
            {
                "id": 5,
                "name": "Carpentry Service",
                "tag": "Making or fixing wooden objects or wooden parts of your buildings will be done by skilled worker.",
                "image": "carpentry.jpg",
                "more": "<ul><li>Repair Wooden Goods</li><li>Colour on Wooden Objects</li><li>Make New Wooden Goods</li></ul>"
            },
            {
                "id": 6,
                "name": "Sweeper Service",
                "tag": "Stay hygiene, clean your boundary. We will provide all kind of swiper services.",
                "image": "sweeper.jpg",
                "more": "<ul><li>Cleaning Drain</li><li>Wash Outlet Pipes</li></ul>"
            }

        ];
        this.setState({services: initialState});
    }
  render() {
      let i = this.state.services;
      let items = i.map((item) => 
          <ServicesCard 
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