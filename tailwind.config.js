/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["index.html", "src/index.js"],
  theme: {
    extend: {      
      fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    }},
  },
  plugins: [require('daisyui')],
}

