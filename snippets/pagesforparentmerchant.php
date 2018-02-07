<?php
require_once('../includes/function.php');
$page = $_POST['page'];
$perpage = 10;
$start = ($page - 1) * $perpage;
$end = $perpage;
getAllParentMerchant2($page,$start,$end);
echo $allmerchant;
echo '<script src="../assets/global/plugins/jquery.min.js" type="text/javascript"></script>
<script src="../js/viewparentmerchant.js"></script>
';
?>