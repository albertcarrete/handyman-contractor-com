module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      heading: ["in", "arial", "sans-serif"],
      body: ["open-flame", "arial", "sans-serif"],
    },
    extend: {
      colors: {
        teal: "#1c6993",
        "dark-blue": { dark: "#12202d", DEFAULT: "#142332", light: "#2c3947" },
        "bright-blue": { DEFAULT: "#3AB4DD" },
        "bright-teal": { DEFAULT: "#00ADD2" },
      },
      padding: {
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      maxWidth: {
        "screen-xs": "462px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
