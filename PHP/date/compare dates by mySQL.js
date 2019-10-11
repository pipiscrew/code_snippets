//http://stackoverflow.com/a/2113992


//mysql field to UTC
strtotime($db_set["event_date_end"])

//ex1
if (strtotime('today') > strtotime($db_set["event_date_end"]))
{
	echo "expired";
	
}