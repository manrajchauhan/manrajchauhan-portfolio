'use client';

import { Menu } from 'lucide-react';
import { navItems, getAnchorForLabel } from '@/data/siteData';
import { useLeadModal } from '@/components/ui/LeadCaptureContext';

export default function Header() {
  const { openLeadModal } = useLeadModal();
  return (
    <header className="site-header">
      <a href="/" className="brand-mark" aria-label="Manraj Chauhan home">Manraj Chauhan<span>·</span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map((item) => <a key={item} href={getAnchorForLabel(item)}>{item}</a>)}</nav>
      <div className="header-actions"><button className="header-contact" type="button" onClick={() => openLeadModal()}>Let&apos;s talk</button><details className="mobile-menu"><summary aria-label="Open navigation"><Menu size={19} /></summary><nav aria-label="Mobile navigation">{navItems.map((item) => <a key={item} href={getAnchorForLabel(item)}>{item}</a>)}<button type="button" onClick={() => openLeadModal()}>Let&apos;s talk</button></nav></details></div>
    </header>
  );
}
