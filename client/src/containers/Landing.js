import React, { Component } from "react";
import { connect } from "react-redux";
import "../assets/css/landing.css";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Toast from "../components/Toast";
import { signInUser, signUpUser } from "../redux/Auth";

export class Landing extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }
  handleLogin() {
    let values = this.props.form.loginForm.values;
    //console.log(values);
    this.props
      .signInUser(values)
      .then(() => this.props.history.push("/mygarden#header"))
      .catch(err => this.setState({ error: err }));
  }
  handleSignup() {
    let values = this.props.form.signupForm.values;
    //console.log(values);
    this.props
      .signUpUser(values)
      .then(() => this.props.history.push("/mygarden#header"))
      .catch(err => this.setState({ error: err }));
  }
  render() {
    const { showToast, toastMessage, toastError } = this.props;
    return (
      <div>
        <div className="landing">
          <div className="s1">
            <div className="catchy-phrase">
              <h1>Grow anything simply.</h1>
              <h2>SimpleSeed helps you easily grow your own organic food.</h2>
            </div>
            <div className="catchy-footer">
              <div className="catchy-feature">
                <div className="catchy-img">
                  <i className="fab fa-leanpub fa-5x" />
                </div>
                <div className="catchy-content">
                  <p>Learn growing your own food.</p>
                </div>
              </div>
              <div className="catchy-feature">
                <div className="catchy-img">
                  <i className="far fa-bell fa-5x" />
                </div>
                <div className="catchy-content">
                  <p>Get specific reminders.</p>
                </div>
              </div>
              <div className="catchy-feature">
                <div className="catchy-img">
                  <i className="fas fa-trophy fa-5x" />
                </div>
                <div className="catchy-content">
                  <p>Earn community badges</p>
                </div>
              </div>
            </div>
          </div>

          <div className="s2">
            <h1>How does it work?</h1>
            <iframe
              title="SimpleSeed HowTo"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9IB1V9H0K6s"
            />
          </div>
          <div className="s3">
            <h1 className="features-title">Why use SimpleSeed?</h1>
            <div className="feature">
              <div className="feature-img">
                <i className="fab fa-leanpub fa-5x" />
              </div>
              <div className="feature-content">
                <p>
                  Browse freely our collection of crop basic info and tutorials.
                  Our dedicated coders-gardeners have gathered data from across
                  th web to help you learn how to easily grow organic food.
                </p>
              </div>
            </div>
            <div className="feature-flip">
              <div className="feature-img-flip">
                <i className="far fa-bell fa-5x" />
              </div>
              <div className="feature-content-flip">
                <p>
                  Busy with work and family. No worries, we got you covered we
                  will remind everytime your crops need attention. You can
                  choose from web to email notifications.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-img">
                <i className="fas fa-trophy fa-5x" />
              </div>
              <div className="feature-content">
                <p>
                  Complete our easy tutorials and earn badges and trophys to
                  become a an active member of our community. And if you want it
                  you can start writing your own tutorials.
                </p>
              </div>
            </div>
            <div className="feature-flip">
              <div className="feature-img-flip">
                <i className="fas fa-users fa-5x" />
              </div>
              <div className="feature-content-flip">
                <p>
                  Be part of a growing community. More and more people Turn to
                  their yard to grow their own crops. From aromatic herbds to
                  potatoes we are here to help you join ypur neighbours into
                  this great experience.
                </p>
              </div>
            </div>
          </div>

          <div className="s4" id="join">
            <h1>Give it a try</h1>
            <div className="s4-1">
              <div className="form-title">Login</div>
              <Login
                handleSubmit={e => {
                  e.preventDefault();
                  this.handleLogin();
                }}
              />
            </div>
            <div className="divider" />
            <div className="s4-2">
              <div className="form-title">SignUp</div>
              <Signup
                handleSubmit={e => {
                  e.preventDefault();
                  this.handleSignup();
                }}
              />
            </div>
          </div>
        </div>
        <Toast show={showToast} message={toastMessage} error={toastError} />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  signInUser: values => dispatch(signInUser(values)),
  signUpUser: values => dispatch(signUpUser(values))
});
const mapStateToProps = state => {
  return {
    auth: state.auth.authenticated,
    showToast: state.auth.showToast,
    toastMessage: state.auth.toastMessage,
    toastError: state.auth.toastError,
    form: state.form
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
