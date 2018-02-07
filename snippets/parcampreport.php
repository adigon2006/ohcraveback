<?php
require_once('../includes/function.php');
$from = $_POST['from'].' 00:00:00';
$to = $_POST['to'].' 00:00:00';
getAllCampaignReport2($from,$to);
echo $allcampaignreport;
?>