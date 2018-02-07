<?php
require_once('../includes/function.php');
$from = $_POST['from'].' 00:00:00';
$to = $_POST['to'].' 00:00:00';
getAllCustomerRewardsReport2($from,$to);
echo $allcustomerrewardreport;
?>