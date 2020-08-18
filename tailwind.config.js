/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
var colors = {
  "grey-dark": "#222222",
  "grey-light": "#9c9999",
  grey: "#282828",
  red: "#e53935",
  blue: "#1a76f4",
  facebook: "#3b5998",
  twitter: "#00aced",
  linkedin: "#007bb6",
  instagram: "#ff0084"

  // ...
};
module.exports = {
  theme: {
    extend: {
      colors: colors
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  }
};
