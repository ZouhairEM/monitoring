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
        // sm: '600px',
        // md: '728px',
        // lg: '1084px',
        // xl: '1440px'
      }
    },
    colors: {
      lightGreen: '#c1e0d6',
      green: '#459a7d',
      darkGreen: '#2d6350',
      grey: '#e4e9ed',
      lightGrey: '#eae8e8',
      black: {
        100: '#2e3139',
        200: '#1f2128',
        300: '#1A1A2E',
      },
      white: '#f3e4e4'
    },
  },
  plugins: [],
}