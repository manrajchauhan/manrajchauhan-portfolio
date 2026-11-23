import { contact, personalIdentity, projects, skills } from '@/data/content';

const SITE = 'https://manrajchauhan.com';

export default function JsonLd() {
  const sameAs = [contact.linkedin, contact.github].filter(Boolean);

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE}/#person`,
        name: personalIdentity.name,
        url: `${SITE}/`,
        jobTitle: personalIdentity.role,
        address: { '@type': 'PostalAddress', addressLocality: 'Navi Mumbai', addressCountry: 'IN' },
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Mumbai' },
        knowsAbout: skills,
        sameAs,
        ...(contact.email && { email: `mailto:${contact.email}` }),
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: `${SITE}/`,
        name: personalIdentity.name,
        publisher: { '@id': `${SITE}/#person` },
        inLanguage: 'en',
      },
      {
        '@type': 'ProfilePage',
        '@id': `${SITE}/#profile`,
        url: `${SITE}/`,
        name: `${personalIdentity.name} — ${personalIdentity.role}`,
        mainEntity: { '@id': `${SITE}/#person` },
        isPartOf: { '@id': `${SITE}/#website` },
        hasPart: projects
          .filter((p) => p.url)
          .map((p) => ({
            '@type': 'CreativeWork',
            name: p.title,
            url: p.url,
            description: p.description,
            creator: { '@id': `${SITE}/#person` },
          })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
