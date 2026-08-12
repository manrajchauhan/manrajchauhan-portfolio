import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import JsonLd from '@/components/JsonLd';
import { LeadCaptureProvider } from '@/components/ui/LeadCaptureContext';
import LeadCaptureModal from '@/components/ui/LeadCaptureModal';

export const metadata = {
  metadataBase: new URL('https://manrajchauhan.com'),
  title: {
    default: 'Manraj Chauhan | Technical Lead & Full Stack Developer',
    template: '%s | Manraj Chauhan',
  },
  description: 'Manraj Chauhan is a Technical Lead and Full Stack Developer building high-performance web applications, scalable backend systems, and polished product experiences.',
  keywords: [
    'Manraj Chauhan',
    'Manraj Chauhan Portfolio',
    'Technical Lead',
    'Full Stack Developer',
    'Full Stack Engineer',
    'System Architecture',
    'React Developer',
    'Next.js Developer',
    'Node.js Architect',
    'MarkMe Workspace',
    'Frontend Engineering',
    'Backend Engineering',
    'API Design',
    'TypeScript Developer',
    'React Developer Portfolio',
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
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: ['/icon.svg'],
    apple: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    title: 'Manraj Chauhan | Technical Lead & Full Stack Developer',
    description: 'Technical leadership, full stack engineering, system architecture, and high-performance product experiences by Manraj Chauhan.',
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
    title: 'Manraj Chauhan | Technical Lead & Full Stack Developer',
    description: 'Technical leadership, full stack engineering, and system architecture by Manraj Chauhan.',
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
        <LeadCaptureProvider>
          <LenisProvider>
            {children}
            <LeadCaptureModal />
          </LenisProvider>
        </LeadCaptureProvider>
      </body>
    </html>
  );
}
