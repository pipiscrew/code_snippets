//https://code.google.com/p/bitly/source/browse/trunk/client.php
ini_set("soap.wsdl_cache_enabled", "0");

if(!empty($_GET['url'])) {
    $url = $_GET['url'];
} else {
    $url = '';
}

if( !empty($url)) {
    $client = new SoapClient("http://ruslanas.com/bitly/bitly.wsdl");
    try {
        $short = $client->getShortened($url);
    } catch(Exception $e) {
        echo 'Exception: ' . $e->getMessage();
    }
}
?>
<form action="" method="get">
    <label for="url">URL:</label>
    <input type="text" size="40" name="url" id="url" value="<?=$url?>"/>
    <input type="submit" value="shorten"/>
    <div style="padding:1em"><?=$short?></div>
</form>