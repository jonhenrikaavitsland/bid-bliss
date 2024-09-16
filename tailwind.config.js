/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mjs,cjs}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        serif: ['Roboto Slab', ...defaultTheme.fontFamily.serif],
      },
      boxShadow: {
        customShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        scrollIndicator: 'inset 0 -20px 20px -10px rgba(0, 0, 0, 0.2)',
      },
      keyframes: {
        loaderAnimation: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        loaderAnimation: 'loaderAnimation 1.2s linear infinite',
      },
      spacing: {
        5.5: '22px',
        13: '52px',
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
      xsm: { max: '450px' },
      sm: { min: '451px' },
      xmd: { max: '834px' },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFF',
      neutralBg: '#ECF0F1',
      primary: '#2C3E50',
      secondary: '#3498DB',
      neutralTxt: '#151717',
      error: '#E74C3C',
      correct: '#2ECC71',
      hoverPrimary: '#3C4F64',
      hoverSecondary: '#2A86C1',
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-0': {
          'animation-delay': '0s',
        },
        '.animation-delay-4': {
          'animation-delay': '-0.4s',
        },
        '.animation-delay-8': {
          'animation-delay': '-0.8s',
        },
        '.animation-delay-12': {
          'animation-delay': '-1.2s',
        },
        '.animation-delay-16': {
          'animation-delay': '-1.6s',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
