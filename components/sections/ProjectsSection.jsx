'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Divider from '@/components/ui/Divider';
import SectionMarker from '@/components/ui/SectionMarker';
import { projects } from '@/data/siteData';

export default function ProjectsSection() {
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
    <section id="project" className="content-section projects-section">
      <Divider />
      <SectionMarker label="Project" />

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
              target={project.href.startsWith('http') ? '_blank' : undefined}
              rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
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
                View
              </motion.span>
            </motion.a>

            <div className="project-meta">
              <span>{project.number}</span>
              <div>
                <h3>{project.title}</h3>
                <p>{project.year}</p>
              </div>
              <span>{project.type}</span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
