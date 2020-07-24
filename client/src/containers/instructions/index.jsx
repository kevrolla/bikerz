import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './style.css';



import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';


export default class About extends Component {






  render() {

    return (
      <div className="App main-outercon">
        <div className="page-wrap solid-bg">
          <Header></Header>
          <section className="content-container">
            <div className="page-container">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="left-blk">
                      <div className="page-head">
                        <h3>Instructions</h3>
                        <p><b>Step 1:</b>First download the app.</p>
                        <p><b>Step 2:</b>Then fill out the registration page.</p>
                        <p><b>Step 3:</b>After that please Sign In.</p>
                        <p><b>Step 4:</b>And once you get to the Dashboard page you have a few options to choose from..from creating bicycle events, to searching for all available bicycle shops in your area, creating a thread, or simply chatting with people with the same interests as you...Thank You and please enjoy</p>


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
