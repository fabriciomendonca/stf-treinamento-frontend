const path = require('path');

module.exports = {
  entry: {
    bundle: [
      'babel-polyfill',
      path.join(__dirname, '/src/app.js'),
      path.join(__dirname, '/src/app.scss')
    ]
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
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
  }
}