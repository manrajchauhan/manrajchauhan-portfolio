import React from 'react';
import { resumeData } from '../data/resumeData';
import { Download, Briefcase, GraduationCap, Award, MapPin, Mail, Globe, Github } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="page-wrapper">
      <div className="resume-page-container">
        {/* Page Header */}
        <div style={{
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div>
            <span className="drei-subtitle">// RESUME // CURRICULUM VITAE</span>
            <h1 className="drei-title" style={{ fontSize: '2.8rem', margin: 0 }}>
              {resumeData.name}
            </h1>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--accent-orange)' }}>
              {resumeData.title}
            </div>
          </div>

          <a
            href="/resume.pdf"
            download
            className="bs-btn"
            style={{
              padding: '0.8rem 1.6rem',
              background: 'var(--accent-orange)',
              color: '#faf4ec',
              borderColor: 'var(--accent-orange)'
            }}
          >
            <Download size={16} />
            <span>DOWNLOAD PDF RESUME</span>
          </a>
        </div>

        {/* Contact Strip */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '2rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Mail size={16} color="var(--accent-orange)" />
            <span>{resumeData.email}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <MapPin size={16} color="var(--accent-orange)" />
            <span>{resumeData.location}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Globe size={16} color="var(--accent-orange)" />
            <span>{resumeData.website}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Github size={16} color="var(--accent-orange)" />
            <span>{resumeData.github}</span>
          </div>
        </div>

        {/* Summary */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--accent-orange)', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
            // PROFESSIONAL SUMMARY
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1rem' }}>
            {resumeData.summary}
          </p>
        </div>

        {/* Experience Timeline */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1rem',
            color: 'var(--accent-orange)',
            marginBottom: '1.2rem',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Briefcase size={18} />
            <span>// WORK EXPERIENCE</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} style={{
                background: '#fffdf9',
                border: '1px solid var(--border-subtle)',
                padding: '1.6rem',
                borderRadius: '10px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1.3rem' }}>
                    {exp.role} <span style={{ color: 'var(--accent-orange)' }}>@ {exp.company}</span>
                  </h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {exp.period} | {exp.location}
                  </span>
                </div>

                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} style={{ marginBottom: '0.4rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem',
              color: 'var(--accent-orange)',
              marginBottom: '1.2rem',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <GraduationCap size={18} />
              <span>// EDUCATION</span>
            </h2>

            {resumeData.education.map((edu, idx) => (
              <div key={idx} style={{
                background: '#fffdf9',
                border: '1px solid var(--border-subtle)',
                padding: '1.4rem',
                borderRadius: '10px'
              }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1.1rem' }}>
                  {edu.degree}
                </h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                  {edu.institution} // {edu.period}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem',
              color: 'var(--accent-orange)',
              marginBottom: '1.2rem',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Award size={18} />
              <span>// CERTIFICATIONS</span>
            </h2>

            <div style={{
              background: '#fffdf9',
              border: '1px solid var(--border-subtle)',
              padding: '1.4rem',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}>
              {resumeData.certifications.map((cert, idx) => (
                <div key={idx} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  ✓ {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
