<?php 
    $phone = $_GET['phone'];
    $password = $_GET['password'];
    $repassword=$_GET['repassword'];

    $con = new mysqli('localhost','root','','exam');

    $sql ='select * from user';
    $res = $con->query($sql);

    $bool = true;

    if($res->num_rows>0){
        while ($row =$res->fetch_assoc()) {
            if($row['phone'] ==$phone){
               $bool = false; 
            }
        }
    }
    // echo  is_string($phone);
    // echo  is_string($password);
    // echo  is_string($repassword);

    if($bool){
        $sql = 'insert into user(password,repassword,phone) values('.$password.','.$repassword.','.$phone.')';
        if($con->query($sql)){
            echo "注册成功";
        }else{

            echo "注册失败";
        }
    }else{
        echo '用户已注册';
    }

  $con->close();
 ?>