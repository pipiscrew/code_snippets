//references :
//Firebase Custom Login -  https://www.firebase.com/docs/security/custom-login.html
//Firebase REST API -  https://www.firebase.com/docs/rest-api.html
//
//Firebase Token Generator for PHP - https://github.com/firebase/firebase-token-generator-php
//Encode and decode JSON Web Tokens (JWT) in PHP - https://github.com/firebase/php-jwt
//Firebase PHP Helper Library - https://github.com/ktamas77/firebase-php
 
*1*
//upload to server FirebaseToken.php + JWT.php + firebaseLib.php + 
//lib/FirebaseInterface.php + (warning rename it)
//lib/firebaseStub.php
 
*2*
<?php
include_once "FirebaseToken.php";
require_once 'firebaseLib.php';
 
$secret = "dHQkvze--"; //FIREBASE SECRET
$tokenGen = new Services_FirebaseTokenGenerator($secret);
$token = $tokenGen -> createToken(array("app_user_id" => 1234, "isAdmin" => true));
 
$url = 'https://x.firebaseio.com/';
 
$fb = new fireBase($url, $token);
 
$response = $fb -> get('/debugNode/');
//echo $response;  //using firebaseLib by default is json, no need to use 'REST API' .json
 
$jsonArray = json_decode($response,true);
 
echo "<title>".$jsonArray['title']."</title>";
 
//enumerate all
foreach ($jsonArray as $key => $value){
    echo "$key: $value<br>";
}
 
?>
 
//firebase rule
"debugNode": {
            ".read": "auth.isAdmin == true",
            ".write": "auth.isAdmin == true"
}