import React from "react";
import { Link } from "react-router-dom";

const Back = ({ to, text }) => {
  return (
    <div className="back">
      <Link to={to}>{text}</Link>
    </div>
  );
};

export default Back;
