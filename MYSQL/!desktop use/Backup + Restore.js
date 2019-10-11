//backup
http://dev.mysql.com/doc/refman/5.1/en/mysqldump.html

exe comes with mysql installation

mysqldump.exe --port=50002 --user root --password=root peg_erpbasic > D:\POSEIDON\export.sql
pause


//restore
cd /d C:\Program Files\MySQL\MySQL Workbench CE 5.2.40
mysql.exe -u root -p123456 test2906 < C:\Customers\export.sql
pause
