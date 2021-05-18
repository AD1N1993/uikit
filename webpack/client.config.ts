import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import webpack, { Configuration } from 'webpack'
import { Configuration as ConfigurationServer } from 'webpack-dev-server'
import merge from 'webpack-merge'

import baseConfig, { isDev } from './base.config'

require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') })

const getPlugins = () => {
  const plugins = [
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: isDev ? '[id].css' : '[id].[contenthash].css',
    }),
    ...(isDev
      ? [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin({ overlay: { sockIntegration: 'whm' } })
      ]
      : [
        new CompressionPlugin()
      ])
  ]

  return plugins
}

const config: Configuration & ConfigurationServer = {
  ...(isDev && { devtool: 'inline-source-map' }),
  entry: './src/client',
  output: {
    filename: isDev ? '[name].js' : '[name].[contenthash].js',
    chunkFilename: isDev ? '[id].js' : '[id].[contenthash].js',
    path: path.resolve(process.cwd(), 'public/assets/'),
    publicPath: !isDev ? '/assets/' : '/',
  },
  plugins: getPlugins(),
  target: 'web',
  devServer: {
    historyApiFallback: true,
    inline: true,
    contentBase: path.resolve(process.cwd(), 'public'),
    host: process.env.HOST,
    overlay: {
      warnings: true,
      errors: true,
    },
    hot: true,
    port: Number(process.env.PORT),
    http2: process.env.HTTPS === 'true',
  },
}

export default merge(baseConfig(), config)
