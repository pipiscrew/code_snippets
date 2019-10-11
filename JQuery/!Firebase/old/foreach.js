//https://www.firebase.com/docs/javascript/datasnapshot/foreach.html

//1st way (using build in function)
		timelinePoints.on('value', function(timelinePoints2) {

			//for each timeline POINT
			timelinePoints2.forEach(function(pointDetails) {
//				console.log(pointDetails.name()); // take the ID - aka - POINT for timeline ex. 88,25.
//				console.log(pointDetails.val()); // take json OBJ contains all the votes for the spefic POINT
//										 			needed when it has more than 1vote for the same POINT
				
				 pointDetails.forEach(function(pointDetails2) {
					 console.log(pointDetails2.val().vote);
					 console.log(pointDetails2.val().user);
					 console.log(pointDetails2.val().date);
					 console.log(pointDetails2.val().comment);
											

//2nd way
					episodesRef.on('value', function(snapshot) {
						if (snapshot.val() != null) {
						
							snapshot.forEach(function(episodeDetails) {
								console.log(episodeDetails.val().title);
								
								recID = episodeDetails.name();
								
								new_contents = "<tr><td>" + episodeDetails.val().title + "</td><td>" + episodeDetails.val().description + "</td><td>" + "</td><td>" + "</td><td>" + "<button id='btn_edit' data-name='" + recID + "' class='btn btn-sm btn-block btn-primary'>edit</button>" + "<button id='btn_delete' data-name='" + recID + "' data-ename='" + episodeDetails.val().title + "' class='btn btn-sm btn-block btn-primary'>delete</button>" + "</td></tr>" + new_contents;
							
								});

							$("#ins_row").html(new_contents);

						} else// no resultset
							$("#ins_row").html("");
					});
								
//manual way
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

								recID = key.toString();
								new_contents = "<tr><td>" + episodeDetails["title"] + "</td><td>" + episodeDetails["description"] + "</td><td>" + "</td><td>" + "</td><td>" + "<button id='btn_edit' data-name='" + recID + "' class='btn btn-sm btn-block btn-primary'>edit</button>" + "<button id='btn_delete' data-name='" + recID + "' data-ename='" + episodeDetails["title"] + "' class='btn btn-sm btn-block btn-primary'>delete</button>" + "</td></tr>" + new_contents;
							}

							$("#ins_row").html(new_contents);

						} else// no resultset
							$("#ins_row").html("");
					});