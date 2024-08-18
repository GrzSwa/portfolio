/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "background-primary": "#f9f6f6",
      "background-secondary": "#fbfbfb",
      "background-primary-dark": "#18191e",
      "background-secondary-dark": "#121317",
      primary: "#1faadb",
      secondary: "#1187b8",
      third: "#0f6d95",
      four: "#115b7b",
      white: "#ffffff",
      black: "#000000",
      testing: "#C4004B",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        "2md": "853px",
        "4k": "1920px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
