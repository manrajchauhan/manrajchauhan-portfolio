'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionMarker from '@/components/ui/SectionMarker';
import { projects } from '@/data/siteData';

export default function ProjectsSection() {
  return (
    <section id="project" className="projects-section editorial-section">
      <div className="section-rail"><SectionMarker label="Selected work" /><span>03</span></div>
      <div className="project-intro"><p>Small in number, deep in execution. Each project is a product system—not just a surface.</p><a className="inline-link" href="/work">All projects <ArrowUpRight size={15} /></a></div>
      <div className="project-stories">
        {projects.map((project, index) => (
          <motion.article className={`project-story project-story--${index + 1}`} key={project.slug} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65 }}>
            <a href={project.href} className="project-image-wrap" aria-label={`View ${project.title} case study`}>
              <Image src={project.image} alt={`${project.title} interface preview`} fill sizes="(max-width: 760px) 100vw, 68vw" className="project-image" />
              <span className="project-open">Open case study <ArrowUpRight size={16} /></span>
            </a>
            <div className="project-story-copy">
              <div className="project-kicker"><span>{project.number}</span><span>{project.type}</span><span>{project.year}</span></div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <a className="inline-link" href={project.href}>Explore project <ArrowUpRight size={15} /></a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
