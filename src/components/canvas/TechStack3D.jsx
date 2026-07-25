import React from 'react';
import { Html, Float } from '@react-three/drei';
import { techStackData } from '../../data/techStackData';
import { Cpu } from 'lucide-react';

export default function TechStack3D() {
  return (
    <group position={[0, -28, 0]}>
      {/* Section Title */}
      <Html
        transform
        position={[0, 3, 0]}
        distanceFactor={6}
        center
        className="drei-spatial-card"
      >
        <div style={{ textAlign: 'center', pointerEvents: 'none' }}>
          <div className="drei-subtitle">// TECH STACK & ENGINE</div>
          <h2 className="drei-title" style={{ fontSize: '2.4rem' }}>
            ENGINEERING CAPABILITIES
          </h2>
        </div>
      </Html>

      {/* Tech Categories Grid */}
      {techStackData.map((cat, idx) => {
        const posX = (idx % 2 === 0 ? -3.4 : 3.4);
        const posY = -Math.floor(idx / 2) * 3.8;

        return (
          <group key={idx} position={[posX, posY, 0]}>
            <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
              {/* 3D Frame */}
              <mesh>
                <boxGeometry args={[4.2, 3.2, 0.08]} />
                <meshStandardMaterial color="#fffdf9" roughness={0.2} metalness={0.4} />
              </mesh>

              <Html
                transform
                position={[0, 0, 0.06]}
                distanceFactor={5}
                center
                className="drei-spatial-card"
                style={{ width: '380px' }}
              >
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--accent-orange)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    marginBottom: '0.8rem'
                  }}>
                    <Cpu size={16} />
                    <span>{cat.category}</span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          padding: '0.35rem 0.65rem',
                          background: 'rgba(224, 75, 22, 0.08)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '4px',
                          color: 'var(--text-main)',
                          fontWeight: '600'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Html>
            </Float>
          </group>
        );
      })}
    </group>
  );
}
