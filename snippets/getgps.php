<?php
$address = $_GET['address'];
$prepAddr = str_replace(' ','+',$address);
$geocode=file_get_contents('http://maps.google.com/maps/api/geocode/json?address='.$prepAddr.'&sensor=false');
$output= json_decode($geocode);
$lat = $output->results[0]->geometry->location->lat;
$long = $output->results[0]->geometry->location->lng;
echo $lat.','.$long;
?>