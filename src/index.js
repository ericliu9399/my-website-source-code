import 'react-app-polyfill/ie9'
// import "preact/debug"
import React from 'react';
import ReactDOM from 'react-dom';
import './lib/scss/import_bootstrap.scss'
import './styles/global.sass';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
//pages
import IndexPage from './pages/IndexPage'
import MessageBoard from './pages/MessageBoard'
import ForPrint from './pages/ForPrint'
import PrintProject from './pages/PrintProject'
//這三個圖片是給 readme.md 與 cakeresume 用的
import './images/preview_landing_page.jpg'
import './images/preview_message_board.png'
import './images/preview_this_personal_website.png'
import './images/favicon-32x32.png'
import * as serviceWorker from './serviceWorker'

console.log("heah123")

function App() {
  return <Router>
    <Switch>
      <Route path="/message_board" component={MessageBoard} />
      <Route path="/for_print" component={ForPrint} />
      <Route path="/print_project" component={PrintProject} />
      <Route path="/" component={IndexPage} />
    </Switch>
  </Router >
}
ReactDOM.render(
  <App />
  , document.getElementById('root'));

serviceWorker.register()