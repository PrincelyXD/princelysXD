import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive"
import { Room } from "./Room"
import HeroLights from "./HeroLights"
import Particles from "./Particles"


const HeroExperience = () => {
    const isTablet = useMediaQuery( { query: '(max-width: 1024px)' } )
    const isMobileDevice = useMediaQuery( { query: '(max-width: 768px)' } )
  return (
   <Canvas camera={{position:[0, 0, 15], fov:45}}>

<HeroLights/>

<Particles/>
<OrbitControls
enablePan={false}
enableZoom={!isTablet}
maxDistance={15}
minDistance={13}
rotateSpeed={0.70}
maxPolarAngle={Math.PI/ 2}
minPolarAngle={Math.PI / 3}
/>

<group
 scale={isMobileDevice? 0.7: 1} 
position={[0,-3.5, 0]}
rotation={[0, -Math.PI/4, 0]}
 > 
 
<Room/>
 </group>

   </Canvas>
  )
}

export default HeroExperience
