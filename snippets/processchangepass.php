<?php
require_once '../includes/Mydbhandler.php';
$dbhandle = new Mydbhandler();
$dbhandle->sessionstart();
$id = $_SESSION['usrid'];

$oldpassword = $_POST['oldpassword'];
$password = $_POST['password'];
$dbhandle->confirmoldpassword($oldpassword,$id);
if(empty($msg))
{
$dbhandle->updatepassword($password,$id);	
}
echo $msg;
?>