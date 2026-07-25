import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Viewport from './components/canvas/Viewport';
import Header from './components/dom/Header';
import Ticker from './components/dom/Ticker';

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
    <main className="app-root">
      {/* SVG Film Grain Noise Overlay */}
      <div className="noise-overlay" />

      {/* 3D WebGL Canvas Layer (Three.js / R3F / Drei) */}
      <Viewport />

      {/* 2D DOM Overlays (Fixed Navigation, Ticker, UI Controls) */}
      <div className="dom-layer">
        <Header />
        <Ticker />
      </div>
    </main>
  );
}
