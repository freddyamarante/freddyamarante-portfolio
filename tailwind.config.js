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
        darkcyan: '#2A4494',
        flame: '#9e0031',
        night: '#151414',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
