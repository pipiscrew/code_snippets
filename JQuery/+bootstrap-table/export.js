//download 
//https://github.com/kayalshri/tableExport.jquery.plugin

//read
//http://wenzhixin.net.cn/p/bootstrap-table/docs/extensions.html#export

//@ page import
<script src="assets/bootstrap-table-export.min.js"></script> 

<script type="text/javascript" src="assets_export/tableExport.js"></script>
<script type="text/javascript" src="assets_export/jquery.base64.js"></script>

<!--only for PDF-->

<script type="text/javascript" src="assets_export/jspdf/libs/sprintf.js"></script>
<script type="text/javascript" src="assets_export/jspdf/jspdf.js"></script>
<script type="text/javascript" src="assets_export/jspdf/libs/base64.js"></script>

<!--only for PNG-->
<script type="text/javascript" src="assets_export/html2canvas.js"> </script>

//at table tag 
    <table id="votes_tbl"
           data-toggle="table"
           data-show-export=true

//if you like PDF add also
data-export-types= "['json', 'xml', 'csv', 'txt', 'sql', 'excel', 'powerpoint', 'pdf']"

//warning the base64.js is not support unicode!! replace with 
//https://github.com/wenzhixin/bootstrap-table/issues/189
//https://gist.github.com/wenzhixin/09e218c884f4f380b68a

jQuery.base64 = (function($) {
 
    // private property
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
 
    // private method for UTF-8 encoding
    function utf8Encode(string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
 
    function encode(input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = utf8Encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                keyStr.charAt(enc1) + keyStr.charAt(enc2) +
                keyStr.charAt(enc3) + keyStr.charAt(enc4);
        }
        return output;
    }
 
    return {
        encode: function (str) {
            return encode(str);
        }
    };
 
}(jQuery));