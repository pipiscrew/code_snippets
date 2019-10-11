	if (competitionDetails.val().bids!=null){
		var bids = competitionDetails.child('bids');
		
		tbl += "<td>" + bids.numChildren()  + "</td>";
	}
	else 
		tbl += "<td>0</td>";