import React, { Component } from 'react';
import {Link } from "react-router-dom";
import DataTable from 'react-data-table-component';
import { FaBiking } from 'react-icons/fa';
import { BsGeoAlt, BsDot, BsSearch } from "react-icons/bs";
import { MdTimer, MdToday } from "react-icons/md";
import './style.css';



import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';


export default class Upcoming extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: false,
      events: [],
    }
   
  }

  

  componentDidMount() {
    //  Api request and setState here
    console.log('happening')
    this.setState({ events: ['1','2','3']});
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

  renderNums = () => {
    if(this.state.events.length > 0) {
      return this.state.events.map(num => {
        return <li>{num}</li>
      })
    }
  }

  render() {

    return (
      <div className="App main-outercon upcoming-main">
        <div className="page-wrap solid-bg">
          <Header></Header>
          <section className="content-container">
            <div className="page-container">
              <div className="container">
                <div className="row main-row">
                  <div className="col-md-12">

                    <div className="dashboard-wrap"><div className="dashboard-head">
                      <div className="dashboard-right">
                        <button className="home-icon" onClick={this.Events}><img src="images/home-icon.png" width="30px" alt="" className="" /></button>
                      </div>
                      <div className="selectedbutton-style">
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
                    </div></div>
                    <div className="left-blk">
                      <div className="page-head">
                        <h3>Upcoming Events</h3>
                        <p>The following events will be coming to a Convention near you!.</p>
                      </div>

                    </div>

                    <div className="dashboard-content">
                      <div className="row">
                        <div className="col-md-4">

                        </div>

                        <div className="col-md-4">
                          <div className="card">
                            <div className="card-body dashboard-card">
                              <h4 className="card-title">Upcoming Events</h4>
                              <ul className="list-unstyled event-list" >
                                <li className="card-text"><FaBiking className="event-box-icons" /><b>Bicycle event show 2020</b>
                                  <ul>
                                    { this.renderNums()}
                                    <li className="card-text card-sub-text location-icon"><MdTimer className="event-time-icon" />Event time: 5 PM</li>
                                    <li className="card-text card-sub-text-sub location-icon"><MdToday className="event-date-icon" />Date: June 16 2020</li>
                                  </ul>
                                </li>
                                <li className="card-text"><FaBiking className="event-box-icons" /><b>Bicycle event show 2020</b>
                                  <ul>
                                    <li className="card-text card-sub-text location-icon"><MdTimer className="event-time-icon" />Event time: 5 PM</li>
                                    <li className="card-text card-sub-text-sub location-icon"><MdToday className="event-date-icon" />Date: June 26 2020</li>
                                  </ul>
                                </li>
                                <li className="card-text"><FaBiking className="event-box-icons" /><b>Bicycle event show 2020</b>
                                  <ul>
                                    <li className="card-text card-sub-text location-icon"><MdTimer className="event-time-icon" />Event time: 5 PM</li>
                                    <li className="card-text card-sub-text-sub location-icon"><MdToday className="event-date-icon" />Date: June 27 2020</li>
                                  </ul>
                                </li>
                                <li className="card-text"><FaBiking className="event-box-icons" /><b>Bicycle event show 2020</b>
                                  <ul>
                                    <li className="card-text card-sub-text location-icon"><MdTimer className="event-time-icon" />Event time: 5 PM</li>
                                    <li className="card-text card-sub-text-sub location-icon"><MdToday className="event-date-icon" />Date: June 28 2020</li>
                                  </ul>
                                </li>


                              </ul>

                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">

                        </div>
                      </div>
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
