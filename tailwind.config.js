module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#3385D9',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
