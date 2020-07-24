import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "font-awesome/css/font-awesome.min.css";
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import { Provider } from 'react-redux';


import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './App';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 1st param is our reducers
// 2nd param is any preloaded state we want
// 3rd param is any middlwares we want applied to redux


const store = createStore(
  reducers,
  { auth: { authenticated: localStorage.getItem('token')}},
  composeEnhancers(applyMiddleware(reduxThunk))
);



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root'));
