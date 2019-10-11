//http://stackoverflow.com/questions/3997957/mysql-permissions-cant-create-functions-even-with-the-create-routine-grant

SHOW GRANTS FOR CURRENT_USER

//grant permissions
GRANT ALTER ROUTINE,CREATE ROUTINE, EXECUTE ON * TO user@'%' IDENTIFIED BY 'password'