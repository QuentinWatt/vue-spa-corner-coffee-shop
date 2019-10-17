module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme("colors"),
      "black-30": "rgba(0,0,0,0.3)",
      "black-50": "rgba(0,0,0,0.5)"
    }),
    extend: {}
  },
  variants: {},
  plugins: []
};
