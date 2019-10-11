						/////////////////////////////////////
						//list active competitions to table
						var db2 = new Firebase('https://testarea.firebaseio.com/competitions');
						var db2Query = db2.startAt(time1); //if needed
						db2Query.on('value', function(snapshot) {

							if (snapshot.val() === null) {
								alert('I got a null result.');
							} else {
								//console.log(snapshot.val());
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