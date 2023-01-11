/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#4dabf7",
        secondary: "#2F2E41",
        tintLight: "#edf7fe",
        tintDark: "#459ade",
      },
      fontFamily: {
        aleo: ["Aleo", "sans-serif"]
      },
    },
  },
  plugins: [],
}