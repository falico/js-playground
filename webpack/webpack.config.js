var webpack = require('webpack');

var buildVarsPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  devtool: "source-map",
  entry: {
    profile: './js/profile.js',
    feed: './js/feed.js'
  },
  output: {
    path: __dirname + '/static',
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    buildVarsPlugin,
    commonsPlugin
  ],
  module: {
    loaders: [
      {
        test : /\.css$/,
        loader: 'style!css!'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 1357
  }
}
