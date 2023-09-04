import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Home.scss";

const Home = () => {
  const [cHeight, setCHeight] = useState();
  useEffect(() => {
    setCHeight(window.innerHeight);
  }, []);
  return (
    <div
      className=" home"
      style={{
        height: cHeight,
      }}
    >
      <h3 className="home-subheading">HELLO,</h3>
      <p className="home-heading">
        I'm a web developer
        <br />
        and creative coder<span className="c-white">.</span>
      </p>
    </div>
  );
};

export default Home;
