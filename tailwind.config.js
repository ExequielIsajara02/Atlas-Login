/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      fontFamily: {
        'crombie-font': ['RedHatDisplay', 'sans-serif'],
      },
      animation: {
        "flip-horizontal": "flip-horizontal 1s ease-in-out",
      },
      "flip-horizontal": {
        "0%": {
          transform: "rotateY(0deg)",
        },
        "100%": {
          transform: "rotateY(180deg)",
        },
      },
      backgroundImage: {
        'world': "url('./assets/img/world_map.jpeg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },

  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
