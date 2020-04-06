import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.sass';
import {
  HashRouter, //這款router refresh會可以顯示
  BrowserRouter,// as Router加了會有異常
  Switch,
  Route,
} from "react-router-dom";
//pages
import IndexPage from './pages/indexPage.js'
import MsgBoard from './pages/messageBoard'
import LandingPage from './pages/landingPage/landingPage'
const pagesArray = [
  { page: <MsgBoard />, route: "/message_board" },
  { page: <LandingPage />, route: "/landing_page" },
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
  <HashRouter>
    <Switch>
      {routes}
    </Switch>
  </HashRouter>
  , document.getElementById('app'));