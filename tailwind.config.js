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
        primary: '#5645F5',
        secondary: '#F4B746',
        accent: {
          yellow: '#FEEBB4',
          blue: '#45D5F5',
          purple: '#8645F5',
          '01': '#8645F5',
          '02': '#45D5F5',
          '03': '#FEEBB4'
        },
        dark: '#070330',
        light: '#F6F5FE',
        hover: '#E5E3FE',
        tc: {
          '01': '#CDCDD6',
          '02': '#ACABBA',
          '03': '#838197',
          '04': '#5A5775',
          '05': '#302D53',
          '06': '#070330',
          '07': '#060328',
          '08': '#050220',
          '09': '#040218',
          '10': '#020110',
          '11': '#01010A',
          main: '#2A0079',
          secondary: '#5A5775',
          'white-ish': '#F6F5FE',
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
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
        Karla: ["Karla", "sans-serif"],
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
