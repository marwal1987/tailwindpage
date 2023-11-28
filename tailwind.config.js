/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// På något sätt ska man lyckas få in google fonts
// const defaultTheme = require('tailwindcss/defaultTheme');

// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         inter: ['"Inter"', ...defaultTheme.fontFamily.sans]
//       }
//     }
//   },
// }
