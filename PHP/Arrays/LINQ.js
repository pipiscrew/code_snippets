/*
YaLinqo – Github – https://github.com/Athari/YaLinqo
YaLinqo – doc – https://athari.github.io/YaLinqo/

Author suggests to use composer w/ autoloaded.php, Im too lazy go that way, when the lib is only 8 files.
*/

//my tests
<?php
require_once('/YaLinqo/Utils.php');
require_once('/YaLinqo/Functions.php');
require_once('/YaLinqo/Linq.php');
require_once('/YaLinqo/EnumerablePagination.php');
require_once('/YaLinqo/EnumerableGeneration.php');
require_once('/YaLinqo/Enumerable.php');
require_once('/YaLinqo/Errors.php');
require_once('/YaLinqo/OrderedEnumerable.php');
 
require_once('general.php');
 
//connect via PDO
$db = connect_mysql();
 
//select a table
$rows = getSet($db,"select * from user",null);
 
///////
//returns all records sorted by column #country#
$result3 = from($rows)
->orderBy(function ($cat) { return $cat['country']; });
 
echo "<pre>";
var_dump($result3->toArray());
echo "</pre>";
 
 
//this equals with 
 
$result3 = from($rows)
->orderBy(function ($cat) { return $cat['country']; })
->toArray();
 
echo "<pre>";
var_dump($result3);
echo "</pre>";
 
--
 
 
//returns all array records sorted DESC by column #country#
$result3 = from($rows)
->orderByDescending(function ($cat) { return $cat['country']; })
->toArray();
 
echo "<pre>";
var_dump($result3);
echo "</pre>";
 
//returns all the records where the field #country# equals 'au',
//(as you see Im using strtolower, because is case sensitive)
//then order by #email# field and return only the columns
//country,email. If you remove the ->select line will return all fields
$result3 = from($rows)
->where(function ($x) { return strtolower($x['country'])=='au'; })
->orderBy(function ($y) { return $y['email']; })
->select(function($res){ return array(
                "country" => $res['country'],
                "age" => $res['email']
            ); })
->toArray();
 
echo "<pre>";
var_dump($result3);
echo "</pre>";
 
--
 
//groupby country - method1
$result3 = from($rows)
->groupBy(function ($y) { return $y['country']; })
->toArray();
 
echo "<pre>";
var_dump($result3);
echo "</pre>";
 
//this equals with 
 
$result3 = from($rows)
->groupBy('$v["country"]')
->toArray();
 
echo "<pre>";
var_dump($result3);
echo "</pre>";