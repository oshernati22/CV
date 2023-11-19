import { useRef } from "react";

import { useFrame } from "react-three-fiber";
import { useGLTF } from "drei";

function Model() {
  const gltf = useGLTF("/scene.gltf");
  gltf.scene.clone(true);
  gltf.scene.scale.set(2.5, 2.5, 2.5);
  return <primitive object={gltf.scene} dispose={null} />;
}

function Boy() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(() => (mesh!.current!.rotation.y += 0.01));
  return (
    <mesh ref={mesh} position={[0, -4.5, 0]}>
      <Model />
    </mesh>
  );
}

export default Boy;
