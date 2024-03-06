/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-gray' : '#352F44',
        'light-gray' : '#5C5470',
        'light-gray2' : '#B9B4C7',
        'light-gray3' : '#FAF0E6'
      }
    },
  },
  plugins: [],
}

