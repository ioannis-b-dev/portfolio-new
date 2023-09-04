import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button className="main-button" {...props}>
      <span className="text">{props.text}</span>
      <span className="line hr tl"></span>
      <span className="line vr tl"></span>
      <span className="line hr tr"></span>
      <span className="line vr tr"></span>
      <span className="line hr br"></span>
      <span className="line vr br"></span>
      <span className="line hr bl"></span>
      <span className="line vr bl"></span>
    </button>
  );
};

export default Button;
