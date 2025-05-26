import "./ProjectCard.scss";
import { motion } from "framer-motion";
import useScreenSize from "../../hooks/useScreenSize";
const ProjectCard = ({
  title,
  subtitle,
  desc_full,
  features,
  gitHub,
  demo,
  image,
}) => {
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
          <h5>{subtitle}</h5>
        </div>
        {!isMobileView && (
          <div className="card-body">
            <p className="test">{desc_full}</p>
          </div>
        )}

        <div className="card-footer">
          <a className="btn" href={demo} target="_blank" rel="noreferrer">
            Visit Site
          </a>
        </div>
      </div>
      <img src={image} alt={title} />
    </motion.div>
  );
};

export default ProjectCard;
