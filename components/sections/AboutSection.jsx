'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionMarker from '@/components/ui/SectionMarker';

const stack = ['Product strategy', 'Frontend systems', 'API architecture', 'Technical leadership'];

export default function AboutSection() {
  return (
    <section id="about" className="about-section editorial-section">
      <div className="section-rail"><SectionMarker label="The approach" /><span>02</span></div>
      <motion.div className="about-statement" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65 }}>
        <p className="display-copy">The best product work makes complex things feel <em>inevitable.</em></p>
        <div className="about-detail">
          <p>I work across product thinking, interface craft, and the backend foundations that make a product dependable. The goal is never technology for its own sake—it is a system that gives people confidence.</p>
          <a className="inline-link" href="/work">See the work <ArrowUpRight size={15} /></a>
        </div>
      </motion.div>
      <ul className="capability-index" aria-label="Core capabilities">
        {stack.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}
      </ul>
    </section>
  );
}
