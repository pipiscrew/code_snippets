				function showmailmodal(rec_id)
				{
			 		var row = $('#lead_proposals_tbl').bootstrapTable('getSelections');

			 		if (row.length>0)
			 		{
						var mailbody = "Αξιότιμε κύριε " + row[0].company_manager_name + ",<br><br>Σας επισυνάπτω το Link της προσφορά για τις υπηρεσίες μας στο Facebook.<br><br>";
						mailbody+= "<a href='http://watertron.com/proposal/?j=" + row[0].guid + "' target='_blank'>Proposal</a><br><br>";
						mailbody+= "Ο κωδικός για να δείτε την προσφορά είναι: <b>" + row[0].guid_solution + "</b><br><br>"
						mailbody+="Η προσφορά θα είναι διαθέσιμη online για 10 ημέρες.<br><br>Είμαι στην διάθεσή σας για οποιαδήποτε διευκρίνηση χρειαστείτε.<br><br><br>";
						mailbody+= "<span style='color:rgb(102,102,102)'>	With regards,<br><?=$_SESSION['u'];?><br><?=$_SESSION['u_sign'];?></span><br><font size='1' color='#666666'>	<img src='https://lh4.googleusercontent.com/-qhw8okUHR1U/UzwX6pABRaI/AAAAAAAAAe0/K1JvbXpwufs/w415-h61-no/Signature.png' width='200' height='29' class='CToWUd'><br></font><span style='font-family:verdana,geneva;font-size:x-small'>	16 Beaufort Court,<br>Canary Wharf<br>E14 9XL London, UK</span><br><b style='font-size:x-small'>	<a href='mailto:n.cookies@watertron.com' target='_blank'>		Email us	</a></b><br><font size='1' color='#666666'>	<b>		<a href='http://ww.facebook.com/watertron' target='_blank'>			Go To Facebook Page		</a>	</b></font><br><font size='1' color='#666666'>	<b>		<a href='http://www.watertron.com/' target='_blank'>			Go To Website		</a>	</b></font><br><font color='#666666'>	<b style='font-size:x-small'>		UK:&nbsp;		<a value='+442032390395'>			+44 20 32 39 0395		</a>	</b></font><br><font size='1' color='#666666'>	<b>		Greece:&nbsp;		<a value='+302155309484'>			+30 215 530 9484		</a>	</b></font><br><font color='#808080' face='Verdana, sans-serif'>	<span style='font-size:11px'>		- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -&nbsp;	</span></font><br><span style='color:gray;font-family:Verdana,sans-serif;font-size:8pt'>	This e-mail and any attached files are confidential and may also be legally privileged.</span><br><span style='color:gray;font-family:Verdana,sans-serif;font-size:8pt'>	They are intended solely for the intended addressee.</span><font color='#222222' face='Calibri, sans-serif'>	&nbsp;</font><span style='color:gray;font-family:Verdana,sans-serif;font-size:8pt'>	If you are not the addressee,</span><br><span style='color:gray;font-family:Verdana,sans-serif;font-size:8pt'>	please e-mail it back to the sender and then immediately, permanently delete it.</span><br><span style='color:gray;font-family:Verdana,sans-serif;font-size:8pt'>	Do not read, print, re-transmit, store or act in reliance on it.</span><br><span style='font-size:8pt;font-family:Webdings;color:green'>	P</span>&nbsp;<span style='font-size:8pt;font-family:Verdana,sans-serif;color:gray'>	Please consider the environment before printing this e-mail.</span>";
					}
				}
				
			<table id="lead_proposals_tbl"
	           data-striped=true data-click-to-select="true" data-single-select="true">
				<thead>
					<tr>
						<th data-field="state" data-checkbox="true" ></th>
						<th data-field="id" >ID</th> 
						<!--data-visible="false"-->
						<th data-field="col_descr" data-sortable="true">Offer Date Start</th>
						<th data-sortable="true">Seller</th>
						<th data-sortable="true">Total Cost &euro;</th>
						<th data-sortable="true">Type</th>
						<th data-sortable="true">Email Sent</th>
						<th data-sortable="true">Seen</th>
						<th data-field="approved" data-sortable="true" data-formatter="approve_format">Approved</th>
						<th data-sortable="false">Actions</th>
						<th data-field="guid" data-visible="false">guid</th>
						<th data-field="guid_solution" data-visible="false">guidsol</th>
						<th data-field="company_manager_name" data-visible="false">company_manager_name</th>
						<th data-field="offer_email" data-visible="false">offer_email</th>
						<th data-field="offer_company_name" data-visible="false">offer_company_name</th>
					</tr>
				</thead>

				<tbody id="lead_proposals_rows"></tbody>
			</table>