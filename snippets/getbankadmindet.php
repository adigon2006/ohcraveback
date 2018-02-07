<?php
include('../includes/function.php');
$id = $_POST['id'];
getCustomerDetails($id);
echo $customerdet;
?>