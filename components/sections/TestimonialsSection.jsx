'use client';

import { motion } from 'framer-motion';
import SectionMarker from '@/components/ui/SectionMarker';

const principles = [
  ['01', 'Make the decision visible', 'Clear constraints and explicit trade-offs keep the work moving.'],
  ['02', 'Design the whole system', 'The interface, APIs, and operational details should reinforce one another.'],
  ['03', 'Keep the release credible', 'Thoughtful delivery means performance, accessibility, and maintainability are part of the brief.'],
];

export default function TestimonialsSection() {
  return (
    <section className="principles-section editorial-section">
      <div className="section-rail"><SectionMarker label="Working principles" /><span>05</span></div>
      <motion.p className="principles-lead" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>A practical way of working for ambitious, detail-sensitive digital products.</motion.p>
      <div className="principle-grid">
        {principles.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
    </section>
  );
}
