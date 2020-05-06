const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const sassRegex = /\.(scss|sass)$/
const sassModuleRegex = /\.module\.(scss|sass)$/

const cssRule = {
  test: cssRegex,
  exclude: cssModuleRegex,
  use: [
    'style-loader',
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
const cssModuleRule = {
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
}
const sassRule = {
  test: sassRegex,
  exclude: sassModuleRegex,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
      }
    },
    {
      loader: 'postcss-loader'
    },
    'sass-loader'
  ]
}
const sassModuleRule = {
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
}
module.exports = [
  cssRule,
  cssModuleRule,
  sassRule,
  sassModuleRule
]