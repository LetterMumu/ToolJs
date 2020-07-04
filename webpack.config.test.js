const path = require('path')
// const MiniJsPlugin = require('UglifyJS-webpack-plugin')
const MiniJsPlugin = require('terser-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const packageName = 'toolJs'
let config = {
  mode: 'none',
  entry: {
    test: path.join(__dirname, './test.js')
  },
  output: {
    filename: `[name].bundle.js`,
    path: path.join(__dirname, './dist'),
    library: packageName,
    libraryTarget: 'umd',
    globalObject: 'this',
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
  },
  plugins: [
    new CleanWebpackPlugin({dry: false})
  ]
}

module.exports = config