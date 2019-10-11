//http://stackoverflow.com/questions/2418473/when-should-i-use-require-once-vs-include

When should I use require vs. include?
When should I use require_once vs. require


The answer to 1 is described (http://www.w3schools.com/php/php_includes.asp)
The require() function is identical to include(), except that it handles errors differently.
If an error occurs, the include() function generates a warning, but the script will continue
execution. The require() generates a fatal error, and the script will stop.


The answer to 2 can be found (http://php.net/manual/en/function.require-once.php)
The require_once() statement is identical to require() except PHP will check if the file has
already been included, and if so, not include (require) it again.