// 这时一个模块
// 定义一个模块，必须遵循一定的格式
// define()
define(function(){
	// return一个函数/对象

    function family(){
        var self =this;
    }

    family.prototype.familyDate=function(){
         var self =this;
         var $ul =$('<ul/>');
         var $li =$('<li/>').html('thml');
         $ul.append($li);
         $('body').append($ul);
    };

	return family

});
