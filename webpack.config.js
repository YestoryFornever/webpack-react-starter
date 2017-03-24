const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
const ProvidePlugin = webpack.ProvidePlugin;

const node_modules_path = __dirname+'/node_modules/';
// console.log(process.env.NODE_ENV);

module.exports = {
	entry:{
		bundle:'./src/main.jsx'
	},//入口文件
	output:{
		path:path.resolve(__dirname,'dist'),//输出文件目录（__dirname指的是当前目录）
		filename:'./[name].js'//打包后文件名对应entry中的key名:e.g. bundle
	},
	module:{
		loaders:[
			{
				test: path.join(node_modules_path,'jquery'),
				loader: 'expose-loader?jQuery!expose-loader?$'
			},
			{
				test: /\.js[x]?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,//黑名单
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test:/\.less$/,
				loader:'style-loader!css-loader!less-loader',
				include: path.resolve(__dirname, 'src')//白名单
			},
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			title: 'default-title',
			template: 'src/index.html',
			inject: 'body',
			hash: true
		}),
	],
	devtool: 'source-map',//生成sourcemap文件,便于调试
}