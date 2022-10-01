// import 'react-app-polyfill/ie9';
// import "preact/debug"
import React from 'react';
import ReactDOM from 'react-dom';
import './lib/bootstrap/all.scss';
import './global.sass';
import {
  Route, RouterProvider, Routes,
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
      <Routes>
        <Route path="/message_board.html" children={MessageBoard()} />
        <Route path="/for_print.html" children={ForPrint()} />
        <Route path="/print_project.html" children={PrintProject()} />
        <Route path="/" children={IndexPage()} />
      </Routes>
    </Router>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

serviceWorker.register();
