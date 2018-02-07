<?php
require_once '../includes/Mydbhandler.php';
$dbhandle = new Mydbhandler();
$id = $_POST['id'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$gender = $_POST['gender'];
$mobileno = $_POST['mobileno'];
$address1 = $_POST['address1'];
$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];
$state = $_POST['state'];
$country = $_POST['country'];
$zipcode = $_POST['zipcode'];

$dbhandle->checkemail2($email,'user_tbl','user_id',$id);
if(empty($msg))
{
$dbhandle->checkusername2($username,'user_tbl','user_id',$id);
if(empty($msg))
{
$dbhandle->updateCustomer($firstname,$lastname,$gender,$mobileno,$address1,$email,$username,$password,$state,$country,$zipcode,$id);	
}
}

echo $msg;


?>