module.exports = [
  {
    test: /.*\.(gif|png|jpe?g)$/i,
    use: {
      loader: "file-loader"
    }
  },
  {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  },
] 