//onClick event 
//http://stackoverflow.com/questions/1455223/catch-checked-change-event-of-a-checkbox
		$("#isOffer").click( function(){
		   console.log("cheecked offer");
		   if( $(this).is(':checked') ) alert("checked");
		});

		$("#isContest").click( function(){
		   console.log("cheecked contest");
		});