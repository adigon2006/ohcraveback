<?php
include('../includes/function.php');
$name = $_POST['name'];
$mobileno = $_POST['mobileno'];
$address1 = $_POST['address1'];
$bankname = $_POST['bankname'];
$category2 = $_POST['category2'];
$email = $_POST['email'];
$location = $_POST['loc'];
$username = $_POST['username'];
$password = $_POST['password'];
$state = $_POST['state'];
$country = $_POST['country'];
$zipcode = $_POST['zipcode'];
$category = $_POST['category'];

checkemail($email,'parent_merchant');
if(empty($msg))
{
checkusername($username,'parent_merchant');
if(empty($msg))
{
addNewMerchant($name,$mobileno,$address1,$bankname,$email,$location,$username,$password,$state,$country,$zipcode,$category,$category2);
}
}


echo $msg;


?>