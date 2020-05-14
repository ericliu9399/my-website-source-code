import 'react-app-polyfill/ie9'
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.sass';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//pages
import IndexPage from './pages/IndexPage'
import MessageBoard from './pages/MessageBoard'

const pagesArray = [
  { page: <MessageBoard />, route: "/message_board" },
  { page: <IndexPage />, route: "/" },
]
console.log("v4")
const routes = pagesArray.map(p => (
  <Route
    path={p.route}
    key={p.route}
  >
    {p.page}
  </Route>
))
ReactDOM.render(
  <Router >
    <Switch>
      {routes}
    </Switch>
  </Router >
  , document.getElementById('app'));