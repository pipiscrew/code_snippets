<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="">
		<meta name="author" content="">
		<!-- <link rel="shortcut icon" href="../../assets/ico/favicon.png"> -->

		<title>Contests Administrator Panel</title>

		<!-- Bootstrap core CSS -->
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link href="css/bootstrap-datetimepicker.min.css" rel="stylesheet">

		<!-- jQuery -->
		<script type='text/javascript' src='js/jquery-1.10.2.min.js'></script>
		<script type='text/javascript' src='js/bootstrap.min.js'></script>
		<script type='text/javascript' src='js/bootstrap-datetimepicker.min.js'></script>
		<script type='text/javascript' src='js/jquery.validate.min.js'></script>

		<!-- firebase -->
		<script type='text/javascript' src='https://cdn.firebase.com/v0/firebase.js'></script>
		<script type='text/javascript' src='https://cdn.firebase.com/v0/firebase-simple-login.js'></script>

		<!-- validator label appearance -->
		<style>
			label.error {
				color: #FF0000;
				font-size: 11px;
				display: block;
				width: 100%;
				white-space: nowrap;
				float: none;
				margin: 8px 0 -8px 0;
				padding: 0 !important;
			}
		</style>

		<script type="text/javascript">
			$(function() {

				//set datetime pickers
				$('#datestartholder').datetimepicker();
				$('#dateendholder').datetimepicker();

				////////////////////////////////////////
				// MODAL FUNCTIONALITIES
				//when modal closed, hide the warning messages + reset
				$('#modaloCOMPETITION').on('hidden.bs.modal', function() {
					console.log('closed');
					//when close - clear elements
					$('#formoCOMPETITION').trigger("reset");

					//select 1st item on combo Categories
					$('#category').val('-Choose-');

					//clear validator error on form
					validatoroCOMPETITION.resetForm();

					//set form texts for new record
					$('#bntSave_oCOMPETITION').text('save');
					$('#lblTitle_oCOMPETITION').text('New Competition');
				});

				//functionality when the modal already shown and its long when loaded scroll to top
				$('#modaloCOMPETITION').on('shown.bs.modal', function() {
					$(this).animate({
						scrollTop : 0
					}, 'slow');
				});
				// MODAL FUNCTIONALITIES
				////////////////////////////////////////

				////////////////////////////////////////
				//reference with firebase
				var db = new Firebase('https://testarea.firebaseio.com/');
				var userID;

				var auth = new FirebaseSimpleLogin(db, function(error, user) {
					//security - when is not logged in goto login page
					if (error | user === null) {
						window.location = "index.html";
					} else {
						//fill table

						//store userID
						userID = user.id;

						//////////////////////////////convert now to UTC timestamp
						var newDay = new Date();
						var t = new Date(newDay.toUTCString());
						var time1 = Math.round(t / 1000);

						////////////////////////////////
						//list active competitions to table
						var db2 = new Firebase('https://testarea.firebaseio.com/competitions');
						var db2Query = db2.startAt(time1);
						console.log(time1);
						db2Query.on('value', function(snapshot) {

							if (snapshot.val() === null) {
								alert('I got a null result.');
							} else {
								var tbl = "";
								snapshot.forEach(function(competitionDetails) {
									tbl += "<tr>";
									tbl += "<td><img src=" + competitionDetails.val().Logo + "></td>";
									tbl += "<td>" + competitionDetails.val().Title + "</td>";
									tbl += "<td>" + competitionDetails.val().Comment + "</td>";
									tbl += "<td>" + getGMTfromUTC(competitionDetails.val().dateStart) + "</td>";
									tbl += "<td>" + getGMTfromUTC(competitionDetails.val().dateEnd) + "</td>";
									tbl += "<td>countbids?</td>";
									tbl += "<td><input id='btn_edit' type='button' value='edit' class='btn btn-primary btn-sm' data-name='" + competitionDetails.name() + "'/></td>";
									tbl += "<td><input id='btn_del' type='button' value='delete' class='btn btn-danger btn-sm' data-name='" + competitionDetails.name() + "'/></td>";
									tbl += "</tr>";
								});

								$('#table_opencontests').html(tbl);
							}

						});

						/////////////////////
						// fill MODAL combo
						var db3 = new Firebase('https://testarea.firebaseio.com/categories');
						db3.once('value', function(snapshot) {
							if (snapshot.val() === null) {
								alert('I got a null result.');
							} else {

								var categs = "<option>-Choose-</option>";
								snapshot.forEach(function(categ) {
									//categs += "<option value='" + categ.name() + "'>" + categ.val().title + "</option>";
									categs += "<option>" + categ.val().title + "</option>";
								});

								$('#category').html(categs);
							}
						});

					}
				});

				////////////////////////////////////////
				// edit button - comes from GRID only
				$(document).on("click", "#btn_edit", function(e) {

					//show indicator (disable user interaction)
					$("#loading").show();

					//set form texts for update
					$('#bntSave_oCOMPETITION').text('update');
					$('#lblTitle_oCOMPETITION').text('Edit Competition');

					//set recordID
					$('#oCOMPETITION_updateID').val($(this).attr('data-name'));

					var db4 = new Firebase('https://testarea.firebaseio.com/competitions');
					var db4Query = db4.child($(this).attr('data-name'));
					db4Query.once('value', function(snapshot) {
						if (snapshot.val() === null) {
							alert('I got a null result.');
						} else {
							console.log(snapshot.val());
							$('#title').val(snapshot.val().Title);
							$('#descr').val(snapshot.val().Comment);
							$('#logo').val(snapshot.val().Logo);
							$('#credit').val(snapshot.val().Cr);
							$('#category').val(snapshot.val().Cat);
							$('#datestart').val(getGMTfromUTC(snapshot.val().dateStart));
							$('#dateend').val(getGMTfromUTC(snapshot.val().dateEnd));

							//hide indicator
							$("#loading").hide();

							//show modal
							$('#modaloCOMPETITION').modal('toggle');

						}
					});

				});

				/////////////////////////////////////////////////////////// VALIDATION
				// add custom validation for combos
				$.validator.addMethod("valueNotEquals", function(value, element, arg) {
					return arg != value;
				}, "Please select something");

				var validatoroCOMPETITION = $("#formoCOMPETITION").validate({
					rules : {
						title : {
							required : true
						},
						descr : {
							required : true
						},
						logo : {
							required : true
						},
						credit : {
							required : true
						},
						category : {
							valueNotEquals : '-Choose-'
						}
					},
					messages : {
						title : 'Required field',
						descr : 'Required field',
						logo : 'Required field',
						credit : 'Required field',
						category : 'Required field',
					}
				});
				/////////////////////////////////////////////////////////// VALIDATION

				////////////////////////////////////////
				// MODAL SUBMIT aka save button
				$('#formoCOMPETITION').submit(function(e) {
					e.preventDefault();

					////////////////////////// validation
					var form = $(this);
					form.validate();

					if (!form.valid())
						return;
					////////////////////////// validation

					//compare dates
					var
					dt1, dt2;

					try {
						if ((isEmpty($('#datestart').val())) | (isEmpty($('#dateend').val()))) {
							alert("'Date Start' and 'Date End' required!");
							return;
						}
						//
						dt1 = parseDate($('#datestart').val());
						dt2 = parseDate($('#dateend').val());

						//compare Start with End
						if (dt2 < dt1) {
							alert("'Date End' must be greater than 'Date Start'");
							return;
						} else {
							//compare DateEnd with today
							var now = new Date();

							if (dt2 < now) {

								alert("'Date End' must be greater than today");
								return;
							}
						}
					} catch (exception) {
						alert(exception);
						return;
					}

					var endDate = getUTCfromGMT(dt2);

					//add new
					if ($('#oCOMPETITION_updateID').val() == '') {
						var db5 = new Firebase('https://testarea.firebaseio.com/competitions');

						var newID = db5.push({
						}).toString();

						//alert(newID);
						var db5b = new Firebase(newID);
						db5b.setWithPriority({
							Cat : $('#category').val(),
							Comment : $('#descr').val(),
							Cr : $('#credit').val(),
							Logo : $('#logo').val(),
							Title : $('#title').val(),
							adminID : userID,
							dateStart : getUTCfromGMT(dt1),
							dateEnd : endDate
						}, endDate);

					} else {
						//update

						var db6 = new Firebase('https://testarea.firebaseio.com/competitions/' + $('#oCOMPETITION_updateID').val());

						db6.child('Cat').set($('#category').val());
						db6.child('Comment').set($('#descr').val());
						db6.child('Cr').set($('#credit').val());
						db6.child('Logo').set($('#logo').val());
						db6.child('Title').set($('#title').val());
						db6.child('adminID').set(userID);
						db6.child('dateStart').set(getUTCfromGMT(dt1));
						db6.child('dateEnd').set(endDate);

						db6.setPriority(endDate);
					}
				});

			});
			//JQuery ends here

			function isEmpty(str) {
				return (!str || 0 === str.length);
			}

			function parseDate(input) {
				var data = input.split(' ');
				var datePart = data[0].split('/');
				var timePart = data[1].split(':');

				// new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
				return (new Date(datePart[2], datePart[1] - 1, datePart[0], timePart[0], timePart[1]));
				// months are 0-based
			}

			function getUTCfromGMT(val) {
				var newDay = new Date();
				var t = new Date(val);
				var time1 = Math.round(t / 1000);
				return (time1);
			}

			function getGMTfromUTC(val) {
				var d = new Date();
				d.setTime(val * 1000);

				var hours = d.getHours();
				var minutes = d.getMinutes();

				if (hours < 10) {
					hours = "0" + hours;
				}
				if (minutes < 10) {
					minutes = "0" + minutes;
				}

				//http://www.w3schools.com/jsref/jsref_getmonth.asp
				// months are 0-based
				return d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + " " + hours + ":" + minutes;
			}

		</script>

		<body>
			<!-- covers window screen (user waiting response from firebase) -->
			<div id="loading" style="display:none;background-color:white;position:absolute;top:0;left:0;height:100%;width:100%;z-index:999;vertical-align:middle; text-align:center"><img src='http://www.w3schools.com/jquery/demo_wait.gif' />
			</div>

			<!-- TABS -->
			<ul class='nav nav-tabs' id='tabContainer'>
				<li class='active'>
					<a href='#opencontests' data-toggle='tab'>Open Contests</a>
				</li>
				<li>
					<a href='#closecontests' data-toggle='tab'>Ended Contests</a>
				</li>
			</ul>

			<!-- TABS Content [START] -->
			<div id="tabsContent" class="tab-content">

				<!-- TAB open contests [START] -->
				<div class="tab-pane fade in active" id="CUSTOMERSTAB">
					<!-- NEW COMPETITION MODAL [START] -->
					<div class="modal fade" id="modaloCOMPETITION" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
										&times;
									</button>
									<h4 class="modal-title" id='lblTitle_oCOMPETITION'>New Competition</h4>
								</div>
								<div class="modal-body">
									<form id="formoCOMPETITION" role="form" method="post" action="fish_oCOMPETITION_save.php">
										<form role="form">
											<div class='form-group'>
												<label>Title :</label>
												<input id='title' name='title' class='form-control' placeholder='Competition Title'>
											</div>
											<div class='form-group'>
												<label>Description :</label>
												<input id='descr' name='descr' class='form-control' placeholder='Competition Description'>
											</div>

											<div class="form-group">
												<label>Category :</label>
												<select id="category"  name="category" class="form-control"></select>
											</div>

											<div class='form-group'>
												<label>Logo :</label>
												<input id='logo' name='logo' class='form-control' placeholder='Image Link'>
											</div>

											<div class='form-group'>
												<label>Credit :</label>
												<input id='credit' name='credit' class='form-control' placeholder='Credit per user vote'>
											</div>

											<div class="form-group">
												<label>Date Start :</label>
												<div class='input-group date' id='datestartholder'>
													<input id='datestart' name='datestart' type='text' class="form-control" data-format="dd/MM/yyyy" />
													<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span> </span>
												</div>
											</div>

											<div class="form-group">
												<label>Date End :</label>
												<div class='input-group date' id='dateendholder' >
													<input id='dateend' name='dateend' type='text' class="form-control" data-format="dd/MM/yyyy" />
													<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span> </span>
												</div>
											</div>

											<!-- <div class='form-group'>
											<label>Date Start :</label>
											<input id='datestart' size="16" type="text" value="" readonly class="input-append date form_datetime">
											<span class="add-on"><i class="icon-th"></i></span>
											<!-- <input id='datestart' data-format="dd/MM/yyyy hh:mm:ss" class="input-append date" type="text" placeholder='Date Start'></input> -->
											<!-- </div>  -->

											<input id="oCOMPETITION_updateID" class="form-control" style="display:none;">
								</div>
								<div class="modal-footer">
									<button id="bntCancel_oCOMPETITION" type="button" class="btn btn-default" data-dismiss="modal">
										cancel
									</button>
									<button id="bntSave_oCOMPETITION" class="btn btn-primary" type="submit" name="submit">
										save
									</button>
								</div>
								</form>
							</div>
							<
						</div>
					</div>
					<!-- NEW COMPETITION MODAL [END] -->
					<br>
					<div id="box" class="container">
						<a data-toggle="modal" href="#modaloCOMPETITION" class="btn btn-default">New</a>
						<br>
						<br>
						<table class="table table-striped" id='table_open'>
							<thead>
								<tr>
									<th tabindex="0" rowspan="1" colspan="1">Logo</th>
									<th tabindex="0" rowspan="1" colspan="1">Title</th>
									<th tabindex="0" rowspan="1" colspan="1">Comment</th>
									<th tabindex="0" rowspan="1" colspan="1">Date Start</th>
									<th tabindex="0" rowspan="1" colspan="1">Date End</th>
									<th tabindex="0" rowspan="1" colspan="1">Bids</th>
									<th tabindex="0" rowspan="1" colspan="1">Options</th>
								</tr>
							</thead>

							<tbody id='table_opencontests'></tbody>
						</table>
					</div>
				</div>
				<!-- TAB open contests [END] -->

			</div>
			<!-- TABS Content [END] -->
		</body>
</html>