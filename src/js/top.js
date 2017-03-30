define(['jquery','template'],function($,template){
    // return一个函数/对象

    function Top(){
        var self =this;
    }

    Top.prototype.init=function(){
         var self =this;
         console.log('aa');
         //$('body').append(this.template.top());
    };
    Top.prototype.template={
        //top:template.compile(
            ` <div class="top">
                <div class="wrapper clear">
                     <h4>送至：</h4>
                     <span>重庆
                         <i class="fa fa-angle-down" aria-hidden="true"></i>
                         <div>
                             <div class="area">
                                 <span>广州</span>
                                 <span>请选择</span>
                             </div>
                         </div>
                     </span>
                    <!--  <i class="fa fa-angle-up" aria-hidden="true"></i> -->

                    <p>
                        <a href=""><i class="fa fa-heart" aria-hidden="true"></i>E宠就是正品</a>
                    </p>
                    <p>
                        <a href="">评价(478.5万)</a>
                    </p>
                </div>

                <ul>
                    <li><span>[登录]</span></li>
                    <li><span>[注册]</span></li>
                    <li><i class="fa fa-shopping-cart" aria-hidden="true"></i><a href="#">购物车(<em>0</em>)</a></li>
                    <li></li>
                </ul>
            </div>`
            )
    }


    return Top

});