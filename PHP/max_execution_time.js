//src - http://stackoverflow.com/a/37123129
//You need to change that in the php.ini:
 
max_execution_time = 500
 
//or in your php script:
 
set_time_limit(500);
 
//src - http://stackoverflow.com/q/15776400
//- set_time_limit(0) at the begining of your script will disable the time limit.
//- call it from the command line, no time limit that way