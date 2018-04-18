import React from "react";
import { Link } from "react-router-dom";

const Back = ({ to, text }) => {
  return (
    <div className="back">
      <i className="fas fa-angle-left fa-3x" />
      <Link to={to}>{text}</Link>
    </div>
  );
};

export default Back;
