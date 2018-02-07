<?php
include('../includes/function.php');
$id = $_POST['id'];
$name = $_POST['name'];
$mobileno = $_POST['mobileno'];
$address1 = $_POST['address1'];
$bankname = $_POST['bankname'];
$email = $_POST['email'];
$location = $_POST['loc'];
$username = $_POST['username'];
$password = $_POST['password'];
$state = $_POST['state'];
$country = $_POST['country'];
$zipcode = $_POST['zipcode'];
$category = $_POST['category'];
$category2 = $_POST['category2'];


checkemail2($email,'parent_merchant','parent_merchant_id',$id);
if(empty($msg))
{
checkusername2($username,'parent_merchant','parent_merchant_id',$id);
if(empty($msg))
{
editMerchant($name,$mobileno,$address1,$bankname,$email,$location,$username,$password,$state,$country,$zipcode,$id,$category,$category2);
}
}


echo $msg;


?>