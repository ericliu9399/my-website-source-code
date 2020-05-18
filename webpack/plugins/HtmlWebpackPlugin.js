const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATH = require('../configs/configPath.js')
/**
 * @param fileName {string} name.html 
 */
function newHtmlWebpackPlugin(fileName) {
  return new HtmlWebpackPlugin({
    filename: fileName,
    template: `${PATH.src}/` + fileName,
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
  newHtmlWebpackPlugin("index.html"),
  newHtmlWebpackPlugin("message_board.html")
]
