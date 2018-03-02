import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./containers/Landing";
import Navbar from "./containers/Navbar";
import Catalog from "./containers/Catalog";
import User from "./containers/User";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route component={Landing} exact path="/" />
        <Route component={Catalog} path="/catalog" />
        <Route component={User} patch="/user" />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
