const path = require('path')
// const MiniJsPlugin = require('UglifyJS-webpack-plugin')
const MiniJsPlugin = require('terser-webpack-plugin')
const packageName = 'toolJs'
let config = {
  mode: 'none',
  entry: {
    main: path.join(__dirname, './src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, './dist'),
    library: packageName,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${packageName}`
  },
  // module: {
  //   rules: [{
  //     test: /\.js$/,
  //     exclude: /node_modules/,
  //     loader: "babel-loader",
  //   }, ],
  // },
  optimization: {
    minimize: true,
    minimizer: [new MiniJsPlugin()],
  }
}

module.exports = config