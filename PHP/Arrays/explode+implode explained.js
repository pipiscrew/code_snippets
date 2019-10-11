////
//turn csv to array
$ntids = explode(',', $_POST["users"]);


//export array to csv (with quotes) - ready for in(x);
$ntids = "'".implode("','", $ntids)."'";
////