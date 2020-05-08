module.exports = [
  {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  },
  {
    test: /\.(png|jpg|gif)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: "images/[hash:8].[name].[ext]"
        },
      },
    ],
  }
]