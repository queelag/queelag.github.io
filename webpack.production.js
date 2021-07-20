const common = require('./webpack.common')
const BundleStatsWebpackPlugin = require('bundle-stats-webpack-plugin').BundleStatsWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const path = require('path')

common.mode = 'production'
common.module.rules[0].use.options.presets.unshift([
  '@babel/preset-env',
  {
    corejs: 3,
    targets: 'supports es6-module and last 1 version',
    useBuiltIns: 'entry'
  }
])
common.module.rules[1].use[2].options.postcssOptions.plugins.push([
  'postcss-preset-env',
  {
    browsers: 'defaults',
    features: {
      'focus-within-pseudo-class': false
    },
    stage: 0
  }
])
common.optimization = {
  minimizer: ['...', new CssMinimizerPlugin()]
}
common.output.chunkFilename = 'chunks/[name].[contenthash].mjs'
common.output.clean = true
common.plugins.unshift(
  new HtmlWebpackPlugin({
    attributes: {
      type: (v) => (v.tagName === 'script' ? 'module' : undefined)
    },
    template: './public/index.html'
  })
)
common.plugins.push(
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css'
  }),
  new BundleStatsWebpackPlugin({
    baseline: true
  })
)
common.resolve.alias = {
  react: path.resolve(__dirname, './node_modules/preact/compat'),
  'react-dom': path.resolve(__dirname, './node_modules/preact/compat'),
  tslib: path.resolve(__dirname, './node_modules/tslib')
}

module.exports = common
