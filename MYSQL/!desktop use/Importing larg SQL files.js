//http://stackoverflow.com/questions/15278375/importing-larger-sql-files-into-mysql
//copy backupfile.sql to bin dir

mysql.exe -u root
[enter your password]
> use databasename;
> source backupfile.sql

//where on web http://www.ozerov.de/bigdump/