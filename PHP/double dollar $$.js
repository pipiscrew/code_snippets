//http://php.net/manual/en/language.variables.variable.php
//http://www.pipiscrew.com/2015/07/php-double-dollar/

<?php
    $blockKeys = array('_SERVER','_SESSION','_GET','_POST','_COOKIE','charset','ip','islinux','url','url_info','doc_root','fm_self','path_info');
 
    foreach ($_POST as $key => $val) //LOOP through POST variables
        if (array_search($key,$blockKeys) === false)
            {
                echo "{$key} - {$val}.<br/>";
 
                $$key=$val;
            }
 
    echo $newpass;
 
    echo "<form method='post'>";
    echo "<input type='text' name='newpass' placeholder='type a password' required></input><br/><br/>";
    echo "<button type='submit'>Set Password</button><br/>";
    echo "</form>";
    
    
//ex2
	// Register Globals
	$blockKeys = array('_SERVER','_SESSION','_GET','_POST','_COOKIE','charset','ip','islinux','url','url_info','doc_root','fm_self','path_info');
    foreach ($_GET as $key => $val) 
    	if (array_search($key,$blockKeys) === false) $$key=$val;
    	
    foreach ($_POST as $key => $val)
    	if (array_search($key,$blockKeys) === false) $$key=$val;
    	
    foreach ($_COOKIE as $key => $val)
    	if (array_search($key,$blockKeys) === false) $$key=$val;