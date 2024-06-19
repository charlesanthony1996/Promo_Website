/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js,vue}"],
    theme: {
      extend: {},
    },
    plugins: [
      require('daisyui'),
      require('postcss-import'),
    ],
  }
  
  