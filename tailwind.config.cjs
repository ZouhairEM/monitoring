/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '6xl': 'var(--text-6xl)',
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
        100: 'var(--primary-100)',
        200: 'var(--primary-200)',
        300: 'var(--primary-300)',
      },
      black: {
        100: '#2e3139',
        200: '#1f2128',
        300: '#1A1A2E',
      },
      white: '#FFF',
      grey: {
        100: '#ededed',
        200: '#d7dadc',
      },
    },
  },
  plugins: [],
};
