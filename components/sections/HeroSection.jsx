'use client';

import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import ActionButton from '@/components/ui/ActionButton';
import Header from './Header';
import { useLeadModal } from '@/components/ui/LeadCaptureContext';

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const { openLeadModal } = useLeadModal();

  return (
    <section id="home" className="hero-section">
      <Header />
      <div className="hero-content hero-content--editorial">
        <motion.p className="hero-index" variants={reveal} initial="hidden" animate="visible" transition={{ duration: 0.45 }}>
          01 — Independent technical direction
        </motion.p>
        <motion.div className="hero-headline" initial="hidden" animate="visible" transition={{ staggerChildren: 0.09, delayChildren: 0.08 }}>
          <motion.span variants={reveal}>Engineering</motion.span>
          <motion.span variants={reveal}>with</motion.span>
          <motion.span variants={reveal}>intent<span className="hero-dot">.</span></motion.span>
        </motion.div>

        <motion.div className="hero-intro" variants={reveal} initial="hidden" animate="visible" transition={{ duration: 0.55, delay: 0.32 }}>
          <p>Manraj Chauhan is a Technical Lead and Full Stack Developer shaping clear product systems from first decision to reliable release.</p>
          <ActionButton tone="paper" onClick={() => openLeadModal()}>Start a conversation</ActionButton>
          <span className="hero-location">India · Available globally</span>
        </motion.div>

        <a className="hero-scroll" href="#about"><ArrowDownRight size={16} /> Scroll to explore</a>
      </div>
    </section>
  );
}
