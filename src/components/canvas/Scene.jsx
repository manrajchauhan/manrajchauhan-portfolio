import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { 
  Float, 
  Html, 
  MeshTransmissionMaterial, 
  Environment, 
  ContactShadows 
} from '@react-three/drei';
import * as THREE from 'three';
import Effects from './Effects';
import Projects3D from './Projects3D';
import Services3D from './Services3D';
import TechStack3D from './TechStack3D';
import Music3D from './Music3D';

export function HeroMesh() {
  const meshRef = useRef();
  const innerRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x -= delta * 0.4;
      innerRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Outer Transmission Glass Icosahedron */}
        <mesh ref={meshRef} scale={1.8}>
          <icosahedronGeometry args={[1, 0]} />
          <MeshTransmissionMaterial
            backside
            backsideThickness={0.5}
            thickness={0.6}
            roughness={0.12}
            transmission={0.95}
            ior={1.52}
            chromaticAberration={0.06}
            distortion={0.18}
            distortionScale={0.3}
            temporalDistortion={0.1}
            color="#fffdf9"
          />
        </mesh>

        {/* Inner Burnt Terracotta Core Mesh */}
        <mesh ref={innerRef} scale={0.9}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial 
            color="#e04b16" 
            metalness={0.85} 
            roughness={0.15} 
            wireframe={true}
          />
        </mesh>
      </Float>

      {/* Drei <Html> Spatial Header Element */}
      <Html
        transform
        position={[0, 2.8, 0]}
        distanceFactor={6}
        center
        className="drei-spatial-card"
      >
        <div style={{ textAlign: 'center', pointerEvents: 'none' }}>
          <div className="drei-subtitle">[ MANRAJ CHAUHAN // 2026 ]</div>
          <h1 className="drei-title">BUILDING SCALABLE<br />DIGITAL SOLUTIONS</h1>
          <p className="drei-desc">
            Crafting immersive 3D WebGL applications, scalable web platforms, & high-performance engineering logs.
          </p>
        </div>
      </Html>

      {/* Soft Contact Shadows on Ground */}
      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.4}
        scale={10}
        blur={2.5}
        far={4}
        color="#221e1b"
      />
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
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.4} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.6} color="#e04b16" />
      
      {/* Studio Environment Map for Glass & Chrome Reflections */}
      <Environment preset="studio" />

      {/* 1. Hero 3D Spatial Mesh */}
      <HeroMesh />

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
