<?php
include('../includes/function.php');
$id = $_POST['id'];
getParentMerchantDetails($id);
echo $parentmerchantdet;
?>