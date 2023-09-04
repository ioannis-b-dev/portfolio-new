//libraries
import React from "react";
import { motion } from "framer-motion";
//components
import { SkillSection } from "../../components";
import { skills } from "../../data";
import "./Skills.scss";

const Skills = () => {
  //framer motion parameters
  const variants = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  return (
    <motion.div
      className="page skills"
      variants={variants}
      initial="closed"
      animate="open"
      id="skills"
    >
      <h2 className="head-text">Skills</h2>
      {skills.map((info) => {
        return <SkillSection info={info} />;
      })}
    </motion.div>
  );
};

export default Skills;
