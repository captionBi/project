// 这时一个模块
// 定义一个模块，必须遵循一定的格式
// define()
define(['jquery','template',"top","carousel"],function($,template,top,carousel){
        var Index =function(){
              var self = this;
          };
          Index.prototype.init=function(){
            var oTop=new Top();
            oTop.init();

            var oCarousel = new carousel();
            oCarousel.init();

          }
        
    return Index
})
