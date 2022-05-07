const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
const _ = require("lodash");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  prefix: "tw-",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
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
        },

        ".font-title": {
          "font-size": "2.125rem",
          "font-weight": "700",
          "line-height": "3.0625rem",
        },

        ".font-sec": {
          "font-size": "1.875rem",
          "font-weight": "700",
          "line-height": "2.625rem",
        },

        ".font-body": {
          "font-size": "1.125rem",
          "font-weight": "400",
          "line-height": "2rem",
        },
        //SM SCREENS ABOVE
        [`@media (min-width: 640px)`]: {
          ".container": {
            "max-width": "640px",
          },
        },
        //MD SCREENS ABOVE
        [`@media (min-width: 768px)`]: {
          ".container": {
            "max-width": "768px",
          },
        },
        //LG SCREENS ABOVE
        [`@media (min-width: 1024px)`]: {
          ".container": {
            "max-width": "1024px",
          },
          ".font-title": {
            "font-size": "3.125rem",
            "line-height": "3.75rem",
          },
        },
        //XL SCREENS ABOVE
        [`@media (min-width: 1280px)`]: {
          ".container": {
            "max-width": "1280px",
          },
        },
        //2XL SCREENS ABOVE
        [`@media (min-width: 1536px)`]: {
          ".container": {
            "max-width": "1530px",
          },
        },
      });
    }),
  ],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
};
