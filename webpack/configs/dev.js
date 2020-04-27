const path = require("path");

module.exports = {
  entry: {
    bundle: path.resolve("src", "index.js"),
  },
  output: {
    path: path.resolve("public"),
    filename: "[name].js",
  },
  devServer: {
    contentBase: path.resolve("public"),
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      ...require('../rules/script'),
      ...require('../rules/style_dev'),
      ...require('../rules/asset')
    ]
  }
};

