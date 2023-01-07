/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-grad-purple": "#1C0C4B",
        "bg-grad-blue": "#0D1665",
        "txt-teal": "#21AE95",
        "txt-purple": "#7864F3",
      },
      fontFamily: {
        Stalemate: ["Stalemate", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
