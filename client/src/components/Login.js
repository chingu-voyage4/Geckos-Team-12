import React, { Component } from "react";
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
  return errors;
};
class Login extends Component {
  render() {
    const { handleSubmit, valid, submitting } = this.props;
    return (
      <form className="form" onSubmit={handleSubmit}>
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
          <button type="submit" disabled={!valid || submitting}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "loginForm",
  validate
})(Login);
