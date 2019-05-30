<?php
    include('./conn.php');

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $sex = $_REQUEST['sex'];
    $email = $_REQUEST['email'];



    $sql = "select*from users where user_name='$username'";
    $result = $mysqli->query($sql);
   

    if($result->num_rows==1){
        echo '{"adduser":false}';
        
    }else{
         $insertSql = "INSERT INTO `users`( `user_name`, `user_pwd`, `user_email`, `user_sex`) VALUES ('$username','$password','$email','$sex')";
         echo '{"adduser":true}';
         $mysqli->query($insertSql);
    }
    $mysqli->close();
 
?>