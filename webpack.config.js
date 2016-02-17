var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client/something.js',
  output: {
    path: path.resolve(__dirname, 'build')
  },
  module: {},
  stats: {
    color: true
  },
  devtool: 'source-map'
}