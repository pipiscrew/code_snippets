

//main.php
<?php
session_start();

require_once ('config.php');
$users_rows=null;

if(!isset($_SESSION["u"])){
	header("Location: login.php");
	exit ;
}
else
if($_SESSION['level'] == 9){

	$db       = connect();
	$users_rows = getSet($db, "SELECT * FROM `users` order by user_level_id", null);
	
}


require_once ('template_top.php');
?>


<link href='js/fullcalendar.min.css' rel='stylesheet' />
<link href='js/fullcalendar.print.css' rel='stylesheet' media='print' />
<script src='js/moment.min.js'></script>
<script src='js/fullcalendar.min.js'></script>
<script>

	$(document).ready(function() {
	
	///////////////////////////////////////////////////////////// FILL users
	var jArray_users =   <?php echo json_encode($users_rows); ?>;

if (jArray_users){
	var combo_users_rows = "<option value='0'></option>";
	for (var i = 0; i < jArray_users.length; i++)
	{
		combo_users_rows += "<option value='" + jArray_users[i]["user_id"] + "'>" + jArray_users[i]["fullname"] + "</option>";
	}

	$("[name=user_id]").html(combo_users_rows);
	$("[name=user_id]").change(); //select row 0 - no conflict on POST validation @ PHP	
}

	///////////////////////////////////////////////////////////// FILL users
	
	
		$('#user_id').change(function () {
			//http://stackoverflow.com/a/10229981
            var selectedSite = $(this).val();
            var events = {
				url: 'tab_dashboard_seller_appointments_query.php',
				data: {
					user_id: $('#user_id').val()
				},
				error: function() {
					alert("error");
				}
            }
            $('#calendar').fullCalendar('removeEventSource', events);
            $('#calendar').fullCalendar('addEventSource', events);
            
		});
	
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
				url: 'tab_dashboard_seller_appointments_query.php',
				data: {
					user_id: <?=$_SESSION['id']?>
				},
				error: function() {
					alert("error");
				}
			},
			loading: function(bool) {
				$('#loading').toggle(bool);
			},
		    eventClick: function(calEvent, jsEvent, view) {
				console.log(calEvent.id);
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

	<div id='loading'>loading...</div>

<?php 
	if($_SESSION['level'] == 9){ ?>
<select id="user_id" name="user_id">
	
</select>

<?php } ?>

	<div id='calendar'></div>

<?php
include ('template_bottom.php');
?>


//query.php
<?php
session_start();

if(!isset($_SESSION["u"])){
	header("Location: login.php");
	exit ;
}
else
if($_GET["user_id"] != $_SESSION['id'] && $_SESSION['level'] != 9){
	die("You are not authorized to view this!");
}

require_once ('config.php');

$db = connect();

$record = array();

$rows = getSet($db,"select client_appointment_id as id,client_name as title,client_appointment_datetime as start from client_appointments 
left join clients on clients.client_id = client_appointments.client_appointment_client_id 
where client_appointment_owner_id=".$_GET["user_id"]." and client_appointment_datetime between '".$_GET["start"]."' and '".$_GET["end"]."'", null);

foreach($rows as $row) {
	$datetime = new DateTime($row['start']);

	$record[] = array("id" => $row['id'],"title" => $row['title'],"start" => $datetime->format(DateTime::ISO8601));
}

echo json_encode($record);
?>