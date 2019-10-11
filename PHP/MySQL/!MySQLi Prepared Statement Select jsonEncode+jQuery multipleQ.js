//main.php
<script type="text/javascript">
	// $(function() {

	function getContentBIDS() {
		$.ajax({
			type : "POST",
			url : "fl_stats_sponsor_contests_views.php",
			data : "ID=" + "160",
			datatype : "json",
			success : function(result) {
//////////////////////////////////////////////////////////////// CONTESTS_VIEWS
				$("#lbl_contest_views").html("Total Contests Unique Views : " + result.contest_views.length);

				var tblROWS = "";
				$.each(result.contest_views, function(i, obj) {
					tblROWS += "<tr><td>" + obj.date_rec + "</td><td>" + obj.title + "</td><td>" + obj.user_id + "</td><td>" + obj.platform + "</td></tr>";
				});

				$("#table_contest_views").html(tblROWS);
				
//////////////////////////////////////////////////////////////// CONTESTS_BIDS
				var countBIDS=0;
				tblROWS = "";
				$.each(result.bids, function(i, obj) {
					tblROWS += "<tr><td>" + obj.date_rec + "</td><td>" + obj.title + "</td><td>" + obj.totalBIDS + "</td></tr>";
					countBIDS+=obj.totalBIDS;
				});

				$("#lbl_total_bids").html("Total Bids : " + countBIDS);				
				$("#table_contest_bids").html(tblROWS);
				
//////////////////////////////////////////////////////////////// SPONSOR_VIEWS
				
				tblROWS = "";
				$.each(result.sponsor_views, function(i, obj) {
					tblROWS += "<tr><td>" + obj.date_rec + "</td><td>" + obj.title + "</td><td>" + obj.user_id + "</td><td>" + obj.platform + "</td></tr>";
				});

				$("#lbl_sponsor_views").html("Total Sponsor Profile Unique Views : " + result.sponsor_views.length);				
				$("#table_sponsor_views").html(tblROWS);
				
//////////////////////////////////////////////////////////////// SPONSOR_SOCIAL_CLICK
				
				var sponsor_view_social_fb=0;
				var sponsor_view_social_tw=0;
				tblROWS = "";
				$.each(result.sponsor_social, function(i, obj) {
					tblROWS += "<tr><td>" + obj.date_rec + "</td><td>" + obj.user_id + "</td><td>" + obj.TOTAL_FB + "</td><td>" + obj.TOTAL_TW + "</td></tr>";
					sponsor_view_social_fb += obj.TOTAL_FB;
					sponsor_view_social_tw += obj.TOTAL_TW;
				});

				$("#lbl_sponsor_social_FB").html("Total Sponsor Profile Facebook Click(s) : " + sponsor_view_social_fb);
				$("#lbl_sponsor_social_TW").html("Total Sponsor Profile Twitter Click(s) : " + sponsor_view_social_tw);				
				$("#table_sponsor_social").html(tblROWS);
				
//////////////////////////////////////////////////////////////// SPONSOR_CAUSES
				
				var count_causes_support=0;
				tblROWS = "";
				$.each(result.sponsor_causes, function(i, obj) {
					tblROWS += "<tr><td>" + obj.date_rec + "</td><td>" + obj.user_id + "</td><td>" + obj.contest_id + "</td><td>" + obj.cause_company_id + "</td><td>" + obj.cause_id + "</td><td>" + obj.totalCAUSE_BIDS + "</td></tr>";
					count_causes_support+=obj.totalCAUSE_BIDS;
				});

				$("#lbl_sponsor_unique_causes_supported").html("Total Unique Causes Supported : " + result.sponsor_causes.length);
				$("#lbl_sponsor_total_time_support_causes").html("Total Causes Supported (overall - this should be equal with total bids) : " + count_causes_support);
				
				$("#table_sponsor_causes").html(tblROWS);
				
				
			},
			error : function(msg) {
				$("#lbl_sponsor_views, #lbl_total_bids, #lbl_contest_views, #lbl_sponsor_social_FB, #lbl_sponsor_social_TW, #lbl_sponsor_unique_causes_supported, #lbl_sponsor_total_time_support_causes").html("Could not retrieve information right now, please try later!");
				$("#table_sponsor_views, #table_contest_bids, #table_contest_views, #table_sponsor_views, #table_sponsor_social, #table_sponsor_causes").html("");
			}
		});
	}

	getContentBIDS();

	// });
	//JQUERY [END]
</script>

<br>
<div id="box" class="container">
	<!-- contest_views -->
	<br>
	<br>
	<span id="lbl_contest_views" class="label label-primary"></span>

	<table class="table table-striped" id='table_open'>
		<thead>
			<tr>
				<th tabindex="0" rowspan="1" colspan="1">Date</th>
				<th tabindex="0" rowspan="1" colspan="1">Contest Title</th>
				<th tabindex="0" rowspan="1" colspan="1">UserID</th>
				<th tabindex="0" rowspan="1" colspan="1">Platform</th>
			</tr>
		</thead>

		<tbody id='table_contest_views'></tbody>
	</table>
	
	<!-- total_bids -->
	<br>
	<br>
	<span id="lbl_total_bids" class="label label-primary"></span>

	<table class="table table-striped" id='table_open'>
		<thead>
			<tr>
				<th tabindex="0" rowspan="1" colspan="1">Date</th>
				<th tabindex="0" rowspan="1" colspan="1">Contest Title</th>
				<th tabindex="0" rowspan="1" colspan="1">Bids</th>
			</tr>
		</thead>

		<tbody id='table_contest_bids'></tbody>
	</table>
	
	<!-- sponsor_views -->
	<br>
	<br>
	<span id="lbl_sponsor_views" class="label label-primary"></span>

	<table class="table table-striped" id='table_open'>
		<thead>
			<tr>
				<th tabindex="0" rowspan="1" colspan="1">Date</th>
				<th tabindex="0" rowspan="1" colspan="1">Sponsor Title</th>
				<th tabindex="0" rowspan="1" colspan="1">User ID</th>
				<th tabindex="0" rowspan="1" colspan="1">Platform</th>
			</tr>
		</thead>

		<tbody id='table_sponsor_views'></tbody>
	</table>
	
	<!-- sponsor_social_click -->
	<br>
	<br>
	<span id="lbl_sponsor_social_FB" class="label label-primary"></span>
	<span id="lbl_sponsor_social_TW" class="label label-primary"></span>

	<table class="table table-striped" id='table_open'>
		<thead>
			<tr>
				<th tabindex="0" rowspan="1" colspan="1">Date</th>
				<th tabindex="0" rowspan="1" colspan="1">User ID</th>
				<th tabindex="0" rowspan="1" colspan="1">Facebook Clicks</th>
				<th tabindex="0" rowspan="1" colspan="1">Twitter Clicks</th>
			</tr>
		</thead>

		<tbody id='table_sponsor_social'></tbody>
	</table>
	
	<!-- sponsor_from_contest_bid_get_causes_supported -->
	<br>
	<br>
	<span id="lbl_sponsor_unique_causes_supported" class="label label-primary"></span>
	<span id="lbl_sponsor_total_time_support_causes" class="label label-primary"></span>

	<table class="table table-striped" id='table_open'>
		<thead>
			<tr>
				<th tabindex="0" rowspan="1" colspan="1">Date</th>
				<th tabindex="0" rowspan="1" colspan="1">User ID</th>
				<th tabindex="0" rowspan="1" colspan="1">Contest</th>
				<th tabindex="0" rowspan="1" colspan="1">Cause Company</th>
				<th tabindex="0" rowspan="1" colspan="1">Cause</th>
				<th tabindex="0" rowspan="1" colspan="1">Votes</th>
			</tr>
		</thead>

		<tbody id='table_sponsor_causes'></tbody>
	</table>
</div>

//fl_stats_sponsor_contests_views.php
<?php
if (empty($_POST['ID'])) {
	echo json_encode(null);
	exit ;
}

try {
	include ('config.php');

	$db = connect();

//////////////////////////////////////////////////////////////// CONTESTS_VIEWS
	$stmt = $db -> prepare('SELECT * FROM contests where sponsor_id = ? group by contest_id,user_id');
	// $p1 = "151";
	$stmt -> bind_param('s', $_POST['ID']);

	$stmt -> execute();

	$result = $stmt -> get_result();

	$returnVAR = array();

	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
		$returnVAR[] = $row;
	}

	//unicode
	// header("Content-Type: application/json", true);
// 
	// echo json_encode($returnVAR);
	
//////////////////////////////////////////////////////////////// CONTESTS_BIDS
	$stmt = $db -> prepare('SELECT *,(SELECT count(*) FROM contest_bids where sponsor_id=TBLA.sponsor_id and contest_id=TBLA.contest_id group by user_id,contest_id) as totalBIDS FROM contest_bids as TBLA where sponsor_id=? group by user_id,contest_id');
	// $p1 = "151";
	$stmt -> bind_param('s', $_POST['ID']);

	$stmt -> execute();

	$result = $stmt -> get_result();

	$returnVAR2 = array();

	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
		if ($row["totalBIDS"]==null)
			$row["totalBIDS"] = 0;
		
		$returnVAR2[] = $row;
	}

//////////////////////////////////////////////////////////////// SPONSOR_VIEWS
	$stmt = $db -> prepare('SELECT * FROM sponsors where sponsor_id=? group by sponsor_id,user_id');
	// $p1 = "151";
	$stmt -> bind_param('s', $_POST['ID']);

	$stmt -> execute();

	$result = $stmt -> get_result();

	$returnVAR3 = array();

	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
		$returnVAR3[] = $row;
	}

//////////////////////////////////////////////////////////////// SPONSOR_SOCIAL_CLICK
	$stmt = $db -> prepare('SELECT user_id,sponsor_id,country,title,date_rec,session_index,platform,(SELECT count(*) FROM sponsors where sponsor_id=TBLA.sponsor_id and facebook=1 group by sponsor_id,user_id) as TOTAL_FB,(SELECT count(*) FROM sponsors where sponsor_id=TBLA.sponsor_id and twitter=1 group by sponsor_id,user_id) as TOTAL_TW FROM sponsors as TBLA where sponsor_id=? group by sponsor_id,user_id');
	// $p1 = "160";
	$stmt -> bind_param('s', $_POST['ID']);

	$stmt -> execute();

	$result = $stmt -> get_result();

	$returnVAR4 = array();

	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
		if ($row["TOTAL_FB"]==null)
			$row["TOTAL_FB"] = 0;

		if ($row["TOTAL_TW"]==null)
			$row["TOTAL_TW"] = 0;
				
		$returnVAR4[] = $row;
	}
	
//////////////////////////////////////////////////////////////// SPONSOR_CAUSE_SUPPORT
	$stmt = $db -> prepare('SELECT *,(select count(*) from contest_bids where sponsor_id=TBLA.sponsor_id group by cause_company_id,cause_id) as totalCAUSE_BIDS FROM contest_bids as TBLA where sponsor_id=? group by cause_company_id,cause_id');
	// $p1 = "160";
	$stmt -> bind_param('s', $_POST['ID']);

	$stmt -> execute();

	$result = $stmt -> get_result();

	$returnVAR5 = array();

	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
		if ($row["totalCAUSE_BIDS"]==null)
			$row["totalCAUSE_BIDS"] = 0;
				
		$returnVAR5[] = $row;
	}
	
	$json = array('contest_views' => $returnVAR, 'bids' => $returnVAR2, 'sponsor_views' => $returnVAR3, 'sponsor_social' => $returnVAR4, 'sponsor_causes' => $returnVAR5);

	//unicode
	header("Content-Type: application/json", true);

	echo json_encode($json);

} catch (exception $e) {
	echo json_encode(null);
}

?>


//config.php
<?php

function connect() {
	$mysql_hostname = "localhost"; 
	$mysql_user = "";
	$mysql_password = "";
	$mysql_database = "";

    //setup a connection with mySQL
    $mysqli = new mysqli($mysql_hostname, $mysql_user, $mysql_password,$mysql_database);

    /* check connection */
    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }
	
	//enable utf8!
	$mysqli -> query("SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");

    return $mysqli;
}


function getScalar($conne,$sql) {
    if ( $rs = $conne->query($sql) ) {
        $r = $rs->fetch_array();
        $rs->free();
        return $r[0];
    }
    return $def;
}

?>