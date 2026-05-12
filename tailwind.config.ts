import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        bg: '#EDEEF4',
        'bg-2': '#E4E6EF',
        paper: '#F4F5FB',
        ink: '#0C1220',
        'ink-soft': '#4B5468',
        navy: '#101828',
        violet: '#5B21B6',
        'violet-2': '#7C3AED',
        'violet-light': '#EDE9FE',
        amber: '#B45309',
        'amber-2': '#D97706',
      },
    },
  },
  plugins: [],
}

export default config
