<?php
include('../includes/function.php');
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
checkemail($email,'location_merchant');
if(empty($msg))
{
checkusername($username,'location_merchant');
if(empty($msg))
{
addNewLocationMerchant($firstname,$lastname,$mobileno,$parentmerchantname,$email,$username,$password,$address,$latitude,$longitude);

}
}
echo $msg; 


?>