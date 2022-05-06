const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  prefix: "tw-",
  theme: {
    colors: {
      current: "currentColor",
      transparent: "transparent",
      "header-col": "#1B1C20",
      "body-col": "#383A47",
      "text-3": "#70727F",
      "text-4": "#CDCED8",
      "bg-1": "#797B89",
      "bg-2": "#E8E9ED",
      "bg-3": "#F8F8FA",
      "pry-col": "#DF678C",
      "sec-col": "#797B89",
      "ter-col": "#FB8E0B",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          padding: "0 15px",
          margin: "0 auto",

          sm: {
            "max-width": "720px",
          },
          md: {
            "max-width": "992px",
          },
          lg: {
            "max-width": "1140px",
          },
          xl: {
            "max-width": "1340px",
          },
        },
      });
    }),
  ],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
};
