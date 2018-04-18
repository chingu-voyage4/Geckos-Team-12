import React, { Component } from "react";
import { connect } from "react-redux";

import { signUpUser } from "../redux/Auth";
import { Field, reduxForm } from "redux-form";
import renderField from "./renderField";

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
  ) {
    errors.username = "Invalid email address.";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
      values.password
    )
  ) {
    errors.password =
      "Password must be contain at - at least 8 characters - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number - Can contain special characters";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.password !== values.confirmPassword) {
    errors.password = "Password must match.";
  }
  return errors;
};
class Signup extends Component {
  handleSubmit(values) {
    this.props.signUpUser(values);
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
        <Field
          name="confirmPassword"
          type="password"
          component={renderField}
          label="Confirm password"
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
  signUpUser: values => dispatch(signUpUser(values))
});
export default reduxForm({
  form: "signupForm",
  validate
})(connect(mapStateToProps, mapDispatchToProps)(Signup));
