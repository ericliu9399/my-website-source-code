const path = require("path");
const PATH = require("./configPath")
const entryConfig = require("./entry")
let config = {
  entry: entryConfig,
  output: {
    path: path.resolve(PATH.public),
    filename: "[name].js",
  },
  module: {
    rules: [
      ...require('../rules/style_dev'),
    ]
  },
  plugins: []
};
require("./devServer")(config)
require("./babelReact")(config)
require('./htmlPlugin')(config)
require("./assetRules")(config)
module.exports = config