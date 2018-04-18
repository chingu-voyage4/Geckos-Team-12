import React, { Component } from "react";
import { connect } from "react-redux";

import { signInUser } from "../redux/Auth";
import { Field, reduxForm } from "redux-form";
import renderField from "./renderField";
const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
  ) {
    errors.username = "Invalid email address";
  }

  return errors;
};
class Login extends Component {
  handleSubmit(values) {
    this.props.signInUser(values);
  }
  render() {
    const { submitting } = this.props;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <Field
          name="username"
          type="text"
          component={renderField}
          label="Username"
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
        />
        <div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => ({
  signInUser: values => dispatch(signInUser(values))
});
export default reduxForm({
  form: "loginForm",
  validate
})(connect(mapStateToProps, mapDispatchToProps)(Login));
