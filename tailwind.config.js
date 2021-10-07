module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '390px',
      'xl': '1630px',
    },
    objectPosition: {
      'center-top': 'center top',
    },
    extend: {
      fontFamily: {
        'quicksand': ["Quicksand", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
