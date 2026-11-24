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
  // Only small labels use the mono face; don't let it compete with the headline font for bandwidth.
  preload: false,
  variable: '--font-mono',
});

const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch(e){}`;

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf9f6' },
    { media: '(prefers-color-scheme: dark)', color: '#121211' },
  ],
};

const TITLE = 'Manraj Chauhan — Full Stack Developer in Navi Mumbai, India';
const DESCRIPTION =
  'Manraj Chauhan is a full stack developer in Navi Mumbai, India, building web applications, APIs and digital products with Next.js, React, Node.js and TypeScript.';

export const metadata = {
  metadataBase: new URL('https://manrajchauhan.com'),
  title: {
    default: TITLE,
    template: '%s — Manraj Chauhan',
  },
  description: DESCRIPTION,
  applicationName: 'Manraj Chauhan',
  authors: [{ name: 'Manraj Chauhan', url: 'https://manrajchauhan.com/' }],
  creator: 'Manraj Chauhan',
  publisher: 'Manraj Chauhan',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    type: 'profile',
    firstName: 'Manraj',
    lastName: 'Chauhan',
    locale: 'en_IN',
    url: 'https://manrajchauhan.com/',
    siteName: 'Manraj Chauhan',
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
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
