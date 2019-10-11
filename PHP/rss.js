//https://daveismyname.blog/create-an-rss-feed-with-php

<?php header('Content-type: application/xml'); 

define('DB_SERVER', 'localhost');
define('DB_USER', 'username');
define('DB_PASSWORD', 'password');
define('DB_NAME', 'database');
 
$conn = new PDO("mysql:host=".DB_SERVER.";port=8889;dbname=".DB_NAME, DB_USER, DB_PASSWORD);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

echo "<rss version='2.0' xmlns:atom='http://www.w3.org/2005/Atom'>\n";
echo "<channel>\n";

echo "<title>Demo RSS Feed</title>\n";
echo "<description>RSS Description</description>\n";
echo "<link>http://www.mydomain.com</link>\n";

 
$stmt = $conn->query('SELECT * FROM news ORDER BY newsDate DESC LIMIT 10');
while($row = $stmt->fetch(PDO::FETCH_OBJ)) {
    
     echo "<item>n";
         echo "<title>$row->newsTitle</title>\n";
         echo "<description>$row->newsDesc</description>\n";
         echo "<pubDate>".date('D, d M Y H:i:s',strtotime($row->newsDate))." GMT</pubDate>\n";
         echo "<link>http://www.mydomain.com/$row->newsSlug</link>\n";
         echo "<guid>http://www.mydomain.com/$row->newsSlug</guid>\n";
         echo "<atom:link href='http://www.mydomain.com/$row->newsSlug' rel='self' type='application/rss+xml'/>\n"
     echo "</item>\n";

}

echo "</channel>\n";
echo "</rss>\n";
?>

//Images can be displayed in the description by using a CDATA tag followed by the image source, used with the description go inside the CDATA:

<description><![CDATA[<img src='pathtoimage' alt=''> $row->newsDesc]]></description>