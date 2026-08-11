'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.replace('/yagate-vol38.html');
  }, []);

  return (
    <div style={{
      background: '#171310',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#F3EAD8',
      fontFamily: 'sans-serif'
    }}>
      <p>読み込み中...</p>
    </div>
  );
}
