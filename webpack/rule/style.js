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
          modules: true
        }
      },
      'sass-loader',
    ],
  },
]