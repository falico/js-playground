var webpack = require('webpack');

var buildVarsPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV !== 'production')),
});

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
  plugins: [
    buildVarsPlugin
  ],
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
