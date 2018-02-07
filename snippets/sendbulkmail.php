<?php
//error_reporting(0);
require_once('../includes/function.php');
$subject = $_POST['subject'];
$message = $_POST['message'];
$group = $_POST['group'];
sendBulkEmail($subject,$group,$message);
echo $msg;
?>