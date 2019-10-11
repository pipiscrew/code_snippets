'http://www.hyperorg.com/blogger/2010/01/16/convert-text-with-urls-to-text-with-hyperlinks/

'ONLINE EXAMPLE:
'http://www.hyperorg.com/misc/ConvertURLsToLinks.html
function replaceURLWithHTMLLinks(text) {
var exp = /(b(https?|ftp|file)://[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
return text.replace(exp,"$1");