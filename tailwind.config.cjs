/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'header': "url('./src/assets/images/desktop/image-header.jpg')",
      }
    },
  },
  plugins: [],
}
