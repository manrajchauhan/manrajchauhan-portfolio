import './globals.css';
import { Inter, Newsreader, JetBrains_Mono } from 'next/font/google';
import SkipLink from '@/components/SkipLink';
import JsonLd from '@/components/JsonLd';

const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const serif = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch(e){}`;

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf9f6' },
    { media: '(prefers-color-scheme: dark)', color: '#121211' },
  ],
};

export const metadata = {
  metadataBase: new URL('https://manrajchauhan.com'),
  title: {
    default: 'Manraj Chauhan — Full Stack Developer',
    template: '%s — Manraj Chauhan',
  },
  description: 'Full Stack Developer in Navi Mumbai building web applications, backend systems and digital products with Next.js, Node.js and TypeScript.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://manrajchauhan.com',
    siteName: 'Manraj Chauhan',
    title: 'Manraj Chauhan — Full Stack Developer',
    description: 'Full Stack Developer in Navi Mumbai building web applications, backend systems and digital products with Next.js, Node.js and TypeScript.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manraj Chauhan — Full Stack Developer',
    description: 'Full Stack Developer in Navi Mumbai building web applications, backend systems and digital products with Next.js, Node.js and TypeScript.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Apply a saved theme before first paint to avoid a flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd />
      </head>
      <body>
        <SkipLink targetId="main-content" />
        {children}
      </body>
    </html>
  );
}
