export default function JsonLd() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://manrajchauhan.com/#person',
        name: 'Manraj Chauhan',
        url: 'https://manrajchauhan.com/',
        image: 'https://manrajchauhan.com/hero.png',
        jobTitle: 'Technical Lead and Full Stack Developer',
        description: 'Manraj Chauhan is a Technical Lead and Full Stack Developer who builds high-performance web applications, scalable backend systems, and polished product experiences.',
        sameAs: ['https://www.linkedin.com/in/mrmanrajchauhan/', 'https://github.com/manrajchauhan'],
        knowsAbout: ['Technical Leadership', 'Full Stack Development', 'System Architecture', 'React', 'Next.js', 'Node.js', 'TypeScript', 'API Design', 'PostgreSQL', 'Cloudflare'],
        email: 'mailto:manrajchauhan2023@gmail.com',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://manrajchauhan.com/#website',
        url: 'https://manrajchauhan.com/',
        name: 'Manraj Chauhan',
        description: 'Portfolio and engineering notes by Manraj Chauhan, Technical Lead and Full Stack Developer.',
        publisher: { '@id': 'https://manrajchauhan.com/#person' },
        inLanguage: 'en',
      },
      {
        '@type': 'ProfilePage',
        '@id': 'https://manrajchauhan.com/#profile',
        url: 'https://manrajchauhan.com/',
        name: 'Manraj Chauhan — Technical Lead and Full Stack Developer',
        mainEntity: { '@id': 'https://manrajchauhan.com/#person' },
        isPartOf: { '@id': 'https://manrajchauhan.com/#website' },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://manrajchauhan.com/work/markme-workspace#software',
        name: 'MarkMe Workspace',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web Browser',
        url: 'https://markme-5uj.pages.dev/',
        author: { '@id': 'https://manrajchauhan.com/#person' },
        description: 'A browser-first Markdown editing workspace featuring live side-by-side preview, DOMPurify sanitization, and local storage persistence.',
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
