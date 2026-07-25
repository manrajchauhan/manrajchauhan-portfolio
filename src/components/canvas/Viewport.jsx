import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import Scene from './Scene';

function CanvasLoader() {
  return (
    <Html center>
      <div style={{
        fontFamily: 'var(--font-neue-montreal)',
        fontSize: 'var(--text-caption)',
        color: 'var(--color-bone-white)',
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: '#101010',
        padding: '0.6rem 1.2rem',
        borderRadius: '5px',
        border: '1px solid #403f3f'
      }}>
        <span className="status-dot" /> LOADING PRISMATIC 3D CANVAS...
      </div>
    </Html>
  );
}

export default function Viewport() {
  return (
    <div className="canvas-container">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      >
        <color attach="background" args={['#101010']} />
        <Suspense fallback={<CanvasLoader />}>
          <Scene />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
