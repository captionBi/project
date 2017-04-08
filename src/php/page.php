<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'exam';

    // 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);

    $page_no = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;

    $sql = 'select * from shopping order by id limit '. ($page_no-1)*3 .',3';
     // $sql ='select * from shopping';

    $conn->query("set names utf8"); //设置编码为utf8 

    $result =$conn->query($sql);

    $row = $result->fetch_all(MYSQLI_ASSOC);

    echo json_encode($row,JSON_UNESCAPED_UNICODE);

    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 
    //echo "连接成功";
?>