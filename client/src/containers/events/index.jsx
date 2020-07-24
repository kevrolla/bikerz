import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import axios from 'axios';
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';
import { FaBiking } from 'react-icons/fa';
import { BsGeoAlt, BsDot, BsSearch } from "react-icons/bs";
import { MdTimer, MdToday } from "react-icons/md";
import ReactSearchBox from 'react-search-box'
import moment from 'moment';
//import MapComponent from "../../components/map";
import StoreMap from "../../components/storeMap";
import SimpleMap from "../../components/simpleMap";
import BicycleStores from "../../components/bicycleStores";
import './style.css';

import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';

class Register extends Component {

  constructor() {
    super();
    this.state = {
      events: [],
      stores: []
    }
  };

  retrieveEvents = async () => {
    try {
      const { data } = await axios.get("/api/event/findeventsbydate");
      this.setState({
        events: data
      });
    }
    catch (err) {
      console.log(err);
      this.props.history.push('/customer_dashboard');
    }
  }

  
  componentDidMount() {
    const date = new Date();
    this.state.date = date;
    this.retrieveEvents();
  }

  back = () => {
    this.props.history.push('/signin');
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


  renderEvents = () => {
    const events = this.findEvents();
    if (events.length > 0) {
      this.setState({
        events
      });

    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="App main-outercon" >
        <div className="page-wrap solid-bg event-bg">
          <Header></Header>
          <section className="content-container">
            <div className="page-container">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="dashboard-wrap">
                      <div className="dashboard-head">
                        <div className="dashboard-right">
                          <button className="home-icon" onClick={this.Events}><img src="images/home-icon.png" width="30px" alt="" className="" /></button>
                        </div>
                        <div className="dashboard-right">
                          <button className="btn-common grey-col event-button" onClick={this.upcomingEvents}>Upcoming Events</button>
                        </div>
                        <div className="dashboard-right">
                          <button className="btn-common grey-col event-button" onClick={this.createEvents}>Create Events</button>
                        </div>
                        <div className="dashboard-right">
                          <button className="btn-common grey-col event-button" onClick={this.createthreadPage}>Create Thread</button>
                        </div>
                        <div className="dashboard-right">
                          <button className="btn-common grey-col event-button" onClick={this.chatroomPage}>Chat Room</button>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="page-head">
                          <h3>Dashboard</h3>
                        </div>
                      </div>
                      <div className="dashboard-content">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card">
                              <div className="card-body dashboard-card">
                                <h4 className="card-title">Events</h4>
                                <ul className="list-unstyled event-list" >
                                  {
                                    this.state.events?.map(event => {
                                      return (
                                        <li>
                                          <ul>
                                            <li className="card-text" ><FaBiking className="event-box-icons" /><b>{event.name}</b></li>
                                            <li className="card-text card-sub-text-sub location-icon"><MdToday className="event-date-icon" />Dates: {moment(event.start_date).format('ddd M/D/YY')} - {moment(event.end_date).format('ddd M/D/YY')}</li>
                                            <li className="card-text shop-list-style">
                                              {/* <img src="images/thumbnail.png" width="30px" alt="" className="shop-location-icon thumbnail-image-style" /> */}
                                              <b>{event.description}</b></li>
                                            <li className="card-text shop-list-style"><img src="images/thumbnail.png" width="30px" alt="" className="shop-location-icon thumbnail-image-style" />
                                              <b>{event.address} {event.city} {event.state} {event.zip}</b></li>
                                          </ul>
                                          <div className='h-divider'></div>
                                        </li>
                                      )
                                    })
                                  }
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="card">
                              <div className="card-body dashboard-card">
                                <h4 className="card-title">Bicycle Shops</h4>
                                {/* <div className="row top-margin-10">
                                  <div className="col-md-9 col-lg-10 search-bar-style">
                                    <input type="text" placeholder="Search shop" name="search" className="input-style search-content-style" />
                                  </div>
                                  <div className="col-md-3 col-lg-2 left-no-padding">
                                    <button className="btn-common grey-col event-button search-button "><i className="fa fa-search"></i> </button>
                                  </div>
                                </div> */}
                                <ul className="list-unstyleds" >
                                <BicycleStores/>

                                
                                  {/* <li className="card-text shop-list-style event-list"><img src="images/thumbnail.png" width="30px" alt="" className="shop-location-icon thumbnail-image-style" /><b>Bicycle shop Oakland USA</b>
                                    <ul>
                                      <li className="card-text card-sub-text location-icon-shop"><BsGeoAlt className="shop-location-icon " />California</li>
                                    </ul>
                                  </li>
                                  <li className="card-text shop-list-style"><img src="images/thumbnail.png" width="30px" alt="" className="shop-location-icon thumbnail-image-style" /><b>Bicycle shop Berkeley USA</b>
                                    <ul>
                                      <li className="card-text card-sub-text location-icon-shop"><BsGeoAlt className="shop-location-icon" />California</li>
                                    </ul>
                                  </li>
                                  <li className="card-text shop-list-style"><img src="images/thumbnail.png" width="30px" alt="" className="shop-location-icon thumbnail-image-style" /><b>Bicycle shop Castro Valley USA</b>
                                    <ul>
                                      <li className="card-text card-sub-text location-icon-shop"><BsGeoAlt className="shop-location-icon" />Calofornia</li>
                                    </ul>
                                  </li>
                                  <li className="card-text shop-list-style"><img src="images/thumbnail.png" width="30px" alt="" className="shop-location-icon thumbnail-image-style" /><b>Bicycle shop San Leandro </b>
                                    <ul>
                                      <li className="card-text card-sub-text location-icon-shop"><BsGeoAlt className="shop-location-icon" />California</li>
                                    </ul>
                                  </li> */}
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="card">
                              <div className="card-body dashboard-card">
                                <h4 className="card-title"><a>Threads</a></h4>
                                <ul className="faq-list-style" >
                                  <li className="card-text faq-list"><BsDot className="faq-list-icon" />Looking for 1995 Mongoose bike crank, </li>
                                  <li className="card-text"><BsDot className="faq-list-icon" /><span className="thread-text">Selling a 1935 Unicycle  </span>  </li>
                                  <li className="card-text"><BsDot className="faq-list-icon" />im looking for a good bike shop in the bay area </li>
                                  <li className="card-text"><BsDot className="faq-list-icon" />anybody down for a bike rideout??</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div>

          </div>
          <div className="footer-push"></div>
        </div>
        {/* <StoreMap/> */}
        
        <Footer></Footer>
      </div>
    )
  }
}

export default reduxForm({ form: 'Events' })(Register);