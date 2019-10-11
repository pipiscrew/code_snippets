//source - http://www.stevedawson.com/scripts/text-counter.php
//http://www.totallyphp.co.uk/text-file-hit-counter

<?php
    $log_file = "count_file.txt";
 
    if (file_exists($log_file))
    {
        $fil = fopen($log_file, 'r');
        $dat = fread($fil, filesize($log_file));
        echo $dat+1;
        fclose($fil);
        $fil = fopen($log_file, w);
        fwrite($fil, $dat+1);
    }
 
    else
    {
        $fil = fopen($log_file, 'w');
 
        fwrite($fil, 1);
        echo '1';
        fclose($fil);
 
        //only admin can read&write
        chmod($log_file, 0600);
    }
?>