const fs                         = require('fs');
const path                       = require('path');
const webpack                    = require('webpack');
const paths                      = require('./paths');
const env                        = require('./env');
const HtmlWebpackPlugin          = require('html-webpack-plugin');
const TerserJSPlugin             = require('terser-webpack-plugin');
const MiniCssExtractPlugin       = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin    = require('optimize-css-assets-webpack-plugin');
const HardSourceWebpackPlugin    = require('hard-source-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const getApplicationTemplate     = require('./getApplicationTemplate');

module.exports = (applicationName = '') => {

  const currentPaths                = paths(process.env.YWFE_APP_NAME);
  env.APP_NAME                      = applicationName;
  process.env                       = env;
  const {appTemplatePath, appTitle} = getApplicationTemplate(applicationName) || {};

  console.log('appTemplatePath:::', appTitle);

  return {
    mode: env.NODE_ENV,
    entry: currentPaths.client.main,
    output: {
      filename: 'bundle_[chunkhash].js',
      path: currentPaths.client.dist,
      chunkFilename: '[name]_[chunkhash].js',
      publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: currentPaths.base.alias
    },
    module: {
      rules: [
        {
          test: /.tsx?$/,
          loader: 'babel-loader'
        },
        {
          test: /\.(scss|css)$/,
          use: [
            {loader: MiniCssExtractPlugin.loader},
            'css-loader',
            'scoped-css-loader',
            'sass-loader'
          ],
          exclude: /node_modules/
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10,
                name: 'statics/images/[name].[hash:7].[ext]'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HardSourceWebpackPlugin(),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
      }),
      new ForkTsCheckerWebpackPlugin({
        async: true,
        typescript: true
      }),
      new HtmlWebpackPlugin({
        title: appTitle,
        template: appTemplatePath
      })
    ],
    optimization: {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },
    devServer: {
      disableHostCheck: true,
      historyApiFallback: true
    }
  };
};
