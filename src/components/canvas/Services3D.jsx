import React from 'react';
import { Html, Float } from '@react-three/drei';
import { servicesData } from '../../data/servicesData';
import { Code2, Smartphone, Database, CloudUpload, Zap, Rocket } from 'lucide-react';

const iconMap = {
  Code2,
  Smartphone,
  Database,
  CloudUpload,
  Zap,
  Rocket
};

export default function Services3D() {
  return (
    <group position={[0, -17.5, 0]}>
      {/* Title Header Spatial Card */}
      <Html
        transform
        position={[0, 3, 0]}
        distanceFactor={6}
        center
        className="drei-spatial-card"
      >
        <div style={{ textAlign: 'center', pointerEvents: 'none' }}>
          <div className="drei-subtitle">// WHAT I DO // SERVICES</div>
          <h2 className="drei-title" style={{ fontSize: '2.4rem' }}>
            BUILDING SCALABLE DIGITAL SOLUTIONS<br />
            THAT <span style={{ color: 'var(--accent-orange)' }}>DRIVE GROWTH</span>
          </h2>
        </div>
      </Html>

      {/* Services Spatial Cards Grid */}
      {servicesData.map((item, idx) => {
        const IconComponent = iconMap[item.icon] || Code2;
        const posX = (idx % 2 === 0 ? -3.4 : 3.4);
        const posY = -Math.floor(idx / 2) * 3.5;

        return (
          <group key={item.id} position={[posX, posY, 0]}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
              <mesh>
                <boxGeometry args={[4.2, 2.8, 0.08]} />
                <meshStandardMaterial color="#fffdf9" roughness={0.3} metalness={0.2} />
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      color: 'var(--accent-orange)'
                    }}>
                      <IconComponent size={20} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700' }}>
                        {item.num}
                      </span>
                    </div>
                  </div>

                  <h3 className="drei-title" style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>
                    {item.title}
                  </h3>

                  <p className="drei-desc" style={{ fontSize: '0.82rem', lineHeight: '1.5' }}>
                    {item.description}
                  </p>
                </div>
              </Html>
            </Float>
          </group>
        );
      })}
    </group>
  );
}
