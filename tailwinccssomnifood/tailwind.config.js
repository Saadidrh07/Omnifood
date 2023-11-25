/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': '2rem 2rem 2rem 2rem 2rem 2rem',
      },
      fontFamily: {
        // Simple 16 column grid
        'zab': ['Rubik','sans-serif'] ,
        'mok' :['sans-serif'],
      }
      
    },
  },
  plugins: [],
}

