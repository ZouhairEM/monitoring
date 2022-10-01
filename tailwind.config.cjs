/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'] 
      },
    },    
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '1084px',
        xl: '1440px'
      }
    },
    colors: {
      green: '#459a7d',
      lightGreen: '#c1e0d6',
      grey: '#e4e9ed',
      black: {
        100: '#25313e',
        200: '#141a40',
      },
      white: '#f3e4e4'
    },
  },
  plugins: [],
}