<?php
require_once('../includes/function.php');
$from = $_POST['from'].' 00:00:00';
$to = $_POST['to'].' 00:00:00';
getAllParentMerchantLogs2($from,$to);
echo $allparentmerchantlogs;
?>