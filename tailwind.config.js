//  /** @type {import('tailwindcss').Config} */
//  export default {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }




const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgba(34, 34, 48, 1)', 
        cardColor : "#1E1E1E",
        tableRowColor : 'rgba(47, 47, 60, 1)',
        progressBarBgColor : "#2F2F3C",
        progressForegroundColor : "#F35252",

      }
    },
  },
  plugins: [],
});