is the same with native, change only line123
//html+js
<?php
session_start();

if (!isset($_SESSION["u"])) {
	header("Location: index.html");
	exit ;
}

include ('92nNE1WK_config.php');

$conn = connect();

///////////////////READ CATEGORIES
$stmt = $conn -> prepare('select categ_id,categ_path from adbook_categories order by categ_path');

$stmt -> execute();

$result = $stmt -> get_result();
$categories;
$x = 0;

while ($row = $result -> fetch_assoc()) {
	$categories[$x] = $row;
	$x += 1;
}

$stmt -> close();
///////////////////READ CATEGORIES


///////////////////READ SPEFIC RECORD
if (isset($_GET["id"])) {
	$stmt = $conn -> prepare('SELECT * FROM adbook_companies WHERE companyid = ?');
	$stmt -> bind_param('s', $_GET["id"]);

	$stmt -> execute();

	$result = $stmt -> get_result();

	$row = $result -> fetch_assoc();

	$stmt -> close();
}
///////////////////READ SPEFIC RECORD

$conn -> close();

?>

<script type="text/javascript">
	///////////////////////////////////////////////////////////// FILLCATEGORIES
	var jArrayCATS = <?php echo json_encode($categories); ?>;
	console.log(jArrayCATS);
	var combo_rows="";
    for (var i=0; i<jArrayCATS.length; i++){
        combo_rows += "<option value='" + jArrayCATS[i]["categ_id"] + "'>" + jArrayCATS[i]["categ_path"] + "</option>";
    }
    
    $("#categ_id1, #categ_id2, #categ_id3, #categ_id4").html(combo_rows);
    
	///////////////////////////////////////////////////////////// FILLCATEGORIES

	///////////////////////////////////////////////////////////// EDIT RECORD
	var jArray =   <?php echo json_encode($row); ?>;

	if (jArray) {
		// console.log(jArray);
		$('[name=adbook_companiesFORM_updateID]').val(jArray["companyid"]);
		$('[name=comp_title]').val(jArray["comp_title"]);
		$('[name=comp_name]').val(jArray["comp_name"]);
		$('[name=cmp_password]').val(jArray["cmp_password"]);
		$('[name=page_editor]').val(jArray["page_editor"]);
		$('[name=admin_name]').val(jArray["admin_name"]);
		$('[name=comp_address]').val(jArray["comp_address"]);
		$('[name=zipcode]').val(jArray["zipcode"]);
		$('[name=area]').val(jArray["area"]);
		$('[name=phone_old]').val(jArray["phone_old"]);
		$('[name=fax]').val(jArray["fax"]);
		$('[name=email]').val(jArray["email"]);
		$('[name=url]').val(jArray["url"]);
		$('[name=member_group]').val(jArray["member_group"]);
		$('[name=member_international]').val(jArray["member_international"]);
		$('[name=member_syndicate]').val(jArray["member_syndicate"]);
		$('[name=media_unit]').val(jArray["media_unit"]);
		$('[name=member_union]').val(jArray["member_union"]);
		$('[name=map_ok]').prop('checked', jArray["map_ok"]);
		// $('[name=map_ok]').val(jArray["map_ok"]);
		$('[name=categ_id1]').val(jArray["categ_id1"]);
		$('[name=categ_id2]').val(jArray["categ_id2"]);
		$('[name=categ_id3]').val(jArray["categ_id3"]);
		$('[name=categ_id4]').val(jArray["categ_id4"]);
		$('[name=logo]').val(jArray["logo"]);
		$('[name=advertisement_link]').val(jArray["advertisement_link"]);
		$('[name=advertisement_pic]').val(jArray["advertisement_pic"]);
		$('[name=enabled]').prop('checked', jArray["enabled"]);
		// $('[name=enabled]').val(jArray["enabled"]);
		$('[name=greeklish]').val(jArray["greeklish"]);
		$('[name=lastupdate]').val(jArray["lastupdate"]);
		$('[name=latlon]').val(jArray["latlon"]);
		$('[name=latitude]').val(jArray["latitude"]);
		$('[name=longitude]').val(jArray["longitude"]);
		$('[name=is_visible]').prop('checked', jArray["is_visible"]);
		// $('[name=is_visible]').val(jArray["is_visible"]);
		$('[name=phone]').val(jArray["phone"]);
		$('[name=email_others]').val(jArray["email_others"]);
		$('[name=comp_title_en]').val(jArray["comp_title_en"]);
		$('[name=contact_email]').val(jArray["contact_email"]);
		$('[name=station_type]').val(jArray["station_type"]);
		$('[name=periodicity]').val(jArray["periodicity"]);
	}
	///////////////////////////////////////////////////////////// EDIT RECORD

	//	jquery
	$(function() {
		//	jquery
		
				$('#btn_company_details_cancel').on('click', function(e) {
					$("#companies").show();
					$("#companies_details").hide();
				});
*******************************************************************************	
//http://hayageek.com/jquery-ajax-form-submit/			
				$("#formadbook_companiesFORM").submit(function(e)
				{
				    e.preventDefault(); //STOP default action
				    
				    var postData = $(this).serializeArray();
				    var formURL = $(this).attr("action");
				    $.ajax(
				    {
				        url : formURL,
				        type: "POST",
				        data : postData,
				        success:function(data, textStatus, jqXHR) 
				        {
				            alert(data);
				        },
				        error: function(jqXHR, textStatus, errorThrown) 
				        {
				            alert("ERROR");      
				        }
				    });
				});
*******************************************************************************
		//	jquery
	});
	//	jquery
</script>

<br>
<!-- <a href="#" class="btn btn-default btn-success"><span class="glyphicon glyphicon-chevron-left"></span> πίσω</a> -->



<form id="formadbook_companiesFORM" role="form" method="post" action="tab_company_details_save.php">
<button id="btn_company_details_cancel" class="btn btn-default"><span class="glyphicon glyphicon-chevron-left"></span> πίσω</button>
<button id="btn_company_details_save"  class="btn btn-default btn-danger" type="submit" name="submit"><span class="glyphicon glyphicon-floppy-disk"></span> αποθήκευση</button>
<br>
<br>
	
	<form role="form">
		<div class="row">
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Τίτλος :</label>
					<input name='comp_title' class='form-control' placeholder='Τίτλος'>
				</div>
			</div>
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Ονομασία :</label>
					<input name='comp_name' class='form-control' placeholder='Ονομασία'>
				</div>
			</div>
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Password :</label>
					<input name='cmp_password' class='form-control' placeholder='Password'>
				</div>
			</div>

		</div>

		<div class="row">
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Editor :</label>
					<input name='page_editor' class='form-control' placeholder='Editor'>
				</div>
			</div>
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Admin Name :</label>
					<input name='admin_name' class='form-control' placeholder='Admin Name'>
				</div>
			</div>
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Διεύθυνση :</label>
					<input name='comp_address' class='form-control' placeholder='Διεύθυνση'>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-6 col-md-4">

				<div class='form-group'>
					<label>ΤΚ :</label>
					<input name='zipcode' class='form-control' placeholder='ΤΚ'>
				</div>
			</div>

			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Περιοχή :</label>
					<input name='area' class='form-control' placeholder='Περιοχή'>
				</div>
			</div>

			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Τηλέφωνο :</label>
					<input name='phone_old' class='form-control' placeholder='Τηλέφωνο'>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>FAX :</label>
					<input name='fax' class='form-control' placeholder='FAX'>
				</div>
			</div>

			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Login (email) :</label>
					<input name='email' class='form-control' placeholder='email'>
				</div>
			</div>

			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Website :</label>
					<input name='url' class='form-control' placeholder='Website'>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>member_group :</label>
					<input name='member_group' class='form-control' placeholder='member_group'>
				</div>
			</div>

			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>member_international :</label>
					<input name='member_international' class='form-control' placeholder='member_international'>
				</div>
			</div>

			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>member_syndicate :</label>
					<input name='member_syndicate' class='form-control' placeholder='member_syndicate'>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>media_unit :</label>
					<input name='media_unit' class='form-control' placeholder='media_unit'>
				</div>
			</div>

			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>member_union :</label>
					<input name='member_union' class='form-control' placeholder='member_union'>
				</div>
			</div>

			<div class="col-xs-6 col-md-4">
				<div class="checkbox">
					<label>
						<input name='map_ok' type="checkbox">
						map_ok </label>
				</div>

				<!-- <div class='form-group'>
				<label>Map_OK :</label>
				<input name='map_ok' class='form-control' placeholder='Map_OK'>
				</div> -->
			</div>
		</div>

		<div class="row">
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Κατηγορία 1 :</label>
					<select id="categ_id1" name='categ_id1' class='form-control'></select>
					
					<!-- <input name='categ_id1' class='form-control' placeholder='Κατηγορία 1'> -->
				</div>
			</div>

			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Κατηγορία 2 :</label>
					<!-- <input name='categ_id2' class='form-control' placeholder='Κατηγορία 2'> -->
					<select id="categ_id2" name='categ_id2' class='form-control'></select>
				</div>
			</div>

			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Κατηγορία 3 :</label>
					<!-- <input name='categ_id3' class='form-control' placeholder='Κατηγορία 3'> -->
					<select id="categ_id3" name='categ_id3' class='form-control'></select>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Κατηγορία 4 :</label>
					<!-- <input name='categ_id4' class='form-control' placeholder='Κατηγορία 4'> -->
					<select id="categ_id4" name='categ_id4' class='form-control'></select>
				</div>
			</div>

			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Λογότυπο :</label>
					<input name='logo' class='form-control' placeholder='Λογότυπο'>
				</div>
			</div>

			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>advertisement_link :</label>
					<input name='advertisement_link' class='form-control' placeholder='advertisement_link'>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>advertisement_pic :</label>
					<input name='advertisement_pic' class='form-control' placeholder='advertisement_pic'>
				</div>
			</div>

			<div class="col-xs-6 col-md-4">
				<div class="checkbox">
					<label>
						<input name='enabled' type="checkbox">
						enabled </label>
				</div>

				<!-- <div class='form-group'>
				<label>enabled :</label>
				<input name='enabled' class='form-control' placeholder='enabled'>
				</div> -->
			</div>

			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Greeklish :</label>
					<input name='greeklish' class='form-control' placeholder='Greeklish'>
				</div>
			</div>

		</div>

		<div class="row">
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Τελευταία Ενημέρωση :</label>
					<input name='lastupdate' class='form-control' placeholder='Τελευταία Ενημέρωση'>
				</div>
			</div>

			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>latlon :</label>
					<input name='latlon' class='form-control' placeholder='latlon'>
				</div>
			</div>

			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>latitude :</label>
					<input name='latitude' class='form-control' placeholder='latitude'>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>longitude :</label>
					<input name='longitude' class='form-control' placeholder='longitude'>
				</div>
			</div>

			<div class="col-xs-6 col-md-4">
				<div class="checkbox">
					<label>
						<input name='is_visible' type="checkbox">
						is_visible </label>
				</div>

				<!-- <div class='form-group'>
				<label>is_visible :</label>
				<input name='is_visible' class='form-control' placeholder='is_visible'>
				</div> -->
			</div>
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>phone :</label>
					<input name='phone' class='form-control' placeholder='phone'>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-6 col-md-4">

				<div class='form-group'>
					<label>txtemail_others :</label>
					<input name='email_others' class='form-control' placeholder='txtemail_others'>
				</div>
			</div>

			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>txtcomp_title_en :</label>
					<input name='comp_title_en' class='form-control' placeholder='txtcomp_title_en'>
				</div>
			</div>
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Email υπεύθυνου αλλαγών :</label>
					<input name='contact_email' class='form-control' placeholder='Email υπεύθυνου αλλαγών'>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>txtstation_type :</label>
					<input name='station_type' class='form-control' placeholder='txtstation_type'>
				</div>
			</div>

			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>txtperiodicity :</label>
					<input name='periodicity' class='form-control' placeholder='txtperiodicity'>
				</div>
			</div>
		</div>

		<input name="adbook_companiesFORM_updateID" class="form-control" style="display:none;">

		</div>
		<!-- <div class="modal-footer"> -->
		<!-- <button id="bntCancel_adbook_companiesFORM" type="button" class="btn btn-default" data-dismiss="modal">
			cancel
		</button>
		<button id="bntSave_adbook_companiesFORM" class="btn btn-primary" type="submit" name="submit">
			save
		</button> -->
		<!-- </div> -->
	</form>
</form>






//tab_company_details_save.php
<?php

if (!isset($_POST['comp_title']) || !isset($_POST['comp_name']) || !isset($_POST['cmp_password']) || !isset($_POST['page_editor']) || !isset($_POST['admin_name']) || !isset($_POST['comp_address']) || !isset($_POST['zipcode']) || !isset($_POST['area']) || !isset($_POST['phone_old']) || !isset($_POST['fax']) || !isset($_POST['email']) || !isset($_POST['url']) || !isset($_POST['member_group']) || !isset($_POST['member_international']) || !isset($_POST['member_syndicate']) || !isset($_POST['media_unit']) || !isset($_POST['member_union']) || !isset($_POST['categ_id1']) || !isset($_POST['categ_id2']) || !isset($_POST['categ_id3']) || !isset($_POST['categ_id4']) || !isset($_POST['logo']) || !isset($_POST['advertisement_link']) || !isset($_POST['advertisement_pic']) || !isset($_POST['greeklish']) || !isset($_POST['lastupdate']) || !isset($_POST['latlon']) || !isset($_POST['latitude']) || !isset($_POST['longitude']) || !isset($_POST['phone']) || !isset($_POST['email_others']) || !isset($_POST['comp_title_en']) || !isset($_POST['contact_email']) || !isset($_POST['station_type']) || !isset($_POST['periodicity'])) {
	echo "error010101010";
	return;
}

///////////////////////////////////////////////////// SAVE OR UPDATE

$adbook_companiesFORM_updateID = 0;
if (isset($_POST['adbook_companiesFORM_updateID']))
	if (!empty($_POST['adbook_companiesFORM_updateID']))
		$adbook_companiesFORM_updateID = $_POST['adbook_companiesFORM_updateID'];
///////////////////////////////////////////////////// SAVE OR UPDATE



////////////// VALIDATION FOR CHECKBOXES 
$is_map = 0;
$is_enabled = 0;
$is2_visible = 0;

if (isset($_POST['map_ok'])) {
	if ($_POST['map_ok'] == "on")
		$is_map = 1;
	else
		$is_map = 0;
}

if (isset($_POST['enabled'])) {
	if ($_POST['enabled'] == "on")
		$is_enabled = 1;
	else
		$is_enabled = 0;
}

if (isset($_POST['is_visible'])) {
	if ($_POST['is_visible'] == "on")
		$is2_visible = 1;
	else
		$is2_visible = 0;
}
////////////// VALIDATION FOR CHECKBOXES 

require_once ('92nNE1WK_config.php');

$db = connect();

if ($stmt = $db -> prepare("call adbook_companies_save (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")) {

	//bind our params
	// $stmt -> bind_param('sssssssssssssssssisssssssssssssissssss', $comp_title, $comp_name, $cmp_password, $page_editor, $admin_name, $comp_address, $zipcode, $area, $phone_old, $fax, $email, $url, $member_group, $member_international, $member_syndicate, $media_unit, $member_union, $map_ok, $categ_id1, $categ_id2, $categ_id3, $categ_id4, $logo, $advertisement_link, $advertisement_pic, $enabled, $greeklish, $lastupdate, $latlon, $latitude, $longitude, $is_visible, $phone, $email_others, $comp_title_en, $contact_email, $station_type, $periodicity);
	$stmt -> bind_param('ssssssssssssssssssisssssssssssssissssss', $rec_id, $comp_title, $comp_name, $cmp_password, $page_editor, $admin_name, $comp_address, $zipcode, $area, $phone_old, $fax, $email, $url, $member_group, $member_international, $member_syndicate, $media_unit, $member_union, $map_ok, $categ_id1, $categ_id2, $categ_id3, $categ_id4, $logo, $advertisement_link, $advertisement_pic, $enabled, $greeklish, $lastupdate, $latlon, $latitude, $longitude, $is_visible, $phone, $email_others, $comp_title_en, $contact_email, $station_type, $periodicity);

	$rec_id = $_POST['adbook_companiesFORM_updateID'];
	$comp_title = $_POST['comp_title'];
	$comp_name = $_POST['comp_name'];
	$cmp_password = $_POST['cmp_password'];
	$page_editor = $_POST['page_editor'];
	$admin_name = $_POST['admin_name'];
	$comp_address = $_POST['comp_address'];
	$zipcode = $_POST['zipcode'];
	$area = $_POST['area'];
	$phone_old = $_POST['phone_old'];
	$fax = $_POST['fax'];
	$email = $_POST['email'];
	$url = $_POST['url'];
	$member_group = $_POST['member_group'];
	$member_international = $_POST['member_international'];
	$member_syndicate = $_POST['member_syndicate'];
	$media_unit = $_POST['media_unit'];
	$member_union = $_POST['member_union'];
	$map_ok = $is_map;
	$categ_id1 = $_POST['categ_id1'];
	$categ_id2 = $_POST['categ_id2'];
	$categ_id3 = $_POST['categ_id3'];
	$categ_id4 = $_POST['categ_id4'];
	$logo = $_POST['logo'];
	$advertisement_link = $_POST['advertisement_link'];
	$advertisement_pic = $_POST['advertisement_pic'];
	$enabled = $is_enabled;//$_POST['enabled'];//$is_enabled;
	$greeklish = $_POST['greeklish'];
	$lastupdate = $_POST['lastupdate'];
	$latlon = $_POST['latlon'];
	$latitude = $_POST['latitude'];
	$longitude = $_POST['longitude'];
	$is_visible = $is2_visible;
	$phone = $_POST['phone'];
	$email_others = $_POST['email_others'];
	$comp_title_en = $_POST['comp_title_en'];
	$contact_email = $_POST['contact_email'];
	$station_type = $_POST['station_type'];
	$periodicity = $_POST['periodicity'];

	/* Execute the prepared Statement */
	$stmt -> execute();

	$g = $stmt -> affected_rows;

	if ($g == -1)
		echo $g . " - something wrong!<br>";
	else
		echo $g . " - Inserted<br>";
}

//close the statement
$stmt -> close();

$db -> close();
?>

