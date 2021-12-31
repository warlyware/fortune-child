const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      yellow: {
        ...colors.yellow,
        400: '#faca42'
      }
    },
    extend: {},
  },
  plugins: [],
}
