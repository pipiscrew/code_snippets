//http://www.pipiscrew.com/2014/12/php-function-arguments-by-reference/

<?php
 
$likes = 0;
$tat = 0;
 
get_fb_info("samsung", $likes, $tat);
 
echo "{$likes}<br>{$tat}";
 
function get_fb_info($page_handle, &$out_likes, &$out_tat)
{
    $out_likes = 0;
    $out_tat = 0;
 
    try
    {
        //////////////////////////get result
        // Get cURL resource
        $curl = curl_init();
        // Set some options - we are passing in a useragent too here
        curl_setopt_array($curl, array(
                CURLOPT_RETURNTRANSFER=> 1,
                CURLOPT_URL           => "https://graph.facebook.com/{$page_handle}",
                CURLOPT_USERAGENT     => "Mozilla/5.0 (compatible; ABrowse 0.4; Syllable)"
            ));
 
        // Send the request & save response to $response
        $response = curl_exec($curl);
        // Close request to clear up some resources
        curl_close($curl);
        //////////////////////////get result
 
        //////////////////////////parse result
        $detailsJSON = json_decode($response);
 
        if (array_key_exists('talking_about_count', $detailsJSON))
            $out_tat      = $detailsJSON->talking_about_count;
 
        if (array_key_exists('likes', $detailsJSON))
            $out_likes    = $detailsJSON->likes;
        //////////////////////////parse result
 
    } catch(Exception $e){
        $out_tat = $out_likes = 0;
        //echo $e->getMessage();
        //exit;
    }
}
 
?>