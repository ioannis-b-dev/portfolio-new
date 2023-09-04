//libraries
import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import "./MenuLinks.scss";

const MenuLinks = ({ isMobileView, toggleMenu }) => {
  //framer motion parameters
  const variants = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const linkVariants = {
    open: {
      x: "0%",
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -70 },
      },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.ul
      className={isMobileView ? "sidemenulinks" : "topmenulinks"}
      variants={variants}
      initial="closed"
      animate="open"
    >
      {["about", "projects", "skills", "contact"].map((item) => (
        <motion.li variants={linkVariants}>
          <Link
            className="link"
            activeClass="active"
            spy={true}
            to={`${item}`}
            smooth={true}
            offset={0}
            key={`link-${item}`}
            onClick={() => toggleMenu(false)}
          >
            {item}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default MenuLinks;
