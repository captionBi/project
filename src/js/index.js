// 这时一个模块
// 定义一个模块，必须遵循一定的格式
// define()
define(['jquery','template',"top"],function($,template,top){
        var Index =function(){
              var self = this;
          };
          Index.prototype.init=function(){
            var oTop=new Top();
            oTop.init();

          }
        
    return Index
})
