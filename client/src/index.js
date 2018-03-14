import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import Landing from "./containers/Landing";
import Navbar from "./containers/Navbar";
import Footer from "./components/Footer";
import Catalog from "./containers/Catalog";
import User from "./containers/User";
import "./assets/css/index.css";
const store = configureStore();

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route component={Landing} exact path="/" />
        <Route component={Catalog} path="/catalog" />
        <Route component={User} patch="/user" />
      </Switch>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
