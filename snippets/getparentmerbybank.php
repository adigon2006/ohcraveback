<?php
include('../includes/function.php');
$bankname = $_POST['bankname'];
getParentMerchantMenubyid($bankname);
echo $parentmerchantmenu;
?>