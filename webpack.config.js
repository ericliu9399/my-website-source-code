const path = require("path");
global.PATH = {
  src: "src",
  public: "public",
}
let config = {
  entry: {
    index: path.resolve(global.PATH.src, "index.js"),
  },
  output: {
    path: path.resolve(global.PATH.public),
    filename: "[name].js",
  },
  module: {
    rules: []
  },
  plugins: [],
  resolve: { alias: {} }
}
module.exports = (env) => {
  global.env = env

  require('./webpack/assets/img-loader&file-loader&svgr')(config)
  require('./webpack/scripts/babel-loader.react&styled-jsx')(config)
  require('./webpack/assets/html')(config)
  if (env === "prod") {
    require('./webpack/settings/preact_alias')(config)//用dynamic-cdn會沒作用
    // require('./webpack/settings/dynamic-cdn')(config)
    require('./webpack/styles/styleProdRules')(config)
  }
  if (env === "dev") {
    require("./webpack/settings/devServer")(config)
    require('./webpack/styles/styleDevRules')(config)
    require('./webpack/styles/css&post-css_dev')(config)
  }
  return config
}