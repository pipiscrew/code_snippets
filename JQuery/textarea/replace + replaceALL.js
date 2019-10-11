//http://stackoverflow.com/questions/1144783/replacing-all-occurrences-of-a-string-in-javascript
//when
abc test test abc test test

//replace only the 1
str=str.replace('abc','');

//replace all
str = str.replace(/abc/g, '');

or as function
function replaceAll(find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}