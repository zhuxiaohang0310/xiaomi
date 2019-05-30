<?php
    include('./conn.php');

    $username = $_REQUEST['username'];

    $sql = "select * from users where user_name='$username'";
    $res = $mysqli->query($sql);

    if($res->num_rows>0){
        echo '{"hasname":true,"msg":"用户名已存在"}';
    }else{
        echo '{"hasname":false,"msg":"用户名可以使用"}';
    }
?>