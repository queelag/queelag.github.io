const BundleStatsWebpackPlugin = require('bundle-stats-webpack-plugin').BundleStatsWebpackPlugin
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const ReactRefresh = require('react-refresh/babel')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const tailwindcss = require('tailwindcss')

const BROWSERS = 'defaults'
const MODE = process.env.NODE_ENV || 'development'

const isDevelopment = MODE === 'development'
const isProduction = MODE === 'production'

module.exports = {
  devtool: isDevelopment && 'source-map',
  entry: './src/index.tsx',
  mode: MODE,
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.[jt]sx?$/i,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [isDevelopment && ReactRefresh].filter(Boolean),
            presets: [
              [
                '@babel/preset-env',
                {
                  corejs: 3,
                  targets: BROWSERS,
                  useBuiltIns: 'entry'
                }
              ],
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            sourceType: 'unambiguous'
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  tailwindcss,
                  [
                    'postcss-preset-env',
                    {
                      browsers: BROWSERS,
                      features: {
                        'focus-within-pseudo-class': false
                      },
                      stage: 0
                    }
                  ]
                ]
              }
            }
          }
        ]
      },
      {
        generator: {
          filename: 'assets/[name].[hash][ext]'
        },
        test: /\.(gif|jpe?g|png|svg|woff|woff2)$/i,
        type: 'asset/resource'
      }
    ]
  },
  optimization: {
    minimizer: ['...', isProduction && new CssMinimizerPlugin()].filter(Boolean),
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          filename: 'chunks/[name].[chunkhash].js'
        }
      },
      chunks: 'all'
    }
  },
  output: {
    clean: true,
    filename: '[name].[fullhash].js',
    path: path.resolve(__dirname, './docs'),
    publicPath: '/'
  },
  performance: {
    maxAssetSize: 512000,
    maxEntrypointSize: 512000
  },
  plugins: [
    new BundleStatsWebpackPlugin({
      baseline: true
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].[fullhash].css' : '[name].css'
    }),
    isDevelopment && new ReactRefreshWebpackPlugin()
  ].filter(Boolean),
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/' + (isProduction ? 'preact/compat' : 'react')),
      'react-dom': path.resolve(__dirname, './node_modules/' + (isProduction ? 'preact/compat' : 'react-dom')),
      tslib: path.resolve(__dirname, './node_modules/tslib')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
}
