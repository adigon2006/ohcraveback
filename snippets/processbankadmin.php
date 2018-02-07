<?php
require_once('../includes/function.php');
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$bankname = $_POST['bankname'];
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];

checkemail($email,'bank_admins');
if(empty($msg))
{
checkusername($username,'bank_admins');
if(empty($msg))
{
addnewbankadmin($firstname,$lastname,$bankname,$username,$password,$email);
}
}

echo $msg;
?>