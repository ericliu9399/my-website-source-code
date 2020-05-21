import 'react-app-polyfill/ie9'
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/global.sass';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//pages
import IndexPage from './pages/IndexPage'
import MessageBoard from './pages/MessageBoard'

console.log("2c0de3d")

function App() {
  return <Router>
    <Switch>
      <Route path="/message_board" component={MessageBoard} />
      <Route path="/" component={IndexPage} />
    </Switch>
  </Router >
}

ReactDOM.render(
  <App />
  , document.getElementById('app'));