<?php
require_once '../includes/Mydbhandler.php';
$dbhandle = new Mydbhandler();
$username = $_POST['username'];
$password = $_POST['password'];
$dbhandle->findAdmin($username,$password);
echo $msg;
?>