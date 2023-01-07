/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-grad-purple':"#1C0C4B",
        'bg-grad-blue':"#0D1665"
      }
    },
  },
  plugins: [],
}
