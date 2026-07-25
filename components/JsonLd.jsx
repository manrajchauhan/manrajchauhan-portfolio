export default function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Manraj Chauhan',
    url: 'https://manrajchauhan.com',
    image: 'https://manrajchauhan.com/hero.png',
    jobTitle: 'Technical Lead & Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Independent Software Engineering',
    },
    sameAs: [
      'https://www.linkedin.com/in/mrmanrajchauhan/',
      'https://github.com/manrajchauhan',
    ],
    description: 'Manraj Chauhan is a Technical Lead and Full Stack Developer specializing in high-performance web applications, React, Next.js, Node.js, and system architecture.',
    knowsAbout: [
      'Full Stack Development',
      'Technical Leadership',
      'System Architecture',
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'AWS',
      'Docker',
      'API Design',
    ],
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Manraj Chauhan',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is Manraj Chauhan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Manraj Chauhan is a Full Stack Developer and Technical Lead with expertise in building scalable web applications, API microservices, and leading software engineering teams.',
        },
      },
      {
        '@type': 'Question',
        name: 'What technologies does Manraj Chauhan work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Manraj Chauhan works with React, Next.js, Node.js, Express, WebGL, Three.js, PostgreSQL, Redis, AWS Cloud, Docker, WebSockets, and GraphQL.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is MarkMe Workspace by Manraj Chauhan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MarkMe Workspace is a browser-first Markdown editing application built by Manraj Chauhan, featuring real-time side-by-side preview, DOMPurify sanitization, and local storage persistence.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
