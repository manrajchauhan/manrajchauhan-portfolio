import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  metadataBase: new URL('https://manrajchauhan.com'),
  title: {
    default: 'Manraj Chauhan - Technical Lead & Full Stack Developer',
    template: '%s | Manraj Chauhan',
  },
  description: 'Portfolio of Manraj Chauhan, a Technical Lead and Full Stack Developer building high-performance web applications, scalable backend systems, and polished product experiences.',
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
    title: 'Manraj Chauhan - Technical Lead & Full Stack Developer',
    description: 'Portfolio of Manraj Chauhan, focused on full stack engineering, API systems, technical leadership, and high-performance product interfaces.',
    url: 'https://manrajchauhan.com',
    siteName: 'Manraj Chauhan Portfolio',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Manraj Chauhan - Technical Lead & Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manraj Chauhan - Technical Lead & Full Stack Developer',
    description: 'Personal portfolio of Manraj Chauhan, Technical Lead and Full Stack Developer.',
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
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
