import React from "react";
import "../assets/css/toast.css";

export const Toast = props => {
  const { message, error, show } = props;
  return (
    <div className={`${error ? "toastError" : "toast"} ${show && show} `}>
      {message}
    </div>
  );
};

export default Toast;
