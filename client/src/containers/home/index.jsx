import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';



import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';

const localizer = momentLocalizer(moment)

export default class Home extends Component {

  constructor() {
    super();

    this.state = {

    }


    this.signinClick = this.signinClick.bind(this);

    this.registerClick = this.registerClick.bind(this);


  };


  signinClick() {
    this.props.history.push('/signin');
  }



  registerClick() {
    this.props.history.push('/register');
  }




  componentDidMount() {


    localStorage.clear();



  }










  render() {

    return (
      <div className="App main-outercon home">
        <div className="page-wrap solid-bg">
          <Header></Header>
          <section className="content-container">
            <div className="page-container">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="left-blk">
                      <div className="page-head">
                        <h3>Welcome to Bikerz</h3>
                        <p>Well now since we have your attention, thank you for considering our App, The only APP that you will ever need for all your bicycle needs, or requirements. Please register or sign in, and have fun using the APP!</p>
                      </div>
                      <div className="btn-wrap">

                        <button className="btn-common register-btn" onClick={this.registerClick}>Register</button>
                        <button className="btn-common" onClick={this.signinClick}>Sign In</button>

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
