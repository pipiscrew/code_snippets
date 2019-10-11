//http://stackoverflow.com/questions/1309452/how-to-replace-innerhtml-of-a-div-using-jquery

$('#regTitle').text('Hello world'); 
will set any text content, or, if you want to replace the entire HTML structure:

$('#regTitle').html('Hello World');
The html() function can take strings of HTML, and will effectively modify the .innerHTML property.