<?php
	header('Content-Type: text/html; charset=utf-8');
	

//OR
	echo("<meta http-equiv='content-type' content='text/html; charset=utf-8'></meta>");

//warning this doesnt provide unicode :
	header("Content-Type: application/json", true);

	
//forceutf8 - convert
https://github.com/neitanod/forceutf8