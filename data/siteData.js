export const navItems = ['Home', 'About', 'Pages', 'Project', 'Service'];

export const services = [
  {
    id: '01',
    title: 'Web Apps & Product Frontends',
    copy: 'Crafting fast, responsive interfaces with clean component systems and precise user flows.',
  },
  {
    id: '02',
    title: 'Design & Development',
    copy: 'Building polished, production-ready websites that unite strong visuals with scalable code.',
  },
  {
    id: '03',
    title: 'System Architecture',
    copy: 'Designing resilient app structures, API contracts, and foundations that can grow with teams.',
  },
  {
    id: '04',
    title: 'Motion & Interaction',
    copy: 'Bringing interfaces to life through thoughtful motion, transitions, and interactive details.',
  },
];

export const projects = [
  {
    number: '001.',
    title: 'MarkMe Workspace',
    year: '2026',
    type: 'Live App',
    image: '/markme.png',
    className: 'project-card--large',
    href: 'https://markme-5uj.pages.dev/',
  },
  {
    number: '002.',
    title: 'Portfolio System',
    year: '2026',
    type: 'Website',
    image: '/hero.png',
    className: 'project-card--portrait',
    href: 'mailto:contact@manrajchauhan.com',
  },
  {
    number: '003.',
    title: 'Backend Architecture',
    year: '2025',
    type: 'API Systems',
    image: null,
    className: 'project-card--abstract project-card--wide',
    href: 'mailto:contact@manrajchauhan.com',
  },
  {
    number: '004.',
    title: 'Realtime Interfaces',
    year: '2025',
    type: 'WebSockets',
    image: null,
    className: 'project-card--signal',
    href: 'mailto:contact@manrajchauhan.com',
  },
  {
    number: '005.',
    title: 'Technical Lead Playbooks',
    year: '2025',
    type: 'Leadership',
    image: '/hero.png',
    className: 'project-card--mono',
    href: 'mailto:contact@manrajchauhan.com',
  },
];

export const articles = [
  {
    date: 'July 2026',
    read: '4 min read',
    title: 'Building interfaces that feel fast before users think about speed',
    tag: 'Frontend systems',
  },
  {
    date: 'July 2026',
    read: '3 min read',
    title: 'How clear API boundaries make full stack teams move with confidence',
    tag: 'API design',
  },
  {
    date: 'July 2026',
    read: '5 min read',
    title: 'Designing portfolio experiences that sell technical taste',
    tag: 'UI direction',
  },
];

export const footerColumns = [
  {
    title: 'Pages',
    links: ['Home', 'About', 'Work', 'Service', 'Contact'],
  },
  {
    title: 'Inner Pages',
    links: ['Project Single', 'Service Single', 'Blog Single', 'Style Guide'],
  },
  {
    title: 'Utility Pages',
    links: ['GitHub', 'LinkedIn', 'Email', 'Sitemap'],
  },
];

export function getAnchorForLabel(label) {
  const routes = {
    Home: '#home',
    About: '#about',
    Pages: '#pages',
    Project: '#project',
    Work: '#project',
    Service: '#service',
    Contact: 'mailto:contact@manrajchauhan.com',
    GitHub: 'https://github.com/manrajchauhan',
    LinkedIn: 'https://www.linkedin.com/in/mrmanrajchauhan/',
    Email: 'mailto:contact@manrajchauhan.com',
    Sitemap: '/sitemap',
  };

  return routes[label] || '#project';
}
