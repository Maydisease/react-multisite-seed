const path                       = require('path');
const webpack                    = require('webpack');
const paths                      = require('./paths');
const env                        = require('./env');
const HtmlWebpackPlugin          = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ExtractTextPlugin          = require('extract-text-webpack-plugin');
const FriendlyErrorsPlugin       = require('friendly-errors-webpack-plugin');
const ErrorOverlayPlugin         = require('error-overlay-webpack-plugin');
const getApplicationTemplate     = require('./getApplicationTemplate');

module.exports = (applicationName = '') => {

	const currentPaths                = paths(process.env.YWFE_APP_NAME);
	env.APP_NAME                      = applicationName;
	process.env                       = env;
	const {appTemplatePath, appTitle} = getApplicationTemplate(applicationName) || {};

	console.log('appTitle:::', appTitle);

	return {
		mode: env.NODE_ENV,
		entry: currentPaths.dev.main,
		output: {
			filename: 'bundle.js',
			path: currentPaths.dev.dist,
			chunkFilename: '[name]_[chunkhash].js',
			publicPath: '/',
			libraryExport: 'default'
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
					test: /\.(sc|c|sa)ss$/,
					use: [
						{
							loader: 'style-loader'
						},
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								importLoaders: 2
							}
						},
						'scoped-css-loader',
						'sass-loader'
					]
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
			new ErrorOverlayPlugin(),
			new FriendlyErrorsPlugin(),
			new ForkTsCheckerWebpackPlugin({
				async: true,
				typescript: true
			}),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.LoaderOptionsPlugin({
				minimize: true
			}),
			new ExtractTextPlugin({
				filename: 'bundle.css',
				disable: false,
				allChunks: true
			}),
			new webpack.DefinePlugin({
				'process.env': JSON.stringify(process.env)
			}),
			new HtmlWebpackPlugin({
				title: appTitle,
				template: appTemplatePath
			})
		],
		devServer: {
			hot: true,
			quiet: true,
			host: 'localhost',
			disableHostCheck: true,
			historyApiFallback: {
				index: '/'
			},
			noInfo: true,
//			compress: true,
			useLocalIp: true
//      overlay: true
		}
	};
};
