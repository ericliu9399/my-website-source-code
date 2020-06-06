const path = require("path");
const PATH = require("./configPath")

module.exports = function devServer(config) {
  config.devServer = {
    contentBase: path.resolve(PATH.public),
    compress: true,
    port: 3000
  }
}