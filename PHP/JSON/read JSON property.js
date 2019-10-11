$response = $fb -> get('/competitions/' . $compID . '/bids/' . $userID);

$json = json_decode($response);

echo $json->is_informed;