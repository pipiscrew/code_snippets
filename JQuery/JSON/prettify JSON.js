//prettify naturale!

function prettifyResponse() {
  var jrt = document.getElementById("json-response-text");
  jrt.value = JSON.stringify(JSON.parse(jrt.value), null, 4);
}