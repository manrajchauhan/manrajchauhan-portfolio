import React from 'react';
import { projectsData } from '../data/projectsData';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <span className="vivid-eyebrow">// WORK & CASE STUDIES</span>
        <h1 className="vivid-display-title" style={{ fontSize: 'clamp(3.5rem, 8vw, 105px)', marginBottom: '16px' }}>
          SELECTED WORKS
        </h1>
        <p className="drei-desc" style={{ maxWidth: '640px', color: 'var(--color-bone-white)' }}>
          Production web applications, 3D WebGL spatial engines, cross-platform platforms, and deep networking infrastructure case studies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card-2d">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span className="drei-subtitle" style={{ margin: 0, color: 'var(--color-fog-blue)' }}>
                {project.tag}
              </span>
              <ArrowUpRight size={18} color="var(--color-bone-white)" />
            </div>

            <h2 className="drei-title" style={{ fontSize: '28px', marginBottom: '8px' }}>
              {project.title}
            </h2>

            <div style={{
              fontFamily: 'var(--font-neue-montreal)',
              fontSize: '15px',
              color: 'var(--color-fog-blue)',
              marginBottom: '16px',
              textTransform: 'uppercase'
            }}>
              {project.category}
            </div>

            <p className="drei-desc" style={{ marginBottom: '24px', fontSize: '18px' }}>
              {project.description}
            </p>

            {/* Tech Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {project.tech.map((t, idx) => (
                <span key={idx} style={{
                  fontFamily: 'var(--font-neue-montreal)',
                  fontSize: '14px',
                  padding: '4px 10px',
                  background: 'rgba(255, 253, 249, 0.05)',
                  border: '1px solid var(--color-ash-border)',
                  borderRadius: '0px',
                  color: 'var(--color-bone-white)'
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="bs-btn">
                <span>VIEW CASE STUDY</span>
                <ExternalLink size={14} />
              </a>
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="bs-btn">
                <span>SOURCE CODE</span>
                <Github size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
