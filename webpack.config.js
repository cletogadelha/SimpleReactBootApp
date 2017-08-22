"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

loaders.push({
  test: /\.scss$/,
  loaders: ExtractTextPlugin.extract({fallback: 'style-loader', use : 'css-loader?sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded'}),
  exclude: ['node_modules']
});

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/main/js/index.js', // your app's entry point
    './src/main/styles/index.scss'
  ],
  devtool: '#inline-source-map',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'src/main/resources/static'),
    filename: 'bundle.js'
  },
  node: {
	  fs: 'empty'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders
  },
  devServer: {
    contentBase: "./src/main/resources/static",
    // do not print bundle build stats
    noInfo: true,
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: PORT,
    host: HOST,
    proxy: {
      '**': {
        target: "http://localhost:9090"
      }
    }
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: './src/main/resources/templates/index.html',
      files: {
        css: ['style.css'],
        js: [ 'bundle.js']
      }
    }),
  ]
};