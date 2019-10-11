<?php
$old = "12345_6789abcd_efgh\r\n12345_6789\r\nabcd_e12345_2312fgh";

//$new = preg_replace("/(\d+)_(\d+)/e", '"$1_" . ("$2" + 1)', $old);
$id = "12345";



//https://stackoverflow.com/questions/4209978/how-can-i-find-increment-and-replace-in-php
//$new = preg_replace_callback("/(\d+|)(\d+)/", function($matches)
$new = preg_replace_callback("/[\n]{$id}_(\d+)/", function($matches) use ($id)
{
	//echo $matches[2]."<br>";
    return $id . "_" . (1 + $matches[1]);
}
, $old);

echo $new;

exit;
?>