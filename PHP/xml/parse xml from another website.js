//<?xml version='1.0' encoding='UTF-8'?><entry xmlns='http://www.w3.org/2005/Atom'><title type='text'>Bjarne Stroustrup: How to Code Like Bjarne Stroustrup</title></entry>

    $xmlData = simplexml_load_string(file_get_contents("http://gdata.youtube.com/feeds/api/videos/{$id}?fields=title"));

    //from xml parse the attribute title
    $title = (string)$xmlData -> title;