import React from 'react';
import { X, Download, Briefcase, GraduationCap, Award, MapPin, Mail, Globe, Github } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="resume-modal-overlay">
      <div className="resume-modal-container">
        {/* Modal Header */}
        <div className="resume-modal-header">
          <div>
            <span className="bs-ticker-accent">// RESUME // CV</span>
            <h2 className="drei-title" style={{ fontSize: '2rem', marginBottom: '0.2rem' }}>
              {resumeData.name}
            </h2>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              {resumeData.title}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <a
              href="/resume.pdf" 
              download 
              className="bs-btn"
              style={{ background: 'var(--accent-orange)', color: '#faf4ec', borderColor: 'var(--accent-orange)' }}
            >
              <Download size={14} />
              <span>DOWNLOAD PDF</span>
            </a>

            <button onClick={onClose} className="bs-btn" style={{ padding: '0.6rem' }}>
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="resume-modal-body">
          {/* Metadata Row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.2rem',
            padding: '1rem 0',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--text-secondary)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Mail size={14} color="var(--accent-orange)" />
              <span>{resumeData.email}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={14} color="var(--accent-orange)" />
              <span>{resumeData.location}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Globe size={14} color="var(--accent-orange)" />
              <span>{resumeData.website}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Github size={14} color="var(--accent-orange)" />
              <span>{resumeData.github}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--accent-orange)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              // PROFESSIONAL SUMMARY
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
              {resumeData.summary}
            </p>
          </div>

          {/* Work Experience Timeline */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              color: 'var(--accent-orange)',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Briefcase size={16} />
              <span>// WORK EXPERIENCE</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {resumeData.experience.map((exp, idx) => (
                <div key={idx} style={{
                  background: 'rgba(20, 18, 16, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  padding: '1.2rem',
                  borderRadius: '8px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.3rem' }}>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1.15rem' }}>
                      {exp.role} <span style={{ color: 'var(--accent-orange)' }}>@ {exp.company}</span>
                    </h4>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {exp.period} | {exp.location}
                    </span>
                  </div>

                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} style={{ marginBottom: '0.3rem' }}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                color: 'var(--accent-orange)',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <GraduationCap size={16} />
                <span>// EDUCATION</span>
              </h3>

              {resumeData.education.map((edu, idx) => (
                <div key={idx} style={{
                  background: 'rgba(20, 18, 16, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  padding: '1rem',
                  borderRadius: '8px'
                }}>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1rem' }}>
                    {edu.degree}
                  </h4>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {edu.institution} // {edu.period}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                color: 'var(--accent-orange)',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Award size={16} />
                <span>// CERTIFICATIONS</span>
              </h3>

              <div style={{
                background: 'rgba(20, 18, 16, 0.03)',
                border: '1px solid var(--border-subtle)',
                padding: '1rem',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                {resumeData.certifications.map((cert, idx) => (
                  <div key={idx} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                    ✓ {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
