import React from 'react';

export default function Ticker() {
  const items = [
    "MANRAJCHAUHAN.COM",
    "3D WEBGL ENGINE",
    "REACT THREE FIBER",
    "DREI SPATIAL HTML",
    "INSPIRED BY BASEMENT.STUDIO",
    "CREATIVE ENGINEERING",
    "AVAILABLE FOR FREELANCE & FULL-TIME"
  ];

  return (
    <div className="bs-ticker">
      <div className="bs-ticker-track">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="bs-ticker-item">
            <span>{text}</span>
            <span className="bs-ticker-accent">//</span>
          </div>
        ))}
      </div>
    </div>
  );
}
