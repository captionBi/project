define(['jquery','template'],function($,template,top){
        var carousel =function(){
              var self = this;
          };
          carousel.prototype.init=function(){
                console.log('aa');

                 $('body').append(this.template.carousel());

              
                var $CarouselImg = $('.CarouselImg ul');
                var $numLi=$('.CarouselFooter ul li')


                var $li = $('.CarouselImg ul li')
                var index=0;
                var len=$li.length;

                $li.fadeOut(0).eq(index).fadeIn(0);
                $numLi.eq(index).addClass('active')
                function rollOne(){
                    if(index <len-1){
                    $li.eq(index).fadeOut(600).next().fadeIn(600);
                    $numLi.eq(index+1).addClass('active').siblings().removeClass('active');
                    index++;
                }else if(index == len-1){
                        $li.eq(index).fadeOut(600).siblings().eq(0).fadeIn(600);
                        index=0;
                        $numLi.eq(index).addClass('active').siblings().removeClass('active');
                    }
                }

                 var startRollOne=setInterval(rollOne,4000);
              

                var $CarouselFooter =$('.CarouselFooter');
                $CarouselFooter.on('mouseover','li',function(){
                        clearInterval(startRollOne);
                         $(this).addClass('active').siblings().removeClass('active');
                        index=$(this).index();
                       $li.eq(index).stop().fadeIn(600).siblings().fadeOut(600);
                })

                $CarouselFooter.on('mouseleave','li',function(){
                        startRollOne=setInterval(rollOne,4000);

                })
          }

           carousel.prototype.template ={
                carousel:template.compile(
            `
            <div class="Carousel ">
        <div class="CarouselImg wrapper">
            <ul class="clear">
                <li class="active"><img src="../img/pets-1.jpg" alt=""></li>
                <li><img src="../img/pets-2.jpg" alt=""></li>
                <li><img src="../img/pets-3.jpg" alt=""></li>
                <li><img src="../img/pets-4.jpg" alt=""></li>
                <li><img src="../img/pets-5.jpg" alt=""></li>
                <li><img src="../img/pets-6.jpg" alt=""></li>
            </ul>
        </div>
       
            <div class="clear page">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
            </div>
  
    </div>
            `)
           }
        
    return carousel
})
