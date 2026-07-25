import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Volume2, VolumeX } from 'lucide-react';

export default function Header() {
  const [isMuted, setIsMuted] = useState(true);
  const location = useLocation();

  const toggleSound = () => {
    setIsMuted(!isMuted);
  };

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/services', label: 'EXPERTISE' },
    { path: '/projects', label: 'WORK' },
    { path: '/music', label: 'ATMOSPHERE' },
    { path: '/resume', label: 'CAREERS' }
  ];

  return (
    <header className="vivid-header">
      {/* Wordmark */}
      <Link to="/" className="vivid-wordmark">
        MANRAJ CHAUHAN
      </Link>

      {/* Ghost Navigation Links */}
      <nav className="vivid-nav-links">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;

          return (
            <Link
              key={link.path}
              to={link.path}
              className={`vivid-ghost-btn ${isActive ? 'active-ghost' : ''}`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Action Controls & Sole Outlined Contact Button */}
      <div className="vivid-actions">
        <button 
          onClick={toggleSound} 
          className="vivid-audio-btn"
          aria-label="Toggle Sound"
        >
          {isMuted ? <VolumeX size={14} color="#6f879c" /> : <Volume2 size={14} color="#fffdf9" />}
        </button>

        <Link to="/resume" className="vivid-outlined-contact-btn">
          CONTACT
        </Link>
      </div>
    </header>
  );
}
