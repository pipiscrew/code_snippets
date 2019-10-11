//http://forums.devshed.com/php-development-5/session_start-mean-466983.html

//will suppress any errors that may be produced by that function. the @ is general symbol in PHP can be
//used in any function

@session_start();
vs
session_start();


Sticking a @ before a statement tells PHP to avoid printing error messages for it.
For example, using session_start() after you've already outputted something to the browser results in an error and PHP will print something like "Cannot send headers: output started at (line)": @session_start() will still fail, but the error message won't be printed.