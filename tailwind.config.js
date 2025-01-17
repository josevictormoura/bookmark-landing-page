/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      rubik: ["Rubik" ,"seif"]
    },
    container:{
      center: true,
      padding:{
        default: '.5rem',
        sm:'1rem'
      }
    },
    extend: {
      colors: {
        "soft-blue": "hsl(231, 69%, 60%)",
        "soft-red": "hsl(0, 94%, 66%)",
        "grayish-blue": "hsl(229, 8%, 60%)",
        "Very-dark-blue": "hsl(229, 31%, 21%)"
      }
    },
  },
  plugins: [],
}
