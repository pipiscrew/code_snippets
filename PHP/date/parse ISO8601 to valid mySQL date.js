//http://stackoverflow.com/questions/6458585/using-php-how-convert-an-iso8601-date-to-a-different-format

2011-09-02T18:00:00
or
2014-06-10T11:52:16.641Z

function parseISO($dateISO) {
	$time = strtotime($dateISO);
	return date('Y-m-d G:i', $time);
}