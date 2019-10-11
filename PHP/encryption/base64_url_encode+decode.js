//http://stackoverflow.com/a/5835352


-Is it safe to pass raw base64 encoded strings via GET parameters?
-No, you would need to url-encode it, since base64 strings can
contain the "+", "=" and "/" characters which could alter the meaning of your data - look like a sub-folder.



function base64_url_encode($input) {
 return strtr(base64_encode($input), '+/=', '-_,');
}

function base64_url_decode($input) {
 return base64_decode(strtr($input, '-_,', '+/='));
}



//or

$str = 'Some String';

$encoded = urlencode( base64_encode( $str ) );
$decoded = base64_decode( urldecode( $encoded ) )