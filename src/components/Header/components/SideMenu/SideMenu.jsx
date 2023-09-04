//libraries
import React from "react";
//components
import { MenuLinks } from "../";
import { Footer } from "../../../";
import "./SideMenu.scss";
const SideMenu = ({ isMobileView, isMenuOpen, toggleMenu, yoffset }) => {
  if (!isMobileView || !isMenuOpen) return;
  return (
    <div
      className="sidemenu"
      style={{
        position: "fixed",
        top: `${yoffset}px`,
        left: "0",
        right: "0",
        bottom: "0",
      }}
    >
      <MenuLinks toggleMenu={toggleMenu} isMobileView={isMobileView} />
      <Footer />
    </div>
  );
};

export default SideMenu;
