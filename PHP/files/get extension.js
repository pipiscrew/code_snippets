//http://www.paulund.co.uk/get-the-file-extension-in-php

<?php
function get_extension($file) {
 $extension = end(explode(".", $file));
 return $extension ? $extension : false;
}
?>