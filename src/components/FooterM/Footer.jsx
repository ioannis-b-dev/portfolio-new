import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="socials">
        <a
          href="https://github.com/ioannis-b-dev"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/ioannis-gkigkelos-678089257/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div> */}
      <div className="contactme">
        <span>ioannis.gkigkelos@gmail.com</span>
        <span>+030 6977686956</span>
      </div>
    </div>
  );
};

export default Footer;
