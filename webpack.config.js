const path = require("path");

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "src", "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      ...require('./webpack/rule/script'),
      ...require('./webpack/rule/style'),
      ...require('./webpack/rule/asset')
    ]
  }
};

