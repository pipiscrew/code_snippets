//http://php.net/manual/en/function.urlencode.php
<?php
echo '<a href="mycgi?foo=', urlencode($userinput), '">';
?>