<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
	</head>

	<body>

		<?php
        include 'ChromePhp.php';

        $inData = file_get_contents('https://testarea.firebaseio.com/yt.json');

        $json = json_decode($inData, true);

        if ($json === null) {
            echo "json is null!";
            return;
        }

        //ChromePhp::log($json);

        //setup a connection with mySQL
        $mysqli = new mysqli("localhost", "user", "pass", "mysql dbase");

        /* check connection */
        if (mysqli_connect_errno()) {
            printf("Connect failed: %s\n", mysqli_connect_error());
            exit();
        }

        //set all utf8!
        //@ dbase - charset : utf8    collation : utf8_unicode_ci
        $mysqli -> query("SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");

        //create the prepared statement
        if ($stmt = $mysqli -> prepare("INSERT INTO VIDEOS (video, user, rate, comment) values (?, ?, ?, ?)")) {

            //bind our params
            $stmt -> bind_param('ssss', $videoID, $user, $rate, $comment);

            //lOOP through all nodes
            foreach ($json as $key0 => $value) {
                //each node has data sub-node
                $dataSubNodes = $value['data'];

                //if there is no node data!
                if ($dataSubNodes == null)
                    continue;

                //foreach child on data
                foreach ($dataSubNodes as $key1 => $value2) {

                    //foreach child-child on data
                    foreach ($value2 as $key2 => $value3) {

                        /* Set our params */
                        $videoID = $key2;
                        $user = $value3['username'];
                        $rate = $value3['rate'];
                        $comment = $value3['comment'];

                        /* Execute the prepared Statement */
                        $stmt -> execute();

                    }
                }
            }

            //close the statement
            $stmt -> close();

            //close connection
            $mysqli -> close();

            echo "all imported <br> connection closed!";
        } else
            echo "error!";
		?>
	</body>
</html>