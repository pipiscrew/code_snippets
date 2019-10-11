<?php
//cron job scheduled 13:00 (aka 1pm) - in Greece the time is 20:40 (aka 8:40pm)

include_once ("../config.php");
include_once ("../config_general.php");

date_default_timezone_set('Europe/Athens');

$now = date("Y-m-d");

$end_month = get_end_of_the_month(date('m'),date('Y'));

$today_is_end_of_the_month=false;

if ($now==$end_month)
	$today_is_end_of_the_month=true;
	
if (!$today_is_end_of_the_month)
	exit;
	
$db = connect();

$rows = getSet($db, "select user_id from users", null);

foreach($rows as $row) {
	$user_id = $row['user_id'];

///////////////////////////////	
//////////////user_score TABLE
///////////////////////////////	
	$score=0;

	$seller_call_month = getScalar($db,"select count(client_call_id) from client_calls left join clients on clients.client_id = client_calls.client_id where owner = {$user_id} and client_call_datetime BETWEEN '".date('Y').'-'.date('m').'-01'." 00:00:00' AND '".get_end_of_the_month(date('m'), date('Y'))." 23:59:59'", null);
	$seller_budget_month = getScalar($db,"select ifNull(FORMAT(sum(offer_total_amount),0),0)  from offers left join clients on clients.client_id = offers.company_id where clients.is_lead=0 and  offer_seller_id  = {$user_id} and is_paid=1 and is_paid_when BETWEEN '".date('Y').'-'.date('m').'-01'." 00:00:00' AND '".get_end_of_the_month(date('m'), date('Y'))." 23:59:59'", null);
	$seller_proposal_month = getScalar($db,"select count(offer_id) from offers where offer_seller_id = {$user_id} and offer_date_rec BETWEEN '".date('Y').'-'.date('m').'-01'." 00:00:00' AND '".get_end_of_the_month(date('m'), date('Y'))." 23:59:59'", null);
	$seller_profile_month = getScalar($db,"select count(client_id) from clients where owner = {$user_id} and profile_sent=1 and profile_sent_when BETWEEN '".date('Y').'-'.date('m').'-01'."' AND '".get_end_of_the_month(date('m'), date('Y'))."'", null); 
	$seller_client_month = getScalar($db,"select count(client_id) from clients left join offers on offers.company_id=clients.client_id where owner = {$user_id} and is_lead=0 and is_paid_when BETWEEN '".date('Y').'-'.date('m').'-01'." 00:00:00' AND '".get_end_of_the_month(date('m'), date('Y'))." 23:59:59'", null); 
	$seller_lead_month = getScalar($db,"select count(client_id) from clients where owner = {$user_id} and is_lead=1 and owned_date BETWEEN '".date('Y').'-'.date('m').'-01'." 00:00:00' AND '".get_end_of_the_month(date('m'), date('Y'))." 23:59:59'", null);
	$count_power_seller = getScalar($db,"SELECT count(user_working_hour_id) FROM user_working_hours WHERE user_id = {$user_id} and date_start BETWEEN '".date('Y').'-'.date('m').'-01'." 00:00:00' AND '".get_end_of_the_month(date('m'), date('Y'))." 23:59:59' and  (EXTRACT(HOUR_SECOND from date_start) between 100000 and 102000) AND (EXTRACT(HOUR_SECOND from date_end) between 180500 and 235900)", null);

	$score += (replace_commas_point($seller_call_month)*0.003); //0.00066
	$score += (replace_commas_point($seller_budget_month)*0.000166); //0.00008);
	$score += (replace_commas_point($seller_proposal_month)*0.04); //0.022
	$score += (replace_commas_point($seller_profile_month)*0.003); //0.010
	$score += (replace_commas_point($seller_client_month)*0.086); //0.072
	$score += (replace_commas_point($seller_lead_month)*0.003); //0.006
	$score += (replace_commas_point($count_power_seller)*0.0024);


	if ($score>10)
	 	$score= 10;
	 	
	$sql = "INSERT INTO `user_scores` (user_id, score_when, score) VALUES (:user_id, :score_when, :score)";
	$stmt = $db->prepare($sql);

	$stmt->bindValue(':user_id' , $user_id);
	$stmt->bindValue(':score_when' , $now);
	$stmt->bindValue(':score' , $score);

	$stmt->execute();
//
//	
///////////////////////////////	
//////////////user_score_fees TABLE
///////////////////////////////

	$count_seller_fees = getScalar($db, "select sum(gen_a_fee) + sum(gen_a_pprice) + sum(gen_extra_budget) + sum(gen_aprice_pages_cost) from offers
	WHERE  offer_seller_id = {$user_id} and (
	(offer_contract_period>1 and '".date('Y').'-'.date('m').'-01'."' between is_paid_when and DATE_ADD(is_paid_when,INTERVAL (offer_contract_period-1) MONTH))
	OR
	(offer_contract_period>1 and '".get_end_of_the_month(date('m'), date('Y'))."' between is_paid_when and DATE_ADD(is_paid_when,INTERVAL (offer_contract_period-1) MONTH))
	OR
	(offer_contract_period=1 and is_paid_when between DATE_FORMAT(NOW() ,'%Y-%m-01') and LAST_DAY(CURDATE())))",null);

	$sql = "INSERT INTO `user_score_fees` (user_id, score_when, score) VALUES (:user_id, :score_when, :score)";
	$stmt = $db->prepare($sql);

	$stmt->bindValue(':user_id' , $user_id);
	$stmt->bindValue(':score_when' , $now);
	$stmt->bindValue(':score' , $count_seller_fees);

	$stmt->execute();
}


function replace_commas_point($val)
{
	$val = str_replace(".","",$val);
	return str_replace(",","",$val);
}

						
?>

function get_end_of_the_month($month, $year)
{
	if (strlen($month)==1)
		$month="0".$month;
		
	//t returns the number of days in the month of a given date 
	$d = date("t", strtotime(date("{$year}-{$month}-d")));
	$m = date("{$year}-{$month}-{$d}"); //format back to mysql style!
	return  $m;

}