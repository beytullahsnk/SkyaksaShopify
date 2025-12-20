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
        // Violet Skyaksa
        skyaksa: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          DEFAULT: '#7C3AED',
        },
        // Vert fluo Shopify
        shopify: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#3f6212',
          900: '#365314',
          fluo: '#CDFF00',
          DEFAULT: '#95BF47',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-skyaksa': 'linear-gradient(135deg, #7C3AED 0%, #9333ea 100%)',
        'gradient-shopify': 'linear-gradient(135deg, #95BF47 0%, #84cc16 100%)',
        'gradient-hero': 'linear-gradient(180deg, #ffffff 0%, #faf5ff 100%)',
        'gradient-dark': 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
      },
      boxShadow: {
        'glow-purple': '0 0 40px rgba(124, 58, 237, 0.3)',
        'glow-green': '0 0 40px rgba(205, 255, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config

