module.exports = function (config) {
  config.resolve.alias = {
    "react": "preact/compat",
    "react-dom": "preact/compat"
  }
}