const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = [
  {
    test: cssRegex,
    exclude: cssModuleRegex,
    use: [
      { loader: "style-loader" },
      { loader: "css-loader" }
    ]
  },
  {
    test: cssModuleRegex,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            mode: 'local',
            localIdentName: '[[path]_[name]__[local]--hash:base64:5]',
          },
          importLoaders: 1
        }
      },
      'postcss-loader'
    ]
  },
  {
    test: sassRegex,
    exclude: sassModuleRegex,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
  },
  {
    test: sassModuleRegex,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            mode: 'local',
            localIdentName: '[path]_[name]__[local]--[hash:base64:5]',
          }
        }
      },
      'sass-loader',
    ],
  },
]