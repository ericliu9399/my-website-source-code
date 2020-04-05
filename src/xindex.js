import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.sass';
//pages
import IndexPage from './pages/indexPage.js'
import MsgBoard from './pages/messageBoard'
import SampleJs from './pages/sampleJs'
import SampleReact from './pages/sampleReact'
import {
  BrowserRouter,// as Router加了會有異常
  Switch,
  Route,
  Link,
} from "react-router-dom";

const NavBar = () => <nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/react">React</Link>
    </li>
  </ul>
</nav>


ReactDOM.render(
  <>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/react">React</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/react'>
          <SampleReact />
        </Route>
        <Route path='/'>
          <SampleJs />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
  , document.getElementById('app'));
