/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#f1e9e9',
        blackbean: '#0c0101',
        darkcyan: '#00807b',
        flame: '#dc6125',
        saffron: '#e2bd37',
        night: '#151414',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
