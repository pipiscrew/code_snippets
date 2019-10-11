   $jsonArray = json_decode($response,true);

   foreach ($jsonArray as $key => $value){
        echo "$key: $value<br>";
    };