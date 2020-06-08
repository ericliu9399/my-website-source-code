module.exports = function babelReact(config) {
  config.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ],
          plugins: [
            "styled-jsx/babel"
          ]
        }
      }
    ]
  })
}