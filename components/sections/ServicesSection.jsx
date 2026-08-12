'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionMarker from '@/components/ui/SectionMarker';
import { services } from '@/data/siteData';
import { useLeadModal } from '@/components/ui/LeadCaptureContext';

export default function ServicesSection() {
  const { openLeadModal } = useLeadModal();
  return (
    <section id="service" className="services-section editorial-section">
      <div className="section-rail"><SectionMarker label="Capabilities" /><span>04</span></div>
      <div className="services-intro"><p>Built for teams that need sharper execution without losing sight of the whole system.</p></div>
      <div className="capability-list">
        {services.map((service) => (
          <motion.article key={service.id} className="capability-row" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-45px' }} transition={{ duration: 0.4 }}>
            <span>{service.id}</span>
            <h3>{service.title}</h3>
            <p>{service.copy}</p>
            <button type="button" onClick={() => openLeadModal(service.title)} aria-label={`Discuss ${service.title}`}><ArrowUpRight size={18} /></button>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
