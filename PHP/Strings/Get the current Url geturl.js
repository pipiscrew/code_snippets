//http://www.joshuawinn.com/facebooks-sharer-php-longer-deprecated-2014/

function getUrl() {
    $url  = isset( $_SERVER['HTTPS'] ) && 'on' === $_SERVER['HTTPS'] ? 'https' : 'http';
    $url .= '://' . $_SERVER['SERVER_NAME'];
    $url .= in_array( $_SERVER['SERVER_PORT'], array('80', '443') ) ? '' : ':' . $_SERVER['SERVER_PORT'];
    $url .= $_SERVER['REQUEST_URI'];
    return $url;
}

// Print Share link on Page
$encoded_url = urlencode( getUrl() );
if ( !empty($encoded_url) ){ ?>
<a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $encoded_url; ?>" target="_blank">
 Share this page on Facebook
</a>
<?php } ?>