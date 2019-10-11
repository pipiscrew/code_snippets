 for (var i = 0; i < jArray_proposals.length; i++)
 {
	combo_proposals_rows += "<tr><td></td><td>" + jArray_proposals[i]["offer_id"] + "</td><td>" + jArray_proposals[i]["offer_proposal_date"] + "</td>" +
	"<td>" + jArray_proposals[i]["user"] + "</td><td>" + jArray_proposals[i]["gen_total"] + "</td><td>" +
	 jArray_proposals[i]["offer_type"] + "</td><td>" + jArray_proposals[i]["offer_sent_by_mail"] + "</td>"
	 "<td>" + 
	 "<a href='javascript:showmailmodal(" + jArray_proposals[i]["offer_id"] + ")' class='btn btn-primary btn-xs' style='margin:5px'>ReSend</a>" +
	 "<a href='http://x.com/proposal/index.php?rec_id=" + jArray_proposals[i]["offer_id"] + "' class='btn btn-primary btn-xs' style='margin:5px'>View</a>" +
	  + "</td></tr>";
 }