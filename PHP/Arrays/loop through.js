$user_cols=null;

//dbase
foreach($db_rec as $row)
	$user_cols[] = array(id=>$row["user_id"],name=>$row["fullname"]);

//loop through array
foreach($users as $user_row)
{
	echo $user_row["fullname"];
}

//////////////////////////////////////////////
    //lOOP through all nodes
    foreach ($json as $key1 => $value1) {
        $episodes = $value1['episodes'];

        if (is_null($episodes))//there is no episodes
            continue;

        foreach ($episodes as $key2 => $value2) {
            $episode = $value2['enabled'];
            $twitterHash = $value2['twitterHash'];

            if (is_null($episode))//not even started (the field not exists)
                continue;
            else {
                if (is_null($twitterHash))//there is no twitter hash continue the loop!
                    continue;

                //key1=event key
                //key2=episode key

                FB::log($key1 . ">" . $key2);
                //result 1=enabled or 0=disable
                if ($episode == 1) {
                    FB::log("enabled");

                    //call twitter API
                    $parseResult = parseTwitter($twitterHash);

                    //if there is no tweets
                    if (empty($parseResult))
                        FB::log("is null");
                    else {
                        foreach ($parseResult as $resultItem) {
                            //get twitter created datetime and convert it to unix timestamp
                            $date = $resultItem['created_at'];
                            $gmt_date = gmdate('Y-m-d H:i', strtotime($date));
                            //echo $date . " - " . $gmt_date . " - " . strtotime($gmt_date . " UTC") . '<br>';
                            //get twitter created datetime and convert it to unix timestamp
                            
                            $twitter_timestamp=strtotime($gmt_date . " UTC");
                            $twitter_comment = $resultItem['created_at'];
                            $twitter_username = $resultItem['screen_name'];

                            //check if exists!
                            checkIfTweetExists($key1,$key2,$twitter_timestamp,$twitter_username);
                        }
                    }
                } else
                    FB::log("disabled");
            }
        }
    }