export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap() {
  return [
    {
      url: 'https://manrajchauhan.com',
      lastModified: '2026-07-25',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
