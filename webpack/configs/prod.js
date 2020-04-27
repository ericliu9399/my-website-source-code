const path = require("path");

module.exports = {
  entry: {
    bundle: path.resolve("src", "index.js"),
  },
  output: {
    path: path.resolve("public"),
    filename: "[name].js",
  },
  module: {
    rules: [
      ...require('../rules/script'),
      ...require('../rules/style_prod'),
      ...require('../rules/asset')
    ]
  }
};

