//http://www.pipiscrew.com/2015/07/mysql-mysql-backup/
If you want to skip entering the credentials every time, just fill these variables in the php code of the file:

$db_host = '';
$db_name = '';
$db_user = '';
$db_pass = '';
and the form fields will be auto completed.

VERY IMPORTANT: MAKE SURE YOU UPLOAD THE FILE IN A SECURE FOLDER, NOT PUBLIC. I STRONGLY RECOMMEND YOU UPLOAD IT TO A .HTACCESS PASSWORDED FOLDER.

lines added – UTF8 (line 56) and exit (line 116)







//author : http://mihaifrentiu.com/mysql-backup-php-helper
//filename : mf_mysql_backup.php
<?php
 
    /*
    Author:             Mihai Frentiu
    Author URL:         http://mihaifrentiu.com
    License:            GPL v2 or higher
    Based on:           http://davidwalsh.name/backup-mysql-database-php
    */
 
    $db_host = '';
    $db_name = '';
    $db_user = '';
    $db_pass = '';
 
    $err =  false;
    $connected = false;
 
    if(isset($_POST) && isset($_POST['submit'])){
 
        //CHECK IF THE DB HOST CAME ON POST
        if(isset($_POST['db_host']) && $_POST['db_host'] != ''){
            $db_host = $_POST['db_host'];
        }else{
            $err = true;
            $err_host = true;
        }
 
        //CHECK IF THE DB NAME CAME ON POST
        if(isset($_POST['db_name']) && $_POST['db_name'] != ''){
            $db_name = $_POST['db_name'];
        }else{
            $err = true;
            $err_db_name = true;
        }
 
        //CHECK IF THE DB USER CAME ON POST
        if(isset($_POST['db_user']) && $_POST['db_user'] != ''){
            $db_user = $_POST['db_user'];
        }else{
            $err = true;
            $err_db_user = true;
        }
 
        //CHECK IF THE DB USER PASSWORD CAME ON POST
        if(isset($_POST['db_pass']) && $_POST['db_pass'] != ''){
            $db_pass = $_POST['db_pass'];
        }
 
        if(!$err){
 
            $conn = mysql_connect($db_host, $db_user, $db_pass);
 
            //utf8
            mysql_query("SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");
 
            if(!$conn){
                $err = true;
                $err_general_message = 'Could not connect: '. mysql_errno(). ' '.mysql_error(). '<br /> Check username and password.';
            }else{
 
                $selected_db = mysql_select_db($db_name);
 
                if(!$selected_db){
                    $err = true;
                    $err_general_message = 'Could not select database: '.mysql_errno().' '.mysql_error();
                }else{
                    $connected  = true;
 
                    $result = mysql_query('SHOW TABLES');
 
                    while($row = mysql_fetch_row($result))
                    {
                      $tables[] = $row[0];
                    }
 
                    $return = '';
                    foreach($tables as $table){
                        $result = mysql_query('SELECT * FROM '.$table);
                        $num_fields = mysql_num_fields($result);
 
                        $return.= 'DROP TABLE '.$table.';';
                        $row2 = mysql_fetch_row(mysql_query('SHOW CREATE TABLE '.$table));
                        $return.= "\n\n".$row2[1].";\n\n";
 
                        for ($i = 0; $i < $num_fields; $i++)
                        {
                          while($row = mysql_fetch_row($result))
                          {
                            $return.= 'INSERT INTO '.$table.' VALUES(';
                            for($j=0; $j<$num_fields; $j++)
                            {
                              $row[$j] = addslashes($row[$j]);
                              $row[$j] = ereg_replace("\n","\\n",$row[$j]);
                              if (isset($row[$j])) { $return.= '"'.$row[$j].'"' ; } else { $return.= '""'; }
                              if ($j<($num_fields-1)) { $return.= ','; }
                            }
                            $return.= ");\n";
                          }
                        }
                        $return.="\n\n\n";
                    }
 
                    $handle = fopen($db_name.'-'.date('Y-m-d').'.sql','w+');
                    fwrite($handle,$return);
                    if(fclose($handle)){
                        header('Content-Type: application/x-sql');
                        header('Content-Disposition: attachment; filename="'.urlencode($db_name.'-'.date('Y-m-d').'.sql').'"');
                        header('Content-Transfer-Encoding: binary');
 
                        if(readfile($db_name.'-'.date('Y-m-d').'.sql')){
                            unlink($db_name.'-'.date('Y-m-d').'.sql');
                        }
 
                        exit;
                    }
 
                }
 
            }
        }
 
    }
 
?>
 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Mihai Frentiu MySQL Backup Helper</title>
 
<style type="text/css">
    body, html, div, ul,li,a  {margin:0; padding:0;}
    body {font-family:arial;font-size:14px;color:#494949;background:#dbdbdb;}
    .clear {clear:both;}
    a img {border:none;}
    h1 {color:#111731;display:inline;}
    #content {width:600px; margin:0 auto;background:#fff;border:1px solid #a2a2a2;margin-top:5px;margin-bottom:20px;}
    #logo {width:600px; margin:0 auto; margin-top:10px; }
    #logo img {vertical-align:middle;}
 
    #form {width:400px; margin:0 auto;padding:10px;}
    #form label {display:block; width:150px;float:left;margin:13px 0;}
    #form .textField {border:1px solid #ccc;padding:5px; margin:10px 0 10px 20px;color:#494949}
 
    p.err {padding-left:170px; color:#aa1b1b;}
    p.general_err {text-align:center; background:#aa1b1b;color:#fff;padding:10px;}
    p.general_msg {text-align:center; background:#208118;color:#fff;padding:10px;margin:10px;}
</style>
 
</head>
 
<body>
    <div id="logo">
        <a href="http://mihaifrentiu.com"><img src="http://mihaifrentiu.com/resources/mf_logo_jan_2012.png" style="height:80px;" /></a>
        <h1>Database backup v0.1</h1>
    </div>
    <div id="content">
        <?php if(!$connected){ ?>
        <div id="form">
            <?php if(isset($err_general_message) && $err_general_message != ''){ ?>
                <p class="general_err"><?php echo $err_general_message; ?></p>
            <?php } ?>
            <form name="db_bkp" method="post">
                <label for="db_host">Host <sub>(in 99% percent of the cases is localhost)</sub></label>
                <input type="text" name="db_host" id="db_host" value="<?php echo (isset($_POST['db_host'])) ? $_POST['db_host'] : 'localhost'; ?>" class="textField" />
                <br class="clear" />
 
                <?php if(isset($err_host) && $err_host){?>
                    <p class="err">You must specify the database host.</p>
                <?php } ?>
 
                <label for="db_name">Database name</label>
                <input type="text" name="db_name" id="db_name" value="<?php echo (isset($_POST['db_name'])) ? $_POST['db_name'] : ''; ?>" class="textField" />
                <br class="clear" />
 
                <?php if(isset($err_db_name) && $err_db_name){?>
                    <p class="err">You must specify the database name.</p>
                <?php } ?>
 
                <label for="db_user">Database user</label>
                <input type="text" name="db_user" id="db_user" value="<?php echo (isset($_POST['db_user'])) ? $_POST['db_user'] : ''; ?>" class="textField" />
                <br class="clear" />
 
                <?php if(isset($err_db_user) && $err_db_user){?>
                    <p class="err">You must specify the database user.</p>
                <?php } ?>
 
                <label for="password">Password</label>
                <input type="password" name="db_pass" id="db_pass" value="" class="textField" />
                <br class="clear" />
 
                <input type="submit" class="submitBtn" name="submit" value="Backup Database" />
            </form>
        </div>
        <?php }else{ ?>
            <p class="general_msg">Backing up database. Please be patient!</p>
        <?php } ?>
 
    </div>
 
</body>
 
</html>