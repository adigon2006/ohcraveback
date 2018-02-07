<?php
require_once('../includes/function.php');
$id = $_POST['id'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$bankname = $_POST['bankname'];
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];

checkemail2($email,'bank_admins','bank_admin_id',$id);
if(empty($msg))
{
checkusername2($username,'bank_admins','bank_admin_id',$id);
if(empty($msg))
{
editbankadmin($firstname,$lastname,$bankname,$username,$password,$email,$id);
}
}

echo $msg;
?>