//http://www.pipiscrew.com/2014/10/bootstrap-table-using-serverside-pagination-add-extra-query-filters/

//I have two combos provide extra filtering, each of, on value has the ID of primary tables.
//when any of them change, call refresh table aka :

	$('#filter_month,#filter_userid').on('change', function() {
		$('#user_working_hours_tbl').bootstrapTable('refresh');
	});
	
	
//modify the queryParams function :
				//bootstrap-table
				function queryParamsUSER_WORKING_HOURS(params)
				{
					var q = {
						"limit": params.pageSize,
						"offset": params.pageSize * (params.pageNumber - 1),
						"search": params.searchText,
						//
						"user" : $("#filter_userid").val(),
						"month" : $("#filter_month").val(),
						//
						"name": params.sortName,
						"order": params.sortOrder
					};
					
					return q;
				}
				
				
//so the first time, will query as :
..user=month=..


//at pagination PHP :
$where="";

if (!empty($month))
{
	$where = " date_start BETWEEN '2014-$month-01' AND '2014-$month-31'";
}
	
if (!empty($user))
{
	if (!empty($where))
		$where .= " and ";
	
		$where .= " user_working_hours.user_id=".$user;
}
	
if (!empty($where))
	$where = " where ".$where;


$sql="select * from user_working_hours ".$where;
$count_query_sql = "select count(*) from user_working_hours ".$where;