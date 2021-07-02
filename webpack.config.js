const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const rootDir = path.resolve(__dirname, '.');
const PATH_SRC = path.join(__dirname, './src');
const PATH_PUBLIC = path.join(__dirname, './public');
const PATH_DIST = path.join(__dirname, './dist');

module.exports = () => {
  const env = dotenv.config().parsed;
  const envKeys = {};
  Object.keys(env).forEach(elm => {
    envKeys[`process.env.${elm}`] = JSON.stringify(env[elm]);
  });
  const { environment } = env;
  const isDevelopment = environment === 'development';
  return {
    context: rootDir,
    mode: environment,
    entry: [path.join(PATH_SRC, './app.js')],
    output: {
      path: PATH_DIST,
      filename: 'js/[name].[hash].js',
      publicPath: '/',
    },
    performance: { hints: false },
    devServer: {
      contentBase: PATH_DIST,
      host: 'localhost',
      port: 6060,
      historyApiFallback: true,
      hot: true,
      open: true,
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    devtool: 'cheap-module-source-map',
    resolve: {
      extensions: ['*', '.js', '.scss', '.css'],
      alias: {
        Utilities: path.resolve(__dirname, 'src/utils/services/'),
        Apis: path.resolve(__dirname, 'src/utils/apis/'),
        Styles: path.resolve(__dirname, 'src/assets/styles/'),
        Svgs: path.resolve(__dirname, 'src/assets/svg/'),
        Context: path.resolve(__dirname, 'src/context/'),
        Views: path.resolve(__dirname, 'src/views/'),
        Hoc: path.resolve(__dirname, 'src/hoc/'),
        Routes: path.resolve(__dirname, 'src/routes/'),
        Configs: path.resolve(__dirname, 'src/configs/'),
      },
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
          parallel: true,
          cache: true,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|otf|svg)(\?[a-z0-9=.]+)?$/,
          use: [
            {
              loader: 'url-loader',
              options: { outputPath: 'assets/images/' },
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
            },
            { loader: 'sass-loader' },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        template: path.join(PATH_PUBLIC, './index.html'),
        minify: {
          removeComments: true,
          collapseWhiteSpace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minfyCSS: true,
          minifyURLs: true,
        },
      }),
      new CopyPlugin([{ from: 'public/assets', to: 'assets' }]),
      new MiniCssExtractPlugin({
        filename: isDevelopment
          ? 'assets/css/[name].css'
          : 'assets/css/[name].[hash].css',
        chunkFilename: isDevelopment
          ? 'assets/css/[id].css'
          : 'assets/css/[id].[hash].css',
      }),
      new webpack.DefinePlugin(envKeys),
    ],
  };
};
