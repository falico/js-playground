var webpack = require('webpack');

module.exports = {
  devtool: "source-map",
  entry: {
    todo: './js/todo/todo.js'
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
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 1357
  }
}
