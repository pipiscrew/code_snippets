    function getCompleteURL() {
        return getServerURL().$_SERVER["REQUEST_URI"];
    }
    
    $url = getCompleteURL();
    $url_info = parse_url($url);