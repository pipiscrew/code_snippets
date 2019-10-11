create a file .htaccess to root

RewriteEngine on
RewriteRule .* index.php [NC,L]

ref:
http://stackoverflow.com/questions/10740635/rewriterule-index-php-nc-l
http://stackoverflow.com/questions/2439562/apache-rewriterule-index-php-nc-l-not-working