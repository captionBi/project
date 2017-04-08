define(['jquery','template'],function($,template){
    // return一个函数/对象

    function Top(){
        var self =this;
    }

    Top.prototype.init=function(){
         var self =this;
        
         $('body').append(this.template.top());
        
         $('.pets').find('h2').on('mouseover',function(){
            $(this).css({'background':'#fb6634'}).siblings('ul').show().parent('.pets').siblings('span').find('h2').css({'background':'#ffffff'}).siblings('ul').hide();
         })
          $('.fenlei').find('h2').on('mouseover',function(){
            $(this).css({'background':'#fb6634'}).siblings('ul').show().parent().siblings('span').find('h2').css({'background':'#ffffff'}).siblings('ul').hide();
         })

          $('.fenlei').find('.fenlei-li').on('mouseover',function(){
            $(this).find('.FootAll').show().parent().parent().siblings().find('.FootAll').hide();
          })

          $('.fenlei').find('.fenlei-li').on('mouseleave',function(){
            $(this).find('.FootAll').hide();
          })
    };
    Top.prototype.template={
        top:template.compile(
            ` <div class="top">
                <div class="wrapper clear top-t">
                    <div class="top_l">
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

                            <p>
                                <a href=""><i class="fa fa-heart" aria-hidden="true"></i>E宠就是正品</a>
                            </p>
                            <p>
                                <a href="">评价(478.5万)</a>
                            </p>
                    </div>

                    <ul class="help">
                        <li><a href="login.html">[登录]</a></li>
                        <li><a href="reg.html">[注册]</a></li>
                        <li><i class="fa fa-shopping-cart" aria-hidden="true"></i><a href="shoppingcar.html">购物车(<em>0</em>)</a></li>
                        <li class="EC">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <a href="#">我的E宠</a>
                            <b class="fa fa-angle-down" aria-hidden="true"></b>
                            <ul>
                                <li><span>我的订单</span></li>
                                 <li><span>充值得优惠</span></li>
                                  <li><span>兑换现金券</span></li>
                            </ul>
                        </li>
                        <li><a href="#">收藏我</a><b class="fa fa-angle-down" aria-hidden="true"></b></li>
                        <li><i class="fa fa-mobile" aria-hidden="true"></i><a href="#">手机版</a></li>
                        <li><a href="#">帮助</a></li>
                        <li><a href="#">投诉建议</a></li>
                    </ul>
                </div>

                <div class="main">
                    <div class="wrapper clear">
                            <a href="#" class="dog"><img src="../img/gou.png" alt=""></a>

                            <div class="search_fl">
                               <div class="on">
                                    <input type="text">
                                    <button>搜索</button>
                               </div>
                               <div class="search_hot">
                                    <label>热门搜索:</label>
                                   <a href="#" class="active">80%高肉质粮</a><span>|</span>
                                   <a href="#">Now&Go 特惠</a><span>|</span>
                                   <a href="#">卡比</a><span>|</span>
                                   <a href="#">Halo自然光环</a><span>|</span>
                                   <a href="#">孕育季保健专场</a>
                               </div>
                            </div>
                            <div class="car">
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                <a href="#">购物车<em>(0)</em></a>
                            </div>
                    </div>
                </div>

                <div class="Nav">
                    <div class="wrapper">
                        <div class="NavAll">
                            <div class="mainFool clear">
                                <span class="pets">
                                     <h2 class="active">狗狗</h2>
                                    <ul>
                                        <li class="clear pet-dog">
                                            <a href="#"></a>
                                            <p>20775种精选宝贝</p>
                                            <span>你正在狗狗溜达</span>
                                            <img src="../img/dog-clothype.jpg" alt="">
                                        </li>
                                        <li class="clear pet-cat">
                                            <a href="#"></a>
                                            <p>20775种精选宝贝</p>
                                            <span>你正在狗狗溜达</span>
                                            <img src="../img/cat-shatype.jpg" alt="">
                                        </li>
                                    </ul>
                                </span>

                                <span class="fenlei">
                                    <h2>商品分类</h2>
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                    <ul class="fenlei_ul">
                                        <li class="fenlei-li">
                                            <h3 class="clear">
                                                <i class="qian"></i>

                                                <div class="f-a">
                                                    <a href="#">主粮</a>
                                                    <i>2036</i>
                                                </div>

                                                <div class="f-b">
                                                    <a href="#">零食</a>
                                                    <i>2853</i>
                                                </div>

                                               <div class="FootAll">
                                                   <div class="main-foot">
                                                       <img src="../img/1.png" alt="">
                                                       <a href="">狗狗主粮</a>
                                                       <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                                       <a href="#" class="foot-git"><img src="../img/cheap.gif" alt=""></a>
                                                   </div>
                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>
                                               </div>
                                            </h3>
                                        </li>




                                        <li class="fenlei-li">
                                            <h3 class="clear">
                                                <i class="qian"></i>

                                                <div class="f-a">
                                                    <a href="#">日用</a>
                                                    <i>2036</i>
                                                </div>

                                                <div class="f-b">
                                                    <a href="#">玩具</a>
                                                    <i>2853</i>
                                                </div>

                                               <div class="FootAll">
                                                   <div class="main-foot">
                                                       <img src="../img/1.png" alt="">
                                                       <a href="">狗狗日用</a>
                                                       <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                                       <a href="#" class="foot-git"><img src="../img/cheap.gif" alt=""></a>
                                                   </div>
                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>
                                               </div>
                                            </h3>
                                        </li>


                                        <li class="fenlei-li">
                                            <h3 class="clear">
                                                <i class="qian"></i>

                                                <div class="f-a">
                                                    <a href="#">日用</a>
                                                    <i>2036</i>
                                                </div>

                                                <div class="f-b">
                                                    <a href="#">玩具</a>
                                                    <i>2853</i>
                                                </div>

                                               <div class="FootAll">
                                                   <div class="main-foot">
                                                       <img src="../img/1.png" alt="">
                                                       <a href="">狗狗日用</a>
                                                       <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                                       <a href="#" class="foot-git"><img src="../img/cheap.gif" alt=""></a>
                                                   </div>
                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>
                                               </div>
                                            </h3>
                                        </li>


                                        <li class="fenlei-li">
                                            <h3 class="clear">
                                                <i class="qian"></i>

                                                <div class="f-a">
                                                    <a href="#">保健</a>
                                                    <i>2036</i>
                                                </div>

                                                <div class="f-b">
                                                    <a href="#">医疗</a>
                                                    <i>2853</i>
                                                </div>

                                               <div class="FootAll">
                                                   <div class="main-foot">
                                                       <img src="../img/1.png" alt="">
                                                       <a href="">狗狗日用</a>
                                                       <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                                       <a href="#" class="foot-git"><img src="../img/cheap.gif" alt=""></a>
                                                   </div>
                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">狗狗保健</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>
                                               </div>
                                            </h3>
                                        </li>


                                        <li class="fenlei-li">
                                            <h3 class="clear">
                                                <i class="qian"></i>

                                                <div class="f-a">
                                                    <a href="#">日用</a>
                                                    <i>2036</i>
                                                </div>

                                                <div class="f-b">
                                                    <a href="#">玩具</a>
                                                    <i>2853</i>
                                                </div>

                                               <div class="FootAll">
                                                   <div class="main-foot">
                                                       <img src="../img/1.png" alt="">
                                                       <a href="">狗狗日用</a>
                                                       <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                                       <a href="#" class="foot-git"><img src="../img/cheap.gif" alt=""></a>
                                                   </div>
                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>




                                               </div>
                                            </h3>
                                        </li>

                                        <li class="fenlei-li">
                                            <h3 class="clear">
                                                <i class="qian"></i>

                                                <div class="f-a">
                                                    <a href="#">美容</a>
                                                    <i>2036</i>
                                                </div>

                                                <div class="f-b">
                                                    <a href="#">香波</a>
                                                    <i>2853</i>
                                                </div>

                                               <div class="FootAll">
                                                   <div class="main-foot">
                                                       <img src="../img/1.png" alt="">
                                                       <a href="">狗狗美容</a>
                                                       <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                                       <a href="#" class="foot-git"><img src="../img/cheap.gif" alt=""></a>
                                                   </div>
                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   


                                               </div>
                                            </h3>
                                        </li>

                                        <li class="fenlei-li">
                                            <h3 class="clear">
                                                <i class="qian"></i>

                                                <div class="f-a">
                                                    <a href="#">日用</a>
                                                    <i>2036</i>
                                                </div>

                                                <div class="f-b">
                                                    <a href="#">玩具</a>
                                                    <i>2853</i>
                                                </div>

                                               <div class="FootAll">
                                                   <div class="main-foot">
                                                       <img src="../img/1.png" alt="">
                                                       <a href="">狗狗日用</a>
                                                       <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                                       <a href="#" class="foot-git"><img src="../img/cheap.gif" alt=""></a>
                                                   </div>
                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   <div class="breed clear">
                                                       <div class="breed-jinkou">
                                                           <a href="#">进口狗粮</a>
                                                           <img src="../img/2.png" alt="">
                                                       </div>
                                                       <div class="breed-beifen">
                                                           <span>|</span><a href="">全犬粮</a>
                                                           <span>|</span><a href="">幼犬粮</a>
                                                           <span>|</span><a href="">成犬粮</a>
                                                           <span>|</span><a href="">老犬粮</a>
                                                           <span>|</span><a href="">安娜玛特</a>
                                                           <span>|</span><a href="">海洋之心</a>
                                                       </div>
                                                   </div>

                                                   


                                               </div>
                                            </h3>
                                        </li>

                                    </ul>
                                </span>
                                
                                 <ul class="shopping-Nav">
                                    <li><a href=""><i></i>品牌特卖</a></li>
                                    <li><a href=""><i></i>热卖礼包</a></li>
                                    <li><a href=""><i></i>服饰城</a></li>
                                    <li><a href=""><i></i>E宠学堂</a></li>
                                    <li><a href=""><i></i>使用中心</a></li>
                                    <li><a href=""><i></i>清仓特价</a></li>
                                    <li><a href="">国家馆</a></li>
                                </ul> 
                            </div>
                        </div>
                    </div>
                </div>
              </div>`
            )
    }


    return Top

});


