/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
      ".no-scrollbar::-webkit-scrollbar": {
      display: "none",
      },
      ".no-scrollbar": {
      "-ms-overflow-style": "none",
      "scrollbar-width": "none",
      },
      };
      addUtilities (newUtilities);
      },
  ],
}

