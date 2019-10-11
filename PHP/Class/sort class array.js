if we have :
class Record
{
    public $company;
    public $position;
    public $city;
    public $timeposted;
    public $link;
}

,
,
//fill the obj
.
.

//for string
function cmp($a, $b)
{
    return strcmp($a->timeposted, $b->timeposted);
}

//for int ASC
function cmp($a, $b)
{
    return $a->sort > $b->sort;
}


//sort the class by property
usort($objArr, "cmp");


//src - https://stackoverflow.com/a/4282423
//If you're sorting the array from inside the class and your sorting function cmp is also
//defined inside the class, then use this:

usort($your_data, array($this, "cmp"))