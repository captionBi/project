// 配置文件  相对于data-main依赖的那个文件的目录  配置data-main的文件是index.html 所以路径在html，当配置了baseUrl之后路径就看你自己写的路径，否则路径就在html
requirejs.config({
	baseUrl:'../js',

	// 设置别名
	// 格式：别名:真实路径
	paths:{
		'jquery':'..//lib/jquery-3.1.1',
		 'template':'../lib/template-debug',
		'carousel':'carousel'

	},
	shim:{
		'ajax':{
			exports:'ajax'
		}

	}
});

// 引入其他模块
// 在requireJS中，一个模块就是一个js文件
// 引入模块的路径：
requirejs(['jquery','index','top','carousel'],function($,index,top,carousel){
	// var oTop=new top();
	// oTop.init();
	 var oCarousel = new carousel();
         oCarousel.init();
	
});