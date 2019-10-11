while($row = mysql_fetch_array($user_query))
{
$contents.=$row[categories_name].",";
$contents.=$row[faqdesk_question].",";
			$answer = str_replace(',', '\,', $row[faqdesk_answer_short]); // escape internalt commas
$contents.=$answer."\n";
}
		$contents = strip_tags($contents); // remove html and php tags etc.
Header("Content-Disposition: attachment; filename=export.csv");
print $contents;