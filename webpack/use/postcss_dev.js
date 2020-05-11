module.exports = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: [
      require('precss'),
      require('autoprefixer'),
    ],
  },
}