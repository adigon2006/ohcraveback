<?php
require_once('../includes/function.php');
$id = $_POST['id'];
$name = $_POST['name'];
$latitude = $_POST['latitude'];
$longitude = $_POST['longitude'];
$parentmerchant = $_POST['parentmerchant'];
$address = $_POST['address'];
editstore($name,$latitude,$longitude,$parentmerchant,$address,$id);
echo $msg;
?>