//src - //https://stackoverflow.com/a/13622393/1320686
//http://www.pipiscrew.com/2017/06/proper-convert-utc-to-browser-time/

////try 01
//Daylight saving time (DST) *NOT* applied
var dateStr =  '11/30/2016 3:05:24 AM UTC';
var date = new Date(dateStr);
console.log("*1*", date.toString()); 
  
////try 02 *universal*
//Daylight saving time (DST) applied
var dateStr2 =  '11/30/2016 3:05:24 AM';
var date2 = new Date(dateStr2);
var offset = new Date().getTimezoneOffset(); //get the diff from UTC
//for all zones that are GMT+, the result is a negative number
//for GMT-, the result is a positive number
//example Im on GMT+2 (DST), the result is -120

date2.setMinutes(date2.getMinutes() - offset);

console.log("*2*", date2.toString()); 

--

output :
*1* Wed Nov 30 2016 04:05:24 GMT+0100 (Central Europe Standard Time)
*2* Wed Nov 30 2016 05:05:24 GMT+0100 (Central Europe Standard Time)


--

////////////////////////////////////////////////////////////////////////
//in PHP, we passing the JS 'diff from UTC' and using the same technic
 
$dateStr2 =  '11/30/2016 3:05:24 AM';
 
$a='-120'; //come from AJAX? 
 
if (is_int($a)) //http://php.net/manual/en/function.is-int.php
   echo date('Y-m-d H:i:s', strtotime($dateStr2. " -$a minutes"));
 
--
 
output :
2016-11-30 05:05:24
 
//ps - *date_default_timezone_set* doesnt take place^
 
--
 
////////////////////////////////////////////////////////////////////////
//in MySQL we passing the JS 'diff from UTC' and using the same technic
select date_rec + INTERVAL --120 MINUTE from answers
where date_rec = '2016/11/30 3:05:24'
//even is 
//date_rec = '2016/11/30 3:05:24 AM' 0R date_rec = '2016/11/30 3:05:24 PM'
//returns the record

--
 
output :
2016-11-30 05:05:24