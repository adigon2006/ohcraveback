<?php
require_once('../includes/function.php');
$category = $_POST['category'];
addNewMerCat($category);
echo $msg;
?>