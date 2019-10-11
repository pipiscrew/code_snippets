//http://stackoverflow.com/questions/8744107/increase-max-execution-time-in-php

Add this to an htaccess file:

<IfModule mod_php5.c>
php_value post_max_size 200M
php_value upload_max_filesize 200M
php_value memory_limit 300M
php_value max_execution_time 259200
php_value max_input_time 259200
php_value session.gc_maxlifetime 1200
</IfModule>
Read more about those settings at http://www.pacecode.com/blog/2008/09/22/magic-with-htaccess-file-increase-execution-time-session-expiry-time-and-file-upload-size-limit/