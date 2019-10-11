$q = "select COUNTRY, COUNT(COUNTRY) as counter from jobs where (CLOSE_TIME between '{$dtp_start}'
 and '{$dtp_end}') ".(empty($user_ids) ? "" : $user_ids).(empty($countries) ? "" : $countries).' group by COUNTRY order by counter desc';
$rows = $mysql->getSet($q, null);

$countries_all = array();
$countries_all[] = array('Task', 'Hours per Day');
foreach($rows as $row) {
	$countries_all[] = array($row['COUNTRY'], (int) $row['counter']);
}