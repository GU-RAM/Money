/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#ffcc00",
        tertiary: "#e74c3c",
        quaternary: "#2ecc71",
        quinary: "#9b59b6",
        septenary: "#c0392b",
        octonary: "#34495e",
        quinary: "#27ae60",
        septenary: "#7f8c8d",
        octonary: "#e67e22",
        quinary: "#2980b9",
        septenary: "#8e44ad",
        octonary: "#f1c40f",
        quinary: "#1abc9c",
        septenary: "#3498db",
        octonary: "#95a5a6",
        quinary: "#f39c1",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
