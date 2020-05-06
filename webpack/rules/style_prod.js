const cssModuleRegex = /\.module\.css$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = [
  require('./style/css'),
  {
    test: cssModuleRegex,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            mode: 'local',
            localIdentName: '[hash:base64:5]',
          },
          importLoaders: 1
        }
      },
      'postcss-loader'
    ]
  },
  require('./style/sass'),
  {
    test: sassModuleRegex,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            mode: 'local',
            localIdentName: '[hash:base64:5]',
          },
          importLoaders: 1
        }
      },
      'postcss-loader',
      'sass-loader',
    ],
  },
]