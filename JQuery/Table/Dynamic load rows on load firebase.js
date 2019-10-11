		<script type="text/javascript">
			$(function() {

				/////////////////////////////////
				//create reference with Firebase
				var eventsRef = new Firebase('https://csp.firebaseio.com/events');

				var auth = new FirebaseSimpleLogin(eventsRef, function(error, user) {

					if (error | user === null) {
						window.location = "index.html";
					}

					//TODO change with REAL user ID
					var usersRef = new Firebase('https://csp.firebaseio.com/users/' + '1');
					//user.id);

					usersRef.on('value', function(snapshot_users) {
						//console.log(snapshot_users.val());
						var entries_users = snapshot_users.val();

						for (key in entries_users) {
							var entry_users = entries_users[key];
							//console.log(entry_users.id);
							var eventRef = new Firebase('https://csp.firebaseio.com/events/' + entry_users.id + "/info");

							eventRef.on('value', function(snapshot) {
								if (snapshot.val() != null) {

									var new_contents = "";
									$("#ins_row").html(new_contents);

									var entry = snapshot.val();

									new_contents = "<tr><td>" + entry["title"] + "</td><td>" + entry["Picture"] + "</td><td>" + entry["summary"] + "</td><td>" + entry["Info"] + "</td><td>" + entry["HashTAG"] + "</td><td>" + entry["TotalVotes"] + "</td><td>" + entry["Rate"] + "</td><td> <button id='btn_edit' data-name='" + snapshot.bc.path.m[1] + "' class='btn btn-sm btn-block btn-primary'>edit</button>" + "<button id='btn_episodes' data-name='" + snapshot.bc.path.m[1] + "' class='btn btn-sm btn-block btn-primary'>episodes</button>" + "</td></tr>" + new_contents;

//here
									$("#ins_row").html(new_contents);
								}
							});

						}
					});
				});

				/////////////////
				//edit button
				$('#btn_edit').live('click', function(e) {
					// console.log(e);
					var str = "event_new.html?event=" + $(this).attr('data-name');
					window.location = (str);
				});
				
				/////////////////
				//episodes button
				$('#btn_episodes').live('click', function(e) {
					//console.log(e);
					var str = "episodes.html?event=" + $(this).attr('data-name');
					window.location = (str);
				});

			});

		</script>

	</head>

	<body>
		<!-- Dynamic table -->
		<table class="table table-bordered table-striped table-hover">
			<thead>
				<tr>
					<th>Name</th>
					<th>Picture</th>
					<th>Description</th>
					<th>Info</th>
					<th>HashTAG</th>
					<th>TotalVotes</th>
					<th>Rate</th>
					<th>Operations</th>
				</tr>
			</thead>
//here
			<tbody id="ins_row">

			</tbody>
		</table>
	</body>
</html>
