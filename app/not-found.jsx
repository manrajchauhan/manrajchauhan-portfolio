import Link from 'next/link';

// Override the site-wide index rule so the 404 page never shows in search results.
export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main-content" className="page-container">
      <h1 className="hero-headline">Page not found</h1>
      <p className="hero-bio">
        This page doesn&rsquo;t exist. <Link href="/">Go to Manraj Chauhan&rsquo;s homepage</Link>.
      </p>
    </main>
  );
}
