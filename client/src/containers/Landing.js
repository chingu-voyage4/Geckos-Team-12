import React, { Component } from "react";
import { connect } from "react-redux";

export class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="s1">
          <div className="catchy-phrase">
            <h1>Grow anything.</h1>
            <h2>SimpleSeed helps you easily grow your own organic food.</h2>
          </div>
          <div className="feature1">feature1</div>
          <div className="feature2">feature2</div>
          <div className="feature3">feature3</div>
        </div>
        <div className="s2">
          <h1>How does it work?</h1>
        </div>
        <div className="s3-1">Section 3.1</div>
        <div className="s3-2">Section 3.2</div>
        <div className="s3-3">Section 3.3</div>
        <div className="s4">
          <h1>Give it a try</h1>
          <div>Login</div>
          <div>SignUp</div>
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

export default connect(mapStateToProps, null)(Landing);
