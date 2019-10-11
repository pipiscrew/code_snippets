//http://stackoverflow.com/questions/11459998/using-number-format-to-add-thousand-separator

//format to thoudand only aka 1.000 10.000 with
add_thousand($db_impression_min,0);

//format to thousand + 2decimal point aka 1.000,32 with 
add_thousand( $tax_val ,2 );

function add_thousand($val, $decimal)
{
	return number_format( $val , $decimal , ',' , '.' );
}


//http://stackoverflow.com/questions/4483540/php-show-a-number-to-2-decimal-places

//format to 2 decimal places
number_format($number,2);