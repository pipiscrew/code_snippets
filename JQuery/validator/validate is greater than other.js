	// validation compare two integers
	$.validator.addMethod("greaterThan", function (value, element, param) {
	  var $min = $(param);
	  if (this.settings.onfocusout) {
	    $min.off(".validate-greaterThan").on("blur.validate-greaterThan", function () {
	      $(element).valid();
	    });
	  }
	  return parseInt(value) > parseInt($min.val());
	}, "Must be greater than to field 1");
	
	
	
			var validatoroCAUSE = $("#formoCAUSE").validate({
			rules : {
				oCAUSE_name : {
					required : true
				},
				oCAUSE_goal : {
					required : true,
					currency : true,
					greaterThan: '#oCAUSE_goalnow'
				},
				oCAUSE_goalCredits : {
					required : true,
					currency : true
				},
				oCAUSE_goalnow : {
					required : true,
					currency : true
				},
				oCAUSECOMPANY_ref : {
					valueNotEquals : '-Choose-'
				}
			},
			messages : {
				oCAUSE_name : 'Required field',
				oCAUSE_goal : 'Please enter a valid amount',
				oCAUSE_goalCredits : 'Please enter a valid amount',
				oCAUSECOMPANY_ref : 'Required field',
				oCAUSE_goalnow : 'Please enter a valid amount'
			}
		});