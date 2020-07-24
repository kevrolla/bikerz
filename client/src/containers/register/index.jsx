import React, { Component } from 'react';

import { Link } from "react-router-dom";

import './style.css';
import axios from 'axios';
import { reduxForm } from 'redux-form';
import { AUTH_USER, AUTH_USER_ERROR } from './../../actions/types';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';

class Register extends Component {

  constructor() {
    super();
    this.state = {
      fields: {
        name: '',
        email: '',
        password: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        acceptEmail: false,
      },
      errors: {},
    }
  };

  handleChange = (e) => {
    const target = e.target;
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  toggleChange = (e) => {
    const target = e.target;
    let fields = this.state.fields;
    fields[e.target.name] = e.target.checked;
    this.setState({
      fields
    });
  }

  back = () => {
    this.props.history.push('/');
  }


  onSubmit = async (formValues, dispatch) => {
    try {
      console.log(this.state);
      const { data } = await axios.post('/api/auth/signup', this.state);
      localStorage.setItem('token', data.token);
      dispatch({ type: AUTH_USER, payload: data.token });
      this.props.history.push('/events');
    } catch (e) {
      dispatch({ type: AUTH_USER_ERROR, payload: e });
      alert(`Registration failed, try again. Error message ${e}`)
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;


    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Please enter your name.";
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email.";
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "*Please enter your address.";
    }

    if (!fields["city"]) {
      formIsValid = false;
      errors["city"] = "*Please enter your city.";
    }
    if (!fields["state"]) {
      formIsValid = false;
      errors["state"] = "*Please enter your state.";
    }

    if (!fields["zip"]) {
      formIsValid = false;
      errors["zip"] = "*Please enter your zip code.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="App main-outercon register">
        <div className="page-wrap solid-bg">
          <Header></Header>
          <section className="content-container">
            <div className="page-container">
              <div className="container register-margin-btm">
                <div className="row register-margin">
                  <div className="col-md-5 register-left">
                    <div className="left-blk">
                      <div className="page-head">
                        <h3>Register Now</h3>
                      </div>
                      <div className="form-blk">
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                          <div className="form-row">
                            <label>Your name:</label>
                            <input type="text" name="name" className="input-style" value={this.state.fields.name} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.name}</div>
                          </div>
                          <div className="form-row">
                            <label>Email:</label>
                            <input type="email" name="email" className="input-style" value={this.state.fields.email} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.email}</div>
                          </div>
                          <div className="form-row">
                            <label>User Name:</label>
                            <input type="text" name="username" className="input-style" value={this.state.fields.username} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.username}</div>
                          </div>
                          <div className="form-row">
                            <label>Password:</label>
                            <input type="password" name="password" className="input-style" value={this.state.fields.password} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.password}</div>
                          </div>
                          <div className="form-row">
                            <label>Address:</label>
                            <input type="text" name="address" className="input-style" value={this.state.fields.address} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.address}</div>
                          </div>
                          <div className="form-row">
                            <label>City:</label>
                            <input type="text" name="city" className="input-style" value={this.state.fields.city} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.city}</div>
                          </div>
                          <div className="form-row">
                            <label>State:</label>
                            <input type="text" name="state" className="input-style" value={this.state.fields.state} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.state}</div>
                          </div>
                          <div className="form-row">
                            <label>Zipcode:</label>
                            <input type="zipcode" name="zip" className="input-style" value={this.state.fields.zip} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.zip}</div>
                          </div>
                          <div className="form-row">
                            <label>

                              <input type="checkbox" name="acceptEmail" className="nj-register-notification-space" checked={this.state.acceptEmail} onChange={this.toggleChange} />

                              <span className="">Receive Email Notifications</span>
                            </label>
                            <div className="errorMsg">{this.state.errors.emailnotification}</div>
                          </div>
                          <div className="form-row btn-blk two-btns-blk">
                            <button className="btn-common grey-col" onClick={this.back}>Back</button>
                            <button className="btn-common" type="submit">Save</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 no-margin-left">
                    <div className="right-blk inner-img-reg">
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

export default reduxForm({ form: 'signup' })(Register);