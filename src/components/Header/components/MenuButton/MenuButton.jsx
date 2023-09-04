//libraries
import React from "react";
import { motion } from "framer-motion";

import "./MenuButton.scss";
const MenuButton = ({ isMenuOpen, toggleMenu }) => {
  return (
    <motion.button
      className="menubutton"
      animate={isMenuOpen ? "open" : "closed"}
      onClick={() => toggleMenu(!isMenuOpen)}
    >
      <motion.span
        className="line"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 9 },
        }}
        transition={{ duration: 0.5 }}
      ></motion.span>

      <motion.span
        className="line"
        variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
        transition={{ duration: 0.5 }}
      ></motion.span>

      <motion.span
        className="line"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: -45, y: -9 },
        }}
        transition={{ duration: 0.5 }}
      ></motion.span>
    </motion.button>
  );
};

export default MenuButton;
