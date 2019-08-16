'use strict'

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const base = require('../config/webpack.base')
const config = require('../config/config')

// npm 入参
const args = process.argv.splice(2)

base.entry.vendor = config.vendor
base.output.filename = 'js/[name].[chunkhash:8].js'
base.output.publicPath = './'
base.stats = { children: false }

// Plugins Configuration
base.plugins.push(
  new ProgressBarPlugin(),
  new ExtractTextPlugin({
    filename:'css/styles.[contenthash:8].css',

  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    output: {
      comments: false
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'js/vendor.[chunkhash:8].js'
  })
)

// 是否需要BundleAnalyzerPlugin 可视化资源分析工具
if (args.indexOf('BAP') >= 0) {
  base.plugins.push(new BundleAnalyzerPlugin())
}

// Rules Configuration
base.module.rules.push({
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    extractCSS: false,
    preserveWhitespace: false
  }
})

base.module.rules.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    use: [{ loader: 'css-loader' }, 'postcss-loader'],
    fallback: 'style-loader',
    publicPath: '../'
  })
})
base.module.rules.push({
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract({
    use: [{ loader: 'css-loader' },{ loader: 'sass-loader' }, 'postcss-loader'],
    fallback: 'style-loader',
    publicPath: '../'
  })
})

module.exports = base
