module.exports = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: [
      require('tailwindcss'),
      require('precss'),
      require('autoprefixer'),
      require('cssnano')({
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
        }]
      }),
    ],
  },
}