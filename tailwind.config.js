module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    screens: {
      'xs': '375px',
      // => @media (min-width: 375px)

      'sm': '390px',
      // => @media (min-width: 390px) 

      '8plus': '414px',
       // => @media (min-width: 414px)

      'md': '768px',
      // => @media (min-width: 768px) 

      'lg': '1024px',
      // => @media (min-width: 1024px)

      'xl': '1280px',
      // => @media (min-width: 1280px) 

      '2xl': '1536px',
      // => @media (min-width: 1536px) 
    },

    extend: {
      fontFamily: {
        'quicksand': ["Quicksand", "sans-serif"],
        'dosis': ["Dosis", "sans-serif"],
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
