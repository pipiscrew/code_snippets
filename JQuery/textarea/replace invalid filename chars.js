//http://stackoverflow.com/questions/4374822/javascript-regexp-remove-all-special-characters

function replaceAll(str){
  return str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
}