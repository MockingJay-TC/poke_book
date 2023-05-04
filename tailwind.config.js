/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E85382",
      },
    },
    fontFamily: {
      clash: ["clash"],
      general: ["general"],
    },
  },
  plugins: [],
};
