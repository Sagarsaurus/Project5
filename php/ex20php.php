<?php
//get the q parameter from URL
$woeid=$_GET["woeid"];
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D".$woeid."&format=json&diagnostics=true");
//$file = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D".$woeid."&format=json&diagnostics=true";

// $json = json_decode(file_get_contents($file),true);
$json = curl_exec($curl);
curl_close($curl);
echo $json;

?>