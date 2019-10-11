//http://stackoverflow.com/a/661207

SELECT * from table WHERE name LIKE CONCAT('%', :param, '%')


//when using like 
	$sdafsd= $_GET["search"]; //example 0089


	$like_str = " or #field# like '%{$sdafsd}%'";
	
//store it as :
	" or #field# like '89%'"

use mysql concat!!