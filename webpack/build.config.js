require("babel-polyfill");
var path = require('path');
var webpack = require('webpack');
var assetsPath = path.resolve(__dirname, '../static');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('../config.json');
var gitHash = config.debugConfig.gitHash;

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    main: [
      './src/index.js'
    ],
  },
  output: {
    path: assetsPath,
    filename: `js/[name]-${gitHash}.js`,
    publicPath: '/',
    chunkFilename: `[name]-${gitHash}.js`
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config.title,
      template: './template/index.html',
      filename: path.resolve(assetsPath, './index.html')
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.json$/,
        use: [
          'json-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
