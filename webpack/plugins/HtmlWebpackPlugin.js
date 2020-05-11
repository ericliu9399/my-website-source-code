const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATH = require('../configs/configPath.js')

module.exports = new HtmlWebpackPlugin({
  template: `${PATH.src}/index.html`
})