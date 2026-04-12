import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#2c1a0d',
          light: '#4a2f1a',
        },
        cream: {
          DEFAULT: '#faf7f0',
        },
        parchment: '#ece4d7',
        sage: '#4a7859',
        gold: '#b8882e',
        warm: '#7a6456',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee var(--duration, 40s) linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-50% - 0.75rem))' },
        },
      },
    },
  },
  plugins: [],
}

export default config
