<?php
require_once('../includes/function.php');
$campaignname = $_POST['campaignname'];
$campaigndesc = $_POST['campaigndesc'];
$productname = $_POST['productname'];
$campaigntype = $_POST['campaigntype'];
$campaignpoint = $_POST['campaignpoint'];
$paidcampaign = $_POST['pointcampaign'];
$bankname = $_POST['bankname'];
$parentmerchant = $_POST['parentmerchant'];
$campaignamount = $_POST['campaignamount'];
$expirydate = $_POST['expirydate'];
$minimumpoint = $_POST['minimumpoint'];
$maximumpoint = $_POST['maximumpoint'];
$campaignvolume = $_POST['campaignvolume'];
$usagelimit = $_POST['usagelimit'];
$getfreeqty = $_POST['getfreeqty'];
$buyqty = $_POST['buyqty'];
$campaignimg = $_SESSION['campimg'];
$campaigncat = $_POST['campaigncat'];

addNewCampaign($campaignname,$campaigndesc,$productname,$campaigntype,$bankname,$parentmerchant,$campaignamount,$expirydate,$minimumpoint,$maximumpoint,$campaignvolume,$usagelimit,$getfreeqty,$buyqty,$campaignimg,$campaigncat,$campaignpoint,$paidcampaign);
unset($_SESSION['campimg']);

echo $msg;

?>