import React, { Component } from 'react';
import { PostData } from './../api/service';
import Loader from './Loader';
import MessageModal from './MessageModal';

class CivilEngineeringForm extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            fields: {
                name: '',
                email: '',
                phone: '',
                reqs: '',
                location: '',
                address: ''
            },
            errors: [],
            isLoading: false,
            success: false,
            message: ''
        }
    }


    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }


    onSubmit(e) {
        e.preventDefault();
        this.setState({
            isLoading: true
        })
        const data = this.state.fields;
        PostData('housekeeping.php',data).then((resp) => {
            this.setState({
                isLoading: false,
                success: true,
                message: resp.message,
                fields: {
                    name: '',
                    email: '',
                    phone: '',
                    reqs: '',
                    location: '',
                    address: ''
                }
            })
        })


    }

    closeLoader(){
        this.setState({
            isLoading: false
        })
    }

    closeModal() {
        this.setState({
            success: false
        })
    }
    
  render() {

    return (
      <div className="container">

            {this.state.isLoading ? (<Loader onClickClose={this.closeLoader.bind(this)} />) : null}
            {this.state.success ? (<MessageModal onClickCloseModal={this.closeModal.bind(this)} message={this.state.message} />) : null}
            <form 
                encType="multipart/form-data" 
                className="form"
                onSubmit={this.onSubmit.bind(this)}
                >
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label>Your Name:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name"  
                            placeholder="Enter your Name"
                            onChange={this.handleChange.bind(this, "name")}
                            value={this.state.fields["name"]}
                            required={true}
                             />
			        </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label>Your Phone No:</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            name="phone" 
                            placeholder="Enter Your phone No"
                            onChange={this.handleChange.bind(this, "phone")}
                            value={this.state.fields["phone"]}
                            required={true} />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <label>Your Email Address:</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter your email address"
                            onChange={this.handleChange.bind(this, "email")}
                            value={this.state.fields["email"]}
                            required={true} />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label>Requirements:</label>
                        <select
                            className="form-control"
                            name="reqs"
                            onChange={this.handleChange.bind(this, "reqs")}
                            value={this.state.fields["reqs"]}
                            required={true}
                            >
                            <option value="">Choose a service</option>
                            <option value="Electrician">Electrician</option>
                            <option value="House Cleaner">House Cleaner</option>
                            <option value="Laundry Service">Laundry Service</option>
                            <option value="Child care">Child care</option>
                            <option value="Carpentry service">Carpentry Service</option>
                            <option value="Sweeper service">Sweeper Service</option>
                            
                            </select>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label>Choose a location:</label>
                        <select
                            className="form-control"
                            name="location"
                            onChange={this.handleChange.bind(this, "location")}
                            value={this.state.fields["location"]}
                            required={true} >
                            
                            <option value="">Choose currently available location</option>
                            <option value="Guwahati">Guwahati</option>
                            <option value="Dibrugarh">Dibrugarh</option>
                            
                            </select>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <label>Address:</label>
                        <textarea
                            rows="5"   
                            className="form-control" 
                            name="address"  
                            placeholder="Type your address here"
                            onChange={this.handleChange.bind(this, "address")}
                            value={this.state.fields["address"]}
                            required={true}
                             ></textarea>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12" align="right">
                        <button type="submit" className="btn btn-success" >SUBMIT</button>
                    </div>
                    
                </div>
	        </form>
      </div>
    )
  }
}


export default CivilEngineeringForm;