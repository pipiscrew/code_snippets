//http://stackoverflow.com/questions/280759/jquery-validate-how-to-add-a-rule-for-regular-expression-validation

				$.validator.addMethod("regx", function(value, element, regexpr) {          
				    return regexpr.test(value);
				}, '');
				
				
			var validatorFRM = $("#offer_FORM").validate({
				rules : {
					page_url : {
						required : true,
						regx: /^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i
					}
					
	
				},
				messages : {
					page_url : 'Required Field'
				}
			});