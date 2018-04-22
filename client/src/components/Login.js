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
