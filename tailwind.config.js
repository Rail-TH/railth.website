/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    screens: {
      'firstbreak': '990px',
      'secondbreak': '620px',
      'thirdbreak': '400px',
      'lastbreak': '320px',
    },
    fontFamily: {
      'sans': ["Roboto", 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

