const path = require("path");
global.PATH = {
  src: "src",
  public: "public",
}
let config = {
  entry: {
    bundle: path.resolve(global.PATH.src, "index.js")
  },
  output: {
    path: path.resolve(global.PATH.public),
    filename: "[name].js",
  },
  module: {
    rules: []
  },
  plugins: []
};
require('./assetRules')(config)
require('./babelReact')(config)
require('./htmlPlugin')(config)
require('./dynamicCDN')(config)
require('./styleProdRules')(config)
module.exports = config