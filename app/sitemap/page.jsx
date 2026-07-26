'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import Header from '@/components/sections/Header';
import FooterSection from '@/components/sections/FooterSection';
import SectionMarker from '@/components/ui/SectionMarker';
import Divider from '@/components/ui/Divider';
import ActionButton from '@/components/ui/ActionButton';
import { projects, services, articles } from '@/data/siteData';

const coreSections = [
  { label: 'Home / Hero', path: '/#home', desc: 'Main landing section with technical lead overview and portfolio highlights.' },
  { label: 'About / What I Do', path: '/#about', desc: 'Overview of engineering background, architectural focus, and approach.' },
  { label: 'Services', path: '/#service', desc: 'Capabilities in web apps, frontend systems, design, and system architecture.' },
  { label: 'Projects & Work', path: '/#project', desc: 'Curated list of live applications, portfolio systems, and API architectures.' },
  { label: 'Testimonials & Proof', path: '/#testimonials', desc: 'Selected client feedback, collaborator references, and engineering focus.' },
  { label: 'Latest Articles', path: '/#pages', desc: 'Technical articles, frontend insights, and system design playbooks.' },
];

const externalResources = [
  { label: 'GitHub Profile', path: 'https://github.com/manrajchauhan', type: 'External' },
  { label: 'LinkedIn Network', path: 'https://www.linkedin.com/in/mrmanrajchauhan/', type: 'External' },
  { label: 'Direct Email', path: 'mailto:contact@manrajchauhan.com', type: 'Contact' },
  { label: 'XML Sitemap', path: '/sitemap.xml', type: 'SEO Feed' },
];

export default function SitemapPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <main className="site-shell">
      <section className="hero-section" style={{ minHeight: 'auto', paddingBottom: '60px' }}>
        <Header />

        <div className="hero-content" style={{ minHeight: 'auto', paddingTop: '60px' }}>
          <div className="hero-title-wrap">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 'clamp(42px, 8vw, 96px)' }}
            >
              Sitemap
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hero-summary"
            style={{ maxWidth: '680px' }}
          >
            <p>
              Index & Site Architecture. A structured overview of all pages, project showcases, services, articles, and external profiles.
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '24px' }}>
              <ActionButton href="/" tone="light">
                <span style={{ display: 'inline-flex', itemsCenter: 'center', gap: '6px' }}>
                  <ArrowLeft size={12} /> Back to Home
                </span>
              </ActionButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 01. Core Navigation */}
      <section className="content-section">
        <Divider />
        <SectionMarker label="01 // Core Sections" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="services-grid"
        >
          {coreSections.map((sec, idx) => (
            <motion.article
              key={sec.label}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="service-card"
            >
              <span>0{idx + 1}</span>
              <h3>{sec.label}</h3>
              <p>{sec.desc}</p>
              <a href={sec.path}>Navigate section →</a>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* 02. Projects Showcase */}
      <section className="content-section">
        <Divider />
        <SectionMarker label="02 // Projects & Live Apps" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="services-grid"
        >
          {projects.map((proj) => (
            <motion.article
              key={proj.title}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="service-card"
            >
              <span>{proj.number}</span>
              <h3>{proj.title}</h3>
              <p>{proj.type} — {proj.year}</p>
              <a href={proj.href} target={proj.href.startsWith('http') ? '_blank' : undefined} rel={proj.href.startsWith('http') ? 'noreferrer' : undefined}>
                View project <ArrowUpRight size={11} style={{ display: 'inline', marginLeft: '4px' }} />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* 03. Engineering Services */}
      <section className="content-section">
        <Divider />
        <SectionMarker label="03 // Services & Capabilities" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="services-grid"
        >
          {services.map((serv) => (
            <motion.article
              key={serv.title}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="service-card"
            >
              <span>{serv.id}</span>
              <h3>{serv.title}</h3>
              <p>{serv.copy}</p>
              <a href="/#service">Explore service →</a>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* 04. Technical Articles */}
      <section className="content-section">
        <Divider />
        <SectionMarker label="04 // Technical Articles" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="services-grid"
        >
          {articles.map((art, idx) => (
            <motion.article
              key={art.title}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="service-card"
            >
              <span>0{idx + 1}</span>
              <h3>{art.title}</h3>
              <p>{art.tag} • {art.date} ({art.read})</p>
              <a href="mailto:contact@manrajchauhan.com">Read article →</a>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* 05. Channels & Utility Feeds */}
      <section className="content-section">
        <Divider />
        <SectionMarker label="05 // Channels & Feeds" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="services-grid"
        >
          {externalResources.map((res, idx) => (
            <motion.article
              key={res.label}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="service-card"
            >
              <span>0{idx + 1}</span>
              <h3>{res.label}</h3>
              <p>{res.type}</p>
              <a href={res.path} target={res.path.startsWith('http') ? '_blank' : undefined} rel={res.path.startsWith('http') ? 'noreferrer' : undefined}>
                Open link <ArrowUpRight size={11} style={{ display: 'inline', marginLeft: '4px' }} />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <FooterSection />
    </main>
  );
}
