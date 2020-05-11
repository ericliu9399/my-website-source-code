const path = require("path");
const PATH = require("./configPath")

module.exports = {
  entry: {
    bundle: path.resolve(PATH.src, PATH.entry),
  },
  output: {
    path: path.resolve(PATH.public),
    filename: "[name].js",
  },
  module: {
    rules: [
      ...require('../rules/script'),
      ...require('../rules/style_prod'),
      ...require('../rules/asset')
    ]
  },
  plugins: [
    require('../plugins/HtmlWebpackPlugin')
  ]
};

