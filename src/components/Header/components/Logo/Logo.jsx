//libraries
import React from "react";
import { Link } from "react-router-dom";

import "./Logo.scss";

const Logo = ({ toggleMenu }) => {
  return (
    <div className="logo">
      <Link to="/" onClick={() => toggleMenu(false)}>
        Ioannis G<span>.</span>
      </Link>
    </div>
  );
};

export default Logo;
