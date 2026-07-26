'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Divider from '@/components/ui/Divider';
import SectionMarker from '@/components/ui/SectionMarker';
import { services } from '@/data/siteData';

import { useLeadModal } from '@/components/ui/LeadCaptureContext';

export default function ServicesSection() {
  const { openLeadModal } = useLeadModal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="service" className="content-section services-section">
      <Divider />
      <SectionMarker label="Services" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="services-grid"
      >
        <motion.article variants={itemVariants} whileHover={{ y: -6, transition: { duration: 0.25 } }} className="service-card">
          <span>01</span>
          <h3>Web Apps & Product Frontends</h3>
          <p>Crafting fast, responsive interfaces with seamless design and powerful frontend engineering.</p>
          <button
            type="button"
            onClick={() => openLeadModal('Web Apps & Product Frontends')}
            style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', font: 'inherit', cursor: 'pointer', textDecoration: 'underline' }}
          >
            Inquire Service →
          </button>
        </motion.article>

        <motion.article variants={itemVariants} whileHover={{ y: -6, transition: { duration: 0.25 } }} className="service-card">
          <span>02</span>
          <h3>Design & Development</h3>
          <p>Building accessible, high-performing websites that unite strategy and clean scalable code.</p>
          <button
            type="button"
            onClick={() => openLeadModal('Design & Development')}
            style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', font: 'inherit', cursor: 'pointer', textDecoration: 'underline' }}
          >
            Inquire Service →
          </button>
        </motion.article>

        <motion.figure variants={itemVariants} className="service-image service-image--device">
          <Image src="/markme.png" alt="MarkMe Workspace preview" fill sizes="(max-width: 900px) 100vw, 33vw" />
        </motion.figure>

        <motion.figure variants={itemVariants} className="service-image service-image--portrait">
          <Image src="/hero.png" alt="Manraj Chauhan portrait" fill sizes="(max-width: 900px) 100vw, 33vw" />
        </motion.figure>

        {services.slice(2).map((service) => (
          <motion.article variants={itemVariants} whileHover={{ y: -6, transition: { duration: 0.25 } }} className="service-card" key={service.id}>
            <span>{service.id}</span>
            <h3>{service.title}</h3>
            <p>{service.copy}</p>
            <button
              type="button"
              onClick={() => openLeadModal(service.title)}
              style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', font: 'inherit', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Inquire Service →
            </button>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
