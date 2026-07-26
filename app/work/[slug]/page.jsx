import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Header from '@/components/sections/Header';
import FooterSection from '@/components/sections/FooterSection';
import SectionMarker from '@/components/ui/SectionMarker';
import Divider from '@/components/ui/Divider';
import ActionButton from '@/components/ui/ActionButton';
import { projects, getProjectBySlug } from '@/data/siteData';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const project = getProjectBySlug(params?.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} - Case Study | Manraj Chauhan`,
    description: project.summary,
  };
}

export default async function ProjectSinglePage(props) {
  const params = await props.params;
  const project = getProjectBySlug(params?.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <main className="site-shell">
      <section className="hero-section" style={{ minHeight: 'auto', paddingBottom: '72px' }}>
        <Header />

        <div className="hero-content" style={{ minHeight: 'auto', paddingTop: '60px' }}>
          <div className="hero-title-wrap">
            <span style={{ fontFamily: 'var(--font-code)', fontSize: '13px', color: 'var(--color-lime)', display: 'block', marginBottom: '12px' }}>
              {project.number} // {project.type} — {project.year}
            </span>
            <h1 style={{ fontSize: 'clamp(36px, 6.5vw, 84px)', lineHeight: '1.02' }}>
              {project.title}
            </h1>
          </div>

          <div className="hero-summary" style={{ maxWidth: '720px' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
              {project.summary}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '28px' }}>
              {project.externalUrl && (
                <ActionButton href={project.externalUrl} tone="light">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Live Preview <ArrowUpRight size={13} />
                  </span>
                </ActionButton>
              )}
              {project.githubUrl && (
                <ActionButton href={project.githubUrl} tone="light">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    View Code Repository <ArrowUpRight size={13} />
                  </span>
                </ActionButton>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Meta Bar */}
      <section className="content-section" style={{ paddingTop: '40px' }}>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', padding: '24px 0', borderBottom: '1px solid var(--color-line)' }}>
          <div>
            <span style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Role</span>
            <strong style={{ fontFamily: 'var(--font-display)', fontSize: '15px' }}>{project.role}</strong>
          </div>
          <div>
            <span style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Timeline</span>
            <strong style={{ fontFamily: 'var(--font-display)', fontSize: '15px' }}>{project.timeline}</strong>
          </div>
          <div>
            <span style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Category</span>
            <strong style={{ fontFamily: 'var(--font-display)', fontSize: '15px' }}>{project.type}</strong>
          </div>
          <div>
            <span style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Tech Stack</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.stack.map((item) => (
                <span key={item} style={{ padding: '3px 8px', borderRadius: '4px', background: 'var(--color-soft)', fontFamily: 'var(--font-code)', fontSize: '10px' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Project Feature Image */}
      <section className="content-section" style={{ paddingTop: '20px' }}>
        <div style={{ position: 'relative', width: '100%', minHeight: '440px', maxHeight: '560px', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--color-line)', background: 'var(--color-soft)' }}>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'left top' }}
            />
          ) : (
            <div className="project-abstract-graphic" style={{ background: 'linear-gradient(135deg, #0d0d0d, #1a1a1a)' }}>
              <span className="abstract-lines" aria-hidden="true" />
              <span className="abstract-badge">{project.type} Architecture</span>
            </div>
          )}
        </div>
      </section>

      {/* Case Study Details */}
      <section className="content-section">
        <Divider />
        <div className="section-layout">
          <div className="section-left">
            <SectionMarker label="Case Study" />
            <ActionButton href="/work">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <ArrowLeft size={12} /> All Projects
              </span>
            </ActionButton>
          </div>

          <div className="about-copy" style={{ maxWidth: '800px' }}>
            <div style={{ marginBottom: '48px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 800, marginBottom: '16px' }}>
                The Challenge
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '1.65', color: 'var(--color-muted)' }}>
                {project.challenge}
              </p>
            </div>

            <div style={{ marginBottom: '48px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 800, marginBottom: '16px' }}>
                The Solution & Architecture
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '1.65', color: 'var(--color-muted)' }}>
                {project.solution}
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>
                Key Technical Accomplishments
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {project.highlights.map((highlight) => (
                  <li key={highlight} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: 'var(--color-ink)' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-lime)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next / Prev Navigation */}
      {projects.length > 1 && (
        <section className="content-section">
          <Divider />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', paddingTop: '10px' }}>
            <a href={prevProject.href} style={{ padding: '24px', border: '1px solid var(--color-line)', borderRadius: 'var(--radius)', textDecoration: 'none', color: 'inherit', transition: 'border-color 0.2s' }}>
              <span style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-code)', fontSize: '10px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>← Previous Project</span>
              <strong style={{ fontFamily: 'var(--font-display)', fontSize: '18px' }}>{prevProject.title}</strong>
            </a>
            <a href={nextProject.href} style={{ padding: '24px', border: '1px solid var(--color-line)', borderRadius: 'var(--radius)', textDecoration: 'none', color: 'inherit', textAlign: 'right', transition: 'border-color 0.2s' }}>
              <span style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-code)', fontSize: '10px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Next Project →</span>
              <strong style={{ fontFamily: 'var(--font-display)', fontSize: '18px' }}>{nextProject.title}</strong>
            </a>
          </div>
        </section>
      )}

      <FooterSection />
    </main>
  );
}
