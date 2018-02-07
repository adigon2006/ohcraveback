<?php
require_once('../includes/function.php');
$locname = $_POST['locname'];
addNewLoc($locname);
echo $msg;
?>