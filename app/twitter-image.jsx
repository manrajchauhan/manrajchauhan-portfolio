import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'Manraj Chauhan — Full Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: '#faf9f6',
          color: '#1a1917',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ fontSize: 28, color: '#5c5852', letterSpacing: 1 }}>manrajchauhan.com</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 84, lineHeight: 1.1 }}>Manraj Chauhan</div>
          <div style={{ fontSize: 48, color: '#5c5852', fontStyle: 'italic', marginTop: 16 }}>
            Full Stack Developer
          </div>
        </div>
        <div style={{ fontSize: 26, color: '#5c5852' }}>
          Next.js · Node.js · TypeScript · MongoDB · PostgreSQL
        </div>
      </div>
    ),
    size,
  );
}
