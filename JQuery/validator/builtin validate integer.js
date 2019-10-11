

		var validatoroCAUSE = $("#formoCAUSE").validate({
			rules : {
				oCAUSE_name : {
					required : true
				},
				oCAUSE_goal : {
					required : true,
					number: true,
					greaterThan: '#oCAUSE_goalnow'
				},
				oCAUSE_goalCredits : {
					required : true,
					currency : true
				},
				oCAUSE_goalnow : {
					required : true,
					number: true
				},
				oCAUSECOMPANY_ref : {
					valueNotEquals : '-Choose-'
				}
			},
			messages : {
				oCAUSE_name : 'Required field',
				oCAUSE_goal : 'Goal must be greater than Goal NOW',
				oCAUSE_goalCredits : 'Please enter a valid amount',
				oCAUSECOMPANY_ref : 'Required field',
				oCAUSE_goalnow : 'Please enter a valid amount'
			}
		});