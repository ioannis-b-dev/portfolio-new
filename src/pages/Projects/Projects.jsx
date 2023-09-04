//libraries
import React from "react";

//components
import { Carousel } from "../../components";
import { ProjectCard } from "../../components";

import { projects } from "../../data";
import "./Projects.scss";
import useScreenSize from "../../hooks/useScreenSize";
const Projects = () => {
  const { isMobileView } = useScreenSize();
  return (
    <div id="projects" className="projects page">
      <h2 className="head-text">Projects</h2>
      {isMobileView ? (
        projects.map((project) => {
          const { title, desc, image, gitHub, demo } = project;
          return (
            <ProjectCard
              title={title}
              desc={desc}
              image={image}
              gitHub={gitHub}
              demo={demo}
            />
          );
        })
      ) : (
        <Carousel />
      )}
    </div>
  );
};

export default Projects;
