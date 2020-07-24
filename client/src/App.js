import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import logo from './logo.svg';

// Pages
import HomePage from './containers/home/index.jsx';
import AboutPage from './containers/about/index.jsx';
import InstructionsPage from './containers/instructions/index.jsx';
import contactPage from './containers/contact/index.jsx';
import SigninPage from './containers/signin/index.jsx';
import RegisterPage from './containers/register/index.jsx';
import Eventpage from './containers/events/index.jsx';
import UpcomingeventsPage from './containers/upcoming-events/index.jsx';
import createeventPage from './containers/create-events/index.jsx';
import chatroomPage from './containers/chatroom/index.jsx';
import CreatethreadPage from './containers/create-threads/index.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/instructions" component={InstructionsPage} />
        <Route exact path="/contact" component={contactPage} />
        <Route exact path="/signin" component={SigninPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/events" component={Eventpage} />
        <Route exact path="/upcoming-events" component={UpcomingeventsPage} />
        <Route exact path="/create-events" component={createeventPage} />
        <Route exact path="/create-threads" component={CreatethreadPage} />
        <Route exact path="/chatroom" component={chatroomPage} />
        <Route exact path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
