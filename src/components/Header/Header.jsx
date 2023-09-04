//libraries
import React, { useState, useRef, useLayoutEffect } from "react";

//components
import { Logo, TopMenu, SideMenu } from "./components";
import useScreenSize from "../../hooks/useScreenSize";
import "./Header.scss";

const Header = () => {
  const { isMobileView, isMenuOpen, setIsMenuOpen } = useScreenSize();
  const [yoffset, setYoffset] = useState(0);
  const headerRef = useRef(null);

  //computes the height of the header to be used for the sidemenu
  useLayoutEffect(() => {
    setYoffset(headerRef.current.offsetHeight);
  }, [isMobileView]);

  return (
    <div className={`header ${isMenuOpen && "black-bg"}`} ref={headerRef}>
      <Logo toggleMenu={setIsMenuOpen} />
      <TopMenu
        isMobileView={isMobileView}
        isMenuOpen={isMenuOpen}
        toggleMenu={setIsMenuOpen}
      />
      <SideMenu
        isMobileView={isMobileView}
        isMenuOpen={isMenuOpen}
        toggleMenu={setIsMenuOpen}
        yoffset={yoffset}
      />
    </div>
  );
};

export default Header;
