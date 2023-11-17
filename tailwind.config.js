/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./**/*.{html,js}"],
  theme: {
    fontFamily: {
      "manrope": ['Manrope','sans-serif']
    },
    extend: {
      colors: {
        "background": '#292929',
        "secondary1": '#DEDEDE',
        "secondary2": '#959595',
        "secondary3": '#9D9D9D',
      }
    },
  },
  plugins: [],
}