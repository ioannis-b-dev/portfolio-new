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
          Sono un Designer e <span className="c-accent">Web Developer</span>{" "}
          freelance, nato e cresciuto tra le Dolomiti, in Alto Adige. Da più di
          10 anni aiuto professionisti e brand a creare esperienze digitali
          sartoriali per emergere nell'universo digitale.
        </p>
      </div>
    </div>
  );
};

export default About;
