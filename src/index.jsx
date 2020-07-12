import 'react-app-polyfill/ie9';
// import "preact/debug"
import React from 'react';
import ReactDOM from 'react-dom';
import './lib/scss/import_bootstrap.scss';
import './styles/global.sass';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Router from './lib/browser-router';
// pages
import IndexPage from './pages/IndexPage';
import MessageBoard from './pages/MessageBoard/index';
import ForPrint from './pages/ForPrint';
import PrintProject from './pages/PrintProject';
import * as serviceWorker from './serviceWorker';

console.log('456789');

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/message_board" component={MessageBoard} />
        <Route path="/for_print" component={ForPrint} />
        <Route path="/print_project" component={PrintProject} />
        <Route path="/" component={IndexPage} />
      </Switch>
    </Router>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

serviceWorker.register();
