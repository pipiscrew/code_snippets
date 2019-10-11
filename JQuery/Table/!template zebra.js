//js
								var tbl = "";
								snapshot.forEach(function(competitionDetails) {
									console.log(competitionDetails.val().Title);
									tbl += "<tr>"
									tbl += "<td><img src=" + competitionDetails.val().Logo + "></td>";
									tbl += "<td>" + competitionDetails.val().Title + "</td>";
									tbl += "<td>" + competitionDetails.val().Comment + "</td>";
									tbl += "<td>" + getGMTfromUTC(competitionDetails.val().dateStart) + "</td>";
									tbl += "<td>" + getGMTfromUTC(competitionDetails.val().dateEnd) + "</td>";
									tbl += "<td>countbids?</td>";
									tbl += "<td>" +  + "</td>";
									tbl += "</tr>"

								});
								
								$('#table_opencontests').html(tbl);
								
//http://getbootstrap.com/css/#tables
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