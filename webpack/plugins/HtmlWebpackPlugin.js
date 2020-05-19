const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATH = require('../configs/configPath.js')
/**
 * @param fileName {string} export file's name
 * @param template {string} input file's path
 */
function newHtmlWebpackPlugin(fileName, template) {
  return new HtmlWebpackPlugin({
    filename: fileName,
    template: template,
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
      minifyCSS: true,
      minifyJS: true
    },
    inject: true
  })
}
module.exports = [
  newHtmlWebpackPlugin("index.html", PATH.src + "/index.html"),
  newHtmlWebpackPlugin("message_board.html", PATH.src + "/index.html")
]
