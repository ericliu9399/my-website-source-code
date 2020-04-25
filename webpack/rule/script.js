module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      "source-map-loader",
      {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ]
        }
      }
    ],
    enforce: "pre"
  }
]