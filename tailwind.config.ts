import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-poppins)'],
      },
      colors: {
        primary: '#4B3CFA',
        secondary: '#6E56FF',
        'accent-light': '#B3A8FF',
        'text-main': '#1A1A1A',
        'text-secondary': '#666666',
        'background-light': '#F9FAFB',
        'background-dark': '#F0F2FF',
        success: '#10B981',
        danger: '#EF4444',
      },
    },
  },
  plugins: [],
}
export default config
