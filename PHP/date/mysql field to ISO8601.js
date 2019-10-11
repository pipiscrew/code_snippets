//http://stackoverflow.com/a/5322309

//recommended way
$datetime = new DateTime('2010-12-30 23:21:46');
echo $datetime->format(DateTime::ISO8601);

//procedural
echo date(DATE_ISO8601, strtotime('2010-12-30 23:21:46'));