var webpack = require('webpack');

module.exports = {
  devtool: "source-map",
  entry: [
    './js/profile.js'
  ],
  output: {
    path: __dirname + '/static',
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module:{
    loaders: [
      {test : /\.css$/, loader: 'style!css!'}
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 1357
  }
}
