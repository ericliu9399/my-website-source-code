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
import getPathName from './lib/getPathName'
const pathName = getPathName()
function App() {
  console.log("v7")
  console.log("App")
  console.log(pathName)
  return <Router>
    <Switch>
      <Route path={pathName + "/message_board"}>
        <MessageBoard pathName={pathName} />
      </Route>
      <Route path={pathName + "/"}>
        <IndexPage pathName={pathName} />
      </Route>
    </Switch>
  </Router >
}

ReactDOM.render(
  <App />
  , document.getElementById('app'));