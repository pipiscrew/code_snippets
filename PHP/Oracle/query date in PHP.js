//The same query running on .NET application successfully, on PHP using PDO
//I got error message

$today = date("d-M-Y");     
 
$three_months_back = date('d-M-Y', strtotime("-90 days"));
 
$q =("select * from owner.table where 1=1 and ((close_date between '{$three_months_back}'
 and '{$today}') or (update_date between '{$three_months_back}' and '{$today}'))");
 
 
solution -> you must use the Oracle function TO_DATE


//src - http://stackoverflow.com/a/17478514
 
$q =("select * from owner.table where 1=1 and ((close_date between TO_DATE('{$three_months_back}','dd-MON-yy')
and TO_DATE('{$today}','dd-MON-yy')) or (update_date between 
TO_DATE('{$three_months_back}','dd-MON-yy') and TO_DATE('{$today}','dd-MON-yy'))");