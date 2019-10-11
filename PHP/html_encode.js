function html_encode($str){
	global $charSet;
	$str = preg_replace(array('/&/', '/</', '/>/', '/"/'), array('&amp;', '&lt;', '&gt;', '&quot;'), $str);  // Bypass PHP to allow any charset!!
    $str = htmlentities($str, ENT_QUOTES, $charSet, false);
	return $str;
}