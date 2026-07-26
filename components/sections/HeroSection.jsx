'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import ActionButton from '@/components/ui/ActionButton';
import Header from './Header';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="home" className="hero-section">
      <Header />

      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-title-wrap">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Manraj
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              style={{ display: 'inline-block', transformOrigin: 'center' }}
            >
              *
            </motion.span>
          </motion.h1>
        </div>

        {/* Centered Hero Portrait Image */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="hero-portrait-container"
        >
          <div className="hero-portrait-frame">
            <Image
              src="/hero.png"
              alt="Manraj Chauhan portrait"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 650px"
              className="hero-portrait-img"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hero-summary"
        >
          <p>
            Hi, I am Manraj Chauhan, a Technical Lead and Full Stack Developer building high-performance web applications, backend microservices, and scalable product experiences.
          </p>
          <ActionButton tone="light">Let&apos;s Discuss</ActionButton>
        </motion.div>

        <motion.a
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="scroll-cue"
          href="#about"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={16} />
        </motion.a>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-stats"
          aria-label="Portfolio highlights"
        >
          <motion.div variants={itemVariants}>
            <strong>Lead</strong>
            <span>Technical direction</span>
          </motion.div>
          <motion.div variants={itemVariants}>
            <strong>Full Stack</strong>
            <span>Frontend to backend</span>
          </motion.div>
          <motion.div variants={itemVariants}>
            <strong>Live App</strong>
            <span>MarkMe Workspace</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
