/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Define a custom breakpoint for screens up to 320px
        'xsm': { 'max': '940px' },
      },
    },
  },
  plugins: [],
}