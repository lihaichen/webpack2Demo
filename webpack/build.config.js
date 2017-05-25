require("babel-polyfill");
const path = require('path');
const webpack = require('webpack');
const assetsPath = path.resolve(__dirname, '../static');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config.json');
const gitHash = config.debugConfig.gitHash;

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin(`stylesheets/${gitHash}-css.css`);
const extractLESS = new ExtractTextPlugin(`stylesheets/${gitHash}-less.css`);
const CleanWebpackPlugin = require('clean-webpack-plugin');
const theme = {};
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
    new CleanWebpackPlugin(['js', 'stylesheets', 'index.html'], {root: assetsPath, exclude: ['images']}),
    extractCSS,
    extractLESS,
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
        exclude: /node_modules/,
        use: [
          'json-loader'
        ]
      },
      {
        test: /\.less$/,
        use: extractLESS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', `less-loader?{"modifyVars":${JSON.stringify(theme)}}`]
        })
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['.web.js', '.js', '.json', '.jsx'],
  }
};
