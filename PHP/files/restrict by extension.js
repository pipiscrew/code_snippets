$acceptedFormats = array('mp4', 'webm', 'flv');

if(!in_array(pathinfo(strtolower($filename), PATHINFO_EXTENSION), $acceptedFormats)) {
    echo 'error';
}