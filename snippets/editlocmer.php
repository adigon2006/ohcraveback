<?php
include('../includes/function.php');
$id = $_POST['id'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$mobileno = $_POST['mobileno'];
$address = $_POST['address'];
$latitude =$_POST['laitude'];
$longitude = $_POST['longitude'];
$parentmerchantname = $_POST['parentmerchant'];
$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];
checkemail2($email,'location_merchant','location_merchant_id',$id);
if(empty($msg))
{
checkusername2($username,'location_merchant','location_merchant_id',$id);
if(empty($msg))
{
editLocationMerchant($firstname,$lastname,$mobileno,$parentmerchantname,$email,$username,$password,$address,$latitude,$longitude,$id);
}
}
echo $msg; 


?>