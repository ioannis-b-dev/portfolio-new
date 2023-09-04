import React from "react";
import { MenuLinks, MenuButton } from "..";
import "./TopMenu.scss";
const TopMenu = ({ isMobileView, isMenuOpen, toggleMenu }) => {
  return (
    <div className="topmenu">
      {!isMobileView ? (
        <MenuLinks toggleMenu={toggleMenu} isMobileView={isMobileView} />
      ) : (
        <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      )}
    </div>
  );
};

export default TopMenu;
