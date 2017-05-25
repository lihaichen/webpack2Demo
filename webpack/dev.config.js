require('babel-polyfill');
const path = require('path');
const webpack = require('webpack');
const assetsPath = path.resolve(__dirname, '../static');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config.json');
const proxy = config.proxyConfig;
const gitHash = config.debugConfig.gitHash;

const webpackProxy = {};
console.log('===>代理配置：');
proxy.forEach(function(item) {
  console.log(`代理【${item.path}】到【${item.target}】服务`);
  webpackProxy[item.path] = {
    target: item.target,
    pathRewrite: {'^/api': ''}
  };
});

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: [
      'webpack-dev-server/client?http://0.0.0.0:8989',
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
    filename: `js/[name]-${gitHash}.js`,
    publicPath: '/',
    chunkFilename: `[name]-${gitHash}.js`
  },
  devServer: {
    hot: true,
    // enable HMR on the server
    contentBase: assetsPath,
    // match the output path
    publicPath: '/',
    // match the output `publicPath`,
    historyApiFallback: true,
    proxy: webpackProxy,
    host: '0.0.0.0',
    port: 8989,
    disableHostCheck: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: config.title,
      template: './template/index.html',
      filename: path.resolve(assetsPath, './index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
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
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'postcss-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'url-loader'
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['.web.js', '.js', '.json', '.jsx'],
  }
};
