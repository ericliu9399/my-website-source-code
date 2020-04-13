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
import IndexPage from './pages/IndexPage'
import MessageBoard from './pages/MessageBoard'
const pagesArray = [
  { page: <MessageBoard />, route: "/message_board" },
  { page: <IndexPage />, route: "/" },
]
console.log("v1")
const routes = pagesArray.map(p => (
  <Route
    path={p.route}
    key={p.route}
  >
    {p.page}
  </Route>
))
ReactDOM.render(
  <HashRouter >
    <Switch>
      {routes}
    </Switch>
  </HashRouter >
  , document.getElementById('app'));