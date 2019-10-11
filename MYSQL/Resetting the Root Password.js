//http://dev.mysql.com/doc/refman/5.0/en/resetting-permissions.html


On Windows, use the following procedure to reset the password for all MySQL root accounts:

Log on to your system as Administrator.

Stop the MySQL server if it is running. For a server that is running as a Windows service, go to the Services manager: From the Start menu, select Control Panel, then Administrative Tools, then Services. Find the MySQL service in the list and stop it.

If your server is not running as a service, you may need to use the Task Manager to force it to stop.

Create a text file containing the following statements. Replace the password with the password that you want to use.

UPDATE mysql.user SET Password=PASSWORD('MyNewPass') WHERE User='root';
FLUSH PRIVILEGES;
Write the UPDATE and FLUSH statements each on a single line. The UPDATE statement resets the password for all root accounts, and the FLUSH statement tells the server to reload the grant tables into memory so that it notices the password change.

Save the file. For this example, the file will be named C:\mysql-init.txt.

Open a console window to get to the command prompt: From the Start menu, select Run, then enter cmd as the command to be run.

Start the MySQL server with the special --init-file option (notice that the backslash in the option value is doubled):

C:\> C:\mysql\bin\mysqld-nt --init-file=C:\\mysql-init.txt
If you installed MySQL to a location other than C:\mysql, adjust the command accordingly.

The server executes the contents of the file named by the --init-file option at startup, changing each root account password.

You can also add the --console option to the command if you want server output to appear in the console window rather than in a log file.

If you installed MySQL using the MySQL Installation Wizard, you may need to specify a --defaults-file option:

C:\> "C:\Program Files\MySQL\MySQL Server 5.0\bin\mysqld-nt.exe"
         --defaults-file="C:\\Program Files\\MySQL\\MySQL Server 5.0\\my.ini"
         --init-file=C:\\mysql-init.txt
The appropriate --defaults-file setting can be found using the Services Manager: From the Start menu, select Control Panel, then Administrative Tools, then Services. Find the MySQL service in the list, right-click it, and choose the Properties option. The Path to executable field contains the --defaults-file setting.

After the server has started successfully, delete C:\mysql-init.txt.


//http://www.cyberciti.biz/tips/recover-mysql-root-password.html
Step # 1 : Stop mysql service

# /etc/init.d/mysql stop

Step # 2: Start to MySQL server w/o password:

# mysqld_safe --skip-grant-tables &

Step # 3: Connect to mysql server using mysql client:

# mysql -u root

Step # 4: Setup new MySQL root user password

mysql> use mysql;
mysql> update user set password=PASSWORD("NEW-ROOT-PASSWORD") where User='root';
mysql> flush privileges;
mysql> quit

Step # 5: Stop MySQL Server:

# /etc/init.d/mysql stop

Step # 6: Start MySQL server and test it

# /etc/init.d/mysql start
# mysql -u root -p

//from comments you can use empty password 
mysql> update user set password=PASSWORD(“”) where User=’root’;