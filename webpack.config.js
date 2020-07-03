const path = require('path')
const uglifyjs = require('uglifyjs-webpack-plugin')
const packageName = 'toolJs'
let config = {
  mode: 'none',
  entry: {
    main: path.join(__dirname, './src/main.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, './dist'),
    library: packageName,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${packageName}`
  },
  plugins: [
    new uglifyjs()
  ]
}

module.exports = config