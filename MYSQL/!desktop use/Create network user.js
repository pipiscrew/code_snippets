//http://stackoverflow.com/questions/1559955/host-xxx-xx-xxx-xxx-is-not-allowed-to-connect-to-this-mysql-server

mysql -u root -p

//connect from any IP
CREATE USER 'monty'@'%' IDENTIFIED BY 'some_pass';
GRANT ALL PRIVILEGES ON *.* TO 'monty'@'%'   WITH GRANT OPTION;
FLUSH PRIVILEGES;

//connect only from 192.168.1.69
CREATE USER 'monty'@'192.168.1.69' IDENTIFIED BY 'some_pass';
GRANT ALL PRIVILEGES ON *.* TO 'monty'@'192.168.1.69'   WITH GRANT OPTION;
FLUSH PRIVILEGES;







//http://www.lynnnayko.com/2010/07/mysql-user-specified-as-definer-root.html
execute once :
grant all on *.* to 'root'@'%' identified by 'password' with grant option;



someone said :
Duh!!!!!!!! IDIOTS
You have now exposed your db to everone.
GREAT!!!