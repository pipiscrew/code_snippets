//http://stackoverflow.com/a/8479118/1320686

var lines = $('#mytextarea').val().split(/\n/);
var texts = [];
for (var i=0; i < lines.length; i++) {
  // only push this line if it contains a non whitespace character.
  if (/\S/.test(lines[i])) {
    texts.push($.trim(lines[i]));
  }
}