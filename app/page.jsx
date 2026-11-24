import {
  projects,
  experience,
  skills,
  contact,
  personalIdentity,
  cvPath,
} from '@/data/content';
import ThemeToggle from '@/components/ThemeToggle';
import ExternalLink from '@/components/ExternalLink';

export default function Home() {
  return (
    <div className="page-container">

      {/* ── TOP BAR ── */}
      <div className="top-bar">
        <span className="identity-label">manrajchauhan.com</span>
        <ThemeToggle />
      </div>

      {/* ── HERO ── */}
      <header className="site-header">
        {personalIdentity.availableForWork && (
          <p className="availability">
            <span className="availability-dot" aria-hidden="true" />
            Available for new projects
          </p>
        )}

        <h1 className="hero-headline">
          <span className="hero-name">Manraj Chauhan</span>
          Full Stack Developer,<br />
          <em>building things for the web.</em>
        </h1>

        <p className="hero-bio">
          I&rsquo;m Manraj, a full-stack developer based in {personalIdentity.location}.
          I build web applications end-to-end, from interface to infrastructure,
          most recently as Technical Lead on a B2B marketplace.
        </p>

        <div className="hero-actions">
          {contact.email && (
            <a className="button button--primary" href={`mailto:${contact.email}`}>
              Get in touch
            </a>
          )}
          <ExternalLink className="button" href={cvPath}>
            View CV
          </ExternalLink>
        </div>
      </header>

      <main id="main-content">

        {/* ── PROJECTS ── */}
        <section aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="section-label">Selected work</h2>

          <ul className="project-list">
            {projects.map((project) => {
              const meta = (
                <div className="project-meta">
                  <span className={`tag ${project.status === 'live' ? 'tag--live' : ''}`}>
                    {project.status === 'live' ? 'Live' : 'Built'}
                  </span>
                  {project.year && <span className="project-year">{project.year}</span>}
                </div>
              );

              return (
                <li key={project.title} className="project-item">
                  <div className="project-head">
                    <h3 className="project-name">
                      {project.url ? (
                        <ExternalLink href={project.url} className="project-link">
                          {project.title}
                          <span className="project-arrow" aria-hidden="true"> ↗</span>
                        </ExternalLink>
                      ) : (
                        project.title
                      )}
                    </h3>
                    {meta}
                  </div>

                  <p className="project-desc">{project.description}</p>

                  {project.result && <p className="project-result">{project.result}</p>}

                  {(project.stack.length > 0 || project.github) && (
                    <div className="project-foot">
                      {project.stack.length > 0 && (
                        <ul className="stack-list" aria-label={`${project.title} tech stack`}>
                          {project.stack.map((s) => <li key={s}>{s}</li>)}
                        </ul>
                      )}
                      {project.github && (
                        <ExternalLink href={project.github} className="project-code">
                          Code
                        </ExternalLink>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        {/* ── EXPERIENCE ── */}
        <section aria-labelledby="experience-heading" className="section">
          <h2 id="experience-heading" className="section-label">Experience</h2>
          <ul className="experience-list">
            {experience.map((job) => (
              <li key={job.org} className="experience-item">
                <div className="experience-head">
                  <span className="experience-role">
                    {job.role} <span className="experience-org">· {job.org}</span>
                  </span>
                  <span className="experience-period">{job.period}</span>
                </div>
                <p className="experience-note">{job.note}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── SKILLS ── */}
        <section aria-labelledby="skills-heading" className="section">
          <h2 id="skills-heading" className="section-label">Tools I use</h2>
          <ul className="stack-list stack-list--large">
            {skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </section>

        {/* ── CONTACT ── */}
        <section aria-labelledby="contact-heading" className="section contact">
          <h2 id="contact-heading" className="contact-heading">
            Have a project in mind?
          </h2>
          <p className="contact-copy">
            I&rsquo;m open to freelance work and full-time roles. The fastest way to reach me is email.
          </p>
          {contact.email && (
            <a className="contact-email" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          )}
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <p className="footer-note">
          <em>Manraj Chauhan</em>{' '}&mdash; full stack developer
        </p>
        <nav className="footer-links" aria-label="Social links">
          {/* rel="me" tells search engines these profiles belong to the site owner. */}
          {contact.github && (
            <ExternalLink href={contact.github} rel="me noopener noreferrer">GitHub</ExternalLink>
          )}
          {contact.linkedin && (
            <ExternalLink href={contact.linkedin} rel="me noopener noreferrer">LinkedIn</ExternalLink>
          )}
          <ExternalLink href={cvPath}>CV</ExternalLink>
        </nav>
      </footer>

    </div>
  );
}
