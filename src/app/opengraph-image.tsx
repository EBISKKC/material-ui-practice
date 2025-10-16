import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Material UI コンポーネント練習';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="white"
            style={{ marginRight: 20 }}
          >
            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
          </svg>
          <div style={{ fontSize: 80, fontWeight: 'bold' }}>Material UI</div>
        </div>
        <div style={{ fontSize: 48, opacity: 0.9 }}>コンポーネント練習</div>
        <div
          style={{
            fontSize: 28,
            opacity: 0.8,
            marginTop: 20,
            display: 'flex',
            gap: 20,
          }}
        >
          <span>Button</span>
          <span>•</span>
          <span>Table</span>
          <span>•</span>
          <span>Card</span>
          <span>•</span>
          <span>Grid</span>
          <span>•</span>
          <span>Modal</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
