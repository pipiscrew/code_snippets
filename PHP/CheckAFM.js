//http://tatief.wordpress.com/2008/12/29/%CE%B1%CE%BB%CE%B3%CF%8C%CF%81%CE%B9%CE%B8%CE%BC%CE%BF%CF%82-%CF%84%CE%BF%CF%85-%CE%B1%CF%86%CE%BC-%CE%AD%CE%BB%CE%B5%CE%B3%CF%87%CE%BF%CF%82-%CE%BF%CF%81%CE%B8%CF%8C%CF%84%CE%B7%CF%84%CE%B1%CF%82/
//in replies

//tested&working
<?php
var_dump(isValidVAT("afm"));

function isValidVAT($vatNo) {
	if (!is_numeric($vatNo) || strlen($vatNo) > 9)
		return false;
	
	$vatNo = str_pad($vatNo, 9, "0", STR_PAD_LEFT);
	$checkDigit = 0;
	for ($i = 0; $i <= 7; $i++)
		$checkDigit += $vatNo[7 - $i] * pow(2, $i + 1);
	return ((($checkDigit % 11) % 10) == $vatNo[8]);
}

?>

//http://dvassil.wordpress.com/2010/08/24/vat-validation-php/
//tested&working
<?php
var_dump(CheckAFM("afm"));


    function CheckAFM($afm)
    {
        if (!preg_match('/^(EL){0,1}[0-9]{9}$/i', $afm))
            return false;
        if (strlen($afm) > 9)
            $afm = substr($afm, 2);

        $remainder = 0;
        $sum = 0;

        for ($nn = 2, $k = 7, $sum = 0; $k >= 0; $k--, $nn += $nn)
            $sum += $nn * ($afm[$k]);
        $remainder = $sum % 11;

        return ($remainder == 10) ? $afm[8] == '0'
                                  : $afm[8] == $remainder;
    }
?>

//in replies
function checkVAT($vatNo)
{
    $client = new SoapClient(
        "http://ec.europa.eu/taxation_customs/vies/checkVatService.wsdl"
    );
    $result = $client->checkVat(array('countryCode'=>'EL','vatNumber'=>$vatNo));
    return $result->valid;
}