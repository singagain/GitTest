 alert("main");


// 配置路径
require.config({
	paths: {
		index: "index",
		jquery: "jquery-1.11.1"
	}
})


//引用该模块中的函数
require(["index", "jquery"], function(index, $){
	index.index();
})