//http://allseeing-i.com/How-to-setup-your-PHP-site-to-use-UTF8

<meta http-equiv="content-type" content="text/html; charset=utf-8"></meta>
<?php
//no work ?
//header('content-type: text/html; charset: utf-8');

                    echo "Time and Date of Tweet: " . $items['created_at'] . "<br />";
                    echo "Tweet: " . $items['text'] . "<br />";
                    echo "Tweeted by: " . $items['user']['name'] . "<br />";
                    echo "Screen name: " . $items['user']['screen_name'] . "<br />";
                    echo "Followers: " . $items['user']['followers_count'] . "<br />";
                    echo "Friends: " . $items['user']['friends_count'] . "<br />";
                    echo "Listed: " . $items['user']['listed_count'] . "<br /><hr />";
}
?>


//'h
echo("<meta http-equiv='content-type' content='text/html; charset=utf-8'></meta>");