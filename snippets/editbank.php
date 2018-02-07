<?php
require_once('../includes/function.php');
$id = $_POST['id'];
$bankname = $_POST['bankname'];
editBank($bankname,$id);
echo $msg;
?>