import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import Landing from "./containers/Landing";
import Navbar from "./containers/Navbar";
import Footer from "./components/Footer";
import Catalog from "./containers/Catalog";
import MyGarden from "./containers/MyGarden";
import Profile from "./containers/Profile";
import Crop from "./containers/Crop";
import "./assets/css/index.css";
import "./assets/css/components.css";
import Cookies from "universal-cookie";
import { AUTH_SUCCESS } from "./redux/Auth";
const cookies = new Cookies();

const store = configureStore();
let token = cookies.get("token");
if (token) store.dispatch({ type: AUTH_SUCCESS, data: token });
const App = () => (
  <Router>
    <div className="app-wrapper">
      <Navbar />
      <Switch>
        <Route component={Landing} exact path="/" />
        <Route component={Catalog} path="/catalog" />
        <Route component={Crop} path="/crops/:name" />
        <Route component={MyGarden} path="/mygarden" />
        <Route component={Profile} patch="/user" />
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
