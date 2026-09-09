import './globals.css';
import { Inter, Newsreader, JetBrains_Mono } from 'next/font/google';
import SkipLink from '@/components/SkipLink';

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

export const metadata = {
  metadataBase: new URL('https://manrajchauhan.com'),
  title: {
    default: 'Manraj Chauhan — Full Stack Developer',
    template: '%s — Manraj Chauhan',
  },
  description: 'Full Stack Developer building web applications, backend systems, and digital products.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://manrajchauhan.com',
    siteName: 'Manraj Chauhan',
    title: 'Manraj Chauhan — Full Stack Developer',
    description: 'Full Stack Developer building web applications, backend systems, and digital products.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manraj Chauhan — Full Stack Developer',
    description: 'Full Stack Developer building web applications, backend systems, and digital products.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <SkipLink targetId="main-content" />
        {children}
      </body>
    </html>
  );
}
