//http://fullcalendar.io/
//html
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8' />
<link href='fullcalendar.min.css' rel='stylesheet' />
<link href='fullcalendar.print.css' rel='stylesheet' media='print' />
<script src='lib/moment.min.js'></script>
<script src='lib/jquery.min.js'></script>
<script src='fullcalendar.min.js'></script>
<script>

	$(document).ready(function() {
	
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: '2015-01-01',
			editable: false,
			eventLimit: true, // allow "more" link when too many events
			events: {
				url: 'my.php',
				error: function() {
					alert("error");
				}
			},
			loading: function(bool) {
				$('#loading').toggle(bool);
			},
		    eventClick: function(calEvent, jsEvent, view) {
console.log(calEvent.id);
//console.log(jsEvent);
//console.log(view);


		        // change the border color just for fun
		      //  $(this).css('border-color', 'red');

		    }
		});
		
	});

</script>
<style>

	body {
		margin: 0;
		padding: 0;
		font-family: "Lucida Grande",Helvetica,Arial,Verdana,sans-serif;
		font-size: 14px;
	}



	#loading {
		display: none;
		position: absolute;
		top: 10px;
		right: 10px;
	}

	#calendar {
		max-width: 900px;
		margin: 40px auto;
		padding: 0 10px;
	}

</style>
</head>
<body>

	<div id='loading'>loading...</div>

	<div id='calendar'></div>

</body>
</html>



//my.php
<?php

require_once ('config.php');

$db = connect();

$record = array();

$rows = getSet($db,"select client_appointment_id as id,client_name as title,client_appointment_datetime as start from client_appointments 
left join clients on clients.client_id = client_appointments.client_appointment_client_id 
where client_appointment_owner_id=7 and client_appointment_datetime between '".$_GET["start"]."' and '".$_GET["end"]."'", null);

foreach($rows as $row) {
	$datetime = new DateTime($row['start']);

	$record[] = array("id" => $row['id'],"title" => $row['title'],"start" => $datetime->format(DateTime::ISO8601));
}

echo json_encode($record);
?>

