const imgPath = 'images/';
const imageminGifsicle = require("imagemin-gifsicle");
const imageminPngquant = require("imagemin-pngquant");
const imageminSvgo = require("imagemin-svgo");
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = [
  {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  },
  // {
  //   test: /\.(png|jpg|gif)$/i,
  //   use: [
  //     {
  //       loader: 'url-loader',
  //       options: {
  //         limit: 8192,
  //         name: "images/[name].[ext]"//[hash:8].
  //       },
  //     },
  //   ],
  // },
  {
    test: /\.(jpe?g|png|gif)$/i,
    loaders: [
      {
        loader: 'file-loader',
        options: {
          name: imgPath + '[name].[ext]'
        }
      },
      {
        loader: 'img-loader',
        options: {
          plugins: [
            imageminGifsicle({
              interlaced: false
            }),
            imageminMozjpeg({
              progressive: true,
              arithmetic: false
            }),
            imageminPngquant({
              floyd: 0.5,
              speed: 2
            }),
            imageminSvgo({
              plugins: [
                { removeTitle: true },
                { convertPathData: false }
              ]
            })
          ]
        }
      }
    ]
  }
]