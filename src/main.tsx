// import 'react-app-polyfill/ie9';
// import "preact/debug"
import React from "react";
import ReactDOM from "react-dom";
import "./lib/bootstrap/all.scss";
import "./global.sass";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// pages
import IndexPage from "./pages/IndexPage";
import MessageBoard from "./pages/MessageBoard/index";
import ForPrint from "./pages/ForPrint";
import PrintProject from "./pages/PrintProject";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/message_board.html" children={MessageBoard()} />
          <Route path="/for_print.html" children={ForPrint()} />
          <Route path="/print_project.html" children={PrintProject()} />
          <Route path="/" children={IndexPage()} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
