<?php
require_once '../includes/Mydbhandler.php';
//insertSuperlog($_SESSION['namefull'] .' logged out');
$dbhandle = new Mydbhandler();
session_destroy();
$dbhandle->redirect_to('../');
?>