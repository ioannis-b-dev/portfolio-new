//libraries
import React from "react";
import { motion } from "framer-motion";

import "./SkillSection.scss";

const SkillSection = ({ info }) => {
  //framer motion parameters
  const itemVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const { category, technologies } = info;

  return (
    <section className="skillsection">
      <motion.h2 className="category" variants={itemVariants}>
        {category}
      </motion.h2>
      <motion.div className="skills-list">
        {technologies.map((item) => {
          const { name, logo } = item;
          return (
            <motion.div className="skill-item" variants={itemVariants}>
              <img className="icon" src={logo} alt="logo" />
              <h4 className="skill-name">{name}</h4>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default SkillSection;
