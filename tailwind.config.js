/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lightGray: "#EBEBF2",
      gray: "#D5D5D5",
      black: "#0F0F0F",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Arvo", "serif"],
    },
    extend: {
      borderRadius: {
        md: "0.75rem",
      },
    },
  },
  plugins: [],
};
