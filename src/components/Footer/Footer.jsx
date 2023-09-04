//libraries
import React from "react";
import useScreenSize from "../../hooks/useScreenSize";
import "./Footer.scss";
const Footer = () => {
  const { isMobileView } = useScreenSize();
  return (
    <div className="footer">
      {!isMobileView && <div>ioannis.gkigkelos@gmail.com</div>}
      <div className="socials">
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
      </div>
      {!isMobileView && <div>+030 6977686956</div>}
    </div>
  );
};

export default Footer;
