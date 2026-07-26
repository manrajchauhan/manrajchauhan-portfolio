'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ActionButton({ children, href = 'mailto:contact@manrajchauhan.com', tone = 'dark' }) {
  return (
    <motion.a
      whileHover="hover"
      initial="initial"
      className={`action-button action-button--${tone}`}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
    >
      <span>{children}</span>
      <motion.span
        className="action-button__orb"
        variants={{
          hover: { x: 3, y: -3, scale: 1.08, transition: { type: 'spring', stiffness: 400, damping: 15 } },
          initial: { x: 0, y: 0, scale: 1 },
        }}
      >
        <ArrowUpRight size={12} strokeWidth={2.4} />
      </motion.span>
    </motion.a>
  );
}
