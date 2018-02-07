<?php
require_once '../includes/Mydbhandler.php';
$dbhandle = new Mydbhandler();
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];

$dbhandle->checkemail($email,'super_admin_tbl');
if(empty($msg))
{
$dbhandle->checkusername($username,'super_admin_tbl');
if(empty($msg))
{
$dbhandle->addNewSuper($firstname,$lastname,$email,$username,$password);
}
}

echo $msg;	
?>