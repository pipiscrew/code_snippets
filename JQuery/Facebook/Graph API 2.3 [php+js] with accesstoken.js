reference
https://developers.facebook.com/docs/apps/changelog

insights
https://developers.facebook.com/docs/graph-api/reference/v2.3/insights

today plain graph stopped work without access_token

1-create an app @ http://developers.facebook.com
2-goto https://developers.facebook.com/tools/access_token/ copy the App Token

//JS flavor :
$.get( "https://graph.facebook.com/v2.3/" + $("#page_url").val() + "?access_token=x|y-z", function( data ) {
  var likes = parseInt(data.likes);
  var tat = parseInt(data.talking_about_count);
  var  res =  (tat/likes) * 100;
  $("#rate").val(parseFloat(res).toFixed(2));
});


//PHP flavor :
function getFB_detail_page($id)
{
    // Get cURL resource
    $curl = curl_init();
    // Set some options - we are passing in a useragent too here
    curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER=> 1,
            CURLOPT_URL           => 'https://graph.facebook.com/v2.3/'.$id."?access_token=x|y-z",
            CURLOPT_USERAGENT     => 'Mozilla/5.0 (compatible; ABrowse 0.4; Syllable)'
        ));
 
    // Send the request & save response to $resp
    $resp = curl_exec($curl);
    // Close request to clear up some resources
    curl_close($curl);
 
    return $resp;
}

