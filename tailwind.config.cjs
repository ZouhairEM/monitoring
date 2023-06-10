/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      dropShadow: {
        md: '0 1px 1px rgba(74, 5, 211, 0.5)',
      },
    },
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    colors: {
      primary: {
        100: 'rgba(32, 162, 211, 0.1)',
        200: '#20a2d3',
        300: '#3E54AC',
      },
      black: {
        100: '#2e3139',
        200: '#1f2128',
        300: '#1A1A2E',
      },
      white: '#FFF',
      grey: '#d7dadc',
    },
  },
  plugins: [],
};
