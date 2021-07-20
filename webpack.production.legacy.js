const common = require('./webpack.production')
const HtmlWebpackPlugin = require('html-webpack-plugin')

common.module.rules[0].use.options.presets[0][1].targets = 'defaults'
common.module.rules[1].use = ['css-loader']
common.output.chunkFilename = 'chunks/[name].[contenthash].js'
common.output.clean = false
common.output.filename = '[name].[contenthash].js'
common.plugins[0] = new HtmlWebpackPlugin({
  attributes: {
    nomodule: (v) => (v.tagName === 'script' ? true : undefined)
  },
  template: './docs/index.html'
})
common.plugins = common.plugins.slice(0, 2)

module.exports = common
