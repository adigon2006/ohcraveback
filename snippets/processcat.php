<?php
require_once('../includes/function.php');
$category = $_POST['category'];
addNewCat($category);
echo $msg;
?>