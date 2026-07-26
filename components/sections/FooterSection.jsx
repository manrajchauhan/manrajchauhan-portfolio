'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import ActionButton from '@/components/ui/ActionButton';
import { footerColumns, getAnchorForLabel } from '@/data/siteData';

export default function FooterSection() {
  return (
    <footer className="site-footer">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="footer-grid"
      >
        <div className="footer-intro">
          <a href="/" className="brand-mark brand-mark--footer">
            MANRAJ<span>*</span>
          </a>
          <p>
            Whether you&apos;re launching a new product, improving a platform, or looking for technical direction, I can help turn ideas into impact.
          </p>
          <form className="newsletter" action="mailto:contact@manrajchauhan.com">
            <label htmlFor="footer-email">Email address</label>
            <input id="footer-email" type="email" placeholder="Enter your email" />
            <button type="submit" aria-label="Send email">
              <ArrowUpRight size={13} />
            </button>
          </form>
        </div>

        {footerColumns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map((link) => (
              <a key={link} href={getAnchorForLabel(link)} target={getAnchorForLabel(link).startsWith('http') ? '_blank' : undefined} rel={getAnchorForLabel(link).startsWith('http') ? 'noreferrer' : undefined}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.12 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="footer-wordmark"
        aria-hidden="true"
      >
        MANRAJ
      </motion.div>

      <div className="footer-bottom">
        <span>© Copyright 2026</span>
        <ActionButton>Let&apos;s Discuss</ActionButton>
        <div className="footer-socials">
          <a href="https://github.com/manrajchauhan" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/mrmanrajchauhan/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:contact@manrajchauhan.com">
            <Mail size={12} /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
