/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    extend: {
      colors: {
        white: '#f1e9e9',
        blackbean: '#0c0101',
        marian: '#2A4494',
        madder: '#9e0031',
        night: '#151414',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  darkMode: 'class',
}
