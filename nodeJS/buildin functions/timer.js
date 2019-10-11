//http://docs.nodejitsu.com/articles/javascript-conventions/what-are-the-built-in-timer-functions

var recursive = function () {
    console.log("It has been one second!");
    setTimeout(recursive,1000);
}
recursive();