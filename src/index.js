import 'react-app-polyfill/ie9'
import React from 'react';
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
// import getPathName from './lib/getPathName'

function App() {
  const pathname = ""//for deploy
  // const pathname = getPathName()//for deploy-dev
  return <Router >
    <Switch>
      <Route path={pathname + "/message_board"}>
        <MessageBoard pathname={pathname} />
      </Route>
      <Route path={pathname + "/"}>
        <IndexPage pathname={pathname} />
      </Route>
    </Switch>
  </Router >
}

ReactDOM.render(
  <App />
  , document.getElementById('app'));