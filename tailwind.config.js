module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#233b96",
        secondary: "#BFDBFF",
        stress: "#00cc66",
        blacktext: "#333333",
        whitetext: "#f4f4f4",
        wback: "#f4f4f4",
        dback: "#BFDBFF"
      }
    },
    screens: {
      icon: "200px",
      // => @media (min-width: 640px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {
      divideColor: ['group-hover'],
    }
  },
  plugins: [],
};