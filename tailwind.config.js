/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      abc: ['Paytone One', 'sans-serif'],
      gabarito: ['Gabarito', 'sans-serif']
    },
  },
  plugins: [],
}

