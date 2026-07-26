'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Menu } from 'lucide-react';
import ActionButton from '@/components/ui/ActionButton';
import { navItems, getAnchorForLabel } from '@/data/siteData';

export default function Header() {
  return (
    <header className="site-header">
      <motion.a
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        href="/"
        className="brand-mark"
        aria-label="Manraj Chauhan home"
      >
        Manraj Chauhan
      </motion.a>

      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="desktop-nav"
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <a key={item} href={getAnchorForLabel(item)}>
            {item}
          </a>
        ))}
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="header-actions"
      >
        <a className="icon-link" href="https://github.com/manrajchauhan" target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
          <ArrowUpRight size={13} />
        </a>
        <ActionButton tone="light">Let&apos;s Discuss</ActionButton>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <Menu size={17} />
          </summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item} href={getAnchorForLabel(item)}>
                {item}
              </a>
            ))}
            <a href="mailto:contact@manrajchauhan.com">Contact</a>
          </nav>
        </details>
      </motion.div>
    </header>
  );
}
