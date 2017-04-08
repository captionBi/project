define(['jquery','template','top','footer'],function($,template,top,footer){
        function shoppingCar(){

        }

      shoppingCar.prototype.init=function(){

        var self =this;
        var oTop=new top();
            oTop.init();

        $('body').append(this.template.shoppingCar());
        
        var oFooter=new footer();
            oFooter.init();


      }

      shoppingCar.prototype.template={
        shoppingCar:template.compile(`
              <div class="car_body">
                <div class="wrapper">
                    <div class="kong">
                        <h1>你的购物车空空的，快去购物吧</h1>

                        <div class="tishi">
                            <a href="#">一键购物</a>
                            <a href="index.html">去首页</a>
                        </div>

                    </div>
                </div>
            </div>`)
      }
})