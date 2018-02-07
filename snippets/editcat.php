<?php
require_once('../includes/function.php');
$id = $_POST['id'];
$category = $_POST['category'];
editCat($category,$id);
echo $msg;
?>