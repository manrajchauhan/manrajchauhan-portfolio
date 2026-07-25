import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Volume2, VolumeX, FileText, Terminal, FolderGit2, Wrench, Music, Home } from 'lucide-react';

export default function Header() {
  const [isMuted, setIsMuted] = useState(true);
  const location = useLocation();

  const toggleSound = () => {
    setIsMuted(!isMuted);
  };

  const navLinks = [
    { path: '/', label: 'HOME', icon: Home },
    { path: '/services', label: 'SERVICES', icon: Wrench },
    { path: '/projects', label: 'PROJECTS', icon: FolderGit2 },
    { path: '/music', label: 'MUSIC', icon: Music },
    { path: '/resume', label: 'RESUME', icon: FileText }
  ];

  return (
    <header className="bs-header">
      <Link to="/" className="bs-logo">
        <Terminal size={18} className="bs-logo-tag" />
        <span>MANRAJ CHAUHAN</span>
        <span className="bs-logo-tag">// 2026</span>
      </Link>

      {/* Navigation Links */}
      <nav style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
        {navLinks.map((link) => {
          const IconComp = link.icon;
          const isActive = location.pathname === link.path;

          return (
            <Link
              key={link.path}
              to={link.path}
              className={`bs-btn ${isActive ? 'active-nav-link' : ''}`}
              style={{
                background: isActive ? 'var(--accent-orange)' : 'var(--bg-surface)',
                color: isActive ? '#faf4ec' : 'var(--text-main)',
                borderColor: isActive ? 'var(--accent-orange)' : 'var(--border-subtle)',
                padding: '0.5rem 0.9rem'
              }}
            >
              <IconComp size={14} />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="bs-nav-actions">
        <button 
          onClick={toggleSound} 
          className="bs-btn"
          aria-label="Toggle Sound"
          title={isMuted ? "Unmute Audio FX" : "Mute Audio FX"}
        >
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} color="var(--accent-orange)" />}
          <span>{isMuted ? "SOUND OFF" : "SOUND ON"}</span>
        </button>
      </div>
    </header>
  );
}
