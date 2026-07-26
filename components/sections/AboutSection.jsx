'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Divider from '@/components/ui/Divider';
import SectionMarker from '@/components/ui/SectionMarker';
import ActionButton from '@/components/ui/ActionButton';

export default function AboutSection() {
  return (
    <section id="about" className="content-section about-section">
      <Divider />
      <div className="section-layout section-layout--intro">
        <div className="section-left">
          <SectionMarker label="What I Do" />
          <ActionButton>Let&apos;s Discuss</ActionButton>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="about-copy"
        >
          <h2>
            A Full Stack Developer focused on robust engineering, clear system architecture, and polished digital products.
          </h2>
          <a className="text-link" href="#service">
            About me <ArrowUpRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
