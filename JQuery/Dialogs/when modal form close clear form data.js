//events
//http://getbootstrap.com/javascript/#modals-usage
				//modal form trigger when close - clear the formdata
                $('#newCustomer').on('hidden.bs.modal', function() {
                    $('#formADDNEW').trigger("reset");
                })