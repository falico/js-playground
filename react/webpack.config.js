var webpack = require('webpack');

module.exports = {
  devtool: "source-map",
  entry: {
    main: './js/main.js',
    transpiler: './js/transpiler.js',
    formValidation: './js/form-validation.js'
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
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 1357
  }
}
