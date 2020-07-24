import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css';

export default class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isloggedin: localStorage.getItem('token')
    } 
  }

  aboutPage = () => {
    this.props.history.push('/about');
  }

  instructionsPage = () => {
    this.props.history.push('/instructions');
  }
  contactPage = () => {
    this.props.history.push('/contact');
  }

  componentDidMount = () => {

  }

  logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = '/';
  }

  render() {
    return (
      <header className="header-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="header-block">
                <div className="logo-blk">
                  <Link to="/">Bikerz</Link>
                </div>
                <div className="menu-blk">
                  <ul>
                    <li><Link to="/about">About </Link></li>
                    <li><Link to="/instructions">Instructions</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {this.state.isloggedin && (
                      <li><a className="logout_btn" onClick={this.logout}>Logout</a></li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

