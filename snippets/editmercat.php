<?php
require_once('../includes/function.php');
$id = $_POST['id'];
$category = $_POST['category'];
editMerCat($category,$id);
echo $msg;
?>