<?php
    include('./conn.php');

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    $sql = "select * from users where user_name='$username' and user_pwd='$password'";
    
    $result = $mysqli->query($sql);
    if($result->num_rows>0){
        echo '{"login":true}';
    }else{
        echo '{"login":false}';
    }

    $mysqli->close();
?>