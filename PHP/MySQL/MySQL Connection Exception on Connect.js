//http://www.phpclasses.org/package/9480-PHP-Connect-to-MySQL-and-throw-exceptions-on-error.html

<?php 

class ConnException  extends Exception{}
class Conn{
	 protected $host;
	 protected $username;
	 protected $password;
	 protected $db;

public function _construct($host_,$username_,$password_,$db_)
{

        $this->_host    = $host_;
		$this->_password= $password_;
		$this->_username=$root_;
		$this->_db=$db_;
    
		}
		
public function connect($host_,$username_,$password_,$db_){
		if ( strlen($host_) == 0 || strlen($username_) == 0 || strlen($db_) == 0 ) {
      throw new ConnException ('Please supply the '.$host_ .' name , '.$username_ .' Username and '.$db_ .'database name');
    }
		$con=mysql_connect($host_, $username_, $password_);
		
		mysql_select_db($db_); 
		}
}
//Connecting to database
$conf= new Conn;
        $host_='';//host name
		$password_='';//password
		$username_='';//username
		$db_=''; //database name
		try 
{ 

$conf->connect($host_,$username_,$password_,$db_);
}
catch ( connException $e )
{
  echo "Encountered an error while connecting to database: ";
}
?>
