import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.sass';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//pages
import IndexPage from './pages/indexPage.js'
import MsgBoard from './pages/messageBoard'
import Sample from './pages/sample'
const pagesArray = [
  { page: <Sample />, route: "/sample" },
  { page: <MsgBoard />, route: "/message_board" },
  { page: <IndexPage />, route: "/" },
]

const routes = pagesArray.map(p => (
  <Route
    path={p.route}
    key={p.route}
  >
    {p.page}
  </Route>
))
ReactDOM.render(
  <Router>
    <Switch>
      {routes}
    </Switch>
  </Router>
  , document.getElementById('root'));