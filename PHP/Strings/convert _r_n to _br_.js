//http://stackoverflow.com/a/5049048
//http://php.net/manual/en/function.nl2br.php

when on html-textarea element is multiline
and save on dbase.. Afterwards when we like to display it on html area (convert \r or \n) to <br>

nl2br("This\r\nis\n\ra\nstring\r");


//jQ flavor
//http://stackoverflow.com/a/2919363
function nl2br (str, is_xhtml) {   
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';    
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
}