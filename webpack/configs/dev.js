const path = require("path");
const PATH = require("./configPath")
const entryConfig = require("./entry")

module.exports = {
  entry: entryConfig,
  output: {
    path: path.resolve(PATH.public),
    filename: "[name].js",
  },
  devServer: {
    contentBase: path.resolve(PATH.public),
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      ...require('../rules/script'),
      ...require('../rules/style_dev'),
      ...require('../rules/asset')
    ]
  },
  plugins: [
    ...require('../plugins/HtmlWebpackPlugin')
  ]
};

