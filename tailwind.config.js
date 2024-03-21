/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color-bright": "#fa7727", // Change this to your desired color
      },
      fontFamily: {
        "chivo-mono": ["Chivo Mono", "monospace"], // Change this to your desired font
      },
    },
  },
  plugins: [],
};
