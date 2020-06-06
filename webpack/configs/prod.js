const path = require("path");
const PATH = require("./configPath")
const entryConfig = require("./entry")
//
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const PATHS = {
  src: path.join(__dirname, 'src')
}
module.exports = {
  entry: entryConfig,
  output: {
    path: path.resolve(PATH.public),
    filename: "[name].js",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      ...require('../rules/script'),
      ...require('../rules/style_prod'),
      ...require('../rules/asset')
    ]
  },
  plugins: [
    ...require('../plugins/HtmlWebpackPlugin'),
    ...require('../plugins/DynamicCdnWebpackPlugin'),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
  ]
};

