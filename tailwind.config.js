/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E85382",
        dark: "#F1F1F1",
        gray: "#868686",
        g100: "#E1E1E1",
        g200: "#FCFCFC",
      },
    },
    fontFamily: {
      clash: ["clash"],
      general: ["general"],
    },
  },
  plugins: [],
};
