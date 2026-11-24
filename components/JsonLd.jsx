import { contact, personalIdentity, projects, skills } from '@/data/content';

const SITE = 'https://manrajchauhan.com';
// Stamped at build time so ProfilePage shows when the profile last changed.
const BUILT_AT = new Date().toISOString();

export default function JsonLd() {
  const sameAs = [contact.linkedin, contact.github].filter(Boolean);

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE}/#person`,
        name: personalIdentity.name,
        givenName: 'Manraj',
        familyName: 'Chauhan',
        url: `${SITE}/`,
        mainEntityOfPage: { '@id': `${SITE}/#profile` },
        description: `${personalIdentity.name} is a ${personalIdentity.role.toLowerCase()} in ${personalIdentity.location}, building web applications end-to-end with Next.js, React, Node.js and TypeScript.`,
        jobTitle: personalIdentity.role,
        hasOccupation: {
          '@type': 'Occupation',
          name: personalIdentity.role,
          occupationLocation: { '@type': 'City', name: 'Navi Mumbai' },
          skills: skills.join(', '),
        },
        worksFor: {
          '@type': 'Organization',
          '@id': `${SITE}/#solsn`,
          name: 'Solsn Technologies',
          url: 'https://solsn.com/',
          founder: { '@id': `${SITE}/#person` },
        },
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
        description: `Portfolio of ${personalIdentity.name}, ${personalIdentity.role}.`,
        publisher: { '@id': `${SITE}/#person` },
        inLanguage: 'en',
      },
      {
        '@type': 'ProfilePage',
        '@id': `${SITE}/#profile`,
        url: `${SITE}/`,
        name: `${personalIdentity.name} — ${personalIdentity.role}`,
        dateModified: BUILT_AT,
        inLanguage: 'en',
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
