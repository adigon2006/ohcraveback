<?php
require_once '../includes/Mydbhandler.php';
$dbhandle = new Mydbhandler();
$planname = $_POST['planname'];
$plantitle= $_POST['plantitle'];
$assignuser = $_POST['assignuser'];
$dbhandle->addNewPlan($planname,$plantitle,$assignuser);
echo $msg;
?>