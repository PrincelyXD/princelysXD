import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";
export type ModelType = {
  name: string;
  modelPath: string;
  scale: number;
  type: string;
  rotation: [x: number, y: number, z: number];
};

const TechIcon = ({ name, modelPath, scale, rotation }: ModelType) => {
  const scene = useGLTF(modelPath);
  // change threejs model color to white
  useEffect(() => {
    if (name === "Three Js") {
      scene.scene.traverse((child: any) => {
        if (child.isMesh) {
          if (child.name === "Object_5") {
            child.material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
  }, [scene]);
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={scale} rotation={rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcon;
