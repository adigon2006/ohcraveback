<?php
include('../includes/function.php');
$id = $_POST['id'];
getLocationMerchantDetails($id);
echo $locationmerchantdet;

?>