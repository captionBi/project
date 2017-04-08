<?php 
    
    $phone = $_GET['phone'];

    $con = new mysqli('localhost','root','','exam'); 

    //1获取数据的用户信息
    $sql = 'select * from user where phone='.$phone.'';


    $res = $con->query($sql);
    //2 判断当前登录的用户是否已注册

    if($res->num_rows>0){
         echo "登录成功";
         
    }else{
        echo "登录失败";
    } 
    $con->close();    
 ?>