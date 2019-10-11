//https://developers.google.com/maps/documentation/geocoding/start#ReverseGeocoding
//create credentials @ https://console.developers.google.com/apis/

//Convert lat/lon to address
function address_lookup($lat, $lon){

	$g_service = "https://maps.googleapis.com/maps/api/geocode/json?latlng={$lat},{$lon}&key=#yourkey#";

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $g_service);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	$response = json_decode(curl_exec($ch), true);

	// if Status Code is ZERO_RESULTS, OVER_QUERY_LIMIT, REQUEST_DENIED or INVALID_REQUEST
	if ($response['status'] != 'OK') {
		return null;
	}
	
	return $response['results'][0]['formatted_address'];
 
} 


//or Convert address to lat/lon
//http://www.andrew-kirkpatrick.com/2011/10/google-geocoding-api-with-php/
<?php
 
function lookup($string){
 
   $string = str_replace (" ", "+", urlencode($string));
   $details_url = "http://maps.googleapis.com/maps/api/geocode/json?address=".$string."&sensor=false";
 
   $ch = curl_init();
   curl_setopt($ch, CURLOPT_URL, $details_url);
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
   $response = json_decode(curl_exec($ch), true);
 
   // If Status Code is ZERO_RESULTS, OVER_QUERY_LIMIT, REQUEST_DENIED or INVALID_REQUEST
   if ($response['status'] != 'OK') {
    return null;
   }
 
   print_r($response);
   $geometry = $response['results'][0]['geometry'];
 
    $longitude = $geometry['location']['lng'];
    $latitude = $geometry['location']['lat'];
 
    $array = array(
        'latitude' => $geometry['location']['lat'],
        'longitude' => $geometry['location']['lng'],
        'location_type' => $geometry['location_type'],
    );
 
    return $array;
 
}
 
$city = 'San Francisco, USA';
 
$array = lookup($city);
print_r($array);
 
?>