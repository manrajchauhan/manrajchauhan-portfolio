import React from 'react';
import { servicesData } from '../data/servicesData';
import { Code2, Smartphone, Database, CloudUpload, Zap, Rocket } from 'lucide-react';

const iconMap = {
  Code2,
  Smartphone,
  Database,
  CloudUpload,
  Zap,
  Rocket
};

export default function ServicesPage() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <span className="vivid-eyebrow">// EXPERTISE & CAPABILITIES</span>
        <h1 className="vivid-display-title" style={{ fontSize: 'clamp(3.5rem, 8vw, 105px)', marginBottom: '16px' }}>
          EXPERTISE
        </h1>
        <p className="drei-desc" style={{ maxWidth: '650px', color: 'var(--color-bone-white)', fontSize: '20px' }}>
          Building brand value and scalable digital solutions — end-to-end engineering from cloud architecture to WebGL spatial design.
        </p>
      </div>

      {/* Services Grid */}
      <div className="services-grid-2d">
        {servicesData.map((item) => {
          const IconComponent = iconMap[item.icon] || Code2;

          return (
            <div key={item.id} className="service-card-2d">
              <div style={{
                display: 'flex',
                justify: 'space-between',
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <IconComponent size={24} color="#6f879c" />
                <span style={{
                  fontFamily: 'var(--font-neue-montreal)',
                  fontSize: '15px',
                  color: 'var(--color-fog-blue)'
                }}>
                  {item.num}
                </span>
              </div>

              <h2 className="drei-title" style={{ fontSize: '24px', marginBottom: '12px' }}>
                {item.title}
              </h2>

              <p className="drei-desc" style={{ fontSize: '18px', color: 'var(--color-bone-white)', lineHeight: '1.5' }}>
                {item.description}
              </p>

              {/* Ghost Service Label */}
              <div style={{
                color: 'var(--color-fog-blue)',
                fontSize: '15px',
                paddingTop: '20px',
                borderTop: '1px solid var(--color-ash-border)',
                marginTop: '20px',
                textTransform: 'uppercase'
              }}>
                Engineering Taxonomy
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
