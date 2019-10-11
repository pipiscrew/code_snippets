//http://www.webgalli.com/blog/easily-create-short-urls-with-php-curl-and-goo-gl-or-bit-ly/


//get analytics for a goo.gl - https://developers.google.com/url-shortener/v1/getting_started?csw=1#url_analytics
//https://www.googleapis.com/urlshortener/v1/url?shortUrl=http://goo.gl/fbsS&projection=FULL

//goo.gl
<!--?php function goo_gl_short_url($longUrl) {     $GoogleApiKey = 'enter-your-google-api-key-here';     $postData = array('longUrl' =--> $longUrl, 'key' =>; $GoogleApiKey);
    $jsonData = json_encode($postData);
    $curlObj = curl_init();
    curl_setopt($curlObj, CURLOPT_URL, 'https://www.googleapis.com/urlshortener/v1/url');
    curl_setopt($curlObj, CURLOPT_RETURNTRANSFER, 1);
    //As the API is on https, set the value for CURLOPT_SSL_VERIFYPEER to false. This will stop cURL from verifying the SSL certificate.
    curl_setopt($curlObj, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($curlObj, CURLOPT_HEADER, 0);
    curl_setopt($curlObj, CURLOPT_HTTPHEADER, array('Content-type:application/json'));
    curl_setopt($curlObj, CURLOPT_POST, 1);
    curl_setopt($curlObj, CURLOPT_POSTFIELDS, $jsonData);
    $response = curl_exec($curlObj);
    $json = json_decode($response);
    curl_close($curlObj);
    return $json->id;
}
?>

<!--?php
$long_url = "http://webgalli.com/blog/this-is-an-example-of-a-long-url";
echo goo_gl_short_url($long_url);
?-->



//bit.ly
<!--?php
function bit_ly_short_url($url, $format='txt') {
    $login = "your-bitly-login";
    $appkey = "your-bitly-application-key";
    $bitly_api = 'http://api.bit.ly/v3/shorten?login='.$login.'&apiKey='.$appkey.'&uri='.urlencode($url).'&format='.$format;
    $ch = curl_init();
    curl_setopt($ch,CURLOPT_URL,$bitly_api);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,5);
    $data = curl_exec($ch);
    curl_close($ch);
    return $data;
}
?-->

<!--?php
$long_url = "http://webgalli.com/blog/this-is-an-example-of-a-long-url";
echo bit_ly_short_url($long_url);
?-->