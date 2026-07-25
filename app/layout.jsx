import { Cormorant_Garamond, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import JsonLd from '@/components/JsonLd';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://manrajchauhan.com'),
  title: {
    default: 'Manraj Chauhan — Technical Lead & Full Stack Developer',
    template: '%s | Manraj Chauhan',
  },
  description: 'Manraj Chauhan is a Technical Lead & Full Stack Developer specializing in high-performance web applications, scalable system architectures, React, Next.js, Node.js, and API engineering.',
  keywords: [
    'Manraj Chauhan',
    'Manraj Chauhan Portfolio',
    'Technical Lead',
    'Full Stack Developer',
    'Software Engineer',
    'System Architecture',
    'React Developer',
    'Next.js Developer',
    'Node.js Architect',
    'MarkMe Workspace',
    'Frontend Developer',
    'Backend Engineer',
  ],
  authors: [{ name: 'Manraj Chauhan', url: 'https://manrajchauhan.com' }],
  creator: 'Manraj Chauhan',
  publisher: 'Manraj Chauhan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://manrajchauhan.com',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Manraj Chauhan — Technical Lead & Full Stack Developer',
    description: 'Portfolio of Manraj Chauhan. Technical Lead & Full Stack Developer specializing in scalable web platforms, Next.js, and system architecture.',
    url: 'https://manrajchauhan.com',
    siteName: 'Manraj Chauhan Portfolio',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Manraj Chauhan — Technical Lead & Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manraj Chauhan — Technical Lead & Full Stack Developer',
    description: 'Personal portfolio of Manraj Chauhan. Technical Lead & Full Stack Developer specializing in high-performance web applications.',
    images: ['/hero.png'],
    creator: '@mrmanrajchauhan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jetbrainsMono.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-mono bg-parchment text-off-black antialiased selection:bg-periwinkle-mist selection:text-off-black min-h-screen">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
