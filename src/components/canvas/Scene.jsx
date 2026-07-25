import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { 
  Float, 
  Html, 
  MeshTransmissionMaterial, 
  Environment
} from '@react-three/drei';
import * as THREE from 'three';
import Effects from './Effects';
import Projects3D from './Projects3D';
import Services3D from './Services3D';
import TechStack3D from './TechStack3D';
import Music3D from './Music3D';

/* Vivid+Co Chromatic Prism Glass Cube Cluster */
export function PrismHeroArtifact() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  // Staggered cluster of 5 glass cubes with RGB split dispersion
  const cubePositions = [
    [0, 0, 0],
    [-1.2, 0.8, -0.5],
    [1.3, -0.6, 0.4],
    [-0.8, -1.1, 0.6],
    [0.9, 1.2, -0.4]
  ];

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
        {cubePositions.map((pos, idx) => (
          <group key={idx} position={pos}>
            {/* Outer Chromatic Transmission Glass Cube */}
            <mesh scale={1.2}>
              <boxGeometry args={[1.2, 1.2, 1.2]} />
              <MeshTransmissionMaterial
                backside
                backsideThickness={0.8}
                thickness={1.2}
                roughness={0.05}
                transmission={0.98}
                ior={1.6}
                chromaticAberration={0.25} // High RGB dispersion
                distortion={0.1}
                color="#fffdf9"
              />
            </mesh>

            {/* Core Pure Black Block */}
            <mesh scale={0.6}>
              <boxGeometry args={[1, 1, 1]} />
              <meshBasicMaterial color="#000000" />
            </mesh>

            {/* RGB Chromatic Edge Highlights */}
            <mesh scale={1.22}>
              <boxGeometry args={[1.21, 1.21, 1.21]} />
              <meshBasicMaterial 
                color={idx % 3 === 0 ? "#ff2a2a" : idx % 3 === 1 ? "#2a7fff" : "#2aff2a"} 
                wireframe 
                transparent 
                opacity={0.4} 
              />
            </mesh>
          </group>
        ))}
      </Float>

      {/* Drei <Html> Spatial Display Headline Block */}
      <Html
        transform
        position={[0, 2.6, 0]}
        distanceFactor={6}
        center
        className="vivid-spatial-hero"
      >
        <div style={{ textAlign: 'center', pointerEvents: 'none' }}>
          <div className="vivid-eyebrow">// WE ARE STORYTELLERS & STRATEGISTS</div>
          <h1 className="vivid-display-title">
            MANRAJ CHAUHAN
          </h1>
          <p className="vivid-lead-text">
            Putting the pieces together — crafting cinematic WebGL experiences, 3D spatial applications, & high-performance engineering platforms.
          </p>
        </div>
      </Html>
    </group>
  );
}

export default function Scene() {
  useFrame((state) => {
    // Calculate scroll progress [0, 1]
    const scrollY = window.scrollY;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const scrollProgress = Math.min(1, Math.max(0, scrollY / maxScroll));

    // Target Camera Y lerps smoothly from 0 (Hero) down to -36 (Music section)
    const targetCameraY = -scrollProgress * 36;
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetCameraY, 0.08);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.8} color="#fffdf9" />
      <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#495764" />
      
      {/* Studio Environment Map for Glass & Chrome Reflections */}
      <Environment preset="night" />

      {/* 1. Hero 3D RGB Prism Glass Cube Cluster */}
      <PrismHeroArtifact />

      {/* 2. Spatial 3D Projects Showcase */}
      <Projects3D />

      {/* 3. Spatial 3D What I Do / Services */}
      <Services3D />

      {/* 4. Spatial 3D Tech Stack Matrix */}
      <TechStack3D />

      {/* 5. Spatial 3D Music Taste & Audio Player */}
      <Music3D />

      {/* Post-Processing Pipeline */}
      <Effects />
    </>
  );
}
