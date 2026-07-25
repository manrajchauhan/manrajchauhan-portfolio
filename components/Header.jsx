'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-40 px-6 sm:px-12 py-5 flex justify-between items-center bg-parchment/90 backdrop-blur-md border-b border-ash/50 transition-all duration-300">
      {/* Brand Logo */}
      <div className="flex items-center gap-3">
        <span className="w-3 h-3 rounded-full bg-off-black"></span>
        <span className="font-serif italic font-normal text-2xl text-off-black tracking-tight">
          Manraj Chauhan
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-wider text-graphite">
        <a href="#about" className="hover:text-off-black transition-colors">About</a>
        <a href="#skills" className="hover:text-off-black transition-colors">Skills</a>
        <a href="#projects" className="hover:text-off-black transition-colors">Projects</a>
        <a href="#experience" className="hover:text-off-black transition-colors">Experience</a>
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        {/* Ghost Pill Button */}
        <a 
          href="https://github.com/manrajchauhan" 
          target="_blank" 
          rel="noreferrer"
          className="hidden lg:inline-flex items-center justify-center px-6 py-3 border border-off-black text-off-black text-xs font-mono uppercase tracking-wider rounded-[100px] hover:bg-off-black hover:text-parchment transition-all"
        >
          GitHub
        </a>

        {/* Primary Pill Button (Off-Black) */}
        <a 
          href="mailto:contact@manrajchauhan.com" 
          className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-3 bg-off-black text-white text-xs font-mono uppercase tracking-wider rounded-[100px] hover:bg-neutral-800 transition-all shadow-sm"
        >
          <span>Get in Touch</span>
          <span className="text-sm">▸</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-full border border-ash bg-parchment text-off-black hover:bg-ash/20 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-parchment border-b border-ash p-6 shadow-lg flex flex-col gap-4 font-mono text-sm uppercase tracking-wider animate-in slide-in-from-top duration-200">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-ash/30 text-off-black">About</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-ash/30 text-off-black">Skills</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-ash/30 text-off-black">Projects</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-ash/30 text-off-black">Experience</a>
          <a 
            href="mailto:contact@manrajchauhan.com" 
            className="mt-2 text-center py-3.5 bg-off-black text-white rounded-[100px] flex items-center justify-center gap-2"
          >
            <span>Get in Touch</span>
            <span>▸</span>
          </a>
        </div>
      )}
    </header>
  );
}
