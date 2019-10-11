//http://www.pontikis.net/blog/how-and-when-to-enable-mysql-logs
//https://stackoverflow.com/a/4731254/1320686

//inside the bin folder there is my.ini
//add this to existing blocks, if the block doesnt exist create it :

[mysqld_safe]
log_error=mysql_error.log
 
[mysqld]
log_error=mysql_error.log