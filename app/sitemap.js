export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://manrajchauhan.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
