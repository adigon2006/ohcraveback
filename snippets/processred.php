<?php
require_once('../includes/function.php');
$name = $_POST['name'];
$state = $_POST['state'];
$city = $_POST['city'];
$location = $_POST['loc'];
$zipcode = $_POST['zipcode'];
addnewredemptionpartner($name,$state,$city,$location,$zipcode);
echo $msg;
?>