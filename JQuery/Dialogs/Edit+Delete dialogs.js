
		<script type="text/javascript">
			$(function() {

				//read event ID
				var eventname = GetURLParameter('event');

				//used only on editModal
				var episode = "";

				//even no ID - go back
				if (eventname == null)
					window.location = "portal.html";

				////////////////////////
				//read URL parameter
				////////////////////////
				function GetURLParameter(sParam) {
					var sPageURL = window.location.search.substring(1);
					var sURLVariables = sPageURL.split('&');
					for (var i = 0; i < sURLVariables.length; i++) {
						var sParameterName = sURLVariables[i].split('=');
						if (sParameterName[0] == sParam) {
							return sParameterName[1];
						}
					}
				}

				/////////////////////////////////
				//create reference with Firebase
				var episodesRef = new Firebase('https://csp.firebaseio.com/events/' + eventname + "/episodes");

				//security - when is not logged in goto login page
				var auth = new FirebaseSimpleLogin(episodesRef, function(error, user) {
					if (error | user === null) {
						window.location = "index.html";
					}

					//for each episode
					episodesRef.on('value', function(snapshot) {
						if (snapshot.val() != null) {
							var res = snapshot.val()

							//init var for html injection
							var new_contents = "";
							$("#ins_row").html(new_contents);

							//construct the path for recID
							var recID = "";

							//loop through episode fields
							for (key in res) {
								var episodeDetails = res[key];

								//recID = eventname + "/episodes/" + episodeDetails["title"].replace(/[^a-zA-Z0-9\\s]/g, "-").toLowerCase();
								//recID = "?event=" + eventname + "&episode=" + episodeDetails["title"].replace(/[^a-zA-Z0-9\\s]/g, "-").toLowerCase();

								//get the recID from dbase
								//recID = "?event=" + eventname + "&episode=" + key.toString();
								recID = key.toString();
								new_contents = "<tr><td>" + episodeDetails["title"] + "</td><td>" + episodeDetails["description"] + "</td><td>" + "<button id='btn_edit' data-name='" + recID + "' class='btn btn-sm btn-block btn-primary'>edit</button>" + "<button id='btn_delete' data-name='" + recID + "' class='btn btn-sm btn-block btn-primary'>delete</button>" + "</td></tr>" + new_contents;
							}

							$("#ins_row").html(new_contents);

						}
					});
				});

				/////////////////
				// insert button
				// add new button by top-toolbar
				$('#btn_addnewepisode').on('click', function(e) {
					//hide any alert
					hidealert();

					episode = "";
					$('#btn_editModalsave').text('save');

					//show the dialog!
					$('#editModal').modal('toggle');
				});


				/////////////////////////////////////////
				// edit button - comes from GRID only
				$('#btn_edit').live('click', function(e) {
					//hide any alert
					hidealert();

					//set the recid to public variable so we can use it on callback
					episode = $(this).attr('data-name');

					//ask db for record
					var episodesRef = new Firebase('https://csp.firebaseio.com/events/' + eventname + "/episodes/" + episode);
					episodesRef.on('value', function(snapshot) {
						var res = snapshot.val()// get the firebase result as json

						//set button text update
						$('#btn_editModalsave').text('update');

						//set the db values to textboxes
						$('#editModalTitle').val(res.title);
						$('#editModalDescr').val(res.description);
					});

					//show the dialog!
					$('#editModal').modal('toggle');
				});


				////////////////////////////////////////
				// delete button - comes from GRID only
				$('#btn_delete').live('click', function(e) {

					//store ID to accept delete button on modal dialog
					$('#btn_delModalDelete').data('data-name', $(this).attr('data-name'));
					//$(this).attr('data-name'));

					//show the dialog!
					$('#deleteModal').modal('toggle');

				});

				//////////////////////////
				// delete button on modal
				$('#btn_delModalDelete').live('click', function(e) {
					var epidoseDEL = new Firebase('https://csp.firebaseio.com/events/' + eventname + "/episodes/" + $(this).data('data-name'));

					epidoseDEL.remove();

					//hide modal
					$('#deleteModal').modal('hide');

				});

				//////////////////////////////////////////////////////////////////////////////////////////////////
				////////////////////  *EDIT*      editModal   (cancel + save update events ///////////////////////
				//////////////////////////////////////////////////////////////////////////////////////////////////

				////////////////////////////////////////////
				// Modal Dialog SAVE button for save+update
				$('#btn_editModalsave').live('click', function(e) {
					var title = $.trim($('#editModalTitle').val());

					//on insert mode only
					if ($('#btn_editModalsave').text() == 'save') {
						console.log()
						//normalize for dbase node (ID)
						episode = title.replace(/[^a-zA-Z0-9\\s]/g, "-").toLowerCase();
					}

					//validation if the episode node exists
					var validation = new Firebase('https://csp.firebaseio.com/events/' + eventname + "/episodes");

					//use of callback - https://gist.github.com/anantn/4323949
					validation.child(episode).once('value', function(snapshot) {
						var exists = (snapshot.val() !== null);
						recExistsCallback(exists);
					});

				});

				/////////////////////////
				//insert+update callback
				/////////////////////////
				function recExistsCallback(exists) {
					//for update, use the backdoor so no need to write the same code
					//--the node ID will be as was before...

					if (exists && $('#btn_editModalsave').text() == 'save') {//and also is on insertion mode
						$("#warnUI").html("Episode name is locked, you cant use it.\r\nPlease edit it and try again!");
						$("#warnUI").show();
					} else {//insert or update

						//common variables
						var title = $.trim($('#editModalTitle').val());
						var descr = $.trim($('#editModalDescr').val());

						episodesRef = new Firebase('https://csp.firebaseio.com/events/' + eventname + "/episodes/" + episode);

						episodesRef.set({
							title : title,
							description : descr
						});

						//hide any warning
						$("#warnUI").hide();

						//show success
						if ($('#btn_editModalsave').text() == 'save')
							$("#successUI").html("Successfully added!");
						else
							$("#successUI").html("Successfully updated!");

						$("#successUI").show();

						//after 1sec run the hidealert
						window.setTimeout(hidealert, 2000);

						//hide modal
						$('#editModal').modal('hide');
					}
				}

				function hidealert() {
					//hide any warning
					$("#warnUI").hide();
					$("#successUI").hide();
					$('#editModalTitle').val('');
					$('#editModalDescr').val('');

				}

				/////////////////
				// close button
				$('#btn_editModalcancel').live('click', function(e) {
					$('#editModal').modal('hide');
				});

			});
		</script>
		



//html
		<!-- Edit Modal Dialog-->
		<div id="editModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
							&times;
						</button>
						<h4 class="modal-title">Edit episode</h4>
					</div>
					<div class="modal-body">

						<div class="alert alert-danger" id="warnUI" style="display:none">

						</div>

						<h3>Title :</h3>
						<input id="editModalTitle" type="text" class="form-control" placeholder="Title">

						<h3>Description :</h3>
						<textarea  id="editModalDescr" rows="4" cols="50" class="form-control" placeholder="Description"></textarea>
					</div>
					<div class="modal-footer">
						<button id="btn_editModalsave" class="btn btn-lg btn-primary">
							update
						</button>
						<button id="btn_editModalcancel" class="btn btn-lg btn-success">
							cancel
						</button>
					</div>
				</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
		
		

		<!-- Delete Modal Dialog-->
		<div id="deleteModal" tabindex="-1" class="modal fade">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
							&times;
						</button>
						<h4 class="modal-title">Modal title</h4>
					</div>
					<div class="modal-body">
						<p>
							One fine body&hellip;
						</p>
					</div>
					<div class="modal-footer">
						<button id="btn_delModalCancel" type="button" class="btn btn-lg btn-success" data-dismiss="modal">
							Close
						</button>
						<button id="btn_delModalDelete" data-name='' type="button" class="btn btn-lg  btn-danger">
							Delete
						</button>
					</div>
				</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->