import { useState, useEffect } from "react";

const useScreenSize = (navRef) => {
  const MOBILE_BREAKING_POINT = 768;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const getScreenSize = () => {
    setIsMobileView(window.innerWidth < MOBILE_BREAKING_POINT ? true : false);
  };

  // Viewport
  useEffect(() => {
    getScreenSize();
    window.addEventListener("resize", getScreenSize);
    return () => window.removeEventListener("resize", getScreenSize);
  }, []);

  return {
    isMobileView,
    isMenuOpen,
    setIsMenuOpen,
  };
};

export default useScreenSize;
