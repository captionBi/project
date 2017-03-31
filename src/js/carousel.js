define(['jquery','template'],function($,template,top){
        var carousel =function(){
              var self = this;
          };
          carousel.prototype.init=function(){
                console.log('aa');

                 $('body').append(this.template.carousel());

                var $carousel =$('.carousel');
                var $li=$carousel.children('li');
                var $img=$li.children('img');
                var $len =$li.length;
                var timer;
                var index=$len;
                
                timer=setInterval(function(){
                    index--;
                    console.log('aa');
                    $li.eq(index).fadeOut().parent().children().eq(index-1).fadeIn();
                },3000)

          }

           carousel.prototype.template ={
                carousel:template.compile(
            `
             <ul class="carousel">
                <li><img src="../img/pets-1.jpg" alt=""></li>
                <li><img src="../img/pets-2.jpg" alt=""></li>
                <li><img src="../img/pets-3.jpg" alt=""></li>
                <li><img src="../img/pets-4.jpg" alt=""></li>
                <li><img src="../img/pets-5.jpg" alt=""></li>
                <li><img src="../img/pets-6.jpg" alt=""></li>
            </ul>
            `)
           }
        
    return carousel
})
