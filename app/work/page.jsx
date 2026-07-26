'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import Header from '@/components/sections/Header';
import FooterSection from '@/components/sections/FooterSection';
import SectionMarker from '@/components/ui/SectionMarker';
import Divider from '@/components/ui/Divider';
import ActionButton from '@/components/ui/ActionButton';
import { projects } from '@/data/siteData';

export default function WorkPage() {
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
              Work
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
              Selected Engineering Projects & Applications. Full stack web apps, API microservices, technical lead playbooks, and high-performance interfaces.
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '24px' }}>
              <ActionButton href="/" tone="light">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <ArrowLeft size={12} /> Back to Home
                </span>
              </ActionButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="content-section">
        <Divider />
        <SectionMarker label="All Projects" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="projects-masonry"
        >
          {projects.map((project) => (
            <motion.article variants={itemVariants} className={`project-card ${project.className}`} key={project.number}>
              <motion.a
                whileHover="hover"
                initial="initial"
                href={project.href}
                className="project-visual"
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className="project-img"
                  />
                ) : (
                  <div className="project-abstract-graphic">
                    <span className="abstract-lines" aria-hidden="true" />
                    <span className="abstract-badge">{project.type}</span>
                  </div>
                )}
                <motion.span
                  variants={{
                    hover: { opacity: 1, scale: 1, y: 0 },
                    initial: { opacity: 0, scale: 0.85, y: 8 },
                  }}
                  transition={{ duration: 0.2 }}
                  className="view-badge"
                >
                  View Case Study
                </motion.span>
              </motion.a>

              <div className="project-meta">
                <span>{project.number}</span>
                <div>
                  <h3>
                    <a href={project.href} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {project.title}
                    </a>
                  </h3>
                  <p>{project.year}</p>
                </div>
                <span>{project.type}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <FooterSection />
    </main>
  );
}
