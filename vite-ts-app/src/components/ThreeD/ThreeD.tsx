// // ThreeD.jsx
// import React, { useRef, useEffect } from "react";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
// import { useFrame } from "@react-three/fiber";

// interface ThreeDProps {
//   posx: number;
//   posy: number;
//   posz: number;
//   url: string;
//   size: number;
// }

// const ThreeD: React.FC<ThreeDProps> = ({ posx, posy, posz, url, size }) => {
//   const group = useRef<THREE.Group>(null);

//   useEffect(() => {
//     const gltfLoader = new GLTFLoader();
//     gltfLoader.load(url, (gltf) => {
//       if (group.current) {
//         group.current.add(gltf.scene);
//       }
//     });
//   }, [url]);

//   useFrame(() => {
//     if (group.current) {
//       group.current.rotation.y += 0.01;
//     }
//   });

//   return (
//     <>
//       <group
//         ref={group}
//         position={[posx, posy, posz]}
//         scale={[size, size, size]}
//       ></group>
//     </>
//   );
// };

// export default ThreeD;
