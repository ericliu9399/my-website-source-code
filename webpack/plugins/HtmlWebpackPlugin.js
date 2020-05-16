const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATH = require('../configs/configPath.js')

module.exports = [
  new HtmlWebpackPlugin({
    template: `${PATH.src}/index.html`
  }),
  new HtmlWebpackPlugin({
    filename: 'message_board.html',
    template: `${PATH.src}/message_board.html`,
    minify: true
  }),
]
//{ minifyCSS: true }