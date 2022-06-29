/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#f3f9f4',
        'secondary': '#91b595',
        'tertiary': '#42934a',
      },
      backgroundImage: {
        'profileBG': "url('/public/cover.jpg')"
      }
    },
  },
  plugins: [],
}
