

$(function(){
    $('.login-btn').find('a').on('click',function(){
     
     var $_phone = $('#phone').val();
     ajax({
        'type':"GET",
        'url':'../php/login.php',
        'data':{
            "phone":$_phone
        },
        callback:function(str){
            console.log(str);
            var $string='登录成功'
            if(str===$string){
                window.location.href='../html/index.html';
                var $span= $('<span>/')
                var $str ='欢迎'+ $_phone + '光临';
                $span.html($str);
                console.log($span);
                $('body').append($span);
            }
            
        }
     })

     return false;
    })
})
