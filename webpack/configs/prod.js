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
      ...require('../rules/script'),
      ...require('../rules/style_prod'),
    ]
  },
  plugins: [
    ...require('../plugins/HtmlWebpackPlugin'),
    ...require('../plugins/DynamicCdnWebpackPlugin')
  ]
};

require('./assetRules')(config)

module.exports = config