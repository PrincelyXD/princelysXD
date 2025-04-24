import { Mesh } from "three";
import { useGLTF } from "@react-three/drei";
// import { useRef, Suspense } from "react";
import { useRef } from "react";


export function WorldModel(props: any) {
  const group = useRef(null);
  const { nodes, materials } = useGLTF("/models/wonderful-world-transformed.glb");

  return (
    <group ref={group} {...props}>
      <mesh
        geometry={(nodes.Object_4 as Mesh).geometry}
        material={materials.material}
        scale={2.5} // Adjust as needed for visual fit
      />
    </group>
  );
}

useGLTF.preload("/models/wonderful-world-transformed.glb");


// export function WorldModel(props: any) {
//   const group = useRef(null);
//   const { nodes, materials } = useGLTF("/models/wonderful-world-transformed.glb");

//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group name="Sketchfab_Scene">
//         <group name="GLTF_SceneRootNode">
//           {[4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24].map((n, i) => (
//             <group key={i} name={`Sphere${String(i + 1).padStart(3, '0')}_${i}`} scale={2.473 - i * 0.029}>
//               <mesh
//                 name={`Object_${n}`}
//                 geometry={(nodes[`Object_${n}`] as Mesh).geometry}
//                 material={materials.material}
//               />
//             </group>
//           ))}

//           {/* <group name="Sphere012_11" scale={22.532}>
//             <mesh
//               name="Object_26"
//               geometry={(nodes.Object_26 as Mesh).geometry}
//               material={materials.material_1}
//             />
//           </group> */}

//           <group name="Circle_15" scale={3.736}>
//             <group name="Sphere_12" scale={0.67}>
//               <mesh
//                 name="Object_29"
//                 geometry={(nodes.Object_29 as Mesh).geometry}
//                 material={materials.material}
//               />
//             </group>
//             <group name="x_13" scale={0.663}>
//               <mesh
//                 name="Object_31"
//                 geometry={(nodes.Object_31 as Mesh).geometry}
//                 material={materials.lights}
//               />
//             </group>
//             <group name="xxxx_14" scale={0.673}>
//               <mesh
//                 name="Object_33"
//                 geometry={(nodes.Object_33 as Mesh).geometry}
//                 material={materials.material_3}
//               />
//             </group>
//           </group>

//           {/* {[35, 37, 39, 41, 44, 46, 48, 50].map((n, i) => (
//             <group
//               key={n}
//               name={`Sphere${13 + i}_${16 + i}`}
//               rotation={[Math.PI / 2, 0, 0]}
//               scale={[0.017 + (i % 2 ? 0.002 : -0.001), 0.028 + (i % 2 ? 0.002 : -0.002), 0.017 + (i % 2 ? 0.002 : -0.001)]}
//             >
//               <mesh
//                 name={`Object_${n}`}
//                 geometry={(nodes[`Object_${n}`] as Mesh).geometry}
//                 material={
//                   i % 2 === 0 ? materials.material_4 : materials.material_5
//                 }
//               />
//             </group>
//           ))} */}
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/models/wonderful-world-transformed.glb");

