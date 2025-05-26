//libraries
import React from "react";
import { Canvas } from "@react-three/fiber";

//components
import { Sphere } from "../../components";
import "./About.scss";
const About = () => {
  return (
    <div id="about" className="about page ">
      <h2 className="head-text">About Me</h2>
      <div className="about-canvas ">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Sphere position={[0, 0, 0]} />
        </Canvas>
      </div>
      <div className="about-text ">
        <p>
          I am a <span className="c-accent">Web Developer</span> and Creative
          Coder currently based in Athens. My professional experience as well as
          my Masters in Computational Arts provide a solid foundation for
          building modern web apps.
        </p>
      </div>
    </div>
  );
};

export default About;
