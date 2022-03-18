module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ['"Jost"', "sans-serif"],
    },
    extend: {
      colors: {
        bglight: "#F9FAFB",
        marrslight: "#1C9A9A",
        marrsgreen: "#008C8C",
        marrsdark: "#005757",
        cardlight: "#EFF3F3",

        bgdark: "#2D2D2D",
        carrilight: "#57DCB4",
        carrigreen: "#05CE91",
        carridark: "#00835B",
        carddark: "#383838",
        textlight: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
