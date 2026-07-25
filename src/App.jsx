import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Viewport from './components/canvas/Viewport';
import Header from './components/dom/Header';
import Ticker from './components/dom/Ticker';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import MusicPage from './pages/MusicPage';
import ResumePage from './pages/ResumePage';

export default function App() {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <main className="app-root">
        {/* SVG Film Grain Noise Overlay */}
        <div className="noise-overlay" />

        {/* 3D WebGL Canvas Layer (Three.js / R3F / Drei) */}
        <Viewport />

        {/* 2D DOM Header & Ticker Layer */}
        <div className="dom-layer">
          <Header />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>

          <Ticker />
        </div>
      </main>
    </Router>
  );
}
