<?php
require_once('../includes/function.php');
$name = $_POST['name'];
$latitude = $_POST['latitude'];
$longitude = $_POST['longitude'];
$parentmerchant = $_POST['parentmerchant'];
$address = $_POST['address'];
addnewstore($name,$latitude,$longitude,$parentmerchant,$address);
echo $msg;
?>