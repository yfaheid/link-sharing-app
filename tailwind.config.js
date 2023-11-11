/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#633CFF",
        purple: "#BEADFF",
        "light-purple": "#EFEBFF",
        "dark-gray": "#333333",
        gray: "#737373",
        "light-gray": "#D9D9D9",
        "lighter-gray": "#FAFAFA",
        white: "#FFFFFF",
        red: "#FF3939",
      },
      fontFamily: {
        instrument: ["'Instrument Sans', sans-serif"],
      },
      spacing: {
        15: "3.85rem",
      },
      width: {
        90: "22rem",
        85: "21.5rem",
      },
      minHeight: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "75v": "75.8vh",
        "77v": "77.5vh",
        "80v": "80vh",
        "90v": "90vh",
      },
      maxHeight: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "75v": "75.8vh",
        "77v": "77.5vh",
        "80v": "80vh",
        "90v": "90vh",
      },
      minWidth: {
        "10v": "10vw",
        "20v": "20vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        "55v": "55.8vw",
        "60v": "60vw",
        "70v": "70vw",
        "77v": "77vw",
        "80v": "80vw",
        "85v": "85vw",
        "90v": "90vw",
      },
      maxWidth: {
        "10v": "10vw",
        "20v": "20vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        "55v": "55.8vw",
        "60v": "60vw",
        "70v": "70vw",
        "77v": "77vw",
        "80v": "80vw",
        "90v": "90vw",
      },
    },
  },
  plugins: [],
};
