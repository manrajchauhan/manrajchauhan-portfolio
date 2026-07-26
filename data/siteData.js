export const navItems = ['Home', 'About', 'Work', 'Blog', 'Service'];

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
    slug: 'markme-workspace',
    number: '001.',
    title: 'MarkMe Workspace',
    year: '2026',
    type: 'Live App',
    image: '/markme.png',
    className: 'project-card--large',
    href: '/work/markme-workspace',
    externalUrl: 'https://markme-5uj.pages.dev/',
    githubUrl: 'https://github.com/manrajchauhan',
    role: 'Lead Architect & Full Stack Developer',
    timeline: '3 Months',
    stack: ['React', 'Next.js 16', 'DOMPurify', 'Tailwind CSS', 'Cloudflare Pages'],
    summary: 'A browser-first Markdown editing application featuring real-time side-by-side split rendering, local storage persistence, DOMPurify sanitization, and Cloudflare Pages deployment.',
    challenge: 'Building a zero-latency live preview editor capable of handling large Markdown documents without blocking main UI render loops or causing cursor positioning jumps.',
    solution: 'Engineered a custom debounced AST parser pipeline with DOMPurify sanitization, synchronized double-scroll binding, and offline-first local storage auto-save state persistence.',
    highlights: [
      'Real-time side-by-side Markdown & HTML split preview',
      'DOMPurify sanitization preventing XSS attacks',
      'Auto-save persistence across tab reloads & offline state',
      'Sub-50ms render latency on document updates',
    ],
  },
];

export const articles = [
  {
    slug: 'building-interfaces-that-feel-fast',
    date: 'July 2026',
    read: '4 min read',
    title: 'Building interfaces that feel fast before users think about speed',
    subtitle: 'Why perceived performance, optimistic updates, and layout stability matter more than benchmark numbers alone.',
    tag: 'Frontend systems',
    href: '/blog/building-interfaces-that-feel-fast',
    author: 'Manraj Chauhan',
    authorRole: 'Technical Lead & Full Stack Developer',
    paragraphs: [
      'Performance in modern web applications is as much psychological as it is computational. While raw TTFB and bundle size numbers are essential baselines, users judge speed based on how instantly an interface acknowledges their actions.',
      'Optimistic UI updates give users immediate feedback before a server round-trip completes. When a user clicks a button or toggles a setting, updating the DOM immediately with a fallback error-reversal mechanism creates an experience that feels instantaneous.',
      'Combining smooth CSS transitions, layout-shift containment, and localized micro-loaders turns ordinary web apps into fluid, app-like experiences that feel fast before users even consider network latency.',
    ],
    codeSnippet: `// Example: Optimistic UI state update pattern
const toggleBookmark = async (id) => {
  setItems(prev => prev.map(item => 
    item.id === id ? { ...item, saved: !item.saved } : item
  ));

  try {
    await api.post(\`/bookmarks/\${id}\`);
  } catch (err) {
    // Rollback optimistic state on failure
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, saved: !item.saved } : item
    ));
    toast.error("Failed to update bookmark");
  }
};`,
  },
  {
    slug: 'clear-api-boundaries-full-stack-teams',
    date: 'July 2026',
    read: '3 min read',
    title: 'How clear API boundaries make full stack teams move with confidence',
    subtitle: 'Decoupling frontend iteration from backend implementation using TypeScript contracts and OpenAPI specifications.',
    tag: 'API design',
    href: '/blog/clear-api-boundaries-full-stack-teams',
    author: 'Manraj Chauhan',
    authorRole: 'Technical Lead & Full Stack Developer',
    paragraphs: [
      'In fast-moving product teams, backend and frontend developers often block each other when API shapes change mid-sprint. Establishing explicit, shared data contracts eliminates friction early.',
      'Using OpenAPI schemas or TypeScript interface packages allows frontend developers to build against mock endpoints while backend engineers implement database logic concurrently.',
      'Strict input sanitization, consistent error payload schemas, and versioned route paths ensure that microservice updates never silently break client UI features.',
    ],
    codeSnippet: `// Standardized API Response Schema
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  meta?: {
    page: number;
    total: number;
  };
  error?: {
    code: string;
    message: string;
  };
}`,
  },
  {
    slug: 'designing-portfolio-experiences-technical-taste',
    date: 'July 2026',
    read: '5 min read',
    title: 'Designing portfolio experiences that sell technical taste',
    subtitle: 'Why grid discipline, restrained typography, and motion details reflect engineering standards.',
    tag: 'UI direction',
    href: '/blog/designing-portfolio-experiences-technical-taste',
    author: 'Manraj Chauhan',
    authorRole: 'Technical Lead & Full Stack Developer',
    paragraphs: [
      'A technical portfolio is not just a collection of links—it is a live proof of craftsmanship. It demonstrates how an engineer thinks about typography, visual hierarchy, user interaction, and code organization.',
      'Editorial typography, strict grid geometry, and subtle micro-interactions communicate technical confidence. Rather than cluttering the screen with flashy gimmicks, focus on crisp contrast, fast load times, and effortless navigation.',
      'When code quality is matched with design clarity, visitors immediately sense technical taste before reading a single line of resume copy.',
    ],
    codeSnippet: `/* Monad Editorial Grid System */
.section-layout {
  display: grid;
  grid-template-columns: minmax(180px, 240px) 1fr minmax(200px, 260px);
  gap: 56px;
  align-items: start;
}`,
  },
];

export const footerColumns = [
  {
    title: 'Pages',
    links: ['Home', 'About', 'Work', 'Blog', 'Service'],
  },
  {
    title: 'Connect & Links',
    links: ['GitHub', 'LinkedIn', 'Email', 'Sitemap'],
  },
];

export function getAnchorForLabel(label) {
  const routes = {
    Home: '/',
    About: '/#about',
    Pages: '/blog',
    Blog: '/blog',
    Project: '/work',
    Work: '/work',
    Service: '/#service',
    Contact: 'mailto:contact@manrajchauhan.com',
    GitHub: 'https://github.com/manrajchauhan',
    LinkedIn: 'https://www.linkedin.com/in/mrmanrajchauhan/',
    Email: 'mailto:contact@manrajchauhan.com',
    Sitemap: '/sitemap',
  };

  return routes[label] || '/work';
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug) || null;
}
