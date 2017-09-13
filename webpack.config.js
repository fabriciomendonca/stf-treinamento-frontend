const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

const VENDORS = ['react', 'react-dom', 'axios', 'babel-polyfill'];
module.exports = {
  entry: {
    bundle: [
      path.join(__dirname, '/src/app.jsx'),
      path.join(__dirname, '/src/app.scss')
    ],
    vendor: VENDORS
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: 'dist/',
    publicPath: '/',
    port: 3000
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '/src/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['manifest', 'vendor'],
      minChunks: 2
    })
  ]
}