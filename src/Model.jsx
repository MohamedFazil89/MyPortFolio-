import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import { AnimationMixer } from 'three';
import "./styles/Model.css"; // Ensure your CSS file is correctly imported

function Models({ path, textures }) {
  const { scene, animations } = useGLTF(path);
  const mixer = useRef();

  // Load all textures using useTexture
  const loadedTextures = useTexture(textures);

  // Set up the animation mixer and play the animations
  useEffect(() => {
    if (animations.length) {
      mixer.current = new AnimationMixer(scene);
      animations.forEach((clip) => {
        mixer.current.clipAction(clip).play();
      });
    }
    return () => {
      // Clean up the mixer
      if (mixer.current) {
        mixer.current.stopAllAction();
      }
    };
  }, [animations, scene]);

  // Update the mixer on each frame
  useFrame((state, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });

  // Apply the appropriate texture to each mesh based on its name
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        const textureName = child.name; // Use the mesh name to determine which texture to apply

        // Check if we have a corresponding texture for the mesh name
        if (loadedTextures[textureName]) {
          child.material.map = loadedTextures[textureName]; // Assign the corresponding texture
          child.material.needsUpdate = true; // Notify Three.js to update the material
        }
      }
    });
  }, [scene, loadedTextures]); // Run this effect when scene or textures change

  return <primitive object={scene} scale={3.5} />;
}

function Model() {
  const textures = {
    'MeshName1': './animated_zero_point/textures/Ball_diffuse.png',
    'MeshName2': './animated_zero_point/textures/Ball_normal.png',
    'MeshName3': './animated_zero_point/textures/Pulse_diffuse.png',
    // Add more mappings as needed
  };

  return (
    <div className='ThreeD fade-in' style={{ height: '100vh', transform: 'translateX(0)' }}>
      <Canvas style={{ filter: "drop-shadow(10px 0 10px white)" }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        <pointLight position={[10, 10, 110]} />

        <OrbitControls
          enableZoom={false} // Disable zoom
          enablePan={false} // Disable panning
          maxPolarAngle={Math.PI / 2} // Restrict the top angle
          minPolarAngle={Math.PI / 2} // Restrict the bottom angle
        />
        <Models 
          path="./animated_zero_point/scene.gltf" 
          textures={textures} 
        />
      </Canvas>
    </div>
  );
}

export default Model;
