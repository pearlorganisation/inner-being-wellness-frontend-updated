/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#F3F7F4",
          100: "#E3EEE6",
          200: "#C7DDCD",
          400: "#7FAE8D",
          500: "#5E9770",
          600: "#4A7B5A",
          700: "#3C6149",
        },
      },
    },
  },
  plugins: [],
};