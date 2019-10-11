//http://php.net/manual/en/language.variables.scope.php

<?php
require('fb.php');
ob_start();

require_once 'firebaseLib.php';

// --- set up your own database here
$url = 'https://csp.firebaseio.com/';
$token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjEzODI3NzQ5MzMsInYiOjAsImlhdCI6MTM4MDE4MjkzMiwiZCI6eyJwcm92aWRlciI6InBhc3N3b3JkIiwiaWQiOiIxIiwiZW1haWwiOiJqb0Bqby5uZXQiLCJoYXNoIjoiZGFlNmUzYjRiYmU1NTgwNDJhM2I3ZTM1NzkyYjhhN2UiLCJzZXNzaW9uS2V5IjoiNjRkYjViYmRjN2RmOWNlMTAyMmY5MzZmYzgzODJlOTUifX0.YLdiuPUTSoapi5nrbOHNlyjU4oogN1dCHRx939sNIBo';
$db = new fireBase($url, $token);

check4enabledEpisodes();

function check4enabledEpisodes()
{
    FB::log($url);
    FB::log($token);
    
    global $url, $token, $db;
    
    $response = $fb->get( '/events/');
    FB::log($response);
    printf("Result: %s\n", $response);
}