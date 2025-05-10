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
        // customBlue: 'rgba(34, 34, 48, 1)',
        // cardColor: "#1E1E1E",
        // tableRowColor: 'rgba(47, 47, 60, 1)',
        // commonBGColor: "#2F2F3C",
        // redColor: "#F35252",
        // bmBgColor: "#1A1A28",
        // bmComponentBgColor: "#222230",


        // new define color
        sidebarBgColor: "#14141F",
        commonBgColor: "#1A1A28",
        extraLightGray : "#2F2F3C",
        lightGray: "#222230",
        redColor: "#F35252",
        darkGreen : "#283D31",
        lightGreen : "#1F9254",
        darkRed : "#3C2626",
        paraTextColor : "#9A9A9A",
        iconBgColor:"#39394A"
      }
    },
  },
  plugins: [],
});