const content = ["./src/**/*.{js,jsx}"];
const colors = require("tailwindcss/colors");

module.exports = {
  content: content,
  theme: {
    extend: {
      colors: {
        myPrimary: "#b8eaf6",
      },
      // colors: {
      //   rose: colors.rose,
      //   purple: colors.purple,
      // },
    },
  },
  plugins: [],
};
