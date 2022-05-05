const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  prefix: "tw-",
  theme: {
    screens: {
      "sm-tablet": "640px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      "lg-desktop": "1400",
    },

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
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        // '.btn': {
        //   padding: '.5rem 1rem',
        //   borderRadius: '.25rem',
        //   fontWeight: '600',
        // },
        // '.btn-blue': {
        //   backgroundColor: '#3490dc',
        //   color: '#fff',
        //   '&:hover': {
        //     backgroundColor: '#2779bd'
        //   },
        // },
        // '.btn-red': {
        //   backgroundColor: '#e3342f',
        //   color: '#fff',
        //   '&:hover': {
        //     backgroundColor: '#cc1f1a'
        //   },
        // },
        ".container": {
          color: "blue",
          width: "100%",
          padding: "0 15px",
          margin: "0 auto",

          tablet: {
            "max-width": "720px",
          },
          laptop: {
            "max-width": "720px",
          },
          desktop: {
            "max-width": "1140px",
          },
          "lg-desktop": {
            "max-width": "1340px",
          },
        },
      });
    }),
  ],
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
};
