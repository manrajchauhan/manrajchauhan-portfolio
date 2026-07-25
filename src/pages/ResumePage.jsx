import React from 'react';
import { resumeData } from '../data/resumeData';
import { Download, Briefcase, GraduationCap, Award, MapPin, Mail, Globe, Github } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="page-wrapper">
      <div className="resume-page-container">
        {/* Header */}
        <div style={{
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          borderBottom: '1px solid var(--color-ash-border)',
          paddingBottom: '24px',
          marginBottom: '32px'
        }}>
          <div>
            <span className="vivid-eyebrow">// CAREERS & CURRICULUM VITAE</span>
            <h1 className="vivid-display-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 56px)', margin: 0 }}>
              {resumeData.name}
            </h1>
            <div style={{ fontFamily: 'var(--font-neue-montreal)', fontSize: '18px', color: 'var(--color-fog-blue)', marginTop: '4px' }}>
              {resumeData.title}
            </div>
          </div>

          <a
            href="/resume.pdf"
            download
            className="vivid-outlined-contact-btn"
            style={{ padding: '12px 24px', fontSize: '15px' }}
          >
            <Download size={16} style={{ display: 'inline', marginRight: '8px' }} />
            <span>DOWNLOAD PDF</span>
          </a>
        </div>

        {/* Contact Strip */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '32px',
          fontFamily: 'var(--font-neue-montreal)',
          fontSize: '15px',
          color: 'var(--color-fog-blue)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Mail size={15} color="var(--color-bone-white)" />
            <span>{resumeData.email}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={15} color="var(--color-bone-white)" />
            <span>{resumeData.location}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Globe size={15} color="var(--color-bone-white)" />
            <span>{resumeData.website}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Github size={15} color="var(--color-bone-white)" />
            <span>{resumeData.github}</span>
          </div>
        </div>

        {/* Professional Summary */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-neue-montreal)', fontSize: '17px', color: 'var(--color-fog-blue)', marginBottom: '8px', textTransform: 'uppercase' }}>
            // SUMMARY
          </h2>
          <p style={{ color: 'var(--color-bone-white)', lineHeight: '1.5', fontSize: '20px' }}>
            {resumeData.summary}
          </p>
        </div>

        <hr className="vivid-footer-divider" />

        {/* Experience Timeline */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{
            fontFamily: 'var(--font-neue-montreal)',
            fontSize: '17px',
            color: 'var(--color-fog-blue)',
            marginBottom: '20px',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Briefcase size={16} color="var(--color-bone-white)" />
            <span>// EXPERIENCE</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} style={{
                background: 'rgba(16, 16, 16, 0.4)',
                border: '1px solid var(--color-ash-border)',
                padding: '24px',
                borderRadius: '0px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <h3 style={{ fontFamily: 'var(--font-neue-montreal)', fontWeight: '400', fontSize: '22px' }}>
                    {exp.role} <span style={{ color: 'var(--color-fog-blue)' }}>@ {exp.company}</span>
                  </h3>
                  <span style={{ fontFamily: 'var(--font-neue-montreal)', fontSize: '15px', color: 'var(--color-fog-blue)' }}>
                    {exp.period} | {exp.location}
                  </span>
                </div>

                <ul style={{ paddingLeft: '20px', color: 'var(--color-bone-white)', fontSize: '18px', lineHeight: '1.5' }}>
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} style={{ marginBottom: '6px' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-neue-montreal)',
              fontSize: '17px',
              color: 'var(--color-fog-blue)',
              marginBottom: '16px',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <GraduationCap size={16} color="var(--color-bone-white)" />
              <span>// EDUCATION</span>
            </h2>

            {resumeData.education.map((edu, idx) => (
              <div key={idx} style={{
                background: 'rgba(16, 16, 16, 0.4)',
                border: '1px solid var(--color-ash-border)',
                padding: '20px',
                borderRadius: '0px'
              }}>
                <h3 style={{ fontFamily: 'var(--font-neue-montreal)', fontWeight: '400', fontSize: '20px' }}>
                  {edu.degree}
                </h3>
                <div style={{ fontFamily: 'var(--font-neue-montreal)', fontSize: '15px', color: 'var(--color-fog-blue)', marginTop: '4px' }}>
                  {edu.institution} // {edu.period}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 style={{
              fontFamily: 'var(--font-neue-montreal)',
              fontSize: '17px',
              color: 'var(--color-fog-blue)',
              marginBottom: '16px',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Award size={16} color="var(--color-bone-white)" />
              <span>// CERTIFICATIONS</span>
            </h2>

            <div style={{
              background: 'rgba(16, 16, 16, 0.4)',
              border: '1px solid var(--color-ash-border)',
              padding: '20px',
              borderRadius: '0px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {resumeData.certifications.map((cert, idx) => (
                <div key={idx} style={{ fontFamily: 'var(--font-neue-montreal)', fontSize: '16px', color: 'var(--color-bone-white)' }}>
                  — {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
