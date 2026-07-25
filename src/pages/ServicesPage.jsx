import React from 'react';
import { servicesData } from '../data/servicesData';
import { Code2, Smartphone, Database, CloudUpload, Zap, Rocket, CheckCircle2 } from 'lucide-react';

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
      <div className="page-header" style={{ textAlign: 'center' }}>
        <span className="drei-subtitle">// SERVICES & CORE CAPABILITIES</span>
        <h1 className="drei-title" style={{ fontSize: '3.2rem' }}>
          BUILDING SCALABLE DIGITAL SOLUTIONS<br />
          THAT <span style={{ color: 'var(--accent-orange)' }}>DRIVE GROWTH</span>
        </h1>
        <p className="drei-desc" style={{ maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.05rem' }}>
          Comprehensive engineering services from architecture design to production deployment, tailored for modern web & mobile products.
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
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '8px',
                  background: 'rgba(224, 75, 22, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  color: 'var(--accent-orange)'
                }}>
                  <IconComponent size={24} />
                </div>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  color: 'var(--accent-orange)'
                }}>
                  {item.num}
                </span>
              </div>

              <h2 className="drei-title" style={{ fontSize: '1.4rem', marginBottom: '0.6rem' }}>
                {item.title}
              </h2>

              <p className="drei-desc" style={{ lineHeight: '1.6', fontSize: '0.92rem' }}>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
