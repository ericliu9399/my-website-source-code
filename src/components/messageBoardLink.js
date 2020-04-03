import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MsgBoard from '../pages/messageBoard'

export default () => {
  return (
    <Router>
      <Link to="/msgBoard">msgBoard</Link>
      <Switch>
        <Route path="/msgBoard">
          <MsgBoard />
        </Route>
      </Switch>
    </Router >
  )
}