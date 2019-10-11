//http://stackoverflow.com/questions/8485027/javascript-url-safe-filename-safe-string
//"John Smith's Cool Page" and return a filename/url safe string like "john_smith_s_cool_page.html", or something to that extent.

var s = "John Smith's Cool Page";
var filename = s.replace(/[^a-z0-9]/gi, '_').toLowerCase();