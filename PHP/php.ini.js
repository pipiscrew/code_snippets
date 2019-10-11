; Maximum allowed size for uploaded files.
upload_max_filesize = 2M

; Maximum size of POST data that PHP will accept.
post_max_size = 8M

; Disable all errors, by default is error_reporting = E_ALL
error_reporting = E_ALL & ~E_NOTICE & ~E_STRICT & ~E_DEPRECATED



#2
//http://www.pipiscrew.com/2017/11/visual-studio-code-w-php-debug-adapter/
by PHP v5.4, you can run a webserver! using the following :
php -S localhost:80 -t ../htdocs/

php.exe