/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4175FC",
        secondary: "#283857",
        darkPrimary: "#0E1727",
        text: "#FAFAFA",
        contrast: "#222222",
      },
    },
  },
  plugins: [],
};
