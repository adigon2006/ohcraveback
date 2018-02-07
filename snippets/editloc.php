<?php
require_once('../includes/function.php');
$id = $_POST['id'];
$locname = $_POST['locname'];
editLoc($locname,$id);
echo $msg;	
?>