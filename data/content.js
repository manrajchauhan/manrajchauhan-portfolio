/**
 * Site content — verified information only (sourced from the 2026 CV).
 * Do NOT add fabricated descriptions, URLs, or metrics.
 *
 * Fields marked TODO are waiting on Manraj and simply don't render while empty.
 */

export const projects = [
  {
    title: 'Indiana Marketplace',
    description:
      'B2B industrial marketplace. As Technical Lead I own the frontend, backend, REST APIs, database architecture and deployments, including an interactive 3D virtual exhibition hall for live product showcases.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'React Three Fiber'],
    status: 'live',
    year: '2025',
    url: 'https://indianamarketplace.com/',
    github: '',
    result: '', // TODO: one concrete outcome (users, listings, speed-up…)
    category: 'professional',
  },
  {
    title: 'Equiflex',
    description:
      'Frontend for a finance management platform, built through Solsn Technologies. Responsive interface with smooth REST API integration.',
    stack: ['Next.js', 'REST APIs'],
    status: 'live',
    year: '', // TODO: year shipped
    url: 'https://www.equiflex.in/',
    github: '',
    result: '',
    category: 'client',
  },
  {
    title: 'MarkMe',
    description:
      'Browser-first Markdown editor with live side-by-side preview, DOMPurify sanitisation and offline auto-save. Built solo from idea to deployment.',
    stack: ['React', 'Next.js', 'Tailwind CSS', 'DOMPurify', 'Cloudflare Pages'],
    status: 'live',
    year: '2026',
    url: 'https://markme-5uj.pages.dev/',
    github: '',
    result: '',
    category: 'personal',
  },
  {
    title: 'Solsn Technologies',
    description:
      'Corporate site for my design and development agency. Clean UI, modern animation and SEO-focused build.',
    stack: ['Next.js', 'Tailwind CSS', 'Motion', 'Cloudinary'],
    status: 'live',
    year: '', // TODO: year launched
    url: 'https://solsn.com/',
    github: '',
    result: '',
    category: 'professional',
  },
  {
    title: 'Lean Build',
    description: 'Personal project exploring product development workflows and lean engineering.',
    stack: [],
    status: 'built',
    year: '', // TODO: year
    url: null, // TODO: repo or write-up link
    github: '',
    result: '',
    category: 'personal',
  },
];

export const experience = [
  {
    role: 'Technical Lead',
    org: 'Indiana Marketplace',
    period: '2025 – 2026',
    note: 'Led a B2B marketplace build: architecture, code review, CI/CD and production releases.',
  },
  {
    role: 'Founder & Full Stack Developer',
    org: 'Solsn Technologies',
    period: '2023 – present',
    note: 'Agency delivering web apps, e-commerce, branding and automation for clients.',
  },
];

export const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'Laravel',
  'PHP',
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'Docker',
  'CI/CD',
];

export const personalIdentity = {
  name: 'Manraj Chauhan',
  domain: 'manrajchauhan.com',
  role: 'Full Stack Developer',
  location: 'Navi Mumbai, India',
  // Shows a small "Available for work" badge in the hero when true.
  availableForWork: true,
};

export const contact = {
  email: 'manrajchauhan2023@gmail.com',
  github: 'https://github.com/manrajchauhan',
  linkedin: 'https://www.linkedin.com/in/mrmanrajchauhan/',
};

export const cvPath = '/Manraj_Chauhan_Resume2026.pdf';
