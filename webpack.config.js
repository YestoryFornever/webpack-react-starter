const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:'./src/main.js',//入口文件
	output:{
		path:path.resolve(__dirname,'dist'),//输出文件目录（__dirname指的是当前目录）
		filename:'bundle.js'
	},
	module:{
		loaders:[]
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