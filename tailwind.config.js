const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
       '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
       '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
    },

    screens: {
      'xs': '360px',
      // => @media (min-width: 375px)

      'sm': '640px',
      // => @media (min-width: 390px) 

      'md': '768px',
      // => @media (min-width: 768px) 

      'lg': '1024px',
      // => @media (min-width: 1024px)

      'xl': '1280px',
      // => @media (min-width: 1280px) 

      'xxl': '1420px',
      // => @media (min-width: 1420px)

      '2xl': '1536px',
      // => @media (min-width: 1536px) 
    },

    extend: {

      backgroundImage: (theme) => ({
        'clubhouse-img': "url('./images/clubhouse.jpg')",
        'river-img': "url('./images/river.jpg')",
      }),

      colors: colors,

      fontFamily: {
        'quicksand': ["Quicksand", "sans-serif"],
        'dosis': ["Dosis", "sans-serif"],
        'poiret': ["Poiret One", "cursive"],
        'voltaire': ["Voltaire", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      textColor: ['visited'],
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
