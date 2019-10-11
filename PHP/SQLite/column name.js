//http://stackoverflow.com/questions/5428262/php-pdo-get-the-columns-name-of-a-table
$res->getColumnMeta(1) 'for col1
 $col['name']
 
 
 //example
 $rs = $db->query('SELECT * FROM my_table LIMIT 0');
for ($i = 0; $i < $rs->columnCount(); $i++) {
    $col = $rs->getColumnMeta($i);
    $columns[] = $col['name'];
}
print_r($columns);