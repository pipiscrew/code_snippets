//http://php.net/manual/en/function.strtotime.php

        $date = $resultItem['created_at'];
        //gmdate used so not change GMT
        //strtotime convert to unix
        $gmt_date = gmdate('Y-m-d H:i', strtotime($date));

		//strtotime - convert to unix timestamp on UTC (+000 GMT)
		//otherwise get the timezone from server
        echo $date . " - " . $gmt_date . " - " . strtotime($gmt_date. " UTC") . '<br>';