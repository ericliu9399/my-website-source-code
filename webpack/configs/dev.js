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
require("./devServer")(config)
require("./babelReact")(config)
require('./htmlPlugin')(config)
require("./assetRules")(config)
require('./styleDevRules')(config)
module.exports = config