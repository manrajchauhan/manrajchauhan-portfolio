import React, { useState } from 'react';
import { Volume2, VolumeX, FileText, Terminal } from 'lucide-react';
import ResumeModal from './ResumeModal';

export default function Header() {
  const [isMuted, setIsMuted] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const toggleSound = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      <header className="bs-header">
        <a href="#home" className="bs-logo">
          <Terminal size={18} className="bs-logo-tag" />
          <span>MANRAJ CHAUHAN</span>
          <span className="bs-logo-tag">// 2026</span>
        </a>

        <div className="bs-status-pill">
          <span className="status-dot" />
          <span>AVAILABLE FOR WORK</span>
        </div>

        <div className="bs-nav-actions">
          <button 
            onClick={() => setIsResumeOpen(true)} 
            className="bs-btn"
            style={{ background: 'var(--accent-orange)', color: '#faf4ec', borderColor: 'var(--accent-orange)' }}
          >
            <FileText size={14} />
            <span>RESUME</span>
          </button>

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

      {/* Resume Modal Window */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
