export const dynamic = 'force-static';
export const revalidate = false;

export default function manifest() {
  return {
    name: 'Manraj Chauhan — Technical Lead & Full Stack Developer',
    short_name: 'Manraj Chauhan',
    description: 'Portfolio and engineering notes by Manraj Chauhan.',
    start_url: '/',
    display: 'standalone',
    background_color: '#171714',
    theme_color: '#171714',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }],
  };
}
