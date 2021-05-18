import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import TerserPlugin from 'terser-webpack-plugin'
import webpack, { Configuration, RuleSetUseItem, WebpackPluginInstance } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { WebpackManifestPlugin } from 'webpack-manifest-plugin'

export const isDev = process.env.NODE_ENV === 'development'

const getStyleLoaders = (isWeb: boolean, isSass?: boolean) => {
  const loaders: RuleSetUseItem[] = [
    ...(isWeb ? [MiniCssExtractPlugin.loader] : []),
    {
      loader: 'css-loader',
      options: {
        importLoaders: isSass ? 2 : 1,
        modules: {
          auto: true,
          localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64]',
          exportOnlyLocals: !isWeb,
        },
        sourceMap: isDev,
      },
    },
    { loader: 'postcss-loader', options: { sourceMap: isDev } },
    ...(isSass ? [{ loader: 'sass-loader', options: { sourceMap: isDev } }] : [])
  ]

  return loaders
}

const getPlugins = () => [
  new HtmlWebPackPlugin({
    template: path.resolve(process.cwd(), 'static/index.html'),
    ...(!isDev && { filename: path.resolve(process.cwd(), 'public/index.html') }),
  }),
  new webpack.ProgressPlugin(),
  new WebpackManifestPlugin({
    fileName: path.resolve(process.cwd(), 'public/webpack-assets.json'),
    filter: (file) => file.isInitial,
  }),
  new webpack.DefinePlugin({
    __DEV__: isDev,
  }),
  ...(isDev
    ? [
        new Dotenv({
          path: path.resolve(process.cwd(), '.env.local'),
        }),
        new ForkTsCheckerWebpackPlugin({
          eslint: { files: './src/**/*.{js,jsx,ts,tsx}' },
        }),
      ]
    : [
        new BundleAnalyzerPlugin({
          analyzerMode: process.env.NODE_ENV === 'analyze' ? 'server' : 'disabled',
        }),
      ]),
]

const config = (): Configuration => ({
  mode: isDev ? 'development' : 'production',
  stats: 'minimal',
  context: path.resolve(process.cwd()),
  output: { clean: true },
  optimization: {
    minimizer: [
      ...(isDev ? [new CssMinimizerPlugin()] : []),
      new TerserPlugin({
        terserOptions: { compress: { drop_console: true } },
      }),
    ],
    splitChunks: {
      chunks: isDev ? 'async' : 'all',
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: getPlugins() as WebpackPluginInstance[],
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: isDev,
          caller: { target: 'web' },
        },
      },
      {
        test: /\.css$/,
        use: getStyleLoaders(true),
      },
      {
        test: /\.(scss|sass)$/,
        use: getStyleLoaders(true, true),
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset',
        generator: { emit: true },
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset',
        generator: { emit: true },
      },
    ],
  },
  resolve: {
    alias: {
      '@services': path.resolve(__dirname, 'src/services'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@': path.resolve(__dirname, 'src'),
    },
    modules: ['src', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.scss', '.sass'],
  },
})

export default config
