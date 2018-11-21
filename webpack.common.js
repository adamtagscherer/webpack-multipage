const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const pagesPath = `./dev/pages/`;

let entry = {};

fs.readdirSync(pagesPath)
  .filter(file =>
    fs.statSync(path.join(pagesPath, file)).isDirectory()
  )
  .forEach(folder => entry[folder] = `${pagesPath}${folder}${path.sep}${folder}.js`);

module.exports = {
  entry,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images/',
            publicPath: 'dist/images/'
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'fonts/',
            publicPath: 'dist/fonts/'
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ],
  output: {
    filename: 'pages/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};