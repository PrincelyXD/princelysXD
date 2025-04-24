import { Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { WorldModel } from "./WorldModel";
import { useMediaQuery } from "react-responsive";

const ContactExperience = () => {
  const isMobileDevice = useMediaQuery({ query: "(max-width: 680px)" });

  return (
    <Canvas camera={{ position: [0, 5, 7], fov: 45 }} shadows>
      <ambientLight intensity={0.5} color="#Fff4e6" />
      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />
     
      <directionalLight position={[5,9,1]}
       castShadow intensity={2.5} color="#ffd9b3"/>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={20}
        minDistance={5}
        rotateSpeed={0.7}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={isMobileDevice ? 0.6 : 1} castShadow>
          <WorldModel />
        </group>
      </Float>
    </Canvas>
  );
};

export default ContactExperience;
