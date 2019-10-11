//compact
					if ($('#oCATEGORY_name').val().trim().length == 0) {
						alert("Please enter name");
						return;
					}
					
//
				var v = $('[name=customer_name]').val();
				v=v.trim();
				if (v.length==0)
				{
					alert("Παρακαλώ εισάγετε Επωνυμία");
					return;
				}