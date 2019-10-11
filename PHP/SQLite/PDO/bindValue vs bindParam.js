//http://stackoverflow.com/a/5077108/1320686

$sex = 'male';
$s = $dbh->prepare('SELECT name FROM students WHERE sex = :sex');
$s->bindParam(':sex', $sex); // use bindParam to bind the variable
$sex = 'female';
$s->execute(); // executed with WHERE sex = 'female'
or

$sex = 'male';
$s = $dbh->prepare('SELECT name FROM students WHERE sex = :sex');
$s->bindValue(':sex', $sex); // use bindValue to bind the variable's value
$sex = 'female';
$s->execute(); // executed with WHERE sex = 'male'