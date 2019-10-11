//https://thomashunter.name/blog/why-i-love-php-5-4/

<?php
$raw_header = "http://location/\r\nBadHeader";

# PHP 5.4:
$clean_header = explode("\n", explode("\r", $raw_header)[0])[0]);

# PHP 5.3:
$no_cr = explode("\r", $raw_header);
$no_nl = explode("\n", $no_cr[0]);
$clean_header = $no_nl[0];
unset($no_cr, $no_nl);

echo $clean_header;