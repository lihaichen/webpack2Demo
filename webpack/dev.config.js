require("babel-polyfill");
var path = require('path');
var webpack = require('webpack');
var assetsPath = path.resolve(__dirname, '../static');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('../config.json');
var proxy = config.proxyConfig;
var gitHash = config.debugConfig.gitHash;

var webpackProxy = {};
console.log('===>代理配置：');
proxy.forEach(function(item) {
  console.log(`代理【${item.path}】到【${item.target}】服务`);
  webpackProxy[item.path] = {
    target: item.target,
    pathRewrite: {"^/api": ""}
  };
});

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
    filename: `js/[name]-${gitHash.gitHash}.js`,
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
    proxy: webpackProxy
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack demo',
      template: './template/index.html',
      filename: path.resolve(assetsPath, './index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.DefinePlugin({
      __PRODUCTION__: JSON.stringify(true),
      __GITHASH__: JSON.stringify(gitHash.gitHash),
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
