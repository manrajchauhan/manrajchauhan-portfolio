'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Divider from '@/components/ui/Divider';
import SectionMarker from '@/components/ui/SectionMarker';
import ActionButton from '@/components/ui/ActionButton';

export default function TestimonialsSection() {
  return (
    <section className="content-section testimonial-section">
      <Divider />
      <div className="section-layout section-layout--testimonial">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="testimonial-sidebar-left"
        >
          <SectionMarker label="Testimonials" />

          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="testimonial-card">
            <div className="testimonial-avatar">
              <Image src="/markme.png" alt="MarkMe Workspace preview" fill sizes="(max-width: 900px) 100vw, 240px" />
            </div>
            <div className="testimonial-socials" aria-label="Social links">
              <a href="https://github.com/manrajchauhan" target="_blank" rel="noreferrer">Gh</a>
              <a href="https://www.linkedin.com/in/mrmanrajchauhan/" target="_blank" rel="noreferrer">In</a>
              <a href="mailto:contact@manrajchauhan.com">Em</a>
            </div>
          </motion.div>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          “References are available on request. My work is built around clear communication, fast execution, and dependable full-stack delivery from idea to shipped product.”
          <cite>
            <strong>Selected Project Feedback</strong>
            <span>Client and collaborator references</span>
          </cite>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="testimonial-proof"
        >
          <div>
            <span>Focus</span>
            <strong>Product Engineering</strong>
          </div>
          <div>
            <span>Approach</span>
            <strong>Design-led Code</strong>
          </div>
          <ActionButton>Request References</ActionButton>
        </motion.div>
      </div>
    </section>
  );
}
