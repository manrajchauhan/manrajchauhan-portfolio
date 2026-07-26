'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Menu } from 'lucide-react';
import ActionButton from '@/components/ui/ActionButton';
import { navItems, getAnchorForLabel } from '@/data/siteData';

import { useLeadModal } from '@/components/ui/LeadCaptureContext';

export default function Header() {
  const { openLeadModal } = useLeadModal();

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
        <a
          className="icon-link"
          href="https://wa.me/?text=Hi%20Manraj,%20I%20saw%20your%20portfolio"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
        <a className="icon-link" href="https://github.com/manrajchauhan" target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
          <ArrowUpRight size={13} />
        </a>
        <ActionButton tone="light" onClick={() => openLeadModal()}>
          Let&apos;s Discuss
        </ActionButton>
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
            <a href="mailto:manrajchauhan2023@gmail.com">Contact</a>
          </nav>
        </details>
      </motion.div>
    </header>
  );
}
