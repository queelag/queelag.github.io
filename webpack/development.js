const common = require('./common')
const path = require('path')
const ReactRefresh = require('react-refresh/babel')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

common.devtool = 'source-map'
common.mode = 'development'
common.module.rules[0].use.options.plugins = [ReactRefresh]
common.plugins.push(new HtmlWebpackPlugin({ template: path.resolve(__dirname, '../public/index.html') }))
common.plugins.push(new MiniCssExtractPlugin())
common.plugins.push(new ReactRefreshWebpackPlugin())
common.resolve.alias = {
  react: path.resolve(__dirname, '../node_modules/react'),
  'react-dom': path.resolve(__dirname, '../node_modules/react-dom')
}

module.exports = common
