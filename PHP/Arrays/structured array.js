//http://stackoverflow.com/questions/3861353/structs-data-type-in-php

class StatsRecord {
    public $date;
    public $event_name;
	public $app_version;
	public $app_platform;
	public $device;
	public $user_id;
	public $json_params;
}

$rows = explode(PHP_EOL, $data);

$ListOfRECS = array(StatsRecord);
$rec;

//for each line 
for ($x=1; $x <= sizeof($rows); $x++){
	//1st field is the date contains from FLURRY comma, validate that exists on specific position and replace it!
	if (substr($rows[$x], 7,1)==",")
		$rows[$x] = substr($rows[$x], 0,7) . substr($rows[$x], 8) ;
	
	$line = explode(",", $rows[$x]);

	$rec = new StatsRecord();
	$rec->date = $line[0];
	$rec->event_name = $line[2];
	$rec->app_version = $line[4];
	$rec->app_platform = $line[5];
	$rec->device = $line[6];
	$rec->user_id = $line[7];
	$rec->json_params = $line[8];

	//add to array!	
	$ListOfRECS[] = $rec;
}

// var_dump($ListOfRECS);

for ($x=1; $x <= sizeof($ListOfRECS); $x++){
	echo $ListOfRECS[$x]->device;
}