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
        // sm: '600px',
        // md: '728px',
        // lg: '1084px',
        // xl: '1440px'
      },
    },
    colors: {
      primary: {
        100: 'rgba(101, 93, 187, 0.1)',
        200: '#655DBB',
        300: '#3E54AC',
      },
      secondary: '#00a3e1',
      black: {
        100: '#2e3139',
        200: '#1f2128',
        300: '#1A1A2E',
      },
      white: '#FFF',
    },
  },
  plugins: [],
};
