'use client';

import { motion } from 'framer-motion';

export default function SectionMarker({ label }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="section-marker"
    >
      <motion.span
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        className="section-marker__dot"
      />
      <span>{label}</span>
    </motion.div>
  );
}
