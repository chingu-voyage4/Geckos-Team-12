import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { signInUser, signOutUser } from "../redux/Auth";
import "../assets/css/navBar.css";

export class Navbar extends Component {
  signOut = () => this.props.signOut;
  handleSignIn = () => {
    this.props.signIn();
    this.props.history.push("/mygarden");
  };
  handleSignOut = () => {
    this.props.signOut();
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    return (
      <div className="nav-bar">
        <div
          className="nav-bar-brand"
          onClick={() => this.props.history.push("/")}
        >
          SimpleSeed
        </div>
        <div className="nav-bar-menu">
          <Link className="" to="/catalog">
            Catalog
          </Link>
          <Link className="" to="/mygarden">
            MyGarden
          </Link>
        </div>
        <div className="nav-bar-user">
          {!auth && (
            <div className="signin">
              <button onClick={this.handleSignIn}>Sign In</button>
              {/* <Link to="/signin">SignIn</Link> */}
              <Link to="/signup">SignUp</Link>
            </div>
          )}
          {auth && (
            <div className="user">
              <button className="signout" onClick={this.handleSignOut}>
                Sign Out
              </button>
              <button
                className="profile"
                to="/profile"
                onClick={() => this.props.history.push("/profile")}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth.authenticated
  };
};
const mapDispatchToProps = dispatch => ({
  signIn: () => dispatch(signInUser()),
  signUp: () => dispatch(signInUser()),
  signOut: () => dispatch(signOutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
