$(function(){
    $('#phone').on('blur',function(){
        var $_phone = $('#phone').val();
        //获取input，判断手机号码是否符合要求
        if(/^1[34578]\d{9}$/.test($_phone)){
            $('#phone').parent().next().css({
                display:'none'
            });
        }else{
            $('#phone').parent().next().css({
                display:'block'
            });
            return false ;
        }
    })
    $('#yanzhengma').on('blur',function(){
        var $_font=$('#font').text();
        var $_yanzhengma=$('#yanzhengma').val();
        if($_font==$_yanzhengma){
            $('#yanzhengma').parent().next().css({
                display:'none'
            });
        }else{
            $('#yanzhengma').parent().next().css({
                display:'block'
            });
            return false ;
        }
    })
    $('#psw').on('blur',function(){
        //获取input，判断密码 是否符合要求
        var $_psw = $('#psw').val() ;
        if(/^\S{8,20}$/.test($_psw)){   
            $('#psw').parent().next().css({
                display:'none'
            });
        }else{
            $('#psw').parent().next().css({
                display:'block'
            });
            return false ;
        }
    })
    $('#re-psw').on('blur',function(){
             
     //获取input，判断第二次密码是否相同
        var $_repsw = $('#re-psw').val() ;
         var $_psw = $('#psw').val() ;
        if($_psw == $_repsw){   
            $('#re-psw').parent().next().css({
                display:'none'
            });
        }else{
            $('#re-psw').parent().next().css({
                display:'block'
            });
            return false ;
        }
    })
    $('.reg-btn').find('a').on('click',function(){
        var $_phone = $('#phone').val();
        var $_psw = $('#psw').val() ; 
        var $_repsw = $('#re-psw').val();
        console.log($_phone,$_psw,$_repsw);
        $.ajax({
                method:'GET',
                url:'../php/reg.php',
                data:{
                    "phone":$_phone,
                    "password":$_psw,
                    "repassword":$_repsw
                },
                success:function(str){
                    console.log(str);
                }
        })
        return false;
    })

    
    var str = '0123456789abcdefghijklmnopqrstuvwxyz';

    $('#unclear').on('click',function(){
        randomCode();
    })
    randomCode();
    function randomCode(){
    var _code = '';
    for(var i=0;i<4;i++){
        var index = parseInt(Math.random()*str.length);
        _code += str[index];
        }
        $('#font').text(_code.toUpperCase());
    }
     
})