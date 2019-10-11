the field is datetime + nullable on MYSQL

//html
    $('[name=meeting_datetime]').datetimepicker({
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		forceParse: 1
    });
    
	//www.malot.fr/bootstrap-datetimepicker/
	<input type="text" name="meeting_datetime" class="form-control" data-date-format="dd-mm-yyyy hh:ii" readonly class="form_datetime">

//@PHP :
	d = with leading zero
	m = with leading zero
	H+i = 24hrs
	
	$meeting_datetime=null;
	if (!empty($_POST['meeting_datetime']))
	{
		$dt = DateTime::createFromFormat('d-m-Y H:i', $_POST['meeting_datetime']);
		
		$meeting_datetime =	$dt->format('Y-m-d H:i:s');
	}

//http://stackoverflow.com/questions/2767324/how-can-i-use-php-to-parse-a-date-string
//http://php.net/manual/en/function.date.php

Either with the DateTime API (requires PHP 5.3+):

$dateTime = DateTime::createFromFormat('F d, Y', 'Apr 30, 2010');
echo $dateTime->format('Y-m-d');
or the same in procedural style (requires PHP 5.3+):

$dateTime = date_create_from_format('F d, Y', 'Apr 30, 2010');
echo date_format($dateTime, 'Y-m-d');
or classic (requires PHP4+):

$dateTime = strtotime('Apr 30, 2010');
echo date('Y-m-d', $dateTime);


///example 
//when
	Apr 18 2014 02:24 PM

	$dateTime = date_create_from_format('F d Y h:i a', $tmp);
	echo "<br>".date_format($dateTime, 'Y-m-d G:i');
	
	output 2014-04-18 14:24