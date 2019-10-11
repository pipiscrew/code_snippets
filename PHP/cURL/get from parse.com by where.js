<?php
	//http://blog.parse.com/2013/03/19/implementing-scalable-search-on-a-nosql-backend/
	
	//10/4/2014-https://parse.com/questions/query-for-analytics-event-data
	
	//10/6/2014 even writes that supports event queries - tested and no working!
	//https://www.parse.com/docs/rest#analytics-custom
	
	$headers = array( "X-Parse-Application-Id: x" ,  "X-Parse-REST-API-Key: y", "Content-Type: application/json");

	$params = array("where" => array("foo" => "bar1"));

	$url = "https://api.parse.com/1/classes/TestObject";
	$url .= '?' . http_build_query($params);

	$rest = curl_init();
	curl_setopt($rest,CURLOPT_URL,$url);
	curl_setopt($rest,CURLOPT_HTTPHEADER,$headers);
	curl_setopt($rest, CURLOPT_RETURNTRANSFER, true);
	
	$response = curl_exec($rest);

	var_dump($response);
	curl_close($rest);
?>