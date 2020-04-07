const path = require("path");
// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "src", "index.js"),
    // pugPage: path.resolve(__dirname, "src/pages/landingPage", "entryPug.js")
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      //js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      //style
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
      //assets
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
  }
};
