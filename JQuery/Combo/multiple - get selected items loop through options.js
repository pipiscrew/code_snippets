//https://github.com/davidstutz/bootstrap-multiselect

					var selectedCauses = get_multiselected('#causes');

					if (selectedCauses.length == 0)
						alert("Please select cause(s)");
					else
						alert(selectedCauses[0][0]);
						
.
.
.
						var db5c = new Firebase(newID + '/causes');
						for (var causeNo = 0; causeNo < selectedCauses.length; causeNo++) {
							db5c.push({
								ref : selectedCauses[causeNo][0],
								text : selectedCauses[causeNo][1]
							});

						}

						

			//get the selected items to an array (val,text)
			function get_multiselected($el) {
				var ret = true;
				var arr = [];
				var i = 0;

				$('option', $el).each(function(element) {
					if ($(this).prop('selected')) {
						if ($(this).val() != 'multiselect-all') {

							arr[i] = [];
							arr[i][0] = $(this).val();
							arr[i][1] = $(this).text();

							i += 1;
						}
					}
				});

				return arr;
			}