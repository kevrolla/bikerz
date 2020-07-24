import React, { Component } from 'react';
import { NavLink,Link } from "react-router-dom";
import io from "socket.io-client";
import './style.css';





import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';

import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

let sender_image ="images/sender.webp"
let my_image ="images/me.webp"

export default class Chatroom extends Component {
  
  

  constructor(props) {    
    super(props)
    this.state = {
      isToggleOn: false,
      username: localStorage.getItem('username'),
      message: '',
      messages: [],
      showEmoji:false,
    }
    //const chatbottom = React.createRef();
    ////chat //////////////////////////
    this.socket = io('localhost:8081');

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            var chatbottom = document.getElementById('chatbottom');
            chatbottom.scrollIntoView({ behavior: 'smooth' });
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({message: ''});
            this.hideImoji();
            
        }

        this.toggleImoji = ev =>{
          this.setState({showEmoji: !this.state.showEmoji});
        }

        this.hideImoji = ev =>{
          this.setState({showEmoji: false});
        }

        
    //////////////////////////////////

   this.Events = this.Events.bind(this);
   this.upcomingEvents = this.upcomingEvents.bind(this);
   this.createEvents = this.createEvents.bind(this);
   this.createthreadPage = this.createthreadPage.bind(this);
   this.chatroomPage = this.chatroomPage.bind(this);
   }

  addEmoji = e => {
    let emoji = e.native;
    this.setState({
      message: this.state.message + emoji
    });
  };

  handleKeyPress = (e) => {
    if(e.charCode==13){      
      this.sendButton.click();  
    }
  }

  Events(){
    this.props.history.push('/events');
  }

  upcomingEvents(){
    this.props.history.push('/upcoming-events');
  }

  createEvents(){
    this.props.history.push('/create-events');
  }
  createthreadPage(){
    this.props.history.push('/create-threads');
  }
  chatroomPage(){
    this.props.history.push('/chatroom');
  }

  



  render() {

    return (
      <div  className="App main-outercon chat-main">
        <div className="page-wrap solid-bg chat-bg">
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
                        <div className="selectedbutton-style">
                           <button className="btn-common grey-col event-button" onClick={this.chatroomPage}>Chat Room</button>
                        </div>
                      </div></div>



                    <div className="left-blk chat-room-width">
                        <div className="page-head">
                          <h3>Chatroom</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="chatroom-content nj-chat-row">

<div class="row nj-chat-row">
<div class="col-md-2" onClick={this.hideImoji}> </div>
<div class="col-md-8 nj-profile-space">
<div id="frame">

   
  <div class="content">
    <div onClick={this.hideImoji} class="messages" >
      <ul>
        
      {this.state.messages.map(message => {
      return (
      <li className={ message.author == this.state.username ? 'replies':'sent'}>
         <img src={ message.author == this.state.username ? my_image:sender_image} alt="" />
         <p>{ message.author == this.state.username ? ' ' : <b>{message.author} : </b>} {message.message}</p>
      </li>
      )
      })}
    
    <li className="replies demo-message" id="chatbottom" ref={this.chatbottom}></li>  
      </ul>
    </div>
    <div class="message-input">
      <div class="wrap">
      <input type="text" placeholder="Write your message..." onKeyPress={this.handleKeyPress} value={this.state.message}  onChange={ev => this.setState({message: ev.target.value})}/>
      <i onClick={this.toggleImoji} class="fa fa-smile-o attachment" aria-hidden="true"></i>
      <button ref={sendButton => { this.sendButton = sendButton; }}  onClick={this.sendMessage} class="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
      </div>
    </div>
    
  </div>

  { this.state.showEmoji ?   
  <Picker showPreview="false" style={{ position: 'absolute', bottom: '0px', right: '0px' }}  onSelect={this.addEmoji} />
   : null 
  } 
 <div class="profile">
    <div class="">
      <div class="profile-sidebar">
       
        <div class="profile-userpic">
          <img src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg" class="img-responsive" alt=""/>
        </div>
        
      
        
       
        
      </div>
    </div>
    
  </div>


</div>
</div>
<div onClick={this.hideImoji} class="col-md-2">


</div>
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