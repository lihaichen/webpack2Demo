require("babel-polyfill");
var path = require('path');
var webpack = require('webpack');
var proxy = require('../config/proxy');
var gitHash = require('../bin/git_hash.js');
var assetsPath = path.resolve(__dirname, '../dist');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ],
    vendor: [
      'babel-polyfill',
      'lodash',
      'classnames',
      'immutable',
      'react',
      'react-dom',
      'redux',
      'react-redux'
    ]
  },
  output: {
    path: assetsPath,
    filename: `[name]-${gitHash.gitHash}.js`,
    publicPath: '/',
    chunkFilename: `[name]-${gitHash.gitHash}.js`
  },
  devServer: {
    hot: true,
    // enable HMR on the server
    contentBase: assetsPath,
    // match the output path
    publicPath: '/',
    // match the output `publicPath`,
    historyApiFallback: true,
    proxy: proxy
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack demo',
      template: './template/index.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      VERSION: JSON.stringify(gitHash.gitHash),
    })
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
        exclude: /node_modules/,
        use: [
          'json-loader'
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
