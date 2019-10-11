///////////////////
// READ FILE
//////////////////
$template = file_get_contents("tab_proposal_html.template");

$template = str_replace('{seller}', $prop["offer_seller_name"], $template);
$template = str_replace('{company}', $prop["offer_company_name"], $template);

echo $template;