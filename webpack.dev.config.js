/// <reference path="node_modules/@types/node/index.d.ts"/>

// This config is extented from webpack.config.js. We use it for development with webpack-dev-server and autoreload/refresh

var webpack = require('webpack');
var { Config } = require('webpack-config');
var path = require("path");

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var mainConfig = new Config().extend("webpack.config");

var devConfigExtension = {
  entry: {
      app: [
          "bootstrap-webpack!./bootstrap.config.js",
        // We are using next two entries for hot-reload
        'webpack-dev-server/client?http://localhost:3333',
        'webpack/hot/only-dev-server',
      ].concat(mainConfig.entry.app)
  },

  output: {
    filename: '[name].js',
    publicPath: "http://localhost:3333/assets/"
  },

  resolve: {
    alias: mainConfig.resolve.alias
  },

  // more options here: http://webpack.github.io/docs/configuration.html#devtool
  devtool: 'eval-source-map',

  watch: true,

  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['react-hot', 'babel?presets[]=es2015-loose', 'ts-loader?configFileName=tsconfig.webpack.json'], include: path.resolve(__dirname, "App") },
      { test: /\.css$/, exclude: /\.import\.css$/,  loader: ExtractTextPlugin.extract("style!css"), include: path.resolve(__dirname, "App") },
      { test: /\.import\.css$/,  loader: ExtractTextPlugin.extract("style!css"), include: path.resolve(__dirname, "App") },
      { test: /\.less$/, exclude: /\.module\.less$/, loader: ExtractTextPlugin.extract("style", "css!less"), include: path.resolve(__dirname, "App") },
      { test: /\.module\.less$/, loader: "style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less", include: path.resolve(__dirname, "App") },
      //{ test: /\.(jpg|png|jpg|png|gif|woff|woff2|eot|ttf|svg)$/, loader: "file-loader?name=[name].[ext]" },
       { test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/, loader: "file-loader?name=[name].[ext]" },
       { test: /\.(jpg)$/, loader: 'url?limit=25000' },
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
    ]
  },

   plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    // Used for hot-reload
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       }),
       new ExtractTextPlugin("styles.css")
  ]
};

mainConfig.module.loaders = [];
mainConfig.resolve.alias = {};
mainConfig.plugins = [];

module.exports = mainConfig.merge(devConfigExtension);