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
        bg: '#F4F6FB',
        'bg-2': '#EAECF4',
        paper: '#FFFFFF',
        ink: '#0C1220',
        'ink-soft': '#4A5568',
        navy: '#0D1526',
        blue: '#1B48E8',
        'blue-2': '#4169E1',
        'blue-light': '#E8EEFF',
        amber: '#C47F17',
        'amber-2': '#D97706',
        violet: '#1B48E8',
        'violet-2': '#4169E1',
      },
    },
  },
  plugins: [],
}

export default config
