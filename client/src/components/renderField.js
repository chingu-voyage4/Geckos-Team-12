import React from "react";

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && (error && <span className="error">{error}</span>)}
    </div>
  </div>
);

export default renderField;
