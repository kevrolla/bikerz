import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './style.css';



import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';


import { EditorState } from 'draft-js';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';



import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
export default class createthread extends Component {

  constructor(props) {

    super(props)
    this.state = {


      editorState: EditorState.createEmpty()
    };
    //this.hamburgerClick = this.hamburgerClick.bind(this)
    this.Events = this.Events.bind(this);
    this.pastEvents = this.pastEvents.bind(this);
    this.upcomingEvents = this.upcomingEvents.bind(this);
    this.createEvents = this.createEvents.bind(this);
    this.chatroomPage = this.chatroomPage.bind(this);
    this.createthreadPage = this.createthreadPage.bind(this);
    this.homeClick = this.homeClick.bind(this);
  }

  componentDidMount() {

  }

  Events() {
    this.props.history.push('/events');
  }

  pastEvents() {
    this.props.history.push('/past-events');
  }

  upcomingEvents() {
    this.props.history.push('/upcoming-events');
  }

  createEvents() {
    this.props.history.push('/create-events');
  }

  chatroomPage() {
    this.props.history.push('/chatroom');
  }
  createthreadPage() {
    this.props.history.push('/create-threads');
  }
  homeClick() {
    this.props.history.push('/');
  }



  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  addEmoji = e => {
    let emoji = e.native;
    this.setState({
      text: this.state.text + emoji
    });
  };
  onEditorStateChange = editorState => { this.setState({ editorState }); };
  render() {
    const { editorState } = this.state;

    return (
      <div className="App main-outercon past-main createthread-main">
        <div className="page-wrap solid-bg">
          <Header></Header>
          <section className="content-container">
            <div className="page-container">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">

                    <div className="dashboard-wrap"><div className="dashboard-head">
                      <div className="dashboard-right">
                        <button className="home-icon" onClick={this.Events}><img src="images/home-icon.png" width="30px" alt="" className="" /></button>
                      </div>
                      <div className="dashboard-right">
                        <button className="btn-common grey-col event-button" onClick={this.upcomingEvents}>Upcoming Events</button>
                      </div>
                      <div className="dashboard-right">
                        <button className="btn-common grey-col event-button" onClick={this.createEvents}>Create Events</button>
                      </div>
                      <div className="selectedbutton-style">
                        <button className="btn-common grey-col event-button" onClick={this.createthreadPage}>Create Thread</button>
                      </div>
                      <div className="dashboard-right">
                        <button className="btn-common grey-col event-button" onClick={this.chatroomPage}>Chat Room</button>
                      </div>

                    </div></div>

                  </div>

                </div>

                <div className="outer-row"> <div className="row">











                  <div className="col-md-8">
                    <div className="thread-head-style"><h3>Create Thread</h3></div>
                    <input type="text" className="input-style input-style-title" placeholder="Enter title here" value={this.state.value} onChange={this.handleChange} />

                    <Editor
                      editorState={editorState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      onEditorStateChange={this.onEditorStateChange}
                    />
                  </div>
                  <div className="col-md-4">

                    <form onSubmit={this.handleSubmit} className="smily-form">
                      <span> Post Icon:<input
                        type="text" className="max-icon"
                        value={this.state.text}
                        onChange={this.handleChange}
                        placeholder="post a icon"
                      /></span>
                    </form>

                    <span>
                      <Picker onSelect={this.addEmoji} />
                    </span></div>


                </div>
                  <div className="row createthread-row">

                    <div className="col-md-8"><input type="text" className="input-style input-style-title" placeholder="Separate tags using commas" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>



                  </div>
                  <div className="row createthread-row-second">


                    <div className="col-md-2"><button className="btn-common btn-first-create" onClick={this.createthreadPage}>Preview</button> </div>
                    <div className="col-md-3"> <button className="btn-common btn-seco-create" onClick={this.createthreadPage}>Submit new thread</button></div>
                    <div className="col-md-7"></div>




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
