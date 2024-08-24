/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./**/index.html', './src/**/*.{js,ts,jsx,tsx,mjs,cjs}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        serif: ['Roboto Slab', ...defaultTheme.fontFamily.serif],
      },
    },
    fontSize: {
      sm: ['0.875rem', '0.875rem'],
      base: ['1rem', '1rem'],
      lg: ['1.25rem', '1.25rem'],
      xl: ['1.5rem', '1.5rem'],
      xxl: ['2rem', '2rem'],
    },
    screens: {
      md: '834px',
      lg: '1440px',
    },
    colors: {
      transparent: 'transparent',
      white: '#FFF',
      neutralBg: '#ECF0F1',
      primary: '#2C3E50',
      secondary: '#3498DB',
      neutralTxt: '#7F8C8D',
      error: '#E74C3C',
      correct: '#2ECC71',
      hoverPrimary: '#3C4F64',
      hoverSecondary: '#2A86C1',
    },
  },
  plugins: [],
};
