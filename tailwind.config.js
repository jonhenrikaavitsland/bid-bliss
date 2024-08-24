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
    },
  },
  plugins: [],
};
