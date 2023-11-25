import { Sky, Stars, OrbitControls } from "@react-three/drei";

import ThreeD from "../../components/ThreeD/ThreeD";
import "./main.scss";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

function Main() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  return (
    <div className="main-section" id="main">
      <h1 className="title">Osher Nati</h1>

      <Canvas camera={{ position: [-5, 2, 10], fov: 60 }}>
        <Sky />

        <Stars />
        <ambientLight intensity={1.5} />
        <directionalLight intensity={2.2} />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <ThreeD posx={0} posy={-4} posz={0} url="/scene.gltf" size={2} />
        {isDesktopOrLaptop && (
          <>
            <ThreeD posx={5.5} posy={-4} posz={3} url="/pizza.gltf" size={1} />
            <ThreeD posx={-7} posy={-1} posz={-1} url="/dog.gltf" size={3} />
            <ThreeD posx={8} posy={-0.5} posz={4} url="/ball.gltf" size={1} />

            <ThreeD
              posx={-6}
              posy={-4}
              posz={0}
              url="/screen.gltf"
              size={0.005}
            />
            <ThreeD posx={7} posy={3} posz={1} url="/laptop.gltf" size={0.7} />

            <ThreeD posx={-7} posy={3} posz={-2} url="/tent.gltf" size={1.5} />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
          </>
        )}
      </Canvas>
    </div>
  );
}

export default Main;
