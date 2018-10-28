import React, { Component } from 'react';
import { PostFormData } from './../api/service';
import Location from './Location';
import Loader from './Loader';
import MessageModal from './MessageModal';

class AffordableHousingForm extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            fields: {
                name: '',
                email: '',
                phone: '',
                place: '',
                fileupload: '',
                budget: '',
                location: ''
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

    fileChangedHandler = (field, event) => {
        let fields = this.state.fields;
        fields[field] = URL.createObjectURL(event.target.files[0]);
        this.setState({ fields });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({
            isLoading: true
        })
        const data = new FormData(e.target);
        PostFormData('affordable.php',data).then((resp) => {
            this.setState({
                isLoading: false,
                success: true,
                message: resp.message,
                fields: {
                    name: '',
                    email: '',
                    phone: '',
                    place: '',
                    fileupload: '',
                    budget: '',
                    location: ''
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
                        <span>Your Name:</span>
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
                        <span>Your Email Address:</span>
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
                        <span>Your Phone No:</span>
                        <input 
                            type="number" 
                            className="form-control" 
                            name="phone" 
                            placeholder="Enter Your phone No"
                            onChange={this.handleChange.bind(this, "phone")}
                            value={this.state.fields["phone"]}
                            required={true} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <span>Place where you want to build it:</span>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="place"  
                            placeholder="Enter place"
                            onChange={this.handleChange.bind(this, "place")}
                            value={this.state.fields["place"]}
                            required={true} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <span>File Upload: (image or pdf of the detailed structure in a paper)</span>
                        <input 
                            type="file" 
                            className="form-control" 
                            name="fileupload"  
                            placeholder="Choose File To Upload"
                            onChange={this.fileChangedHandler.bind(this, "fileupload")}
                            ref={(ref) => { this.uploadPhoto = ref; }}
                             />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <span>Your Budget:</span>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="budget" 
                            placeholder="Enter your Budget"
                            onChange={this.handleChange.bind(this, "budget")}
                            value={this.state.fields["budget"]}
                            required={true} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <span>GPS</span><br />
                        <button 
                            className="btn btn-default btn-sm" 
                            type="button"
                            ><i className="fa fa-map-marker"></i> Get Location</button>
                            <Location 
                                onChange={this.handleChange.bind(this, "location")}
                                value={this.state.fields["location"]}
                            />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12" align="right">
                        <button type="submit" className="btn btn-success" >SUBMIT</button>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12" align="right">
                        <h6>**Within 1 week smaples of house plan will be sent</h6>
                    </div>
                </div>
	        </form>
      </div>
    )
  }
}


export default AffordableHousingForm;