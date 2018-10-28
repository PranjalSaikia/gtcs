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
                collectionpoint: ''
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
        PostData('lab.php',data).then((resp) => {
            this.setState({
                isLoading: false,
                success: true,
                message: resp.message,
                fields: {
                    name: '',
                    email: '',
                    phone: '',
                    collectionpoint: ''
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
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <label>Collection point:</label>
                        <textarea
                            rows="5"   
                            className="form-control" 
                            name="collectionpoint"  
                            placeholder="Collection point"
                            onChange={this.handleChange.bind(this, "collectionpoint")}
                            value={this.state.fields["collectionpoint"]}
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