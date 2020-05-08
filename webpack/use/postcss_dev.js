module.exports = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: [
      require('tailwindcss'),
      require('precss'),
      require('autoprefixer'),
    ],
  },
}