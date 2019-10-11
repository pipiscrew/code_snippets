//import.php
<?php
 
ini_set('SMTP', 'your.customer.smtp.com'); 
ini_set('smtp_port', 25); 
 
//set infinite for timeout
set_time_limit(0);
 
require_once "general.php";
 
//hold the start time
$time_start = microtime(true);
 
//connect to source dbase
$oracle = new dbase();
$oracle->connect_oracle();
 
//connect to destination dbase
$mysql = new dbase();
$mysql->connect_mysql();
 
//construct today for Oracle
$today = date("d-M-Y");     
 
$three_months_back = date('d-M-Y', strtotime("-90 days"));
 
      
$q ="select * from owner.table where 1=1 and ((close_date between TO_DATE('{$three_months_back}','dd-MON-yy')
and TO_DATE('{$today}','dd-MON-yy')) or (update_date between 
TO_DATE('{$three_months_back}','dd-MON-yy') and TO_DATE('{$today}','dd-MON-yy'))";
 
 
//get the recordset by source dbase
$src_rows = $oracle->getSet($q, null);
 
 
//delete the old rows from destination dbase
$mysql->executeSQL("TRUNCATE oReplica", null);
 
 
////////////////////CONSTRUCT *INSERT INTO* STATEMENT [START]
//get source *column names* from first row
$insert_cols="";
$insert_vals="";
$src_cols = array();
foreach ($src_rows[0] AS $key => $value)
{
    $insert_cols.="{$key}, ";
    $insert_vals.=":{$key}, ";
     
    //used to line 73
    $src_cols[] = $key;
}
 
 
//remove ", "
$insert_cols = substr($insert_cols, 0, strlen($insert_cols)-2);
$insert_vals = substr($insert_vals, 0, strlen($insert_vals)-2);
 
//construct the SQL
$insert_sql = "INSERT INTO oReplica ({$insert_cols}) VALUES ({$insert_vals})";
////////////////////CONSTRUCT *INSERT INTO* STATEMENT [END]
 
 
//prepare the SQL to destination connection
if ($stmt = $mysql->getConnection()->prepare($insert_sql)){
 
    //for each source row
    foreach($src_rows as $row) {
         
        //for each field in the row
        foreach($src_cols as $fieldname)
            $stmt->bindValue(":{$fieldname}" , (string) $row["{$fieldname}"]);
         
        //execute the prepared statement
        $stmt->execute();    
 
        if($stmt->errorCode() != "00000"){
            echo $stmt->errorCode();
            exit;
        }
    }
}
 
//hold end time
$time_end = microtime(true);
 
//dividing with 60 will give the execution time in minutes other wise seconds
$execution_time = ($time_end - $time_start)/60;
 
//execution time of the script
$mail_body =  '<b>Total Execution Time:</b> '.$execution_time.' mins</br></br>';
 
//send mail
sendMail("yout.mail@x.com", "Oracle Replica Report", $mail_body);
     
function sendMail($recipient_mail, $subject, $body)
{
    $headers = "From: x@x.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=utf-8\r\n";
      
    $message = '<html><body>';
    $message .= $body;
    $message .= '</body></html>';
  
    //enable UTF8 on mail subject - http://www.xpertdeveloper.com/2013/05/set-unicode-character-in-email-subject-php/
    $updated_subject = "=?UTF-8?B?" . base64_encode($subject) . "?=";
  
    if (mail($recipient_mail, $updated_subject, $message, $headers)) {
      return true;
    } else {
      return false;
    }
}



//general.php
<?php
 
class dbase{
    private $db;
 
    function connect_mysql() {
        $mysql_hostname = "localhost";
        $mysql_user = "root";
        $mysql_password = "";
        $mysql_database = ""; 
          
        $this->db = new PDO("mysql:host=$mysql_hostname;dbname=$mysql_database", $mysql_user, $mysql_password, 
      array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC));
    }
 
    function connect_oracle() {
        $server         = "server";
        $db_username    = "x";
        $db_password    = "x";
        $sid            = "x";
        $port           = 0;
        $dbtns          = "(DESCRIPTION=(ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST = {$server})(PORT = {$port})))(CONNECT_DATA=(SID={$sid})))";
 
        $this->db = new PDO("oci:dbname=" . $dbtns . ";charset=utf8", $db_username, $db_password, array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_EMULATE_PREPARES => false,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC));
    }
 
    function connect_sqlite() {
        //if doesnt exist, will created.
        $this->db = new PDO('sqlite:dbase.db');
         
        //check if table has records, if not create table
        $d = getScalar("select count(*) from users",null);
        if ($d==0)
        {
            executeSQL("CREATE TABLE [users] (user_id INTEGER PRIMARY KEY, user_mail TEXT, user_password TEXT, user_level INTEGER)", null);
            executeSQL("your other tables here?",null);
             
            //read&write only server (user cant download the dbase)
            chmod("dbase.db", 0600);
        }
    }
 
    function getConnection(){
        return $this->db;
    }
 
    function getScalar($sql, $params) {
        if ($stmt = $this->db -> prepare($sql)) {
      
            $stmt->execute($params);
      
            return $stmt->fetchColumn();
        } else
            return 0;
    }
      
    function getRow($sql, $params) {
        if ($stmt = $this->db -> prepare($sql)) {
      
            $stmt->execute($params);
      
            return $stmt->fetch();
        } else
            return 0;
    }
      
    function getSet($sql, $params) {
        if ($stmt = $this->db -> prepare($sql)) {
      
            $stmt->execute($params);
      
          return $stmt->fetchAll();
        } else
            return 0;
    }
         
    function executeSQL($sql, $params) {
        if ($stmt = $this->db -> prepare($sql)) {
      
            $stmt->execute($params);
      
            return $stmt->rowCount();
        } else
            return false;
    }
}