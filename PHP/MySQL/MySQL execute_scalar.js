
function execute_scalar($sql) {
	$rs = mysql_query($sql) or die(mysql_error().$sql);
	if (mysql_num_rows($rs)) {
		$r = mysql_fetch_row($rs);
		mysql_free_result($rs);
		return $r[0];
		}
	return $def;
}