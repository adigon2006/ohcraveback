<?php
require_once('../includes/function.php');
$id = $_POST['id'];
$amount = $_POST['amount'];
$points = $_POST['points'];

updateLoyaltySetting($id,$amount,$points);
echo $msg;
?>