//http://stackoverflow.com/questions/241145/jquery-validate-plugin-how-to-create-a-simple-custom-rule

//original
				jQuery.validator.addMethod("greaterThanZero", function(value, element) {
				    return this.optional(element) || (parseFloat(value) > 0);
				}, "* Amount must be greater than zero");
				And then applying this like so:
				
				$('validatorElement').validate({
				    rules : {
				        amount : { greaterThanZero : true }
				    }
				});


//modded with !=null
				$.validator.addMethod("greaterThanZero", function(value, element) {
				    return (value!=null && parseFloat(value) > 0);
				}, "* Amount must be greater than zero");	