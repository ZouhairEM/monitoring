/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1340px'
      }
    },
    colors: {
      green: '#459a7d',
      lightGreen: '#c1e0d6',
      grey: '#e4e9ed',
      white: '#f3e4e4'
    }
  },
  plugins: [],
}