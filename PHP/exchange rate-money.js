//more services:
//http://stackoverflow.com/questions/3139879/how-do-i-get-currency-exchange-rates-via-an-api-such-as-google-finance


<?php
//http://www.ecb.int/stats/exchange/eurofxref/html/index.en.html
//the file is updated daily between 2.15 p.m. and 3.00 p.m. CET
    
$XMLContent=file("http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml"); 



    $ex=0;
    foreach($XMLContent as $line){
        if(preg_match("/currency='GBP'/",$line,$currencyCode)){
            if(preg_match("/rate='([[:graph:]]+)'/",$line,$rate)){
                //Output the value of 1EUR for a currency code
                $ex= $rate[1];
                break;
            }
        }
    }

    echo $ex;
?>