//http://stackoverflow.com/a/18483210


//You could use:

Order Allow,Deny
Deny from 66.249.74.0/24
Allow from all

//Or you could use this:

RewriteEngine on
RewriteCond %{REMOTE_ADDR} ^66\.249\.74\.
RewriteRule ^ - [F]