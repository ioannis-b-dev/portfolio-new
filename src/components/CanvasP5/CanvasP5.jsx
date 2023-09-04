import React from "react";
import Sketch from "react-p5";
import "./CanvasP5.scss";
const CanvasP5 = () => {
  //parameters
  const numPoints = 1000;
  let positions = [];
  let velocities = [];
  const maxVel = 2;
  const setup = (p5, canvasParentRef) => {
    //p5 canvas setup with parent
    const canvasWidth = canvasParentRef.clientWidth;
    const canvasHeight = canvasParentRef.clientHeight;
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);

    //points array
    for (let i = 0; i < numPoints; i++) {
      //positions
      let pos = p5.createVector(
        p5.random(0, canvasWidth),
        p5.random(0, canvasHeight)
      );
      positions.push(pos);

      //velocities
      let vel = p5.createVector(p5.random(-maxVel, maxVel), 0);
      velocities.push(vel);
    }
  };

  const draw = (p5) => {
    p5.clear();
    p5.noStroke();
    p5.fill(255);
    //loop over positions
    for (let i = 0; i < positions.length - 1; i++) {
      //update position with velocity
      positions[i].x += velocities[i].x;
      positions[i].y += velocities[i].y;

      //check boundaries
      if (positions[i].x < 0 || positions[i].x > p5.width)
        velocities[i].x *= -1;
      if (positions[i].y < 0 || positions[i].y > p5.height)
        velocities[i].y *= -1;

      //draw ellipses
      p5.rect(
        positions[i].x,
        positions[i].y,
        p5.abs(velocities[i].x * 20) + 10,
        5
      );
      //   p5.stroke(255);
      //   p5.line(
      //     positions[i].x,
      //     positions[i].y,
      //     positions[i + 1].x,
      //     positions[i + 1].y
      //   );
    }
  };
  return (
    <div className="canvasp5">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default CanvasP5;
