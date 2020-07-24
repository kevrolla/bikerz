import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
                        <h3>About Bikerz</h3>
                        <p> If you have a fasination about bicycles, then you came to the right place.</p>
                        <p> This APP was designed for all the bicycle lovers in the world, if your're a collector, rider , exerciser, designer, seller, or just love bicycles period this APP is for you.</p>
                        <p> This is a one stop shop for all your bicycle needs.</p>
                        <p> This APP was designed to help people create bicycle events, to get people together to put on a display everything that has to do with bicycles..their knowledge, craftmanship, and overall experience about bicycles.</p>


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
