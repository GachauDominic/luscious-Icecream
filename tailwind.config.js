/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./build/**/*.{html,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
      screens: {
        'wide': 'var(--aspect-wide)',
        'tall': 'var(--aspect-tall)',
      },
      keyframes:{
        'open-menu':{
          '0%' :{transform: 'scaleY(0)' },
          '80%' :{transform: 'scaleY(1.2)' },
          '100%' :{transform: 'scaleY(1)'}
        },
        animation: {
          'open-menuss': 'open-menu 0.65s ease-in-out forwards'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
