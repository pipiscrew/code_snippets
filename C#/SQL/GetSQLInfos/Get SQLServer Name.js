//http://stackoverflow.com/questions/142142/sql-query-to-get-servers-ip-address

SELECT @@SERVERNAME;

//or only machine name
SELECT SERVERPROPERTY('MachineName')