import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function Navigation() {
  const { scrollProgress } = useScrollProgress();

  const sections = [
    { id: 'hero', label: 'HERO', targetProgress: 0 },
    { id: 'projects', label: 'PROJECTS', targetProgress: 0.25 },
    { id: 'services', label: 'SERVICES', targetProgress: 0.50 },
    { id: 'stack', label: 'STACK', targetProgress: 0.75 },
    { id: 'music', label: 'MUSIC', targetProgress: 1.00 }
  ];

  const scrollToProgress = (targetProgress) => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: maxScroll * targetProgress,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="bs-spatial-nav">
      {sections.map((sec, idx) => {
        const isActive = Math.abs(scrollProgress - sec.targetProgress) < 0.14;

        return (
          <button
            key={sec.id}
            onClick={() => scrollToProgress(sec.targetProgress)}
            className={`bs-nav-dot-btn ${isActive ? 'active' : ''}`}
            title={`Scroll to ${sec.label}`}
          >
            <span className="bs-nav-label">{sec.label}</span>
            <span className="bs-nav-dot" />
          </button>
        );
      })}
    </nav>
  );
}
