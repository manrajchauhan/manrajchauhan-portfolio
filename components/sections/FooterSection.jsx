'use client';

import { ArrowUpRight } from 'lucide-react';
import ActionButton from '@/components/ui/ActionButton';
import { useLeadModal } from '@/components/ui/LeadCaptureContext';

export default function FooterSection() {
  const { openLeadModal } = useLeadModal();
  return (
    <footer id="contact" className="site-footer">
      <p className="footer-index">07 — Contact</p>
      <h2>Have a product<br />worth building<span>?</span></h2>
      <div className="footer-action-row">
        <p>Tell me what you are making, where the hard part is, and what a good outcome needs to look like.</p>
        <ActionButton tone="paper" onClick={() => openLeadModal()}>Discuss your project</ActionButton>
      </div>
      <div className="footer-links">
        <a href="mailto:manrajchauhan2023@gmail.com">manrajchauhan2023@gmail.com <ArrowUpRight size={15} /></a>
        <div><a href="https://github.com/manrajchauhan" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/mrmanrajchauhan/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://wa.me/?text=Hi%20Manraj,%20I%20saw%20your%20portfolio" target="_blank" rel="noreferrer">WhatsApp</a></div>
      </div>
      <p className="footer-signoff">© 2026 Manraj Chauhan</p>
    </footer>
  );
}
