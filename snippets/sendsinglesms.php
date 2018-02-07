<?php
require_once('../includes/function.php');
$subject = $_POST['subject'];
$message = $_POST['message'];
$to = $_POST['to'];
if(substr($to,0,1) == '0')
{
$newmobile = substr_replace($to,'234',0,1);
}
else
{
$newmobile = $to;	
}
 $url = 'http://api.infobip.com/api/v3/sendsms/xml';
  $xml = '<SMS>
<authentication>
<username>intelc</username>
<password>pros412</password>
</authentication>
<message>
<sender>360Rewards</sender>
<text>'.$message.'</text>
<type>longSMS</type>
</message>
<recipients>
<gsm>'.$newmobile.'</gsm>
</recipients>
</SMS>';
  $ch = curl_init();
  curl_setopt( $ch, CURLOPT_URL, $url );
  curl_setopt( $ch, CURLOPT_POST, true );
  curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-Type: text/xml'));
  curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
  curl_setopt( $ch, CURLOPT_POSTFIELDS, $xml );
  $result = curl_exec($ch);
  curl_close($ch);
  echo 'SMS Message sent successfully';
?>