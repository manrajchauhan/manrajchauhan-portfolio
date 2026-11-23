export const dynamic = 'force-static';

export default function manifest() {
  return {
    name: 'Manraj Chauhan — Full Stack Developer',
    short_name: 'Manraj',
    start_url: '/',
    display: 'browser',
    background_color: '#faf9f6',
    theme_color: '#faf9f6',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}
