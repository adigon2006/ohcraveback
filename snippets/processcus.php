<?php
require_once '../includes/Mydbhandler.php';
$dbhandle = new Mydbhandler();
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

$dbhandle->checkemail($email,'user_tbl');
if(empty($msg))
{
$dbhandle->checkusername($username,'user_tbl');
if(empty($msg))
{
$dbhandle->addNewCustomer($firstname,$lastname,$gender,$mobileno,$address1,$email,$username,$password,$state,$country,$zipcode);	
}
}

echo $msg;


?>