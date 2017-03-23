const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:'./src/main.jsx',//入口文件
	output:{
		path:path.resolve(__dirname,'dist'),//输出文件目录（__dirname指的是当前目录）
		filename:'./bundle.js'
	},
	module:{
		loaders:[
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test:/\.less$/,
				loader:'style-loader!css-loader!less-loader',
				include: path.resolve(__dirname, 'src')
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
	],
}