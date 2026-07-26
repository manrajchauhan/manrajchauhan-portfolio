export default function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Manraj Chauhan',
    alternateName: ['Manraj', 'Mr Manraj Chauhan'],
    url: 'https://manrajchauhan.com',
    image: 'https://manrajchauhan.com/hero.png',
    jobTitle: 'Technical Lead & Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Independent Software Engineering & Leadership Consulting',
    },
    sameAs: [
      'https://www.linkedin.com/in/mrmanrajchauhan/',
      'https://github.com/manrajchauhan',
    ],
    description: 'Manraj Chauhan is a Technical Lead and Full Stack Developer building high-performance web applications, resilient API systems, React, Next.js, Node.js, and scalable cloud architectures.',
    knowsAbout: [
      'Full Stack Development',
      'Technical Leadership',
      'System Architecture',
      'React & Next.js',
      'Node.js & Express',
      'TypeScript',
      'PostgreSQL & Redis',
      'AWS & Cloudflare Pages',
      'Docker Containerization',
      'API Design & Microservices',
      'WebSockets & Realtime Systems',
      'Perceived Performance & UI Direction',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@manrajchauhan.com',
      contactType: 'professional inquiries',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Manraj Chauhan Portfolio',
    url: 'https://manrajchauhan.com',
    description: 'Portfolio of Manraj Chauhan, Technical Lead and Full Stack Developer.',
    publisher: {
      '@type': 'Person',
      name: 'Manraj Chauhan',
    },
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Manraj Chauhan',
      jobTitle: 'Technical Lead & Full Stack Developer',
    },
  };

  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MarkMe Workspace',
    operatingSystem: 'Web Browser',
    applicationCategory: 'DeveloperApplication',
    url: 'https://markme-5uj.pages.dev/',
    author: {
      '@type': 'Person',
      name: 'Manraj Chauhan',
    },
    description: 'Browser-first Markdown editing workspace featuring live side-by-side preview, DOMPurify sanitization, and local storage auto-save persistence.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Featured Projects by Manraj Chauhan',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'MarkMe Workspace',
        url: 'https://manrajchauhan.com/work/markme-workspace',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Portfolio System',
        url: 'https://manrajchauhan.com/work/portfolio-system',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Backend Architecture',
        url: 'https://manrajchauhan.com/work/backend-architecture',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Realtime Interfaces',
        url: 'https://manrajchauhan.com/work/realtime-interfaces',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Technical Lead Playbooks',
        url: 'https://manrajchauhan.com/work/technical-lead-playbooks',
      },
    ],
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
          text: 'Manraj Chauhan is a Technical Lead and Full Stack Developer specializing in building high-performance web applications, scalable API microservices, and leading engineering teams.',
        },
      },
      {
        '@type': 'Question',
        name: 'What technologies does Manraj Chauhan specialize in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Manraj Chauhan specializes in React, Next.js, Node.js, Express, TypeScript, PostgreSQL, Redis, AWS Cloud, Docker, WebSockets, DOMPurify, Framer Motion, and Lenis smooth scrolling.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is MarkMe Workspace by Manraj Chauhan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MarkMe Workspace is a browser-first Markdown application created by Manraj Chauhan, featuring real-time side-by-side preview, DOMPurify XSS sanitization, and offline local storage persistence.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Manraj Chauhan approach full-stack engineering?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Manraj Chauhan focuses on clear system architecture, strict API contracts, perceived performance optimizations, modular component design, and dependable full-stack delivery from idea to shipped product.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact Manraj Chauhan for engineering projects or technical direction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can contact Manraj Chauhan directly via email at contact@manrajchauhan.com, on LinkedIn at https://www.linkedin.com/in/mrmanrajchauhan/, or on GitHub at https://github.com/manrajchauhan.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
