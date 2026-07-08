/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ダーク×ネオン カラーパレット
        primary: '#0a0a0f',
        'primary-light': '#12121a',
        'primary-mid': '#1a1a2e',
        secondary: '#e94560',
        'secondary-glow': '#ff2d55',
        accent: '#00f0ff',
        'accent-dim': '#00c4d4',
        neon: {
          pink: '#ff2d55',
          cyan: '#00f0ff',
          purple: '#a855f7',
          gold: '#fbbf24',
        },
        surface: {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          hover: 'rgba(255, 255, 255, 0.08)',
          border: 'rgba(255, 255, 255, 0.1)',
        },
        dark: '#050508',
        light: '#f7f7f7',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'Montserrat', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'neon-pulse': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.3)' },
        },
        'glow-breathe': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(233, 69, 96, 0.3), 0 0 40px rgba(233, 69, 96, 0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(233, 69, 96, 0.6), 0 0 60px rgba(233, 69, 96, 0.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'count-flip': {
          '0%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(-90deg)' },
          '100%': { transform: 'rotateX(0deg)' },
        },
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'glow-breathe': 'glow-breathe 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'count-flip': 'count-flip 0.6s ease-in-out',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-pink': '0 0 20px rgba(233, 69, 96, 0.5), 0 0 40px rgba(233, 69, 96, 0.2)',
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.2)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
