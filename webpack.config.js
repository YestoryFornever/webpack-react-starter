const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
	entry:'./src/main.jsx',//入口文件
	output:{
		path:path.resolve(__dirname,'dist'),//输出文件目录（__dirname指的是当前目录）
		filename:'./bundle.js'//打包后文件名
	},
	module:{
		loaders:[
			{
				test: /\.jsx?$/,
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
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			title: 'default-title',
			template: 'src/index.html',
			inject: 'body',
			hash: true
		}),
		new UglifyJsPlugin({//代码压缩
			minimize:true
		}),
	],
	devtool: 'source-map',//生成sourcemap文件,便于调试
}