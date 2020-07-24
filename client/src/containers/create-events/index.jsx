import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './style.css';
import moment from 'moment';
import axios from 'axios';
import { reduxForm } from 'redux-form';
import { AUTH_USER, AUTH_USER_ERROR } from './../../actions/types';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';
import dateToYearMoDa from '../../functions/datefuntions';



class Register extends Component {
  constructor() {
    super();
    this.state = {
      fields: {
        name: '',
        description: '',
        startdate: '',
        enddate: '',
        address: '',
        city: '',
        state: '',
        zip: ''
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

  handleStartDateChange = (date) => {
    let fields = this.state.fields;
    fields['startdate'] = date;
    fields['enddate'] = date;
    this.setState({
      fields
    });
  };

  handleEndDateChange = (date) => {
    let fields = this.state.fields;
    fields['enddate'] = date;
    this.setState({
      fields
    });
  };

  back = () => {
    this.props.history.push('/');
  }

  onSubmit = async (formValues, dispatch) => {
    try {
    this.state.fields['startdate'] = moment(this.state.fields['startdate']).format('YYYY-MM-DD');
     this.state.fields['enddate'] = moment(this.state.fields['enddate']).format('YYYY-MM-DD');
    //  this.state.fields['startdate'] = dateToYearMoDa(this.state.fields['startdate']);
    //  this.state.fields['enddate'] = dateToYearMoDa(this.state.fields['enddate']);

      //console.log(this.state.fields['startdate']);
      //console.log(this.state.fields['enddate']);
      const { data } = await axios.post('/api/event/events',
       this.state,
       { headers: { authorization: localStorage.getItem('token') } });
      //dispatch({ type: AUTH_USER, payload: data.token });
      //console.log(data);
      this.props.history.push('/events');
    } catch (e) {
      dispatch({ type: AUTH_USER_ERROR, payload: e });
      alert(`New Event saving failed, try again. Error message ${e}`);
    }
  }

  validateForm = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Please enter the event name.";
    }

    if (!fields["description"]) {
      formIsValid = false;
      errors["description"] = "*Please enter the event description.";
    }

    if (!fields["startdate"]) {
      formIsValid = false;
      errors["startdate"] = "*Please enter your the Event Start Date.";
    }

    if (!fields["enddate"]) {
      formIsValid = false;
      errors["enddate"] = "*Please enter the Event End Date.";
    }

    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "*Please enter your address.";
    }

    if (!fields["city"]) {
      formIsValid = false;
      errors["city"] = "*Please enter your city.";
    }

    if (!fields["zip"]) {
      formIsValid = false;
      errors["zip"] = "*Please enter your zip code.";
    }
    if (!fields["state"]) {
      formIsValid = false;
      errors["state"] = "*Please enter your state.";
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  Events = () => {
    this.props.history.push('/events');
  }

  upcomingEvents = () => {
    this.props.history.push('/upcoming-events');
  }

  createEvents = () => {
    this.props.history.push('/create-events');
  }

  createthreadPage = () => {
    this.props.history.push('/create-threads');
  }

  chatroomPage = () => {
    this.props.history.push('/chatroom');
  }


  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="App main-outercon">
        <div className="page-wrap solid-bg create-event-style">
          <Header></Header>
          <section className="content-container">
            <div className="page-container">
              <div className="container">
                <div className="row">
                  <div className="col-md-2">
                  </div>
                  <div className="col-md-8">
                    <div className="dashboard-wrap"><div className="dashboard-head">
                      <div className="dashboard-right">
                        <button className="home-icon" onClick={this.Events}><img src="images/home-icon.png" width="30px" alt="" className="" /></button>
                      </div>
                      <div className="dashboard-right">
                        <button className="btn-common grey-col event-button" onClick={this.upcomingEvents}>Upcoming Events</button>
                      </div>
                      <div className="selectedbutton-style">
                        <button className="btn-common grey-col event-button" onClick={this.createEvents}>Create Events</button>
                      </div>
                      <div className="dashboard-right">
                        <button className="btn-common grey-col event-button" onClick={this.createthreadPage}>Create Thread</button>
                      </div>
                      <div className="dashboard-right">
                        <button className="btn-common grey-col event-button" onClick={this.chatroomPage}>Chat Room</button>
                      </div>
                    </div></div>
                  </div>
                  <div className="col-md-12">
                    <div className="left-blk">
                      <div className="page-head">
                        <h3>Create Event</h3>
                      </div>
                      <div className="form-blk create-event-width">
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                          <div className="form-row ">
                            <label>Event Name</label>
                            <input type="text" name="name" className="input-style" value={this.state.fields.name} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.name}</div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-row">
                                <label>Start Date</label>
                                <DatePicker name="startdate"
                                  placeholderText="Enter Start Date"
                                  dateFormat="MM/dd/yyyy"
                                  className="form-control"
                                  selected={this.state.fields.startdate}
                                  onChange={this.handleStartDateChange}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-row">
                                <label>End Date</label>
                                <DatePicker name="enddate"
                                  placeholderText="Enter End Date"
                                  dateFormat="MM/dd/yyyy"
                                  className="form-control"
                                  selected={this.state.fields.enddate}
                                  onChange={this.handleEndDateChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-row ">
                            <label>address</label>
                            <input type="text" name="address" className="input-style" value={this.state.fields.address} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.address}</div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-row">
                                <label>City:</label>
                                <input type="city" name="city" className="input-style" value={this.state.fields.city} onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.city}</div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-row">
                                <label>State:</label>
                                <input type="state" name="state" className="input-style" value={this.state.fields.state} onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.state}</div>
                              </div>
                            </div>
                          </div>
                          <div className="form-row">
                            <label>Zipcode:</label>
                            <input type="zipcode" name="zip" className="input-style" value={this.state.fields.zip} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.zip}</div>
                          </div>
                          <div className="form-row">
                            <label htmlFor="description" >Description</label>
                            <textarea name="description" className="input-style description-text-height" value={this.state.fields.description} onChange={this.handleChange} >
                            </textarea>
                            <div className="errorMsg">{this.state.errors.description}</div>
                          </div>
                          <div className="form-row btn-blk two-btns-blk">
                            <button className="btn-common grey-col create-event-back-button" onClick={this.back}>Back</button>
                            <button className="btn-common create-event-button" type="submit">Save</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
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
export default reduxForm({ form: 'Createevent' })(Register);