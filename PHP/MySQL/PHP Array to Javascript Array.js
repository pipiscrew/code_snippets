//http://stackoverflow.com/questions/4885737/pass-a-php-array-to-a-javascript-function

<?php
session_start();

if (!isset($_SESSION["u"])) {
	header("Location: index.html");
	exit ;
}

if (isset($_GET["id"])) {
	// echo $_GET["id"];

	include ('92nNE1WK_config.php');
	
	$conn = connect();
	
	$stmt = $conn->prepare('SELECT * FROM mattel_companies WHERE companyid = ?');
	$stmt->bind_param('s', $_GET["id"]);
	
	$stmt->execute();
	
	$result = $stmt->get_result();
	
	$row=$result->fetch_assoc();

	$stmt->close();
	
}
?>

<script type="text/javascript">

    var jArray= <?php echo json_encode($row); ?>;

	if (jArray)
	{
		// console.log(jArray);
         $('[name=mattel_companiesFORM_updateID]').val(jArray["companyid"]);
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
         $('[name=map_ok]').val(jArray["map_ok"]);
         $('[name=categ_id1]').val(jArray["categ_id1"]);
         $('[name=categ_id2]').val(jArray["categ_id2"]);
         $('[name=categ_id3]').val(jArray["categ_id3"]);
         $('[name=categ_id4]').val(jArray["categ_id4"]);
         $('[name=logo]').val(jArray["logo"]);
         $('[name=advertisement_link]').val(jArray["advertisement_link"]);
         $('[name=advertisement_pic]').val(jArray["advertisement_pic"]);
         $('[name=enabled]').val(jArray["enabled"]);
         $('[name=greeklish]').val(jArray["greeklish"]);
         $('[name=lastupdate]').val(jArray["lastupdate"]);
         $('[name=latlon]').val(jArray["latlon"]);
         $('[name=latitude]').val(jArray["latitude"]);
         $('[name=longitude]').val(jArray["longitude"]);
         $('[name=is_visible]').val(jArray["is_visible"]);
         $('[name=phone]').val(jArray["phone"]);
         $('[name=email_others]').val(jArray["email_others"]);
         $('[name=comp_title_en]').val(jArray["comp_title_en"]);
         $('[name=contact_email]').val(jArray["contact_email"]);
         $('[name=station_type]').val(jArray["station_type"]);
         $('[name=periodicity]').val(jArray["periodicity"]);
	}
</script>
 
 
<form id="formmattel_companiesFORM" role="form" method="post">
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
					<label>Admin :</label>
					<input name='admin_name' class='form-control' placeholder='Admin'>
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
				<div class='form-group'>
					<label>Map_OK :</label>
					<input name='map_ok' class='form-control' placeholder='Map_OK'>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Κατηγορία 1 :</label>
					<input name='categ_id1' class='form-control' placeholder='Κατηγορία 1'>
				</div>
			</div>

			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Κατηγορία 2 :</label>
					<input name='categ_id2' class='form-control' placeholder='Κατηγορία 2'>
				</div>
			</div>

			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Κατηγορία 3 :</label>
					<input name='categ_id3' class='form-control' placeholder='Κατηγορία 3'>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-6 col-md-4">
				<div class='form-group'>
					<label>Κατηγορία 4 :</label>
					<input name='categ_id4' class='form-control' placeholder='Κατηγορία 4'>
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
				<div class='form-group'>
					<label>enabled :</label>
					<input name='enabled' class='form-control' placeholder='enabled'>
				</div>
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
				<div class='form-group'>
					<label>is_visible :</label>
					<input name='is_visible' class='form-control' placeholder='is_visible'>
				</div>
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

		<input name="mattel_companiesFORM_updateID" class="form-control" style="display:none;">

		</div>
		<!-- <div class="modal-footer"> -->
		<button id="bntCancel_mattel_companiesFORM" type="button" class="btn btn-default" data-dismiss="modal">
			cancel
		</button>
		<button id="bntSave_mattel_companiesFORM" class="btn btn-primary" type="submit" name="submit">
			save
		</button>
		<!-- </div> -->
	</form>
