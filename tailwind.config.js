/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c24638",
        "primary-light": "#c76156",
        "button-light-red": "#c66a6a",
      },
      fontSize: {
        "2xs": "0.7rem",
        "3xs": "0.6rem",
        "4xs": "0.5rem",
        "5xs": "0.4rem",
        "6xs": "0.375rem",
        "7xs": "0.25rem",
      },
    },
  },
  plugins: [],
};
