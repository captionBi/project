define(['jquery','template'],function($,template){
        function Body(){

        }

        Body.prototype.show=function(){
            var self =this;
            var $index=0;
            $('body').append(this.template.body());

            $('.title').on('mouseenter','span',function(){
               
                $('.content').children('.content-l').children('.lei').remove();

                var $page =$(this).index()+1;
                $.ajax({
                    type:'get',
                    url:'../php/page.php?pageNo='+ $page,

                    success:function(data){
                        //console.log(data);
                        var res = JSON.parse(data);
                            //console.log(res);

                            res.map((item)=>{
                                var $div = $('<div>/');
                                    $div.addClass('lei');
                                $div[0].innerHTML = `

                                    <img src=${item.img} alt=""><br>
                                    <span class="tuijian">精品推荐</span>
                                    <div class="biaoti">${item.title}</div>
                                    <div class="price">
                                        ￥<span>${item.price}</span>
                                        <span>${item.old_price}</span>
                                    </div>

                                    <div class="gang"></div>
                                    <a href='../html/page.html?id=${item.id}'>即将抢购</a>
                                `;
                                $('.content-l').append($div)
                            })
                    }
                })
              
                $(this).children('h4').css({'font-size':'18px'}).children('div').show();

               

                $index=$(this).index();
                $('.content').children('div').eq($index).show().siblings().hide();
                
                
                

             }).on('mouseleave','span',function(){
                $(this).children('h4').css({'font-size':'12px'}).children('div').hide();
                
            })

            $.ajax({
                type:'get',
                url:'../php/page.php',
                success:function(data){
                    //console.log(data);
                    var res = JSON.parse(data);
                        console.log(res);

                        res.map((item)=>{
                            var $div = $('<div>/');
                                $div.addClass('lei');
                            $div[0].innerHTML = `

                                <img src=${item.img} alt=""><br>
                                <span class="tuijian">精品推荐</span>
                                <div class="biaoti">${item.title}</div>
                                <div class="price">
                                    ￥<span>${item.price}</span>
                                    <span>${item.old_price}</span>
                                </div>

                                <div class="gang"></div>
                                <a href='../html/page.html?id=${item.id}'>即将抢购</a>
                            `;
                            $('.content-l').append($div)
                        })
                }
            })
        }

        Body.prototype.template={
            body:template.compile(
                ` <div class="body">
                    <div class="wrapper clear">
                        <div class="crazy clear">
                            <img src="../img/crazy.png" alt=""><br>
                            <span>距本场结束还有</span>
                            <h2>已下架</h2>
                            <div>09:00</div>
                            <i>进行中...</i>
                        </div>

                        <div class="tab">
                            <div class="title clear">
                                <span><h4>09:00<br><i>已结束</i><div class="red-xian"></div></h4></span>
                                <span><h4>11:00<br><i>即将开始</i><div class="red-xian"></div></h4></span>
                                <span><h4>14:00<br><i>即将开始</i><div class="red-xian"></div></h4></span>
                                <span><h4>16:00<br><i>即将开始</i><div class="red-xian"></div></h4></span>
                                <span><h4>20:00<br><i>即将开始</i><div class="red-xian"></div></h4></span>
                                <span><h4>22:00<br><i>即将开始</i><div class="red-xian"></div></h4></span>
                                <span><h4>明日预告<br><i>即将开始</i></h4></span>
                            </div>
                            <div class="content clear">
                                <div class="content-l clear">
                                  
                                </div>

                               
                            </div>
                        </div>
                    </div>
                </div>`
                )
        }

        return Body
})