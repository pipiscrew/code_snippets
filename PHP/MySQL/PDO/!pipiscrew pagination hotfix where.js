
$limit = $_GET["limit"];
$offset= $_GET["offset"];

$sql="select company_id, company_type, job_types.title as job_type_id, companies.title as title, address, city, pobox, afm, doy, phone1, phone2, mail1, mail2, mobile1, mobile2, fax, site1, site2, discount, rates.title as rate_id, courier, custom1, custom2, comment, DATE_FORMAT(date_rec,'%d-%m-%Y %H:%i') as date_rec from companies 
 LEFT JOIN job_types ON job_types.job_type_id = companies.job_type_id
 LEFT JOIN rates ON rates.rate_id = companies.rate_id where company_type = 1 ";
$count_query_sql = "select count(*) from companies";


//////////////////////////////////////WHEN SEARCH TEXT SPECIFIED
if (isset($_GET["search"]) && !empty($_GET["search"]))
{
	$like_str = " or #field# like :searchTerm";
	$where = " and (0=1 ";

	foreach($table_columns as $col)
	{
		if ($col=="title" || $col=="rate_id" || $col=="job_type_id")
			$col="companies.{$col}";
			
		$where.= str_replace("#field#",$col, $like_str);
	}

	$sql.= $where . ") ";
	$count_query_sql.= $where . ") ";
}