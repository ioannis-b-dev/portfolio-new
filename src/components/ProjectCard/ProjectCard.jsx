import React from "react";
import "./ProjectCard.scss";
import { motion } from "framer-motion";
import useScreenSize from "../../hooks/useScreenSize";
const ProjectCard = ({ title, desc, features, gitHub, demo, image }) => {
  const { isMobileView } = useScreenSize();
  const variants = {
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
    <motion.div className="project-card" variants={variants}>
      <div className="card-info">
        <div className="card-heading">
          <h3>{title}</h3>
          <h5>{desc}</h5>
        </div>
        {!isMobileView && (
          <div className="card-body">
            <p className="test">
              Sono un Designer e Web Developer freelance, nato e cresciuto tra
              le Dolomiti, in Alto Adige. Da più di 10
            </p>
            <p className="test">
              anni aiuto professionisti e brand a creare esperienze digitali
              sartoriali per emergere nell'universo digitale.
            </p>
          </div>
        )}

        <div className="card-footer">
          <a className="test-2" href={demo} target="_blank" rel="noreferrer">
            Visit Site
          </a>
          <a className="test-2" href={gitHub} target="_blank" rel="noreferrer">
            View Code
          </a>
        </div>
      </div>
      <img src={image} alt={title} />
    </motion.div>
  );
};

export default ProjectCard;
