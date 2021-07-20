const common = require('./webpack.common')
const ReactRefresh = require('react-refresh/babel')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

common.devtool = 'source-map'
common.mode = 'development'
common.module.rules[0].use.options.plugins = [ReactRefresh]
common.plugins.push(new HtmlWebpackPlugin({ template: './public/index.html' }))
common.plugins.push(new MiniCssExtractPlugin())
common.plugins.push(new ReactRefreshWebpackPlugin())

module.exports = common
