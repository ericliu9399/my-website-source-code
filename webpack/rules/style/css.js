const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

module.exports = {
  test: cssRegex,
  exclude: cssModuleRegex,
  use: [
    { loader: "style-loader" },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
      }
    },
    {
      loader: 'postcss-loader'
    },
  ]
}