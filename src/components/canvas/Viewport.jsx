import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import Scene from './Scene';

function CanvasLoader() {
  return (
    <Html center>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        color: 'var(--accent-orange)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: '#fffdf9',
        padding: '0.6rem 1.2rem',
        borderRadius: '6px',
        border: '1px solid var(--border-subtle)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
      }}>
        <span className="status-dot" /> LOADING SPATIAL 3D CANVAS...
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
        <color attach="background" args={['#faf4ec']} />
        <Suspense fallback={<CanvasLoader />}>
          <Scene />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
