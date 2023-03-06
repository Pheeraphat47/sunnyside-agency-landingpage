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
        'sec-three-left': "url('./src/assets/images/desktop/image-graphic-design.jpg')",
        'sec-three-right': "url('./src/assets/images/desktop/image-photography.jpg')",
      },
      fontFamily: {
        Barlow: ['Barlow', 'sans-serif'],
        Fraunces:['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
}
