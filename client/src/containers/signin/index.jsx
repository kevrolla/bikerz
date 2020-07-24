import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './style.css';
import axios from 'axios';
import { reduxForm, SubmissionError } from 'redux-form';
import { AUTH_USER, AUTH_USER_ERROR } from './../../actions/types';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';

class Signin extends Component {

  constructor() {
    super();
    this.state = {
      fields: {
        email: '',
        password: '',
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

 
  onSubmit = async (formValues, dispatch) => {
    if (this.validateForm()) {
      try {
        const { data } = await axios.post('/api/auth/signin', this.state.fields);
        localStorage.setItem('token', data.token);
        dispatch({ type: AUTH_USER, payload: data.token });
        this.props.history.push('/events');
      } catch (e) {
        throw new SubmissionError({
          email: 'Please try again',
          password: 'You entered a bad password',
          _error: 'Login Failed'
        });
      }
    }
  }

  validateForm = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email.";
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }


  registerClick = () => {
    this.props.history.push('/register');
  }


  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="App main-outercon signin">
        <div className="page-wrap solid-bg">
          <Header></Header>
          <section className="content-container">
            <div className="page-container">
              <div className="container">
                <div className="row sign-height">
                  <div className="col-md-5 sign-in-form">
                    <div className="left-blk">
                      <div className="page-head">
                        <h3>Sign in to Bikerz</h3>
                        <p>Please Sign In.</p>
                      </div>
                      <div className="form-blk">
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                          <div className="form-row">
                            <label>Email:</label>
                            <input type="email" name="email" className="input-style" value={this.state.fields.email} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.email}</div>
                          </div>
                          <div className="form-row">
                            <label>Password:</label>
                            <input type="password" name="password" className="input-style" value={this.state.fields.password} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.password}</div>
                          </div>
                          <div className="form-row btn-blk two-btns-blk">
                            <button className="btn-common" type='submit'>Sign in</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 no-margin-left">
                    <div className="right-blk inner-img">
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-4 footer-reg">New here?   <button className="register-link" onClick={this.registerClick}>  Sign up Now</button></div>
                  <div className="col-md-8"></div>
                </div></div>
            </div>
          </section>
          <div className="footer-push"></div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default reduxForm({ form: 'signup' })(Signin);