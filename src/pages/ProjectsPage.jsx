import React from 'react';
import { projectsData } from '../data/projectsData';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <span className="drei-subtitle">// SELECTED WORKS & CASE STUDIES</span>
        <h1 className="drei-title" style={{ fontSize: '3rem' }}>
          PROJECTS & <span style={{ color: 'var(--accent-orange)' }}>ENGINEERING LOGS</span>
        </h1>
        <p className="drei-desc" style={{ maxWidth: '650px', fontSize: '1rem', marginTop: '0.5rem' }}>
          Explore featured production web applications, 3D WebGL engines, cross-platform mobile apps, and real-world networking engineering logs.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card-2d">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
              <span className="drei-subtitle" style={{ color: project.color, margin: 0 }}>
                {project.tag}
              </span>
              <FolderGit2 size={18} color={project.color} />
            </div>

            <h2 className="drei-title" style={{ fontSize: '1.6rem' }}>
              {project.title}
            </h2>

            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              marginBottom: '0.8rem',
              textTransform: 'uppercase'
            }}>
              {project.category}
            </div>

            <p className="drei-desc" style={{ marginBottom: '1.2rem' }}>
              {project.description}
            </p>

            {/* Tech Stack Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
              {project.tech.map((t, idx) => (
                <span key={idx} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  padding: '0.3rem 0.6rem',
                  background: 'rgba(20, 18, 16, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '4px',
                  color: 'var(--text-main)',
                  fontWeight: '600'
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="bs-btn">
                <span>LIVE DEMO</span>
                <ExternalLink size={14} />
              </a>
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="bs-btn">
                <span>GITHUB</span>
                <Github size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
