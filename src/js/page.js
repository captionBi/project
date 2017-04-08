define(['jquery','template','top','footer'],function($,template,top,footer){
        function Page(){

        }
        Page.prototype.init=function(){

            var self = this
            var oTop=new top();
                oTop.init();

            $('body').append(this.template.page());

            var oFoot=new footer();
                oFoot.init();
           
            $('.fenlei_ul').css({'display':'none'});

            $('.pets').on('mouseleave',function(){
                    $(this).children('ul').hide();
                    console.log('aa');
            })
            $('.fenlei').on('mouseleave',function(){
                    $(this).children('ul').hide();
            })

            self.addDel();
            self.loadmore();
            self.addcar();
            $.ajax({
                type:'get',
                url:'../php/page.php',

                success:function(data){
                    
                    var res = JSON.parse(data);
                    //console.log(res);
                    self.GetRequest();
                    self.getJson(res);
                   
                }
            })
        }
      //获取地址参数
        Page.prototype.GetRequest=function(){

            var self = this
           var url = window.location.search; 

            if (url.indexOf("?") != -1) {  
                var str = url.substr(1);
                var strArr = str.split('=');
                var id = strArr[1]
                console.log(id);
            }
            return id;
        }  


        //套入数据
        Page.prototype.getJson=function(res){

            var self = this;
            var gid = self.GetRequest();
            console.log('bb')
            for(var i=0;i<res.length;i++){
                if(res[i].id==gid){
                    var title =res[i].title;
                    var price =res[i].price;
                    var old_price =res[i].old_price;
                    var img =res[i].img;
                    var img_l =res[i].img_l;
                    var img_r =res[i].img_r;
 console.log('cc')
                    $('.page_tit').html(title);
                    $('.page_olsprice span').html(price);
                    $('.page_price span').html(price);
                    $('.page_l_img img').attr('src',img);
                    $('.zuo img').attr('src',img);
                    $('.zhong img').attr('src',img_l);
                    $('.you img').attr('src',img_r);
                }
            }
        }

        //点击添加数量
        Page.prototype.addDel=function(){
            var $del = $('.del');
            var $add=$('.add');
           

            $del.on('click',function(){
                var $count=$('.shu').val();
                $count--;
                var $count=$('.shu').val($count);
           
            })
            $add.on('click',function(){
                var $count=$('.shu').val();
                $count++;
                var $count=$('.shu').val($count);
            })
        }

        Page.prototype.template={
            page:template.compile(`
            <div class="page">
                <div class="wrapper clear">
                    <div class="page_l clear">
                        <div class="page_l_img">
                            <img src="../img/goods.jpg" alt="">
                        </div>
                        <div class="page_l_t clear">
                            <div class="pre"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
                            <div class="small_p">
                                <ul class="oborder clear">
                                    <li class='zuo'><img src="" alt=""></li>
                                    <li class='zhong'><img src="" alt=""></li>
                                    <li class='you'><img src="" alt=""></li>
                                </ul>
                            </div>
                            <div class="next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
                        </div>
                    </div>

                    <div class="page_r">
                        <p class="page_tit"></p>
                        <e class='page_olsprice'>市场价：<span></span></e>
                        <p class="page_price">E宠价：￥<span></span></p>
                        <span class="wonto">我要买:</span><div class="won clear"><span class="del">-</span><input type="text" value="1" class='shu'><span class="add">+</span></div>

                        <button class="shoppingcar">加入购物车</button>

                    </div>
                </div>
            </div>
                `)
        }
        //懒加载
        Page.prototype.loadmore=function(){
           var pageNo=1;
            $.ajax({
                type:'get',
                url:'../php/loadmore.php?pageNo='+pageNo,

                success:function(data){
                   
                    var res =JSON.parse(data);
                    
                    var $ul =$('<ul/>');
                    $ul.css({
                        'margin-top':100,
                        'margin-left':250
                    })
                    console.log(res);
                    res.forEach((item)=>{
                        var $li =$('<li/>');
                        $li[0].innerHTML=`<img src=${item.img} alt="" />`;
                        $ul.append($li);
                    })
                    $('.page').append($ul);
                    pageNo++;
                    console.log(pageNo);
                }
            })

             console.log(pageNo);
            var lastPage = pageNo;
            window.onscroll=()=>{
                var scrollTop = window.scrollY;
            
                if(scrollTop >= document.body.scrollHeight - window.innerHeight-500){
             
                     console.log(pageNo);
                     console.log(lastPage);
                    if(lastPage == pageNo) return;
             
                     console.log(pageNo);
                    $.ajax({
                        type:'get',
                        url:'../php/loadmore.php?pageNo='+pageNo,
                        success:function(data){
                   
                            var res =JSON.parse(data);
                            
                            var $ul =$('<ul/>');
                            $ul.css({
                                'margin-top':100,
                                'margin-left':250
                            })
                            console.log(res);
                            res.forEach((item)=>{
                                var $li =$('<li/>');
                                $li[0].innerHTML=`<img src=${item.img} alt="" />`;
                                $ul.append($li);
                            })
                            $('.page').append($ul);
                            pageNo++;
                            console.log(pageNo);
                        }
                    })
                
                    lastPage = pageNo;
                }
            }
        }

        //点击加入购物车
        Page.prototype.addcar=function(){
            $('.shoppingcar').on('click',function(){
                var $clone = $('page_r').clone(true);
                
            })
        }

        return Page
    
})