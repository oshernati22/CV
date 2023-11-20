import React from "react";
import { Suspense, useRef } from "react";
import {
  Sky,
  Stars,
  CameraControls,
  CameraControlsProps,
  OrbitControls,
} from "@react-three/drei";
import Boy from "../../components/Boy/Boy";
import ThreeD from "../../components/ThreeD/ThreeD";
import "./main.scss";
import { Canvas } from "@react-three/fiber";

function Main() {
  return (
    <div className="main-section" id="main">
      <h1 className="title">Osher Nati</h1>

      {/* <Canvas camera={{ position: [-5, 2, 10], fov: 60 }}>
        <Sky />
        <Stars />
        <ambientLight intensity={1.5} />
        <directionalLight intensity={2.2} />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <ThreeD posx={0} posy={-4} posz={0} url="/scene.gltf" size={2} />
        <ThreeD posx={-5} posy={-4} posz={-1.5} url="/pizza.gltf" size={1} />
        <ThreeD posx={-9} posy={-3} posz={-2} url="/dog.gltf" size={3} />
        <ThreeD posx={6.8} posy={1} posz={5} url="/ball.gltf" size={1} />
        <ThreeD posx={-6} posy={3} posz={-2} url="/speaker.gltf" size={0.2} />
        <ThreeD posx={5.5} posy={-4} posz={5} url="/screen.gltf" size={0.005} />
        <ThreeD posx={7} posy={4} posz={1} url="/laptop.gltf" size={0.7} />
        <ThreeD posx={6} posy={-1} posz={2} url="/mac.gltf" size={0.7} />
        <ThreeD posx={-8} posy={1} posz={-2} url="/tent.gltf" size={1.5} />
      </Canvas> */}
    </div>
  );
}

export default Main;
