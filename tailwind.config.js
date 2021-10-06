module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    objectPosition: {
      'center-top': 'center top',
    },
    extend: {
      screens: {
        'xs': '500px',
        'xl': '1630px',
      },
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
