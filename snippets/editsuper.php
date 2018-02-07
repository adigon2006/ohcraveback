<?php
require_once '../includes/Mydbhandler.php';
$dbhandle = new Mydbhandler();
$id = $_POST['id'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];

$dbhandle->checkemail2($email,'super_admin_tbl','super_id',$id);
if(empty($msg))
{
$dbhandle->checkusername2($username,'super_admin_tbl','super_id',$id);
if(empty($msg))
{
$dbhandle->editSuper($firstname,$lastname,$email,$username,$password,$id);
}
}

echo $msg;	
?>