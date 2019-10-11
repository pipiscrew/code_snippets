		$.post('tab_dashboard_qa_send_mail_get_guid.php',function(result)
			{
				var info = JSON.parse(result);
				
				var mailbody="Αξιότιμε http://w.com/qa?q=" + info.guid;

				$("#mail_subject").val("w QA");
				$("#mail_body").jqteVal(mailbody);
				$("#mail_qa_id").val(info.last_id);

				loading.remove();
				
				//open
				$('#modaloMAIL').modal('toggle');
			});
			


//http://api.jquery.com/jquery.post/


// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.post( "example.php", function() {
  alert( "success" );
})
  .done(function() {
    alert( "second success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "finished" );
});



//example
	$.post('subscribe.php',	{fb_member_id:user.id, fullname:user.name, mail:user.email, gender:user.gender, timezone:user.timezone, app_name:'skag20140901contest'},function()
		{
			//                    $('.screen01').hide();
		});