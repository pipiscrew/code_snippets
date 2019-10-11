$proposal_date=null;
if (!empty($_POST['proposal_date']))
{
	$dt = DateTime::createFromFormat('d/m/Y', $_POST['proposal_date']);
	
	$proposal_date = $dt->format('Y-m-d');
}