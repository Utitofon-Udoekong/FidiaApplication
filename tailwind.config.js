module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          gray: "#EAECF0",
          purple: {
            600: "#7F56D9",
            700: "#6941C6"
          },
          success: "#027A48",
          error: "#B42318",
          primary: {
            50: "#F9F5FF"
          }
        },
        gray: {
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          500: "#667085",
          700: "#344054",
          900: "#101828"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};