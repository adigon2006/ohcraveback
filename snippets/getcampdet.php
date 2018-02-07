<?php
include('../includes/function.php');
$id = $_POST['id'];
getCampaignDetails($id);
echo $campaigndet;
?>