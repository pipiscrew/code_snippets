//http://stackoverflow.com/questions/4483540/php-show-a-number-to-2-decimal-places

$padded = sprintf('%0.2f', $unpadded); // 520 -> 520.00


function add_thousand($val, $decimal)
{
	return number_format( $val , $decimal , ',' , '.' );
}

//in javascript should be a comma, only the point used for decimal
$seller_budget_graph = getScalar($db,"select ifnull(sum(gen_total),0) from offers left join clients on clients.client_id = offers.company_id where clients.is_lead=0 and offer_seller_id in (".implode(',',$user_id).") and is_paid=1 and offer_date_rec BETWEEN '".date('Y').'-'.date('m').'-01'." 00:00:00' AND '".get_end_of_the_month(date('m'), date('Y'))." 23:59:59'", null);
$seller_budget_graph_title = add_thousand($seller_budget_graph,2); //produces 1.802,05


$seller_budget_graph = str_replace(".","",$seller_budget_graph_title);
$seller_budget_graph = str_replace(",",".",$seller_budget_graph); //end up 1802.05

