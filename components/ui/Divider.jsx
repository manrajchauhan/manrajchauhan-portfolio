'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function Divider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="section-divider"
      aria-hidden="true"
    >
      <Plus size={14} strokeWidth={1.7} />
    </motion.div>
  );
}
