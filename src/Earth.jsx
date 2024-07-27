import React from "react";
import { Canvas} from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import "./Earth.css"
const Earth = () =>{
    const earth = useGLTF("./earth_hologram/scene.gltf");
   
    
    return(
        <Canvas frameloop="demend" camera={{ position: [2,3,6], fov: 50, near: 0.1, far: 200}}>
            <OrbitControls
            autoRotate
            autoRotateSpeed={0.5}
            enableZoom={false}
            enablePan={false}
            reverseOrbit

             />

            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, -10]} intensity={1.5} />
            <primitive object={earth.scene} scale={2}  />
        </Canvas>

    )
}

export default Earth;