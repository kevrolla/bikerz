import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css';



import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';


export default class Contact extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     fields: {
  //       name: '',
  //       email: '',
  //       password: '',
  //       address: '',
  //       city: '',
  //       zipcode: '',
  //       no_services_day: ''
  //     },
  //     errors: {},
  //   }

  //   this.handleChange = this.handleChange.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);
  //   this.back = this.back.bind(this);

  // };


  // handleChange(e) {
  //   const target = e.target;
  //   let fields = this.state.fields;
  //   fields[e.target.name] = e.target.value;
  //   this.setState({
  //     fields
  //   });
  // }

  // back() {
  //   this.props.history.push('/');
  // }

  // onSubmit(e) {
  //   e.preventDefault();
  //   if (this.validateForm()) {
  //     console.log('Form data:')
  //     console.log(this.state.fields)
  //     this.props.history.push('/');
  //   }
  // }


  // validateForm() {
  //   let fields = this.state.fields;
  //   let errors = {};
  //   let formIsValid = true;

  //   if (!fields["name"]) {
  //     formIsValid = false;
  //     errors["name"] = "*Please enter your name.";
  //   }

  //   if (!fields["email"]) {
  //     formIsValid = false;
  //     errors["email"] = "*Please enter your email.";
  //   }

  //   if (!fields["phone"]) {
  //     formIsValid = false;
  //     errors["phone"] = "*Please enter your phone no.";
  //   }

  //   if (!fields["address"]) {
  //     formIsValid = false;
  //     errors["address"] = "*Please enter your address.";
  //   }




  //   this.setState({
  //     errors: errors
  //   });
  //   return formIsValid;
  // }




  render() {

    return (
      <div className="App main-outercon contact">
        <div className="page-wrap solid-bg">
          <Header></Header>
          <section className="content-container">
            <div className="page-container">
              <div className="container">
                <div className="row contact-row">
                  <div className="col-md-6">
                    <div className="left-blk">
                      <div className="page-head">
                        <h3>Contact</h3>
                        <p>If you have any questions regarding this App, please do not hesitate to contact us..Thanks.</p>
                      </div>
                      <div className="form-blk">
                        <form onSubmit={this.onSubmit}>
                          {/* <div className="form-row"> */}
                          <div className='form-row'>
                            <label>CEO's:</label>
                            <p>Shlomo Pleban<br />Kevin Thomas</p>
                          </div>
                          <div className='form-row'>
                            <label>EMAIL:</label>
                            <p>spleban@orangesoftware.com<br />team_rolla@icloud.com</p>
                          </div>
                          <div className='form-row'>
                            <label>PHONE:</label>
                            <p>1-800-BOOT-CAMP</p>
                          </div>
                          <div className='form-row'>
                            <label>Address:</label>
                            <p>UC Berkeley Extensions<br />2515 Hillegass Ave<br />Berkeley, CA. 94704</p>
                          </div>



                          <div className="form-row btn-blk two-btns-blk">
                            <button className="btn-common grey-col" onClick={this.back}>Back</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="right-blk">
                      <img src="images/cycling.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="footer-push"></div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
