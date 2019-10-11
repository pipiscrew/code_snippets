//http://www.androidhive.info/2012/05/how-to-connect-android-with-php-mysql/

db_config.php – will have database connection variables
db_connect.php – a class file to connect to database

Following is code for two php files

db_config.php

db_config.php
<?php
 
/*
 * All database connection variables
 */
 
define('DB_USER', "root"); // db user
define('DB_PASSWORD', ""); // db password (mention your db password here)
define('DB_DATABASE', "androidhive"); // database name
define('DB_SERVER', "localhost"); // db server
?>
db_connect.php

db_connect.php
<?php
 
/**
 * A class file to connect to database
 */
class DB_CONNECT {
 
    // constructor
    function __construct() {
        // connecting to database
        $this->connect();
    }
 
    // destructor
    function __destruct() {
        // closing db connection
        $this->close();
    }
 
    /**
     * Function to connect with database
     */
    function connect() {
        // import database connection variables
        require_once __DIR__ . '/db_config.php';
 
        // Connecting to mysql database
        $con = mysql_connect(DB_SERVER, DB_USER, DB_PASSWORD) or die(mysql_error());
 
        // Selecing database
        $db = mysql_select_db(DB_DATABASE) or die(mysql_error()) or die(mysql_error());
 
        // returing connection cursor
        return $con;
    }
 
    /**
     * Function to close db connection
     */
    function close() {
        // closing db connection
        mysql_close();
    }
 
}
 
?>
Usage: When ever you want to connect to MySQL database and do some operations use the db_connect.php class like this

$db = new DB_CONNECT(); // creating class object(will open database connection)
