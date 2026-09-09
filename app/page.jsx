import { projects, contact } from '@/data/content';

export default function Home() {
  return (
    <div className="page-container">

      {/* ── HERO ── */}
      <header className="site-header" role="banner">
        <div className="header-text">
          <span className="identity-label">manrajchauhan.com</span>

          <h1 className="hero-headline">
            Full Stack Developer,<br />
            <em>building things for the web.</em>
          </h1>

          <p className="hero-bio">
            I&rsquo;m Manraj &mdash; a full-stack developer and
            CEO / Founder of{' '}
            <a href="https://solsn.com/" target="_blank" rel="noopener">
              Solsn Technologies
            </a>.
            I build web applications end-to-end, from interface to
            infrastructure &mdash; currently leading engineering
            at Indiana Marketplace.
          </p>
        </div>
      </header>

      {/* ── PROJECTS ── */}
      <main id="main-content">
        <hr className="section-divider" />
        <h2 className="section-label">Projects &mdash; selected work</h2>

        <div className="project-list" role="list">
          {projects.map((project) => {
            const isClickable = !!project.url;
            const Component = isClickable ? 'a' : 'span';
            const linkProps = isClickable
              ? { href: project.url, target: '_blank', rel: 'noopener' }
              : { 'aria-disabled': 'true' };

            return (
              <Component
                key={project.title}
                className="project-item"
                role="listitem"
                {...linkProps}
              >
                <div className="project-left">
                  <div className="project-name">{project.title}</div>
                  <div className="project-desc">{project.description}</div>
                </div>
                <div className="project-right">
                  <span className={`tag ${project.status === 'live' ? 'tag--live' : ''}`}>
                    {project.status === 'live' ? 'Live' : 'Built'}
                  </span>
                  {project.year && (
                    <span className="project-year">{project.year}</span>
                  )}
                </div>
              </Component>
            );
          })}
        </div>

        {/* ── CV ── */}
        <p className="cv-link-line">
          Looking for the serious version of me? My official CV lives at{' '}
          <a href="/cv.pdf" target="_blank" rel="noopener">
            CV &rarr;
          </a>
        </p>
      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <p className="footer-note">
          <em>manraj chauhan</em> &mdash; full stack developer
        </p>
        <nav className="footer-links" aria-label="Social links">
          {contact.linkedin && (
            <a href={contact.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          )}
          {contact.github && (
            <a href={contact.github} target="_blank" rel="noopener">GitHub</a>
          )}
          {contact.email && (
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          )}
        </nav>
      </footer>

    </div>
  );
}
