//1st example
where users.user_id=? and client_call_next_call between '".date("Y-m-d")." 00:00' and '".date("Y-m-d")." 23:59' 

//2nd example
getScalar($db,"select count(client_id) from clients where owner=? and is_lead=0 and owned_date 
BETWEEN '".date('Y').'-'.date('m').'-01'." 00:00:00' AND '".get_end_of_the_month(date('m'), date('Y'))." 23:59:59'",array($_SESSION['id'])); ?>,
						
						
function get_end_of_the_month($month, $year)
{
	$month_calc = $month+1; //increase by 1
	$start_date = date("$year-$month_calc-01"); //convert to date
	$mod_date = strtotime($start_date."- 1 day"); //subtract -1!
	$m = date("Y-m-d",$mod_date); //format back to mysql style!
	
	return $m;
}