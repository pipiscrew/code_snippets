//https://developer.paypal.com/docs/classic/ipn/ht_ipn/

$p_vardmp = file_get_contents('php://input');//var_dump($_POST);

$raw_post_data = file_get_contents('php://input');
$raw_post_array = explode('&', $raw_post_data);
$ppal_props = array();

foreach ($raw_post_array as $keyval) {
  $keyval = explode ('=', $keyval);
  if (count($keyval) == 2)
     $ppal_props[$keyval[0]] = urldecode($keyval[1]);
}

//takes a string like 
//mc_gross=32.00&protection_eligibility=Eligible&address_status=confirmed&item_number1=2&tax=0.00&item_number2=66&payer_id=JH8LR5NNL45Q2&address_street=1+Main+St&payment_date=03%3A56%3A42+Jul+09%2C+2015+PDT&payment_status=Completed&charset=windows-1252&

and make it array w/ keys

aka $ppal_props['mc_gross']

:)