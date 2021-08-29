module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    colors: {
      blue: "#219EBC",
      lightblue: "#8ECAE6",
      transparent: "transparent",
      current: "currentColor",
      black: "black",
      white: "white",
      gray: "grey",
      red: "pink",
      yellow: "#FFB703",
      darkyellow: "#FB8500",
      lightestblue: "#8ECAE6",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
