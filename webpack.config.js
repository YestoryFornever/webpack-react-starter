var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry:{//入口文件
		//bundle:'./src/main.js',
		index:'./src/index.html'
	},
	output:{
		path:path.resolve(__dirname,'dist'),//输出文件目录（__dirname指的是当前目录）
		/**
		 * [filename]
		 * 输出文件名（这里的name对应entry里的key：bundle、index）
		 * 由于index.html文件里有引入了main.js，这里把bundle行注释掉同样会生成一个index.js文件 
		 */
		filename:'[name].js'
	},
	module:{
		loaders:[
			{
				test: /\.html$/,
				loader: "file-loader?name=[name].[ext]", 
			}
		]
	}
}