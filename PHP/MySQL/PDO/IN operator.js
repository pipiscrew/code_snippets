//http://community.sitepoint.com/t/php-pdo-prepared-statements-with-in-clause/12052/5
//Id's can be kept in an array. To include the array

$sql = "SELECT * FROM table WHERE id IN ( ".implode(',',$array).")";

//If you are paranoid about the values you can walk them first. For example, if they must be integers...

array_walk($array, function( &$value ) { $value = (int) $value; });

//If you need to quote wrap them.
array_walk($array, function( &$value ) { $value = PDO::quote($value); });
//And yes, that's one of the rare instances where you'd need to use PDO::quote()

//example 
//split by comma
$arr_tree_levels = explode(",", $_POST["tree_id"]);
 
//validation is int!
//when isnot will be 0 in the array!
array_walk($arr_tree_levels, function( &$value ) {
         $value = (int) $value;
});
 
//quote wrap them
//array_walk($array, function( &$value ) { $value = PDO::quote($value); });
 
$trees = getSet($db,"select tree_id from trees where tree_level_id in (".implode(',',$arr_tree_levels).")", null);

//OR
//http://stackoverflow.com/a/14767651
//PDO is not good with such things. You need to create a string with question marks dynamically and insert into query.
$in  = str_repeat('?,', count($in_array) - 1) . '?';
$sql = "SELECT * FROM my_table WHERE my_value IN ($in)";
$stm = $db->prepare($sql);
$stm->execute($in_array);
$data = $stm->fetchAll();