//http://stackoverflow.com/a/25194011

//400 will be 400
//8471 will be 8,471
//70000 will be 70,000
//120000 will be 120,000

function humanizeNumber(n) {
  n = n.toString()
  while (true) {
    var n2 = n.replace(/(\d)(\d{3})($|,|\.)/g, '$1,$2$3')
    if (n == n2) break
    n = n2
  }
  return n
}