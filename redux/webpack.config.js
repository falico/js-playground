var webpack = require('webpack');

module.exports = {
  devtool: "source-map",
  entry: {
    todo: './js/todo/index.js'
  },
  output: {
    path: __dirname + '/static',
    filename: '[name].js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 1357
  }
}
