var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry:'./src/main.js',//入口文件
	output:{
		path:path.resolve(__dirname,'dist'),//输出文件目录（__dirname指的是当前目录）
		filename:'bundle.js'//输出文件名
	},
	module:{
		loaders:[]
	}
}