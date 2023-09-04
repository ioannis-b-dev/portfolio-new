import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
let incr = 0.01;
const Sphere = (props) => {
    const ref = useRef();
    useFrame((state, delta) => {
        incr += 0.01;

        ref.current.rotation.x = incr;
    });

    return (
        <mesh {...props} ref={ref} scale={0.2}>
            <sphereGeometry args={[15, 32, 16]} />
            <meshStandardMaterial wireframe wireframeLinewidth={0.5} />
        </mesh>
    );
};

export default Sphere;
