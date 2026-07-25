import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Float } from '@react-three/drei';
import { ExternalLink, Github } from 'lucide-react';

export default function SpatialCard({ project }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Subtle float tilt on hover
      const targetRotationY = hovered ? project.rotation[1] + 0.15 : project.rotation[1];
      const targetScale = hovered ? 1.05 : 1;
      meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * 0.1;
      meshRef.current.scale.x += (targetScale - meshRef.current.scale.x) * 0.1;
      meshRef.current.scale.y += (targetScale - meshRef.current.scale.y) * 0.1;
      meshRef.current.scale.z += (targetScale - meshRef.current.scale.z) * 0.1;
    }
  });

  return (
    <group 
      ref={meshRef} 
      position={project.position} 
      rotation={project.rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* 3D Frame Object */}
        <mesh>
          <boxGeometry args={[4.2, 3.2, 0.1]} />
          <meshStandardMaterial 
            color="#0a0a0c" 
            roughness={0.2} 
            metalness={0.8} 
            wireframe={hovered}
          />
        </mesh>

        {/* Outer Accent Border Mesh */}
        <mesh position={[0, 0, -0.06]}>
          <boxGeometry args={[4.3, 3.3, 0.05]} />
          <meshBasicMaterial color={hovered ? project.color : '#27272a'} />
        </mesh>

        {/* Embedded Drei Spatial HTML Card */}
        <Html
          transform
          position={[0, 0, 0.08]}
          distanceFactor={5}
          center
          className="drei-spatial-card"
          style={{
            borderColor: hovered ? project.color : 'var(--border-subtle)',
            boxShadow: hovered ? `0 10px 30px ${project.color}33` : 'none',
            transition: 'all 0.3s ease'
          }}
        >
          <div>
            <div className="drei-subtitle" style={{ color: project.color }}>
              {project.tag}
            </div>
            <h2 className="drei-title" style={{ fontSize: '1.8rem' }}>
              {project.title}
            </h2>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'var(--text-secondary)',
              marginBottom: '0.75rem',
              textTransform: 'uppercase'
            }}>
              {project.category}
            </div>
            <p className="drei-desc" style={{ marginBottom: '1rem' }}>
              {project.description}
            </p>

            {/* Tech Badges */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.4rem',
              marginBottom: '1.2rem'
            }}>
              {project.tech.map((t, idx) => (
                <span key={idx} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  padding: '0.25rem 0.5rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '3px',
                  color: 'var(--text-main)'
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="bs-btn"
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.7rem' }}
              >
                <span>LIVE DEMO</span>
                <ExternalLink size={12} />
              </a>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="bs-btn"
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.7rem' }}
              >
                <span>CODE</span>
                <Github size={12} />
              </a>
            </div>
          </div>
        </Html>
      </Float>
    </group>
  );
}
