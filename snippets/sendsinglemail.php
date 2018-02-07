<?php
require_once('../includes/function.php');
$subject = $_POST['subject'];
$message = $_POST['message'];
$to = $_POST['to'];
$header = "MIME-Version: 1.0" ."\r\n";
$header .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$header .= 'From: <noreply@360rewards.com>' . "\r\n";
mail($to,$subject,$message,$header);
$msg = "Message Sent Successfully to ".$to."";
//insertSMSEmaillog('Super Admin sent a single email','email_logs');
echo $msg;
?>