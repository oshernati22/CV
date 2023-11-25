import React, { useRef, useEffect } from "react";

import { Group, Object3D } from "three";
import { useFrame } from "@react-three/fiber";
import { GLTF, GLTFLoader } from "three/examples/jsm/Addons.js";

interface ThreeDProps {
  posx: number;
  posy: number;
  posz: number;
  url: string;
  size: number;
  lodLevels?: {
    distance: number;
    modelUrl: string;
  }[];
}

const ThreeD: React.FC<ThreeDProps> = ({
  posx,
  posy,
  posz,
  url,
  size,
  lodLevels,
}) => {
  const group = useRef<Group>(new Group());
  const gltfCache = useRef<Record<string, Object3D | undefined>>({});

  const gltfLoader = new GLTFLoader();

  useEffect(() => {
    if (!gltfCache.current[url]) {
      gltfLoader.load(
        url,
        (gltfData) => {
          const gltf = gltfData as GLTF;
          const model = gltf.scene.clone();
          gltfCache.current[url] = model;

          if (group.current) {
            group.current.add(model);
          }
        },
        undefined,
        (error: unknown) => {
          console.error("Error loading GLTF:", error);
        }
      );
    } else {
      if (group.current) {
        const cachedModel = gltfCache.current[url]?.clone();
        if (cachedModel) {
          group.current.add(cachedModel);
        }
      }
    }
  }, [url]);

  useEffect(() => {
    if (lodLevels && lodLevels.length > 0) {
      const currentDistance = Math.abs(group.current?.position.z || 0);
      let currentModel = gltfCache.current[url];

      for (const lodLevel of lodLevels) {
        if (currentDistance > lodLevel.distance) {
          currentModel = gltfCache.current[lodLevel.modelUrl];
        }
      }

      if (
        group.current &&
        currentModel &&
        currentModel !== group.current.children[0]
      ) {
        group.current.remove(group.current.children[0]);
        group.current.add(currentModel.clone());
      }
    }
  }, [lodLevels]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01;
    }
  });

  return (
    <group
      ref={group}
      position={[posx, posy, posz]}
      scale={[size, size, size]}
    />
  );
};

export default ThreeD;
