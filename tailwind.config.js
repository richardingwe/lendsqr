const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: '#213F7D',
        secondary: '#39CDCC',
        tc: {
          dark: '#213F7D',
          light: '#545F7D'
        },
        status: {
          success: {
            '10': '#F3FEF3',
            '100': '#0D6211',
          },
          warning: {
            '10': '#FFF9EE',
            '100': '#FFA301',
          },
          error: {
            '10': '#FEE4E5',
            '100': '#D94143',
          },
          information: {
            '10': '#F2F8FF',
            '100': '#004FA9',
          },

        },
      },
      fontFamily: {
        AvenirNext: ["Avenir Next", "sans-serif"],
        WorkSans: ["Work Sans", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};
