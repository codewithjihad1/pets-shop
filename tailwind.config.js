/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js,css}"],
  theme: {
    extend: {
      fontFamily: {
        "sora": "'Sora', serif",
        "display": "'ADLaM Display', serif"
      },
      colors: {
        "black-1": "#111111",
        "primary": "rgb(255, 220, 38)",
      }
    },
  },
  plugins: [require('daisyui')],
}

