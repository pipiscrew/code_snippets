//http://jqueryvalidation.org/url-method/
				    var validatorOFFER_PAGE_DETAILS = $("#formOFFER_PAGE_DETAILS").validate({
				        rules : {
				             domain : { url: true },
				             website : { url: true },
				        },
				        messages : {
				            domain : 'A valid website or an empty field',
				            website : 'A valid website or an empty field',
				        }
				    });